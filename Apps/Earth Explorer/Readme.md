# Earth Explorer

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/pandeyparul?style=social)](https://twitter.com/pandeyparul)

**Earth Explorer** is an interactive, educational 3D globe game designed to make world geography fun and engaging for kids! Spin the globe, discover hidden places, and test your knowledge with quizzes and clues. Perfect for classrooms or at-home learning.

---

## 🎮 Demo

Want to see Earth Explorer in action?  
[Check out the demo clip I shared on Twitter](https://x.com/pandeyparul/status/1917578603845542365) or watch the gif below:

![Demo](Earth_Explorer.gif)

---

## 🌍 Features

### 1. Explore a 3D Globe

- **Navigate the World**  
  Spin, zoom, and pan around a beautiful 3D Earth powered by CesiumJS.
- **Discover Hidden Places**  
  Find special locations marked on the globe, each with unique facts and clues.

### 2. Interactive Quizzes

- **Quiz Mode**  
  Each hidden place comes with a fun quiz question.
- **Try and Try Again**  
  You get three chances to answer each question.
- **Hints**  
  If you miss all three tries, you can zoom in for a special hint and a final attempt.
- **Scoring System**  
  Earn points based on how quickly you answer—more points for correct answers on the first try!
- **Answer Reveal**  
  If you don’t get it right, the correct answer is revealed so you can learn.

### 3. Progress Tracking & Rewards

- **Scoreboard**  
  Track how many places you’ve discovered and your total score.
- **Treasure Rewards**  
  Find hidden treasures for correct answers and completing the game.


### 4. Reset 

- **Reset View**  
  Instantly return to the starting globe view at any time.

---

## 🚀 Getting Started

1. Clone this repository


2. Set your Cesium Ion Access Token below(Free for research and education). To get your Cesium token:

- Visit [https://ion.cesium.com/](https://ion.cesium.com/) and **sign up** or **log in**.
- Go to your profile → **Access Tokens** → **Create Token**.
- Name your token (e.g., `EarthExplorerToken`) and keep the default settings.
- Click **Create Token** and copy the token string.
- In your `earth_explorer.html` file, find this line:

```javascript
Cesium.Ion.defaultAccessToken = 'YOUR_CESIUM_ION_TOKEN';
```
2. Open the game

Open `earth_explorer.html` in your browser.  
No build step required — everything loads via CDN.


## 📚 Educational Value
Earth Explorer helps elementary and middle school students learn world geography in a hands-on way.
Teachers can use it in class, or students can explore at home while having fun.
You can add more clues or adjust them based on your preferences.