import os
import gradio as gr
from google import genai
from google.genai import types

# Ensure 'static' directory exists
os.makedirs("static", exist_ok=True)

def save_binary_file(file_name, data):
    with open(file_name, "wb") as f:
        f.write(data)

def generate(occasion, sender_name, recipient_name, custom_message):
    client = genai.Client(
        api_key=os.environ.get("GEMINI_API_KEY"),
    )

    model = "gemini-2.0-flash-exp-image-generation"
    
    # Predefined prompts for different occasions
    if not custom_message:
        if occasion == "Birthday":
            prompt = (
                f"Generate a design for a birthday card with beautiful floral decorations. "
                f"The text should be large and say:\n\n"
                f"Happy Birthday, {recipient_name}!\n\n"
                f"Wishing you a day filled with joy, laughter, and all your favorite things.\n"
                f"May this next year be your best one yet, bringing you exciting adventures and wonderful memories.\n"
                f"Cheers to you!\n\n"
                f"With love, {sender_name}."
            )
        elif occasion == "Anniversary":
            prompt = (
                f"Create an elegant anniversary card with golden details and a heartfelt message. "
                f"The text should be large and say:\n\n"
                f"Happy Anniversary, {recipient_name}!\n\n"
                f"Celebrating another year of love, laughter, and cherished moments together.\n"
                f"Wishing you endless happiness and many more beautiful years ahead.\n"
                f"Cheers to love!\n\n"
                f"With best wishes, {sender_name}."
            )
        elif occasion == "Christmas":
            prompt = (
                f"Design a festive Christmas card with snowy landscapes and warm holiday colors. "
                f"The text should be large and say:\n\n"
                f"Merry Christmas, {recipient_name}!\n\n"
                f"May your holidays be filled with joy, love, and the magic of the season.\n"
                f"Wishing you peace, happiness, and wonderful moments with your loved ones.\n"
                f"Warmest wishes for a joyful Christmas!\n\n"
                f"With love, {sender_name}."
            )
        elif occasion == "New Year":
            prompt = (
                f"Generate a vibrant New Year greeting card with fireworks and celebration themes. "
                f"The text should be large and say:\n\n"
                f"Happy New Year, {recipient_name}!\n\n"
                f"Wishing you a year filled with success, happiness, and new opportunities.\n"
                f"May each day bring you closer to your dreams and be filled with exciting possibilities.\n"
                f"Cheers to a fantastic year ahead!\n\n"
                f"Best wishes, {sender_name}."
            )
        else:
            prompt = (
                f"Create a heartfelt greeting card with a soft, pastel background. "
                f"The text should be large and say:\n\n"
                f"Thinking of You, {recipient_name}!\n\n"
                f"Just a little note to remind you how special and amazing you are.\n"
                f"Sending you warm thoughts, love, and positivity your way.\n"
                f"Hope your day is as wonderful as you are!\n\n"
                f"With warm wishes, {sender_name}."
            )
    else:
        prompt = f"Generate a greeting card with a nice background based on and clear text that says:\n\nDear {recipient_name},\n\n{custom_message}\n\nFrom, {sender_name}."
    
    contents = [
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=prompt)],
        ),
    ]
    generate_content_config = types.GenerateContentConfig(
        temperature=1,
        top_p=0.95,
        top_k=40,
        max_output_tokens=8192,
        response_modalities=["text", "image"],
    )

    response = client.models.generate_content(
        model=model,
        contents=contents,
        config=generate_content_config,
    )

    for candidate in response.candidates:
        for part in candidate.content.parts:
            if part.inline_data:
                file_name = f"static/{str(occasion).lower()}_card.png"
                save_binary_file(file_name, part.inline_data.data)
                return file_name
    return None

def gradio_interface(occasion, sender_name, recipient_name, custom_message):
    image_path = generate(occasion, sender_name, recipient_name, custom_message)
    if image_path:
        return image_path
    else:
        return "Failed to generate greeting card. Please try again."

with gr.Blocks(theme=gr.themes.Citrus()) as demo:
    gr.Markdown("# 🎨 Card Generator 🎨")
    with gr.Row():
        with gr.Column():
            occasion = gr.Dropdown(
                label="Choose an Occasion",
                choices=["Birthday", "Christmas", "New Year", "Anniversary", "Others"],
                value="Birthday"
            )
            sender_name = gr.Textbox(label="Sender's Name")
            recipient_name = gr.Textbox(label="Recipient's Name")
            custom_message = gr.Textbox(label="Custom Message (Leave blank for auto-generated)")
            generate_button = gr.Button("Generate Greeting Card")
            reset_button = gr.Button("Generate a New Card")
        with gr.Column():
            output_image = gr.Image(label="Generated Greeting Card")

    generate_button.click(
        fn=gradio_interface,
        inputs=[occasion, sender_name, recipient_name, custom_message],
        outputs=output_image
    )

    reset_button.click(
        fn=lambda: ("Birthday", "", "", ""),
        inputs=[],
        outputs=[occasion, sender_name, recipient_name, custom_message]
    )

demo.launch(share=True)
