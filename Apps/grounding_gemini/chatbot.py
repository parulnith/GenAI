import os
import gradio as gr
from google import genai
from google.genai.types import Tool, GenerateContentConfig, GoogleSearch

# Initialize the Gemini API client
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=GEMINI_API_KEY)

# Function to format responses properly
def format_response(ai_output):
    """
    Formats AI response and displays sources separately.
    """
    try:
        if not ai_output or not ai_output.candidates:
            return "⚠️ No results found. Try asking something else!"

        response_text = ai_output.candidates[0].content.parts[0].text
        sources_info = ""

        # Extract sources for better readability
        grounding_info = getattr(ai_output.candidates[0], "grounding_metadata", None)
        if grounding_info:
            sources = getattr(grounding_info, "grounding_chunks", [])
            for idx, src in enumerate(sources):
                web_details = getattr(src, "web", None)
                if web_details:
                    source_name = web_details.title
                    source_url = web_details.uri
                    sources_info += f"🔗 [{source_name}]({source_url})\n"

            if sources_info:
                response_text += "\n\n**🔍 Sources:**\n" + sources_info

        return response_text

    except Exception as e:
        return f"Processing Error: {str(e)}"

# Fetch AI Response (with Google Search toggle)
def fetch_response(user_query, enable_google_search):
    """
    Fetches a response from the Gemini API, with optional Google Search.
    """
    try:
        config = GenerateContentConfig(
            temperature=0.3,
            top_p=0.8,
            top_k=40,
            safety_settings=[]
        )

        if enable_google_search:
            config.tools = [Tool(google_search=GoogleSearch())]

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[user_query],
            config=config
        )

        return format_response(response)

    except Exception as e:
        return f"AI Error: {str(e)}"

# Define CSS for Chatbot UI
custom_css = """
.submit-button {
  background-color: #4CAF50;
  color: white;
  font-size: 18px;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45A049;
}

.clear-button {
  background-color: #FF4500;
  color: white;
  font-size: 18px;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.clear-button:hover {
  background-color: #E63900;
}
"""

# Chatbot UI with Google Search Toggle
def build_chatbot():
    """
    Creates the chatbot UI with a real-time search option and improved response formatting.
    """
    with gr.Blocks(css=custom_css) as chatbot_ui:
        gr.Markdown("# 🌍 Grounding with Gemini 🔎")

        with gr.Row():
            with gr.Column(scale=2):
                chat_history = gr.Chatbot(height=400, show_copy_button=True, render_markdown=True, container=True)

                user_input = gr.Textbox(
                    placeholder="Ask a real-time question...", label="", lines=1
                )

                with gr.Row():
                    submit_button = gr.Button("🔍 Search", elem_classes="submit-button")
                    clear_button = gr.Button("❌ Clear", elem_classes="clear-button")

                enable_search_mode = gr.Checkbox(
                    label="Use Google Search for real-time info",
                    value=True,
                    info="AI will fetch data from search results."
                )

                gr.Markdown("### 📝 Try These Real-Time Questions:")
                sample_questions = gr.Examples(
                    examples=[
    
                        ["Who is the President of the United States?"],
                        ['When is the next match in ICC Champions Trophy?'],
                        ['Which movie won Best Picture at the Oscars 2025?'],
                        
                    ],
                    inputs=user_input,
                    examples_per_page=3
                )

        def handle_query(user_query, history, search_enabled):
            response = fetch_response(user_query, search_enabled)
            history.append((user_query, response))
            return "", history

        def clear_input():
            return ""

        submit_button.click(handle_query, inputs=[user_input, chat_history, enable_search_mode], outputs=[user_input, chat_history])
        clear_button.click(clear_input, outputs=[user_input])

    return chatbot_ui

# Run Real-Time Search Chatbot
if __name__ == "__main__":
    app = build_chatbot()
    app.launch(server_name="0.0.0.0", share=True)
