// Dream paths for Class 5 to 10, in English (en) and Hindi (hi).
// Each path: what the job is, a day in the life, signs it might suit you, a role model, an India fact,
// three modules (big idea, example, go deeper, animation, links, try it, puzzles per level),
// a project, and where it leads after school. Levels: young = Class 5-7, future = Class 8-10.
(function () {
  var L = {
    nasa: { kind: "explore", label: { en: "NASA Space Place: games and videos about space", hi: "NASA Space Place: अंतरिक्ष के खेल और वीडियो" }, url: "https://spaceplace.nasa.gov/" },
    isro: { kind: "read", label: { en: "ISRO: India's space missions, including Chandrayaan", hi: "ISRO: भारत के अंतरिक्ष मिशन, चंद्रयान समेत" }, url: "https://www.isro.gov.in/" },
    epathshala: { kind: "watch", label: { en: "ePathshala (NCERT): free videos and books, in Hindi and English", hi: "ई-पाठशाला (NCERT): मुफ़्त वीडियो और किताबें, हिंदी और अंग्रेज़ी में" }, url: "https://epathshala.nic.in/" },
    ncert: { kind: "read", label: { en: "NCERT textbooks: free to read online", hi: "NCERT की किताबें: ऑनलाइन मुफ़्त पढ़ें" }, url: "https://ncert.nic.in/textbook.php" },
    diksha: { kind: "watch", label: { en: "DIKSHA: lessons and videos for your class", hi: "दीक्षा: तुम्हारी कक्षा के पाठ और वीडियो" }, url: "https://diksha.gov.in/" },
    khan: { kind: "watch", label: { en: "Khan Academy: free video lessons (search the topic)", hi: "ख़ान अकैडमी: मुफ़्त वीडियो पाठ (विषय खोजो)" }, url: "https://www.khanacademy.org/" },
    scratch: { kind: "explore", label: { en: "Scratch: make your own games and stories with code", hi: "Scratch: कोड से अपने गेम और कहानियाँ बनाओ" }, url: "https://scratch.mit.edu/" },
    unplugged: { kind: "explore", label: { en: "CS Unplugged: computer science activities without a computer", hi: "CS Unplugged: बिना कंप्यूटर के कंप्यूटर साइंस की गतिविधियाँ" }, url: "https://www.csunplugged.org/" },
    codeorg: { kind: "explore", label: { en: "Code.org: free coding courses", hi: "Code.org: कोडिंग के मुफ़्त कोर्स" }, url: "https://code.org/" },
    storyweaver: { kind: "read", label: { en: "StoryWeaver: free stories in many Indian languages", hi: "StoryWeaver: कई भारतीय भाषाओं में मुफ़्त कहानियाँ" }, url: "https://storyweaver.org.in/" },
    musiclab: { kind: "explore", label: { en: "Chrome Music Lab: play with sound and rhythm", hi: "Chrome Music Lab: आवाज़ और ताल से खेलो" }, url: "https://musiclab.chromeexperiments.com/" },
    climatekids: { kind: "explore", label: { en: "NASA Climate Kids: weather, water and our planet", hi: "NASA Climate Kids: मौसम, पानी और हमारी धरती" }, url: "https://climatekids.nasa.gov/" },
    artsculture: { kind: "explore", label: { en: "Google Arts & Culture: explore Indian art up close", hi: "Google Arts & Culture: भारतीय कला को पास से देखो" }, url: "https://artsandculture.google.com/" },
    khelo: { kind: "read", label: { en: "Khelo India: sports programmes for young athletes", hi: "खेलो इंडिया: युवा खिलाड़ियों के लिए खेल कार्यक्रम" }, url: "https://kheloindia.gov.in/" }
  };

  // A PhET simulation, linked through PhET's own search so the link keeps working.
  function phet(name, hi) {
    return { kind: "explore", label: { en: "PhET simulation: " + name, hi: "PhET सिमुलेशन: " + hi }, url: "https://phet.colorado.edu/en/search?q=" + encodeURIComponent(name) };
  }

  window.BTJ.paths = [
    {
      id: "space",
      icon: "🚀",
      tint: "#D6E4FF",
      title: { en: "Space Scientist", hi: "अंतरिक्ष वैज्ञानिक" },
      dream: { en: "Explore stars and planets, and build rockets and satellites like the scientists at ISRO.", hi: "तारों और ग्रहों को समझो, और ISRO के वैज्ञानिकों की तरह रॉकेट और उपग्रह बनाओ।" },
      job: { en: "Space scientists study the Moon, planets and stars. They design rockets and satellites, and use data from space to forecast weather, map India and guide fishing boats to good waters.", hi: "अंतरिक्ष वैज्ञानिक चाँद, ग्रहों और तारों का अध्ययन करते हैं। वे रॉकेट और उपग्रह बनाते हैं, और अंतरिक्ष से मिले डेटा से मौसम का अनुमान लगाते हैं, भारत का नक्शा बनाते हैं और मछुआरों की नावों को अच्छे पानी तक पहुँचाते हैं।" },
      day: [
        { en: "Check the data a satellite has sent back", hi: "उपग्रह से आया डेटा जाँचना" },
        { en: "Test a rocket part so it survives the shaking of launch", hi: "रॉकेट के किसी हिस्से की जाँच करना कि वह उड़ान के झटके सह ले" },
        { en: "Write code to plan a spacecraft's path to the Moon", hi: "चाँद तक अंतरिक्ष यान का रास्ता तय करने के लिए कोड लिखना" }
      ],
      signs: [
        { en: "You love looking at the night sky", hi: "तुम्हें रात का आसमान देखना बहुत पसंद है" },
        { en: "You keep asking \"how far?\" and \"how fast?\"", hi: "तुम बार-बार पूछते हो \"कितनी दूर?\" और \"कितना तेज़?\"" },
        { en: "You enjoy maths puzzles and building things", hi: "तुम्हें गणित की पहेलियाँ और चीज़ें बनाना अच्छा लगता है" }
      ],
      hero: { en: "Kalpana Chawla grew up in Karnal, Haryana, and became the first woman of Indian origin to fly to space.", hi: "कल्पना चावला हरियाणा के करनाल में पली-बढ़ीं और अंतरिक्ष में जाने वाली भारतीय मूल की पहली महिला बनीं।" },
      india: { en: "In 2023, India's Chandrayaan-3 became the first mission to land near the Moon's south pole.", hi: "2023 में भारत का चंद्रयान-3 चाँद के दक्षिणी ध्रुव के पास उतरने वाला पहला मिशन बना।" },
      modules: [
        {
          id: "moon",
          title: { en: "The Moon and the sky", hi: "चाँद और आसमान" },
          skill: { en: "Sky watcher", hi: "आसमान का जासूस" },
          big: { en: "The Moon makes no light of its own. The Sun always lights half of it, and as the Moon travels around the Earth in about a month, we see different amounts of that bright half. That is why its shape seems to change.", hi: "चाँद की अपनी रोशनी नहीं होती। सूरज हमेशा उसके आधे हिस्से को रोशन करता है, और जब चाँद लगभग एक महीने में धरती का चक्कर लगाता है, तो हमें उस चमकते हिस्से का अलग-अलग भाग दिखता है। इसीलिए उसका आकार बदलता लगता है।" },
          example: { en: "Festivals follow the Moon. Diwali falls on amavasya, the new moon night, which is why it is the darkest night and full of diyas. Purnima is the full moon.", hi: "त्योहार चाँद के हिसाब से चलते हैं। दिवाली अमावस को आती है, यानी बिना चाँद की रात, इसीलिए वह सबसे अँधेरी रात होती है और दीयों से भरी होती है। पूर्णिमा पूरे चाँद की रात है।" },
          deeper: { en: "The Moon takes about 29.5 days to go from one new moon to the next. It always shows us the same face, because it spins exactly once each time it goes around the Earth. Light from the Moon takes about 1.3 seconds to reach us.", hi: "चाँद को एक अमावस से अगली अमावस तक लगभग 29.5 दिन लगते हैं। वह हमेशा हमें एक ही चेहरा दिखाता है, क्योंकि धरती का एक चक्कर लगाते हुए वह ठीक एक बार अपनी धुरी पर घूमता है। चाँद से रोशनी को हम तक पहुँचने में लगभग 1.3 सेकंड लगते हैं।" },
          animation: "moon",
          links: [L.nasa, L.epathshala],
          tryIt: { en: "Draw the Moon every night for two weeks, at the same time. Write the date under each drawing. Can you predict tomorrow's shape?", hi: "दो हफ़्ते तक हर रात एक ही समय पर चाँद का चित्र बनाओ। हर चित्र के नीचे तारीख़ लिखो। क्या तुम कल का आकार पहले से बता सकते हो?" },
          puzzles: { young: ["sci-moon", "sci-sky"], future: ["fut-lightyear"] }
        },
        {
          id: "gravity",
          title: { en: "Gravity and orbits", hi: "गुरुत्वाकर्षण और कक्षा" },
          skill: { en: "Orbit thinker", hi: "कक्षा का विचारक" },
          big: { en: "Gravity pulls everything towards the Earth. A satellite stays up because it moves sideways very fast: it keeps falling towards the Earth, but keeps missing it. That never-ending fall is called an orbit.", hi: "गुरुत्वाकर्षण हर चीज़ को धरती की ओर खींचता है। उपग्रह ऊपर इसलिए टिका रहता है क्योंकि वह बहुत तेज़ी से बगल में चलता है: वह धरती की ओर गिरता रहता है, पर हर बार उससे चूक जाता है। इस कभी न ख़त्म होने वाले गिरने को कक्षा (orbit) कहते हैं।" },
          example: { en: "India's weather satellites watch cyclones forming over the sea. Warnings from that data help coastal villages in Odisha and Andhra Pradesh move people to safety in time.", hi: "भारत के मौसम उपग्रह समुद्र के ऊपर बनते चक्रवातों पर नज़र रखते हैं। उस डेटा से मिली चेतावनी ओडिशा और आंध्र प्रदेश के तटीय गाँवों को समय रहते लोगों को सुरक्षित जगह पहुँचाने में मदद करती है।" },
          deeper: { en: "Close to the Earth, a satellite needs about 28,000 km/h to stay in orbit. Higher orbits are slower: satellites about 36,000 km up go around once a day, so they stay over the same spot. Weather and TV satellites use these geostationary orbits.", hi: "धरती के पास किसी उपग्रह को कक्षा में रहने के लिए लगभग 28,000 किमी प्रति घंटा की रफ़्तार चाहिए। ऊँची कक्षाएँ धीमी होती हैं: लगभग 36,000 किमी ऊपर के उपग्रह दिन में एक चक्कर लगाते हैं, इसलिए एक ही जगह के ऊपर टिके रहते हैं। मौसम और टीवी के उपग्रह इन्हीं भू-स्थिर कक्षाओं का इस्तेमाल करते हैं।" },
          animation: "orbit",
          links: [phet("Gravity and Orbits", "गुरुत्वाकर्षण और कक्षाएँ"), L.isro],
          tryIt: { en: "Tie a small ball or a rolled-up sock to a string and swing it around in a circle (outdoors, away from people). Let go and watch which way it flies. The string is doing gravity's job.", hi: "एक छोटी गेंद या मोज़े के गोले को रस्सी से बाँधकर गोल-गोल घुमाओ (बाहर, लोगों से दूर)। फिर छोड़ दो और देखो वह किस ओर उड़ती है। रस्सी वही काम कर रही है जो गुरुत्वाकर्षण करता है।" },
          puzzles: { young: ["sci-fall"], future: ["fut-gravity"] }
        },
        {
          id: "mission",
          title: { en: "Mission control: computers in space", hi: "मिशन कंट्रोल: अंतरिक्ष में कंप्यूटर" },
          skill: { en: "Mission coder", hi: "मिशन कोडर" },
          big: { en: "A spacecraft can't stop and ask for help. Every move is planned as exact instructions that a computer follows step by step. Repeating instructions with loops keeps the plan short and clear.", hi: "अंतरिक्ष यान रुककर मदद नहीं माँग सकता। हर कदम ऐसे सटीक निर्देशों के रूप में तय होता है जिन्हें कंप्यूटर एक-एक कदम मानता है। लूप से निर्देश दोहराने पर योजना छोटी और साफ़ रहती है।" },
          example: { en: "Chandrayaan-3's lander, Vikram, landed on its own. Its computer read its sensors and adjusted its engines, step by step, without waiting for instructions from Earth.", hi: "चंद्रयान-3 का लैंडर विक्रम अपने आप उतरा। उसका कंप्यूटर सेंसर पढ़ता रहा और धरती से निर्देश का इंतज़ार किए बिना, एक-एक कदम इंजन को सँभालता रहा।" },
          deeper: { en: "Computers store everything as 0s and 1s, called bits. Signals from deep space are so weak that missions add extra bits to every message, so the computer can spot and fix errors.", hi: "कंप्यूटर सब कुछ 0 और 1 के रूप में रखते हैं, जिन्हें बिट कहते हैं। गहरे अंतरिक्ष से आने वाले संकेत इतने कमज़ोर होते हैं कि मिशन हर संदेश में अतिरिक्त बिट जोड़ते हैं, ताकि कंप्यूटर गलतियाँ पकड़कर ठीक कर सके।" },
          animation: "binary",
          links: [L.scratch, L.unplugged],
          tryIt: { en: "Write instructions to guide a friend from your door to a chair, without saying 'left' or 'right' more than three times. Use 'repeat'. Did they get there?", hi: "किसी दोस्त को दरवाज़े से कुर्सी तक ले जाने के निर्देश लिखो, 'बाएँ' या 'दाएँ' तीन बार से ज़्यादा कहे बिना। 'दोहराओ' का इस्तेमाल करो। क्या वह पहुँच पाया?" },
          puzzles: { young: ["code-loop"], future: ["fut-binary"] }
        }
      ],
      project: {
        title: { en: "Plan a Moon mission", hi: "चाँद मिशन की योजना बनाओ" },
        young: { en: "Make a poster of a mission to the Moon: the rocket, the lander, and one experiment you would do there. Explain why you chose that landing spot.", hi: "चाँद मिशन का एक पोस्टर बनाओ: रॉकेट, लैंडर, और वहाँ करने वाला एक प्रयोग। बताओ कि तुमने उतरने की वह जगह क्यों चुनी।" },
        future: { en: "Plan a Moon mission on paper: the launch, the journey, the landing site and three experiments. Use the 1.3-second delay for light to explain why the lander must make its own decisions.", hi: "काग़ज़ पर चाँद मिशन की योजना बनाओ: लॉन्च, यात्रा, उतरने की जगह और तीन प्रयोग। रोशनी की 1.3 सेकंड की देरी से समझाओ कि लैंडर को अपने फ़ैसले ख़ुद क्यों लेने पड़ते हैं।" }
      },
      next: {
        subjects: { en: "Maths and Science, especially Physics", hi: "गणित और विज्ञान, ख़ासकर भौतिकी" },
        stream: { en: "Science stream with Physics, Chemistry and Maths in Class 11 and 12", hi: "कक्षा 11 और 12 में भौतिकी, रसायन और गणित वाली विज्ञान धारा" },
        route: { en: "A degree in engineering or physics. Colleges such as IIST in Thiruvananthapuram train students for India's space programme.", hi: "इंजीनियरिंग या भौतिकी की डिग्री। तिरुवनंतपुरम का IIST जैसे कॉलेज भारत के अंतरिक्ष कार्यक्रम के लिए छात्रों को तैयार करते हैं।" }
      }
    },

    {
      id: "doctor",
      icon: "🩺",
      tint: "#FFD9DE",
      title: { en: "Doctor", hi: "डॉक्टर" },
      dream: { en: "Find out how bodies work, and help people get well.", hi: "जानो कि शरीर कैसे काम करता है, और लोगों को ठीक होने में मदद करो।" },
      job: { en: "Doctors find out why people are unwell and help them get better. They listen, examine, order tests and explain how to stay healthy. Many work in village health centres, where one doctor can help thousands of people.", hi: "डॉक्टर पता लगाते हैं कि लोग बीमार क्यों हैं और उन्हें ठीक होने में मदद करते हैं। वे सुनते हैं, जाँचते हैं, टेस्ट करवाते हैं और समझाते हैं कि स्वस्थ कैसे रहें। कई डॉक्टर गाँव के स्वास्थ्य केंद्रों में काम करते हैं, जहाँ एक डॉक्टर हज़ारों लोगों की मदद कर सकता है।" },
      day: [
        { en: "Listen carefully as a patient describes how they feel", hi: "मरीज़ की बात ध्यान से सुनना कि वह कैसा महसूस कर रहा है" },
        { en: "Read test results, like a blood report", hi: "टेस्ट के नतीजे पढ़ना, जैसे ख़ून की रिपोर्ट" },
        { en: "Explain to a family how to prevent an illness", hi: "किसी परिवार को समझाना कि बीमारी से कैसे बचें" }
      ],
      signs: [
        { en: "You want to help people who are hurt or unwell", hi: "तुम चोटिल या बीमार लोगों की मदद करना चाहते हो" },
        { en: "You're curious about how the body works", hi: "तुम्हें जानना अच्छा लगता है कि शरीर कैसे काम करता है" },
        { en: "You stay calm and patient when others are worried", hi: "जब दूसरे परेशान हों, तब भी तुम शांत और धैर्यवान रहते हो" }
      ],
      hero: { en: "Anandibai Joshi earned her medical degree in 1886 and became one of India's first women doctors.", hi: "आनंदीबाई जोशी ने 1886 में डॉक्टरी की डिग्री ली और भारत की पहली महिला डॉक्टरों में से एक बनीं।" },
      india: { en: "India was declared free of polio in 2014, after crores of children got two drops of vaccine.", hi: "करोड़ों बच्चों को टीके की दो बूँदें पिलाने के बाद, 2014 में भारत को पोलियो-मुक्त घोषित किया गया।" },
      modules: [
        {
          id: "germs",
          title: { en: "Germs and staying healthy", hi: "कीटाणु और स्वस्थ रहना" },
          skill: { en: "Germ buster", hi: "कीटाणु योद्धा" },
          big: { en: "Many illnesses are caused by germs: tiny living things like bacteria and viruses, too small to see. They spread through dirty hands, water, coughs and food. Simple habits stop most of them.", hi: "कई बीमारियाँ कीटाणुओं से होती हैं: बैक्टीरिया और वायरस जैसे छोटे जीव, जो दिखते भी नहीं। ये गंदे हाथों, पानी, खाँसी और खाने से फैलते हैं। आसान आदतें इनमें से ज़्यादातर को रोक देती हैं।" },
          example: { en: "Diarrhoea is still a big danger for young children in India. Washing hands with soap and drinking clean water prevent many cases. That is why handwashing is taught in schools across the country.", hi: "भारत में छोटे बच्चों के लिए दस्त अब भी बड़ा ख़तरा है। साबुन से हाथ धोने और साफ़ पानी पीने से बहुत से मामले रुक जाते हैं। इसीलिए देश भर के स्कूलों में हाथ धोना सिखाया जाता है।" },
          deeper: { en: "Vaccines train the immune system before a germ arrives. When enough people are vaccinated, the germ can't spread easily, which protects even those who can't be vaccinated. This is called herd immunity.", hi: "टीके किसी कीटाणु के आने से पहले ही प्रतिरक्षा तंत्र को तैयार कर देते हैं। जब काफ़ी लोग टीका लगवा लेते हैं, तो कीटाणु आसानी से नहीं फैल पाता, जिससे वे लोग भी बचते हैं जो टीका नहीं लगवा सकते। इसे सामूहिक प्रतिरक्षा (herd immunity) कहते हैं।" },
          links: [L.khan, L.epathshala],
          tryIt: { en: "Rub a little oil and turmeric on your hands, then wash for 5 seconds. Check what's left. Wash again for 20 seconds with soap. What changed? Germs stick like the oil.", hi: "हाथों पर थोड़ा तेल और हल्दी लगाओ, फिर 5 सेकंड धोओ। देखो क्या बचा। अब साबुन से 20 सेकंड धोओ। क्या बदला? कीटाणु भी तेल की तरह चिपकते हैं।" },
          puzzles: { young: ["sci-germs"], future: ["fut-vaccine"] }
        },
        {
          id: "heart",
          title: { en: "Your heart and blood", hi: "तुम्हारा दिल और ख़ून" },
          skill: { en: "Body explorer", hi: "शरीर खोजी" },
          big: { en: "Your heart is a muscle about the size of your fist. It pumps blood all day and night. Blood carries oxygen from your lungs and food energy to every part of your body.", hi: "तुम्हारा दिल लगभग तुम्हारी मुट्ठी जितनी बड़ी एक मांसपेशी है। वह दिन-रात ख़ून पंप करता है। ख़ून फेफड़ों से ऑक्सीजन और खाने से ऊर्जा लेकर शरीर के हर हिस्से तक पहुँचाता है।" },
          example: { en: "When a doctor holds your wrist, they are counting your pulse: each beat is your heart pushing blood. A fast pulse at rest can be a sign of fever or illness.", hi: "जब डॉक्टर तुम्हारी कलाई पकड़ते हैं, तो वे तुम्हारी नब्ज़ गिन रहे होते हैं: हर धड़कन तुम्हारे दिल का ख़ून धकेलना है। आराम में तेज़ नब्ज़ बुख़ार या बीमारी का संकेत हो सकती है।" },
          deeper: { en: "Blood is red because of haemoglobin, an iron-rich protein that carries oxygen. Many Indian children and women have too little iron (anaemia), which makes them tired. Green leafy vegetables, jaggery and pulses help.", hi: "ख़ून हीमोग्लोबिन की वजह से लाल होता है, जो आयरन से भरपूर एक प्रोटीन है और ऑक्सीजन ले जाता है। भारत में कई बच्चों और महिलाओं में आयरन की कमी (एनीमिया) होती है, जिससे थकान रहती है। हरी पत्तेदार सब्ज़ियाँ, गुड़ और दालें मदद करती हैं।" },
          animation: "heart",
          links: [L.khan, L.ncert],
          tryIt: { en: "Find your pulse on your wrist or neck. Count beats for 15 seconds and multiply by 4. Now jump 20 times and count again. Write both numbers.", hi: "कलाई या गर्दन पर अपनी नब्ज़ ढूँढो। 15 सेकंड तक धड़कन गिनो और 4 से गुणा करो। अब 20 बार कूदो और फिर गिनो। दोनों संख्याएँ लिखो।" },
          puzzles: { young: ["sci-heart"], future: ["fut-blood"] }
        },
        {
          id: "numbers",
          title: { en: "Read the numbers", hi: "संख्याएँ पढ़ो" },
          skill: { en: "Data reader", hi: "आँकड़े पढ़ने वाला" },
          big: { en: "Doctors use numbers every day: temperature, pulse, weight, blood tests. A single number can mislead, so they look at patterns over time and compare with what is normal for the person's age.", hi: "डॉक्टर रोज़ संख्याओं का इस्तेमाल करते हैं: तापमान, नब्ज़, वज़न, ख़ून की जाँच। सिर्फ़ एक संख्या धोखा दे सकती है, इसलिए वे समय के साथ पैटर्न देखते हैं और उम्र के हिसाब से सामान्य से तुलना करते हैं।" },
          example: { en: "Anganwadi workers weigh babies every month and mark it on a growth chart. If the line stops rising, it is an early warning that the baby needs more food or care.", hi: "आंगनवाड़ी कार्यकर्ता हर महीने बच्चों का वज़न करके विकास चार्ट पर लिखती हैं। अगर रेखा ऊपर बढ़ना रुक जाए, तो यह शुरुआती चेतावनी है कि बच्चे को और पोषण या देखभाल चाहिए।" },
          deeper: { en: "An average smooths out ups and downs: add the readings and divide by how many there are. Doctors also look at the range, the highest and lowest values, because a normal average can hide a dangerous spike.", hi: "औसत उतार-चढ़ाव को बराबर कर देता है: सारी रीडिंग जोड़ो और उनकी गिनती से भाग दो। डॉक्टर सीमा (range) भी देखते हैं, यानी सबसे बड़ा और सबसे छोटा मान, क्योंकि सामान्य औसत किसी ख़तरनाक उछाल को छिपा सकता है।" },
          links: [L.khan, L.diksha],
          tryIt: { en: "Take your temperature, or your pulse, at the same time every morning for a week. Make a table and a simple line graph. What do you notice?", hi: "एक हफ़्ते तक रोज़ सुबह एक ही समय पर अपना तापमान या नब्ज़ नापो। एक तालिका और एक आसान रेखा-ग्राफ़ बनाओ। तुम्हें क्या दिखता है?" },
          puzzles: { young: ["maths-pattern"], future: ["fut-average"] }
        }
      ],
      project: {
        title: { en: "Run a family health check", hi: "परिवार की सेहत की जाँच करो" },
        young: { en: "Make a 'healthy habits' poster for your home with five habits and why each one helps. Ask your family which habit they'll try.", hi: "अपने घर के लिए पाँच अच्छी आदतों वाला एक पोस्टर बनाओ और लिखो कि हर आदत कैसे मदद करती है। घरवालों से पूछो कि वे कौन-सी आदत अपनाएँगे।" },
        future: { en: "With permission, measure the resting pulse of five family members. Find the average and the range, and explain why age and activity might make them differ.", hi: "अनुमति लेकर परिवार के पाँच सदस्यों की आराम की नब्ज़ नापो। औसत और सीमा निकालो, और समझाओ कि उम्र और गतिविधि से इनमें फ़र्क़ क्यों आ सकता है।" }
      },
      next: {
        subjects: { en: "Biology, Chemistry and Physics", hi: "जीवविज्ञान, रसायन और भौतिकी" },
        stream: { en: "Science stream with Biology (PCB) in Class 11 and 12", hi: "कक्षा 11 और 12 में जीवविज्ञान वाली विज्ञान धारा (PCB)" },
        route: { en: "MBBS admission in India is through the NEET-UG exam. AIIMS in New Delhi is one of India's best-known medical colleges. Nursing and pharmacy are other ways to care for people.", hi: "भारत में MBBS में दाख़िला NEET-UG परीक्षा से होता है। नई दिल्ली का AIIMS भारत के सबसे जाने-माने मेडिकल कॉलेजों में से एक है। नर्सिंग और फ़ार्मेसी भी लोगों की देखभाल के रास्ते हैं।" }
      }
    },

    {
      id: "engineer",
      icon: "🏗️",
      tint: "#FFE9C2",
      title: { en: "Engineer", hi: "इंजीनियर" },
      dream: { en: "Design bridges, dams, machines and buildings that make life better.", hi: "पुल, बाँध, मशीनें और इमारतें बनाओ जो ज़िंदगी आसान करें।" },
      job: { en: "Engineers design and build the things we use every day: bridges, roads, dams, pumps, phones. They use maths and science to make sure things are safe, strong and don't waste money or materials.", hi: "इंजीनियर रोज़ इस्तेमाल होने वाली चीज़ें डिज़ाइन करते और बनाते हैं: पुल, सड़कें, बाँध, पंप, फ़ोन। वे गणित और विज्ञान से यह पक्का करते हैं कि चीज़ें सुरक्षित और मज़बूत हों, और पैसे या सामान की बर्बादी न हो।" },
      day: [
        { en: "Draw plans for a bridge over a river", hi: "नदी पर पुल का नक्शा बनाना" },
        { en: "Calculate how much weight a beam can carry", hi: "हिसाब लगाना कि एक बीम कितना वज़न उठा सकता है" },
        { en: "Visit a site to check the work is safe", hi: "साइट पर जाकर देखना कि काम सुरक्षित है" }
      ],
      signs: [
        { en: "You like taking things apart to see how they work", hi: "तुम्हें चीज़ें खोलकर देखना अच्छा लगता है कि वे कैसे काम करती हैं" },
        { en: "You enjoy building with blocks, sticks or clay", hi: "तुम्हें ब्लॉक, डंडियों या मिट्टी से चीज़ें बनाना पसंद है" },
        { en: "You like solving problems with a plan", hi: "तुम्हें योजना बनाकर समस्याएँ सुलझाना अच्छा लगता है" }
      ],
      hero: { en: "A. P. J. Abdul Kalam sold newspapers as a boy in Rameswaram, became a rocket engineer, and later President of India.", hi: "ए. पी. जे. अब्दुल कलाम बचपन में रामेश्वरम में अख़बार बेचते थे। वे रॉकेट इंजीनियर बने और फिर भारत के राष्ट्रपति।" },
      india: { en: "The Chenab Bridge in Jammu and Kashmir is the highest railway arch bridge in the world.", hi: "जम्मू-कश्मीर का चिनाब पुल दुनिया का सबसे ऊँचा रेलवे आर्च पुल है।" },
      modules: [
        {
          id: "float",
          title: { en: "Why things float", hi: "चीज़ें क्यों तैरती हैं" },
          skill: { en: "Problem solver", hi: "समस्या सुलझाने वाला" },
          big: { en: "Water pushes up on anything in it. An object floats if it can push aside enough water to equal its own weight. Shape matters as much as material: a hollow steel boat floats, a steel coin sinks.", hi: "पानी अपने अंदर की हर चीज़ को ऊपर धकेलता है। कोई चीज़ तब तैरती है जब वह अपने वज़न जितना पानी हटा सके। सामान जितना ही आकार भी मायने रखता है: स्टील की खोखली नाव तैरती है, स्टील का सिक्का डूबता है।" },
          example: { en: "Huge cargo ships carry goods into ports like Mumbai and Visakhapatnam. They are made of steel, but their hollow hulls push aside so much water that they float even when fully loaded.", hi: "बड़े मालवाहक जहाज़ मुंबई और विशाखापत्तनम जैसे बंदरगाहों तक सामान लाते हैं। वे स्टील के बने होते हैं, पर उनके खोखले ढाँचे इतना पानी हटाते हैं कि वे पूरी तरह लदे होने पर भी तैरते हैं।" },
          deeper: { en: "Density is mass divided by volume. Water's density is 1 gram per cubic centimetre. Anything less dense floats. Ice is about 9% less dense than water, which is why icebergs float with most of their bulk underwater.", hi: "घनत्व = द्रव्यमान ÷ आयतन। पानी का घनत्व 1 ग्राम प्रति घन सेंटीमीटर है। इससे कम घनी कोई भी चीज़ तैरती है। बर्फ़ पानी से लगभग 9% कम घनी होती है, इसीलिए हिमखंड तैरते हैं, और उनका ज़्यादातर हिस्सा पानी के नीचे रहता है।" },
          animation: "float",
          links: [phet("Buoyancy", "उत्प्लावकता"), L.epathshala],
          tryIt: { en: "Roll a ball of clay or atta dough and drop it in water: it sinks. Now shape the same lump into a little boat. Does it float? How many coins can it carry?", hi: "मिट्टी या आटे की एक गोली बनाकर पानी में डालो: वह डूब जाएगी। अब उसी गोले से एक छोटी नाव बनाओ। क्या वह तैरती है? वह कितने सिक्के उठा सकती है?" },
          puzzles: { young: ["sci-float"], future: ["fut-density"] }
        },
        {
          id: "builders",
          title: { en: "Strong shapes and ancient builders", hi: "मज़बूत आकार और प्राचीन कारीगर" },
          skill: { en: "Master planner", hi: "मास्टर प्लानर" },
          big: { en: "Good engineering is often about shape. Triangles don't bend out of shape, arches carry heavy loads down to the ground, and careful planning, like straight streets and covered drains, keeps a whole city healthy.", hi: "अच्छी इंजीनियरिंग अक्सर आकार पर टिकी होती है। त्रिकोण अपना आकार नहीं छोड़ते, मेहराबें भारी वज़न को ज़मीन तक पहुँचाती हैं, और सोची-समझी योजना, जैसे सीधी सड़कें और ढकी नालियाँ, पूरे शहर को स्वस्थ रखती है।" },
          example: { en: "Over 4,500 years ago, Mohenjo-daro had planned streets, bricks of standard sizes and covered drains. Many stepwells, like Rani ki Vav in Gujarat, were built with careful geometry to reach water deep underground.", hi: "4,500 साल से भी पहले मोहनजोदड़ो में योजना से बनी सड़कें, एक जैसे नाप की ईंटें और ढकी नालियाँ थीं। गुजरात की रानी की वाव जैसी कई बावड़ियाँ ज़मीन के बहुत नीचे के पानी तक पहुँचने के लिए सोची-समझी ज्यामिति से बनाई गईं।" },
          deeper: { en: "Materials behave differently when squeezed (compression) and when pulled (tension). Stone and concrete are strong when squeezed but crack when pulled, so engineers add steel bars, which are strong in tension, to make reinforced concrete.", hi: "सामान दबाने (संपीडन) और खींचने (तनाव) पर अलग-अलग बर्ताव करते हैं। पत्थर और कंक्रीट दबाव में मज़बूत हैं पर खिंचाव में टूट जाते हैं, इसलिए इंजीनियर उनमें स्टील की छड़ें डालते हैं, जो खिंचाव में मज़बूत होती हैं। इसे सरिया वाला कंक्रीट (RCC) कहते हैं।" },
          links: [L.ncert, L.epathshala],
          tryIt: { en: "Make a square and a triangle from straws or sticks joined with tape or clay. Press on a corner of each. Which keeps its shape? Now add one diagonal to the square.", hi: "स्ट्रॉ या डंडियों को टेप या मिट्टी से जोड़कर एक चौकोर और एक त्रिकोण बनाओ। दोनों के कोने पर दबाओ। कौन अपना आकार बनाए रखता है? अब चौकोर में एक तिरछी डंडी जोड़ो।" },
          puzzles: { young: ["hist-indus", "hist-pyramids"], future: ["fut-arch"] }
        },
        {
          id: "lever",
          title: { en: "Levers and simple machines", hi: "उत्तोलक और सरल मशीनें" },
          skill: { en: "Machine maker", hi: "मशीन बनाने वाला" },
          big: { en: "A lever is a bar that turns around a point called the pivot. Push far from the pivot and a small force can lift a big load. Levers, wheels, pulleys and ramps are simple machines that make work easier.", hi: "उत्तोलक (lever) एक छड़ है जो धुरी नाम के बिंदु पर घूमती है। धुरी से दूर धक्का दो, तो छोटा बल भी बड़ा वज़न उठा सकता है। उत्तोलक, पहिए, घिरनी और ढलान सरल मशीनें हैं जो काम आसान बनाती हैं।" },
          example: { en: "A hand pump at a village well is a lever: a long handle lets a child lift water from deep underground. A pair of scissors is two levers joined at a pivot.", hi: "गाँव के कुएँ पर लगा हैंडपंप एक उत्तोलक है: लंबा हत्था एक बच्चे को भी ज़मीन के बहुत नीचे से पानी खींचने देता है। कैंची दो उत्तोलकों से बनी है जो एक धुरी पर जुड़े हैं।" },
          deeper: { en: "Turning effect (moment) = force × distance from the pivot. A lever balances when the moments on both sides are equal. Engineers use this to design cranes, which carry counterweights to stay balanced.", hi: "घुमाने का प्रभाव (आघूर्ण) = बल × धुरी से दूरी। उत्तोलक तब संतुलित होता है जब दोनों तरफ़ के आघूर्ण बराबर हों। इंजीनियर इसी से क्रेन बनाते हैं, जो संतुलन के लिए दूसरी तरफ़ भार रखती हैं।" },
          animation: "lever",
          links: [phet("Balancing Act", "संतुलन का खेल"), L.khan],
          tryIt: { en: "Balance a ruler on a pencil. Put 2 coins on one side and 1 coin on the other. Where must the single coin go to balance them? Measure the distances.", hi: "एक पेंसिल पर पैमाना (रूलर) संतुलित करो। एक तरफ़ 2 सिक्के और दूसरी तरफ़ 1 सिक्का रखो। संतुलन के लिए अकेला सिक्का कहाँ रखना होगा? दूरियाँ नापो।" },
          puzzles: { young: ["sci-lever"], future: ["fut-lever"] }
        }
      ],
      project: {
        title: { en: "Build a paper bridge", hi: "काग़ज़ का पुल बनाओ" },
        young: { en: "Build a bridge between two books using only paper and a little tape. Test how many coins it holds. Then fold the paper first and test again.", hi: "सिर्फ़ काग़ज़ और थोड़े टेप से दो किताबों के बीच पुल बनाओ। देखो वह कितने सिक्के उठाता है। फिर काग़ज़ को पहले मोड़ो और दोबारा परखो।" },
        future: { en: "Design two paper bridges, flat and folded into a zig-zag. Record the coins each holds over three trials, find the average, and explain the difference using shape and stiffness.", hi: "दो काग़ज़ के पुल बनाओ, एक सपाट और एक ज़िग-ज़ैग में मुड़ा हुआ। तीन बार परखकर हर एक के सिक्के लिखो, औसत निकालो, और आकार व कठोरता से अंतर समझाओ।" }
      },
      next: {
        subjects: { en: "Maths and Physics", hi: "गणित और भौतिकी" },
        stream: { en: "Science stream with Physics, Chemistry and Maths (PCM)", hi: "भौतिकी, रसायन और गणित वाली विज्ञान धारा (PCM)" },
        route: { en: "Engineering colleges such as the IITs and NITs admit students through the JEE exams. Polytechnic diploma courses after Class 10 are another way in.", hi: "IIT और NIT जैसे इंजीनियरिंग कॉलेज JEE परीक्षाओं से दाख़िला देते हैं। कक्षा 10 के बाद पॉलिटेक्निक डिप्लोमा भी एक रास्ता है।" }
      }
    },

    {
      id: "computer",
      icon: "💻",
      tint: "#D9CCFF",
      title: { en: "Computer Engineer", hi: "कंप्यूटर इंजीनियर" },
      dream: { en: "Create apps, games and AI that crores of people use.", hi: "ऐसे ऐप, गेम और AI बनाओ जिन्हें करोड़ों लोग इस्तेमाल करें।" },
      job: { en: "Computer engineers write the instructions, called code, that make phones, apps, games and AI work. They break big problems into small steps, test their work and fix mistakes, called bugs.", hi: "कंप्यूटर इंजीनियर वे निर्देश लिखते हैं, जिन्हें कोड कहते हैं, जिनसे फ़ोन, ऐप, गेम और AI चलते हैं। वे बड़ी समस्याओं को छोटे कदमों में बाँटते हैं, अपने काम की जाँच करते हैं और गलतियाँ, जिन्हें बग कहते हैं, ठीक करते हैं।" },
      day: [
        { en: "Plan how a new app feature should work", hi: "योजना बनाना कि ऐप का नया फ़ीचर कैसे काम करेगा" },
        { en: "Write and test code", hi: "कोड लिखना और उसकी जाँच करना" },
        { en: "Hunt down a bug that only happens sometimes", hi: "ऐसा बग ढूँढना जो कभी-कभी ही आता है" }
      ],
      signs: [
        { en: "You like puzzles that need step-by-step thinking", hi: "तुम्हें ऐसी पहेलियाँ पसंद हैं जिनमें कदम-दर-कदम सोचना पड़े" },
        { en: "You wonder how games and apps are made", hi: "तुम सोचते हो कि गेम और ऐप कैसे बनते हैं" },
        { en: "You don't give up when something doesn't work the first time", hi: "पहली बार कुछ न चले तो तुम हार नहीं मानते" }
      ],
      hero: { en: "Raj Reddy was born in a small village in Andhra Pradesh and became the first person of Asian origin to win the Turing Award, the top prize in computing.", hi: "राज रेड्डी आंध्र प्रदेश के एक छोटे से गाँव में पैदा हुए और कंप्यूटर का सबसे बड़ा पुरस्कार, ट्यूरिंग अवॉर्ड, जीतने वाले एशियाई मूल के पहले व्यक्ति बने।" },
      india: { en: "UPI, built in India, lets people pay with a phone, from big malls to small village shops.", hi: "भारत में बना UPI लोगों को फ़ोन से पैसे भेजने देता है, बड़े मॉल से लेकर गाँव की छोटी दुकान तक।" },
      modules: [
        {
          id: "steps",
          title: { en: "Clear instructions", hi: "साफ़ निर्देश" },
          skill: { en: "Coder", hi: "कोडर" },
          big: { en: "A computer does exactly what it's told, nothing more. A list of exact steps that solves a problem is called an algorithm. Loops repeat steps, so the instructions stay short.", hi: "कंप्यूटर वही करता है जो उससे कहा जाए, उससे ज़्यादा कुछ नहीं। किसी समस्या को सुलझाने वाले सटीक कदमों की सूची को एल्गोरिदम कहते हैं। लूप कदमों को दोहराते हैं, जिससे निर्देश छोटे रहते हैं।" },
          example: { en: "A recipe is an algorithm. 'Stir the dal 10 times' is a loop. 'If it is too thick, add water' is a decision. Every app on your phone is built from steps, loops and decisions.", hi: "पकाने की विधि एक एल्गोरिदम है। 'दाल को 10 बार चलाओ' एक लूप है। 'अगर बहुत गाढ़ी है, तो पानी डालो' एक फ़ैसला है। तुम्हारे फ़ोन का हर ऐप कदमों, लूप और फ़ैसलों से बना है।" },
          deeper: { en: "Good algorithms are fast as well as correct. Looking for a word in a 1,000-page dictionary page by page could take 1,000 steps. Halving the pages each time (binary search) takes about 10.", hi: "अच्छे एल्गोरिदम सही होने के साथ तेज़ भी होते हैं। 1,000 पन्नों के शब्दकोश में पन्ना-पन्ना शब्द ढूँढने में 1,000 कदम लग सकते हैं। हर बार पन्ने आधे करने (बाइनरी सर्च) में लगभग 10।" },
          links: [L.scratch, L.codeorg],
          tryIt: { en: "Write the steps for making a cup of tea as a program, with at least one loop and one 'if'. Ask someone to follow them exactly as written.", hi: "चाय बनाने के कदम एक प्रोग्राम की तरह लिखो, जिसमें कम से कम एक लूप और एक 'अगर' हो। किसी से कहो कि बिल्कुल लिखे जैसा ही करे।" },
          puzzles: { young: ["code-loop"], future: ["fut-algorithm"] }
        },
        {
          id: "bugs",
          title: { en: "Find and fix bugs", hi: "बग ढूँढो और ठीक करो" },
          skill: { en: "Bug hunter", hi: "बग पकड़ने वाला" },
          big: { en: "A bug is a mistake in a program. Every coder makes them. Debugging means going through the steps one at a time, checking what actually happens against what you wanted.", hi: "बग प्रोग्राम की गलती है। हर कोडर से गलतियाँ होती हैं। डीबगिंग का मतलब है एक-एक कदम देखना, और जाँचना कि असल में क्या हुआ और तुम क्या चाहते थे।" },
          example: { en: "If a railway booking app showed a train as full when seats were free, engineers would trace the steps that count seats, one at a time, until they found the wrong one.", hi: "अगर रेलवे बुकिंग ऐप सीटें ख़ाली होने पर भी ट्रेन को भरा दिखाए, तो इंजीनियर सीट गिनने वाले कदमों को एक-एक करके देखेंगे, जब तक गलत कदम न मिल जाए।" },
          deeper: { en: "Programs make decisions with IF-ELSE. Many bugs hide in the cases nobody thought of, like a name with no letters or a date like 29 February. Good testers try those on purpose.", hi: "प्रोग्राम IF-ELSE से फ़ैसले लेते हैं। कई बग उन स्थितियों में छिपे होते हैं जिनके बारे में किसी ने सोचा ही नहीं, जैसे बिना अक्षर का नाम या 29 फ़रवरी जैसी तारीख़। अच्छे टेस्टर जानबूझकर इन्हें आज़माते हैं।" },
          links: [L.unplugged, L.scratch],
          tryIt: { en: "Write directions from your home to a nearby shop. Give them to a family member and walk with them. Mark every place the directions were unclear. Those are your bugs. Fix them.", hi: "अपने घर से पास की दुकान तक का रास्ता लिखो। घर के किसी सदस्य को दो और उनके साथ चलो। जहाँ-जहाँ निर्देश साफ़ नहीं थे, निशान लगाओ। वही तुम्हारे बग हैं। उन्हें ठीक करो।" },
          puzzles: { young: ["code-bug"], future: ["fut-if"] }
        },
        {
          id: "bits",
          title: { en: "How computers store everything", hi: "कंप्यूटर सब कुछ कैसे रखते हैं" },
          skill: { en: "Pattern finder", hi: "पैटर्न खोजी" },
          big: { en: "Inside a computer, everything is stored as patterns of 0s and 1s, like switches off and on. Numbers, letters, photos and songs are all just long patterns of bits.", hi: "कंप्यूटर के अंदर सब कुछ 0 और 1 के पैटर्न के रूप में रखा जाता है, जैसे स्विच बंद और चालू। संख्याएँ, अक्षर, तस्वीरें और गाने, सब बिट्स के लंबे पैटर्न ही हैं।" },
          example: { en: "A photo on your phone is a grid of tiny dots called pixels. Each pixel's colour is stored as three numbers for red, green and blue, and each number is stored in bits.", hi: "तुम्हारे फ़ोन की तस्वीर छोटे बिंदुओं का एक जाल है जिन्हें पिक्सेल कहते हैं। हर पिक्सेल का रंग लाल, हरे और नीले की तीन संख्याओं के रूप में रखा जाता है, और हर संख्या बिट्स में।" },
          deeper: { en: "In binary, each place is worth double the one on its right: 1, 2, 4, 8, 16... So 1011 means 8 + 0 + 2 + 1 = 11. Eight bits make a byte, which can store 256 different values.", hi: "बाइनरी में हर स्थान की क़ीमत अपने दाएँ वाले से दोगुनी होती है: 1, 2, 4, 8, 16... तो 1011 का मतलब है 8 + 0 + 2 + 1 = 11। आठ बिट से एक बाइट बनती है, जो 256 अलग-अलग मान रख सकती है।" },
          animation: "binary",
          links: [L.unplugged, L.khan],
          tryIt: { en: "Use five cards with 1, 2, 4, 8 and 16 dots. Turn cards face up or down to make every number from 0 to 31. Write each as 0s and 1s.", hi: "1, 2, 4, 8 और 16 बिंदुओं वाले पाँच कार्ड लो। कार्डों को सीधा या उल्टा करके 0 से 31 तक हर संख्या बनाओ। हर एक को 0 और 1 में लिखो।" },
          puzzles: { young: ["maths-pattern"], future: ["fut-binary"] }
        }
      ],
      project: {
        title: { en: "Make your own game", hi: "अपना गेम बनाओ" },
        young: { en: "In Scratch, make a game where a character moves with the arrow keys and collects a star. Use a loop, then ask a friend to play and fix any bugs they find.", hi: "Scratch में एक गेम बनाओ जिसमें किरदार तीर वाले बटनों से चलकर एक तारा इकट्ठा करे। लूप का इस्तेमाल करो, फिर किसी दोस्त से खिलवाओ और जो बग मिलें उन्हें ठीक करो।" },
        future: { en: "Write the full rules of tic-tac-toe as an algorithm, including how to detect a win and a draw. Build it in Scratch or on paper, and test every tricky case you can think of.", hi: "टिक-टैक-टो के पूरे नियम एक एल्गोरिदम के रूप में लिखो, जीत और बराबरी पहचानने के तरीक़े समेत। इसे Scratch में या काग़ज़ पर बनाओ, और हर मुश्किल स्थिति को परखो।" }
      },
      next: {
        subjects: { en: "Maths, and computers if your school teaches them", hi: "गणित, और अगर स्कूल में हो तो कंप्यूटर" },
        stream: { en: "Science stream with Maths (PCM), or any stream with computer courses", hi: "गणित वाली विज्ञान धारा (PCM), या कंप्यूटर कोर्स के साथ कोई भी धारा" },
        route: { en: "Computer science degrees at IITs, NITs and other universities (through JEE), or a BCA degree. You can start coding for free today with Scratch.", hi: "IIT, NIT और दूसरे विश्वविद्यालयों में कंप्यूटर साइंस की डिग्री (JEE से), या BCA की डिग्री। तुम आज ही Scratch से मुफ़्त में कोडिंग शुरू कर सकते हो।" }
      }
    },

    {
      id: "artist",
      icon: "🎨",
      tint: "#FFE3F1",
      title: { en: "Artist", hi: "कलाकार" },
      dream: { en: "Paint, design and draw the world in your own colours.", hi: "अपने रंगों से दुनिया को रंगो, डिज़ाइन करो और चित्र बनाओ।" },
      job: { en: "Artists and designers make pictures, objects and spaces that people see and use: paintings, posters, books, clothes, buildings and apps. They study colour, light and shape, and practise every day.", hi: "कलाकार और डिज़ाइनर ऐसे चित्र, चीज़ें और जगहें बनाते हैं जिन्हें लोग देखते और इस्तेमाल करते हैं: पेंटिंग, पोस्टर, किताबें, कपड़े, इमारतें और ऐप। वे रंग, रोशनी और आकार का अध्ययन करते हैं, और रोज़ अभ्यास करते हैं।" },
      day: [
        { en: "Sketch ideas for a book cover", hi: "किताब के कवर के लिए स्केच बनाना" },
        { en: "Mix colours to match the light of a sunset", hi: "सूर्यास्त की रोशनी से मिलते रंग मिलाना" },
        { en: "Show work to a client and improve it", hi: "ग्राहक को काम दिखाना और उसे बेहतर बनाना" }
      ],
      signs: [
        { en: "You doodle in the margins of your notebook", hi: "तुम अपनी कॉपी के किनारों पर चित्र बनाते रहते हो" },
        { en: "You notice colours and patterns others miss", hi: "तुम ऐसे रंग और पैटर्न देख लेते हो जो दूसरे नहीं देखते" },
        { en: "You like making things look beautiful", hi: "तुम्हें चीज़ों को सुंदर बनाना अच्छा लगता है" }
      ],
      hero: { en: "Raja Ravi Varma, from Kerala, became one of India's most loved painters, and printed his paintings so every family could own one.", hi: "केरल के राजा रवि वर्मा भारत के सबसे प्यारे चित्रकारों में से एक बने, और अपनी पेंटिंग छापकर हर घर तक पहुँचाईं।" },
      india: { en: "Warli painting from Maharashtra tells whole stories using just circles, triangles and lines.", hi: "महाराष्ट्र की वारली चित्रकला सिर्फ़ गोले, त्रिकोण और रेखाओं से पूरी कहानी कह देती है।" },
      modules: [
        {
          id: "colour",
          title: { en: "Mixing colours", hi: "रंग मिलाना" },
          skill: { en: "Colour mixer", hi: "रंगों का जादूगर" },
          big: { en: "Red, yellow and blue paints can be mixed to make most other colours. Paint works by soaking up some colours of light and reflecting the rest, so mixing paints usually makes colours darker.", hi: "लाल, पीले और नीले रंग मिलाकर ज़्यादातर दूसरे रंग बनाए जा सकते हैं। पेंट रोशनी के कुछ रंग सोख लेता है और बाक़ी लौटा देता है, इसलिए रंग मिलाने पर वे अक्सर गहरे हो जाते हैं।" },
          example: { en: "Traditional painters made colours from nature: yellow from turmeric, red from kumkum and red earth, blue from indigo. Indigo from India was once traded across the world.", hi: "पारंपरिक चित्रकार प्रकृति से रंग बनाते थे: हल्दी से पीला, कुमकुम और लाल मिट्टी से लाल, नील से नीला। भारत का नील कभी पूरी दुनिया में बिकता था।" },
          deeper: { en: "Screens mix light, not paint. Red, green and blue light add up, so red + green light makes yellow, and all three make white. Designers must think in both systems: paint for print, light for screens.", hi: "स्क्रीन पेंट नहीं, रोशनी मिलाती हैं। लाल, हरी और नीली रोशनी जुड़ती हैं, तो लाल + हरी रोशनी से पीला बनता है, और तीनों से सफ़ेद। डिज़ाइनर दोनों तरीक़ों से सोचते हैं: छपाई के लिए पेंट, स्क्रीन के लिए रोशनी।" },
          animation: "paint",
          links: [phet("Color Vision", "रंग दृष्टि"), L.artsculture],
          tryIt: { en: "Make a colour wheel with just red, yellow and blue. Mix each pair, then mix each new colour with its neighbour. How many colours can you make?", hi: "सिर्फ़ लाल, पीले और नीले से एक रंग-चक्र बनाओ। हर जोड़ी मिलाओ, फिर हर नए रंग को उसके पड़ोसी से मिलाओ। तुम कितने रंग बना सकते हो?" },
          puzzles: { young: ["art-colours"], future: ["fut-rgb"] }
        },
        {
          id: "see",
          title: { en: "Learn to see: pattern and depth", hi: "देखना सीखो: पैटर्न और गहराई" },
          skill: { en: "Pattern artist", hi: "पैटर्न कलाकार" },
          big: { en: "Artists use patterns and symmetry to make designs feel balanced, like rangoli and kolam. To make a flat drawing look deep, they use perspective: far things are drawn smaller.", hi: "कलाकार डिज़ाइन को संतुलित दिखाने के लिए पैटर्न और समरूपता का इस्तेमाल करते हैं, जैसे रंगोली और कोलम में। सपाट चित्र में गहराई दिखाने के लिए वे परिप्रेक्ष्य (perspective) का इस्तेमाल करते हैं: दूर की चीज़ें छोटी बनाई जाती हैं।" },
          example: { en: "In Tamil Nadu, kolam is drawn every morning around a grid of dots, with lines looping between them. Many kolams have mirror and rotational symmetry, and some use a single unbroken line.", hi: "तमिलनाडु में हर सुबह बिंदुओं के जाल के चारों ओर कोलम बनाया जाता है, जिसमें रेखाएँ बिंदुओं के बीच घूमती हैं। कई कोलम में दर्पण और घूर्णन समरूपता होती है, और कुछ एक ही अटूट रेखा से बनते हैं।" },
          deeper: { en: "In one-point perspective, all lines going away from you meet at a vanishing point on the horizon. Artists in Mughal miniature paintings often used several viewpoints at once instead, to show more of a scene.", hi: "एक-बिंदु परिप्रेक्ष्य में तुमसे दूर जाती सारी रेखाएँ क्षितिज पर एक लोप बिंदु पर मिलती हैं। मुग़ल लघु चित्रकारी के कलाकार इसके बजाय अक्सर एक साथ कई दृष्टिकोण इस्तेमाल करते थे, ताकि दृश्य का ज़्यादा हिस्सा दिखे।" },
          links: [L.artsculture, L.ncert],
          tryIt: { en: "Draw a 5 × 5 grid of dots and make a kolam around it. Fold a photo of it, or hold a mirror down the middle, to check its symmetry.", hi: "5 × 5 बिंदुओं का जाल बनाकर उसके चारों ओर कोलम बनाओ। उसकी समरूपता जाँचने के लिए बीच में शीशा रखो।" },
          puzzles: { young: ["art-rangoli"], future: ["fut-perspective"] }
        },
        {
          id: "light",
          title: { en: "Light and colour", hi: "रोशनी और रंग" },
          skill: { en: "Light catcher", hi: "रोशनी पकड़ने वाला" },
          big: { en: "The colour of light changes through the day. Morning and evening light is warm and orange, midday light is white and harsh. Painters and photographers often wait for the 'golden hour' near sunset.", hi: "रोशनी का रंग दिन भर बदलता है। सुबह और शाम की रोशनी गरम और नारंगी होती है, दोपहर की सफ़ेद और तीखी। चित्रकार और फ़ोटोग्राफ़र अक्सर सूर्यास्त के पास के 'सुनहरे घंटे' का इंतज़ार करते हैं।" },
          example: { en: "The Taj Mahal's white marble looks pink at dawn, white at noon and golden at sunset, because the marble reflects whatever colour of light falls on it.", hi: "ताजमहल का सफ़ेद संगमरमर सुबह गुलाबी, दोपहर में सफ़ेद और सूर्यास्त पर सुनहरा दिखता है, क्योंकि संगमरमर उस पर पड़ने वाली रोशनी का रंग लौटाता है।" },
          deeper: { en: "Sunlight contains all colours. Air scatters blue light most, which is why the sky is blue. Water droplets bend each colour by a different amount, which splits sunlight into a rainbow.", hi: "धूप में सारे रंग होते हैं। हवा नीली रोशनी को सबसे ज़्यादा बिखेरती है, इसीलिए आसमान नीला है। पानी की बूँदें हर रंग को अलग-अलग मोड़ती हैं, जिससे धूप इंद्रधनुष में बँट जाती है।" },
          animation: "sky",
          links: [phet("Bending Light", "मुड़ती रोशनी"), L.epathshala],
          tryIt: { en: "Paint or draw the same tree or building in the morning and the evening. Compare the colours of the light and the shadows.", hi: "एक ही पेड़ या इमारत को सुबह और शाम पेंट करो या उसका चित्र बनाओ। रोशनी और परछाइयों के रंगों की तुलना करो।" },
          puzzles: { young: ["sci-sky"], future: ["fut-rainbow"] }
        }
      ],
      project: {
        title: { en: "Make a picture of your world", hi: "अपनी दुनिया का चित्र बनाओ" },
        young: { en: "Draw a Warli-style picture of your home, street or village using only circles, triangles and lines. Include people doing everyday work.", hi: "सिर्फ़ गोले, त्रिकोण और रेखाओं से वारली शैली में अपने घर, गली या गाँव का चित्र बनाओ। उसमें रोज़ का काम करते लोग भी बनाओ।" },
        future: { en: "Draw the same street twice: once flat, once in one-point perspective with a vanishing point. Then colour it as evening light, and write three lines about your choices.", hi: "एक ही गली को दो बार बनाओ: एक बार सपाट, एक बार लोप बिंदु के साथ एक-बिंदु परिप्रेक्ष्य में। फिर उसे शाम की रोशनी जैसा रंगो, और अपने चुनावों पर तीन पंक्तियाँ लिखो।" }
      },
      next: {
        subjects: { en: "Art, and maths for geometry and design", hi: "कला, और ज्यामिति व डिज़ाइन के लिए गणित" },
        stream: { en: "Any stream; many art and design courses accept students from all streams", hi: "कोई भी धारा; कला और डिज़ाइन के कई कोर्स सभी धाराओं के छात्रों को लेते हैं" },
        route: { en: "Fine arts degrees (BFA), and design schools such as NID (National Institute of Design) and NIFT. Keep a sketchbook every day.", hi: "ललित कला की डिग्री (BFA), और NID (राष्ट्रीय डिज़ाइन संस्थान) व NIFT जैसे डिज़ाइन स्कूल। रोज़ एक स्केचबुक रखो।" }
      }
    },

    {
      id: "writer",
      icon: "✍️",
      tint: "#C8F5DF",
      title: { en: "Writer", hi: "लेखक" },
      dream: { en: "Tell stories, write poems and share ideas that move people.", hi: "कहानियाँ सुनाओ, कविताएँ लिखो और ऐसे विचार बाँटो जो दिल छू लें।" },
      job: { en: "Writers turn ideas into words that people want to read: stories, poems, news, film scripts and books. They read a lot, notice small details about people, and rewrite until every sentence works.", hi: "लेखक विचारों को ऐसे शब्दों में बदलते हैं जिन्हें लोग पढ़ना चाहें: कहानियाँ, कविताएँ, ख़बरें, फ़िल्मों की पटकथा और किताबें। वे बहुत पढ़ते हैं, लोगों की छोटी-छोटी बातें देखते हैं, और तब तक दोबारा लिखते हैं जब तक हर वाक्य ठीक न हो जाए।" },
      day: [
        { en: "Interview someone for a news story", hi: "किसी ख़बर के लिए किसी का इंटरव्यू लेना" },
        { en: "Write a first draft, then cut it in half", hi: "पहला मसौदा लिखना, फिर उसे आधा करना" },
        { en: "Read other writers to learn new tricks", hi: "नई बातें सीखने के लिए दूसरे लेखकों को पढ़ना" }
      ],
      signs: [
        { en: "You love reading and listening to stories", hi: "तुम्हें कहानियाँ पढ़ना और सुनना बहुत पसंद है" },
        { en: "You make up stories in your head", hi: "तुम मन ही मन कहानियाँ बनाते रहते हो" },
        { en: "You enjoy finding the perfect word", hi: "तुम्हें बिल्कुल सही शब्द ढूँढने में मज़ा आता है" }
      ],
      hero: { en: "Rabindranath Tagore wrote poems, songs and stories, and in 1913 became the first Asian to win the Nobel Prize.", hi: "रवींद्रनाथ टैगोर ने कविताएँ, गीत और कहानियाँ लिखीं, और 1913 में नोबेल पुरस्कार जीतने वाले पहले एशियाई बने।" },
      india: { en: "Tagore wrote the national anthems of two countries: India and Bangladesh.", hi: "टैगोर ने दो देशों के राष्ट्रगान लिखे: भारत और बांग्लादेश।" },
      modules: [
        {
          id: "words",
          title: { en: "Play with words", hi: "शब्दों से खेलो" },
          skill: { en: "Word player", hi: "शब्दों का खिलाड़ी" },
          big: { en: "Writers choose words for their sound as well as their meaning. Rhyme makes lines easy to remember. Comparisons like 'as brave as a lion' help readers see what you mean.", hi: "लेखक शब्दों को उनके अर्थ के साथ-साथ उनकी आवाज़ के लिए भी चुनते हैं। तुकबंदी पंक्तियों को याद रखना आसान बनाती है। 'शेर जैसा बहादुर' जैसी तुलनाएँ पाठकों को तुम्हारी बात दिखाने में मदद करती हैं।" },
          example: { en: "'Machhli jal ki rani hai, jeevan uska paani hai' has been remembered by children for generations, because of its rhyme and its simple picture.", hi: "'मछली जल की रानी है, जीवन उसका पानी है' पीढ़ियों से बच्चों को याद है, अपनी तुकबंदी और आसान तस्वीर की वजह से।" },
          deeper: { en: "A simile compares using 'like' or 'as'. A metaphor says one thing is another: 'the classroom was a zoo'. Writers also use alliteration, repeating the first sound: 'Pip picked a purple pen'.", hi: "उपमा 'जैसा' या 'की तरह' से तुलना करती है। रूपक कहता है कि एक चीज़ दूसरी है: 'कक्षा चिड़ियाघर थी'। लेखक अनुप्रास भी इस्तेमाल करते हैं, यानी एक ही आवाज़ दोहराना: 'चंदू के चाचा ने चंदू की चाची को'।" },
          links: [L.storyweaver, L.epathshala],
          tryIt: { en: "Write four lines about your favourite food, with two rhyming words and one comparison using 'like' or 'as'.", hi: "अपने पसंदीदा खाने पर चार पंक्तियाँ लिखो, जिनमें दो तुक वाले शब्द और 'जैसा' से एक तुलना हो।" },
          puzzles: { young: ["eng-rhyme"], future: ["fut-simile"] }
        },
        {
          id: "sentences",
          title: { en: "Build strong sentences", hi: "मज़बूत वाक्य बनाओ" },
          skill: { en: "Sentence builder", hi: "वाक्य निर्माता" },
          big: { en: "Every sentence needs someone or something (the subject) and an action or state (the verb). Strong writing uses specific verbs: 'she sprinted' says more than 'she went fast'.", hi: "हर वाक्य में कोई व्यक्ति या चीज़ (कर्ता) और कोई काम या स्थिति (क्रिया) चाहिए। अच्छे लेखन में सटीक क्रियाएँ होती हैं: 'वह सरपट दौड़ी' 'वह तेज़ गई' से ज़्यादा बताता है।" },
          example: { en: "Newspaper headlines are short but clear because they keep a strong verb: 'Farmers harvest record wheat crop'.", hi: "अख़बार की सुर्ख़ियाँ छोटी होकर भी साफ़ होती हैं क्योंकि उनमें एक मज़बूत क्रिया होती है: 'किसानों ने गेहूँ की रिकॉर्ड फ़सल काटी'।" },
          deeper: { en: "Tense tells when something happens. English adds '-ed' for many past verbs, but common verbs change completely (go → went). Keeping the same tense through a story stops readers getting confused.", hi: "काल बताता है कि कुछ कब होता है। अंग्रेज़ी में कई क्रियाओं के भूतकाल में '-ed' लगता है, पर आम क्रियाएँ पूरी बदल जाती हैं (go → went)। पूरी कहानी में एक ही काल रखने से पाठक उलझते नहीं।" },
          links: [L.diksha, L.storyweaver],
          tryIt: { en: "Take one plain sentence, like 'The boy walked to school'. Rewrite it five times with a different, more specific verb each time. How does the picture change?", hi: "एक सादा वाक्य लो, जैसे 'लड़का स्कूल गया'। उसे पाँच बार अलग, ज़्यादा सटीक क्रिया के साथ लिखो। तस्वीर कैसे बदलती है?" },
          puzzles: { young: ["eng-verb"], future: ["fut-tense"] }
        },
        {
          id: "story",
          title: { en: "Shape a story", hi: "कहानी गढ़ो" },
          skill: { en: "Storyteller", hi: "कहानीकार" },
          big: { en: "Most stories follow a shape: a character wants something, a problem gets in the way, they struggle, and things change. That struggle is what keeps readers turning pages.", hi: "ज़्यादातर कहानियाँ एक ढाँचे पर चलती हैं: एक किरदार कुछ चाहता है, रास्ते में मुश्किल आती है, वह जूझता है, और चीज़ें बदल जाती हैं। यही संघर्ष पाठकों को पन्ने पलटने पर मजबूर करता है।" },
          example: { en: "The Panchatantra has kept readers hooked for centuries: a clever rabbit wants to stop a lion, has no strength, and wins with a trick at a well.", hi: "पंचतंत्र सदियों से पाठकों को बाँधे हुए है: एक चतुर ख़रगोश शेर को रोकना चाहता है, उसके पास ताक़त नहीं है, और वह कुएँ पर एक चाल से जीत जाता है।" },
          deeper: { en: "Point of view changes a story. First person ('I') puts readers inside one head. Third person ('she') can move between characters. Many writers draft a scene both ways before choosing.", hi: "दृष्टिकोण कहानी बदल देता है। उत्तम पुरुष ('मैं') पाठक को एक व्यक्ति के मन में ले जाता है। अन्य पुरुष ('वह') कई किरदारों के बीच घूम सकता है। कई लेखक चुनने से पहले एक दृश्य दोनों तरह से लिखते हैं।" },
          animation: "story",
          links: [L.storyweaver, L.ncert],
          tryIt: { en: "Pick a character from your village or town, give them something they want and a problem in the way. Write the story in 10 sentences.", hi: "अपने गाँव या शहर से एक किरदार चुनो, उसे कोई चाहत दो और रास्ते में एक मुश्किल। 10 वाक्यों में कहानी लिखो।" },
          puzzles: { young: ["eng-story"], future: ["fut-pov"] }
        }
      ],
      project: {
        title: { en: "Write and share a story", hi: "एक कहानी लिखो और सुनाओ" },
        young: { en: "Write a one-page story about a child who solves a problem in your town or village. Read it aloud to someone at home and ask what they liked.", hi: "अपने शहर या गाँव में कोई समस्या सुलझाने वाले बच्चे पर एक पन्ने की कहानी लिखो। घर में किसी को सुनाओ और पूछो कि उन्हें क्या अच्छा लगा।" },
        future: { en: "Write a short story in the first person, then rewrite one scene in the third person. Write a paragraph on which version works better, and why.", hi: "उत्तम पुरुष में एक छोटी कहानी लिखो, फिर उसका एक दृश्य अन्य पुरुष में दोबारा लिखो। एक अनुच्छेद लिखो कि कौन-सा रूप बेहतर लगा, और क्यों।" }
      },
      next: {
        subjects: { en: "Languages: English, Hindi and any other you speak", hi: "भाषाएँ: अंग्रेज़ी, हिंदी और जो भी तुम बोलते हो" },
        stream: { en: "Any stream; Arts or Humanities if you love literature", hi: "कोई भी धारा; साहित्य पसंद हो तो कला या मानविकी" },
        route: { en: "Degrees in literature, languages, journalism or mass communication. The most important thing: read widely and write every day.", hi: "साहित्य, भाषाओं, पत्रकारिता या जनसंचार की डिग्री। सबसे ज़रूरी बात: ख़ूब पढ़ो और रोज़ लिखो।" }
      }
    },

    {
      id: "farmer",
      icon: "🌾",
      tint: "#E8F5D6",
      title: { en: "Farmer & Food Scientist", hi: "किसान और खाद्य वैज्ञानिक" },
      dream: { en: "Grow more food with less water, and help farms feed everyone.", hi: "कम पानी में ज़्यादा अनाज उगाओ, और खेतों से सबका पेट भरने में मदद करो।" },
      job: { en: "Modern farmers and agricultural scientists use science to grow better crops: they test soil, choose seeds, save water, read the weather and fight pests safely. Their work decides how well India eats.", hi: "आज के किसान और कृषि वैज्ञानिक बेहतर फ़सल उगाने के लिए विज्ञान का इस्तेमाल करते हैं: वे मिट्टी जाँचते हैं, बीज चुनते हैं, पानी बचाते हैं, मौसम पढ़ते हैं और कीड़ों से सुरक्षित तरीक़े से लड़ते हैं। उनका काम तय करता है कि भारत कितना अच्छा खाएगा।" },
      day: [
        { en: "Test the soil before sowing", hi: "बुवाई से पहले मिट्टी की जाँच करना" },
        { en: "Check the monsoon forecast to plan watering", hi: "पानी देने की योजना के लिए मानसून का पूर्वानुमान देखना" },
        { en: "Compare two seed varieties in a test field", hi: "प्रयोग वाले खेत में बीज की दो क़िस्मों की तुलना करना" }
      ],
      signs: [
        { en: "You like plants, animals and being outdoors", hi: "तुम्हें पौधे, जानवर और बाहर रहना अच्छा लगता है" },
        { en: "You wonder why some plants grow better than others", hi: "तुम सोचते हो कि कुछ पौधे दूसरों से अच्छे क्यों बढ़ते हैं" },
        { en: "You want to help your family or village grow more", hi: "तुम अपने परिवार या गाँव को ज़्यादा उगाने में मदद करना चाहते हो" }
      ],
      hero: { en: "M. S. Swaminathan led India's Green Revolution, which helped India grow enough food to feed its people.", hi: "एम. एस. स्वामीनाथन ने भारत की हरित क्रांति की अगुवाई की, जिससे भारत अपने लोगों के लिए पर्याप्त अनाज उगा सका।" },
      india: { en: "India produces more milk than any other country in the world.", hi: "भारत दुनिया के किसी भी देश से ज़्यादा दूध पैदा करता है।" },
      modules: [
        {
          id: "rain",
          title: { en: "Sun, rain and seasons", hi: "धूप, बारिश और मौसम" },
          skill: { en: "Weather watcher", hi: "मौसम पहचानने वाला" },
          big: { en: "The Sun heats water in seas, rivers and fields. It rises as vapour, cools into clouds and falls as rain. This water cycle, and the yearly monsoon, decide when Indian farmers sow and harvest.", hi: "सूरज समुद्र, नदियों और खेतों का पानी गरम करता है। वह भाप बनकर ऊपर उठता है, ठंडा होकर बादल बनता है और बारिश बनकर गिरता है। यही जल-चक्र और हर साल का मानसून तय करते हैं कि भारतीय किसान कब बोएँ और कब काटें।" },
          example: { en: "Kharif crops like rice are sown with the monsoon in June and July. Rabi crops like wheat are sown in winter and harvested in spring.", hi: "धान जैसी ख़रीफ़ फ़सलें जून-जुलाई में मानसून के साथ बोई जाती हैं। गेहूँ जैसी रबी फ़सलें सर्दियों में बोई जाती हैं और वसंत में काटी जाती हैं।" },
          deeper: { en: "Seasons happen because the Earth's axis is tilted by about 23.5°. The monsoon happens because land heats faster than the sea in summer: warm air rises over land, and moist sea winds rush in to replace it.", hi: "मौसम इसलिए बदलते हैं क्योंकि धरती की धुरी लगभग 23.5° झुकी है। मानसून इसलिए आता है क्योंकि गर्मी में ज़मीन समुद्र से जल्दी गरम होती है: ज़मीन के ऊपर गरम हवा उठती है, और उसकी जगह लेने समुद्र की नम हवाएँ तेज़ी से आती हैं।" },
          animation: "water",
          links: [L.climatekids, L.epathshala],
          tryIt: { en: "Put a bowl of water in the sun, covered with plastic, with a small stone on top in the middle. After a few hours, look at the drops under the plastic. You've made a mini water cycle.", hi: "धूप में पानी की एक कटोरी रखो, प्लास्टिक से ढको और बीच में ऊपर एक छोटा पत्थर रखो। कुछ घंटों बाद प्लास्टिक के नीचे बूँदें देखो। तुमने छोटा जल-चक्र बना लिया।" },
          puzzles: { young: ["sci-sky"], future: ["fut-seasons"] }
        },
        {
          id: "plants",
          title: { en: "How plants grow", hi: "पौधे कैसे बढ़ते हैं" },
          skill: { en: "Plant scientist", hi: "पौधा वैज्ञानिक" },
          big: { en: "Plants make their own food from sunlight, water and carbon dioxide from the air. This is called photosynthesis. Roots also take in minerals like nitrogen from the soil.", hi: "पौधे धूप, पानी और हवा की कार्बन डाइऑक्साइड से अपना भोजन ख़ुद बनाते हैं। इसे प्रकाश-संश्लेषण कहते हैं। जड़ें मिट्टी से नाइट्रोजन जैसे खनिज भी लेती हैं।" },
          example: { en: "Farmers grow pulses like moong and chana in rotation with wheat, because the roots of pulses work with bacteria that add nitrogen to the soil, feeding the next crop.", hi: "किसान गेहूँ के साथ बारी-बारी से मूँग और चना जैसी दालें उगाते हैं, क्योंकि दालों की जड़ें ऐसे बैक्टीरिया के साथ काम करती हैं जो मिट्टी में नाइट्रोजन जोड़ते हैं, जिससे अगली फ़सल को पोषण मिलता है।" },
          deeper: { en: "Most of a plant's dry mass comes from carbon dioxide taken from the air, not from the soil. Drip irrigation delivers water right to the roots and can save a lot of water compared with flooding a field.", hi: "पौधे के सूखे वज़न का ज़्यादातर हिस्सा हवा से ली गई कार्बन डाइऑक्साइड से आता है, मिट्टी से नहीं। टपक सिंचाई पानी सीधे जड़ों तक पहुँचाती है, और खेत में पानी भरने की तुलना में बहुत पानी बचा सकती है।" },
          animation: "plant",
          links: [L.khan, L.ncert],
          tryIt: { en: "Plant two seeds: one in sunlight, one in a dark cupboard, both watered. After a week, compare their height, colour and leaves.", hi: "दो बीज बोओ: एक धूप में, एक अँधेरी अलमारी में, दोनों को पानी दो। एक हफ़्ते बाद उनकी ऊँचाई, रंग और पत्तियों की तुलना करो।" },
          puzzles: { young: ["sci-plant"], future: ["fut-photosynthesis"] }
        },
        {
          id: "harvest",
          title: { en: "Count the harvest", hi: "फ़सल का हिसाब" },
          skill: { en: "Number farmer", hi: "गिनती का किसान" },
          big: { en: "Good farming needs good counting: how much seed per field, how much water, how many kilos harvested, and what it sells for. Patterns in the numbers show what is working.", hi: "अच्छी खेती के लिए अच्छा हिसाब चाहिए: एक खेत में कितना बीज, कितना पानी, कितने किलो फ़सल, और वह कितने में बिकी। संख्याओं के पैटर्न बताते हैं कि क्या काम कर रहा है।" },
          example: { en: "If one field gives 30 quintals of wheat per hectare and a field with a new seed gives 36, that is a 20% increase. Farmers compare yields like this before changing seeds.", hi: "अगर एक खेत में प्रति हेक्टेयर 30 क्विंटल गेहूँ होता है और नए बीज वाले खेत में 36, तो यह 20% बढ़त है। बीज बदलने से पहले किसान ऐसे ही पैदावार की तुलना करते हैं।" },
          deeper: { en: "One good year can be luck. Scientists average results over several plots and years before trusting a new method, so that weather and chance don't fool them.", hi: "एक अच्छा साल क़िस्मत भी हो सकता है। वैज्ञानिक किसी नए तरीक़े पर भरोसा करने से पहले कई खेतों और कई सालों के नतीजों का औसत निकालते हैं, ताकि मौसम और संयोग धोखा न दें।" },
          links: [L.khan, L.diksha],
          tryIt: { en: "Ask a farmer or a shopkeeper the price of one vegetable each week for a month. Make a table, and find the average price.", hi: "किसी किसान या दुकानदार से एक महीने तक हर हफ़्ते एक सब्ज़ी का भाव पूछो। तालिका बनाओ और औसत भाव निकालो।" },
          puzzles: { young: ["maths-pattern"], future: ["fut-average"] }
        }
      ],
      project: {
        title: { en: "Run a growing experiment", hi: "उगाने का प्रयोग करो" },
        young: { en: "Grow two seeds, one in sunlight and one in shade. Measure them every two days for two weeks, and draw what you see each time.", hi: "दो बीज उगाओ, एक धूप में और एक छाँव में। दो हफ़्ते तक हर दो दिन में उन्हें नापो, और हर बार जो दिखे उसका चित्र बनाओ।" },
        future: { en: "Grow three pots with different amounts of water. Measure height every two days for two weeks, make a table and a graph, and explain which grew best and why.", hi: "तीन गमलों में अलग-अलग मात्रा में पानी देकर पौधे उगाओ। दो हफ़्ते तक हर दो दिन में ऊँचाई नापो, तालिका और ग्राफ़ बनाओ, और समझाओ कि कौन सबसे अच्छा बढ़ा और क्यों।" }
      },
      next: {
        subjects: { en: "Science, especially Biology and Chemistry, plus Maths", hi: "विज्ञान, ख़ासकर जीवविज्ञान और रसायन, साथ में गणित" },
        stream: { en: "Science stream with Biology or Maths", hi: "जीवविज्ञान या गणित वाली विज्ञान धारा" },
        route: { en: "B.Sc. Agriculture at state agricultural universities. ICAR research institutes, such as IARI in New Delhi, work on better seeds and farming methods.", hi: "राज्य कृषि विश्वविद्यालयों में B.Sc. कृषि। नई दिल्ली के IARI जैसे ICAR के अनुसंधान संस्थान बेहतर बीजों और खेती के तरीक़ों पर काम करते हैं।" }
      }
    },

    {
      id: "teacher",
      icon: "🧑‍🏫",
      tint: "#E0F0EA",
      title: { en: "Teacher", hi: "शिक्षक" },
      dream: { en: "Help other children understand the world, and make learning fun.", hi: "दूसरे बच्चों को दुनिया समझने में मदद करो, और पढ़ाई को मज़ेदार बनाओ।" },
      job: { en: "Teachers help children understand, not just remember. They plan lessons, ask good questions, notice who is stuck, and find another way to explain. A great teacher can change a whole village.", hi: "शिक्षक बच्चों को रटने के बजाय समझने में मदद करते हैं। वे पाठ की योजना बनाते हैं, अच्छे सवाल पूछते हैं, देखते हैं कि कौन अटका है, और समझाने का दूसरा तरीक़ा ढूँढते हैं। एक अच्छा शिक्षक पूरे गाँव को बदल सकता है।" },
      day: [
        { en: "Plan a lesson with a question to start", hi: "शुरुआती सवाल के साथ एक पाठ की योजना बनाना" },
        { en: "Notice which child looks confused and help them", hi: "देखना कि कौन-सा बच्चा उलझा है और उसकी मदद करना" },
        { en: "Check homework and give helpful comments", hi: "होमवर्क जाँचना और मददगार टिप्पणी देना" }
      ],
      signs: [
        { en: "Friends ask you to explain things", hi: "दोस्त तुमसे चीज़ें समझाने को कहते हैं" },
        { en: "You're patient with younger children", hi: "तुम छोटे बच्चों के साथ धैर्य रखते हो" },
        { en: "You feel happy when someone finally 'gets it'", hi: "जब किसी को आख़िरकार बात समझ आती है, तो तुम्हें ख़ुशी होती है" }
      ],
      hero: { en: "Savitribai Phule became one of India's first women teachers and opened a school for girls in Pune in 1848.", hi: "सावित्रीबाई फुले भारत की पहली महिला शिक्षिकाओं में से एक बनीं और 1848 में पुणे में लड़कियों के लिए स्कूल खोला।" },
      india: { en: "Teachers' Day in India is 5 September, the birthday of Dr Sarvepalli Radhakrishnan, a teacher who became President.", hi: "भारत में शिक्षक दिवस 5 सितंबर को मनाया जाता है, जो डॉ. सर्वपल्ली राधाकृष्णन का जन्मदिन है, एक शिक्षक जो राष्ट्रपति बने।" },
      modules: [
        {
          id: "explain",
          title: { en: "Explain clearly", hi: "साफ़ समझाओ" },
          skill: { en: "Clear explainer", hi: "साफ़ समझाने वाला" },
          big: { en: "A clear explanation starts from what the learner already knows, uses simple sentences, and gives an example. Good teachers check understanding by asking, not by asking 'did you understand?'", hi: "साफ़ समझाना सीखने वाले की पहले से जानी बात से शुरू होता है, आसान वाक्यों में होता है, और उदाहरण देता है। अच्छे शिक्षक 'समझ आया?' पूछने के बजाय सवाल पूछकर समझ जाँचते हैं।" },
          example: { en: "To explain fractions, a teacher might cut a roti into four equal parts and ask, 'If you eat one piece, how much is left?'", hi: "भिन्न समझाने के लिए शिक्षक एक रोटी को चार बराबर टुकड़ों में काटकर पूछ सकते हैं, 'अगर तुम एक टुकड़ा खाओ, तो कितना बचेगा?'" },
          deeper: { en: "Learners remember more when they explain something back in their own words. Teachers use this on purpose: 'Tell your partner how you got that answer.'", hi: "सीखने वाले तब ज़्यादा याद रखते हैं जब वे बात को अपने शब्दों में दोबारा समझाते हैं। शिक्षक जानबूझकर इसका इस्तेमाल करते हैं: 'अपने साथी को बताओ कि तुम्हें यह जवाब कैसे मिला।'" },
          links: [L.diksha, L.ncert],
          tryIt: { en: "Pick something you know well, like a game's rules. Explain it to a younger child using one example. Then ask them a question to check.", hi: "कोई ऐसी चीज़ चुनो जो तुम अच्छी तरह जानते हो, जैसे किसी खेल के नियम। उसे एक उदाहरण के साथ किसी छोटे बच्चे को समझाओ। फिर एक सवाल पूछकर जाँचो।" },
          puzzles: { young: ["eng-verb"], future: ["fut-tense"] }
        },
        {
          id: "stories",
          title: { en: "Teach with stories", hi: "कहानियों से पढ़ाओ" },
          skill: { en: "Storyteller", hi: "कहानीकार" },
          big: { en: "People remember stories far better than lists. A story gives facts a reason to matter: who wanted what, what went wrong, and what they learned.", hi: "लोग सूचियों से कहीं ज़्यादा कहानियाँ याद रखते हैं। कहानी तथ्यों को मायने देती है: कौन क्या चाहता था, क्या गलत हुआ, और उसने क्या सीखा।" },
          example: { en: "A teacher explaining gravity could tell how an apple's fall made Newton wonder why the Moon doesn't fall too. The question sticks long after the lesson.", hi: "गुरुत्वाकर्षण समझाते हुए शिक्षक बता सकते हैं कि कैसे सेब के गिरने से न्यूटन सोचने लगे कि चाँद क्यों नहीं गिरता। यह सवाल पाठ के बहुत बाद तक याद रहता है।" },
          deeper: { en: "The same story can be told from different points of view. Asking students to retell a story from another character's view is a powerful way to check deep understanding.", hi: "एक ही कहानी अलग-अलग दृष्टिकोण से कही जा सकती है। छात्रों से किसी दूसरे किरदार की नज़र से कहानी दोबारा सुनाने को कहना गहरी समझ जाँचने का असरदार तरीक़ा है।" },
          animation: "story",
          links: [L.storyweaver, L.epathshala],
          tryIt: { en: "Turn a fact from your science book into a three-sentence story with a character, a problem and an ending. Tell it to someone.", hi: "अपनी विज्ञान की किताब के किसी तथ्य को एक किरदार, एक मुश्किल और एक अंत वाली तीन वाक्यों की कहानी में बदलो। किसी को सुनाओ।" },
          puzzles: { young: ["eng-story"], future: ["fut-pov"] }
        },
        {
          id: "plan",
          title: { en: "Plan a lesson step by step", hi: "कदम-दर-कदम पाठ की योजना" },
          skill: { en: "Lesson planner", hi: "पाठ योजनाकार" },
          big: { en: "A lesson plan is like an algorithm for learning: a goal, a starting question, steps that build on each other, and a quick check at the end.", hi: "पाठ योजना सीखने के लिए एक एल्गोरिदम जैसी है: एक लक्ष्य, एक शुरुआती सवाल, एक-दूसरे पर टिके कदम, और आख़िर में एक छोटी जाँच।" },
          example: { en: "Goal: understand why we have day and night. Start: 'Where does the Sun go at night?' Steps: torch and ball demo, children try it, draw it. Check: one question each.", hi: "लक्ष्य: समझना कि दिन और रात क्यों होते हैं। शुरुआत: 'रात को सूरज कहाँ जाता है?' कदम: टॉर्च और गेंद से दिखाना, बच्चे ख़ुद करें, चित्र बनाएँ। जाँच: हर बच्चे से एक सवाल।" },
          deeper: { en: "Good teachers plan for mistakes. They predict the common wrong ideas, like 'the Sun moves around the Earth', and design a question that brings them out.", hi: "अच्छे शिक्षक गलतियों के लिए भी योजना बनाते हैं। वे आम गलत धारणाओं का अनुमान लगाते हैं, जैसे 'सूरज धरती के चारों ओर घूमता है', और ऐसा सवाल बनाते हैं जो उन्हें सामने ले आए।" },
          animation: "daynight",
          links: [L.diksha, L.unplugged],
          tryIt: { en: "Plan a 10-minute lesson on something you love. Write the goal, a starting question, three steps and one check question.", hi: "अपनी पसंद की किसी चीज़ पर 10 मिनट का पाठ तैयार करो। लक्ष्य, शुरुआती सवाल, तीन कदम और जाँच का एक सवाल लिखो।" },
          puzzles: { young: ["code-loop"], future: ["fut-algorithm"] }
        }
      ],
      project: {
        title: { en: "Teach a real lesson", hi: "एक असली पाठ पढ़ाओ" },
        young: { en: "Teach a younger child one thing you learned this week. Ask a question first, then explain with an example, then check if they understood.", hi: "किसी छोटे बच्चे को इस हफ़्ते सीखी एक बात सिखाओ। पहले एक सवाल पूछो, फिर उदाहरण से समझाओ, फिर जाँचो कि उन्हें समझ आया या नहीं।" },
        future: { en: "Plan and teach a 10-minute lesson to two or three younger children. Afterwards, ask them what helped most and write down one thing you would change.", hi: "दो-तीन छोटे बच्चों के लिए 10 मिनट का पाठ तैयार करके पढ़ाओ। बाद में पूछो कि सबसे ज़्यादा किस चीज़ से मदद मिली, और एक बात लिखो जो तुम बदलोगे।" }
      },
      next: {
        subjects: { en: "All subjects, especially the one you'd like to teach", hi: "सभी विषय, ख़ासकर वह जिसे तुम पढ़ाना चाहोगे" },
        stream: { en: "Any stream", hi: "कोई भी धारा" },
        route: { en: "Teachers usually complete a degree and then a B.Ed. Passing the CTET exam qualifies you to teach in many schools.", hi: "शिक्षक आमतौर पर पहले डिग्री और फिर B.Ed. करते हैं। CTET परीक्षा पास करने से कई स्कूलों में पढ़ाने की योग्यता मिलती है।" }
      }
    },

    {
      id: "pilot",
      icon: "✈️",
      tint: "#DDEBFF",
      title: { en: "Pilot", hi: "पायलट" },
      dream: { en: "Fly planes across India and the world, safely through every kind of weather.", hi: "भारत और दुनिया भर में हवाई जहाज़ उड़ाओ, हर मौसम में सुरक्षित।" },
      job: { en: "Pilots fly aircraft safely from one place to another. Before every flight they check the weather, the route, the fuel and the plane itself. They stay calm and follow checklists, even when things go wrong.", hi: "पायलट विमान को एक जगह से दूसरी जगह सुरक्षित उड़ाते हैं। हर उड़ान से पहले वे मौसम, रास्ता, ईंधन और विमान की जाँच करते हैं। मुश्किल आने पर भी वे शांत रहते हैं और चेकलिस्ट का पालन करते हैं।" },
      day: [
        { en: "Study the weather along the route", hi: "रास्ते का मौसम देखना" },
        { en: "Calculate fuel for the flight, plus extra for safety", hi: "उड़ान के लिए ईंधन का हिसाब लगाना, सुरक्षा के लिए अतिरिक्त समेत" },
        { en: "Talk with air traffic control during take-off and landing", hi: "उड़ान भरते और उतरते समय एयर ट्रैफ़िक कंट्रोल से बात करना" }
      ],
      signs: [
        { en: "You look up every time a plane flies over", hi: "हर बार जहाज़ ऊपर से गुज़रे तो तुम ऊपर देखते हो" },
        { en: "You stay calm when things get exciting", hi: "रोमांचक पलों में भी तुम शांत रहते हो" },
        { en: "You like maps, numbers and quick thinking", hi: "तुम्हें नक्शे, संख्याएँ और तेज़ सोचना पसंद है" }
      ],
      hero: { en: "Avani Chaturvedi, from Madhya Pradesh, became one of India's first women fighter pilots, and flew a fighter jet solo in 2018.", hi: "मध्य प्रदेश की अवनी चतुर्वेदी भारत की पहली महिला लड़ाकू पायलटों में से एक बनीं, और 2018 में अकेले लड़ाकू विमान उड़ाया।" },
      india: { en: "J. R. D. Tata got the first pilot's licence in India in 1929, and started the airline that became Air India.", hi: "जे. आर. डी. टाटा ने 1929 में भारत का पहला पायलट लाइसेंस लिया, और वह एयरलाइन शुरू की जो आगे चलकर एयर इंडिया बनी।" },
      modules: [
        {
          id: "weather",
          title: { en: "Read the weather", hi: "मौसम पढ़ो" },
          skill: { en: "Weather reader", hi: "मौसम पढ़ने वाला" },
          big: { en: "Weather can make flying smooth or dangerous. Pilots check wind, clouds, rain, fog and temperature before every flight, and plan around storms.", hi: "मौसम उड़ान को आसान या ख़तरनाक बना सकता है। पायलट हर उड़ान से पहले हवा, बादल, बारिश, कोहरा और तापमान जाँचते हैं, और तूफ़ानों से बचकर योजना बनाते हैं।" },
          example: { en: "In winter, thick fog in north India can delay flights at Delhi airport. Planes with special equipment, and pilots trained to use it, can land when visibility is very low.", hi: "सर्दियों में उत्तर भारत का घना कोहरा दिल्ली हवाई अड्डे पर उड़ानें लेट कर सकता है। ख़ास उपकरणों वाले विमान, और उन्हें चलाने के लिए प्रशिक्षित पायलट, बहुत कम दृश्यता में भी उतर सकते हैं।" },
          deeper: { en: "Air gets colder and thinner as you go up: roughly 6.5°C colder for every kilometre. At a cruising height of 10 km, it can be below −40°C outside the plane.", hi: "ऊपर जाने पर हवा ठंडी और पतली होती जाती है: हर किलोमीटर पर लगभग 6.5°C ठंडी। 10 किमी की उड़ान ऊँचाई पर विमान के बाहर तापमान −40°C से भी कम हो सकता है।" },
          animation: "daynight",
          links: [L.climatekids, L.epathshala],
          tryIt: { en: "For one week, write down the weather each morning: sky, wind, temperature. Would you have flown that day? Explain why.", hi: "एक हफ़्ते तक हर सुबह मौसम लिखो: आसमान, हवा, तापमान। क्या तुम उस दिन उड़ान भरते? कारण बताओ।" },
          puzzles: { young: ["geo-cold"], future: ["fut-seasons"] }
        },
        {
          id: "flight",
          title: { en: "Gravity and flight", hi: "गुरुत्वाकर्षण और उड़ान" },
          skill: { en: "Flight thinker", hi: "उड़ान का विचारक" },
          big: { en: "Four forces act on a plane: weight pulls it down, lift from the wings pushes it up, thrust from the engines pushes it forward, and drag from the air holds it back. To fly level, lift must balance weight.", hi: "विमान पर चार बल काम करते हैं: भार नीचे खींचता है, पंखों से मिलने वाला उत्थान (lift) ऊपर धकेलता है, इंजन का प्रणोद (thrust) आगे धकेलता है, और हवा का घर्षण (drag) पीछे रोकता है। बराबर ऊँचाई पर उड़ने के लिए उत्थान को भार के बराबर होना चाहिए।" },
          example: { en: "A paper plane glides because its wings make a little lift as it moves through the air. If you throw it too slowly, there isn't enough lift and it dives.", hi: "कागज़ का जहाज़ इसलिए तैरता है क्योंकि हवा में चलते हुए उसके पंख थोड़ा उत्थान बनाते हैं। बहुत धीरे फेंकोगे, तो उत्थान कम पड़ेगा और वह नीचे गिर जाएगा।" },
          deeper: { en: "Without air, everything falls at the same rate, whatever its weight. In orbit, astronauts feel weightless because they and their spacecraft are falling around the Earth together.", hi: "हवा न हो तो हर चीज़ एक ही रफ़्तार से गिरती है, चाहे उसका वज़न कुछ भी हो। कक्षा में अंतरिक्ष यात्री भारहीन महसूस करते हैं क्योंकि वे और उनका यान साथ-साथ धरती के चारों ओर गिर रहे होते हैं।" },
          animation: "orbit",
          links: [phet("Forces and Motion: Basics", "बल और गति: मूल बातें"), L.nasa],
          tryIt: { en: "Drop a sheet of paper and a book at the same time. Then crumple the paper into a ball and try again. What changed, and why?", hi: "एक काग़ज़ और एक किताब एक साथ गिराओ। फिर काग़ज़ का गोला बनाकर दोबारा गिराओ। क्या बदला, और क्यों?" },
          puzzles: { young: ["sci-fall"], future: ["fut-gravity"] }
        },
        {
          id: "navigate",
          title: { en: "Quick with numbers", hi: "संख्याओं में तेज़" },
          skill: { en: "Navigator", hi: "दिशा-निर्देशक" },
          big: { en: "Pilots constantly work with numbers: distance, speed, time and fuel. Time = distance ÷ speed is something they use on every flight.", hi: "पायलट लगातार संख्याओं के साथ काम करते हैं: दूरी, रफ़्तार, समय और ईंधन। समय = दूरी ÷ रफ़्तार, यह वे हर उड़ान में इस्तेमाल करते हैं।" },
          example: { en: "Delhi to Mumbai is about 1,150 km in a straight line. At about 800 km/h, that's roughly an hour and a half in the air.", hi: "दिल्ली से मुंबई सीधी रेखा में लगभग 1,150 किमी है। लगभग 800 किमी प्रति घंटा की रफ़्तार से यह हवा में क़रीब डेढ़ घंटे का सफ़र है।" },
          deeper: { en: "Wind changes the real speed over the ground. A 100 km/h headwind turns 800 km/h into 700 km/h, so pilots carry extra fuel and recalculate as the wind changes.", hi: "हवा ज़मीन के ऊपर असली रफ़्तार बदल देती है। 100 किमी प्रति घंटे की सामने की हवा 800 को 700 किमी प्रति घंटा कर देती है, इसलिए पायलट अतिरिक्त ईंधन रखते हैं और हवा बदलने पर दोबारा हिसाब लगाते हैं।" },
          links: [L.khan, L.diksha],
          tryIt: { en: "Find two cities on a map of India. Measure the distance using the map's scale, and work out how long a plane at 800 km/h would take.", hi: "भारत के नक्शे पर दो शहर ढूँढो। नक्शे के पैमाने से दूरी नापो, और हिसाब लगाओ कि 800 किमी प्रति घंटे वाले विमान को कितना समय लगेगा।" },
          puzzles: { young: ["maths-pattern"], future: ["fut-average"] }
        }
      ],
      project: {
        title: { en: "Plan a flight", hi: "एक उड़ान की योजना बनाओ" },
        young: { en: "Make three paper planes with different wing shapes. Throw each three times, record the distances, and find which design wins.", hi: "अलग-अलग पंखों वाले तीन कागज़ के जहाज़ बनाओ। हर एक को तीन बार फेंको, दूरियाँ लिखो, और पता करो कि कौन-सा डिज़ाइन जीतता है।" },
        future: { en: "Plan a flight between two Indian cities: the straight-line distance, flight time at 800 km/h, the effect of a 100 km/h headwind, and the weather you'd check before take-off.", hi: "दो भारतीय शहरों के बीच उड़ान की योजना बनाओ: सीधी दूरी, 800 किमी प्रति घंटे पर उड़ान का समय, 100 किमी प्रति घंटे की सामने की हवा का असर, और उड़ान से पहले देखा जाने वाला मौसम।" }
      },
      next: {
        subjects: { en: "Maths and Physics, and good English", hi: "गणित और भौतिकी, और अच्छी अंग्रेज़ी" },
        stream: { en: "Science stream with Physics and Maths", hi: "भौतिकी और गणित वाली विज्ञान धारा" },
        route: { en: "Flying schools, such as IGRUA in Uttar Pradesh, lead to a Commercial Pilot Licence from the DGCA. The Indian Air Force selects pilots through the NDA exam after Class 12.", hi: "उत्तर प्रदेश के IGRUA जैसे फ़्लाइंग स्कूल DGCA से कमर्शियल पायलट लाइसेंस तक ले जाते हैं। भारतीय वायुसेना कक्षा 12 के बाद NDA परीक्षा से पायलट चुनती है।" }
      }
    },

    {
      id: "nature",
      icon: "🌳",
      tint: "#D9F2E3",
      title: { en: "Nature Protector", hi: "प्रकृति रक्षक" },
      dream: { en: "Protect forests, rivers and animals, and keep our planet healthy.", hi: "जंगलों, नदियों और जानवरों की रक्षा करो, और हमारी धरती को स्वस्थ रखो।" },
      job: { en: "Environmental scientists and wildlife experts study how nature works and protect it: counting animals, cleaning rivers, planting forests and helping villages live alongside wildlife.", hi: "पर्यावरण वैज्ञानिक और वन्यजीव विशेषज्ञ अध्ययन करते हैं कि प्रकृति कैसे काम करती है और उसकी रक्षा करते हैं: जानवरों की गिनती, नदियों की सफ़ाई, जंगल लगाना और गाँवों को वन्यजीवों के साथ रहने में मदद करना।" },
      day: [
        { en: "Check camera traps for tigers in a forest", hi: "जंगल में बाघों के लिए लगे कैमरों की जाँच करना" },
        { en: "Test river water for pollution", hi: "नदी के पानी में प्रदूषण की जाँच करना" },
        { en: "Work with villagers to plant trees", hi: "गाँव वालों के साथ पेड़ लगाना" }
      ],
      signs: [
        { en: "You love animals, birds and trees", hi: "तुम्हें जानवर, पक्षी और पेड़ बहुत पसंद हैं" },
        { en: "Litter and waste make you upset", hi: "कूड़ा और बर्बादी तुम्हें परेशान करते हैं" },
        { en: "You enjoy exploring outdoors", hi: "तुम्हें बाहर घूमना और खोजना अच्छा लगता है" }
      ],
      hero: { en: "Saalumarada Thimmakka, from a village in Karnataka, planted and cared for hundreds of banyan trees along a road, without ever going to school.", hi: "कर्नाटक के एक गाँव की सालुमरदा थिमक्का ने बिना कभी स्कूल गए, सड़क किनारे सैकड़ों बरगद के पेड़ लगाए और उनकी देखभाल की।" },
      india: { en: "Project Tiger began in 1973. Today India is home to most of the world's wild tigers.", hi: "प्रोजेक्ट टाइगर 1973 में शुरू हुआ। आज दुनिया के ज़्यादातर जंगली बाघ भारत में रहते हैं।" },
      modules: [
        {
          id: "planet",
          title: { en: "Water and our planet", hi: "पानी और हमारी धरती" },
          skill: { en: "Earth expert", hi: "धरती विशेषज्ञ" },
          big: { en: "Water moves in a cycle: it evaporates, forms clouds, falls as rain and flows back through rivers and underground. Forests and lakes help hold water, so rain soaks in instead of rushing away.", hi: "पानी एक चक्र में घूमता है: वह भाप बनता है, बादल बनता है, बारिश बनकर गिरता है और नदियों व ज़मीन के नीचे से वापस बहता है। जंगल और तालाब पानी रोकने में मदद करते हैं, ताकि बारिश बह जाने के बजाय ज़मीन में समा जाए।" },
          example: { en: "Villages in Rajasthan have revived old johads, small earthen check dams, to catch monsoon rain. Groundwater rose, and some rivers that had dried up began to flow again.", hi: "राजस्थान के गाँवों ने मानसून की बारिश रोकने के लिए पुराने जोहड़, यानी मिट्टी के छोटे बाँध, फिर से बनाए। भूजल ऊपर आया, और सूख चुकी कुछ नदियाँ फिर से बहने लगीं।" },
          deeper: { en: "Only about 3% of Earth's water is fresh, and most of that is frozen in ice. Groundwater, pumped up for farming, refills slowly, so in many places it is being used faster than rain can replace it.", hi: "धरती के पानी का सिर्फ़ लगभग 3% मीठा है, और उसका ज़्यादातर हिस्सा बर्फ़ में जमा है। खेती के लिए निकाला जाने वाला भूजल धीरे-धीरे भरता है, इसलिए कई जगहों पर वह बारिश से भरने से तेज़ी से ख़र्च हो रहा है।" },
          animation: "water",
          links: [L.climatekids, L.epathshala],
          tryIt: { en: "Count the buckets of water your home uses in a day. Find one way to save water, try it for a week, and count again.", hi: "गिनो कि तुम्हारा घर एक दिन में कितनी बाल्टी पानी इस्तेमाल करता है। पानी बचाने का एक तरीक़ा ढूँढो, एक हफ़्ते आज़माओ, और फिर गिनो।" },
          puzzles: { young: ["geo-volcano"], future: ["fut-seasons"] }
        },
        {
          id: "animals",
          title: { en: "How animals survive", hi: "जानवर कैसे जीते हैं" },
          skill: { en: "Wildlife friend", hi: "वन्यजीव मित्र" },
          big: { en: "Every animal is adapted to where it lives: its body and habits help it find food, stay safe and handle the heat or cold. When a habitat changes too fast, animals can't adapt in time.", hi: "हर जानवर अपने रहने की जगह के हिसाब से ढला होता है: उसका शरीर और आदतें उसे खाना ढूँढने, सुरक्षित रहने और गर्मी या ठंड सहने में मदद करती हैं। जब कोई आवास बहुत तेज़ी से बदलता है, तो जानवर समय पर ढल नहीं पाते।" },
          example: { en: "The Great Indian Bustard of the Thar Desert flies into power lines because it can't see well straight ahead. Moving lines underground and marking them helps protect it.", hi: "थार मरुस्थल का गोडावण (ग्रेट इंडियन बस्टर्ड) बिजली के तारों से टकरा जाता है क्योंकि वह सीधे आगे ठीक से नहीं देख पाता। तारों को ज़मीन के नीचे डालने और उन पर निशान लगाने से उसे बचाने में मदद मिलती है।" },
          deeper: { en: "In a food chain, energy passes from plants to plant-eaters to meat-eaters. Remove the top predator, like the tiger, and deer numbers can explode and strip the forest. That is why protecting tigers protects whole forests.", hi: "भोजन श्रृंखला में ऊर्जा पौधों से शाकाहारी और फिर मांसाहारी जीवों तक पहुँचती है। बाघ जैसे शीर्ष शिकारी को हटा दो, तो हिरणों की संख्या बेतहाशा बढ़कर जंगल को उजाड़ सकती है। इसीलिए बाघों की रक्षा पूरे जंगल की रक्षा है।" },
          links: [phet("Natural Selection", "प्राकृतिक चयन"), L.ncert],
          tryIt: { en: "Watch one bird or insect near your home for 10 minutes. Write what it eats, how it moves, and one thing about its body that helps it survive.", hi: "अपने घर के पास किसी एक पक्षी या कीड़े को 10 मिनट तक देखो। लिखो कि वह क्या खाता है, कैसे चलता है, और उसके शरीर की कौन-सी बात उसे जीने में मदद करती है।" },
          puzzles: { young: ["sci-camel"], future: ["fut-polar"] }
        },
        {
          id: "count",
          title: { en: "Count and track nature", hi: "प्रकृति की गिनती और निगरानी" },
          skill: { en: "Nature counter", hi: "प्रकृति गिनने वाला" },
          big: { en: "To protect nature, you first need to know what is there and how it's changing. Scientists count animals, measure rainfall and track trees over many years.", hi: "प्रकृति की रक्षा के लिए पहले यह जानना ज़रूरी है कि वहाँ क्या है और वह कैसे बदल रहा है। वैज्ञानिक कई सालों तक जानवर गिनते हैं, बारिश नापते हैं और पेड़ों पर नज़र रखते हैं।" },
          example: { en: "India's tiger count uses camera traps across forests. Every tiger's stripes are unique, like a fingerprint, so computers can tell individual tigers apart.", hi: "भारत में बाघों की गिनती पूरे जंगल में लगे कैमरों से होती है। हर बाघ की धारियाँ उँगलियों के निशान की तरह अलग होती हैं, इसलिए कंप्यूटर हर बाघ को पहचान लेते हैं।" },
          deeper: { en: "Scientists can't count every animal, so they sample: count in some areas and estimate the rest. The more careful the sampling, the more trustworthy the estimate.", hi: "वैज्ञानिक हर जानवर नहीं गिन सकते, इसलिए वे नमूना लेते हैं: कुछ इलाक़ों में गिनकर बाक़ी का अनुमान लगाते हैं। नमूना जितनी सावधानी से लिया जाए, अनुमान उतना भरोसेमंद होता है।" },
          links: [L.climatekids, L.khan],
          tryIt: { en: "Pick one tree. Count the birds that visit it for 10 minutes each day for a week. Make a table and find the average.", hi: "एक पेड़ चुनो। एक हफ़्ते तक रोज़ 10 मिनट उस पर आने वाले पक्षियों को गिनो। तालिका बनाओ और औसत निकालो।" },
          puzzles: { young: ["maths-pattern"], future: ["fut-average"] }
        }
      ],
      project: {
        title: { en: "Become a nature watcher", hi: "प्रकृति के निगरानी करने वाले बनो" },
        young: { en: "Keep a nature diary for two weeks: the birds, insects and plants near your home, with drawings and dates.", hi: "दो हफ़्ते तक प्रकृति डायरी रखो: घर के पास के पक्षी, कीड़े और पौधे, चित्रों और तारीख़ों के साथ।" },
        future: { en: "Pick one problem near you, like litter, wasted water or a cut tree. Measure it, try one fix for two weeks, measure again, and report the results to your school or panchayat.", hi: "अपने आसपास की एक समस्या चुनो, जैसे कूड़ा, बर्बाद पानी या कटा पेड़। उसे नापो, दो हफ़्ते एक उपाय आज़माओ, फिर नापो, और नतीजे अपने स्कूल या पंचायत को बताओ।" }
      },
      next: {
        subjects: { en: "Biology and Geography", hi: "जीवविज्ञान और भूगोल" },
        stream: { en: "Science stream with Biology, or Arts with Geography", hi: "जीवविज्ञान वाली विज्ञान धारा, या भूगोल के साथ कला" },
        route: { en: "Degrees in environmental science, forestry or zoology. The Wildlife Institute of India in Dehradun trains wildlife scientists.", hi: "पर्यावरण विज्ञान, वानिकी या प्राणीशास्त्र की डिग्री। देहरादून का भारतीय वन्यजीव संस्थान वन्यजीव वैज्ञानिकों को प्रशिक्षण देता है।" }
      }
    },

    {
      id: "musician",
      icon: "🎵",
      tint: "#F0E2FF",
      title: { en: "Musician", hi: "संगीतकार" },
      dream: { en: "Make music that people love, from ragas to film songs.", hi: "ऐसा संगीत बनाओ जो लोगों को पसंद आए, रागों से लेकर फ़िल्मी गीतों तक।" },
      job: { en: "Musicians sing, play instruments, compose songs and record music for films, stages and festivals. Behind every great performance are years of daily practice, careful listening and a lot of patience.", hi: "संगीतकार गाते हैं, वाद्य बजाते हैं, गीत रचते हैं और फ़िल्मों, मंचों और उत्सवों के लिए संगीत रिकॉर्ड करते हैं। हर शानदार प्रस्तुति के पीछे सालों का रोज़ का अभ्यास, ध्यान से सुनना और ख़ूब धैर्य होता है।" },
      day: [
        { en: "Practise scales and ragas for two hours", hi: "दो घंटे सरगम और रागों का अभ्यास करना" },
        { en: "Compose a tune for a new song", hi: "नए गीत की धुन बनाना" },
        { en: "Record in a studio with other musicians", hi: "दूसरे संगीतकारों के साथ स्टूडियो में रिकॉर्ड करना" }
      ],
      signs: [
        { en: "Songs stay in your head for days", hi: "गाने कई दिनों तक तुम्हारे दिमाग़ में बजते रहते हैं" },
        { en: "You tap rhythms on tables and tins", hi: "तुम मेज़ों और डिब्बों पर ताल बजाते रहते हो" },
        { en: "You notice when a note sounds wrong", hi: "कोई सुर गलत लगे तो तुम तुरंत पकड़ लेते हो" }
      ],
      hero: { en: "M. S. Subbulakshmi, from Madurai, became the first musician to receive the Bharat Ratna, India's highest civilian award.", hi: "मदुरै की एम. एस. सुब्बुलक्ष्मी भारत रत्न, भारत का सबसे बड़ा नागरिक सम्मान, पाने वाली पहली संगीतकार बनीं।" },
      india: { en: "Indian classical music is built on ragas, and many ragas are meant for a particular time of day.", hi: "भारतीय शास्त्रीय संगीत रागों पर आधारित है, और कई राग दिन के किसी ख़ास समय के लिए होते हैं।" },
      modules: [
        {
          id: "sound",
          title: { en: "Explore sound", hi: "आवाज़ को समझो" },
          skill: { en: "Sound explorer", hi: "ध्वनि खोजी" },
          big: { en: "Every sound is a vibration. Bigger vibrations sound louder. Faster vibrations sound higher. Instruments are clever ways of controlling vibrations: strings, skins, air columns.", hi: "हर आवाज़ एक कंपन है। बड़ा कंपन तेज़ सुनाई देता है। जल्दी-जल्दी होने वाला कंपन ऊँचा सुनाई देता है। वाद्य कंपन को क़ाबू करने के चतुर तरीक़े हैं: तार, खाल, हवा के खंभे।" },
          example: { en: "A tabla player presses the drum skin with the heel of the hand to change the pitch while playing. A flute player opens and closes holes to make the vibrating air column shorter or longer.", hi: "तबला वादक बजाते हुए हथेली से खाल दबाकर सुर बदलते हैं। बाँसुरी वादक छेद खोलकर और बंद करके काँपती हवा के खंभे को छोटा या लंबा करते हैं।" },
          deeper: { en: "Pitch is frequency: vibrations per second, measured in hertz (Hz). Doubling the frequency raises a note by one octave, from one Sa to the next. Sound travels at about 343 metres per second in air.", hi: "सुर की ऊँचाई आवृत्ति है: हर सेकंड कितने कंपन, जिसे हर्ट्ज़ (Hz) में नापते हैं। आवृत्ति दोगुनी करने से सुर एक सप्तक ऊपर जाता है, एक 'सा' से अगले 'सा' तक। हवा में आवाज़ लगभग 343 मीटर प्रति सेकंड चलती है।" },
          animation: "sound",
          links: [L.musiclab, phet("Waves Intro", "तरंगें: परिचय")],
          tryIt: { en: "Make a jal tarang: fill five glasses with different amounts of water, tap them gently with a spoon, and arrange them from the lowest note to the highest.", hi: "जल तरंग बनाओ: पाँच गिलासों में अलग-अलग मात्रा में पानी भरो, चम्मच से धीरे बजाओ, और उन्हें सबसे नीचे सुर से सबसे ऊँचे सुर तक लगाओ।" },
          puzzles: { young: ["sci-thunder"], future: ["fut-sound"] }
        },
        {
          id: "lyrics",
          title: { en: "Words for songs", hi: "गीतों के बोल" },
          skill: { en: "Lyric writer", hi: "गीत लिखने वाला" },
          big: { en: "Song lyrics need rhythm and rhyme so they fit the tune and stick in the mind. Good lyrics also paint a picture with simple, strong words.", hi: "गीत के बोलों में लय और तुक चाहिए ताकि वे धुन में बैठें और याद रहें। अच्छे बोल आसान, दमदार शब्दों से एक तस्वीर भी बनाते हैं।" },
          example: { en: "Folk songs from across India, sung while sowing, harvesting or at weddings, use repeated lines and rhymes so everyone can join in.", hi: "भारत भर के लोकगीत, जो बुवाई, कटाई या शादियों में गाए जाते हैं, दोहराई जाने वाली पंक्तियों और तुक का इस्तेमाल करते हैं, ताकि सब साथ गा सकें।" },
          deeper: { en: "Lyricists count syllables so words match the beats. Similes and metaphors ('like a river', 'the night is a blanket') help a short song carry big feelings.", hi: "गीतकार अक्षर गिनते हैं ताकि शब्द ताल पर बैठें। उपमा और रूपक ('नदी की तरह', 'रात एक चादर है') छोटे से गीत में भी बड़ी भावनाएँ भर देते हैं।" },
          links: [L.storyweaver, L.epathshala],
          tryIt: { en: "Take a tune you know and write new words for it about your school or village. Keep the rhyme and the number of beats in each line.", hi: "कोई जानी-पहचानी धुन लो और उस पर अपने स्कूल या गाँव के बारे में नए बोल लिखो। हर पंक्ति में तुक और ताल की गिनती वैसी ही रखो।" },
          puzzles: { young: ["eng-rhyme"], future: ["fut-simile"] }
        },
        {
          id: "beat",
          title: { en: "Count the beat", hi: "ताल गिनो" },
          skill: { en: "Rhythm keeper", hi: "ताल रखने वाला" },
          big: { en: "Rhythm is a pattern in time. Indian music organises beats into talas: teentaal has 16 beats, kaharva has 8. Musicians count, clap and wave to keep the cycle.", hi: "लय समय में एक पैटर्न है। भारतीय संगीत में मात्राएँ ताल में बँधी होती हैं: तीनताल में 16 मात्राएँ होती हैं, कहरवा में 8। संगीतकार चक्र बनाए रखने के लिए गिनते, ताली बजाते और हाथ हिलाते हैं।" },
          example: { en: "In teentaal, the 16 beats are grouped 4 + 4 + 4 + 4. The first beat, sam, is where everything meets, and a good audience often nods or claps right on it.", hi: "तीनताल में 16 मात्राएँ 4 + 4 + 4 + 4 में बँटी होती हैं। पहली मात्रा, सम, वह जगह है जहाँ सब मिलते हैं, और अच्छे श्रोता अक्सर ठीक उसी पर सिर हिलाते या ताली बजाते हैं।" },
          deeper: { en: "Rhythms can be written as patterns of on and off, like binary: 1 for a stroke, 0 for a rest. Computers and drum machines store beats exactly this way.", hi: "लय को चालू और बंद के पैटर्न की तरह लिखा जा सकता है, बाइनरी जैसा: बोल के लिए 1, ख़ाली के लिए 0। कंप्यूटर और ड्रम मशीनें ताल बिल्कुल इसी तरह रखती हैं।" },
          links: [L.musiclab, L.khan],
          tryIt: { en: "Clap kaharva: 8 beats, with a stronger clap on 1 and a wave on 5. Then make up your own 8-beat rhythm and teach it to someone.", hi: "कहरवा पर ताली बजाओ: 8 मात्राएँ, 1 पर ज़ोर की ताली और 5 पर ख़ाली (हाथ हिलाना)। फिर अपनी 8 मात्राओं की लय बनाओ और किसी को सिखाओ।" },
          puzzles: { young: ["maths-pattern"], future: ["fut-binary"] }
        }
      ],
      project: {
        title: { en: "Make your own instrument and song", hi: "अपना वाद्य और गीत बनाओ" },
        young: { en: "Make a jal tarang with glasses of water, and play a simple tune you know. Then write two new lines of lyrics for it.", hi: "पानी के गिलासों से जल तरंग बनाओ और कोई आसान जानी-पहचानी धुन बजाओ। फिर उसके लिए दो नई पंक्तियाँ लिखो।" },
        future: { en: "Build a string instrument from a box and rubber bands of different thickness. Find how thickness and tightness change the note, compose an 8-beat tune, and perform it.", hi: "एक डिब्बे और अलग-अलग मोटाई के रबर बैंड से तार वाला वाद्य बनाओ। पता करो कि मोटाई और कसाव सुर को कैसे बदलते हैं, 8 मात्राओं की धुन बनाओ, और उसे सुनाओ।" }
      },
      next: {
        subjects: { en: "Music, plus maths for rhythm and languages for lyrics", hi: "संगीत, साथ में लय के लिए गणित और बोलों के लिए भाषाएँ" },
        stream: { en: "Any stream", hi: "कोई भी धारा" },
        route: { en: "Music degrees at universities, graded exams in Hindustani or Carnatic music, and years of practice with a guru or teacher.", hi: "विश्वविद्यालयों में संगीत की डिग्री, हिंदुस्तानी या कर्नाटक संगीत की श्रेणीबद्ध परीक्षाएँ, और गुरु या शिक्षक के साथ सालों का अभ्यास।" }
      }
    },

    {
      id: "sports",
      icon: "🏅",
      tint: "#FFE9D6",
      title: { en: "Sportsperson", hi: "खिलाड़ी" },
      dream: { en: "Train your body and mind, and play for India one day.", hi: "अपने शरीर और मन को तैयार करो, और एक दिन भारत के लिए खेलो।" },
      job: { en: "Athletes train their bodies and minds to perform at their best. They follow training plans, eat well, rest properly and study their own performance with coaches, often for years before a big win.", hi: "खिलाड़ी सबसे अच्छा प्रदर्शन करने के लिए अपने शरीर और मन को तैयार करते हैं। वे ट्रेनिंग की योजना मानते हैं, अच्छा खाते हैं, ठीक से आराम करते हैं और कोच के साथ अपने प्रदर्शन का अध्ययन करते हैं, अक्सर किसी बड़ी जीत से सालों पहले से।" },
      day: [
        { en: "Train early in the morning", hi: "सुबह जल्दी ट्रेनिंग करना" },
        { en: "Watch a recording of yesterday's practice with the coach", hi: "कोच के साथ कल के अभ्यास की रिकॉर्डिंग देखना" },
        { en: "Plan meals and rest for recovery", hi: "शरीर को ठीक होने के लिए खाने और आराम की योजना बनाना" }
      ],
      signs: [
        { en: "You love running, jumping or playing games", hi: "तुम्हें दौड़ना, कूदना या खेलना बहुत पसंद है" },
        { en: "You keep practising until you get better", hi: "बेहतर होने तक तुम अभ्यास करते रहते हो" },
        { en: "You can lose a game and still try again", hi: "तुम खेल हारकर भी फिर कोशिश कर सकते हो" }
      ],
      hero: { en: "P. T. Usha, from Payyoli, a small village in Kerala, became one of India's greatest sprinters, known as the 'Payyoli Express'.", hi: "केरल के छोटे से गाँव पय्योली की पी. टी. उषा भारत की सबसे महान धावकों में से एक बनीं, जिन्हें 'पय्योली एक्सप्रेस' कहा गया।" },
      india: { en: "Neeraj Chopra won India's first Olympic gold medal in athletics, in javelin, at the Tokyo Olympics.", hi: "नीरज चोपड़ा ने टोक्यो ओलंपिक में भाला फेंक में एथलेटिक्स में भारत का पहला ओलंपिक स्वर्ण पदक जीता।" },
      modules: [
        {
          id: "body",
          title: { en: "Know your body", hi: "अपने शरीर को जानो" },
          skill: { en: "Body explorer", hi: "शरीर खोजी" },
          big: { en: "When you exercise, your muscles need more oxygen, so your heart beats faster and you breathe harder. With regular training, your heart gets stronger and pumps more blood with each beat.", hi: "व्यायाम करते समय मांसपेशियों को ज़्यादा ऑक्सीजन चाहिए, इसलिए दिल तेज़ धड़कता है और साँस तेज़ चलती है। नियमित ट्रेनिंग से दिल मज़बूत होता है और हर धड़कन में ज़्यादा ख़ून पंप करता है।" },
          example: { en: "Many long-distance runners have a resting pulse well below average, because their trained hearts move more blood with each beat.", hi: "कई लंबी दौड़ के धावकों की आराम की नब्ज़ औसत से काफ़ी कम होती है, क्योंकि उनका प्रशिक्षित दिल हर धड़कन में ज़्यादा ख़ून भेजता है।" },
          deeper: { en: "Haemoglobin in red blood cells carries oxygen. Training at high altitude makes the body produce more red blood cells, which is why some athletes train in the mountains before big races.", hi: "लाल रक्त कोशिकाओं का हीमोग्लोबिन ऑक्सीजन ले जाता है। ऊँचाई पर ट्रेनिंग से शरीर ज़्यादा लाल रक्त कोशिकाएँ बनाता है, इसीलिए कुछ खिलाड़ी बड़ी दौड़ों से पहले पहाड़ों पर ट्रेनिंग करते हैं।" },
          animation: "heart",
          links: [L.khan, L.ncert],
          tryIt: { en: "Count your pulse at rest, right after 50 skips, and after resting 2 minutes. How quickly does it come back down?", hi: "आराम में, 50 बार रस्सी कूदने के तुरंत बाद, और 2 मिनट आराम के बाद अपनी नब्ज़ गिनो। वह कितनी जल्दी वापस नीचे आती है?" },
          puzzles: { young: ["sci-heart"], future: ["fut-blood"] }
        },
        {
          id: "health",
          title: { en: "Stay healthy and strong", hi: "स्वस्थ और मज़बूत रहो" },
          skill: { en: "Health champion", hi: "सेहत का चैंपियन" },
          big: { en: "A sick athlete can't train. Clean hands, clean water, good food and enough sleep keep you healthy. Most growing children need around 9 to 11 hours of sleep.", hi: "बीमार खिलाड़ी ट्रेनिंग नहीं कर सकता। साफ़ हाथ, साफ़ पानी, अच्छा खाना और पूरी नींद तुम्हें स्वस्थ रखते हैं। ज़्यादातर बढ़ते बच्चों को लगभग 9 से 11 घंटे की नींद चाहिए।" },
          example: { en: "Before big tournaments, teams are careful about drinking water and washing hands, because one stomach infection can knock out several players.", hi: "बड़े टूर्नामेंट से पहले टीमें पीने के पानी और हाथ धोने को लेकर सावधान रहती हैं, क्योंकि पेट का एक संक्रमण कई खिलाड़ियों को बाहर कर सकता है।" },
          deeper: { en: "Vaccines protect athletes who travel to competitions and meet many people. Muscles rebuild and get stronger during rest, so recovery days are part of training, not a break from it.", hi: "टीके उन खिलाड़ियों की रक्षा करते हैं जो प्रतियोगिताओं के लिए यात्रा करते और बहुत लोगों से मिलते हैं। मांसपेशियाँ आराम के दौरान फिर से बनती और मज़बूत होती हैं, इसलिए आराम के दिन ट्रेनिंग का हिस्सा हैं, उससे छुट्टी नहीं।" },
          links: [L.khan, L.epathshala],
          tryIt: { en: "For one week, write down the hours you sleep and how energetic you feel each morning, from 1 to 5. Do you see a pattern?", hi: "एक हफ़्ते तक लिखो कि तुम कितने घंटे सोए और हर सुबह कितनी ऊर्जा महसूस हुई, 1 से 5 तक। क्या कोई पैटर्न दिखता है?" },
          puzzles: { young: ["sci-germs"], future: ["fut-vaccine"] }
        },
        {
          id: "training",
          title: { en: "Train like a scientist", hi: "वैज्ञानिक की तरह ट्रेनिंग करो" },
          skill: { en: "Training tracker", hi: "ट्रेनिंग पर नज़र रखने वाला" },
          big: { en: "Top athletes measure everything: times, distances, heart rate, sleep. Writing it down shows whether training is really working, instead of guessing.", hi: "बड़े खिलाड़ी सब कुछ नापते हैं: समय, दूरी, दिल की धड़कन, नींद। लिखकर रखने से पता चलता है कि ट्रेनिंग सच में काम कर रही है या नहीं, अंदाज़ा लगाने के बजाय।" },
          example: { en: "A javelin thrower records every throw in practice. If the average distance rises over a month, the new technique is working.", hi: "भाला फेंकने वाला अभ्यास में हर थ्रो लिखता है। अगर एक महीने में औसत दूरी बढ़ती है, तो नई तकनीक काम कर रही है।" },
          deeper: { en: "One great throw might be luck. Coaches look at the average and how much results vary. A steadily rising average with less variation means real improvement.", hi: "एक शानदार थ्रो क़िस्मत भी हो सकता है। कोच औसत देखते हैं और यह कि नतीजों में कितना उतार-चढ़ाव है। लगातार बढ़ता औसत और कम उतार-चढ़ाव असली सुधार है।" },
          links: [L.khelo, L.khan],
          tryIt: { en: "Time a 50-metre run three times on three different days. Find the average each day. Are you getting faster?", hi: "तीन अलग-अलग दिनों में 50 मीटर की दौड़ का तीन-तीन बार समय नापो। हर दिन का औसत निकालो। क्या तुम तेज़ हो रहे हो?" },
          puzzles: { young: ["maths-pattern"], future: ["fut-average"] }
        }
      ],
      project: {
        title: { en: "Run your own training plan", hi: "अपनी ट्रेनिंग योजना चलाओ" },
        young: { en: "Do a 2-week fitness challenge: skip, run or stretch every day, and record how many you can do. Draw a chart of your progress.", hi: "2 हफ़्ते की फ़िटनेस चुनौती लो: रोज़ रस्सी कूदो, दौड़ो या स्ट्रेचिंग करो, और लिखो कि कितना कर पाए। अपनी प्रगति का चार्ट बनाओ।" },
        future: { en: "Follow a 2-week training plan. Record your resting pulse and a timed run every few days, graph both, and explain what changed and why.", hi: "2 हफ़्ते की ट्रेनिंग योजना मानो। हर कुछ दिनों में आराम की नब्ज़ और समय नापी दौड़ लिखो, दोनों का ग्राफ़ बनाओ, और समझाओ कि क्या बदला और क्यों।" }
      },
      next: {
        subjects: { en: "Physical education, Biology and Maths", hi: "शारीरिक शिक्षा, जीवविज्ञान और गणित" },
        stream: { en: "Any stream; keep training alongside your studies", hi: "कोई भी धारा; पढ़ाई के साथ ट्रेनिंग जारी रखो" },
        route: { en: "The Sports Authority of India (SAI) runs training centres, and Khelo India finds and supports young athletes. Sports science and coaching are careers too.", hi: "भारतीय खेल प्राधिकरण (SAI) ट्रेनिंग केंद्र चलाता है, और खेलो इंडिया युवा खिलाड़ियों को ढूँढकर उनकी मदद करता है। खेल विज्ञान और कोचिंग भी करियर हैं।" }
      }
    }
  ];
})();
