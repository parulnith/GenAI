# Grounded AI Chatbot with Gemini and Google Search

A chatbot application that leverages Google's Gemini model with web search capabilities to provide real-time, factually grounded responses.


## 🎬 Demo

<div align="center">
  <a href="https://www.youtube.com/watch?v=3xuiWs0tB2U">
    <img src="https://img.youtube.com/vi/3xuiWs0tB2U/0.jpg" alt="Demo Video" width="600">
  </a>
  <p><i>Click the image above to watch the demo on YouTube</i></p>
</div>

## 🌟 Features

- **Real-time Search Integration**: Enhanced responses with the latest information from the web
- **Toggle Search Mode**: Switch between using web search and model-only responses
- **Source Attribution**: Automatically cites web sources used to ground responses
- **User-friendly Interface**: Clean UI with responsive design


## 🛠️ Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/grounding_gemini.git
cd grounding_gemini
```


### Step 2: Create and Activate a Virtual Environment
For Mac/Linux:
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate
```

### Step 3: Install Dependencies
```pip install -r requirements.txt```


### Step 4: Set up API Key
1. Obtain a Google AI Studio API key from Google AI Studio
2. Set a environment variable
```
export GEMINI_API_KEY=your_api_key_here```

