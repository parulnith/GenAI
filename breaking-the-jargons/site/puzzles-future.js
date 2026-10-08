// Puzzles for Class 8 to 10 (Future Maker). Real terms, a reason behind every answer.
window.BTJ.puzzles.push(
  {
    id: "fut-gravity",
    level: "future",
    world: "science",
    keywords: ["astronaut", "astronauts", "float", "gravity", "weightless", "space", "अंतरिक्ष", "गुरुत्वाकर्षण", "तैरते"],
    starter: { en: "Why do astronauts float in the space station?", hi: "अंतरिक्ष स्टेशन में अंतरिक्ष यात्री क्यों तैरते हैं?" },
    think: { en: "The space station is only about 400 km above Earth. Why do you think the astronauts float?", hi: "अंतरिक्ष स्टेशन धरती से सिर्फ़ लगभग 400 किमी ऊपर है। तुम्हें क्या लगता है, यात्री क्यों तैरते हैं?" },
    choices: [
      { text: { en: "There is no gravity in space", hi: "अंतरिक्ष में गुरुत्वाकर्षण नहीं होता" }, nudge: { en: "Many people think that! But gravity there is still about 90% as strong as on Earth. Something else is going on.", hi: "बहुत लोग ऐसा सोचते हैं! पर वहाँ गुरुत्वाकर्षण अब भी धरती का लगभग 90% है। कुछ और हो रहा है।" } },
      { text: { en: "They and the station are falling around Earth together", hi: "वे और स्टेशन साथ-साथ धरती के चारों ओर गिर रहे हैं" }, correct: true },
      { text: { en: "Their suits are full of air", hi: "उनके सूट हवा से भरे हैं" }, nudge: { en: "They float even without suits, inside the station. Think about what the station is doing as it orbits.", hi: "वे स्टेशन के अंदर बिना सूट के भी तैरते हैं। सोचो, चक्कर लगाते हुए स्टेशन क्या कर रहा है।" } }
    ],
    explain: { en: "Correct. The station is in free fall: it falls towards Earth but moves sideways so fast, about 28,000 km/h, that it keeps missing. The astronauts fall with it, so they feel weightless. That is what an orbit is.", hi: "सही। स्टेशन मुक्त पतन (free fall) में है: वह धरती की ओर गिरता है, पर इतनी तेज़ी से, लगभग 28,000 किमी प्रति घंटा, बगल में चलता है कि धरती से टकराता ही नहीं। यात्री भी साथ गिरते हैं, इसलिए भारहीन महसूस करते हैं। यही कक्षा (orbit) है।" }
  },
  {
    id: "fut-seasons",
    level: "future",
    world: "geography",
    keywords: ["season", "seasons", "summer", "winter", "tilt", "मौसम", "गर्मी", "सर्दी", "झुकाव"],
    starter: { en: "Why do we have summer and winter?", hi: "गर्मी और सर्दी का मौसम क्यों आता है?" },
    think: { en: "The Sun burns at almost the same strength all year. So why do you think we get seasons?", hi: "सूरज साल भर लगभग एक जैसा जलता है। तो तुम्हें क्या लगता है, मौसम क्यों बदलते हैं?" },
    choices: [
      { text: { en: "Earth is closer to the Sun in summer", hi: "गर्मी में धरती सूरज के ज़्यादा पास होती है" }, nudge: { en: "Surprise: Earth is closest to the Sun in early January, during India's winter! Think about how sunlight hits us.", hi: "हैरानी की बात: धरती सूरज के सबसे पास जनवरी की शुरुआत में होती है, जब भारत में सर्दी होती है! सोचो, धूप हम पर कैसे पड़ती है।" } },
      { text: { en: "Earth's axis is tilted, so sunlight hits more directly in summer", hi: "धरती की धुरी झुकी है, इसलिए गर्मी में धूप सीधी पड़ती है" }, correct: true },
      { text: { en: "The Sun gets hotter in summer", hi: "गर्मी में सूरज ज़्यादा गर्म हो जाता है" }, nudge: { en: "The Sun's heat stays almost the same all year. What changes is how Earth faces it.", hi: "सूरज की गर्मी साल भर लगभग एक जैसी रहती है। बदलता है यह कि धरती उसकी तरफ़ कैसे मुड़ी है।" } }
    ],
    explain: { en: "Correct. Earth's axis is tilted by about 23.5°. When our half leans towards the Sun, sunlight falls more directly and days are longer: summer. When it leans away, we get winter. That is why seasons in Australia are the opposite of India's.", hi: "सही। धरती की धुरी लगभग 23.5° झुकी है। जब हमारा आधा हिस्सा सूरज की ओर झुकता है, धूप सीधी पड़ती है और दिन लंबे होते हैं: गर्मी। जब वह दूर झुकता है, सर्दी आती है। इसीलिए ऑस्ट्रेलिया में मौसम भारत से उल्टे होते हैं।" }
  },
  {
    id: "fut-lightyear",
    level: "future",
    world: "science",
    keywords: ["light-year", "lightyear", "light", "year", "star", "stars", "प्रकाश", "वर्ष", "तारे"],
    starter: { en: "What is a light-year?", hi: "प्रकाश-वर्ष (light-year) क्या है?" },
    think: { en: "Astronomers say a star is '4 light-years away'. What do you think a light-year measures?", hi: "खगोलशास्त्री कहते हैं कि कोई तारा '4 प्रकाश-वर्ष दूर' है। तुम्हें क्या लगता है, प्रकाश-वर्ष क्या नापता है?" },
    choices: [
      { text: { en: "A unit of time", hi: "समय की इकाई" }, nudge: { en: "It has 'year' in it, but it measures something else! Think about how far light travels.", hi: "इसमें 'वर्ष' है, पर यह कुछ और नापता है! सोचो, रोशनी कितनी दूर जाती है।" } },
      { text: { en: "The distance light travels in one year", hi: "एक साल में रोशनी जितनी दूरी तय करती है" }, correct: true },
      { text: { en: "A very bright year", hi: "बहुत चमकीला साल" }, nudge: { en: "Ha! It's not about brightness. It's about how far light goes.", hi: "हा! यह चमक के बारे में नहीं है। यह इस बारे में है कि रोशनी कितनी दूर जाती है।" } }
    ],
    explain: { en: "Correct. Light travels about 3 lakh km every second. In one year that adds up to about 9.46 lakh crore km. Stars are so far away that kilometres become too small a unit.", hi: "सही। रोशनी हर सेकंड लगभग 3 लाख किमी चलती है। एक साल में यह लगभग 9.46 लाख करोड़ किमी हो जाता है। तारे इतने दूर हैं कि किलोमीटर बहुत छोटी इकाई पड़ जाती है।" }
  },
  {
    id: "fut-binary",
    level: "future",
    world: "coding",
    keywords: ["binary", "0", "1", "computer", "computers", "store", "बाइनरी", "कंप्यूटर"],
    starter: { en: "What number is 101 in binary?", hi: "बाइनरी में 101 कौन-सी संख्या है?" },
    think: { en: "Computers store everything as 0s and 1s. In binary, what number does 101 mean?", hi: "कंप्यूटर सब कुछ 0 और 1 में रखते हैं। बाइनरी में 101 का मतलब कौन-सी संख्या है?" },
    choices: [
      { text: "101", nudge: { en: "In binary each place is worth double the one to its right: 4, 2, 1. Add up the places that have a 1.", hi: "बाइनरी में हर स्थान की क़ीमत अपने दाएँ वाले से दोगुनी होती है: 4, 2, 1। जिन स्थानों पर 1 है, उन्हें जोड़ो।" } },
      { text: "5", correct: true },
      { text: "3", nudge: { en: "Check the places: 1 in the 4s place, 0 in the 2s place, 1 in the 1s place.", hi: "स्थान जाँचो: 4 वाले स्थान पर 1, 2 वाले पर 0, 1 वाले पर 1।" } }
    ],
    explain: { en: "Correct. In binary, the places are worth 4, 2 and 1. So 101 = 4 + 0 + 1 = 5. Every photo, song and message on a phone is stored as billions of 0s and 1s.", hi: "सही। बाइनरी में स्थानों की क़ीमत 4, 2 और 1 है। तो 101 = 4 + 0 + 1 = 5। फ़ोन की हर तस्वीर, गाना और संदेश अरबों 0 और 1 के रूप में रखा जाता है।" }
  },
  {
    id: "fut-vaccine",
    level: "future",
    world: "science",
    keywords: ["vaccine", "vaccines", "immune", "polio", "टीका", "वैक्सीन", "प्रतिरक्षा", "पोलियो"],
    starter: { en: "How does a vaccine protect you?", hi: "टीका (वैक्सीन) हमें कैसे बचाता है?" },
    think: { en: "A vaccine is given before you are ever sick. How do you think it protects you later?", hi: "टीका बीमार होने से पहले ही दिया जाता है। तुम्हें क्या लगता है, वह बाद में कैसे बचाता है?" },
    choices: [
      { text: { en: "It kills every germ in your body", hi: "वह शरीर के सारे कीटाणु मार देता है" }, nudge: { en: "Vaccines don't attack germs directly. They teach something in your body to do that. What fights germs inside you?", hi: "टीके सीधे कीटाणुओं पर हमला नहीं करते। वे शरीर के किसी हिस्से को यह सिखाते हैं। तुम्हारे अंदर कीटाणुओं से कौन लड़ता है?" } },
      { text: { en: "It trains your immune system to recognise a germ", hi: "वह प्रतिरक्षा तंत्र को कीटाणु पहचानना सिखाता है" }, correct: true },
      { text: { en: "It makes your skin too hard for germs", hi: "वह त्वचा को इतना सख़्त कर देता है कि कीटाणु न घुसें" }, nudge: { en: "Germs can enter through your nose and mouth too. The protection comes from inside.", hi: "कीटाणु नाक और मुँह से भी घुस सकते हैं। सुरक्षा अंदर से आती है।" } }
    ],
    explain: { en: "Correct. A vaccine shows your immune system a harmless piece or a weakened form of a germ. Your body makes antibodies and remembers it, so if the real germ comes, it fights back fast. That is how India became polio-free.", hi: "सही। टीका प्रतिरक्षा तंत्र को किसी कीटाणु का हानिरहित हिस्सा या कमज़ोर रूप दिखाता है। शरीर एंटीबॉडी बनाता है और उसे याद रखता है, ताकि असली कीटाणु आए तो तुरंत लड़ सके। इसी तरह भारत पोलियो-मुक्त बना।" }
  },
  {
    id: "fut-blood",
    level: "future",
    world: "science",
    keywords: ["blood", "red", "haemoglobin", "hemoglobin", "iron", "ख़ून", "खून", "रक्त", "हीमोग्लोबिन"],
    starter: { en: "Why is blood red?", hi: "ख़ून लाल क्यों होता है?" },
    think: { en: "Blood carries oxygen all over your body. What do you think makes it red?", hi: "ख़ून पूरे शरीर में ऑक्सीजन पहुँचाता है। तुम्हें क्या लगता है, उसे लाल कौन बनाता है?" },
    choices: [
      { text: { en: "The red food we eat", hi: "हमारा लाल खाना" }, nudge: { en: "Even people who never eat red food have red blood! Something inside the blood cells makes the colour.", hi: "जो लोग कभी लाल खाना नहीं खाते, उनका ख़ून भी लाल होता है! रक्त कोशिकाओं के अंदर कोई चीज़ यह रंग देती है।" } },
      { text: { en: "Haemoglobin, a protein with iron", hi: "हीमोग्लोबिन, आयरन वाला एक प्रोटीन" }, correct: true },
      { text: { en: "It reflects our red heart", hi: "उसमें लाल दिल की परछाईं दिखती है" }, nudge: { en: "The heart looks red because of the blood in it, not the other way round. Think about what carries oxygen.", hi: "दिल लाल दिखता है उसमें भरे ख़ून की वजह से, उल्टा नहीं। सोचो, ऑक्सीजन कौन ले जाता है।" } }
    ],
    explain: { en: "Correct. Red blood cells are packed with haemoglobin, a protein that contains iron. It grabs oxygen in the lungs and carries it around the body. That is why doctors check haemoglobin when someone feels weak and tired.", hi: "सही। लाल रक्त कोशिकाएँ हीमोग्लोबिन से भरी होती हैं, जो आयरन वाला एक प्रोटीन है। यह फेफड़ों में ऑक्सीजन पकड़कर पूरे शरीर में ले जाता है। इसीलिए कमज़ोरी और थकान में डॉक्टर हीमोग्लोबिन जाँचते हैं।" }
  },
  {
    id: "fut-polar",
    level: "future",
    world: "science",
    keywords: ["polar", "bear", "skin", "fur", "adapt", "ध्रुवीय", "भालू", "त्वचा"],
    starter: { en: "What colour is a polar bear's skin?", hi: "ध्रुवीय भालू की त्वचा किस रंग की होती है?" },
    think: { en: "A polar bear's fur looks white. What colour do you think its skin is, and why?", hi: "ध्रुवीय भालू के बाल सफ़ेद दिखते हैं। तुम्हें क्या लगता है, उसकी त्वचा किस रंग की है, और क्यों?" },
    choices: [
      { text: { en: "White", hi: "सफ़ेद" }, nudge: { en: "The fur looks white, but underneath is a surprise! Think about which colour soaks up the most heat.", hi: "बाल सफ़ेद दिखते हैं, पर नीचे एक हैरानी है! सोचो, कौन-सा रंग सबसे ज़्यादा गर्मी सोखता है।" } },
      { text: { en: "Black", hi: "काली" }, correct: true },
      { text: { en: "Pink", hi: "गुलाबी" }, nudge: { en: "Good guess, but no! Which colour is best at absorbing the Sun's heat?", hi: "अच्छा अंदाज़ा, पर नहीं! सूरज की गर्मी सोखने में कौन-सा रंग सबसे अच्छा है?" } }
    ],
    explain: { en: "Correct. A polar bear's skin is black, which absorbs heat from the sun. Its fur hairs are actually see-through and only look white. Animals adapt like this to survive where they live.", hi: "सही। ध्रुवीय भालू की त्वचा काली होती है, जो धूप की गर्मी सोखती है। उसके बाल असल में पारदर्शी होते हैं और सिर्फ़ सफ़ेद दिखते हैं। जानवर इसी तरह अपने रहने की जगह के हिसाब से ढलते हैं।" }
  },
  {
    id: "fut-average",
    level: "future",
    world: "maths",
    keywords: ["average", "mean", "heart", "rate", "औसत", "माध्य"],
    starter: { en: "What is the average of 72, 78 and 75?", hi: "72, 78 और 75 का औसत क्या है?" },
    think: { en: "A doctor measured a pulse three times: 72, 78 and 75. What is the average?", hi: "डॉक्टर ने तीन बार नब्ज़ नापी: 72, 78 और 75। औसत क्या है?" },
    choices: [
      { text: "78", nudge: { en: "That's just the biggest one. Add all three, then divide by how many there are.", hi: "वह तो सबसे बड़ी संख्या है। तीनों को जोड़ो, फिर गिनती से भाग दो।" } },
      { text: "225", nudge: { en: "That's the total! Now divide it by 3.", hi: "वह तो कुल जोड़ है! अब इसे 3 से भाग दो।" } },
      { text: "75", correct: true }
    ],
    explain: { en: "Correct. 72 + 78 + 75 = 225, and 225 ÷ 3 = 75. Doctors and scientists use averages to see the pattern behind numbers that wobble up and down.", hi: "सही। 72 + 78 + 75 = 225, और 225 ÷ 3 = 75। डॉक्टर और वैज्ञानिक ऊपर-नीचे होती संख्याओं के पीछे का पैटर्न देखने के लिए औसत का इस्तेमाल करते हैं।" }
  },
  {
    id: "fut-density",
    level: "future",
    world: "science",
    keywords: ["ice", "float", "density", "dense", "बर्फ़", "बर्फ", "घनत्व"],
    starter: { en: "Why does ice float on water?", hi: "बर्फ़ पानी पर क्यों तैरती है?" },
    think: { en: "Ice is just frozen water. So why do you think it floats on liquid water?", hi: "बर्फ़ तो जमा हुआ पानी ही है। फिर तुम्हें क्या लगता है, वह पानी पर क्यों तैरती है?" },
    choices: [
      { text: { en: "Ice is lighter because it's cold", hi: "ठंडी होने से बर्फ़ हल्की हो जाती है" }, nudge: { en: "Cold doesn't make things lighter. Most things get denser when cold! Water is special. Think about how much space ice takes up.", hi: "ठंड से चीज़ें हल्की नहीं होतीं। ज़्यादातर चीज़ें ठंड में और घनी हो जाती हैं! पानी ख़ास है। सोचो, बर्फ़ कितनी जगह लेती है।" } },
      { text: { en: "Ice is less dense than liquid water", hi: "बर्फ़ का घनत्व पानी से कम है" }, correct: true },
      { text: { en: "Air bubbles push it up", hi: "हवा के बुलबुले उसे ऊपर धकेलते हैं" }, nudge: { en: "Even clear ice with no bubbles floats. Water does something unusual when it freezes.", hi: "बिना बुलबुलों वाली साफ़ बर्फ़ भी तैरती है। जमते समय पानी कुछ अनोखा करता है।" } }
    ],
    explain: { en: "Correct. When water freezes, its molecules lock into a pattern with more space between them, so ice takes up about 9% more space. Same mass, more volume: less dense, so it floats. That is why ponds freeze from the top and fish survive below.", hi: "सही। जमते समय पानी के अणु ज़्यादा खुली जगह वाले ढाँचे में बँध जाते हैं, इसलिए बर्फ़ लगभग 9% ज़्यादा जगह लेती है। वज़न वही, आयतन ज़्यादा: घनत्व कम, इसलिए वह तैरती है। इसीलिए तालाब ऊपर से जमते हैं और नीचे मछलियाँ बच जाती हैं।" }
  },
  {
    id: "fut-arch",
    level: "future",
    world: "history",
    keywords: ["arch", "arches", "bridge", "stone", "मेहराब", "पुल", "पत्थर"],
    starter: { en: "How can a stone arch hold up a heavy bridge?", hi: "पत्थर की मेहराब भारी पुल को कैसे थाम लेती है?" },
    think: { en: "Many old stone arches have no cement at all, yet they have stood for centuries. How do you think they hold the weight?", hi: "कई पुरानी पत्थर की मेहराबों में सीमेंट है ही नहीं, फिर भी वे सदियों से खड़ी हैं। तुम्हें क्या लगता है, वे वज़न कैसे थामती हैं?" },
    choices: [
      { text: { en: "The stones are glued together", hi: "पत्थर आपस में चिपके हैं" }, nudge: { en: "Many ancient arches have no glue or cement! Think about where the weight goes.", hi: "कई प्राचीन मेहराबों में कोई गोंद या सीमेंट नहीं है! सोचो, वज़न कहाँ जाता है।" } },
      { text: { en: "The stones press on each other and carry the weight to the sides", hi: "पत्थर एक-दूसरे पर दबाव डालते हैं और वज़न को किनारों तक पहुँचाते हैं" }, correct: true },
      { text: { en: "The middle stone is the heaviest", hi: "बीच वाला पत्थर सबसे भारी है" }, nudge: { en: "The top stone (keystone) matters, but not because it's heavy. Think about how each stone pushes on its neighbours.", hi: "ऊपर वाला पत्थर ज़रूरी है, पर भारी होने की वजह से नहीं। सोचो, हर पत्थर अपने पड़ोसी को कैसे दबाता है।" } }
    ],
    explain: { en: "Correct. In an arch every stone is squeezed (compression), and the curve carries the load sideways and down into the ground. Stone is very strong when squeezed, which is why arches have stood for 2,000 years.", hi: "सही। मेहराब में हर पत्थर दबा हुआ (संपीडन) रहता है, और घुमाव वज़न को बगल और नीचे ज़मीन तक पहुँचा देता है। पत्थर दबाव में बहुत मज़बूत होता है, इसीलिए मेहराबें 2,000 साल से खड़ी हैं।" }
  },
  {
    id: "fut-lever",
    level: "future",
    world: "science",
    keywords: ["lever", "see-saw", "seesaw", "pivot", "lift", "उत्तोलक", "सी-सॉ", "झूला"],
    starter: { en: "Where should you sit on a see-saw to lift a heavier friend?", hi: "भारी दोस्त को उठाने के लिए सी-सॉ पर कहाँ बैठना चाहिए?" },
    think: { en: "Your friend is heavier than you. Where on the see-saw should you sit to lift them?", hi: "तुम्हारा दोस्त तुमसे भारी है। उसे उठाने के लिए सी-सॉ पर कहाँ बैठोगे?" },
    choices: [
      { text: { en: "Closer to the middle", hi: "बीच के पास" }, nudge: { en: "Closer to the middle, you have less turning power. Where would you have more?", hi: "बीच के पास तुम्हारी घुमाने की ताक़त कम होगी। ज़्यादा ताक़त कहाँ मिलेगी?" } },
      { text: { en: "It doesn't matter", hi: "कोई फ़र्क नहीं पड़ता" }, nudge: { en: "It really does! The distance from the middle (the pivot) changes the turning force.", hi: "फ़र्क पड़ता है! बीच (धुरी) से दूरी घुमाने वाले बल को बदल देती है।" } },
      { text: { en: "Farther from the middle", hi: "बीच से दूर" }, correct: true }
    ],
    explain: { en: "Correct. Turning force = weight × distance from the pivot. Sitting farther away multiplies your force. This is the law of the lever. Engineers use it in cranes and scissors, and your arm works the same way.", hi: "सही। घुमाने वाला बल = वज़न × धुरी से दूरी। दूर बैठने से तुम्हारा बल कई गुना हो जाता है। यह उत्तोलक (lever) का नियम है। इंजीनियर इसे क्रेन और कैंची में इस्तेमाल करते हैं, और तुम्हारी बाँह भी ऐसे ही काम करती है।" }
  },
  {
    id: "fut-algorithm",
    level: "future",
    world: "coding",
    keywords: ["fastest", "search", "dictionary", "algorithm", "find", "शब्दकोश", "खोज", "एल्गोरिदम"],
    starter: { en: "What is the fastest way to find a word in a dictionary?", hi: "शब्दकोश में कोई शब्द ढूँढने का सबसे तेज़ तरीक़ा क्या है?" },
    think: { en: "A dictionary has 1,000 pages. What is the fastest way to find the word 'mango'?", hi: "एक शब्दकोश में 1,000 पन्ने हैं। 'mango' शब्द ढूँढने का सबसे तेज़ तरीक़ा क्या है?" },
    choices: [
      { text: { en: "Start at page 1 and read every word", hi: "पहले पन्ने से हर शब्द पढ़ो" }, nudge: { en: "That works, but it could take hours! The words are in order. How can you use that?", hi: "यह चलेगा, पर घंटों लग सकते हैं! शब्द क्रम में हैं। इसका फ़ायदा कैसे उठाओगे?" } },
      { text: { en: "Open the middle, then keep halving towards the word", hi: "बीच से खोलो, फिर शब्द की ओर आधा-आधा करते जाओ" }, correct: true },
      { text: { en: "Open pages at random", hi: "कहीं से भी पन्ने खोलो" }, nudge: { en: "You might get lucky, but it's not reliable. Use the fact that words are in alphabetical order.", hi: "शायद क़िस्मत साथ दे, पर यह भरोसेमंद नहीं। इस बात का इस्तेमाल करो कि शब्द वर्णमाला के क्रम में हैं।" } }
    ],
    explain: { en: "Correct. This is called binary search. Each step cuts the pages in half, so even 1,000 pages take only about 10 steps. Clever algorithms like this make search engines fast.", hi: "सही। इसे बाइनरी सर्च कहते हैं। हर कदम पन्नों को आधा कर देता है, इसलिए 1,000 पन्नों में भी सिर्फ़ लगभग 10 कदम लगते हैं। ऐसे चतुर एल्गोरिदम सर्च इंजन को तेज़ बनाते हैं।" }
  },
  {
    id: "fut-if",
    level: "future",
    world: "coding",
    keywords: ["if", "else", "condition", "decision", "अगर", "शर्त"],
    starter: { en: "What does this IF-ELSE program do on a sunny day?", hi: "धूप वाले दिन यह IF-ELSE प्रोग्राम क्या करेगा?" },
    think: { en: "The program says: IF it is raining, THEN take an umbrella, ELSE wear a cap. Today is sunny. What happens?", hi: "प्रोग्राम कहता है: IF बारिश हो रही है, THEN छाता लो, ELSE टोपी पहनो। आज धूप है। क्या होगा?" },
    choices: [
      { text: { en: "Take an umbrella", hi: "छाता लो" }, nudge: { en: "The umbrella is only for when it's raining. Is it raining today?", hi: "छाता सिर्फ़ बारिश के लिए है। क्या आज बारिश हो रही है?" } },
      { text: { en: "Wear a cap", hi: "टोपी पहनो" }, correct: true },
      { text: { en: "Nothing", hi: "कुछ नहीं" }, nudge: { en: "There is an ELSE part! It tells the program what to do when it's not raining.", hi: "इसमें ELSE भी है! वह बताता है कि बारिश न हो तो क्या करना है।" } }
    ],
    explain: { en: "Correct. IF-ELSE lets a program make decisions. Your phone runs thousands of them, like: IF the battery is low, THEN show a warning.", hi: "सही। IF-ELSE से प्रोग्राम फ़ैसले लेता है। तुम्हारे फ़ोन में ऐसे हज़ारों फ़ैसले चलते हैं, जैसे: IF बैटरी कम है, THEN चेतावनी दिखाओ।" }
  },
  {
    id: "fut-rgb",
    level: "future",
    world: "art",
    keywords: ["screen", "light", "rgb", "pixel", "pixels", "स्क्रीन", "पिक्सेल"],
    starter: { en: "On a phone screen, what do red and green light make?", hi: "फ़ोन की स्क्रीन पर लाल और हरी रोशनी मिलकर क्या बनाती हैं?" },
    think: { en: "Screens mix light, not paint. What do you think red light and green light make together?", hi: "स्क्रीन पेंट नहीं, रोशनी मिलाती है। तुम्हें क्या लगता है, लाल और हरी रोशनी मिलकर क्या बनाती हैं?" },
    choices: [
      { text: { en: "Brown", hi: "भूरा" }, nudge: { en: "That's what happens with paint! Light mixes differently: adding light makes things brighter.", hi: "ऐसा पेंट के साथ होता है! रोशनी अलग तरह से मिलती है: रोशनी जोड़ने से चीज़ें और चमकीली होती हैं।" } },
      { text: { en: "Yellow", hi: "पीला" }, correct: true },
      { text: { en: "Black", hi: "काला" }, nudge: { en: "Adding light can't make it darker! Think brighter.", hi: "रोशनी जोड़ने से अँधेरा नहीं हो सकता! और चमकीला सोचो।" } }
    ],
    explain: { en: "Correct. Red light + green light = yellow, and red + green + blue light = white. This is additive mixing. Every colour on your screen comes from tiny red, green and blue dots called pixels.", hi: "सही। लाल रोशनी + हरी रोशनी = पीला, और लाल + हरी + नीली रोशनी = सफ़ेद। इसे योगात्मक मिश्रण (additive mixing) कहते हैं। स्क्रीन का हर रंग छोटे लाल, हरे और नीले बिंदुओं से बनता है, जिन्हें पिक्सेल कहते हैं।" }
  },
  {
    id: "fut-perspective",
    level: "future",
    world: "art",
    keywords: ["railway", "tracks", "perspective", "far", "meet", "रेल", "पटरी", "परिप्रेक्ष्य"],
    starter: { en: "Why do railway tracks seem to meet far away?", hi: "रेल की पटरियाँ दूर जाकर मिलती हुई क्यों दिखती हैं?" },
    think: { en: "Stand between railway tracks and look into the distance. Why do you think they seem to meet?", hi: "रेल की पटरियों के बीच खड़े होकर दूर देखो। तुम्हें क्या लगता है, वे मिलती हुई क्यों दिखती हैं?" },
    choices: [
      { text: { en: "The tracks really get closer", hi: "पटरियाँ सच में पास आ जाती हैं" }, nudge: { en: "If they did, the train couldn't run! The gap stays the same. It's about how our eyes see distance.", hi: "ऐसा होता तो ट्रेन चल ही नहीं पाती! दूरी उतनी ही रहती है। बात यह है कि हमारी आँखें दूरी को कैसे देखती हैं।" } },
      { text: { en: "Things look smaller the farther away they are", hi: "चीज़ें जितनी दूर होती हैं, उतनी छोटी दिखती हैं" }, correct: true },
      { text: { en: "Fog hides the gap", hi: "कोहरा बीच की जगह छिपा देता है" }, nudge: { en: "It happens on clear days too. Think about how big far-away things look.", hi: "साफ़ दिनों में भी ऐसा होता है। सोचो, दूर की चीज़ें कितनी बड़ी दिखती हैं।" } }
    ],
    explain: { en: "Correct. Far-away things look smaller, so the gap between the rails shrinks until it seems to vanish at one point, the vanishing point. Artists use this, called perspective, to make flat drawings look deep.", hi: "सही। दूर की चीज़ें छोटी दिखती हैं, इसलिए पटरियों के बीच की जगह सिकुड़ते-सिकुड़ते एक बिंदु पर ग़ायब होती लगती है, जिसे लोप बिंदु (vanishing point) कहते हैं। चित्रकार इसे, यानी परिप्रेक्ष्य (perspective) को, सपाट चित्रों में गहराई दिखाने के लिए इस्तेमाल करते हैं।" }
  },
  {
    id: "fut-rainbow",
    level: "future",
    world: "science",
    keywords: ["rainbow", "prism", "refraction", "इंद्रधनुष", "प्रिज़्म", "अपवर्तन"],
    starter: { en: "How does a rainbow form?", hi: "इंद्रधनुष कैसे बनता है?" },
    think: { en: "Rainbows appear when the Sun shines during or just after rain. How do you think they form?", hi: "इंद्रधनुष तब दिखता है जब बारिश के दौरान या बाद में धूप निकलती है। तुम्हें क्या लगता है, वह कैसे बनता है?" },
    choices: [
      { text: { en: "Raindrops bend and split sunlight into colours", hi: "बारिश की बूँदें धूप को मोड़कर रंगों में बाँट देती हैं" }, correct: true },
      { text: { en: "Clouds are painted in colours", hi: "बादल रंगों से रंगे होते हैं" }, nudge: { en: "Clouds are just water droplets. The colours come from sunlight. What happens when light passes through water?", hi: "बादल तो बस पानी की बूँदें हैं। रंग धूप से आते हैं। जब रोशनी पानी से गुज़रती है तो क्या होता है?" } },
      { text: { en: "The sky reflects flowers", hi: "आसमान में फूलों की परछाईं दिखती है" }, nudge: { en: "Ha! Rainbows appear over deserts and seas too. Think about sunlight passing through raindrops.", hi: "हा! इंद्रधनुष रेगिस्तान और समुद्र के ऊपर भी दिखते हैं। धूप के बारिश की बूँदों से गुज़रने के बारे में सोचो।" } }
    ],
    explain: { en: "Correct. Each raindrop works like a tiny prism. Light bends as it enters and leaves the drop (refraction), and each colour bends by a different amount (dispersion), so white sunlight spreads into violet, indigo, blue, green, yellow, orange and red. You see a rainbow when the Sun is behind you.", hi: "सही। हर बूँद एक छोटे प्रिज़्म जैसा काम करती है। रोशनी बूँद में घुसते और निकलते समय मुड़ती है (अपवर्तन), और हर रंग अलग-अलग मुड़ता है (विक्षेपण), इसलिए सफ़ेद धूप बैंगनी, जामुनी, नीले, हरे, पीले, नारंगी और लाल रंगों में फैल जाती है। इंद्रधनुष तब दिखता है जब सूरज तुम्हारे पीछे हो।" }
  },
  {
    id: "fut-simile",
    level: "future",
    world: "english",
    keywords: ["simile", "metaphor", "brave", "lion", "compare", "उपमा", "तुलना"],
    starter: { en: "'As brave as a lion' is an example of what?", hi: "'As brave as a lion' (शेर जैसा बहादुर) किसका उदाहरण है?" },
    think: { en: "The phrase compares a person to a lion. What is this called?", hi: "यह वाक्यांश किसी इंसान की तुलना शेर से करता है। इसे क्या कहते हैं?" },
    choices: [
      { text: { en: "A verb", hi: "क्रिया (verb)" }, nudge: { en: "A verb is an action word. This phrase compares someone to something else.", hi: "क्रिया तो काम बताने वाला शब्द है। यह वाक्यांश किसी की तुलना किसी और से करता है।" } },
      { text: { en: "A simile", hi: "उपमा (simile)" }, correct: true },
      { text: { en: "A question", hi: "प्रश्न" }, nudge: { en: "There is no question here! The phrase compares a person to a lion using 'as'.", hi: "इसमें कोई सवाल नहीं है! यह 'as' से इंसान की तुलना शेर से करता है।" } }
    ],
    explain: { en: "Correct. A simile compares two things using 'like' or 'as': 'as brave as a lion', 'runs like the wind'. Hindi uses them too: 'चाँद सा चेहरा'. Writers use similes to paint pictures with words.", hi: "सही। उपमा (simile) 'like' या 'as' से दो चीज़ों की तुलना करती है: 'as brave as a lion', 'runs like the wind'। हिंदी में भी: 'चाँद सा चेहरा'। लेखक शब्दों से तस्वीर बनाने के लिए उपमा का इस्तेमाल करते हैं।" }
  },
  {
    id: "fut-tense",
    level: "future",
    world: "english",
    keywords: ["tense", "past", "walked", "काल", "भूतकाल"],
    starter: { en: "Which sentence is in the past tense?", hi: "कौन-सा वाक्य भूतकाल (past tense) में है?" },
    think: { en: "The past tense tells us something already happened. Which sentence is in the past tense?", hi: "भूतकाल बताता है कि कुछ पहले हो चुका है। कौन-सा वाक्य भूतकाल में है?" },
    choices: [
      { text: "I walk to school.", nudge: { en: "That's something you do now or every day. Which one already happened?", hi: "यह तो अभी या रोज़ होने वाली बात है। कौन-सा पहले हो चुका है?" } },
      { text: "I walked to school.", correct: true },
      { text: "I will walk to school.", nudge: { en: "'Will' points to the future. Look for the action that is already finished.", hi: "'Will' भविष्य बताता है। वह काम ढूँढो जो पूरा हो चुका है।" } }
    ],
    explain: { en: "Correct. 'Walked' shows the action is finished. Many English verbs make the past tense by adding '-ed', but some change completely: go → went, eat → ate.", hi: "सही। 'Walked' बताता है कि काम पूरा हो चुका है। अंग्रेज़ी की कई क्रियाओं में '-ed' जोड़कर भूतकाल बनता है, पर कुछ पूरी बदल जाती हैं: go → went, eat → ate।" }
  },
  {
    id: "fut-pov",
    level: "future",
    world: "english",
    keywords: ["person", "point", "view", "narrator", "first", "पुरुष", "दृष्टिकोण", "कथावाचक"],
    starter: { en: "'I opened the door and gasped.' Who is telling the story?", hi: "'I opened the door and gasped.' कहानी कौन सुना रहा है?" },
    think: { en: "Look at the word 'I'. In which person is this story told?", hi: "'I' (मैं) शब्द को देखो। यह कहानी किस पुरुष में सुनाई गई है?" },
    choices: [
      { text: { en: "Third person", hi: "अन्य पुरुष (third person)" }, nudge: { en: "Third person uses 'he', 'she' or 'they'. This one uses 'I'.", hi: "अन्य पुरुष में 'he', 'she' या 'they' होता है। इसमें 'I' है।" } },
      { text: { en: "First person", hi: "उत्तम पुरुष (first person)" }, correct: true },
      { text: { en: "Second person", hi: "मध्यम पुरुष (second person)" }, nudge: { en: "Second person uses 'you'. This one uses 'I'.", hi: "मध्यम पुरुष में 'you' होता है। इसमें 'I' है।" } }
    ],
    explain: { en: "Correct. First person uses 'I' and lets us feel what the narrator feels. Third person ('she opened the door') can show many characters. Writers choose the point of view that tells the story best.", hi: "सही। उत्तम पुरुष में 'I' (मैं) होता है, जिससे हम कथावाचक की भावनाएँ महसूस करते हैं। अन्य पुरुष ('she opened the door') में कई किरदार दिखाए जा सकते हैं। लेखक वही दृष्टिकोण चुनते हैं जो कहानी को सबसे अच्छे से कहे।" }
  }
);
