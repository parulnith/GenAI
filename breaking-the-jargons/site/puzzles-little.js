// Puzzles for Class 1 to 3 (Little Explorer). Short words, everyday things, one idea each.
window.BTJ.puzzles.push(
  {
    id: "lit-sun",
    level: "little",
    world: "science",
    keywords: ["sun", "night", "dark", "सूरज", "सूर्य", "रात"],
    starter: { en: "Where does the Sun go at night?", hi: "रात को सूरज कहाँ चला जाता है?" },
    think: { en: "Every evening the Sun disappears. Where do you think it goes?", hi: "हर शाम सूरज छिप जाता है। तुम्हें क्या लगता है, वह कहाँ जाता है?" },
    choices: [
      { text: { en: "It goes to sleep behind the hills", hi: "वह पहाड़ों के पीछे सो जाता है" }, nudge: { en: "The Sun never sleeps! It is always shining somewhere. Is something else moving?", hi: "सूरज कभी नहीं सोता! वह हमेशा कहीं न कहीं चमकता है। क्या कुछ और घूम रहा है?" } },
      { text: { en: "The Earth turns, so our side faces away", hi: "धरती घूमती है, तो हमारा हिस्सा सूरज से दूर हो जाता है" }, correct: true },
      { text: { en: "The Moon eats it", hi: "चाँद उसे खा जाता है" }, nudge: { en: "Ha! The Moon is much smaller than the Sun. Think about the ground under your feet. Is it moving?", hi: "हा! चाँद तो सूरज से बहुत छोटा है। अपने पैरों के नीचे की ज़मीन के बारे में सोचो। क्या वह घूम रही है?" } }
    ],
    explain: { en: "Yes! The Sun stays where it is. The Earth spins like a top. When our side turns away from the Sun, it is night for us, and day for children on the other side of the world.", hi: "हाँ! सूरज अपनी जगह पर रहता है। धरती लट्टू की तरह घूमती है। जब हमारा हिस्सा सूरज से दूर मुड़ता है, तो हमारे यहाँ रात होती है, और दुनिया के दूसरी तरफ़ के बच्चों के यहाँ दिन।" }
  },
  {
    id: "lit-earth-shape",
    level: "little",
    world: "geography",
    keywords: ["earth", "shape", "round", "flat", "धरती", "पृथ्वी", "आकार", "गोल"],
    starter: { en: "What shape is our Earth?", hi: "हमारी धरती का आकार कैसा है?" },
    think: { en: "When you stand outside, the ground looks flat. What shape do you think the whole Earth is?", hi: "बाहर खड़े होकर ज़मीन सपाट दिखती है। तुम्हें क्या लगता है, पूरी धरती का आकार कैसा है?" },
    choices: [
      { text: { en: "Flat like a roti", hi: "रोटी जैसी सपाट" }, nudge: { en: "It looks flat because it is so big! But ships at sea disappear from the bottom up. Think of a ball.", hi: "वह इतनी बड़ी है कि सपाट दिखती है! पर समुद्र में जहाज़ नीचे से ऊपर की ओर छिपते हैं। गेंद के बारे में सोचो।" } },
      { text: { en: "Round like a ball", hi: "गेंद जैसी गोल" }, correct: true },
      { text: { en: "Square like a box", hi: "डिब्बे जैसी चौकोर" }, nudge: { en: "Have you seen a photo of Earth from space? It has no corners at all!", hi: "क्या तुमने अंतरिक्ष से धरती की तस्वीर देखी है? उसमें कोई कोना नहीं है!" } }
    ],
    explain: { en: "Yes! The Earth is round like a ball. Astronauts have taken photos of it from space. It is so big that it looks flat when we stand on it.", hi: "हाँ! धरती गेंद जैसी गोल है। अंतरिक्ष यात्रियों ने अंतरिक्ष से इसकी तस्वीरें ली हैं। यह इतनी बड़ी है कि इस पर खड़े होकर सपाट दिखती है।" }
  },
  {
    id: "lit-pattern",
    level: "little",
    world: "maths",
    keywords: ["pattern", "next", "colour", "पैटर्न", "अगला"],
    starter: { en: "What comes next: red, blue, red, blue, red...?", hi: "आगे क्या आएगा: लाल, नीला, लाल, नीला, लाल...?" },
    think: { en: "Look at how the colours take turns. What comes after the last red?", hi: "देखो रंग कैसे बारी-बारी से आ रहे हैं। आख़िरी लाल के बाद क्या आएगा?" },
    choices: [
      { text: { en: "Red", hi: "लाल" }, nudge: { en: "Look again: red, blue, red, blue... After red comes...?", hi: "फिर से देखो: लाल, नीला, लाल, नीला... लाल के बाद आता है...?" } },
      { text: { en: "Blue", hi: "नीला" }, correct: true },
      { text: { en: "Green", hi: "हरा" }, nudge: { en: "There is no green in this pattern! Only two colours take turns.", hi: "इस पैटर्न में हरा है ही नहीं! सिर्फ़ दो रंग बारी-बारी से आते हैं।" } }
    ],
    explain: { en: "Yes! Red and blue take turns. That is a pattern. Patterns are everywhere: in rangoli, in songs, and in maths!", hi: "हाँ! लाल और नीला बारी-बारी से आते हैं। इसे पैटर्न कहते हैं। पैटर्न हर जगह हैं: रंगोली में, गानों में, और गणित में!" }
  },
  {
    id: "lit-robot",
    level: "little",
    world: "coding",
    keywords: ["robot", "instruction", "instructions", "step", "रोबोट", "निर्देश"],
    starter: { en: "How do you tell a robot to pick up a ball?", hi: "रोबोट को गेंद उठाने के लिए कैसे कहोगे?" },
    think: { en: "A robot only does exactly what you say. Which instruction will work?", hi: "रोबोट बस वही करता है जो तुम कहते हो। कौन-सा निर्देश काम करेगा?" },
    choices: [
      { text: { en: "\"Get it!\"", hi: "\"ले आओ!\"" }, nudge: { en: "The robot doesn't know what 'it' is, or where to go! Robots need small, clear steps.", hi: "रोबोट को नहीं पता कि क्या लाना है और कहाँ जाना है! रोबोट को छोटे, साफ़ कदम चाहिए।" } },
      { text: { en: "\"Walk 3 steps, bend down, close your hand\"", hi: "\"3 कदम चलो, नीचे झुको, हाथ बंद करो\"" }, correct: true },
      { text: { en: "\"Please be a good robot\"", hi: "\"अच्छे रोबोट बनो\"" }, nudge: { en: "Being polite is nice! But the robot still doesn't know what to do. Tell it each small step.", hi: "शिष्टता अच्छी बात है! पर रोबोट को अब भी नहीं पता कि क्या करना है। उसे हर छोटा कदम बताओ।" } }
    ],
    explain: { en: "Yes! Robots and computers need small, clear steps in the right order. A list of steps like this is called a program.", hi: "हाँ! रोबोट और कंप्यूटर को सही क्रम में छोटे, साफ़ कदम चाहिए। ऐसे कदमों की सूची को प्रोग्राम कहते हैं।" }
  },
  {
    id: "lit-wash-when",
    level: "little",
    world: "science",
    keywords: ["wash", "hands", "soap", "germ", "germs", "हाथ", "साबुन", "धो", "कीटाणु"],
    starter: { en: "When should you wash your hands?", hi: "हाथ कब धोने चाहिए?" },
    think: { en: "Your hands touch lots of things all day. When is the most important time to wash them?", hi: "तुम्हारे हाथ दिन भर बहुत सारी चीज़ें छूते हैं। उन्हें धोने का सबसे ज़रूरी समय कब है?" },
    choices: [
      { text: { en: "Only on Sundays", hi: "सिर्फ़ रविवार को" }, nudge: { en: "Germs come every day! Think about when your hands touch your food.", hi: "कीटाणु तो रोज़ आते हैं! सोचो, तुम्हारे हाथ खाने को कब छूते हैं?" } },
      { text: { en: "Before eating food", hi: "खाना खाने से पहले" }, correct: true },
      { text: { en: "Only when they look dirty", hi: "सिर्फ़ जब गंदे दिखें" }, nudge: { en: "Germs are too tiny to see! Hands can look clean and still have germs.", hi: "कीटाणु इतने छोटे होते हैं कि दिखते नहीं! हाथ साफ़ दिखकर भी उन पर कीटाणु हो सकते हैं।" } }
    ],
    explain: { en: "Yes! Wash your hands with soap before eating and after using the toilet. It stops tiny germs, too small to see, from making you sick.", hi: "हाँ! खाने से पहले और शौचालय के बाद साबुन से हाथ धोओ। इससे वे छोटे कीटाणु, जो दिखते भी नहीं, तुम्हें बीमार नहीं कर पाते।" }
  },
  {
    id: "lit-bones",
    level: "little",
    world: "science",
    keywords: ["bone", "bones", "skeleton", "body", "हड्डी", "हड्डियाँ", "कंकाल", "शरीर"],
    starter: { en: "What holds your body up?", hi: "हमारे शरीर को सीधा कौन रखता है?" },
    think: { en: "Without it, you would flop like a jelly! What holds your body up?", hi: "इसके बिना तुम जेली की तरह लुढ़क जाते! तुम्हारे शरीर को सीधा कौन रखता है?" },
    choices: [
      { text: { en: "Your bones", hi: "तुम्हारी हड्डियाँ" }, correct: true },
      { text: { en: "Your hair", hi: "तुम्हारे बाल" }, nudge: { en: "Hair is soft and bendy! Feel your arm. What hard thing is inside?", hi: "बाल तो नरम होते हैं! अपनी बाँह छूकर देखो। अंदर कौन-सी सख़्त चीज़ है?" } },
      { text: { en: "Your clothes", hi: "तुम्हारे कपड़े" }, nudge: { en: "You stand up even without clothes on! Something hard inside your body does it.", hi: "तुम बिना कपड़ों के भी खड़े रहते हो! शरीर के अंदर कोई सख़्त चीज़ यह काम करती है।" } }
    ],
    explain: { en: "Yes! Bones hold you up. All your bones together are called your skeleton. A grown-up has 206 bones!", hi: "हाँ! हड्डियाँ तुम्हें सीधा रखती हैं। सारी हड्डियाँ मिलकर कंकाल कहलाती हैं। एक बड़े इंसान में 206 हड्डियाँ होती हैं!" }
  },
  {
    id: "lit-fish",
    level: "little",
    world: "science",
    keywords: ["fish", "breathe", "water", "gills", "मछली", "साँस", "गलफड़े"],
    starter: { en: "How do fish breathe under water?", hi: "मछली पानी में साँस कैसे लेती है?" },
    think: { en: "We breathe air. Fish live in water all the time. How do you think they breathe?", hi: "हम हवा में साँस लेते हैं। मछली हमेशा पानी में रहती है। तुम्हें क्या लगता है, वह साँस कैसे लेती है?" },
    choices: [
      { text: { en: "They hold their breath all day", hi: "वे पूरे दिन साँस रोके रहती हैं" }, nudge: { en: "Fish never come up for air like we do! They have a special body part for water.", hi: "मछलियाँ हमारी तरह हवा लेने ऊपर नहीं आतीं! उनके पास पानी के लिए एक ख़ास अंग होता है।" } },
      { text: { en: "With gills on the sides of their head", hi: "सिर के दोनों तरफ़ के गलफड़ों से" }, correct: true },
      { text: { en: "They don't need to breathe", hi: "उन्हें साँस की ज़रूरत नहीं" }, nudge: { en: "Every animal needs oxygen, even fish! There is oxygen in water too.", hi: "हर जानवर को ऑक्सीजन चाहिए, मछली को भी! पानी में भी ऑक्सीजन होती है।" } }
    ],
    explain: { en: "Yes! Fish have gills. Water flows through them, and the gills take oxygen out of the water. We use lungs for air, and fish use gills for water.", hi: "हाँ! मछली के गलफड़े होते हैं। पानी उनमें से बहता है, और गलफड़े पानी से ऑक्सीजन ले लेते हैं। हम हवा के लिए फेफड़ों का इस्तेमाल करते हैं, और मछली पानी के लिए गलफड़ों का।" }
  },
  {
    id: "lit-float",
    level: "little",
    world: "science",
    keywords: ["float", "sink", "leaf", "stone", "तैर", "डूब", "पत्ता", "पत्थर"],
    starter: { en: "Which one floats: a leaf or a stone?", hi: "कौन तैरेगा: पत्ता या पत्थर?" },
    think: { en: "Imagine dropping each one into a bucket of water. Which one will float?", hi: "सोचो, हर चीज़ को पानी की बाल्टी में डालो। कौन-सी तैरेगी?" },
    choices: [
      { text: { en: "A stone", hi: "पत्थर" }, nudge: { en: "Stones are heavy for their size, so they go plop to the bottom! Try something light and flat.", hi: "पत्थर अपने आकार के हिसाब से भारी होते हैं, इसलिए छपाक से नीचे चले जाते हैं! कोई हल्की और चपटी चीज़ सोचो।" } },
      { text: { en: "A leaf", hi: "पत्ता" }, correct: true },
      { text: { en: "An iron key", hi: "लोहे की चाबी" }, nudge: { en: "Small iron things sink. Which one is light and thin?", hi: "लोहे की छोटी चीज़ें डूब जाती हैं। कौन-सी चीज़ हल्की और पतली है?" } }
    ],
    explain: { en: "Yes! A leaf is light and flat, so the water can hold it up. Try it at home with a bowl of water and different things!", hi: "हाँ! पत्ता हल्का और चपटा होता है, इसलिए पानी उसे ऊपर रख पाता है। घर पर एक कटोरी पानी और अलग-अलग चीज़ों से आज़माकर देखो!" }
  },
  {
    id: "lit-triangle",
    level: "little",
    world: "science",
    keywords: ["triangle", "shape", "strong", "square", "त्रिकोण", "मज़बूत", "आकार"],
    starter: { en: "Which shape is the hardest to squash?", hi: "किस आकार को दबाना सबसे मुश्किल है?" },
    think: { en: "Imagine making each shape with sticks and pushing on it. Which one keeps its shape?", hi: "सोचो, हर आकार को डंडियों से बनाकर दबाओ। कौन-सा अपना आकार बनाए रखेगा?" },
    choices: [
      { text: { en: "A square", hi: "चौकोर" }, nudge: { en: "A square made of sticks can be pushed into a squashed diamond. Try a shape with three sides!", hi: "डंडियों का चौकोर दबाने पर तिरछा हो जाता है। तीन भुजाओं वाला आकार सोचो!" } },
      { text: { en: "A triangle", hi: "त्रिकोण" }, correct: true },
      { text: { en: "A circle", hi: "गोला" }, nudge: { en: "A circle of thin sticks bends easily. Think of a shape with three straight sides.", hi: "पतली डंडियों का गोला आसानी से मुड़ जाता है। तीन सीधी भुजाओं वाला आकार सोचो।" } }
    ],
    explain: { en: "Yes! A triangle keeps its shape when you push it. That is why bridges, towers and roofs use lots of triangles.", hi: "हाँ! त्रिकोण दबाने पर भी अपना आकार नहीं छोड़ता। इसीलिए पुलों, टावरों और छतों में बहुत सारे त्रिकोण होते हैं।" }
  },
  {
    id: "lit-order",
    level: "little",
    world: "coding",
    keywords: ["mistake", "bug", "order", "steps", "brush", "गलती", "क्रम", "कदम", "ब्रश"],
    starter: { en: "Can you find the mistake in these steps?", hi: "क्या तुम इन कदमों में गलती ढूँढ सकते हो?" },
    think: { en: "To brush your teeth: 1. Brush, 2. Put toothpaste, 3. Rinse. Something is in the wrong order. What should come first?", hi: "दाँत साफ़ करने के कदम: 1. ब्रश करो, 2. टूथपेस्ट लगाओ, 3. कुल्ला करो। कुछ गलत क्रम में है। सबसे पहले क्या आना चाहिए?" },
    choices: [
      { text: { en: "Rinse", hi: "कुल्ला करो" }, nudge: { en: "Rinsing comes at the end! What do you need on the brush before you brush?", hi: "कुल्ला तो आख़िर में होता है! ब्रश करने से पहले ब्रश पर क्या चाहिए?" } },
      { text: { en: "Put toothpaste", hi: "टूथपेस्ट लगाओ" }, correct: true },
      { text: { en: "Brush", hi: "ब्रश करो" }, nudge: { en: "You can't brush yet, the brush is empty! What goes on it first?", hi: "अभी ब्रश नहीं कर सकते, ब्रश ख़ाली है! पहले उस पर क्या लगेगा?" } }
    ],
    explain: { en: "Yes! Toothpaste comes first. Steps in the wrong order is called a bug. Coders look for bugs and fix them, just like you did!", hi: "हाँ! पहले टूथपेस्ट आता है। गलत क्रम वाले कदमों को बग कहते हैं। कोडर बग ढूँढकर ठीक करते हैं, बिल्कुल जैसे तुमने किया!" }
  },
  {
    id: "lit-colours",
    level: "little",
    world: "art",
    keywords: ["mix", "red", "yellow", "orange", "colour", "color", "रंग", "लाल", "पीला", "नारंगी", "मिला"],
    starter: { en: "What do red and yellow paint make?", hi: "लाल और पीला रंग मिलकर क्या बनाते हैं?" },
    think: { en: "Let's mix! Red and yellow together make...?", hi: "चलो मिलाएँ! लाल और पीला मिलकर बनाते हैं...?" },
    choices: [
      { text: { en: "Green", hi: "हरा" }, nudge: { en: "Green comes from blue and yellow. Think of a marigold flower!", hi: "हरा नीले और पीले से बनता है। गेंदे के फूल के बारे में सोचो!" } },
      { text: { en: "Orange", hi: "नारंगी" }, correct: true },
      { text: { en: "Purple", hi: "बैंगनी" }, nudge: { en: "Purple comes from red and blue. Think of a ripe mango!", hi: "बैंगनी लाल और नीले से बनता है। पके आम के बारे में सोचो!" } }
    ],
    explain: { en: "Yes! Red and yellow make orange, like a marigold. Red, yellow and blue are called primary colours. You can mix them to make many more.", hi: "हाँ! लाल और पीला मिलकर नारंगी बनता है, गेंदे के फूल जैसा। लाल, पीला और नीला मुख्य रंग हैं। इन्हें मिलाकर बहुत सारे रंग बनते हैं।" }
  },
  {
    id: "lit-symmetry",
    level: "little",
    world: "art",
    keywords: ["same", "both", "sides", "butterfly", "mirror", "symmetry", "तितली", "शीशा", "दोनों"],
    starter: { en: "Which one looks the same on both sides?", hi: "कौन-सी चीज़ दोनों तरफ़ एक जैसी दिखती है?" },
    think: { en: "Imagine a mirror down the middle. Which one has two matching halves?", hi: "सोचो, बीच में एक शीशा है। किसके दोनों हिस्से एक जैसे हैं?" },
    choices: [
      { text: { en: "A butterfly", hi: "तितली" }, correct: true },
      { text: { en: "The letter F", hi: "अक्षर F" }, nudge: { en: "Fold an F down the middle. Do both halves match? Think of a creature with two matching wings.", hi: "F को बीच से मोड़ो। क्या दोनों हिस्से मिलते हैं? दो एक जैसे पंखों वाले जीव के बारे में सोचो।" } },
      { text: { en: "Your hand", hi: "तुम्हारा हाथ" }, nudge: { en: "Look at your hand: the thumb is only on one side! Think of something with two matching wings.", hi: "अपना हाथ देखो: अँगूठा सिर्फ़ एक तरफ़ है! दो एक जैसे पंखों वाली चीज़ सोचो।" } }
    ],
    explain: { en: "Yes! A butterfly's two wings match like a mirror. This is called symmetry. Rangoli uses it too!", hi: "हाँ! तितली के दोनों पंख शीशे की तरह मिलते हैं। इसे समरूपता कहते हैं। रंगोली में भी यही होता है!" }
  },
  {
    id: "lit-shadow",
    level: "little",
    world: "science",
    keywords: ["shadow", "shadows", "light", "परछाईं", "छाया", "रोशनी"],
    starter: { en: "What makes a shadow?", hi: "परछाईं कैसे बनती है?" },
    think: { en: "Stand in the sun and you see a dark shape next to you. What do you think makes it?", hi: "धूप में खड़े हो तो पास में एक काला आकार दिखता है। तुम्हें क्या लगता है, वह कैसे बनता है?" },
    choices: [
      { text: { en: "The ground turns dark by itself", hi: "ज़मीन अपने आप काली हो जाती है" }, nudge: { en: "Shadows only appear when there is light! What happens when you stand in the way of the sun?", hi: "परछाईं तभी बनती है जब रोशनी हो! जब तुम धूप के रास्ते में खड़े होते हो तो क्या होता है?" } },
      { text: { en: "Something blocks the light", hi: "कोई चीज़ रोशनी को रोक लेती है" }, correct: true },
      { text: { en: "Water on the ground", hi: "ज़मीन पर पानी" }, nudge: { en: "Shadows appear on dry ground too. Try standing between a lamp and a wall.", hi: "सूखी ज़मीन पर भी परछाईं बनती है। दीये और दीवार के बीच खड़े होकर देखो।" } }
    ],
    explain: { en: "Yes! When something blocks light, a dark shape appears behind it. That is a shadow. Artists draw shadows to make pictures look real.", hi: "हाँ! जब कोई चीज़ रोशनी रोकती है, तो उसके पीछे एक काला आकार बनता है। यही परछाईं है। चित्रकार तस्वीरों को असली जैसा दिखाने के लिए परछाईं बनाते हैं।" }
  },
  {
    id: "lit-letter",
    level: "little",
    world: "english",
    keywords: ["sound", "starts", "letter", "ball", "phonics", "आवाज़", "अक्षर"],
    starter: { en: "Which word starts like 'ball'?", hi: "कौन-सा शब्द 'ball' की तरह शुरू होता है?" },
    think: { en: "Say 'ball' slowly: b-b-ball. Which word starts with the same sound?", hi: "'ball' (गेंद) धीरे बोलो: ब-ब-बॉल। कौन-सा शब्द इसी आवाज़ से शुरू होता है?" },
    choices: [
      { text: "cat", nudge: { en: "Say them slowly: b-b-ball, c-c-cat. Different! Which one goes 'b-b-b'?", hi: "धीरे बोलो: ब-ब-बॉल, क-क-कैट। अलग है! कौन-सा 'ब-ब-ब' से शुरू होता है?" } },
      { text: "bat", correct: true },
      { text: "apple", nudge: { en: "Apple starts with 'a'. Ball starts with 'b'. Which word goes 'b-b-b'?", hi: "Apple 'अ' से शुरू होता है। Ball 'ब' से। कौन-सा शब्द 'ब-ब-ब' से शुरू होता है?" } }
    ],
    explain: { en: "Yes! Ball and bat both start with the 'b' sound. Can you think of more? Boy, bus, banana...", hi: "हाँ! 'ball' (गेंद) और 'bat' (बल्ला) दोनों 'ब' की आवाज़ से शुरू होते हैं। और सोचो: boy, bus, banana..." }
  },
  {
    id: "lit-sentence",
    level: "little",
    world: "english",
    keywords: ["sentence", "full", "words", "वाक्य", "पूरा"],
    starter: { en: "Which one is a full sentence?", hi: "इनमें से पूरा वाक्य कौन-सा है?" },
    think: { en: "A full sentence tells us who and what they do. Which one is a full sentence?", hi: "पूरा वाक्य बताता है कि कौन है और वह क्या करता है। इनमें से पूरा वाक्य कौन-सा है?" },
    choices: [
      { text: "The cat", nudge: { en: "We know who, but what is the cat doing? A sentence needs an action too.", hi: "हमें पता है कौन है, पर बिल्ली क्या कर रही है? वाक्य में काम भी चाहिए।" } },
      { text: "sleeps the", nudge: { en: "The words are mixed up! A sentence starts with who, then what they do.", hi: "शब्द उलझ गए हैं! वाक्य पहले बताता है कौन, फिर वह क्या करता है।" } },
      { text: "The cat sleeps.", correct: true }
    ],
    explain: { en: "Yes! 'The cat sleeps.' tells who (the cat) and what it does (sleeps). It starts with a capital letter and ends with a full stop.", hi: "हाँ! 'The cat sleeps.' (बिल्ली सोती है।) बताता है कौन (बिल्ली) और वह क्या करती है (सोती है)। यह बड़े अक्षर से शुरू होता है और पूर्ण विराम पर ख़त्म होता है।" }
  },
  {
    id: "lit-crow",
    level: "little",
    world: "english",
    keywords: ["crow", "thirsty", "story", "pebbles", "कौआ", "प्यासा", "कहानी", "कंकड़"],
    starter: { en: "How did the thirsty crow drink the water?", hi: "प्यासे कौए ने पानी कैसे पिया?" },
    think: { en: "In the story, the water in the pot was too low for the crow's beak. What did the clever crow do?", hi: "कहानी में घड़े का पानी बहुत नीचे था, कौए की चोंच वहाँ तक नहीं पहुँची। चतुर कौए ने क्या किया?" },
    choices: [
      { text: { en: "It broke the pot", hi: "उसने घड़ा तोड़ दिया" }, nudge: { en: "Then the water would spill everywhere! How can you make water come up?", hi: "तब तो सारा पानी बिखर जाता! पानी को ऊपर कैसे लाया जा सकता है?" } },
      { text: { en: "It dropped pebbles into the pot", hi: "उसने घड़े में कंकड़ डाले" }, correct: true },
      { text: { en: "It found a straw", hi: "उसे एक स्ट्रॉ मिल गया" }, nudge: { en: "Crows don't have straws! It used something lying on the ground.", hi: "कौओं के पास स्ट्रॉ नहीं होता! उसने ज़मीन पर पड़ी किसी चीज़ का इस्तेमाल किया।" } }
    ],
    explain: { en: "Yes! The crow dropped pebbles, and the water rose up. Every good story has a problem (the water is too low) and a clever way to solve it!", hi: "हाँ! कौए ने कंकड़ डाले, और पानी ऊपर आ गया। हर अच्छी कहानी में एक मुश्किल होती है (पानी बहुत नीचे है) और उसे सुलझाने का एक चतुर तरीक़ा!" }
  }
);
