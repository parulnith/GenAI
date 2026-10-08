(function () {
  var data = window.BTJ;
  var VIEWS = ["start", "home", "path", "learn", "ask", "grown-ups", "privacy"];
  var SVG_NS = "http://www.w3.org/2000/svg";

  // Two levels for Class 5 to 10. Each module has its own puzzles for each level.
  // Class 5-7 puzzles carry two explanations: "young" for Class 5, "older" for Class 6 and 7.
  var LEVELS = [
    { id: "young", from: 5, to: 7, name: { en: "Young Builder", hi: "युवा निर्माता" } },
    { id: "future", from: 8, to: 10, name: { en: "Future Maker", hi: "भविष्य निर्माता" } }
  ];

  var BADGES = [
    { at: 0, name: { en: "New Explorer", hi: "नया खोजी" } },
    { at: 3, name: { en: "Curious Explorer", hi: "जिज्ञासु खोजी" } },
    { at: 6, name: { en: "Super Solver", hi: "सुपर सॉल्वर" } },
    { at: 10, name: { en: "Jargon Breaker", hi: "जार्गन ब्रेकर" } }
  ];

  // Every piece of interface text, in English and Hindi.
  var UI = {
    starsLabel: { en: "stars", hi: "सितारे" },
    tabHome: { en: "Home", hi: "होम" },
    tabPath: { en: "My path", hi: "मेरा रास्ता" },
    tabAsk: { en: "Ask Mitthu", hi: "मिट्ठू से पूछो" },
    classChip: { en: "Class {n}", hi: "कक्षा {n}" },
    pickClass: { en: "Your class?", hi: "कक्षा?" },
    classBubble: { en: "Which class are you in? Then I'll open your path.", hi: "तुम किस कक्षा में हो? फिर मैं तुम्हारा रास्ता खोलूँगा।" },
    classTitle: { en: "Which class are you in?", hi: "तुम किस कक्षा में हो?" },
    homeIntro: { en: "Pick a dream and learn your way there: real lessons, interactive animations, hands-on projects and Indian role models. For Class 5 to 10, in English and Hindi.", hi: "एक सपना चुनो और सीखते हुए उस तक पहुँचो: असली पाठ, इंटरैक्टिव एनिमेशन, हाथ से करने वाले प्रोजेक्ट और भारतीय आदर्श। कक्षा 5 से 10 के लिए, अंग्रेज़ी और हिंदी में।" },
    equaliser: { en: "Where you live doesn't decide what you become.", hi: "तुम कहाँ रहते हो, इससे तय नहीं होता कि तुम क्या बनोगे।" },
    homeBubble: { en: "Pick a dream. I'll walk the path with you, one step at a time.", hi: "एक सपना चुनो। मैं हर कदम पर तुम्हारे साथ चलूँगा।" },
    homeTitle: { en: "What do you want to become?", hi: "तुम क्या बनना चाहते हो?" },
    orAsk: { en: "Just have a question?", hi: "बस कोई सवाल है?" },
    orAskLink: { en: "Ask Mitthu", hi: "मिट्ठू से पूछो" },
    discoverTitle: { en: "What you're discovering", hi: "तुम क्या खोज रहे हो" },
    discoverText: { en: "The lessons you loved are clues to what you might enjoy doing one day.", hi: "जो पाठ तुम्हें बहुत पसंद आए, वे इशारा हैं कि तुम्हें आगे क्या करना अच्छा लग सकता है।" },
    loved: { en: "{n} loved", hi: "{n} पसंद" },
    cardInfo: { en: "{m} lessons + a project", hi: "{m} पाठ + एक प्रोजेक्ट" },
    cardProgress: { en: "{d} of {m} lessons done", hi: "{m} में से {d} पाठ पूरे" },

    backToDreams: { en: "All dreams", hi: "सारे सपने" },
    myDream: { en: "My dream", hi: "मेरा सपना" },
    levelLine: { en: "{level} · Class {n}", hi: "{level} · कक्षा {n}" },
    skillsOf: { en: "{d} of {n} skills earned", hi: "{n} में से {d} हुनर कमाए" },
    journeyTitle: { en: "Your journey", hi: "तुम्हारी यात्रा" },
    lessonN: { en: "Lesson {n}", hi: "पाठ {n}" },
    doNext: { en: "Do this next", hi: "अब यह करो" },
    start: { en: "Start", hi: "शुरू करो" },
    review: { en: "Review", hi: "दोबारा देखो" },
    earn: { en: "Earn: {skill}", hi: "कमाओ: {skill}" },
    earned: { en: "Earned: {skill}", hi: "कमाया: {skill}" },
    projectLabel: { en: "Final project", hi: "आख़िरी प्रोजेक्ट" },
    jobTitle: { en: "What the work is like", hi: "यह काम कैसा है" },
    dayTitle: { en: "A day in the life", hi: "एक दिन की झलक" },
    signsTitle: { en: "This might be you if...", hi: "यह तुम्हारे लिए हो सकता है, अगर..." },
    heroTitle: { en: "Did it before you", hi: "तुमसे पहले किसने किया" },
    soCanYou: { en: "So can you!", hi: "तुम भी कर सकते हो!" },
    indiaTitle: { en: "India did it", hi: "भारत ने कर दिखाया" },
    leadsTitle: { en: "Where this leads", hi: "यह रास्ता कहाँ ले जाता है" },
    subjectsLabel: { en: "Focus on", hi: "इन पर ध्यान दो" },
    streamLabel: { en: "After Class 10", hi: "कक्षा 10 के बाद" },
    routeLabel: { en: "Then", hi: "फिर" },

    backToPath: { en: "Back to {title}", hi: "{title} पर वापस" },
    lessonOf: { en: "Lesson {i} of {n} · {title}", hi: "पाठ {i} / {n} · {title}" },
    bigIdea: { en: "The big idea", hi: "मुख्य बात" },
    exampleTitle: { en: "An example from India", hi: "भारत से एक उदाहरण" },
    deeperTitle: { en: "Go deeper", hi: "और गहराई में" },
    deeperYoung: { en: "Go deeper (made for Class 8 to 10, but try it!)", hi: "और गहराई में (कक्षा 8 से 10 के लिए, पर आज़माओ!)" },
    seeTitle: { en: "See it for yourself", hi: "ख़ुद देखो" },
    madeWithClaude: { en: "Made with Claude", hi: "Claude के साथ बना" },
    watchTitle: { en: "Watch and explore", hi: "देखो और खोजो" },
    watchNote: { en: "Free, trusted sites. They open in a new tab.", hi: "मुफ़्त, भरोसेमंद साइटें। ये नए टैब में खुलती हैं।" },
    kindWatch: { en: "Watch", hi: "देखो" },
    kindExplore: { en: "Explore", hi: "खोजो" },
    kindRead: { en: "Read", hi: "पढ़ो" },
    tryTitle: { en: "Try it yourself", hi: "ख़ुद करके देखो" },
    tryNote: { en: "No phone needed.", hi: "फ़ोन की ज़रूरत नहीं।" },
    checkTitle: { en: "Check yourself", hi: "ख़ुद को परखो" },
    checkNote: { en: "Solve these to earn the skill \"{skill}\".", hi: "\"{skill}\" हुनर कमाने के लिए इन्हें हल करो।" },
    enjoyTitle: { en: "Did you enjoy this lesson?", hi: "क्या तुम्हें यह पाठ अच्छा लगा?" },
    enjoyLove: { en: "Loved it", hi: "बहुत पसंद आया" },
    enjoyOk: { en: "It was okay", hi: "ठीक था" },
    enjoyNo: { en: "Not for me", hi: "मेरे लिए नहीं" },
    enjoyLoveReply: { en: "Great! Notice what you love. It's a clue to your future.", hi: "बढ़िया! ध्यान दो कि तुम्हें क्या पसंद है। यह तुम्हारे भविष्य का इशारा है।" },
    enjoyOkReply: { en: "That's fine. Try a lesson from another dream too, and compare.", hi: "कोई बात नहीं। किसी और सपने का पाठ भी आज़माओ, और तुलना करो।" },
    enjoyNoReply: { en: "Good to know! Finding what you don't enjoy helps too. Explore another dream.", hi: "यह जानना भी अच्छा है! जो पसंद नहीं, वह जानना भी काम का है। कोई और सपना देखो।" },
    nextLesson: { en: "Next lesson", hi: "अगला पाठ" },
    toProject: { en: "See the final project", hi: "आख़िरी प्रोजेक्ट देखो" },

    askTitle: { en: "Ask Mitthu!", hi: "मिट्ठू से पूछो!" },
    askLabel: { en: "Your question for Mitthu", hi: "मिट्ठू के लिए तुम्हारा सवाल" },
    askPlaceholder: { en: "Type your question...", hi: "अपना सवाल लिखो..." },
    askButton: { en: "Ask", hi: "पूछो" },
    ideasTitle: { en: "Or try one of these:", hi: "या इनमें से कोई आज़माओ:" },
    previewNote: { en: "Preview: Mitthu answers from the puzzles in our paths for now.", hi: "झलक: अभी मिट्ठू हमारे रास्तों की पहेलियों से ही जवाब देता है।" },
    pipSays: { en: "Mitthu says: ", hi: "मिट्ठू कहता है: " },
    youSaid: { en: "You said: ", hi: "तुमने कहा: " },
    yourGuess: { en: "Your guess", hi: "तुम्हारा अंदाज़ा" },
    notQuite: { en: "Hmm, not quite! {hint} Have another go!", hi: "हम्म, पूरा सही नहीं! {hint} एक बार और कोशिश करो!" },
    winNew: { en: "You figured it out!", hi: "तुमने पता लगा लिया!" },
    winStar: { en: "+1 star", hi: "+1 सितारा" },
    winAgain: { en: "You figured it out again!", hi: "तुमने फिर से पता लगा लिया!" },
    newBadge: { en: "New badge: {name}!", hi: "नया बैज: {name}!" },
    earnedSkill: { en: "You earned the skill \"{skill}\"!", hi: "तुमने \"{skill}\" हुनर कमाया!" },
    share: { en: "Tell a grown-up what you found out!", hi: "किसी बड़े को बताओ कि तुमने क्या सीखा!" },
    askAnother: { en: "Ask another question", hi: "एक और सवाल पूछो" },
    explore: { en: "Explore {name}", hi: "{name} में घूमो" },
    showMe: { en: "Show me!", hi: "मुझे दिखाओ!" },
    closeAnim: { en: "Close", hi: "बंद करो" },
    animNote: { en: "Made with Claude for this preview. Soon Mitthu will make a new animation for any question you ask.", hi: "इस झलक के लिए Claude के साथ बनाया गया। जल्द ही मिट्ठू तुम्हारे किसी भी सवाल के लिए नया एनिमेशन बनाएगा।" },
    privacy: { en: "Let's keep personal things private, even from me! Ask me about the world, science, stories or code instead.", hi: "अपनी निजी बातें निजी ही रखो, मुझसे भी! इसके बजाय दुनिया, विज्ञान, कहानियों या कोड के बारे में पूछो।" },
    greet: { en: "Hello! I love a good puzzle. Try one of these:", hi: "नमस्ते! मुझे पहेलियाँ बहुत पसंद हैं। इनमें से कोई आज़माओ:" },
    unknown: { en: "Ooh, great question! I don't know that one yet. Try one of these:", hi: "वाह, बढ़िया सवाल! यह मैं अभी नहीं जानता। इनमें से कोई आज़माओ:" },

    gEyebrow: { en: "About Breaking the Jargons", hi: "Breaking the Jargons के बारे में" },
    gTitle: { en: "Technology as an equaliser", hi: "तकनीक, सबके लिए बराबरी" },
    gLead: {
      en: "A child in a village should have the same chance to become a scientist, a doctor or an engineer as a child in a big city. Breaking the Jargons gives every child in Class 5 to 10 a clear path towards their dream, in English and Hindi, on any phone.",
      hi: "गाँव के बच्चे को भी वैज्ञानिक, डॉक्टर या इंजीनियर बनने का उतना ही मौक़ा मिलना चाहिए जितना बड़े शहर के बच्चे को। Breaking the Jargons कक्षा 5 से 10 के हर बच्चे को उसके सपने तक का साफ़ रास्ता देता है, अंग्रेज़ी और हिंदी में, किसी भी फ़ोन पर।"
    },
    g1Title: { en: "Paths, not just lessons", hi: "सिर्फ़ पाठ नहीं, रास्ते" },
    g1Text: {
      en: "Each dream is a real course: lessons with a big idea, an example from India, a deeper layer, an interactive animation, links to trusted free videos and simulations, a hands-on activity, puzzles and a final project. Every path shows an Indian who did it first.",
      hi: "हर सपना एक असली कोर्स है: पाठ जिनमें मुख्य बात, भारत से उदाहरण, गहराई वाला हिस्सा, इंटरैक्टिव एनिमेशन, भरोसेमंद मुफ़्त वीडियो और सिमुलेशन के लिंक, हाथ से करने वाली गतिविधि, पहेलियाँ और आख़िरी प्रोजेक्ट है। हर रास्ता किसी ऐसे भारतीय को दिखाता है जिसने यह पहले कर दिखाया।"
    },
    g2Title: { en: "Made for each class, and for discovery", hi: "हर कक्षा के लिए, और ख़ुद को खोजने के लिए" },
    g2Text: {
      en: "Class 5 to 7 and Class 8 to 10 get different puzzles and projects, and older students get a 'go deeper' section. Every lesson ends with 'Did you enjoy this?', so children notice what they love.",
      hi: "कक्षा 5 से 7 और कक्षा 8 से 10 को अलग पहेलियाँ और प्रोजेक्ट मिलते हैं, और बड़े छात्रों को 'और गहराई में' वाला हिस्सा। हर पाठ 'क्या तुम्हें यह अच्छा लगा?' पर ख़त्म होता है, ताकि बच्चे पहचानें कि उन्हें क्या पसंद है।"
    },
    g3Title: { en: "Thinking first", hi: "पहले सोचना" },
    g3Text: {
      en: "Mitthu asks for a guess before explaining and gives hints when a child is stuck. It never hands over homework answers.",
      hi: "मिट्ठू समझाने से पहले अंदाज़ा पूछता है और अटकने पर इशारे देता है। वह होमवर्क के जवाब कभी नहीं देता।"
    },
    g4Title: { en: "Works anywhere", hi: "हर जगह चलता है" },
    g4Text: {
      en: "Runs in a phone's web browser, with no sign-up and no app. English and Hindi today, more Indian languages next:",
      hi: "फ़ोन के ब्राउज़र में चलता है, न साइन-अप, न ऐप। आज अंग्रेज़ी और हिंदी, आगे और भारतीय भाषाएँ:"
    },
    g5Title: { en: "Safe by design", hi: "सुरक्षित" },
    g5Text: {
      en: "Short answers, no personal information collected, and Mitthu stays on the subject. Nothing is saved between visits yet.",
      hi: "छोटे जवाब, कोई निजी जानकारी नहीं ली जाती, और मिट्ठू विषय पर ही रहता है। अभी एक बार से दूसरी बार तक कुछ भी सेव नहीं होता।"
    },
    cEyebrow: { en: "Built with Claude", hi: "Claude से बना" },
    cTitle: { en: "Mitthu runs on Claude, by Anthropic", hi: "मिट्ठू Anthropic के Claude पर चलता है" },
    cLead: {
      en: "Mitthu, the guide on every path, is built on Claude, an AI model made by Anthropic. Claude is what lets Mitthu understand a child's own words, teach by asking, and act inside our learning worlds.",
      hi: "हर रास्ते का साथी मिट्ठू, Anthropic के बनाए AI मॉडल Claude पर बना है। Claude की वजह से ही मिट्ठू बच्चे के अपने शब्द समझता है, सवाल पूछकर सिखाता है, और हमारी सीखने की दुनियाओं के अंदर काम करता है।"
    },
    cNote: {
      en: "Today Mitthu runs in preview: 12 dream paths, 36 lessons, 43 puzzles and 13 interactive animations, all made with Claude's help. Live Claude answers are the next step. The Claude API key will stay on our server, never in the browser.",
      hi: "आज मिट्ठू झलक के रूप में चलता है: 12 सपनों के रास्ते, 36 पाठ, 43 पहेलियाँ और 13 इंटरैक्टिव एनिमेशन, सब Claude की मदद से बने। लाइव Claude जवाब अगला कदम हैं। Claude की API चाबी हमारे सर्वर पर रहेगी, ब्राउज़र में कभी नहीं।"
    },
    contactTitle: { en: "Get in touch", hi: "हमसे संपर्क करें" },
    contactText: {
      en: "Questions, ideas, or want to bring this to your school or village? Write to us:",
      hi: "कोई सवाल या सुझाव है, या इसे अपने स्कूल या गाँव तक लाना चाहते हैं? हमें लिखें:"
    },
    footerPrivacy: { en: "Privacy", hi: "गोपनीयता" },
    problemTitle: { en: "The problem", hi: "समस्या" },
    problemText: {
      en: "Many children in India, especially in villages and small towns, don't have a teacher nearby who can answer their questions. Textbooks are full of jargon, often in a language they are still learning. And many children never hear what a scientist, a doctor or an engineer actually does, so they never imagine becoming one.",
      hi: "भारत में कई बच्चों के पास, ख़ासकर गाँवों और छोटे शहरों में, ऐसा शिक्षक नहीं होता जो उनके सवालों के जवाब दे सके। किताबें कठिन शब्दों से भरी होती हैं, अक्सर ऐसी भाषा में जो वे अभी सीख ही रहे हैं। और कई बच्चों ने कभी सुना ही नहीं कि वैज्ञानिक, डॉक्टर या इंजीनियर असल में क्या करते हैं, इसलिए वे ऐसा बनने का सपना भी नहीं देखते।"
    },
    builtTitle: { en: "What we built", hi: "हमने क्या बनाया" },
    flowTitle: { en: "How a question becomes a lesson", hi: "एक सवाल पाठ कैसे बनता है" },
    flow1Title: { en: "A child asks", hi: "बच्चा पूछता है" },
    flow1Text: { en: "In Hindi, English or a mix of both, in their own words.", hi: "हिंदी, अंग्रेज़ी या दोनों के मेल में, अपने शब्दों में।" },
    flow2Title: { en: "Claude reads the context", hi: "Claude संदर्भ समझता है" },
    flow2Text: { en: "Our server sends Claude the question with Mitthu's instructions: the child's class, language, chosen dream and the safety rules.", hi: "हमारा सर्वर सवाल को मिट्ठू के निर्देशों के साथ Claude को भेजता है: बच्चे की कक्षा, भाषा, चुना हुआ सपना और सुरक्षा के नियम।" },
    flow3Title: { en: "Mitthu asks back", hi: "मिट्ठू पलटकर पूछता है" },
    flow3Text: { en: "Claude replies with a question first, and hints when the child is stuck, never a ready-made answer.", hi: "Claude पहले एक सवाल पूछता है, और बच्चा अटके तो इशारे देता है, कभी बना-बनाया जवाब नहीं।" },
    flow4Title: { en: "The world responds", hi: "दुनिया जवाब देती है" },
    flow4Text: { en: "Claude calls tools that act inside a learning world, like flying the plane to Antarctica, or writes a small interactive animation the child can play with.", hi: "Claude ऐसे टूल चलाता है जो सीखने की दुनिया के अंदर काम करते हैं, जैसे प्लेन को अंटार्कटिका ले जाना, या एक छोटा इंटरैक्टिव एनिमेशन बनाता है जिससे बच्चा खेल सके।" },
    flow5Title: { en: "Progress on the path", hi: "रास्ते पर आगे बढ़ना" },
    flow5Text: { en: "The child earns a star and a skill on their dream path.", hi: "बच्चा अपने सपने के रास्ते पर सितारा और हुनर कमाता है।" },
    exampleLabel: { en: "Example", hi: "उदाहरण" },
    exKid: { en: "Child, Class 3: \"Take me somewhere really cold!\"", hi: "बच्चा, कक्षा 3: \"मुझे किसी बहुत ठंडी जगह ले चलो!\"" },
    exMitthu: { en: "Mitthu: \"Brrr! Where do you think it's coldest: the Sahara, Antarctica or the top of Mount Everest?\"", hi: "मिट्ठू: \"ब्र्र्र! तुम्हें क्या लगता है, सबसे ठंडा कहाँ है: सहारा, अंटार्कटिका या एवरेस्ट की चोटी?\"" },
    exAfter: { en: "The plane in Earth Explorer flies to Antarctica while Mitthu explains why it is so cold.", hi: "Earth Explorer में प्लेन अंटार्कटिका की ओर उड़ता है, और मिट्ठू समझाता है कि वहाँ इतनी ठंड क्यों है।" },
    whyClaudeTitle: { en: "Why Claude", hi: "Claude ही क्यों" },
    whyClaudeText: {
      en: "Claude follows detailed teaching and safety instructions reliably, writes clearly in both Hindi and English, uses tools, and can write working code for an animation on the spot. So Mitthu can show children the answer instead of only telling them.",
      hi: "Claude पढ़ाने और सुरक्षा के विस्तृत निर्देशों का भरोसे से पालन करता है, हिंदी और अंग्रेज़ी दोनों में साफ़ लिखता है, टूल्स चलाता है, और तुरंत किसी एनिमेशन का चलता हुआ कोड लिख सकता है। इसलिए मिट्ठू बच्चों को जवाब सिर्फ़ बताता नहीं, दिखाता भी है।"
    },
    statusTitle: { en: "Where we are", hi: "हम कहाँ हैं" },
    liveTitle: { en: "Live today", hi: "आज उपलब्ध" },
    live1: { en: "12 dream paths for Class 5 to 10, from space scientist to farmer, musician and sportsperson", hi: "कक्षा 5 से 10 के लिए 12 सपनों के रास्ते, अंतरिक्ष वैज्ञानिक से लेकर किसान, संगीतकार और खिलाड़ी तक" },
    live2: { en: "36 lessons and 43 puzzles in English and Hindi, different for Class 5 to 7 and Class 8 to 10", hi: "अंग्रेज़ी और हिंदी में 36 पाठ और 43 पहेलियाँ, कक्षा 5 से 7 और कक्षा 8 से 10 के लिए अलग" },
    live3: { en: "13 interactive animations made with Claude, and two learning worlds: Earth Explorer and Story Code Quest", hi: "Claude के साथ बने 13 इंटरैक्टिव एनिमेशन, और दो सीखने की दुनियाएँ: Earth Explorer और Story Code Quest" },
    live4: { en: "Built first for the founder's son, our first tester", hi: "सबसे पहले संस्थापक के बेटे के लिए बनाया, जो हमारा पहला टेस्टर है" },
    nextTitle: { en: "Next", hi: "आगे" },
    next1: { en: "Live Claude answers for Mitthu, for any question", hi: "मिट्ठू के लिए लाइव Claude जवाब, किसी भी सवाल पर" },
    next2: { en: "Animations on demand: a child asks to see something, and Claude builds an interactive animation for it on the spot, run safely in a sandbox", hi: "माँगने पर एनिमेशन: बच्चा कुछ देखना चाहे, और Claude उसी पल उसके लिए एक इंटरैक्टिव एनिमेशन बनाए, जो सुरक्षित सैंडबॉक्स में चले" },
    next3: { en: "Mitthu's tools inside Earth Explorer, and coding levels built from any story", hi: "Earth Explorer के अंदर मिट्ठू के टूल, और किसी भी कहानी से बने कोडिंग लेवल" },
    next4: { en: "Science Lab, English Club and more Indian languages", hi: "विज्ञान प्रयोगशाला, इंग्लिश क्लब और अधिक भारतीय भाषाएँ" },
    safetyTitle: { en: "Safety and privacy", hi: "सुरक्षा और गोपनीयता" },
    safetyText: { en: "No sign-up and no personal information. Mitthu gives short answers, stays on the lesson, and asks children not to share personal details.", hi: "न साइन-अप, न कोई निजी जानकारी। मिट्ठू छोटे जवाब देता है, पाठ पर ही रहता है, और बच्चों से निजी बातें न बताने को कहता है।" },
    privacyLink: { en: "Read our privacy page", hi: "हमारा गोपनीयता पेज पढ़ें" },
    privacyEyebrow: { en: "Privacy", hi: "गोपनीयता" },
    privacyTitle: { en: "Your child's privacy", hi: "आपके बच्चे की गोपनीयता" },
    privacyLead: { en: "Breaking the Jargons is made for children, so we collect as little as possible. Here is exactly what happens.", hi: "Breaking the Jargons बच्चों के लिए बना है, इसलिए हम कम से कम जानकारी लेते हैं। यहाँ ठीक-ठीक बताया गया है कि क्या होता है।" },
    pv1T: { en: "We don't collect personal information", hi: "हम निजी जानकारी नहीं लेते" },
    pv1: { en: "There is no sign-up. We never ask for a name, email, phone number, school or location.", hi: "कोई साइन-अप नहीं है। हम कभी नाम, ईमेल, फ़ोन नंबर, स्कूल या जगह नहीं पूछते।" },
    pv2T: { en: "Nothing is saved between visits", hi: "एक बार से दूसरी बार तक कुछ सेव नहीं होता" },
    pv2: { en: "While the page is open, the chosen language, class, dream path and solved puzzles are kept in memory only. They are not sent to us. Closing or reloading the page starts fresh.", hi: "पेज खुला रहने तक चुनी हुई भाषा, कक्षा, सपने का रास्ता और हल की गई पहेलियाँ सिर्फ़ मेमोरी में रहती हैं। ये हमें नहीं भेजी जातीं। पेज बंद करने या दोबारा खोलने पर सब नए सिरे से शुरू होता है।" },
    pv3T: { en: "No ads, no tracking", hi: "न विज्ञापन, न ट्रैकिंग" },
    pv3: { en: "We don't use advertising, analytics or tracking cookies. The site loads its fonts from Google Fonts, which, like any website, receives your device's internet address when the fonts load. Our host, GitHub Pages, also keeps standard server logs.", hi: "हम विज्ञापन, एनालिटिक्स या ट्रैकिंग कुकी का इस्तेमाल नहीं करते। साइट अपने फ़ॉन्ट Google Fonts से लोड करती है, जिसे किसी भी वेबसाइट की तरह फ़ॉन्ट लोड होते समय आपके डिवाइस का इंटरनेट पता मिलता है। हमारा होस्ट, GitHub Pages, भी सामान्य सर्वर लॉग रखता है।" },
    pv4T: { en: "Questions typed today", hi: "आज लिखे गए सवाल" },
    pv4: { en: "In the current preview, questions typed to Mitthu are matched to puzzles inside the browser and are not sent anywhere.", hi: "अभी की झलक में, मिट्ठू से पूछे गए सवाल ब्राउज़र के अंदर ही पहेलियों से मिलाए जाते हैं और कहीं नहीं भेजे जाते।" },
    pv5T: { en: "When Mitthu goes live with Claude", hi: "जब मिट्ठू Claude के साथ लाइव होगा" },
    pv5: { en: "Questions will be sent through our server to Claude, made by Anthropic, to get Mitthu's answer. We will not send names or personal details, and Mitthu is told never to ask for them. We will update this page before this starts.", hi: "मिट्ठू का जवाब पाने के लिए सवाल हमारे सर्वर से होकर Anthropic के बनाए Claude को भेजे जाएँगे। हम नाम या निजी जानकारी नहीं भेजेंगे, और मिट्ठू को उन्हें कभी न पूछने का निर्देश है। यह शुरू होने से पहले हम यह पेज अपडेट करेंगे।" },
    pv6T: { en: "Questions about privacy", hi: "गोपनीयता के बारे में सवाल" },
    pv6: { en: "Write to us any time:", hi: "हमें कभी भी लिखें:" },
    privacyUpdated: { en: "Last updated: 8 October 2026", hi: "आख़िरी बदलाव: 8 अक्टूबर 2026" },
    footerLink: { en: "About us", hi: "हमारे बारे में" }
  };

  // No memory between visits for now: every visit starts fresh, and anything an older version
  // saved in this browser is cleared. Progress lives in memory while the page is open.
  try {
    ["btj-lang", "btj-grade", "btj-solved", "btj-path", "btj-interests"].forEach(function (key) {
      window.localStorage.removeItem(key);
    });
  } catch (e) {
    // Storage can be blocked (private windows, strict settings). Then there is nothing to clear.
  }

  var worldById = {};
  data.worlds.forEach(function (w) { worldById[w.id] = w; });
  var puzzleById = {};
  data.puzzles.forEach(function (p) {
    p.level = p.level || "young";
    puzzleById[p.id] = p;
  });
  var pathById = {};
  data.paths.forEach(function (p) { pathById[p.id] = p; });
  var animations = (data.animations && data.animations.list) || {};

  var state = {
    lang: "en",
    grade: 6,
    gradeChosen: false, // Asked when the child first opens a dream.
    solved: [],
    path: null,
    module: null,
    feelings: {} // "pathId/moduleId" -> "love" | "ok" | "no"
  };

  var el = {
    langToggle: document.getElementById("lang-toggle"),
    gradeButtons: document.getElementById("grade-buttons"),
    classChip: document.getElementById("class-chip"),
    starCount: document.getElementById("star-count"),
    discover: document.getElementById("discover"),
    pathCards: document.getElementById("path-cards"),
    pathPage: document.getElementById("path-panel"),
    learnPage: document.getElementById("learn-page"),
    askForm: document.getElementById("ask-form"),
    askInput: document.getElementById("ask-input"),
    ideas: document.getElementById("ideas"),
    starters: document.getElementById("starters"),
    askConvo: document.getElementById("convo"),
    languageList: document.getElementById("language-list"),
    confetti: document.getElementById("confetti")
  };

  // ---- Helpers ----

  // t() picks the current language from a { en, hi } object; plain strings pass through.
  function t(value) {
    if (typeof value === "string") return value;
    return value[state.lang] || value.en;
  }

  function ui(key, vars) {
    var text = t(UI[key]);
    Object.keys(vars || {}).forEach(function (k) { text = text.split("{" + k + "}").join(vars[k]); });
    return text;
  }

  function make(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  // A drawing from the sprite in index.html, e.g. icon("i-star").
  function icon(id, className) {
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("aria-hidden", "true");
    if (className) svg.setAttribute("class", className);
    var use = document.createElementNS(SVG_NS, "use");
    use.setAttribute("href", "#" + id);
    svg.appendChild(use);
    return svg;
  }

  function section(className, titleText) {
    var box = make("section", className);
    if (titleText) box.appendChild(make("h2", "", titleText));
    return box;
  }

  function isSolved(id) {
    return state.solved.indexOf(id) !== -1;
  }

  function level() {
    return LEVELS.filter(function (l) { return state.grade >= l.from && state.grade <= l.to; })[0];
  }

  function modulePuzzles(mod) {
    return mod.puzzles[level().id] || [];
  }

  function moduleDone(mod) {
    var ids = modulePuzzles(mod);
    return ids.length > 0 && ids.every(isSolved);
  }

  function lovedCount(path) {
    return path.modules.filter(function (m) { return state.feelings[path.id + "/" + m.id] === "love"; }).length;
  }

  // ---- Animations: at most one running at a time ----

  var stopAnimation = null;

  function closeAnimation() {
    if (stopAnimation) stopAnimation();
    stopAnimation = null;
  }

  function animationPanel(anim, withClose) {
    var panel = make("div", "anim-panel");
    var head = make("div", "anim-head");
    var title = make("div");
    title.appendChild(make("span", "claude-tag", ui("madeWithClaude")));
    title.appendChild(make("h3", "", t(anim.title)));
    head.appendChild(title);
    if (withClose) {
      var close = make("button", "anim-close", ui("closeAnim"));
      close.type = "button";
      close.addEventListener("click", function () { closeAnimation(); panel.remove(); });
      head.appendChild(close);
    }
    panel.appendChild(head);
    panel.appendChild(make("p", "anim-hint", t(anim.hint)));
    var stage = make("div", "anim-stage");
    panel.appendChild(stage);
    panel.appendChild(make("p", "anim-note", ui("animNote")));
    return { panel: panel, stage: stage };
  }

  function mountAnimation(anim, stage) {
    closeAnimation();
    stopAnimation = anim.mount(stage, t);
  }

  // ---- Screens: one at a time, driven by the URL hash ----

  function currentView() {
    var name = window.location.hash.replace("#", "");
    if ((name === "path" || name === "learn") && !state.path) return "home";
    if ((name === "path" || name === "learn") && !state.gradeChosen) return "start";
    if (name === "learn" && state.module === null) return "path";
    return VIEWS.indexOf(name) !== -1 ? name : "home";
  }

  function render() {
    var view = currentView();
    closeAnimation();
    VIEWS.forEach(function (name) {
      document.getElementById("view-" + name).hidden = name !== view;
    });
    var tabFor = view === "learn" ? "path" : view;
    document.querySelectorAll(".tabs a").forEach(function (tab) {
      if (tab.getAttribute("data-tab") === tabFor) tab.setAttribute("aria-current", "page");
      else tab.removeAttribute("aria-current");
    });
    document.body.setAttribute("data-view", view);
    if (view === "path") renderPathPage();
    if (view === "learn") renderLearnPage();
    if (view === "ask") useConvo(el.askConvo, "ask");
    window.scrollTo(0, 0);
  }

  function go(view) {
    if (window.location.hash === "#" + view) render();
    else window.location.hash = view;
  }

  window.addEventListener("hashchange", render);

  // ---- Language ----

  function applyLanguage() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = ui(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      node.placeholder = ui(node.getAttribute("data-i18n-placeholder"));
    });
    el.langToggle.textContent = state.lang === "en" ? "हिंदी" : "English";
    el.langToggle.lang = state.lang === "en" ? "hi" : "en";
    renderGrade();
    renderHome();
    renderStarters();
    var view = currentView();
    if (view === "path" || view === "learn") render();
    else resetConvo();
  }

  el.langToggle.addEventListener("click", function () {
    state.lang = state.lang === "en" ? "hi" : "en";
    applyLanguage();
  });

  // ---- Class picker (Class 5 to 10) ----

  for (var g = 5; g <= 10; g++) {
    var gradeBtn = make("button", "", String(g));
    gradeBtn.type = "button";
    gradeBtn.value = String(g);
    gradeBtn.setAttribute("role", "radio");
    el.gradeButtons.appendChild(gradeBtn);
  }

  function renderGrade() {
    el.classChip.textContent = state.gradeChosen ? ui("classChip", { n: state.grade }) : ui("pickClass");
    el.gradeButtons.querySelectorAll("button").forEach(function (btn) {
      btn.setAttribute("aria-label", ui("classChip", { n: btn.value }));
      btn.setAttribute("aria-checked", String(state.gradeChosen && Number(btn.value) === state.grade));
    });
  }

  el.gradeButtons.addEventListener("click", function (event) {
    var btn = event.target.closest("button");
    if (!btn) return;
    state.grade = Number(btn.value);
    state.gradeChosen = true;
    renderGrade();
    renderHome();
    renderStarters();
    go(state.path ? "path" : "home");
  });

  // ---- Stars ----

  function badgeFor(count) {
    var current = BADGES[0];
    BADGES.forEach(function (b) { if (count >= b.at) current = b; });
    return current;
  }

  function renderStars() {
    el.starCount.textContent = String(state.solved.length);
  }

  // ---- Home: dream cards and what the child is discovering ----

  function pathTile(path) {
    var tile = make("span", "path-tile");
    tile.style.setProperty("--tint", path.tint);
    tile.appendChild(icon("p-" + path.id));
    return tile;
  }

  function openPath(path) {
    state.path = path.id;
    state.module = null;
    go(state.gradeChosen ? "path" : "start");
  }

  function renderHome() {
    el.pathCards.innerHTML = "";
    data.paths.forEach(function (path) {
      var done = path.modules.filter(moduleDone).length;
      var card = make("button", "path-card");
      card.type = "button";
      card.appendChild(pathTile(path));
      card.appendChild(make("span", "path-title", t(path.title)));
      var info = make("span", "path-progress");
      if (state.gradeChosen && done) {
        info.appendChild(icon("i-star"));
        info.appendChild(document.createTextNode(ui("cardProgress", { d: done, m: path.modules.length })));
      } else {
        info.textContent = ui("cardInfo", { m: path.modules.length });
      }
      card.appendChild(info);
      var loved = lovedCount(path);
      if (loved) card.appendChild(make("span", "loved-tag", "♥ " + ui("loved", { n: loved })));
      card.addEventListener("click", function () { openPath(path); });
      el.pathCards.appendChild(card);
    });

    // The paths whose lessons the child loved, most loved first.
    var lovedPaths = data.paths.filter(lovedCount).sort(function (a, b) { return lovedCount(b) - lovedCount(a); });
    el.discover.hidden = lovedPaths.length === 0;
    el.discover.innerHTML = "";
    if (lovedPaths.length) {
      el.discover.appendChild(make("h2", "", ui("discoverTitle")));
      el.discover.appendChild(make("p", "", ui("discoverText")));
      var chips = make("div", "discover-chips");
      lovedPaths.forEach(function (path) {
        var chip = make("button", "discover-chip");
        chip.type = "button";
        chip.appendChild(pathTile(path));
        chip.appendChild(make("span", "", t(path.title) + " · ♥ " + lovedCount(path)));
        chip.addEventListener("click", function () { openPath(path); });
        chips.appendChild(chip);
      });
      el.discover.appendChild(chips);
    }
  }

  // ---- A dream's own page ----

  function openModule(index) {
    state.module = index;
    go("learn");
  }

  function renderPathPage() {
    var path = pathById[state.path];
    var page = el.pathPage;
    page.innerHTML = "";
    if (!path) return;
    var lvl = level();

    var back = make("a", "back-link");
    back.href = "#home";
    back.appendChild(icon("i-back"));
    back.appendChild(document.createTextNode(ui("backToDreams")));
    page.appendChild(back);

    var top = make("div", "path-top");
    top.style.setProperty("--tint", path.tint);
    var head = make("div", "path-head");
    head.appendChild(pathTile(path));
    var headText = make("div");
    headText.appendChild(make("p", "kicker", ui("myDream")));
    headText.appendChild(make("h1", "", t(path.title)));
    head.appendChild(headText);
    top.appendChild(head);
    top.appendChild(make("span", "level-chip", ui("levelLine", { level: t(lvl.name), n: state.grade })));
    top.appendChild(make("p", "dream", t(path.dream)));
    page.appendChild(top);

    // Progress across the dream
    var done = path.modules.filter(moduleDone).length;
    var progressRow = make("div", "progress-row");
    var progressText = make("p", "progress-text");
    progressText.appendChild(icon("i-star"));
    progressText.appendChild(document.createTextNode(ui("skillsOf", { d: done, n: path.modules.length })));
    progressRow.appendChild(progressText);
    var bar = make("div", "progress");
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", String(path.modules.length));
    bar.setAttribute("aria-valuenow", String(done));
    var fill = make("span", "progress-fill");
    fill.style.width = Math.round((done / path.modules.length) * 100) + "%";
    bar.appendChild(fill);
    progressRow.appendChild(bar);
    page.appendChild(progressRow);

    // The journey: lessons, then the project
    var journey = section("journey", ui("journeyTitle"));
    var trail = make("ol", "trail");
    var nextMarked = false;
    path.modules.forEach(function (mod, index) {
      var isDone = moduleDone(mod);
      var status = isDone ? "done" : !nextMarked ? "next" : "later";
      if (status === "next") nextMarked = true;
      var stop = make("li", "stop is-" + status);
      var dot = make("span", "stop-dot");
      dot.setAttribute("aria-hidden", "true");
      if (isDone) dot.appendChild(icon("i-check"));
      else dot.textContent = String(index + 1);
      stop.appendChild(dot);

      var body = make("div", "stop-body");
      if (status === "next") body.appendChild(make("span", "next-tag", ui("doNext")));
      body.appendChild(make("p", "stop-kicker", ui("lessonN", { n: index + 1 })));
      body.appendChild(make("p", "stop-title", t(mod.title)));
      body.appendChild(make("p", "stop-skill", isDone ? ui("earned", { skill: t(mod.skill) }) : ui("earn", { skill: t(mod.skill) })));
      var open = make("button", "btn" + (status === "next" ? "" : " btn-ghost") + " btn-small", isDone ? ui("review") : ui("start"));
      open.type = "button";
      open.addEventListener("click", function () { openModule(index); });
      body.appendChild(open);
      stop.appendChild(body);
      trail.appendChild(stop);
    });
    var projectStop = make("li", "stop is-project");
    projectStop.id = "project";
    var projectDot = make("span", "stop-dot");
    projectDot.setAttribute("aria-hidden", "true");
    projectDot.appendChild(icon("i-star"));
    projectStop.appendChild(projectDot);
    var projectBody = make("div", "stop-body");
    projectBody.appendChild(make("p", "stop-kicker", ui("projectLabel")));
    projectBody.appendChild(make("p", "stop-title", t(path.project.title)));
    projectBody.appendChild(make("p", "project-text", t(path.project[lvl.id])));
    projectStop.appendChild(projectBody);
    trail.appendChild(projectStop);
    journey.appendChild(trail);
    page.appendChild(journey);

    // What the work is like, and whether it might suit you
    var about = make("div", "path-about");
    var job = section("info-box", ui("jobTitle"));
    job.appendChild(make("p", "", t(path.job)));
    job.appendChild(make("h3", "", ui("dayTitle")));
    var dayList = make("ul", "tick-list");
    path.day.forEach(function (item) { dayList.appendChild(make("li", "", t(item))); });
    job.appendChild(dayList);
    about.appendChild(job);
    var signs = section("info-box", ui("signsTitle"));
    var signList = make("ul", "tick-list");
    path.signs.forEach(function (item) { signList.appendChild(make("li", "", t(item))); });
    signs.appendChild(signList);
    about.appendChild(signs);
    page.appendChild(about);

    var hero = make("div", "role-model");
    hero.appendChild(icon("i-bulb"));
    var heroText = make("div");
    heroText.appendChild(make("p", "note-label", ui("heroTitle")));
    heroText.appendChild(make("p", "", t(path.hero)));
    heroText.appendChild(make("p", "so-can-you", ui("soCanYou")));
    hero.appendChild(heroText);
    page.appendChild(hero);

    var india = make("div", "note-card india");
    var indiaTitle = make("p", "note-title");
    indiaTitle.appendChild(icon("i-flag"));
    indiaTitle.appendChild(document.createTextNode(ui("indiaTitle")));
    india.appendChild(indiaTitle);
    india.appendChild(make("p", "", t(path.india)));
    page.appendChild(india);

    var leads = section("info-box leads", ui("leadsTitle"));
    var dl = make("dl", "leads-list");
    [["subjectsLabel", path.next.subjects], ["streamLabel", path.next.stream], ["routeLabel", path.next.route]].forEach(function (row) {
      dl.appendChild(make("dt", "", ui(row[0])));
      dl.appendChild(make("dd", "", t(row[1])));
    });
    leads.appendChild(dl);
    page.appendChild(leads);
  }

  // ---- A lesson (module) page ----

  function renderLearnPage() {
    var path = pathById[state.path];
    var page = el.learnPage;
    page.innerHTML = "";
    var mod = path && path.modules[state.module];
    if (!mod) return;
    var lvl = level();
    var key = path.id + "/" + mod.id;

    var back = make("a", "back-link");
    back.href = "#path";
    back.appendChild(icon("i-back"));
    back.appendChild(document.createTextNode(ui("backToPath", { title: t(path.title) })));
    page.appendChild(back);

    var top = make("div", "path-top learn-top");
    top.style.setProperty("--tint", path.tint);
    top.appendChild(make("p", "kicker", ui("lessonOf", { i: state.module + 1, n: path.modules.length, title: t(path.title) })));
    top.appendChild(make("h1", "", t(mod.title)));
    top.appendChild(make("span", "level-chip", moduleDone(mod) ? ui("earned", { skill: t(mod.skill) }) : ui("earn", { skill: t(mod.skill) })));
    page.appendChild(top);

    var big = section("lesson-block big-idea", ui("bigIdea"));
    big.appendChild(make("p", "", t(mod.big)));
    page.appendChild(big);

    var example = section("lesson-block example-block", ui("exampleTitle"));
    example.appendChild(make("p", "", t(mod.example)));
    page.appendChild(example);

    // Go deeper: open for Class 8-10, folded for Class 5-7.
    if (lvl.id === "future") {
      var deeper = section("lesson-block deeper", ui("deeperTitle"));
      deeper.appendChild(make("p", "", t(mod.deeper)));
      page.appendChild(deeper);
    } else {
      var details = make("details", "lesson-block deeper");
      details.appendChild(make("summary", "", ui("deeperYoung")));
      details.appendChild(make("p", "", t(mod.deeper)));
      page.appendChild(details);
    }

    var anim = mod.animation && animations[mod.animation];
    if (anim) {
      var see = section("lesson-block see", ui("seeTitle"));
      var built = animationPanel(anim, false);
      see.appendChild(built.panel);
      page.appendChild(see);
      mountAnimation(anim, built.stage);
    }

    if (mod.links && mod.links.length) {
      var watch = section("lesson-block watch", ui("watchTitle"));
      var list = make("ul", "link-list");
      mod.links.forEach(function (link) {
        var li = make("li");
        var a = make("a", "resource");
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener";
        a.appendChild(make("span", "resource-kind kind-" + link.kind, ui(link.kind === "watch" ? "kindWatch" : link.kind === "read" ? "kindRead" : "kindExplore")));
        a.appendChild(make("span", "", t(link.label)));
        li.appendChild(a);
        list.appendChild(li);
      });
      watch.appendChild(list);
      watch.appendChild(make("p", "small-note", ui("watchNote")));
      page.appendChild(watch);
    }

    var tryIt = make("div", "note-card at-home");
    var tryTitle = make("p", "note-title");
    tryTitle.appendChild(icon("i-house"));
    tryTitle.appendChild(document.createTextNode(ui("tryTitle")));
    tryIt.appendChild(tryTitle);
    tryIt.appendChild(make("p", "", t(mod.tryIt)));
    tryIt.appendChild(make("p", "note-small", ui("tryNote")));
    page.appendChild(tryIt);

    var check = section("lesson-block check", ui("checkTitle"));
    check.appendChild(make("p", "small-note", ui("checkNote", { skill: t(mod.skill) })));
    var chips = make("div", "starters");
    var convoBox = make("div", "convo");
    convoBox.setAttribute("aria-live", "polite");
    modulePuzzles(mod).forEach(function (id) {
      chips.appendChild(starterButton(puzzleById[id], function (puzzle) {
        useConvo(convoBox, "module");
        resetConvo();
        say("kid", t(puzzle.starter));
        startPuzzle(puzzle);
      }));
    });
    check.appendChild(chips);
    check.appendChild(convoBox);
    page.appendChild(check);

    var enjoy = section("lesson-block enjoy", ui("enjoyTitle"));
    var enjoyRow = make("div", "enjoy-row");
    var reply = make("p", "enjoy-reply");
    reply.setAttribute("aria-live", "polite");
    [["love", "enjoyLove"], ["ok", "enjoyOk"], ["no", "enjoyNo"]].forEach(function (pair) {
      var b = make("button", "enjoy-btn enjoy-" + pair[0], ui(pair[1]));
      b.type = "button";
      b.setAttribute("aria-pressed", String(state.feelings[key] === pair[0]));
      b.addEventListener("click", function () {
        state.feelings[key] = pair[0];
        enjoyRow.querySelectorAll("button").forEach(function (other) { other.setAttribute("aria-pressed", String(other === b)); });
        reply.textContent = ui(pair[0] === "love" ? "enjoyLoveReply" : pair[0] === "ok" ? "enjoyOkReply" : "enjoyNoReply");
        renderHome();
      });
      enjoyRow.appendChild(b);
    });
    enjoy.appendChild(enjoyRow);
    if (state.feelings[key]) reply.textContent = ui(state.feelings[key] === "love" ? "enjoyLoveReply" : state.feelings[key] === "ok" ? "enjoyOkReply" : "enjoyNoReply");
    enjoy.appendChild(reply);
    page.appendChild(enjoy);

    var nav = make("div", "learn-nav");
    var isLast = state.module === path.modules.length - 1;
    var next = make("button", "btn", isLast ? ui("toProject") : ui("nextLesson"));
    next.type = "button";
    next.addEventListener("click", function () {
      if (isLast) {
        state.module = null;
        go("path");
        var project = document.getElementById("project");
        if (project) project.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        openModule(state.module + 1);
      }
    });
    nav.appendChild(next);
    page.appendChild(nav);
  }

  // ---- Puzzle ideas for Ask Mitthu ----

  function suggestedPuzzles(limit) {
    var lvl = level().id;
    var pool = data.puzzles.filter(function (p) { return p.level === lvl; });
    var path = pathById[state.path];
    if (path) {
      // Puzzles from the child's own dream come first.
      var mine = [];
      path.modules.forEach(function (m) { mine = mine.concat(modulePuzzles(m)); });
      pool.sort(function (a, b) { return (mine.indexOf(b.id) !== -1) - (mine.indexOf(a.id) !== -1); });
    }
    // Unsolved first, so there's always a new star to chase. (Array sort is stable.)
    pool.sort(function (a, b) { return isSolved(a.id) - isSolved(b.id); });
    return pool.slice(0, limit);
  }

  function starterButton(puzzle, onPick) {
    var solved = isSolved(puzzle.id);
    var btn = make("button", "chip" + (solved ? " solved" : ""));
    btn.type = "button";
    var mark = make("span", "chip-mark", solved ? undefined : "?");
    if (solved) mark.appendChild(icon("i-star"));
    btn.appendChild(mark);
    btn.appendChild(make("span", "", t(puzzle.starter)));
    btn.addEventListener("click", function () { onPick(puzzle); });
    return btn;
  }

  function askPuzzle(puzzle) {
    if (currentView() !== "ask") go("ask");
    useConvo(el.askConvo, "ask");
    resetConvo();
    say("kid", t(puzzle.starter));
    startPuzzle(puzzle);
  }

  function renderStarters() {
    el.starters.innerHTML = "";
    suggestedPuzzles(4).forEach(function (p) { el.starters.appendChild(starterButton(p, askPuzzle)); });
  }

  // ---- Conversation with Mitthu (in Ask, or inside a lesson) ----

  var convo = { el: el.askConvo, context: "ask" };

  function useConvo(container, context) {
    convo.el = container;
    convo.context = context;
  }

  function say(who, text) {
    var msg = make("div", "msg msg-" + who);
    if (who === "pip") msg.appendChild(icon("mitthu-face", "avatar"));
    var body = make("p", "", "");
    body.appendChild(make("span", "sr-only", ui(who === "pip" ? "pipSays" : "youSaid")));
    body.appendChild(document.createTextNode(text));
    msg.appendChild(body);
    convo.el.appendChild(msg);
    return msg;
  }

  function resetConvo() {
    if (convo.context === "ask") closeAnimation();
    convo.el.innerHTML = "";
    if (convo.context === "ask") el.ideas.hidden = false;
  }

  function showLatest() {
    var last = convo.el.lastElementChild;
    if (last) last.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function startPuzzle(puzzle) {
    if (convo.context === "ask") el.ideas.hidden = true; // One puzzle at a time.
    say("pip", t(puzzle.think));
    var box = convo.el;
    var context = convo.context;

    var group = make("div", "choices");
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", ui("yourGuess"));
    shuffle(puzzle.choices.slice()).forEach(function (choice, i) {
      var btn = make("button", "choice");
      btn.type = "button";
      btn.appendChild(make("span", "choice-letter", "ABC".charAt(i)));
      btn.appendChild(make("span", "", t(choice.text)));
      btn.addEventListener("click", function () {
        useConvo(box, context);
        say("kid", t(choice.text));
        if (choice.correct) {
          group.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
          btn.classList.add("right");
          solve(puzzle);
        } else {
          btn.disabled = true;
          btn.classList.add("wrong");
          say("pip", ui("notQuite", { hint: t(choice.nudge) }));
          box.appendChild(group); // Keep the choices under the latest hint.
        }
        showLatest();
      });
      group.appendChild(btn);
    });
    box.appendChild(group);
    showLatest();
  }

  function explanation(puzzle) {
    if (puzzle.explain) return t(puzzle.explain);
    return t(state.grade <= 5 ? puzzle.young : puzzle.older);
  }

  function solve(puzzle) {
    say("pip", explanation(puzzle));

    var path = pathById[state.path];
    var mod = convo.context === "module" && path ? path.modules[state.module] : null;
    var wasDone = mod ? moduleDone(mod) : false;
    var isNew = !isSolved(puzzle.id);
    var before = badgeFor(state.solved.length);
    if (isNew) state.solved.push(puzzle.id);
    var after = badgeFor(state.solved.length);
    renderStars();

    var win = make("div", "win");
    win.appendChild(icon("i-star", "win-star"));
    win.appendChild(make("p", "win-title", ui(isNew ? "winNew" : "winAgain")));
    if (isNew) win.appendChild(make("p", "win-badge", ui("winStar")));
    if (after !== before) win.appendChild(make("p", "win-badge", ui("newBadge", { name: t(after.name) })));
    if (mod && !wasDone && moduleDone(mod)) win.appendChild(make("p", "win-badge", ui("earnedSkill", { skill: t(mod.skill) })));
    win.appendChild(make("p", "win-share", ui("share")));

    if (convo.context === "ask") {
      var actions = make("div", "win-actions");
      var anim = data.animations && data.animations.forPuzzle[puzzle.id];
      if (anim) {
        var show = make("button", "btn btn-show", ui("showMe"));
        show.type = "button";
        show.addEventListener("click", function () {
          if (win.nextElementSibling && win.nextElementSibling.classList.contains("anim-panel")) return;
          var built = animationPanel(anim, true);
          win.insertAdjacentElement("afterend", built.panel);
          mountAnimation(anim, built.stage);
          built.panel.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        actions.appendChild(show);
      }
      var world = worldById[puzzle.world];
      if (world && world.status === "live") {
        var explore = make("a", "btn btn-ghost", ui("explore", { name: t(world.name) }));
        explore.href = world.url;
        explore.target = "_blank";
        explore.rel = "noopener";
        actions.appendChild(explore);
      }
      var again = make("button", "btn btn-ghost", ui("askAnother"));
      again.type = "button";
      again.addEventListener("click", function () {
        useConvo(el.askConvo, "ask");
        resetConvo();
        renderStarters();
        window.scrollTo(0, 0);
        el.askInput.focus();
      });
      actions.appendChild(again);
      win.appendChild(actions);
    }
    convo.el.appendChild(win);

    renderHome();
    renderStarters();
    if (mod) {
      // Update the lesson's skill label without rebuilding the page (the conversation stays).
      var chip = el.learnPage.querySelector(".learn-top .level-chip");
      if (chip && moduleDone(mod)) chip.textContent = ui("earned", { skill: t(mod.skill) });
    }
    celebrate();
  }

  // ---- Matching a typed question (English or Hindi) to a puzzle ----

  var PRIVATE = /(my name is|i live|address|phone|my school is|my number|password|email|मेरा नाम|मेरा पता|फ़ोन नंबर|फोन नंबर|मोबाइल नंबर|पासवर्ड)/;
  var GREETING = ["hi", "hello", "hey", "namaste", "hii", "नमस्ते", "हेलो", "हाय"];

  function words(text) {
    return text.toLowerCase().split(/[\s,.!?।"'()\-:;]+/).filter(Boolean);
  }

  // Best keyword match, preferring puzzles made for the child's class level.
  function findPuzzle(question) {
    var ws = words(question);
    var lvl = level().id;
    var best = null;
    var bestScore = 0;
    data.puzzles.forEach(function (p) {
      var score = 0;
      p.keywords.forEach(function (k) {
        if (ws.some(function (w) { return w.indexOf(k) === 0; })) score++;
      });
      if (score && p.level === lvl) score += 0.5;
      if (score > bestScore) { best = p; bestScore = score; }
    });
    return best;
  }

  function suggestInConvo(text) {
    say("pip", text);
    var ideas = make("div", "starters");
    suggestedPuzzles(3).forEach(function (p) { ideas.appendChild(starterButton(p, askPuzzle)); });
    convo.el.appendChild(ideas);
  }

  el.askForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var question = el.askInput.value.trim();
    if (!question) return;
    el.askInput.value = "";
    useConvo(el.askConvo, "ask");
    resetConvo();
    el.ideas.hidden = true;
    say("kid", question);

    var ws = words(question);
    if (PRIVATE.test(question.toLowerCase())) {
      say("pip", ui("privacy"));
    } else {
      var puzzle = findPuzzle(question);
      if (puzzle) startPuzzle(puzzle);
      else if (ws.length <= 2 && ws.some(function (w) { return GREETING.indexOf(w) !== -1; })) suggestInConvo(ui("greet"));
      else suggestInConvo(ui("unknown"));
    }
    showLatest();
  });

  // ---- Celebration: paper confetti in the site's colours ----

  function celebrate() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var colours = ["#F4B41A", "#2F9E58", "#2D4BC4", "#D9473B", "#F28CA6"];
    for (var i = 0; i < 36; i++) {
      var bit = make("span", "bit");
      bit.style.left = Math.random() * 100 + "vw";
      bit.style.background = colours[i % colours.length];
      bit.style.animationDelay = Math.random() * 0.5 + "s";
      bit.style.animationDuration = 1.8 + Math.random() * 1.2 + "s";
      if (i % 3 === 0) bit.style.borderRadius = "50%";
      el.confetti.appendChild(bit);
    }
    setTimeout(function () { el.confetti.innerHTML = ""; }, 3400);
  }

  function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    return list;
  }

  data.languages.forEach(function (name) { el.languageList.appendChild(make("li", "", name)); });
  renderStars();
  applyLanguage();
  render();
})();
