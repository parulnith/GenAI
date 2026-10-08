// Site content in English (en) and Hindi (hi): dream paths, worlds and Class 4-7 puzzles.
// To add a path or a puzzle, add it here. No other file needs to change.
window.BTJ = {
  // Dream paths: each step earns a skill. Its puzzles are chosen by level:
  // little = Class 1-3, young = Class 4-7, future = Class 8-10.
  // A step with no puzzles points to a world instead.
  paths: [
    {
      id: "space",
      icon: "🚀",
      tint: "#d6e4ff",
      title: { en: "Space Scientist", hi: "अंतरिक्ष वैज्ञानिक" },
      dream: { en: "Explore stars and planets, and build rockets like the scientists at ISRO.", hi: "तारों और ग्रहों को समझो, और ISRO के वैज्ञानिकों की तरह रॉकेट बनाओ।" },
      hero: { en: "Kalpana Chawla grew up in Karnal, Haryana, and became the first woman of Indian origin to fly to space.", hi: "कल्पना चावला हरियाणा के करनाल में पली-बढ़ीं और अंतरिक्ष में जाने वाली भारतीय मूल की पहली महिला बनीं।" },
      india: { en: "In 2023, India's Chandrayaan-3 became the first mission to land near the Moon's south pole.", hi: "2023 में भारत का चंद्रयान-3 चाँद के दक्षिणी ध्रुव के पास उतरने वाला पहला मिशन बना।" },
      // Try this at home, by level: Class 1-3, Class 4-7, Class 8-10. No phone needed.
      atHome: {
        little: { en: "Tonight, look at the Moon and draw its shape. Look again in three days. Did it change?", hi: "आज रात चाँद को देखो और उसका आकार बनाओ। तीन दिन बाद फिर देखो। क्या वह बदला?" },
        young: { en: "Draw the Moon every night for two weeks. Can you guess tomorrow's shape before you look?", hi: "दो हफ़्ते तक हर रात चाँद का चित्र बनाओ। क्या देखने से पहले अगले दिन का आकार बता सकते हो?" },
        future: { en: "Find out why Chandrayaan-3 landed near the Moon's south pole. Hint: scientists hope to find frozen water there.", hi: "पता करो कि चंद्रयान-3 चाँद के दक्षिणी ध्रुव के पास क्यों उतरा। इशारा: वैज्ञानिकों को वहाँ जमी हुई बर्फ़ के रूप में पानी मिलने की उम्मीद है।" }
      },
      steps: [
        { title: { en: "Look up at the sky", hi: "आसमान को देखो" }, skill: { en: "Sky watcher", hi: "आसमान का जासूस" }, puzzles: { little: ["lit-sun"], young: ["sci-sky", "sci-moon"], future: ["fut-gravity"] } },
        { title: { en: "Know your planet", hi: "अपनी धरती को जानो" }, skill: { en: "Earth expert", hi: "धरती विशेषज्ञ" }, puzzles: { little: ["lit-earth-shape"], young: ["geo-cold", "geo-volcano"], future: ["fut-seasons"] } },
        { title: { en: "Think like a scientist", hi: "वैज्ञानिक की तरह सोचो" }, skill: { en: "Pattern finder", hi: "पैटर्न खोजी" }, puzzles: { little: ["lit-pattern"], young: ["maths-pattern"], future: ["fut-lightyear"] } },
        { title: { en: "Talk to computers", hi: "कंप्यूटर से बात करो" }, skill: { en: "Coder", hi: "कोडर" }, puzzles: { little: ["lit-robot"], young: ["code-loop"], future: ["fut-binary"] } },
        { title: { en: "Launch a rocket", hi: "रॉकेट उड़ाओ" }, skill: { en: "Rocket builder", hi: "रॉकेट निर्माता" }, puzzles: [], world: "science" }
      ]
    },
    {
      id: "doctor",
      icon: "🩺",
      tint: "#ffd9de",
      title: { en: "Doctor", hi: "डॉक्टर" },
      dream: { en: "Find out how bodies work, and help people get well.", hi: "जानो कि शरीर कैसे काम करता है, और लोगों को ठीक होने में मदद करो।" },
      hero: { en: "Anandibai Joshi earned her medical degree in 1886 and became one of India's first women doctors.", hi: "आनंदीबाई जोशी ने 1886 में डॉक्टरी की डिग्री ली और भारत की पहली महिला डॉक्टरों में से एक बनीं।" },
      india: { en: "India was declared free of polio in 2014, after crores of children got two drops of vaccine.", hi: "करोड़ों बच्चों को टीके की दो बूँदें पिलाने के बाद, 2014 में भारत को पोलियो-मुक्त घोषित किया गया।" },
      // Try this at home, by level: Class 1-3, Class 4-7, Class 8-10. No phone needed.
      atHome: {
        little: { en: "Wash your hands with soap while you sing a song for 20 seconds. Teach someone at home to do it too.", hi: "20 सेकंड तक एक गाना गाते हुए साबुन से हाथ धोओ। घर में किसी और को भी सिखाओ।" },
        young: { en: "Count your heartbeats for one minute while sitting. Then jump 20 times and count again. What changed?", hi: "बैठे-बैठे एक मिनट तक अपनी धड़कन गिनो। फिर 20 बार कूदो और दोबारा गिनो। क्या बदला?" },
        future: { en: "Make a chart of your heart rate at rest, after walking and after running. Explain the pattern to a grown-up.", hi: "आराम में, चलने के बाद और दौड़ने के बाद अपनी धड़कन का चार्ट बनाओ। किसी बड़े को इसका पैटर्न समझाओ।" }
      },
      steps: [
        { title: { en: "Stop the germs", hi: "कीटाणुओं को रोको" }, skill: { en: "Germ buster", hi: "कीटाणु योद्धा" }, puzzles: { little: ["lit-wash-when"], young: ["sci-germs"], future: ["fut-vaccine"] } },
        { title: { en: "How your body works", hi: "तुम्हारा शरीर कैसे चलता है" }, skill: { en: "Body explorer", hi: "शरीर खोजी" }, puzzles: { little: ["lit-bones"], young: ["sci-heart"], future: ["fut-blood"] } },
        { title: { en: "How animals survive", hi: "जानवर कैसे जीते हैं" }, skill: { en: "Nature detective", hi: "प्रकृति जासूस" }, puzzles: { little: ["lit-fish"], young: ["sci-camel"], future: ["fut-polar"] } },
        { title: { en: "Read the numbers", hi: "संख्याएँ पढ़ो" }, skill: { en: "Pattern finder", hi: "पैटर्न खोजी" }, puzzles: { little: ["lit-pattern"], young: ["maths-pattern"], future: ["fut-average"] } },
        { title: { en: "Your first check-up", hi: "तुम्हारा पहला चेक-अप" }, skill: { en: "Young doctor", hi: "नन्हा डॉक्टर" }, puzzles: [], world: "science" }
      ]
    },
    {
      id: "engineer",
      icon: "🏗️",
      tint: "#ffe9c2",
      title: { en: "Engineer", hi: "इंजीनियर" },
      dream: { en: "Design bridges, dams, machines and buildings that make life better.", hi: "पुल, बाँध, मशीनें और इमारतें बनाओ जो ज़िंदगी आसान करें।" },
      hero: { en: "A. P. J. Abdul Kalam sold newspapers as a boy in Rameswaram, became a rocket engineer, and later President of India.", hi: "ए. पी. जे. अब्दुल कलाम बचपन में रामेश्वरम में अख़बार बेचते थे। वे रॉकेट इंजीनियर बने और फिर भारत के राष्ट्रपति।" },
      india: { en: "The Chenab Bridge in Jammu and Kashmir is the highest railway arch bridge in the world.", hi: "जम्मू-कश्मीर का चिनाब पुल दुनिया का सबसे ऊँचा रेलवे आर्च पुल है।" },
      // Try this at home, by level: Class 1-3, Class 4-7, Class 8-10. No phone needed.
      atHome: {
        little: { en: "Fold a paper boat. Does it float? Put small stones in it, one by one. When does it sink?", hi: "कागज़ की नाव बनाओ। क्या वह तैरती है? उसमें एक-एक करके छोटे पत्थर रखो। वह कब डूबती है?" },
        young: { en: "Build a bridge between two books using only paper. How many coins can it hold before it falls?", hi: "सिर्फ़ कागज़ से दो किताबों के बीच पुल बनाओ। गिरने से पहले वह कितने सिक्के उठा सकता है?" },
        future: { en: "Fold your paper bridge into a zig-zag and test it again. Why does the shape make it stronger?", hi: "कागज़ के पुल को ज़िग-ज़ैग में मोड़कर फिर से परखो। आकार बदलने से वह मज़बूत क्यों हो जाता है?" }
      },
      steps: [
        { title: { en: "Why things float", hi: "चीज़ें क्यों तैरती हैं" }, skill: { en: "Problem solver", hi: "समस्या सुलझाने वाला" }, puzzles: { little: ["lit-float"], young: ["sci-float"], future: ["fut-density"] } },
        { title: { en: "Learn from ancient builders", hi: "पुराने कारीगरों से सीखो" }, skill: { en: "Master planner", hi: "मास्टर प्लानर" }, puzzles: { little: ["lit-triangle"], young: ["hist-indus", "hist-pyramids"], future: ["fut-arch"] } },
        { title: { en: "Think like an engineer", hi: "इंजीनियर की तरह सोचो" }, skill: { en: "Pattern finder", hi: "पैटर्न खोजी" }, puzzles: { little: ["lit-pattern"], young: ["maths-pattern"], future: ["fut-lever"] } },
        { title: { en: "Build a bridge", hi: "पुल बनाओ" }, skill: { en: "Bridge builder", hi: "पुल निर्माता" }, puzzles: [], world: "science" }
      ]
    },
    {
      id: "computer",
      icon: "💻",
      tint: "#d9ccff",
      title: { en: "Computer Engineer", hi: "कंप्यूटर इंजीनियर" },
      dream: { en: "Create apps, games and AI that crores of people use.", hi: "ऐसे ऐप, गेम और AI बनाओ जिन्हें करोड़ों लोग इस्तेमाल करें।" },
      hero: { en: "Raj Reddy was born in a small village in Andhra Pradesh and became the first person of Asian origin to win the Turing Award, the top prize in computing.", hi: "राज रेड्डी आंध्र प्रदेश के एक छोटे से गाँव में पैदा हुए और कंप्यूटर का सबसे बड़ा पुरस्कार, ट्यूरिंग अवॉर्ड, जीतने वाले एशियाई मूल के पहले व्यक्ति बने।" },
      india: { en: "UPI, built in India, lets people pay with a phone, from big malls to small village shops.", hi: "भारत में बना UPI लोगों को फ़ोन से पैसे भेजने देता है, बड़े मॉल से लेकर गाँव की छोटी दुकान तक।" },
      // Try this at home, by level: Class 1-3, Class 4-7, Class 8-10. No phone needed.
      atHome: {
        little: { en: "Give a friend step-by-step instructions to walk from the door to a chair. Did they get there?", hi: "किसी दोस्त को दरवाज़े से कुर्सी तक जाने के लिए एक-एक कदम के निर्देश दो। क्या वह पहुँच पाया?" },
        young: { en: "Write the steps to make a cup of tea, like a program. Ask someone to follow them exactly. Find the bugs!", hi: "चाय बनाने के कदम एक प्रोग्राम की तरह लिखो। किसी से कहो कि बिल्कुल वैसा ही करे। गलतियाँ (बग) ढूँढो!" },
        future: { en: "Design a simple game on paper: its rules, how you win, and what happens each turn. Then build it in Story Code Quest.", hi: "कागज़ पर एक आसान गेम बनाओ: उसके नियम, कैसे जीतते हैं, और हर चाल में क्या होता है। फिर उसे Story Code Quest में बनाओ।" }
      },
      steps: [
        { title: { en: "Give clear instructions", hi: "साफ़ निर्देश दो" }, skill: { en: "Coder", hi: "कोडर" }, puzzles: { little: ["lit-robot"], young: ["code-loop"], future: ["fut-algorithm"] } },
        { title: { en: "Find and fix bugs", hi: "गलती ढूँढो और ठीक करो" }, skill: { en: "Bug hunter", hi: "बग पकड़ने वाला" }, puzzles: { little: ["lit-order"], young: ["code-bug"], future: ["fut-if"] } },
        { title: { en: "Think in patterns", hi: "पैटर्न पहचानो" }, skill: { en: "Pattern finder", hi: "पैटर्न खोजी" }, puzzles: { little: ["lit-pattern"], young: ["maths-pattern"], future: ["fut-binary"] } },
        { title: { en: "Make your own game level", hi: "अपना गेम लेवल बनाओ" }, skill: { en: "Game maker", hi: "गेम मेकर" }, puzzles: [], world: "coding" }
      ]
    },
    {
      id: "artist",
      icon: "🎨",
      tint: "#ffe3f1",
      title: { en: "Artist", hi: "कलाकार" },
      dream: { en: "Paint, design and draw the world in your own colours.", hi: "अपने रंगों से दुनिया को रंगो, डिज़ाइन करो और चित्र बनाओ।" },
      hero: { en: "Raja Ravi Varma, from Kerala, became one of India's most loved painters, and printed his paintings so every family could own one.", hi: "केरल के राजा रवि वर्मा भारत के सबसे प्यारे चित्रकारों में से एक बने, और अपनी पेंटिंग छापकर हर घर तक पहुँचाईं।" },
      india: { en: "Warli painting from Maharashtra tells whole stories using just circles, triangles and lines.", hi: "महाराष्ट्र की वारली चित्रकला सिर्फ़ गोले, त्रिकोण और रेखाओं से पूरी कहानी कह देती है।" },
      // Try this at home, by level: Class 1-3, Class 4-7, Class 8-10. No phone needed.
      atHome: {
        little: { en: "Draw a rangoli with chalk. Make both sides match, like a mirror.", hi: "चॉक से एक रंगोली बनाओ। दोनों तरफ़ शीशे की तरह एक जैसी बनाओ।" },
        young: { en: "Draw a Warli picture of your village or street using only circles, triangles and lines.", hi: "सिर्फ़ गोले, त्रिकोण और रेखाओं से अपने गाँव या गली का वारली चित्र बनाओ।" },
        future: { en: "Paint the same tree in the morning and the evening. How does the light change its colours?", hi: "एक ही पेड़ को सुबह और शाम पेंट करो। रोशनी उसके रंग कैसे बदल देती है?" }
      },
      steps: [
        { title: { en: "Mix colours", hi: "रंग मिलाओ" }, skill: { en: "Colour mixer", hi: "रंगों का जादूगर" }, puzzles: { little: ["lit-colours"], young: ["art-colours"], future: ["fut-rgb"] } },
        { title: { en: "Learn to see", hi: "देखना सीखो" }, skill: { en: "Pattern artist", hi: "पैटर्न कलाकार" }, puzzles: { little: ["lit-symmetry"], young: ["art-rangoli"], future: ["fut-perspective"] } },
        { title: { en: "See the light", hi: "रोशनी को समझो" }, skill: { en: "Light catcher", hi: "रोशनी पकड़ने वाला" }, puzzles: { little: ["lit-shadow"], young: ["sci-sky"], future: ["fut-rainbow"] } },
        { title: { en: "Make your own art", hi: "अपनी कला बनाओ" }, skill: { en: "Young artist", hi: "नन्हा कलाकार" }, puzzles: [], world: "art" }
      ]
    },
    {
      id: "writer",
      icon: "✍️",
      tint: "#c8f5df",
      title: { en: "Writer", hi: "लेखक" },
      dream: { en: "Tell stories, write poems and share ideas that move people.", hi: "कहानियाँ सुनाओ, कविताएँ लिखो और ऐसे विचार बाँटो जो दिल छू लें।" },
      hero: { en: "Rabindranath Tagore wrote poems, songs and stories, and in 1913 became the first Asian to win the Nobel Prize.", hi: "रवींद्रनाथ टैगोर ने कविताएँ, गीत और कहानियाँ लिखीं, और 1913 में नोबेल पुरस्कार जीतने वाले पहले एशियाई बने।" },
      india: { en: "Tagore wrote the national anthems of two countries: India and Bangladesh.", hi: "टैगोर ने दो देशों के राष्ट्रगान लिखे: भारत और बांग्लादेश।" },
      // Try this at home, by level: Class 1-3, Class 4-7, Class 8-10. No phone needed.
      atHome: {
        little: { en: "Make up a rhyme about your favourite animal. Say it out loud to someone at home.", hi: "अपने पसंदीदा जानवर पर एक तुकबंदी बनाओ। घर में किसी को सुनाओ।" },
        young: { en: "Write a short story about a child with a problem to solve. How do they solve it?", hi: "एक ऐसे बच्चे की छोटी कहानी लिखो जिसके सामने कोई मुश्किल है। वह उसे कैसे सुलझाता है?" },
        future: { en: "Write a short poem in Hindi, then try writing it in English. What changed when you translated it?", hi: "हिंदी में एक छोटी कविता लिखो, फिर उसे अंग्रेज़ी में लिखकर देखो। अनुवाद करने पर क्या बदला?" }
      },
      steps: [
        { title: { en: "Play with words", hi: "शब्दों से खेलो" }, skill: { en: "Word player", hi: "शब्दों का खिलाड़ी" }, puzzles: { little: ["lit-letter"], young: ["eng-rhyme"], future: ["fut-simile"] } },
        { title: { en: "Build sentences", hi: "वाक्य बनाओ" }, skill: { en: "Sentence builder", hi: "वाक्य निर्माता" }, puzzles: { little: ["lit-sentence"], young: ["eng-verb"], future: ["fut-tense"] } },
        { title: { en: "Shape a story", hi: "कहानी गढ़ो" }, skill: { en: "Storyteller", hi: "कहानीकार" }, puzzles: { little: ["lit-crow"], young: ["eng-story"], future: ["fut-pov"] } },
        { title: { en: "Write in two languages", hi: "दो भाषाओं में लिखो" }, skill: { en: "Bridge writer", hi: "भाषा सेतु लेखक" }, puzzles: [], world: "translate" }
      ]
    }
  ],

  // Worlds: live ones link out; the others are coming soon.
  worlds: [
    { id: "geography", name: { en: "Earth Explorer", hi: "Earth Explorer" }, status: "live", url: "https://parulnith.github.io/earth-explorer" },
    { id: "coding", name: { en: "Story Code Quest", hi: "Story Code Quest" }, status: "live", url: "https://story-code-quest.vercel.app" },
    { id: "science", name: { en: "Science Lab", hi: "विज्ञान प्रयोगशाला" }, status: "soon" },
    { id: "history", name: { en: "Time Travellers", hi: "समय यात्री" }, status: "soon" },
    { id: "english", name: { en: "English Club", hi: "इंग्लिश क्लब" }, status: "soon" },
    { id: "translate", name: { en: "Bhasha Bridge", hi: "भाषा सेतु" }, status: "soon" },
    { id: "maths", name: { en: "Pattern Park", hi: "पैटर्न पार्क" }, status: "soon" },
    { id: "art", name: { en: "Art Studio", hi: "कला स्टूडियो" }, status: "soon" }
  ],

  // Shown to grown-ups: languages planned after English and Hindi.
  languages: ["தமிழ்", "বাংলা", "తెలుగు", "मराठी", "ಕನ್ನಡ", "ગુજરાતી", "മലയാളം", "ਪੰਜਾਬੀ", "ଓଡ଼ିଆ"],

  // Class 4 to 7 puzzles (Young Builder). Class 1-3 puzzles are in puzzles-little.js and
  // Class 8-10 puzzles in puzzles-future.js. Mitthu asks first ("think"), gives a hint for each
  // wrong guess ("nudge"), then explains: "young" text for Class 4, "older" for Class 5 to 7.
  puzzles: [
    {
      id: "geo-cold",
      world: "geography",
      keywords: ["cold", "coldest", "ice", "freez", "snow", "antarctic", "ठंड", "बर्फ", "बर्फ़", "अंटार्कटिका"],
      starter: { en: "Where is the coldest place on Earth?", hi: "धरती पर सबसे ठंडी जगह कौन-सी है?" },
      think: { en: "Brrr! Before I tell you, have a guess. Where do you think it's coldest?", hi: "ब्र्र्र! बताने से पहले, तुम अंदाज़ा लगाओ। सबसे ज़्यादा ठंड कहाँ होती होगी?" },
      choices: [
        { text: { en: "The Sahara Desert", hi: "सहारा रेगिस्तान" }, nudge: { en: "Deserts can be chilly at night, but the Sahara is mostly hot. Think about the very bottom of the globe.", hi: "रेगिस्तान में रात को ठंड होती है, पर सहारा ज़्यादातर गर्म रहता है। ग्लोब के बिल्कुल नीचे वाले हिस्से के बारे में सोचो।" } },
        { text: { en: "Antarctica", hi: "अंटार्कटिका" }, correct: true },
        { text: { en: "The top of Mount Everest", hi: "माउंट एवरेस्ट की चोटी" }, nudge: { en: "Everest is freezing! But there's a whole continent that's even colder. Hint: penguins live there.", hi: "एवरेस्ट बहुत ठंडा है! पर एक पूरा महाद्वीप उससे भी ठंडा है। इशारा: वहाँ पेंगुइन रहते हैं।" } }
      ],
      young: { en: "Yes! Antarctica is the coldest place on Earth. It once got down to -89°C. That's much colder than the inside of a freezer!", hi: "हाँ! अंटार्कटिका धरती की सबसे ठंडी जगह है। वहाँ एक बार तापमान -89°C तक पहुँच गया था। यह फ़्रीज़र के अंदर से भी कहीं ज़्यादा ठंडा है!" },
      older: { en: "Correct! Antarctica holds the record: -89.2°C, measured at Vostok Station in 1983. It's so cold because it's high up, its ice reflects sunlight, and it gets no sun at all for months in winter.", hi: "सही! अंटार्कटिका में सबसे कम तापमान -89.2°C दर्ज हुआ, 1983 में वोस्तोक स्टेशन पर। यह इतना ठंडा है क्योंकि यह बहुत ऊँचाई पर है, बर्फ़ धूप को लौटा देती है, और सर्दियों में महीनों तक सूरज नहीं निकलता।" }
    },
    {
      id: "geo-volcano",
      world: "geography",
      keywords: ["volcano", "volcanoes", "lava", "erupt", "magma", "ज्वालामुखी", "लावा"],
      starter: { en: "Why do volcanoes erupt?", hi: "ज्वालामुखी क्यों फटते हैं?" },
      think: { en: "What do you think is pushing the lava up and out?", hi: "तुम्हें क्या लगता है, लावा को ऊपर और बाहर कौन धकेलता है?" },
      choices: [
        { text: { en: "Rain filling up the mountain", hi: "बारिश का पानी पहाड़ में भर जाता है" }, nudge: { en: "Rain cools things down. Think about what's deep underground. It's super hot down there!", hi: "बारिश तो चीज़ों को ठंडा करती है। सोचो, ज़मीन के बहुत नीचे क्या है? वहाँ बहुत गर्मी होती है!" } },
        { text: { en: "Hot melted rock and gas pushing up", hi: "पिघली हुई गर्म चट्टान और गैस ऊपर धकेलती है" }, correct: true },
        { text: { en: "Wind blowing into the top", hi: "हवा ऊपर से अंदर घुसती है" }, nudge: { en: "Wind stays outside the mountain. The push comes from deep below.", hi: "हवा तो पहाड़ के बाहर रहती है। धक्का ज़मीन के बहुत नीचे से आता है।" } }
      ],
      young: { en: "You got it! Deep under the ground, rock gets so hot it melts. Gas bubbles push it up and out, a bit like shaking a fizzy drink!", hi: "बिल्कुल सही! ज़मीन के बहुत नीचे चट्टानें इतनी गर्म होती हैं कि पिघल जाती हैं। गैस के बुलबुले उन्हें ऊपर धकेलते हैं, जैसे सोडा की बोतल हिलाने पर होता है!" },
      older: { en: "Exactly. Melted rock called magma collects under the volcano. Gas dissolved in it expands as it rises, pressure builds, and the magma bursts out as lava, ash and gas.", hi: "सही। पिघली चट्टान, जिसे मैग्मा कहते हैं, ज्वालामुखी के नीचे जमा होती है। ऊपर उठते हुए उसमें घुली गैस फैलती है, दबाव बढ़ता है, और मैग्मा लावा, राख और गैस बनकर बाहर फूट पड़ता है।" }
    },
    {
      id: "sci-sky",
      world: "science",
      keywords: ["sky", "blue", "आसमान", "आकाश", "नीला"],
      starter: { en: "Why is the sky blue?", hi: "आसमान नीला क्यों होता है?" },
      think: { en: "Sunlight looks white. What do you think happens to it when it hits our air?", hi: "सूरज की रोशनी सफ़ेद दिखती है। तुम्हें क्या लगता है, हवा से टकराकर उसका क्या होता है?" },
      choices: [
        { text: { en: "The sky reflects the ocean", hi: "आसमान में समुद्र की परछाईं दिखती है" }, nudge: { en: "Lots of people think that! But the sky is blue over deserts too, far from any sea.", hi: "बहुत लोग ऐसा सोचते हैं! पर रेगिस्तान के ऊपर भी आसमान नीला होता है, जहाँ कोई समुद्र नहीं।" } },
        { text: { en: "Space is painted blue", hi: "अंतरिक्ष नीले रंग से रंगा है" }, nudge: { en: "Space is actually black. Look at photos from the Moon! Something in our air makes the blue.", hi: "अंतरिक्ष तो असल में काला है। चाँद से ली गई तस्वीरें देखो! नीला रंग हमारी हवा से आता है।" } },
        { text: { en: "The air scatters blue light the most", hi: "हवा नीली रोशनी को सबसे ज़्यादा बिखेरती है" }, correct: true }
      ],
      young: { en: "Yes! Sunlight is made of all the colours. When it hits the air, blue light bounces around the most, so blue comes at us from every part of the sky.", hi: "हाँ! सूरज की रोशनी में सारे रंग होते हैं। हवा से टकराकर नीली रोशनी सबसे ज़्यादा इधर-उधर बिखरती है, इसलिए पूरा आसमान नीला दिखता है।" },
      older: { en: "Right! Sunlight contains every colour. Tiny gas molecules in air scatter short wavelengths, like blue, much more than long ones, like red. This is called Rayleigh scattering. At sunset the light passes through more air, the blue is scattered away, and you see reds and oranges.", hi: "सही! सूरज की रोशनी में हर रंग होता है। हवा के छोटे-छोटे अणु नीले जैसे छोटी तरंगों वाले रंगों को लाल से कहीं ज़्यादा बिखेरते हैं। इसे रेले प्रकीर्णन (Rayleigh scattering) कहते हैं। सूर्यास्त के समय रोशनी ज़्यादा हवा से गुज़रती है, नीला बिखर जाता है, और हमें लाल-नारंगी रंग दिखते हैं।" }
    },
    {
      id: "sci-float",
      world: "science",
      keywords: ["float", "floats", "sink", "sinks", "ship", "boat", "तैर", "डूब", "जहाज", "जहाज़", "नाव"],
      starter: { en: "Why do big ships float but a coin sinks?", hi: "बड़ा जहाज़ तैरता है, पर सिक्का क्यों डूब जाता है?" },
      think: { en: "Good puzzle! What do you think matters most for floating?", hi: "अच्छी पहेली! तैरने के लिए सबसे ज़रूरी क्या है?" },
      choices: [
        { text: { en: "How heavy it is", hi: "वह कितना भारी है" }, nudge: { en: "A huge ship is much heavier than a coin, and it floats! So it isn't just weight. Think about its shape.", hi: "बड़ा जहाज़ सिक्के से बहुत भारी है, फिर भी तैरता है! तो बात सिर्फ़ वज़न की नहीं। उसके आकार के बारे में सोचो।" } },
        { text: { en: "Its shape and how much water it pushes away", hi: "उसका आकार, और वह कितना पानी हटाता है" }, correct: true },
        { text: { en: "Its colour", hi: "उसका रंग" }, nudge: { en: "Colour doesn't change floating. Think about the ship's shape: it's hollow inside!", hi: "रंग से तैरने पर कोई फ़र्क नहीं पड़ता। जहाज़ के आकार के बारे में सोचो: वह अंदर से खोखला है!" } }
      ],
      young: { en: "Yes! A ship is shaped like a big bowl full of air. It pushes away lots of water, and the water pushes back up. A coin is small and solid, so it can't push away enough water.", hi: "हाँ! जहाज़ हवा से भरे बड़े कटोरे जैसा होता है। वह बहुत सारा पानी हटाता है, और पानी उसे ऊपर धकेलता है। सिक्का छोटा और ठोस है, इसलिए उतना पानी नहीं हटा पाता।" },
      older: { en: "Exactly. An object floats when the water it pushes aside weighs as much as the object does. A hollow steel hull pushes aside a huge amount of water. A solid coin is denser than water, so it sinks. This is Archimedes' principle.", hi: "बिल्कुल। कोई चीज़ तब तैरती है जब वह अपने वज़न के बराबर पानी हटा दे। स्टील का खोखला जहाज़ ढेर सारा पानी हटाता है। ठोस सिक्का पानी से ज़्यादा घना है, इसलिए डूब जाता है। इसे आर्किमिडीज़ का सिद्धांत कहते हैं।" }
    },
    {
      id: "sci-moon",
      world: "science",
      keywords: ["moon", "phases", "crescent", "चाँद", "चांद", "चंद्रमा"],
      starter: { en: "Why does the Moon change shape?", hi: "चाँद का आकार क्यों बदलता है?" },
      think: { en: "Here's a tricky one. Does the Moon really change shape?", hi: "यह थोड़ी मुश्किल है। क्या चाँद सच में अपना आकार बदलता है?" },
      choices: [
        { text: { en: "Yes, bits break off and grow back", hi: "हाँ, उसके टुकड़े टूटते हैं और फिर उग आते हैं" }, nudge: { en: "The Moon is solid rock, so it stays round! What lights it up at night?", hi: "चाँद ठोस चट्टान का है, वह हमेशा गोल रहता है! रात में उसे रोशनी कौन देता है?" } },
        { text: { en: "No, we see different amounts of its sunny side", hi: "नहीं, हमें उसका धूप वाला हिस्सा कम-ज़्यादा दिखता है" }, correct: true },
        { text: { en: "Earth's shadow covers it every month", hi: "हर महीने धरती की परछाईं उसे ढक लेती है" }, nudge: { en: "Earth's shadow causes eclipses, which are rare. The monthly change is about how the Sun lights the Moon.", hi: "धरती की परछाईं से ग्रहण होता है, जो कभी-कभी ही होता है। हर महीने का बदलाव सूरज की रोशनी से जुड़ा है।" } }
      ],
      young: { en: "You figured it out! The Moon is always round. The Sun lights up half of it, and as it travels around Earth we see more or less of the bright half.", hi: "तुमने पता लगा लिया! चाँद हमेशा गोल रहता है। सूरज उसका आधा हिस्सा चमकाता है, और जब चाँद धरती के चारों ओर घूमता है, तो हमें वह चमकता हिस्सा कम या ज़्यादा दिखता है।" },
      older: { en: "Correct. The Sun always lights half the Moon. As the Moon orbits Earth over about 29.5 days, we see different parts of that lit half: new moon, crescent, quarter, gibbous and full.", hi: "सही। सूरज हमेशा चाँद के आधे हिस्से को रोशन करता है। लगभग 29.5 दिनों में धरती का चक्कर लगाते हुए, हमें उस रोशन हिस्से के अलग-अलग भाग दिखते हैं: अमावस, अर्धचंद्र, आधा चाँद और पूर्णिमा।" }
    },
    {
      id: "sci-camel",
      world: "science",
      keywords: ["camel", "camels", "hump", "ऊँट", "ऊंट", "कूबड़"],
      starter: { en: "What is inside a camel's hump?", hi: "ऊँट के कूबड़ में क्या होता है?" },
      think: { en: "Camels can walk across deserts for days. What do you think is inside the hump?", hi: "ऊँट कई दिनों तक रेगिस्तान में चल सकता है। तुम्हें क्या लगता है, उसके कूबड़ में क्या है?" },
      choices: [
        { text: { en: "Water", hi: "पानी" }, nudge: { en: "Lots of people think that! But camels keep water in their blood and body. What else would help on a long trip with no food?", hi: "बहुत लोग ऐसा सोचते हैं! पर ऊँट पानी अपने ख़ून और शरीर में रखता है। बिना खाने के लंबे सफ़र में और क्या काम आएगा?" } },
        { text: { en: "Fat", hi: "चर्बी" }, correct: true },
        { text: { en: "Extra bones", hi: "ज़्यादा हड्डियाँ" }, nudge: { en: "There are no bones in there. It's soft and squishy! Think about what an animal saves for when food runs out.", hi: "वहाँ कोई हड्डी नहीं है। वह नरम और गुदगुदा होता है! सोचो, खाना ख़त्म होने के लिए जानवर क्या बचाकर रखते हैं?" } }
      ],
      young: { en: "Yes! The hump is full of fat. When there's no food in the desert, the camel uses the fat for energy. The hump even gets smaller when the camel is hungry!", hi: "हाँ! कूबड़ चर्बी से भरा होता है। रेगिस्तान में खाना न मिले तो ऊँट उसी चर्बी से ताक़त लेता है। भूखा होने पर कूबड़ छोटा भी हो जाता है!" },
      older: { en: "Correct. A camel's hump stores fat, up to about 35 kg. Keeping fat in one place, not spread over the whole body, also helps the camel lose heat and stay cool in the desert.", hi: "सही। ऊँट का कूबड़ चर्बी जमा करता है, लगभग 35 किलो तक। चर्बी पूरे शरीर में फैलने के बजाय एक जगह होने से ऊँट को रेगिस्तान की गर्मी में ठंडा रहने में भी मदद मिलती है।" }
    },
    {
      id: "sci-germs",
      world: "science",
      keywords: ["soap", "wash", "germ", "germs", "hands", "clean", "साबुन", "कीटाणु", "हाथ", "धो"],
      starter: { en: "Why do we wash hands with soap?", hi: "हम साबुन से हाथ क्यों धोते हैं?" },
      think: { en: "Water alone can't wash all the germs away. What do you think soap does?", hi: "सिर्फ़ पानी से सारे कीटाणु नहीं धुलते। तुम्हें क्या लगता है, साबुन क्या करता है?" },
      choices: [
        { text: { en: "It makes hands smell nice", hi: "हाथों से अच्छी ख़ुशबू आती है" }, nudge: { en: "A nice smell is a bonus! But soap does real work on germs. Think about how soap gets grease off a plate.", hi: "ख़ुशबू तो बोनस है! पर साबुन कीटाणुओं पर असली काम करता है। सोचो, साबुन चिकनी थाली कैसे साफ़ करता है?" } },
        { text: { en: "It grabs germs so water can wash them away", hi: "कीटाणुओं को पकड़ लेता है ताकि पानी उन्हें बहा दे" }, correct: true },
        { text: { en: "It makes germs fall asleep", hi: "कीटाणुओं को सुला देता है" }, nudge: { en: "Germs don't sleep! Soap does something stronger. Think about how it cleans oily dishes.", hi: "कीटाणु सोते नहीं! साबुन इससे ज़्यादा ताक़तवर काम करता है। सोचो वह चिकने बर्तन कैसे साफ़ करता है।" } }
      ],
      young: { en: "Yes! Soap grabs germs and dirt and pulls them off your skin. It can even break some germs apart! Then water washes them away. Scrub for 20 seconds!", hi: "हाँ! साबुन कीटाणुओं और मैल को पकड़कर त्वचा से हटा देता है। कुछ कीटाणुओं को तो वह तोड़ भी देता है! फिर पानी उन्हें बहा ले जाता है। 20 सेकंड तक रगड़ो!" },
      older: { en: "Correct. Soap molecules have one end that sticks to water and one that sticks to oil. They break the oily outer layer of many germs and trap dirt and microbes so water rinses them away. That's why 20 seconds of scrubbing prevents so many illnesses.", hi: "सही। साबुन के अणुओं का एक सिरा पानी से चिपकता है और दूसरा तेल से। वे कई कीटाणुओं की तैलीय बाहरी परत तोड़ देते हैं और मैल व कीटाणुओं को फँसा लेते हैं, ताकि पानी उन्हें धो दे। इसीलिए 20 सेकंड हाथ धोने से कई बीमारियाँ रुकती हैं।" }
    },
    {
      id: "sci-heart",
      world: "science",
      keywords: ["heart", "heartbeat", "beat", "pulse", "run", "running", "दिल", "धड़क", "दौड़"],
      starter: { en: "Why does my heart beat faster when I run?", hi: "दौड़ने पर दिल तेज़ क्यों धड़कता है?" },
      think: { en: "When you run, your heart speeds up. Why do you think it does that?", hi: "जब तुम दौड़ते हो, तो दिल तेज़ हो जाता है। तुम्हें क्या लगता है, ऐसा क्यों?" },
      choices: [
        { text: { en: "Your heart gets scared", hi: "दिल डर जाता है" }, nudge: { en: "Feelings can change your heartbeat, but running is about your muscles. What do they need to keep going?", hi: "भावनाओं से धड़कन बदल सकती है, पर दौड़ने का संबंध मांसपेशियों से है। उन्हें चलते रहने के लिए क्या चाहिए?" } },
        { text: { en: "To make you warmer", hi: "तुम्हें गर्म रखने के लिए" }, nudge: { en: "Running does warm you up, but that's a side effect. Think about what blood carries to your muscles.", hi: "दौड़ने से गर्मी तो लगती है, पर वह साथ में होने वाली बात है। सोचो, ख़ून मांसपेशियों तक क्या पहुँचाता है?" } },
        { text: { en: "Your muscles need more oxygen, so it pumps blood faster", hi: "मांसपेशियों को ज़्यादा ऑक्सीजन चाहिए, इसलिए दिल ख़ून तेज़ी से पंप करता है" }, correct: true }
      ],
      young: { en: "Yes! When you run, your muscles need more oxygen. Your heart pumps faster to send them more blood, and blood carries the oxygen.", hi: "हाँ! दौड़ते समय मांसपेशियों को ज़्यादा ऑक्सीजन चाहिए। दिल तेज़ी से धड़ककर उन्हें ज़्यादा ख़ून भेजता है, और ख़ून ही ऑक्सीजन लेकर जाता है।" },
      older: { en: "Correct. Working muscles use oxygen quickly. Your heart beats faster and harder to pump more oxygen-rich blood to them, and you breathe faster to take in more oxygen. A resting child's heart beats about 70 to 100 times a minute.", hi: "सही। काम करती मांसपेशियाँ ऑक्सीजन जल्दी ख़र्च करती हैं। दिल तेज़ और ज़ोर से धड़ककर उन तक ऑक्सीजन वाला ख़ून पहुँचाता है, और तुम ज़्यादा ऑक्सीजन लेने के लिए तेज़ साँस लेते हो। आराम के समय बच्चे का दिल एक मिनट में लगभग 70 से 100 बार धड़कता है।" }
    },
    {
      id: "hist-pyramids",
      world: "history",
      keywords: ["pyramid", "pyramids", "egypt", "पिरामिड", "मिस्र"],
      starter: { en: "How were the pyramids built?", hi: "पिरामिड कैसे बने थे?" },
      think: { en: "There were no cranes or trucks 4,500 years ago. How do you think they moved the giant stones?", hi: "4,500 साल पहले न क्रेन थी, न ट्रक। तुम्हें क्या लगता है, विशाल पत्थर कैसे खिसकाए गए?" },
      choices: [
        { text: { en: "With giant machines", hi: "बड़ी-बड़ी मशीनों से" }, nudge: { en: "Engines weren't invented yet! Think about what lots of people could do together.", hi: "तब इंजन बने ही नहीं थे! सोचो, बहुत सारे लोग मिलकर क्या कर सकते हैं?" } },
        { text: { en: "The stones were light", hi: "पत्थर हल्के थे" }, nudge: { en: "Some blocks weigh more than two cars! They needed clever tricks to move them.", hi: "कुछ पत्थर दो कारों से भी भारी हैं! उन्हें खिसकाने के लिए चालाक तरीक़े चाहिए थे।" } },
        { text: { en: "Lots of workers with ramps, sledges and ropes", hi: "बहुत सारे मज़दूरों ने ढलान, लकड़ी की स्लेज और रस्सियों से" }, correct: true }
      ],
      young: { en: "Yes! Thousands of workers dragged the stones on wooden sledges, up ramps, with ropes. They even wet the sand so the sledges slid more easily!", hi: "हाँ! हज़ारों मज़दूरों ने पत्थरों को लकड़ी की स्लेज पर रखकर, रस्सियों से खींचकर ढलान पर चढ़ाया। स्लेज आसानी से फिसले, इसलिए वे रेत को गीला भी करते थे!" },
      older: { en: "Right. About 4,500 years ago, organised teams of skilled workers cut the blocks, dragged them on sledges over sand they wetted to reduce friction, and hauled them up ramps. The Great Pyramid has about 2.3 million blocks.", hi: "सही। लगभग 4,500 साल पहले कुशल कारीगरों की टोलियों ने पत्थर काटे, घर्षण कम करने के लिए गीली रेत पर स्लेज से खींचे, और ढलानों पर ऊपर चढ़ाए। गीज़ा के महान पिरामिड में लगभग 23 लाख पत्थर हैं।" }
    },
    {
      id: "hist-indus",
      world: "history",
      keywords: ["mohenjo", "harappa", "indus", "मोहनजोदड़ो", "हड़प्पा", "सिंधु"],
      starter: { en: "What was special about Mohenjo-daro?", hi: "मोहनजोदड़ो में क्या ख़ास था?" },
      think: { en: "Mohenjo-daro is a city more than 4,500 years old. What do you think was special about it?", hi: "मोहनजोदड़ो 4,500 साल से भी पुराना शहर है। तुम्हें क्या लगता है, उसमें क्या ख़ास था?" },
      choices: [
        { text: { en: "It had drains and neat, straight streets", hi: "वहाँ नालियाँ और सीधी, साफ़-सुथरी सड़कें थीं" }, correct: true },
        { text: { en: "It had cars", hi: "वहाँ कारें थीं" }, nudge: { en: "No cars yet! But its people were amazing planners. Think about keeping a big city clean.", hi: "तब कारें नहीं थीं! पर वहाँ के लोग कमाल के योजनाकार थे। सोचो, बड़े शहर को साफ़ कैसे रखें?" } },
        { text: { en: "It was built on the Moon", hi: "वह चाँद पर बना था" }, nudge: { en: "Ha! It's by the Indus River, in Pakistan today. Think about what a city needs to stay clean.", hi: "हा! वह सिंधु नदी के किनारे है, आज के पाकिस्तान में। सोचो, शहर को साफ़ रखने के लिए क्या चाहिए?" } }
      ],
      young: { en: "Yes! The people of the Indus Valley built straight streets, brick houses and covered drains. Many homes even had their own bathroom!", hi: "हाँ! सिंधु घाटी के लोगों ने सीधी सड़कें, ईंटों के घर और ढकी हुई नालियाँ बनाईं। कई घरों में तो अपना स्नानघर भी था!" },
      older: { en: "Correct. Mohenjo-daro, built around 2500 BCE by the Indus Valley Civilisation, had a planned grid of streets, bricks of standard sizes, covered drains and the Great Bath. Few cities anywhere had drainage this good for thousands of years.", hi: "सही। लगभग 2500 ईसा पूर्व सिंधु घाटी सभ्यता ने मोहनजोदड़ो बनाया। उसमें योजना से बनी सड़कें, एक जैसे नाप की पकी ईंटें, ढकी नालियाँ और विशाल स्नानागार था। हज़ारों साल तक दुनिया के बहुत कम शहरों में इतनी अच्छी नालियाँ थीं।" }
    },
    {
      id: "eng-rhyme",
      world: "english",
      keywords: ["rhyme", "rhymes", "rhyming", "poem", "तुक", "कविता"],
      starter: { en: "What rhymes with cat?", hi: "अंग्रेज़ी शब्द 'cat' से किसकी तुक मिलती है?" },
      think: { en: "Rhyming words end with the same sound. Which of these rhymes with 'cat'?", hi: "तुक वाले शब्दों का आख़िरी हिस्सा एक जैसा सुनाई देता है। इनमें से किसकी तुक 'cat' (बिल्ली) से मिलती है?" },
      choices: [
        { text: "cup", nudge: { en: "Cup starts like cat, but listen to the end: c-AT, c-UP. Different!", hi: "'cup' की शुरुआत 'cat' जैसी है, पर आख़िर सुनो: c-AT, c-UP। अलग है!" } },
        { text: "hat", correct: true },
        { text: "car", nudge: { en: "Close! Car and cat both start with 'ca'. But rhymes match at the end. Say them slowly.", hi: "क़रीब हो! 'car' और 'cat' दोनों 'ca' से शुरू होते हैं। पर तुक आख़िर में मिलती है। धीरे-धीरे बोलकर देखो।" } }
      ],
      young: { en: "Yes! Cat and hat both end in '-at'. Can you think of more? Bat, mat, sat, rat...", hi: "हाँ! 'cat' (बिल्ली) और 'hat' (टोपी) दोनों के आख़िर में '-at' है। और भी सोचो: bat, mat, sat, rat..." },
      older: { en: "Right! 'Cat' and 'hat' share the ending sound '-at'. Poets use rhyme to make lines easy to remember, in Hindi too: 'Machhli jal ki rani hai, jeevan uska paani hai.'", hi: "सही! 'cat' और 'hat' की आख़िरी आवाज़ '-at' एक जैसी है। कवि पंक्तियों को याद रखने लायक़ बनाने के लिए तुक का इस्तेमाल करते हैं, हिंदी में भी: 'मछली जल की रानी है, जीवन उसका पानी है।'" }
    },
    {
      id: "eng-verb",
      world: "english",
      keywords: ["verb", "verbs", "grammar", "noun", "sentence", "क्रिया", "व्याकरण", "वाक्य", "संज्ञा"],
      starter: { en: "What is a verb?", hi: "अंग्रेज़ी में verb (क्रिया) क्या होती है?" },
      think: { en: "Let's find out with a sentence: 'The dog runs fast.' Which word tells you what the dog does?", hi: "एक वाक्य से समझते हैं: 'The dog runs fast.' (कुत्ता तेज़ दौड़ता है।) कौन-सा शब्द बताता है कि कुत्ता क्या कर रहा है?" },
      choices: [
        { text: "dog", nudge: { en: "Dog is who the sentence is about. That's a noun. What is the dog doing?", hi: "'dog' (कुत्ता) तो वह है जिसके बारे में वाक्य है। उसे noun (संज्ञा) कहते हैं। कुत्ता कर क्या रहा है?" } },
        { text: "runs", correct: true },
        { text: "fast", nudge: { en: "Fast tells you HOW it runs. Which word is the action itself?", hi: "'fast' (तेज़) बताता है कि वह कैसे दौड़ता है। काम वाला शब्द कौन-सा है?" } }
      ],
      young: { en: "Yes! 'Runs' is a verb. Verbs are action words: jump, eat, sing, think.", hi: "हाँ! 'runs' (दौड़ता है) एक verb है। Verb काम बताने वाले शब्द हैं: jump (कूदना), eat (खाना), sing (गाना)।" },
      older: { en: "Correct. A verb shows an action (runs, writes) or a state of being (is, seems). Every full sentence needs one. Can you spot the verbs here: 'Pip flew to Delhi and landed softly'?", hi: "सही। Verb (क्रिया) कोई काम (runs, writes) या होना (is, seems) बताती है। हर पूरे वाक्य में एक verb ज़रूर होती है। इसमें verb ढूँढो: 'Pip flew to Delhi and landed softly.'" }
    },
    {
      id: "eng-story",
      world: "english",
      keywords: ["story", "stories", "write", "writing", "writer", "कहानी", "कहानियाँ", "लिख", "लेखक"],
      starter: { en: "What does every good story need?", hi: "हर अच्छी कहानी में क्या ज़रूरी है?" },
      think: { en: "Think of your favourite story. What do you think it can't do without?", hi: "अपनी पसंदीदा कहानी के बारे में सोचो। उसमें किस चीज़ के बिना काम नहीं चलेगा?" },
      choices: [
        { text: { en: "Long, difficult words", hi: "लंबे, कठिन शब्द" }, nudge: { en: "Simple words can make great stories! Think about who the story is about and what happens to them.", hi: "आसान शब्दों से भी बढ़िया कहानियाँ बनती हैं! सोचो, कहानी किसके बारे में है और उसके साथ क्या होता है।" } },
        { text: { en: "A character with a problem to solve", hi: "एक किरदार, जिसके सामने कोई मुश्किल हो" }, correct: true },
        { text: { en: "A sad ending", hi: "दुखी अंत" }, nudge: { en: "Endings can be happy or sad. What makes you want to keep reading to the end?", hi: "अंत ख़ुश भी हो सकता है और दुखी भी। सोचो, तुम्हें आख़िर तक पढ़ते रहने का मन क्यों करता है?" } }
      ],
      young: { en: "Yes! Every story needs a character, and a problem for them to solve. Then we read on to find out what happens!", hi: "हाँ! हर कहानी में एक किरदार चाहिए, और उसके सामने एक मुश्किल। फिर हम पढ़ते रहते हैं कि आगे क्या होगा!" },
      older: { en: "Correct. Most stories follow a character who wants something but faces a problem. The struggle, called the conflict, keeps readers turning pages. Think of the Panchatantra!", hi: "सही। ज़्यादातर कहानियों में एक किरदार कुछ चाहता है, पर उसके रास्ते में मुश्किल आती है। उस मुश्किल से जूझना, जिसे संघर्ष (conflict) कहते हैं, पाठक को बाँधे रखता है। पंचतंत्र की कहानियाँ याद करो!" }
    },
    {
      id: "code-loop",
      world: "coding",
      keywords: ["loop", "loops", "repeat", "code", "coding", "program", "लूप", "कोड", "कोडिंग", "दोहरा"],
      starter: { en: "What is a loop in coding?", hi: "कोडिंग में लूप (loop) क्या होता है?" },
      think: { en: "Imagine a robot needs to take 10 steps. What's the smartest way to tell it?", hi: "सोचो, एक रोबोट को 10 कदम चलना है। उसे बताने का सबसे स्मार्ट तरीक़ा क्या है?" },
      choices: [
        { text: { en: "Write 'step' ten times", hi: "'कदम' दस बार लिखो" }, nudge: { en: "That works, but it's lots of typing! What if it was 1,000 steps?", hi: "यह चलेगा, पर बहुत लिखना पड़ेगा! अगर 1,000 कदम हों तो?" } },
        { text: { en: "Say 'repeat 10 times: step'", hi: "कहो '10 बार दोहराओ: कदम'" }, correct: true },
        { text: { en: "Tell it once and hope", hi: "एक बार बोलो और उम्मीद करो" }, nudge: { en: "Robots do exactly what you say, nothing more! How could you say 'do it again' without writing it again?", hi: "रोबोट बस उतना ही करते हैं जितना कहा जाए! बिना दोबारा लिखे 'फिर से करो' कैसे कहोगे?" } }
      ],
      young: { en: "Yes! That's a loop. A loop tells the computer to do something again and again, so you don't have to write it lots of times.", hi: "हाँ! इसे लूप कहते हैं। लूप कंप्यूटर से कोई काम बार-बार करवाता है, ताकि तुम्हें उसे बार-बार लिखना न पड़े।" },
      older: { en: "Exactly. A loop repeats a block of instructions a set number of times, or until something becomes true. It keeps code short, and changing 10 steps to 1,000 means changing one number.", hi: "बिल्कुल। लूप निर्देशों के एक हिस्से को तय बार, या कोई शर्त पूरी होने तक, दोहराता है। इससे कोड छोटा रहता है, और 10 कदम को 1,000 करने के लिए बस एक संख्या बदलनी पड़ती है।" }
    },
    {
      id: "code-bug",
      world: "coding",
      keywords: ["bug", "bugs", "debug", "debugging", "error", "mistake", "बग", "गलती", "ग़लती", "डीबग"],
      starter: { en: "What is a bug in code?", hi: "कोड में बग (bug) क्या होता है?" },
      think: { en: "A robot was told 'step, step, turn left, step', but it bumped into a wall. What went wrong?", hi: "एक रोबोट से कहा गया: 'कदम, कदम, बाएँ मुड़ो, कदम', पर वह दीवार से टकरा गया। गड़बड़ कहाँ हुई?" },
      choices: [
        { text: { en: "The robot is naughty", hi: "रोबोट शरारती है" }, nudge: { en: "Robots can't be naughty! They do exactly what they're told. So check the instructions.", hi: "रोबोट शरारती नहीं हो सकते! वे वही करते हैं जो कहा जाए। तो निर्देश जाँचो।" } },
        { text: { en: "There's a mistake in the instructions", hi: "निर्देशों में गलती है" }, correct: true },
        { text: { en: "The wall moved", hi: "दीवार खिसक गई" }, nudge: { en: "Walls don't move! Something in the steps must be off. Which one would you check first?", hi: "दीवारें नहीं खिसकतीं! किसी कदम में गड़बड़ है। पहले कौन-सा जाँचोगे?" } }
      ],
      young: { en: "Yes! A mistake in the instructions is called a bug. Finding and fixing it is called debugging. Every coder does it, every day!", hi: "हाँ! निर्देशों की गलती को बग कहते हैं। उसे ढूँढकर ठीक करना डीबगिंग कहलाता है। हर कोडर रोज़ यह करता है!" },
      older: { en: "Correct. A bug is a mistake in a program. Debugging means going through the steps one by one to find where what happened differs from what you wanted. Here, maybe it should have turned right!", hi: "सही। बग प्रोग्राम की गलती है। डीबगिंग का मतलब है एक-एक कदम देखकर पता लगाना कि जो हुआ वह जो चाहा था उससे कहाँ अलग है। यहाँ शायद रोबोट को दाएँ मुड़ना था!" }
    },
    {
      id: "maths-pattern",
      world: "maths",
      keywords: ["pattern", "patterns", "next", "sequence", "maths", "math", "number", "numbers", "पैटर्न", "अगला", "संख्या", "गणित"],
      starter: { en: "What comes next: 2, 4, 6, 8...?", hi: "आगे क्या आएगा: 2, 4, 6, 8...?" },
      think: { en: "Look at how each number changes. What comes after 8?", hi: "देखो हर संख्या कैसे बदल रही है। 8 के बाद क्या आएगा?" },
      choices: [
        { text: "9", nudge: { en: "Check the jumps: 2 to 4, 4 to 6, 6 to 8. How big is each jump?", hi: "छलांगें देखो: 2 से 4, 4 से 6, 6 से 8। हर छलांग कितनी बड़ी है?" } },
        { text: "16", nudge: { en: "That would be doubling 8. But this pattern adds the same amount each time.", hi: "वह तो 8 का दोगुना है। पर यह पैटर्न हर बार उतना ही जोड़ता है।" } },
        { text: "10", correct: true }
      ],
      young: { en: "Yes! The pattern adds 2 each time. These are the even numbers!", hi: "हाँ! यह पैटर्न हर बार 2 जोड़ता है। ये सम संख्याएँ हैं!" },
      older: { en: "Correct. Each number is 2 more than the last, so the rule is 'add 2', or 2 × n. Once you know the rule you can find any term. The 100th is 200!", hi: "सही। हर संख्या पिछली से 2 ज़्यादा है, तो नियम है '2 जोड़ो', यानी 2 × n। नियम पता हो तो कोई भी संख्या निकाल सकते हो। 100वीं संख्या होगी 200!" }
    },
    {
      id: "art-colours",
      world: "art",
      keywords: ["mix", "mixing", "colour", "colours", "color", "colors", "paint", "painting", "yellow", "green", "रंग", "मिला", "पीला", "हरा", "पेंट"],
      starter: { en: "What do you get when you mix blue and yellow paint?", hi: "नीला और पीला रंग मिलाने से क्या बनता है?" },
      think: { en: "Let's mix paints! Blue and yellow together make...?", hi: "चलो रंग मिलाएँ! नीला और पीला मिलकर बनाते हैं...?" },
      choices: [
        { text: { en: "Purple", hi: "बैंगनी" }, nudge: { en: "Purple comes from red and blue. Think about grass, or a fresh leaf...", hi: "बैंगनी तो लाल और नीले से बनता है। घास या ताज़ी पत्ती के बारे में सोचो..." } },
        { text: { en: "Green", hi: "हरा" }, correct: true },
        { text: { en: "Orange", hi: "नारंगी" }, nudge: { en: "Orange comes from red and yellow. What colour is a parrot?", hi: "नारंगी लाल और पीले से बनता है। तोते का रंग कैसा होता है?" } }
      ],
      young: { en: "Yes! Blue and yellow make green. Red, yellow and blue are called primary colours, and you can mix them to make lots more!", hi: "हाँ! नीला और पीला मिलकर हरा बनता है। लाल, पीला और नीला मुख्य रंग हैं, और इन्हें मिलाकर बहुत सारे रंग बनते हैं!" },
      older: { en: "Correct. Paint soaks up some colours of light and reflects the rest. Blue paint and yellow paint both reflect some green, so when you mix them, green is the colour that's left. This is called subtractive mixing.", hi: "सही। पेंट कुछ रंगों की रोशनी सोख लेता है और बाक़ी लौटा देता है। नीला और पीला, दोनों थोड़ा हरा लौटाते हैं, इसलिए मिलाने पर हरा ही बचता है। इसे घटाव वाला रंग-मिश्रण (subtractive mixing) कहते हैं।" }
    },
    {
      id: "art-rangoli",
      world: "art",
      keywords: ["rangoli", "kolam", "symmetry", "mandala", "balanced", "रंगोली", "कोलम", "समरूप", "संतुलित"],
      starter: { en: "Why do rangoli patterns look so balanced?", hi: "रंगोली इतनी संतुलित क्यों दिखती है?" },
      think: { en: "Imagine folding a rangoli design down the middle. What do you notice?", hi: "सोचो, रंगोली को बीच से मोड़ दिया जाए। तुम्हें क्या दिखेगा?" },
      choices: [
        { text: { en: "Both halves match, like a mirror", hi: "दोनों हिस्से शीशे की तरह एक जैसे हैं" }, correct: true },
        { text: { en: "One half is always bigger", hi: "एक हिस्सा हमेशा बड़ा होता है" }, nudge: { en: "Look again! In most rangoli, if you fold it in half, the two sides look the same.", hi: "फिर से देखो! ज़्यादातर रंगोली को आधा मोड़ो तो दोनों तरफ़ एक जैसी दिखती हैं।" } },
        { text: { en: "The shapes are random", hi: "आकार बेतरतीब हैं" }, nudge: { en: "The colours can change, but the shapes repeat in a careful way. Imagine a mirror in the middle.", hi: "रंग बदल सकते हैं, पर आकार ध्यान से दोहराए जाते हैं। बीच में एक शीशा सोचो।" } }
      ],
      young: { en: "Yes! Both halves match like a mirror. That's called symmetry, and it makes patterns feel balanced and beautiful.", hi: "हाँ! दोनों हिस्से शीशे की तरह मिलते हैं। इसे समरूपता (symmetry) कहते हैं, और इसी से पैटर्न संतुलित और सुंदर लगते हैं।" },
      older: { en: "Correct. Rangoli and kolam use symmetry: mirror symmetry, where both halves match, and rotational symmetry, where the design looks the same when you turn it. Artists, architects and nature itself, in flowers and snowflakes, all use symmetry.", hi: "सही। रंगोली और कोलम में समरूपता होती है: दर्पण समरूपता, जहाँ दोनों हिस्से मिलते हैं, और घूर्णन समरूपता, जहाँ घुमाने पर भी डिज़ाइन वैसा ही दिखता है। कलाकार, वास्तुकार और ख़ुद प्रकृति, फूलों और बर्फ़ के कणों में, समरूपता का इस्तेमाल करते हैं।" }
    }
  ]
};
