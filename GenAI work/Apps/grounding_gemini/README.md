# Grounded AI Chatbot with Gemini and Google Search

A chatbot application that leverages Google's Gemini model with web search capabilities to provide real-time, factually grounded responses.

![Gemini Grounding](https://img.shields.io/badge/Gemini-Grounded-blue)
![Python](https://img.shields.io/badge/Python-3.9+-green)

## 🎬 Demo

<div align="center">
  <p><i>Demo video coming soon! Stay tuned to see the chatbot in action.</i></p>
  <!-- Replace with: 
  <video width="100%" controls>
    <source src="path/to/demo-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  -->
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

