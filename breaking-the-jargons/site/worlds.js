// Site content: dream paths, worlds, interests, languages and preview puzzles.
// To add a subject or a path, add it here. No other file needs to change.
window.BTJ = {
  // Dream paths: a child picks what they want to become, and each step is a set of puzzles
  // that earns a skill. A step with no puzzles points to a world instead.
  paths: [
    {
      id: "space",
      title: "Space Scientist",
      icon: "🚀",
      tint: "#d6e4ff",
      dream: "Explore stars and planets, and build rockets and satellites, like the scientists at ISRO and NASA.",
      hero: "Kalpana Chawla grew up in Karnal, Haryana, and became the first woman of Indian origin to fly to space.",
      steps: [
        { title: "Look up at the sky", skill: "Sky watcher", puzzles: ["sci-sky", "sci-moon"] },
        { title: "Know your planet", skill: "Earth expert", puzzles: ["geo-cold", "geo-volcano"] },
        { title: "Think in patterns", skill: "Pattern finder", puzzles: ["maths-pattern"] },
        { title: "Talk to computers", skill: "Coder", puzzles: ["code-loop"] },
        { title: "Launch a rocket", skill: "Rocket builder", puzzles: [], world: "science" }
      ]
    },
    {
      id: "doctor",
      title: "Doctor",
      icon: "🩺",
      tint: "#ffd9de",
      dream: "Find out how bodies work, and help people get well.",
      hero: "Anandibai Joshi earned her medical degree in 1886 and became one of India's first women doctors.",
      steps: [
        { title: "Stop the germs", skill: "Germ buster", puzzles: ["sci-germs"] },
        { title: "How your body works", skill: "Body explorer", puzzles: ["sci-heart"] },
        { title: "How animals survive", skill: "Nature detective", puzzles: ["sci-camel"] },
        { title: "Read the numbers", skill: "Pattern finder", puzzles: ["maths-pattern"] },
        { title: "Your first check-up", skill: "Young doctor", puzzles: [], world: "science" }
      ]
    },
    {
      id: "engineer",
      title: "Engineer",
      icon: "🏗️",
      tint: "#ffe9c2",
      dream: "Design bridges, dams, machines and buildings that make life better.",
      hero: "A. P. J. Abdul Kalam sold newspapers as a boy in Rameswaram, became a rocket engineer, and later President of India.",
      steps: [
        { title: "Why things float", skill: "Problem solver", puzzles: ["sci-float"] },
        { title: "Learn from ancient builders", skill: "Master planner", puzzles: ["hist-indus", "hist-pyramids"] },
        { title: "Think in patterns", skill: "Pattern finder", puzzles: ["maths-pattern"] },
        { title: "Build a bridge", skill: "Bridge builder", puzzles: [], world: "science" }
      ]
    },
    {
      id: "computer",
      title: "Computer Engineer",
      icon: "💻",
      tint: "#d9ccff",
      dream: "Create apps, games and AI that millions of people use.",
      hero: "Ada Lovelace wrote what many call the first computer program in 1843, before computers were even built.",
      steps: [
        { title: "Give clear instructions", skill: "Coder", puzzles: ["code-loop"] },
        { title: "Find and fix bugs", skill: "Bug hunter", puzzles: ["code-bug"] },
        { title: "Think in patterns", skill: "Pattern finder", puzzles: ["maths-pattern"] },
        { title: "Make your own game level", skill: "Game maker", puzzles: [], world: "coding" }
      ]
    },
    {
      id: "artist",
      title: "Artist",
      icon: "🎨",
      tint: "#ffe3f1",
      dream: "Paint, design and draw the world in your own colours.",
      hero: "Raja Ravi Varma, from Kerala, became one of India's most loved painters, and printed his paintings so every family could own one.",
      steps: [
        { title: "Mix colours", skill: "Colour mixer", puzzles: ["art-colours"] },
        { title: "Find balance", skill: "Pattern artist", puzzles: ["art-rangoli"] },
        { title: "See the light", skill: "Light catcher", puzzles: ["sci-sky"] },
        { title: "Make your own art", skill: "Young artist", puzzles: [], world: "art" }
      ]
    },
    {
      id: "writer",
      title: "Writer",
      icon: "✍️",
      tint: "#c8f5df",
      dream: "Tell stories, write poems and share ideas that move people.",
      hero: "Rabindranath Tagore wrote poems, songs and stories, and in 1913 became the first Asian to win the Nobel Prize.",
      steps: [
        { title: "Play with sounds", skill: "Rhyme maker", puzzles: ["eng-rhyme"] },
        { title: "Build sentences", skill: "Sentence builder", puzzles: ["eng-verb"] },
        { title: "Shape a story", skill: "Storyteller", puzzles: ["eng-story"] },
        { title: "Write in two languages", skill: "Bridge writer", puzzles: [], world: "translate" }
      ]
    }
  ],

  worlds: [
    {
      id: "geography",
      subject: "Geography",
      name: "Earth Explorer",
      icon: "🌍",
      tint: "#c9f0ff",
      blurb: "Fly a plane over the world's wonders, from icy Antarctica to the Taj Mahal.",
      interests: ["places", "nature", "animals"],
      status: "live",
      url: "https://parulnith.github.io/earth-explorer",
      cta: "Let's fly!"
    },
    {
      id: "coding",
      subject: "Coding",
      name: "Story Code Quest",
      icon: "🧩",
      tint: "#d9ccff",
      blurb: "Help a character through a story by coding their moves. Name any story and Pip builds a level for it.",
      interests: ["stories", "games", "building"],
      status: "live",
      url: "https://story-code-quest.vercel.app",
      cta: "Start the quest"
    },
    {
      id: "english",
      subject: "English",
      name: "English Club",
      icon: "🗣️",
      tint: "#ffd6e7",
      blurb: "Learn to read, speak and write English step by step, with Pip explaining in your own language when you need it.",
      interests: ["words", "stories"],
      status: "soon"
    },
    {
      id: "translate",
      subject: "Languages",
      name: "Bhasha Bridge",
      icon: "🌉",
      tint: "#d6f0ff",
      blurb: "Translate between English and your own language. Hear a word, say it back, and use it in a sentence.",
      interests: ["words", "stories"],
      status: "soon"
    },
    {
      id: "science",
      subject: "Science",
      name: "Science Lab",
      icon: "🔬",
      tint: "#c8f5df",
      blurb: "Change one thing in an experiment, guess what will happen, then watch and see.",
      interests: ["space", "nature", "animals", "building", "health"],
      status: "soon"
    },
    {
      id: "history",
      subject: "History",
      name: "Time Travellers",
      icon: "🏛️",
      tint: "#ffe0ca",
      blurb: "Visit Mohenjo-daro, ancient Egypt and more. Meet people from long ago and ask how they lived.",
      interests: ["past", "places", "stories", "building"],
      status: "soon"
    },
    {
      id: "maths",
      subject: "Maths",
      name: "Pattern Park",
      icon: "🔢",
      tint: "#fff1b8",
      blurb: "Spot patterns, crack number puzzles and see why the rules work.",
      interests: ["games", "building"],
      status: "soon"
    },
    {
      id: "art",
      subject: "Art",
      name: "Art Studio",
      icon: "🎨",
      tint: "#ffe3f1",
      blurb: "Mix colours, draw rangoli patterns and learn how artists see the world.",
      interests: ["art", "games"],
      status: "soon"
    }
  ],

  interests: [
    { id: "animals", label: "Animals", icon: "🐾" },
    { id: "space", label: "Space", icon: "🚀" },
    { id: "places", label: "Places", icon: "🗺️" },
    { id: "nature", label: "Nature", icon: "🌱" },
    { id: "health", label: "Health and body", icon: "💪" },
    { id: "past", label: "Long ago", icon: "🏺" },
    { id: "stories", label: "Stories", icon: "📚" },
    { id: "words", label: "Words", icon: "🔤" },
    { id: "art", label: "Drawing and art", icon: "🖍️" },
    { id: "building", label: "Building things", icon: "🛠️" },
    { id: "games", label: "Games and puzzles", icon: "🎮" }
  ],

  languages: ["हिन्दी", "தமிழ்", "বাংলা", "తెలుగు", "मराठी", "ಕನ್ನಡ", "ગુજરાતી", "മലയാളം", "ਪੰਜਾਬੀ", "ଓଡ଼ିଆ"],

  // Preview puzzles. Pip asks first ("think"), gives a hint for each wrong guess ("nudge"),
  // then explains at the child's level: "young" for Class 1 to 4, "older" for Class 5 to 10.
  puzzles: [
    {
      id: "geo-cold",
      world: "geography",
      interests: ["places", "nature"],
      starter: "Where is the coldest place on Earth?",
      keywords: ["cold", "coldest", "ice", "freez", "snow", "antarctic"],
      think: "Ooh, brrr! Before I tell you, have a guess. Where do you think it's coldest?",
      choices: [
        { text: "The Sahara Desert", nudge: "Deserts can be chilly at night, but the Sahara is mostly hot. Think about the very bottom of the globe." },
        { text: "Antarctica", correct: true },
        { text: "The top of Mount Everest", nudge: "Everest is freezing! But there's a whole continent that's even colder. Hint: penguins live there." }
      ],
      young: "Yes! Antarctica is the coldest place on Earth. It once got down to -89°C. That's much colder than the inside of a freezer!",
      older: "Correct! Antarctica holds the record: -89.2°C, measured at Vostok Station in 1983. It's so cold because it's high up, covered in ice that reflects sunlight, and gets no sun at all for months in winter.",
      action: "In Earth Explorer, Pip will fly you to Antarctica so you can look around."
    },
    {
      id: "geo-volcano",
      world: "geography",
      interests: ["places", "nature"],
      starter: "Why do volcanoes erupt?",
      keywords: ["volcano", "volcanoes", "lava", "erupt", "magma"],
      think: "What do you think is pushing the lava up and out?",
      choices: [
        { text: "Rain filling up the mountain", nudge: "Rain cools things down. Think about what's deep underground. It's super hot down there!" },
        { text: "Hot melted rock and gas pushing up", correct: true },
        { text: "Wind blowing into the top", nudge: "Wind stays outside the mountain. The push comes from deep below." }
      ],
      young: "You got it! Deep under the ground, rock gets so hot it melts. Gas bubbles push it up and out, a bit like shaking a fizzy drink!",
      older: "Exactly. Melted rock called magma collects under the volcano. Gas dissolved in it expands as it rises, pressure builds, and the magma bursts out as lava, ash and gas.",
      action: "In Earth Explorer, Pip will fly you to a real volcano."
    },
    {
      id: "sci-sky",
      world: "science",
      interests: ["space", "nature", "art"],
      starter: "Why is the sky blue?",
      keywords: ["sky", "blue"],
      think: "Sunlight looks white. What do you think happens to it when it hits our air?",
      choices: [
        { text: "The sky reflects the ocean", nudge: "Lots of people think that! But the sky is blue over deserts too, far from any sea." },
        { text: "Space is painted blue", nudge: "Space is actually black. Look at photos from the Moon! Something in our air makes the blue." },
        { text: "The air bounces blue light around the most", correct: true }
      ],
      young: "Yes! Sunlight is made of all the colours. When it hits the air, blue light bounces around the most, so blue comes at us from every part of the sky.",
      older: "Right! Sunlight contains every colour. Tiny gas molecules in air scatter short wavelengths, like blue, much more than long ones, like red. This is called Rayleigh scattering. At sunset the light passes through more air, the blue is scattered away, and you see reds and oranges.",
      action: "In the Science Lab, you'll be able to change the sunlight and watch the sky change colour."
    },
    {
      id: "sci-float",
      world: "science",
      interests: ["building", "nature"],
      starter: "Why do big ships float but a coin sinks?",
      keywords: ["float", "floats", "sink", "sinks", "ship", "boat"],
      think: "Good puzzle! What do you think matters most for floating?",
      choices: [
        { text: "How heavy it is", nudge: "A huge ship is much heavier than a coin, and it floats! So it isn't just weight. Think about its shape." },
        { text: "Its shape and how much water it pushes away", correct: true },
        { text: "Its colour", nudge: "Colour doesn't change floating. Think about the ship's shape: it's hollow inside!" }
      ],
      young: "Yes! A ship is shaped like a big bowl full of air. It pushes away lots of water, and the water pushes back up. A coin is small and solid, so it can't push away enough water.",
      older: "Exactly. An object floats when the water it pushes aside weighs as much as the object does. A hollow steel hull pushes aside a huge amount of water. A solid coin is denser than water, so it sinks. This is Archimedes' principle.",
      action: "In the Science Lab, you'll be able to change a boat's shape and see when it sinks."
    },
    {
      id: "sci-moon",
      world: "science",
      interests: ["space"],
      starter: "Why does the Moon change shape?",
      keywords: ["moon", "phases", "crescent"],
      think: "Here's a tricky one. Does the Moon really change shape?",
      choices: [
        { text: "Yes, bits break off and grow back", nudge: "The Moon is solid rock, so it stays round! What lights it up at night?" },
        { text: "No, we see different amounts of its sunny side", correct: true },
        { text: "Earth's shadow covers it every month", nudge: "Earth's shadow causes eclipses, which are rare. The monthly change is about how the Sun lights the Moon." }
      ],
      young: "You figured it out! The Moon is always round. The Sun lights up half of it, and as it travels around Earth we see more or less of the bright half.",
      older: "Correct. The Sun always lights half the Moon. As the Moon orbits Earth over about 29.5 days, we see different parts of that lit half: new moon, crescent, quarter, gibbous and full.",
      action: "In the Science Lab, you'll be able to move the Moon around Earth and watch its phases."
    },
    {
      id: "sci-camel",
      world: "science",
      interests: ["animals", "nature"],
      starter: "What is inside a camel's hump?",
      keywords: ["camel", "camels", "hump"],
      think: "Camels can walk across deserts for days. What do you think is inside the hump?",
      choices: [
        { text: "Water", nudge: "Lots of people think that! But camels keep water in their blood and body. What else would help on a long trip with no food?" },
        { text: "Fat", correct: true },
        { text: "Extra bones", nudge: "There are no bones in there. It's soft and squishy! Think about what an animal saves for when food runs out." }
      ],
      young: "Yes! The hump is full of fat. When there's no food in the desert, the camel uses the fat for energy. The hump even gets smaller when the camel is hungry!",
      older: "Correct. A camel's hump stores fat, up to about 35 kg. Keeping fat in one place, not spread over the whole body, also helps the camel lose heat and stay cool in the desert.",
      action: "In Earth Explorer, Pip will fly you to the Thar Desert to see where camels live."
    },
    {
      id: "sci-germs",
      world: "science",
      interests: ["health"],
      starter: "Why do we wash hands with soap?",
      keywords: ["soap", "wash", "germ", "germs", "hands", "clean"],
      think: "Water alone can't wash all the germs away. What do you think soap does?",
      choices: [
        { text: "It makes hands smell nice", nudge: "A nice smell is a bonus! But soap does real work on germs. Think about how soap gets grease off a plate." },
        { text: "It grabs germs so water can wash them away", correct: true },
        { text: "It makes germs fall asleep", nudge: "Germs don't sleep! Soap does something stronger. Think about how it cleans oily dishes." }
      ],
      young: "Yes! Soap grabs germs and dirt and pulls them off your skin. It can even break some germs apart! Then water washes them away. Scrub for 20 seconds!",
      older: "Correct. Soap molecules have one end that sticks to water and one that sticks to oil. They break the oily outer layer of many germs and trap dirt and microbes so water rinses them away. That's why 20 seconds of scrubbing prevents so many illnesses.",
      action: "In the Science Lab, you'll see what soap does to germs, up close."
    },
    {
      id: "sci-heart",
      world: "science",
      interests: ["health"],
      starter: "Why does my heart beat faster when I run?",
      keywords: ["heart", "heartbeat", "beat", "pulse", "run", "running"],
      think: "When you run, your heart speeds up. Why do you think it does that?",
      choices: [
        { text: "Your heart gets scared", nudge: "Feelings can change your heartbeat, but running is about your muscles. What do they need to keep going?" },
        { text: "To make you warmer", nudge: "Running does warm you up, but that's a side effect. Think about what blood carries to your muscles." },
        { text: "Your muscles need more oxygen, so it pumps blood faster", correct: true }
      ],
      young: "Yes! When you run, your muscles need more oxygen. Your heart pumps faster to send them more blood, and blood carries the oxygen.",
      older: "Correct. Working muscles use oxygen quickly. Your heart beats faster and harder to pump more oxygen-rich blood to them, and you breathe faster to take in more oxygen. A resting child's heart beats about 70 to 100 times a minute.",
      action: "In the Science Lab, you'll be able to race a runner and watch the heart keep up."
    },
    {
      id: "hist-pyramids",
      world: "history",
      interests: ["past", "building", "places"],
      starter: "How were the pyramids built?",
      keywords: ["pyramid", "pyramids", "egypt"],
      think: "There were no cranes or trucks 4,500 years ago. How do you think they moved the giant stones?",
      choices: [
        { text: "With giant machines", nudge: "Engines weren't invented yet! Think about what lots of people could do together." },
        { text: "The stones were light", nudge: "Some blocks weigh more than two cars! They needed clever tricks to move them." },
        { text: "Lots of workers with ramps, sledges and ropes", correct: true }
      ],
      young: "Yes! Thousands of workers dragged the stones on wooden sledges, up ramps, with ropes. They even wet the sand so the sledges slid more easily!",
      older: "Right. About 4,500 years ago, organised teams of skilled workers cut the blocks, dragged them on sledges over sand they wetted to reduce friction, and hauled them up ramps. The Great Pyramid has about 2.3 million blocks.",
      action: "In Time Travellers, you'll be able to visit a pyramid building site."
    },
    {
      id: "hist-indus",
      world: "history",
      interests: ["past", "places", "building"],
      starter: "What was special about Mohenjo-daro?",
      keywords: ["mohenjo", "harappa", "indus"],
      think: "Mohenjo-daro is a city more than 4,500 years old. What do you think was special about it?",
      choices: [
        { text: "It had drains and neat, straight streets", correct: true },
        { text: "It had cars", nudge: "No cars yet! But its people were amazing planners. Think about keeping a big city clean." },
        { text: "It was built on the Moon", nudge: "Ha! It's by the Indus River, in Pakistan today. Think about what a city needs to stay clean." }
      ],
      young: "Yes! The people of the Indus Valley built straight streets, brick houses and covered drains. Many homes even had their own bathroom!",
      older: "Correct. Mohenjo-daro, built around 2500 BCE by the Indus Valley Civilisation, had a planned grid of streets, bricks of standard sizes, covered drains and the Great Bath. Few cities anywhere had drainage this good for thousands of years.",
      action: "In Time Travellers, you'll be able to walk the streets of Mohenjo-daro."
    },
    {
      id: "eng-rhyme",
      world: "english",
      interests: ["words", "stories"],
      starter: "What rhymes with cat?",
      keywords: ["rhyme", "rhymes", "rhyming", "poem"],
      think: "Rhyming words end with the same sound. Which of these rhymes with 'cat'?",
      choices: [
        { text: "cup", nudge: "Cup starts like cat, but listen to the end: c-AT, c-UP. Different!" },
        { text: "hat", correct: true },
        { text: "car", nudge: "Close! Car and cat both start with 'ca'. But rhymes match at the end. Say them slowly." }
      ],
      young: "Yes! Cat and hat both end in '-at'. Can you think of more? Bat, mat, sat, rat...",
      older: "Right! 'Cat' and 'hat' share the ending sound '-at'. Poets use rhyme to make lines catchy. Try finishing this one: 'The cat in the hat sat on a ___.'",
      action: "In English Club, you'll be able to build your own rhyming poem with Pip."
    },
    {
      id: "eng-verb",
      world: "english",
      interests: ["words"],
      starter: "What is a verb?",
      keywords: ["verb", "verbs", "grammar", "noun", "sentence"],
      think: "Let's find out with a sentence: 'The dog runs fast.' Which word tells you what the dog does?",
      choices: [
        { text: "dog", nudge: "Dog is who the sentence is about. That's a noun. What is the dog doing?" },
        { text: "runs", correct: true },
        { text: "fast", nudge: "Fast tells you HOW it runs. Which word is the action itself?" }
      ],
      young: "Yes! 'Runs' is a verb. Verbs are action words: jump, eat, sing, think.",
      older: "Correct. A verb shows an action (runs, writes) or a state of being (is, seems). Every full sentence needs one. Can you spot the verbs here: 'Pip flew to Delhi and landed softly'?",
      action: "In English Club, you'll be able to build sentences and watch each word's job light up."
    },
    {
      id: "eng-story",
      world: "english",
      interests: ["stories", "words"],
      starter: "What does every good story need?",
      keywords: ["story", "stories", "write", "writing", "writer"],
      think: "Think of your favourite story. What do you think it can't do without?",
      choices: [
        { text: "Long, difficult words", nudge: "Simple words can make great stories! Think about who the story is about and what happens to them." },
        { text: "A character with a problem to solve", correct: true },
        { text: "A sad ending", nudge: "Endings can be happy or sad. What makes you want to keep reading to the end?" }
      ],
      young: "Yes! Every story needs a character, and a problem for them to solve. Then we read on to find out what happens!",
      older: "Correct. Most stories follow a character who wants something but faces a problem. The struggle to solve it, called the conflict, keeps readers turning pages, and the ending shows how it turns out.",
      action: "In English Club, you'll be able to write a story with Pip as your editor."
    },
    {
      id: "code-loop",
      world: "coding",
      interests: ["games", "building"],
      starter: "What is a loop in coding?",
      keywords: ["loop", "loops", "repeat", "code", "coding", "program"],
      think: "Imagine a robot needs to take 10 steps. What's the smartest way to tell it?",
      choices: [
        { text: "Write 'step' ten times", nudge: "That works, but it's lots of typing! What if it was 1,000 steps?" },
        { text: "Say 'repeat 10 times: step'", correct: true },
        { text: "Tell it once and hope", nudge: "Robots do exactly what you say, nothing more! How could you say 'do it again' without writing it again?" }
      ],
      young: "Yes! That's a loop. A loop tells the computer to do something again and again, so you don't have to write it lots of times.",
      older: "Exactly. A loop repeats a block of instructions a set number of times, or until something becomes true. It keeps code short, and changing 10 steps to 1,000 means changing one number.",
      action: "In Story Code Quest, you can use loops to move your character."
    },
    {
      id: "code-bug",
      world: "coding",
      interests: ["games", "building"],
      starter: "What is a bug in code?",
      keywords: ["bug", "bugs", "debug", "debugging", "error", "mistake"],
      think: "A robot was told 'step, step, turn left, step', but it bumped into a wall. What went wrong?",
      choices: [
        { text: "The robot is naughty", nudge: "Robots can't be naughty! They do exactly what they're told. So check the instructions." },
        { text: "There's a mistake in the instructions", correct: true },
        { text: "The wall moved", nudge: "Walls don't move! Something in the steps must be off. Which one would you check first?" }
      ],
      young: "Yes! A mistake in the instructions is called a bug. Finding and fixing it is called debugging. Every coder does it, every day!",
      older: "Correct. A bug is a mistake in a program. Debugging means going through the steps one by one to find where what happened differs from what you wanted. Here, maybe it should have turned right!",
      action: "In Story Code Quest, Pip will replay your code and pause on the step that went wrong."
    },
    {
      id: "maths-pattern",
      world: "maths",
      interests: ["games"],
      starter: "What comes next: 2, 4, 6, 8...?",
      keywords: ["pattern", "patterns", "next", "sequence", "maths", "math", "number", "numbers"],
      think: "Look at how each number changes. What comes after 8?",
      choices: [
        { text: "9", nudge: "Check the jumps: 2 to 4, 4 to 6, 6 to 8. How big is each jump?" },
        { text: "16", nudge: "That would be doubling 8. But this pattern adds the same amount each time." },
        { text: "10", correct: true }
      ],
      young: "Yes! The pattern adds 2 each time. These are the even numbers!",
      older: "Correct. Each number is 2 more than the last, so the rule is 'add 2', or 2 × n. Once you know the rule you can find any term. The 100th is 200!",
      action: "In Pattern Park, you'll be able to build your own patterns and test your friends."
    },
    {
      id: "art-colours",
      world: "art",
      interests: ["art"],
      starter: "What do you get when you mix blue and yellow paint?",
      keywords: ["mix", "mixing", "colour", "colours", "color", "colors", "paint", "painting", "yellow", "green"],
      think: "Let's mix paints! Blue and yellow together make...?",
      choices: [
        { text: "Purple", nudge: "Purple comes from red and blue. Think about grass, or a fresh leaf..." },
        { text: "Green", correct: true },
        { text: "Orange", nudge: "Orange comes from red and yellow. What colour is a parrot?" }
      ],
      young: "Yes! Blue and yellow make green. Red, yellow and blue are called primary colours, and you can mix them to make lots more!",
      older: "Correct. Paint works by soaking up some colours of light and reflecting the rest. Blue paint and yellow paint both reflect some green, so when you mix them, green is the colour that's left. This is called subtractive mixing.",
      action: "In Art Studio, you'll be able to mix any colours and see what you get."
    },
    {
      id: "art-rangoli",
      world: "art",
      interests: ["art", "games"],
      starter: "Why do rangoli patterns look so balanced?",
      keywords: ["rangoli", "kolam", "symmetry", "mandala", "balanced"],
      think: "Imagine folding a rangoli design down the middle. What do you notice?",
      choices: [
        { text: "Both halves match, like a mirror", correct: true },
        { text: "One half is always bigger", nudge: "Look again! In most rangoli, if you fold it in half, the two sides look the same." },
        { text: "The shapes are random", nudge: "The colours can change, but the shapes repeat in a careful way. Imagine a mirror in the middle." }
      ],
      young: "Yes! Both halves match like a mirror. That's called symmetry, and it makes patterns feel balanced and beautiful.",
      older: "Correct. Rangoli and kolam use symmetry: mirror symmetry, where both halves match, and rotational symmetry, where the design looks the same when you turn it. Artists, architects and nature itself, in flowers and snowflakes, all use symmetry.",
      action: "In Art Studio, you'll be able to draw a rangoli and watch the mirror copy each line."
    }
  ]
};
