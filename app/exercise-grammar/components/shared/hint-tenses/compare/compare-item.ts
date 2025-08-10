import { CEFRLevel } from "@/types/grammars/grammars_type";
import { TenseItemCompare } from "./compareTensesModal";

// Advanced hint suggestions - Comprehensive collection of 30+ hints
export const getAdvancedHints = (
  availableTenses: TenseItemCompare[],
  bookmarkedTenses: string[]
) => {
  const hints = [];

  // 1. Difficulty progression hint
  const beginnerTopics = availableTenses.filter((item) =>
    item.cefrLevels.some((level) => ["A1", "A2"].includes(level))
  );
  const advancedTopics = availableTenses.filter((item) =>
    item.cefrLevels.some((level) => ["C1", "C2"].includes(level))
  );

  if (beginnerTopics.length >= 1 && advancedTopics.length >= 1) {
    const beginner =
      beginnerTopics[Math.floor(Math.random() * beginnerTopics.length)];
    const advanced =
      advancedTopics[Math.floor(Math.random() * advancedTopics.length)];
    hints.push({
      title: "🎯 Difficulty Progression",
      description: "Compare beginner vs advanced concepts",
      topics: [beginner, advanced],
      reason: "See how complexity increases across CEFR levels",
      difficulty: "Mixed",
    });
  }

  // 2-4. Same category, different complexity
  const categories = ["tenses", "grammar", "conditionals"];
  categories.forEach((category) => {
    const categoryTopics = availableTenses.filter(
      (item) => item.category === category
    );
    if (categoryTopics.length >= 3) {
      const selected = categoryTopics
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      hints.push({
        title: `📚 ${
          category.charAt(0).toUpperCase() + category.slice(1)
        } Deep Dive`,
        description: `Compare 3 different ${category} concepts`,
        topics: selected,
        reason: `Understand variations within ${category}`,
        difficulty: "Moderate",
      });
    }
  });

  // 5. Cross-category comparison
  if (availableTenses.length >= 3) {
    const mixedCategories: TenseItemCompare[] = [];
    const usedCategories: string[] = [];
    ["tenses", "grammar", "conditionals", "special"].forEach((category) => {
      const categoryItems = availableTenses.filter(
        (item) => item.category === category
      );
      if (categoryItems.length > 0 && !usedCategories.includes(category)) {
        mixedCategories.push(
          categoryItems[Math.floor(Math.random() * categoryItems.length)]
        );
        usedCategories.push(category);
      }
    });
    if (mixedCategories.length >= 3) {
      hints.push({
        title: "🌍 Cross-Category Analysis",
        description: "Compare concepts from different grammar areas",
        topics: mixedCategories.slice(0, 3),
        reason: "See how different grammar concepts interconnect",
        difficulty: "Advanced",
      });
    }
  }

  // 6-9. Time-based comparisons
  const tenseTopics = availableTenses.filter(
    (item) => item.category === "tenses"
  );
  if (tenseTopics.length >= 2) {
    const timeBasedPairs = [
      {
        keys: ["present-simple", "past-simple"],
        name: "Simple Tenses Journey",
        theme: "foundation",
      },
      {
        keys: ["present-continuous", "past-continuous"],
        name: "Continuous Flow",
        theme: "progression",
      },
      {
        keys: ["present-perfect", "past-perfect"],
        name: "Perfect Mastery",
        theme: "completion",
      },
      {
        keys: ["future-simple", "future-continuous"],
        name: "Future Visions",
        theme: "prediction",
      },
    ];

    timeBasedPairs.forEach((pair) => {
      const foundTopics = tenseTopics.filter((item) =>
        pair.keys.some(
          (key) =>
            item.key.includes(key.split("-")[0]) &&
            item.key.includes(key.split("-")[1])
        )
      );
      if (foundTopics.length >= 2) {
        hints.push({
          title: `⏰ ${pair.name}`,
          description: `Compare ${pair.theme}-focused time expressions`,
          topics: foundTopics.slice(0, 2),
          reason: "Master temporal relationships in English",
          difficulty: "Intermediate",
        });
      }
    });
  }

  // 10-15. Functional grammar groups
  const grammarTopics = availableTenses.filter(
    (item) => item.category === "grammar"
  );
  if (grammarTopics.length >= 2) {
    const functionalGroups = [
      {
        types: ["modal", "auxiliary"],
        name: "Helping Verbs Mastery",
        focus: "assistance",
      },
      {
        types: ["clause", "phrase"],
        name: "Sentence Architecture",
        focus: "structure",
      },
      {
        types: ["active", "passive"],
        name: "Voice Transformation",
        focus: "perspective",
      },
      {
        types: ["article", "determiner"],
        name: "Determiners Universe",
        focus: "specification",
      },
      {
        types: ["pronoun", "possessive"],
        name: "Pronoun Systems",
        focus: "reference",
      },
      {
        types: ["comparative", "superlative"],
        name: "Comparison Mastery",
        focus: "evaluation",
      },
    ];

    functionalGroups.forEach((group) => {
      const groupTopics = grammarTopics.filter((item) =>
        group.types.some((type) => item.key.toLowerCase().includes(type))
      );
      if (groupTopics.length >= 2) {
        hints.push({
          title: `🔧 ${group.name}`,
          description: `Explore ${group.focus} in grammar`,
          topics: groupTopics.slice(0, 2),
          reason: `Understand ${group.focus} mechanisms in context`,
          difficulty: "Intermediate",
        });
      }
    });
  }

  // 16. Learning progression - Intermediate
  const intermediateTopics = availableTenses.filter((item) =>
    item.cefrLevels.some((level) => ["B1", "B2"].includes(level))
  );
  if (intermediateTopics.length >= 2) {
    const selected = intermediateTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    hints.push({
      title: "🎚️ Intermediate Bridge",
      description: "Compare B1-B2 transitional concepts",
      topics: selected,
      reason: "Perfect your intermediate English skills",
      difficulty: "Intermediate",
    });
  }

  // 17. Advanced mastery
  if (advancedTopics.length >= 2) {
    const selected = advancedTopics.sort(() => 0.5 - Math.random()).slice(0, 2);
    hints.push({
      title: "🏆 Advanced Mastery",
      description: "Compare C1-C2 sophisticated concepts",
      topics: selected,
      reason: "Achieve native-like proficiency",
      difficulty: "Advanced",
    });
  }

  // 18. Exam preparation
  const examFocusTopics = availableTenses.filter((item) =>
    item.cefrLevels.some((level) => ["B1", "B2", "C1"].includes(level))
  );
  if (examFocusTopics.length >= 2) {
    const selected = examFocusTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    hints.push({
      title: "🎓 Exam Excellence",
      description: "Compare exam-critical topics",
      topics: selected,
      reason: "Focus on IELTS/TOEFL/Cambridge requirements",
      difficulty: "Exam-Focused",
    });
  }

  // 19. Communication skills
  const communicationTopics = availableTenses.filter(
    (item) =>
      ["conditionals", "special"].includes(item.category) ||
      item.key.toLowerCase().includes("question") ||
      item.key.toLowerCase().includes("reported") ||
      item.key.toLowerCase().includes("indirect")
  );
  if (communicationTopics.length >= 2) {
    const selected = communicationTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    hints.push({
      title: "💬 Communication Fluency",
      description: "Compare conversation-essential grammar",
      topics: selected,
      reason: "Enhance your speaking and writing fluency",
      difficulty: "Communication",
    });
  }

  // 20. Bookmarked comparison
  const bookmarkedTopicItems = availableTenses.filter((item) =>
    bookmarkedTenses.includes(item.key)
  );
  if (bookmarkedTopicItems.length >= 2) {
    const selected = bookmarkedTopicItems
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.min(3, bookmarkedTopicItems.length));
    hints.push({
      title: "⭐ Personal Favorites",
      description: "Compare your bookmarked topics",
      topics: selected,
      reason: "Review and consolidate your marked interests",
      difficulty: "Personal",
    });
  }

  // 21. Error-prone topics
  const errorProneTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("irregular") ||
      item.key.toLowerCase().includes("exception") ||
      ["present-perfect", "past-simple", "article", "preposition"].some(
        (difficult) =>
          item.key.toLowerCase().includes(difficult.replace("-", "_")) ||
          item.key.toLowerCase().includes(difficult)
      )
  );
  if (errorProneTopics.length >= 2) {
    const selected = errorProneTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    hints.push({
      title: "⚠️ Common Pitfalls",
      description: "Compare frequently confused concepts",
      topics: selected,
      reason: "Avoid typical learner mistakes",
      difficulty: "Error-Focused",
    });
  }

  // 22. Academic writing focus
  const academicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("passive") ||
      item.key.toLowerCase().includes("formal") ||
      item.key.toLowerCase().includes("reported") ||
      item.key.toLowerCase().includes("conditional")
  );
  if (academicTopics.length >= 2) {
    const selected = academicTopics.sort(() => 0.5 - Math.random()).slice(0, 2);
    hints.push({
      title: "📖 Academic Excellence",
      description: "Compare scholarly writing structures",
      topics: selected,
      reason: "Master formal academic expression",
      difficulty: "Academic",
    });
  }

  // 23. Business communication
  const businessTopics = availableTenses.filter(
    (item) =>
      item.cefrLevels.some((level) => ["B1", "B2", "C1"].includes(level)) &&
      (item.category === "grammar" || item.category === "special")
  );
  if (businessTopics.length >= 2) {
    const selected = businessTopics.sort(() => 0.5 - Math.random()).slice(0, 2);
    hints.push({
      title: "💼 Professional Edge",
      description: "Compare business-essential grammar",
      topics: selected,
      reason: "Excel in professional communication",
      difficulty: "Professional",
    });
  }

  // 24. Creative expression
  const creativeTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("subjunctive") ||
      item.key.toLowerCase().includes("narrative") ||
      item.key.toLowerCase().includes("literary") ||
      item.category === "special"
  );
  if (creativeTopics.length >= 2) {
    const selected = creativeTopics.sort(() => 0.5 - Math.random()).slice(0, 2);
    hints.push({
      title: "🎨 Creative Expression",
      description: "Compare artistic language structures",
      topics: selected,
      reason: "Enhance creative writing skills",
      difficulty: "Creative",
    });
  }

  // 25. Cross-linguistic comparison
  const complexTopics = availableTenses.filter((item) =>
    item.cefrLevels.some((level) => ["B2", "C1", "C2"].includes(level))
  );
  if (complexTopics.length >= 3) {
    const selected = complexTopics.sort(() => 0.5 - Math.random()).slice(0, 3);
    hints.push({
      title: "🌐 Language Architecture",
      description: "Compare complex linguistic structures",
      topics: selected,
      reason: "Understand deeper language patterns",
      difficulty: "Linguistic",
    });
  }

  // 26. Historical progression
  const historicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("past") ||
      item.key.toLowerCase().includes("historical") ||
      item.key.toLowerCase().includes("archaic")
  );
  if (historicalTopics.length >= 2) {
    const selected = historicalTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    hints.push({
      title: "📜 Historical Journey",
      description: "Compare temporal narrative structures",
      topics: selected,
      reason: "Master storytelling techniques",
      difficulty: "Narrative",
    });
  }

  // 27. Pragmatic usage
  const pragmaticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("polite") ||
      item.key.toLowerCase().includes("request") ||
      item.key.toLowerCase().includes("suggestion") ||
      item.key.toLowerCase().includes("modal")
  );
  if (pragmaticTopics.length >= 2) {
    const selected = pragmaticTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    hints.push({
      title: "🤝 Pragmatic Mastery",
      description: "Compare social interaction grammar",
      topics: selected,
      reason: "Navigate social contexts effectively",
      difficulty: "Pragmatic",
    });
  }

  // 28. Phonetic patterns
  const phoneticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("contraction") ||
      item.key.toLowerCase().includes("rhythm") ||
      item.key.toLowerCase().includes("stress")
  );
  if (phoneticTopics.length >= 2) {
    const selected = phoneticTopics.sort(() => 0.5 - Math.random()).slice(0, 2);
    hints.push({
      title: "🎵 Sound Patterns",
      description: "Compare pronunciation-related grammar",
      topics: selected,
      reason: "Improve spoken fluency",
      difficulty: "Phonetic",
    });
  }

  // 29. Regional variations
  const regionalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("british") ||
      item.key.toLowerCase().includes("american") ||
      item.key.toLowerCase().includes("variant")
  );
  if (regionalTopics.length >= 2) {
    const selected = regionalTopics.sort(() => 0.5 - Math.random()).slice(0, 2);
    hints.push({
      title: "🗺️ Global Variations",
      description: "Compare international English forms",
      topics: selected,
      reason: "Understand global English diversity",
      difficulty: "Regional",
    });
  }

  // 30. Cognitive patterns
  const cognitiveTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("mental") ||
      item.key.toLowerCase().includes("perception") ||
      item.key.toLowerCase().includes("cognitive")
  );
  if (cognitiveTopics.length >= 2) {
    const selected = cognitiveTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    hints.push({
      title: "🧠 Cognitive Patterns",
      description: "Compare thought-related structures",
      topics: selected,
      reason: "Express complex ideas clearly",
      difficulty: "Cognitive",
    });
  }

  // 31. Frequency-based selection
  const commonTopics = availableTenses.filter((item) =>
    [
      "present-simple",
      "past-simple",
      "future-simple",
      "present-continuous",
      "present-perfect",
    ].includes(item.key)
  );
  if (commonTopics.length >= 2) {
    const selected = commonTopics.sort(() => 0.5 - Math.random()).slice(0, 2);
    hints.push({
      title: "⚡ High-Frequency Essentials",
      description: "Compare most-used grammar structures",
      topics: selected,
      reason: "Master the core of English grammar",
      difficulty: "Essential",
    });
  }

  // 32. Stylistic variations
  const stylisticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("formal") ||
      item.key.toLowerCase().includes("informal") ||
      item.key.toLowerCase().includes("colloquial")
  );
  if (stylisticTopics.length >= 2) {
    const selected = stylisticTopics
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    hints.push({
      title: "🎭 Stylistic Spectrum",
      description: "Compare formal vs informal structures",
      topics: selected,
      reason: "Adapt your style to any context",
      difficulty: "Stylistic",
    });
  }

  // 33-35. Random sophisticated combinations
  for (let i = 0; i < 3; i++) {
    if (availableTenses.length >= 3) {
      const randomTopics = availableTenses
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      const themes = ["Innovation", "Discovery", "Mastery"];
      const emojis = ["🚀", "🔍", "🏅"];
      hints.push({
        title: `${emojis[i]} Grammar ${themes[i]}`,
        description: `Explore unexpected connections in grammar`,
        topics: randomTopics,
        reason: `Discover hidden patterns and relationships`,
        difficulty: "Exploratory",
      });
    }
  }

  // 36. Contextual Usage Patterns
  const contextualTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("context") ||
      item.key.toLowerCase().includes("situational") ||
      item.key.toLowerCase().includes("social")
  );
  if (contextualTopics.length >= 2) {
    hints.push({
      title: "🌐 Contextual Usage Patterns",
      description: "Compare context-dependent grammar structures",
      topics: contextualTopics.slice(0, 2),
      reason: "Master appropriate usage in different contexts",
      difficulty: "Contextual",
    });
  }

  // 37. Linguistic Register Comparison
  const registerTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("register") ||
      item.key.toLowerCase().includes("level") ||
      item.key.toLowerCase().includes("tone")
  );
  if (registerTopics.length >= 2) {
    hints.push({
      title: "🎩 Linguistic Register Comparison",
      description: "Compare formal vs informal language registers",
      topics: registerTopics.slice(0, 2),
      reason: "Understand appropriate language levels",
      difficulty: "Register",
    });
  }

  // 38. Transitional Grammar Elements
  const transitionalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("transition") ||
      item.key.toLowerCase().includes("connect") ||
      item.key.toLowerCase().includes("linking")
  );
  if (transitionalTopics.length >= 2) {
    hints.push({
      title: "🔗 Transitional Grammar Elements",
      description: "Compare connecting and linking structures",
      topics: transitionalTopics.slice(0, 2),
      reason: "Create smooth text flow and coherence",
      difficulty: "Transitional",
    });
  }

  // 39. Emotional Expression Patterns
  const emotionalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("emotion") ||
      item.key.toLowerCase().includes("feeling") ||
      item.key.toLowerCase().includes("attitude")
  );
  if (emotionalTopics.length >= 2) {
    hints.push({
      title: "💝 Emotional Expression Patterns",
      description: "Compare ways to express emotions and attitudes",
      topics: emotionalTopics.slice(0, 2),
      reason: "Express feelings with grammatical precision",
      difficulty: "Emotional",
    });
  }

  // 40. Temporal Sequencing Advanced
  const sequenceTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("sequence") ||
      item.key.toLowerCase().includes("order") ||
      item.key.toLowerCase().includes("chronology")
  );
  if (sequenceTopics.length >= 2) {
    hints.push({
      title: "⏳ Temporal Sequencing Advanced",
      description: "Compare complex time sequencing structures",
      topics: sequenceTopics.slice(0, 2),
      reason: "Master sophisticated temporal relationships",
      difficulty: "Temporal",
    });
  }

  // 41. Cultural Adaptation Grammar
  const culturalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("cultural") ||
      item.key.toLowerCase().includes("adaptation") ||
      item.key.toLowerCase().includes("intercultural")
  );
  if (culturalTopics.length >= 2) {
    hints.push({
      title: "🌏 Cultural Adaptation Grammar",
      description: "Compare culturally-sensitive grammar patterns",
      topics: culturalTopics.slice(0, 2),
      reason: "Navigate cross-cultural communication",
      difficulty: "Cultural",
    });
  }

  // 42. Precision vs Fluency Balance
  const precisionTopics = availableTenses.filter((item) =>
    item.cefrLevels.some((level) => ["A1", "A2"].includes(level))
  );
  const fluencyTopics = availableTenses.filter((item) =>
    item.cefrLevels.some((level) => ["C1", "C2"].includes(level))
  );
  if (precisionTopics.length >= 1 && fluencyTopics.length >= 1) {
    hints.push({
      title: "⚖️ Precision vs Fluency Balance",
      description: "Compare accuracy-focused vs fluency-focused structures",
      topics: [precisionTopics[0], fluencyTopics[0]],
      reason: "Balance accuracy with natural communication",
      difficulty: "Balance",
    });
  }

  // 43. Genre-Specific Grammar
  const genreTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("genre") ||
      item.key.toLowerCase().includes("text") ||
      item.key.toLowerCase().includes("type")
  );
  if (genreTopics.length >= 2) {
    hints.push({
      title: "📚 Genre-Specific Grammar",
      description: "Compare grammar patterns across text types",
      topics: genreTopics.slice(0, 2),
      reason: "Adapt language to different text genres",
      difficulty: "Genre",
    });
  }

  // 44. Discourse Analysis Patterns
  const discourseTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("discourse") ||
      item.key.toLowerCase().includes("analysis") ||
      item.key.toLowerCase().includes("text")
  );
  if (discourseTopics.length >= 2) {
    hints.push({
      title: "🔍 Discourse Analysis Patterns",
      description: "Compare patterns in extended discourse",
      topics: discourseTopics.slice(0, 2),
      reason: "Analyze and produce coherent extended texts",
      difficulty: "Discourse",
    });
  }

  // 45. Syntactic Complexity Levels
  const syntaxTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("syntax") ||
      item.key.toLowerCase().includes("complex") ||
      item.key.toLowerCase().includes("structure")
  );
  if (syntaxTopics.length >= 2) {
    hints.push({
      title: "🏗️ Syntactic Complexity Levels",
      description: "Compare simple vs complex syntactic structures",
      topics: syntaxTopics.slice(0, 2),
      reason: "Progress from simple to sophisticated structures",
      difficulty: "Syntactic",
    });
  }

  // 46. Semantic Field Comparisons
  const semanticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("semantic") ||
      item.key.toLowerCase().includes("meaning") ||
      item.key.toLowerCase().includes("field")
  );
  if (semanticTopics.length >= 2) {
    hints.push({
      title: "🎯 Semantic Field Comparisons",
      description: "Compare structures within semantic categories",
      topics: semanticTopics.slice(0, 2),
      reason: "Understand meaning relationships in grammar",
      difficulty: "Semantic",
    });
  }

  // 47. Cohesion and Coherence Tools
  const cohesionTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("cohesion") ||
      item.key.toLowerCase().includes("coherence") ||
      item.key.toLowerCase().includes("unity")
  );
  if (cohesionTopics.length >= 2) {
    hints.push({
      title: "🔗 Cohesion and Coherence Tools",
      description: "Compare text cohesion mechanisms",
      topics: cohesionTopics.slice(0, 2),
      reason: "Create unified and flowing texts",
      difficulty: "Cohesion",
    });
  }

  // 48. Pragmatic Function Analysis
  const pragmaticFunctionTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("function") ||
      item.key.toLowerCase().includes("purpose") ||
      item.key.toLowerCase().includes("intent")
  );
  if (pragmaticFunctionTopics.length >= 2) {
    hints.push({
      title: "🎭 Pragmatic Function Analysis",
      description: "Compare grammatical functions in communication",
      topics: pragmaticFunctionTopics.slice(0, 2),
      reason: "Understand what grammar does in real communication",
      difficulty: "Pragmatic-Function",
    });
  }

  // 49. Metalinguistic Awareness
  const metaTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("meta") ||
      item.key.toLowerCase().includes("about") ||
      item.key.toLowerCase().includes("language")
  );
  if (metaTopics.length >= 2) {
    hints.push({
      title: "🧠 Metalinguistic Awareness",
      description: "Compare structures for talking about language",
      topics: metaTopics.slice(0, 2),
      reason: "Develop awareness of language as a system",
      difficulty: "Metalinguistic",
    });
  }

  // 50. Cross-Modal Grammar (Speech vs Writing)
  const speechTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("speech") ||
      item.key.toLowerCase().includes("spoken") ||
      item.key.toLowerCase().includes("oral")
  );
  const writingModalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("writing") ||
      item.key.toLowerCase().includes("written") ||
      item.key.toLowerCase().includes("textual")
  );
  if (speechTopics.length >= 1 && writingModalTopics.length >= 1) {
    hints.push({
      title: "📞 Cross-Modal Grammar",
      description: "Compare spoken vs written grammar patterns",
      topics: [speechTopics[0], writingModalTopics[0]],
      reason: "Understand differences between speech and writing",
      difficulty: "Cross-Modal",
    });
  }

  // 51. Grammatical Metaphor
  const metaphorTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("metaphor") ||
      item.key.toLowerCase().includes("figurative") ||
      item.key.toLowerCase().includes("symbolic")
  );
  if (metaphorTopics.length >= 2) {
    hints.push({
      title: "🌟 Grammatical Metaphor",
      description: "Compare literal vs metaphorical grammatical uses",
      topics: metaphorTopics.slice(0, 2),
      reason: "Master sophisticated meaning-making",
      difficulty: "Metaphorical",
    });
  }

  // 52. Information Structure Patterns
  const informationTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("information") ||
      item.key.toLowerCase().includes("focus") ||
      item.key.toLowerCase().includes("emphasis")
  );
  if (informationTopics.length >= 2) {
    hints.push({
      title: "📊 Information Structure Patterns",
      description: "Compare ways to organize information grammatically",
      topics: informationTopics.slice(0, 2),
      reason: "Control information flow and emphasis",
      difficulty: "Information",
    });
  }

  // 53. Lexicogrammatical Interface
  const lexicoTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("lexical") ||
      item.key.toLowerCase().includes("vocabulary") ||
      item.key.toLowerCase().includes("word")
  );
  if (lexicoTopics.length >= 2) {
    hints.push({
      title: "📝 Lexicogrammatical Interface",
      description: "Compare vocabulary-grammar intersections",
      topics: lexicoTopics.slice(0, 2),
      reason: "Understand how words and grammar interact",
      difficulty: "Lexicogrammatical",
    });
  }

  // 54. Multimodal Communication Grammar
  const multimodalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("multimodal") ||
      item.key.toLowerCase().includes("gesture") ||
      item.key.toLowerCase().includes("visual")
  );
  if (multimodalTopics.length >= 2) {
    hints.push({
      title: "🎭 Multimodal Communication Grammar",
      description: "Compare grammar in different communication modes",
      topics: multimodalTopics.slice(0, 2),
      reason: "Integrate multiple communication channels",
      difficulty: "Multimodal",
    });
  }

  // 55. Systemic Functional Perspectives
  const systemicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("systemic") ||
      item.key.toLowerCase().includes("functional") ||
      item.key.toLowerCase().includes("system")
  );
  if (systemicTopics.length >= 2) {
    hints.push({
      title: "⚙️ Systemic Functional Perspectives",
      description: "Compare grammar from functional viewpoints",
      topics: systemicTopics.slice(0, 2),
      reason: "See grammar as a meaning-making resource",
      difficulty: "Systemic",
    });
  }

  // 56. Critical Language Awareness
  const criticalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("critical") ||
      item.key.toLowerCase().includes("power") ||
      item.key.toLowerCase().includes("ideology")
  );
  if (criticalTopics.length >= 2) {
    hints.push({
      title: "🔍 Critical Language Awareness",
      description: "Compare grammar patterns in power relations",
      topics: criticalTopics.slice(0, 2),
      reason: "Develop critical language consciousness",
      difficulty: "Critical",
    });
  }

  // 57. Interlanguage Development
  const interlanguageTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("interlanguage") ||
      item.key.toLowerCase().includes("development") ||
      item.key.toLowerCase().includes("acquisition")
  );
  if (interlanguageTopics.length >= 2) {
    hints.push({
      title: "🌱 Interlanguage Development",
      description: "Compare stages in grammar acquisition",
      topics: interlanguageTopics.slice(0, 2),
      reason: "Understand grammar learning progression",
      difficulty: "Developmental",
    });
  }

  // 58. Corpus-Based Grammar Insights
  const corpusTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("corpus") ||
      item.key.toLowerCase().includes("frequency") ||
      item.key.toLowerCase().includes("usage")
  );
  if (corpusTopics.length >= 2) {
    hints.push({
      title: "📈 Corpus-Based Grammar Insights",
      description: "Compare real-world usage patterns",
      topics: corpusTopics.slice(0, 2),
      reason: "Learn from authentic language data",
      difficulty: "Corpus",
    });
  }

  // 59. Emergent Grammar Patterns
  const emergentTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("emergent") ||
      item.key.toLowerCase().includes("evolving") ||
      item.key.toLowerCase().includes("changing")
  );
  if (emergentTopics.length >= 2) {
    hints.push({
      title: "🌊 Emergent Grammar Patterns",
      description: "Compare traditional vs evolving structures",
      topics: emergentTopics.slice(0, 2),
      reason: "Stay current with language evolution",
      difficulty: "Emergent",
    });
  }

  // 60. Advanced Academic Discourse
  const academicDiscourseTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("academic") ||
      item.key.toLowerCase().includes("scholarly") ||
      item.key.toLowerCase().includes("research")
  );
  if (academicDiscourseTopics.length >= 2) {
    hints.push({
      title: "🎓 Advanced Academic Discourse",
      description: "Compare sophisticated academic structures",
      topics: academicDiscourseTopics.slice(0, 2),
      reason: "Master high-level academic communication",
      difficulty: "Academic-Advanced",
    });
  }

  // 61. Complex Interactional Patterns
  const interactionalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("interaction") ||
      item.key.toLowerCase().includes("dialogue") ||
      item.key.toLowerCase().includes("conversation")
  );
  if (interactionalTopics.length >= 2) {
    hints.push({
      title: "💬 Complex Interactional Patterns",
      description: "Compare sophisticated interaction structures",
      topics: interactionalTopics.slice(0, 2),
      reason: "Navigate complex conversational dynamics",
      difficulty: "Interactional",
    });
  }

  // 62. Grammatical Innovation
  const innovationTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("innovation") ||
      item.key.toLowerCase().includes("creative") ||
      item.key.toLowerCase().includes("novel")
  );
  if (innovationTopics.length >= 2) {
    hints.push({
      title: "💡 Grammatical Innovation",
      description: "Compare traditional vs innovative grammar uses",
      topics: innovationTopics.slice(0, 2),
      reason: "Explore creative language possibilities",
      difficulty: "Innovative",
    });
  }

  // 63. Cross-Linguistic Influence
  const crossLingTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("cross") ||
      item.key.toLowerCase().includes("transfer") ||
      item.key.toLowerCase().includes("influence")
  );
  if (crossLingTopics.length >= 2) {
    hints.push({
      title: "🌍 Cross-Linguistic Influence",
      description: "Compare patterns affected by other languages",
      topics: crossLingTopics.slice(0, 2),
      reason: "Understand multilingual grammar dynamics",
      difficulty: "Cross-Linguistic",
    });
  }

  // 64. Advanced Modal Epistemology
  const epistemicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("epistemic") ||
      item.key.toLowerCase().includes("certainty") ||
      item.key.toLowerCase().includes("probability")
  );
  if (epistemicTopics.length >= 2) {
    hints.push({
      title: "🔮 Advanced Modal Epistemology",
      description: "Compare certainty and probability expressions",
      topics: epistemicTopics.slice(0, 2),
      reason: "Express sophisticated degrees of certainty",
      difficulty: "Epistemic",
    });
  }

  // 65. Grammatical Archaeology
  const historicalGrammarTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("historical") ||
      item.key.toLowerCase().includes("archaic") ||
      item.key.toLowerCase().includes("etymology")
  );
  if (historicalGrammarTopics.length >= 2) {
    hints.push({
      title: "🏺 Grammatical Archaeology",
      description: "Compare historical vs modern structures",
      topics: historicalGrammarTopics.slice(0, 2),
      reason: "Understand language evolution and heritage",
      difficulty: "Historical",
    });
  }

  // 66. Neurolinguistic Processing
  const neuroTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("neuro") ||
      item.key.toLowerCase().includes("processing") ||
      item.key.toLowerCase().includes("cognitive")
  );
  if (neuroTopics.length >= 2) {
    hints.push({
      title: "🧠 Neurolinguistic Processing",
      description: "Compare cognitively simple vs complex structures",
      topics: neuroTopics.slice(0, 2),
      reason: "Optimize learning based on brain processing",
      difficulty: "Neurolinguistic",
    });
  }

  // 67. Digital Age Grammar
  const digitalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("digital") ||
      item.key.toLowerCase().includes("online") ||
      item.key.toLowerCase().includes("social")
  );
  if (digitalTopics.length >= 2) {
    hints.push({
      title: "💻 Digital Age Grammar",
      description: "Compare traditional vs digital communication patterns",
      topics: digitalTopics.slice(0, 2),
      reason: "Adapt to modern communication contexts",
      difficulty: "Digital",
    });
  }

  // 68. Philosophical Grammar Perspectives
  const philosophicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("philosophical") ||
      item.key.toLowerCase().includes("logic") ||
      item.key.toLowerCase().includes("reasoning")
  );
  if (philosophicalTopics.length >= 2) {
    hints.push({
      title: "🤔 Philosophical Grammar Perspectives",
      description: "Compare logical vs experiential grammar patterns",
      topics: philosophicalTopics.slice(0, 2),
      reason: "Explore deep connections between thought and language",
      difficulty: "Philosophical",
    });
  }

  // 69. Therapeutic Communication Grammar
  const therapeuticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("therapeutic") ||
      item.key.toLowerCase().includes("empathy") ||
      item.key.toLowerCase().includes("support")
  );
  if (therapeuticTopics.length >= 2) {
    hints.push({
      title: "💚 Therapeutic Communication Grammar",
      description: "Compare supportive vs neutral communication patterns",
      topics: therapeuticTopics.slice(0, 2),
      reason: "Use grammar for empathetic communication",
      difficulty: "Therapeutic",
    });
  }

  // 70. Master's Level Integration
  if (availableTenses.length >= 3) {
    const masterLevelTopics = availableTenses
      .filter(
        (item) =>
          item.cefrLevels.some((level) => ["C2"].includes(level)) ||
          item.category === "conditionals" ||
          item.key.toLowerCase().includes("advanced")
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    if (masterLevelTopics.length >= 3) {
      hints.push({
        title: "🎯 Master's Level Integration",
        description: "Compare three sophisticated grammar concepts",
        topics: masterLevelTopics,
        reason: "Achieve mastery through complex pattern recognition",
        difficulty: "Master",
      });
    }
  }

  // 71. Sociolinguistic Variation
  const sociolinguisticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("sociolinguistic") ||
      item.key.toLowerCase().includes("social") ||
      item.key.toLowerCase().includes("variation")
  );
  if (sociolinguisticTopics.length >= 2) {
    hints.push({
      title: "👥 Sociolinguistic Variation",
      description: "Compare grammar patterns across social groups",
      topics: sociolinguisticTopics.slice(0, 2),
      reason: "Understand how social factors influence grammar",
      difficulty: "Sociolinguistic",
    });
  }

  // 72. Grammaticalization Processes
  const grammaticalizationTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("grammaticalization") ||
      item.key.toLowerCase().includes("evolution") ||
      item.key.toLowerCase().includes("change")
  );
  if (grammaticalizationTopics.length >= 2) {
    hints.push({
      title: "🔄 Grammaticalization Processes",
      description: "Compare stages of grammatical evolution",
      topics: grammaticalizationTopics.slice(0, 2),
      reason: "Trace how words become grammar",
      difficulty: "Grammaticalization",
    });
  }

  // 73. Cognitive Load Theory Applications
  const cognitiveLoadTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("load") ||
      item.key.toLowerCase().includes("working") ||
      item.key.toLowerCase().includes("memory")
  );
  if (cognitiveLoadTopics.length >= 2) {
    hints.push({
      title: "🧩 Cognitive Load Theory Applications",
      description: "Compare grammar based on processing difficulty",
      topics: cognitiveLoadTopics.slice(0, 2),
      reason: "Optimize learning through cognitive science",
      difficulty: "Cognitive-Load",
    });
  }

  // 74. Embodied Grammar Concepts
  const embodiedTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("embodied") ||
      item.key.toLowerCase().includes("physical") ||
      item.key.toLowerCase().includes("sensory")
  );
  if (embodiedTopics.length >= 2) {
    hints.push({
      title: "🤸 Embodied Grammar Concepts",
      description: "Compare physical-metaphorical grammar structures",
      topics: embodiedTopics.slice(0, 2),
      reason: "Connect grammar to bodily experience",
      difficulty: "Embodied",
    });
  }

  // 75. Psycholinguistic Processing
  const psycholinguisticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("psycholinguistic") ||
      item.key.toLowerCase().includes("mental") ||
      item.key.toLowerCase().includes("psychological")
  );
  if (psycholinguisticTopics.length >= 2) {
    hints.push({
      title: "🧠 Psycholinguistic Processing",
      description: "Compare grammar from mental processing perspective",
      topics: psycholinguisticTopics.slice(0, 2),
      reason: "Understand how mind processes grammar",
      difficulty: "Psycholinguistic",
    });
  }

  // 76. Computational Grammar Models
  const computationalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("computational") ||
      item.key.toLowerCase().includes("algorithm") ||
      item.key.toLowerCase().includes("parsing")
  );
  if (computationalTopics.length >= 2) {
    hints.push({
      title: "💻 Computational Grammar Models",
      description: "Compare computer-processable grammar patterns",
      topics: computationalTopics.slice(0, 2),
      reason: "Bridge human and machine language processing",
      difficulty: "Computational",
    });
  }

  // 77. Evolutionary Grammar Perspectives
  const evolutionaryTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("evolutionary") ||
      item.key.toLowerCase().includes("origin") ||
      item.key.toLowerCase().includes("development")
  );
  if (evolutionaryTopics.length >= 2) {
    hints.push({
      title: "🦎 Evolutionary Grammar Perspectives",
      description: "Compare grammar from evolutionary viewpoint",
      topics: evolutionaryTopics.slice(0, 2),
      reason: "Understand grammar's evolutionary origins",
      difficulty: "Evolutionary",
    });
  }

  // 78. Usage-Based Grammar Theory
  const usageBasedTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("usage") ||
      item.key.toLowerCase().includes("frequency") ||
      item.key.toLowerCase().includes("based")
  );
  if (usageBasedTopics.length >= 2) {
    hints.push({
      title: "📊 Usage-Based Grammar Theory",
      description: "Compare grammar patterns by frequency of use",
      topics: usageBasedTopics.slice(0, 2),
      reason: "Learn from actual language usage patterns",
      difficulty: "Usage-Based",
    });
  }

  // 79. Construction Grammar Approach
  const constructionTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("construction") ||
      item.key.toLowerCase().includes("pattern") ||
      item.key.toLowerCase().includes("template")
  );
  if (constructionTopics.length >= 2) {
    hints.push({
      title: "🏗️ Construction Grammar Approach",
      description: "Compare meaningful form-function pairings",
      topics: constructionTopics.slice(0, 2),
      reason: "See grammar as learned constructions",
      difficulty: "Construction",
    });
  }

  // 80. Minimalist Program Analysis
  const minimalistTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("minimalist") ||
      item.key.toLowerCase().includes("universal") ||
      item.key.toLowerCase().includes("principles")
  );
  if (minimalistTopics.length >= 2) {
    hints.push({
      title: "⚡ Minimalist Program Analysis",
      description: "Compare core universal grammar principles",
      topics: minimalistTopics.slice(0, 2),
      reason: "Explore fundamental grammar architecture",
      difficulty: "Minimalist",
    });
  }

  // 81. Cognitive Semantics Integration
  const cognitiveSemanticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("cognitive") ||
      item.key.toLowerCase().includes("conceptual") ||
      item.key.toLowerCase().includes("semantic")
  );
  if (cognitiveSemanticTopics.length >= 2) {
    hints.push({
      title: "🎭 Cognitive Semantics Integration",
      description: "Compare meaning-based grammar structures",
      topics: cognitiveSemanticTopics.slice(0, 2),
      reason: "Connect grammar to conceptual thinking",
      difficulty: "Cognitive-Semantic",
    });
  }

  // 82. Interactional Sociolinguistics
  const interactionalSocioTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("interactional") ||
      item.key.toLowerCase().includes("conversation") ||
      item.key.toLowerCase().includes("social")
  );
  if (interactionalSocioTopics.length >= 2) {
    hints.push({
      title: "💬 Interactional Sociolinguistics",
      description: "Compare grammar in social interaction",
      topics: interactionalSocioTopics.slice(0, 2),
      reason: "Understand grammar's social functions",
      difficulty: "Interactional-Socio",
    });
  }

  // 83. Gesture-Grammar Interface
  const gestureTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("gesture") ||
      item.key.toLowerCase().includes("body") ||
      item.key.toLowerCase().includes("nonverbal")
  );
  if (gestureTopics.length >= 2) {
    hints.push({
      title: "🤲 Gesture-Grammar Interface",
      description: "Compare verbal and non-verbal grammar coordination",
      topics: gestureTopics.slice(0, 2),
      reason: "Integrate gesture with grammatical expression",
      difficulty: "Gesture-Grammar",
    });
  }

  // 84. Corpus Pragmatics Analysis
  const corpusPragmaticsTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("corpus") ||
      item.key.toLowerCase().includes("pragmatic") ||
      item.key.toLowerCase().includes("contextual")
  );
  if (corpusPragmaticsTopics.length >= 2) {
    hints.push({
      title: "📈 Corpus Pragmatics Analysis",
      description: "Compare grammar patterns in real contexts",
      topics: corpusPragmaticsTopics.slice(0, 2),
      reason: "Analyze grammar through big data and context",
      difficulty: "Corpus-Pragmatics",
    });
  }

  // 85. Language Contact Phenomena
  const languageContactTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("contact") ||
      item.key.toLowerCase().includes("borrowing") ||
      item.key.toLowerCase().includes("interference")
  );
  if (languageContactTopics.length >= 2) {
    hints.push({
      title: "🌍 Language Contact Phenomena",
      description: "Compare grammar influenced by language contact",
      topics: languageContactTopics.slice(0, 2),
      reason: "Understand multilingual grammar interactions",
      difficulty: "Language-Contact",
    });
  }

  // 86. Generative-Functional Bridge
  const generativeFunctionalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("generative") ||
      item.key.toLowerCase().includes("functional") ||
      item.key.toLowerCase().includes("bridge")
  );
  if (generativeFunctionalTopics.length >= 2) {
    hints.push({
      title: "🌉 Generative-Functional Bridge",
      description: "Compare formal and functional grammar approaches",
      topics: generativeFunctionalTopics.slice(0, 2),
      reason: "Integrate different theoretical perspectives",
      difficulty: "Generative-Functional",
    });
  }

  // 87. Iconicity in Grammar
  const iconicityTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("iconic") ||
      item.key.toLowerCase().includes("motivated") ||
      item.key.toLowerCase().includes("natural")
  );
  if (iconicityTopics.length >= 2) {
    hints.push({
      title: "🖼️ Iconicity in Grammar",
      description: "Compare naturally motivated vs arbitrary structures",
      topics: iconicityTopics.slice(0, 2),
      reason: "Explore form-meaning naturalness",
      difficulty: "Iconicity",
    });
  }

  // 88. Metagrammatical Competence
  const metagrammaticalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("metagrammatical") ||
      item.key.toLowerCase().includes("awareness") ||
      item.key.toLowerCase().includes("explicit")
  );
  if (metagrammaticalTopics.length >= 2) {
    hints.push({
      title: "🎓 Metagrammatical Competence",
      description: "Compare explicit vs implicit grammar knowledge",
      topics: metagrammaticalTopics.slice(0, 2),
      reason: "Develop conscious grammar awareness",
      difficulty: "Metagrammatical",
    });
  }

  // 89. Complexity Theory Applications
  const complexityTheoryTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("complexity") ||
      item.key.toLowerCase().includes("emergent") ||
      item.key.toLowerCase().includes("dynamic")
  );
  if (complexityTheoryTopics.length >= 2) {
    hints.push({
      title: "🌀 Complexity Theory Applications",
      description: "Compare grammar as complex adaptive system",
      topics: complexityTheoryTopics.slice(0, 2),
      reason: "Understand grammar's emergent properties",
      difficulty: "Complexity-Theory",
    });
  }

  // 90. Phenomenological Grammar
  const phenomenologicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("phenomenological") ||
      item.key.toLowerCase().includes("experience") ||
      item.key.toLowerCase().includes("lived")
  );
  if (phenomenologicalTopics.length >= 2) {
    hints.push({
      title: "🌅 Phenomenological Grammar",
      description: "Compare grammar as lived experience",
      topics: phenomenologicalTopics.slice(0, 2),
      reason: "Connect grammar to personal experience",
      difficulty: "Phenomenological",
    });
  }

  // 91. Ecological Grammar Perspectives
  const ecologicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("ecological") ||
      item.key.toLowerCase().includes("environment") ||
      item.key.toLowerCase().includes("situated")
  );
  if (ecologicalTopics.length >= 2) {
    hints.push({
      title: "🌿 Ecological Grammar Perspectives",
      description: "Compare grammar in environmental context",
      topics: ecologicalTopics.slice(0, 2),
      reason: "See grammar as environmentally situated",
      difficulty: "Ecological",
    });
  }

  // 92. Translanguaging Practices
  const translanguagingTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("translanguaging") ||
      item.key.toLowerCase().includes("multilingual") ||
      item.key.toLowerCase().includes("flexible")
  );
  if (translanguagingTopics.length >= 2) {
    hints.push({
      title: "🔀 Translanguaging Practices",
      description: "Compare flexible multilingual grammar use",
      topics: translanguagingTopics.slice(0, 2),
      reason: "Embrace fluid language boundaries",
      difficulty: "Translanguaging",
    });
  }

  // 93. Affordance Theory Grammar
  const affordanceTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("affordance") ||
      item.key.toLowerCase().includes("opportunity") ||
      item.key.toLowerCase().includes("potential")
  );
  if (affordanceTopics.length >= 2) {
    hints.push({
      title: "🔧 Affordance Theory Grammar",
      description: "Compare grammar learning opportunities",
      topics: affordanceTopics.slice(0, 2),
      reason: "Identify optimal learning affordances",
      difficulty: "Affordance",
    });
  }

  // 94. Enactive Grammar Approach
  const enactiveTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("enactive") ||
      item.key.toLowerCase().includes("action") ||
      item.key.toLowerCase().includes("participation")
  );
  if (enactiveTopics.length >= 2) {
    hints.push({
      title: "🎭 Enactive Grammar Approach",
      description: "Compare grammar through active participation",
      topics: enactiveTopics.slice(0, 2),
      reason: "Learn grammar through doing and being",
      difficulty: "Enactive",
    });
  }

  // 95. Dialogical Grammar Theory
  const dialogicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("dialogical") ||
      item.key.toLowerCase().includes("dialogue") ||
      item.key.toLowerCase().includes("responsive")
  );
  if (dialogicalTopics.length >= 2) {
    hints.push({
      title: "💭 Dialogical Grammar Theory",
      description: "Compare grammar as dialogue between voices",
      topics: dialogicalTopics.slice(0, 2),
      reason: "Understand grammar's dialogical nature",
      difficulty: "Dialogical",
    });
  }

  // 96. Assemblage Grammar Networks
  const assemblageTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("assemblage") ||
      item.key.toLowerCase().includes("network") ||
      item.key.toLowerCase().includes("rhizomatic")
  );
  if (assemblageTopics.length >= 2) {
    hints.push({
      title: "🕸️ Assemblage Grammar Networks",
      description: "Compare grammar as dynamic assemblages",
      topics: assemblageTopics.slice(0, 2),
      reason: "See grammar as networked connections",
      difficulty: "Assemblage",
    });
  }

  // 97. Posthuman Grammar Futures
  const posthumanTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("posthuman") ||
      item.key.toLowerCase().includes("future") ||
      item.key.toLowerCase().includes("digital")
  );
  if (posthumanTopics.length >= 2) {
    hints.push({
      title: "🚀 Posthuman Grammar Futures",
      description: "Compare traditional vs future grammar forms",
      topics: posthumanTopics.slice(0, 2),
      reason: "Explore grammar's digital future",
      difficulty: "Posthuman",
    });
  }

  // 98. Distributed Cognition Grammar
  const distributedCognitionTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("distributed") ||
      item.key.toLowerCase().includes("collective") ||
      item.key.toLowerCase().includes("shared")
  );
  if (distributedCognitionTopics.length >= 2) {
    hints.push({
      title: "🧠 Distributed Cognition Grammar",
      description: "Compare individual vs collective grammar processing",
      topics: distributedCognitionTopics.slice(0, 2),
      reason: "Understand grammar as shared cognitive resource",
      difficulty: "Distributed-Cognition",
    });
  }

  // 99. Multispecies Grammar Interfaces
  const multispeciesTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("multispecies") ||
      item.key.toLowerCase().includes("animal") ||
      item.key.toLowerCase().includes("communication")
  );
  if (multispeciesTopics.length >= 2) {
    hints.push({
      title: "🐾 Multispecies Grammar Interfaces",
      description: "Compare human vs non-human communication patterns",
      topics: multispeciesTopics.slice(0, 2),
      reason: "Explore boundaries of grammatical communication",
      difficulty: "Multispecies",
    });
  }

  // 100. Quantum Grammar Entanglements
  const quantumTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("quantum") ||
      item.key.toLowerCase().includes("entanglement") ||
      item.key.toLowerCase().includes("superposition")
  );
  if (quantumTopics.length >= 2) {
    hints.push({
      title: "⚛️ Quantum Grammar Entanglements",
      description: "Compare simultaneous multiple grammar states",
      topics: quantumTopics.slice(0, 2),
      reason: "Explore non-linear grammar possibilities",
      difficulty: "Quantum",
    });
  }

  // 101. Biomimetic Grammar Patterns
  const biomimeticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("biomimetic") ||
      item.key.toLowerCase().includes("organic") ||
      item.key.toLowerCase().includes("natural")
  );
  if (biomimeticTopics.length >= 2) {
    hints.push({
      title: "🌱 Biomimetic Grammar Patterns",
      description: "Compare artificial vs natural grammar structures",
      topics: biomimeticTopics.slice(0, 2),
      reason: "Learn from nature's communication systems",
      difficulty: "Biomimetic",
    });
  }

  // 102. Synesthetic Grammar Experiences
  const synestheticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("synesthetic") ||
      item.key.toLowerCase().includes("sensory") ||
      item.key.toLowerCase().includes("cross")
  );
  if (synestheticTopics.length >= 2) {
    hints.push({
      title: "🌈 Synesthetic Grammar Experiences",
      description: "Compare cross-sensory grammar representations",
      topics: synestheticTopics.slice(0, 2),
      reason: "Engage multiple senses in grammar learning",
      difficulty: "Synesthetic",
    });
  }

  // 103. Fractal Grammar Recursions
  const fractalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("fractal") ||
      item.key.toLowerCase().includes("recursive") ||
      item.key.toLowerCase().includes("self-similar")
  );
  if (fractalTopics.length >= 2) {
    hints.push({
      title: "🌀 Fractal Grammar Recursions",
      description: "Compare self-similar grammar patterns at different scales",
      topics: fractalTopics.slice(0, 2),
      reason: "Discover recursive patterns in language",
      difficulty: "Fractal",
    });
  }

  // 104. Holographic Grammar Projections
  const holographicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("holographic") ||
      item.key.toLowerCase().includes("dimensional") ||
      item.key.toLowerCase().includes("projection")
  );
  if (holographicTopics.length >= 2) {
    hints.push({
      title: "📐 Holographic Grammar Projections",
      description: "Compare multi-dimensional grammar representations",
      topics: holographicTopics.slice(0, 2),
      reason: "Visualize grammar in multiple dimensions",
      difficulty: "Holographic",
    });
  }

  // 105. Metamorphic Grammar Transformations
  const metamorphicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("metamorphic") ||
      item.key.toLowerCase().includes("transformation") ||
      item.key.toLowerCase().includes("change")
  );
  if (metamorphicTopics.length >= 2) {
    hints.push({
      title: "🦋 Metamorphic Grammar Transformations",
      description: "Compare radical grammar structure changes",
      topics: metamorphicTopics.slice(0, 2),
      reason: "Understand deep structural transformations",
      difficulty: "Metamorphic",
    });
  }

  // 106. Crystalline Grammar Formations
  const crystallineTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("crystalline") ||
      item.key.toLowerCase().includes("formation") ||
      item.key.toLowerCase().includes("structure")
  );
  if (crystallineTopics.length >= 2) {
    hints.push({
      title: "💎 Crystalline Grammar Formations",
      description: "Compare solid vs fluid grammar structures",
      topics: crystallineTopics.slice(0, 2),
      reason: "Build stable yet flexible grammar patterns",
      difficulty: "Crystalline",
    });
  }

  // 107. Atmospheric Grammar Pressures
  const atmosphericTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("atmospheric") ||
      item.key.toLowerCase().includes("pressure") ||
      item.key.toLowerCase().includes("ambient")
  );
  if (atmosphericTopics.length >= 2) {
    hints.push({
      title: "🌬️ Atmospheric Grammar Pressures",
      description: "Compare environmental influences on grammar",
      topics: atmosphericTopics.slice(0, 2),
      reason: "Sense the contextual atmosphere of grammar",
      difficulty: "Atmospheric",
    });
  }

  // 108. Gravitational Grammar Fields
  const gravitationalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("gravitational") ||
      item.key.toLowerCase().includes("field") ||
      item.key.toLowerCase().includes("attraction")
  );
  if (gravitationalTopics.length >= 2) {
    hints.push({
      title: "🌌 Gravitational Grammar Fields",
      description: "Compare grammar structures with strong vs weak pull",
      topics: gravitationalTopics.slice(0, 2),
      reason: "Feel the attractive force of grammar patterns",
      difficulty: "Gravitational",
    });
  }

  // 109. Magnetic Grammar Polarities
  const magneticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("magnetic") ||
      item.key.toLowerCase().includes("polarity") ||
      item.key.toLowerCase().includes("attraction")
  );
  if (magneticTopics.length >= 2) {
    hints.push({
      title: "🧲 Magnetic Grammar Polarities",
      description: "Compare oppositely charged grammar structures",
      topics: magneticTopics.slice(0, 2),
      reason: "Understand grammar's magnetic attractions",
      difficulty: "Magnetic",
    });
  }

  // 110. Electromagnetic Grammar Spectrums
  const electromagneticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("electromagnetic") ||
      item.key.toLowerCase().includes("spectrum") ||
      item.key.toLowerCase().includes("frequency")
  );
  if (electromagneticTopics.length >= 2) {
    hints.push({
      title: "📡 Electromagnetic Grammar Spectrums",
      description: "Compare grammar across frequency ranges",
      topics: electromagneticTopics.slice(0, 2),
      reason: "Tune into different grammar wavelengths",
      difficulty: "Electromagnetic",
    });
  }

  // 111. Oceanic Grammar Currents
  const oceanicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("oceanic") ||
      item.key.toLowerCase().includes("current") ||
      item.key.toLowerCase().includes("flow")
  );
  if (oceanicTopics.length >= 2) {
    hints.push({
      title: "🌊 Oceanic Grammar Currents",
      description: "Compare deep vs surface grammar movements",
      topics: oceanicTopics.slice(0, 2),
      reason: "Navigate the depths of grammar flow",
      difficulty: "Oceanic",
    });
  }

  // 112. Geological Grammar Layers
  const geologicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("geological") ||
      item.key.toLowerCase().includes("layer") ||
      item.key.toLowerCase().includes("sedimentary")
  );
  if (geologicalTopics.length >= 2) {
    hints.push({
      title: "🏔️ Geological Grammar Layers",
      description: "Compare grammar stratification over time",
      topics: geologicalTopics.slice(0, 2),
      reason: "Excavate historical grammar layers",
      difficulty: "Geological",
    });
  }

  // 113. Astronomical Grammar Orbits
  const astronomicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("astronomical") ||
      item.key.toLowerCase().includes("orbit") ||
      item.key.toLowerCase().includes("celestial")
  );
  if (astronomicalTopics.length >= 2) {
    hints.push({
      title: "🪐 Astronomical Grammar Orbits",
      description: "Compare grammar patterns in cosmic scales",
      topics: astronomicalTopics.slice(0, 2),
      reason: "Chart grammar's celestial movements",
      difficulty: "Astronomical",
    });
  }

  // 114. Botanical Grammar Growth Patterns
  const botanicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("botanical") ||
      item.key.toLowerCase().includes("growth") ||
      item.key.toLowerCase().includes("organic")
  );
  if (botanicalTopics.length >= 2) {
    hints.push({
      title: "🌳 Botanical Grammar Growth Patterns",
      description: "Compare grammar development like plant growth",
      topics: botanicalTopics.slice(0, 2),
      reason: "Cultivate organic grammar development",
      difficulty: "Botanical",
    });
  }

  // 115. Zoological Grammar Behaviors
  const zoologicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("zoological") ||
      item.key.toLowerCase().includes("behavior") ||
      item.key.toLowerCase().includes("instinct")
  );
  if (zoologicalTopics.length >= 2) {
    hints.push({
      title: "🦁 Zoological Grammar Behaviors",
      description: "Compare instinctive vs learned grammar patterns",
      topics: zoologicalTopics.slice(0, 2),
      reason: "Study grammar's behavioral adaptations",
      difficulty: "Zoological",
    });
  }

  // 116. Mythological Grammar Archetypes
  const mythologicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("mythological") ||
      item.key.toLowerCase().includes("archetype") ||
      item.key.toLowerCase().includes("story")
  );
  if (mythologicalTopics.length >= 2) {
    hints.push({
      title: "🐉 Mythological Grammar Archetypes",
      description: "Compare archetypal grammar patterns across cultures",
      topics: mythologicalTopics.slice(0, 2),
      reason: "Discover universal grammar myths",
      difficulty: "Mythological",
    });
  }

  // 117. Alchemical Grammar Transmutations
  const alchemicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("alchemical") ||
      item.key.toLowerCase().includes("transmutation") ||
      item.key.toLowerCase().includes("transformation")
  );
  if (alchemicalTopics.length >= 2) {
    hints.push({
      title: "🧪 Alchemical Grammar Transmutations",
      description: "Compare grammar transformation processes",
      topics: alchemicalTopics.slice(0, 2),
      reason: "Master the art of grammar transformation",
      difficulty: "Alchemical",
    });
  }

  // 118. Musical Grammar Harmonies
  const musicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("musical") ||
      item.key.toLowerCase().includes("harmony") ||
      item.key.toLowerCase().includes("rhythm")
  );
  if (musicalTopics.length >= 2) {
    hints.push({
      title: "🎵 Musical Grammar Harmonies",
      description: "Compare melodic vs rhythmic grammar patterns",
      topics: musicalTopics.slice(0, 2),
      reason: "Compose harmonious grammar symphonies",
      difficulty: "Musical",
    });
  }

  // 119. Theatrical Grammar Performances
  const theatricalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("theatrical") ||
      item.key.toLowerCase().includes("performance") ||
      item.key.toLowerCase().includes("dramatic")
  );
  if (theatricalTopics.length >= 2) {
    hints.push({
      title: "🎭 Theatrical Grammar Performances",
      description: "Compare dramatic vs comedic grammar expressions",
      topics: theatricalTopics.slice(0, 2),
      reason: "Perform grammar with theatrical flair",
      difficulty: "Theatrical",
    });
  }

  // 120. Architectural Grammar Blueprints
  const architecturalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("architectural") ||
      item.key.toLowerCase().includes("blueprint") ||
      item.key.toLowerCase().includes("design")
  );
  if (architecturalTopics.length >= 2) {
    hints.push({
      title: "🏛️ Architectural Grammar Blueprints",
      description: "Compare structural vs decorative grammar elements",
      topics: architecturalTopics.slice(0, 2),
      reason: "Design grammar's architectural foundation",
      difficulty: "Architectural",
    });
  }

  // 121. Culinary Grammar Recipes
  const culinaryTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("culinary") ||
      item.key.toLowerCase().includes("recipe") ||
      item.key.toLowerCase().includes("flavor")
  );
  if (culinaryTopics.length >= 2) {
    hints.push({
      title: "👨‍🍳 Culinary Grammar Recipes",
      description: "Compare sweet vs savory grammar combinations",
      topics: culinaryTopics.slice(0, 2),
      reason: "Cook up delicious grammar combinations",
      difficulty: "Culinary",
    });
  }

  // 122. Textile Grammar Weaving
  const textileTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("textile") ||
      item.key.toLowerCase().includes("weaving") ||
      item.key.toLowerCase().includes("fabric")
  );
  if (textileTopics.length >= 2) {
    hints.push({
      title: "🧶 Textile Grammar Weaving",
      description: "Compare interwoven vs separate grammar threads",
      topics: textileTopics.slice(0, 2),
      reason: "Weave complex grammar patterns together",
      difficulty: "Textile",
    });
  }

  // 123. Volcanic Grammar Eruptions
  const volcanicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("volcanic") ||
      item.key.toLowerCase().includes("eruption") ||
      item.key.toLowerCase().includes("explosive")
  );
  if (volcanicTopics.length >= 2) {
    hints.push({
      title: "🌋 Volcanic Grammar Eruptions",
      description: "Compare explosive vs steady grammar formations",
      topics: volcanicTopics.slice(0, 2),
      reason: "Harness the power of grammar transformations",
      difficulty: "Volcanic",
    });
  }

  // 124. Crystallographic Grammar Structures
  const crystallographicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("crystallographic") ||
      item.key.toLowerCase().includes("lattice") ||
      item.key.toLowerCase().includes("atomic")
  );
  if (crystallographicTopics.length >= 2) {
    hints.push({
      title: "💎 Crystallographic Grammar Structures",
      description: "Compare atomic-level grammar arrangements",
      topics: crystallographicTopics.slice(0, 2),
      reason: "Study grammar's fundamental building blocks",
      difficulty: "Crystallographic",
    });
  }

  // 125. Aerodynamic Grammar Flows
  const aerodynamicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("aerodynamic") ||
      item.key.toLowerCase().includes("streamline") ||
      item.key.toLowerCase().includes("fluid")
  );
  if (aerodynamicTopics.length >= 2) {
    hints.push({
      title: "✈️ Aerodynamic Grammar Flows",
      description: "Compare streamlined vs turbulent grammar patterns",
      topics: aerodynamicTopics.slice(0, 2),
      reason: "Optimize grammar for smooth communication",
      difficulty: "Aerodynamic",
    });
  }

  // 126. Cybernetic Grammar Networks
  const cyberneticTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("cybernetic") ||
      item.key.toLowerCase().includes("feedback") ||
      item.key.toLowerCase().includes("loop")
  );
  if (cyberneticTopics.length >= 2) {
    hints.push({
      title: "🤖 Cybernetic Grammar Networks",
      description: "Compare feedback-driven grammar systems",
      topics: cyberneticTopics.slice(0, 2),
      reason: "Build self-correcting grammar mechanisms",
      difficulty: "Cybernetic",
    });
  }

  // 127. Metamaterial Grammar Properties
  const metamaterialTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("metamaterial") ||
      item.key.toLowerCase().includes("synthetic") ||
      item.key.toLowerCase().includes("engineered")
  );
  if (metamaterialTopics.length >= 2) {
    hints.push({
      title: "🔬 Metamaterial Grammar Properties",
      description: "Compare engineered vs natural grammar behaviors",
      topics: metamaterialTopics.slice(0, 2),
      reason: "Design grammar with unprecedented properties",
      difficulty: "Metamaterial",
    });
  }

  // 128. Topological Grammar Spaces
  const topologicalTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("topological") ||
      item.key.toLowerCase().includes("spatial") ||
      item.key.toLowerCase().includes("geometric")
  );
  if (topologicalTopics.length >= 2) {
    hints.push({
      title: "🌀 Topological Grammar Spaces",
      description: "Compare continuous vs discrete grammar transformations",
      topics: topologicalTopics.slice(0, 2),
      reason: "Navigate grammar's dimensional landscapes",
      difficulty: "Topological",
    });
  }

  // 129. Photonic Grammar Communications
  const photonicTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("photonic") ||
      item.key.toLowerCase().includes("optical") ||
      item.key.toLowerCase().includes("light")
  );
  if (photonicTopics.length >= 2) {
    hints.push({
      title: "💡 Photonic Grammar Communications",
      description: "Compare light-speed vs traditional grammar transmission",
      topics: photonicTopics.slice(0, 2),
      reason: "Illuminate grammar's fastest pathways",
      difficulty: "Photonic",
    });
  }

  // 130. Nanotechnology Grammar Precision
  const nanotechTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("nano") ||
      item.key.toLowerCase().includes("precision") ||
      item.key.toLowerCase().includes("molecular")
  );
  if (nanotechTopics.length >= 2) {
    hints.push({
      title: "🔬 Nanotechnology Grammar Precision",
      description: "Compare molecular-level vs macro grammar engineering",
      topics: nanotechTopics.slice(0, 2),
      reason: "Engineer grammar with atomic precision",
      difficulty: "Nanotechnology",
    });
  }

  // 131. Superconducting Grammar States
  const superconductingTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("superconducting") ||
      item.key.toLowerCase().includes("resistance") ||
      item.key.toLowerCase().includes("zero")
  );
  if (superconductingTopics.length >= 2) {
    hints.push({
      title: "⚡ Superconducting Grammar States",
      description: "Compare zero-resistance vs normal grammar conductivity",
      topics: superconductingTopics.slice(0, 2),
      reason: "Achieve effortless grammar transmission",
      difficulty: "Superconducting",
    });
  }

  // 132. Plasma Grammar Dynamics
  const plasmaTopics = availableTenses.filter(
    (item) =>
      item.key.toLowerCase().includes("plasma") ||
      item.key.toLowerCase().includes("ionized") ||
      item.key.toLowerCase().includes("state")
  );
  if (plasmaTopics.length >= 2) {
    hints.push({
      title: "🔥 Plasma Grammar Dynamics",
      description: "Compare ionized vs neutral grammar states",
      topics: plasmaTopics.slice(0, 2),
      reason: "Master grammar's highest energy states",
      difficulty: "Plasma",
    });
  }

  // Add fallback hints that will always work by using broader categories

  // Basic Tense Explorations
  const fallbackTenseTopics = availableTenses.filter(
    (item) => item.category === "tenses"
  );
  if (fallbackTenseTopics.length >= 3) {
    for (let i = 0; i < 10; i++) {
      const randomTenses = fallbackTenseTopics
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      hints.push({
        title: `⏰ Time Explorer ${i + 1}`,
        description: "Discover temporal relationships in grammar",
        topics: randomTenses,
        reason: "Master different time expressions",
        difficulty: "Temporal",
      });
    }
  }

  // Grammar Structure Adventures
  const fallbackGrammarTopics = availableTenses.filter(
    (item) => item.category === "grammar"
  );
  if (fallbackGrammarTopics.length >= 3) {
    for (let i = 0; i < 10; i++) {
      const randomGrammar = fallbackGrammarTopics
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      hints.push({
        title: `🏗️ Structure Quest ${i + 1}`,
        description: "Explore grammatical architecture",
        topics: randomGrammar,
        reason: "Build solid grammar foundations",
        difficulty: "Structural",
      });
    }
  }

  // Conditional Logic Challenges
  const conditionalTopics = availableTenses.filter(
    (item) => item.category === "conditionals"
  );
  if (conditionalTopics.length >= 2) {
    for (let i = 0; i < 8; i++) {
      const randomConditionals = conditionalTopics
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      hints.push({
        title: `🤔 Logic Puzzle ${i + 1}`,
        description: "Navigate conditional reasoning",
        topics: randomConditionals,
        reason: "Master hypothetical thinking",
        difficulty: "Logical",
      });
    }
  }

  // Special Case Investigations
  const specialTopics = availableTenses.filter(
    (item) => item.category === "special"
  );
  if (specialTopics.length >= 2) {
    for (let i = 0; i < 8; i++) {
      const randomSpecial = specialTopics
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      hints.push({
        title: `🎯 Special Case ${i + 1}`,
        description: "Investigate unique grammar phenomena",
        topics: randomSpecial,
        reason: "Handle exceptional grammar cases",
        difficulty: "Exceptional",
      });
    }
  }

  // Level-Based Progression Hints
  const levels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  levels.forEach((level) => {
    const levelTopics = availableTenses.filter((item) =>
      item.cefrLevels.includes(level)
    );
    if (levelTopics.length >= 2) {
      for (let i = 0; i < 3; i++) {
        const randomLevelTopics = levelTopics
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);
        hints.push({
          title: `📊 ${level} Challenge ${i + 1}`,
          description: `Compare ${level} level grammar concepts`,
          topics: randomLevelTopics,
          reason: `Master ${level} requirements`,
          difficulty: level,
        });
      }
    }
  });

  // Cross-Category Mega Hints
  const allCategories = ["tenses", "grammar", "conditionals", "special"];
  for (let i = 0; i < 15; i++) {
    const crossCategoryTopics: typeof availableTenses = [];
    allCategories.forEach((category) => {
      const categoryItems = availableTenses.filter(
        (item) => item.category === category
      );
      if (categoryItems.length > 0) {
        crossCategoryTopics.push(
          categoryItems[Math.floor(Math.random() * categoryItems.length)]
        );
      }
    });

    if (crossCategoryTopics.length >= 2) {
      hints.push({
        title: `🌟 Mega Challenge ${i + 1}`,
        description: "Compare concepts across all grammar categories",
        topics: crossCategoryTopics.slice(0, 3),
        reason: "Develop comprehensive grammar understanding",
        difficulty: "Comprehensive",
      });
    }
  }

  // Random Exploration Hints
  for (let i = 0; i < 30; i++) {
    if (availableTenses.length >= 2) {
      const randomTopics = availableTenses
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);
      hints.push({
        title: `🎲 Random Discovery ${i + 1}`,
        description: "Unexpected grammar connections await",
        topics: randomTopics,
        reason: "Discover surprising grammar relationships",
        difficulty: "Exploratory",
      });
    }
  }

  // Triple Topic Adventures
  for (let i = 0; i < 10; i++) {
    if (availableTenses.length >= 3) {
      const tripleTopics = availableTenses
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      hints.push({
        title: `🎯 Triple Adventure ${i + 1}`,
        description: "Three-way grammar comparison challenge",
        topics: tripleTopics,
        reason: "Master complex multi-concept relationships",
        difficulty: "Advanced",
      });
    }
  }

  // Theme-Based Explorations
  const themes = [
    {
      name: "Time Masters",
      emoji: "⏰",
      reason: "Master temporal expressions",
    },
    {
      name: "Structure Builders",
      emoji: "🏗️",
      reason: "Build grammar foundations",
    },
    {
      name: "Logic Navigators",
      emoji: "🧠",
      reason: "Navigate complex reasoning",
    },
    {
      name: "Pattern Detectives",
      emoji: "🔍",
      reason: "Detect hidden patterns",
    },
    {
      name: "Flow Artists",
      emoji: "🌊",
      reason: "Create smooth communication",
    },
    {
      name: "Precision Engineers",
      emoji: "⚙️",
      reason: "Engineer precise expressions",
    },
    {
      name: "Creative Explorers",
      emoji: "🎨",
      reason: "Explore creative possibilities",
    },
    {
      name: "System Architects",
      emoji: "🏛️",
      reason: "Architect language systems",
    },
  ];

  themes.forEach((theme) => {
    for (let i = 0; i < 5; i++) {
      if (availableTenses.length >= 2) {
        const themeTopics = availableTenses
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);
        hints.push({
          title: `${theme.emoji} ${theme.name} ${i + 1}`,
          description: `Themed exploration of grammar concepts`,
          topics: themeTopics,
          reason: theme.reason,
          difficulty: "Themed",
        });
      }
    }
  });

  // Difficulty Progression Series
  const difficultyLevels = [
    { name: "Beginner", levels: ["A1", "A2"], emoji: "🌱" },
    { name: "Intermediate", levels: ["B1", "B2"], emoji: "🌿" },
    { name: "Advanced", levels: ["C1", "C2"], emoji: "🌳" },
  ];

  difficultyLevels.forEach((difficulty) => {
    const difficultyTopics = availableTenses.filter((item) =>
      item.cefrLevels.some((level) => difficulty.levels.includes(level))
    );
    if (difficultyTopics.length >= 2) {
      for (let i = 0; i < 8; i++) {
        const selectedTopics = difficultyTopics
          .sort(() => 0.5 - Math.random())
          .slice(0, 2);
        hints.push({
          title: `${difficulty.emoji} ${difficulty.name} Journey ${i + 1}`,
          description: `Explore ${difficulty.name.toLowerCase()} level concepts`,
          topics: selectedTopics,
          reason: `Build ${difficulty.name.toLowerCase()} level skills`,
          difficulty: difficulty.name,
        });
      }
    }
  });

  // Shuffle all hints and return comprehensive collection
  return hints.sort(() => 0.5 - Math.random());
};




export const difficultyClassMap: Record<string, string> = {
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Moderate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Mixed: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "Exam-Focused": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Communication: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  Personal: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  Academic: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  Professional: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  Creative: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Linguistic: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  "Error-Focused": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  Essential: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  Stylistic: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  Exploratory: "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
  Contextual: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  Register: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300",
  Transitional: "bg-zinc-100 text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300",
  Emotional: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
  Temporal: "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-300",
  Cultural: "bg-stone-100 text-stone-800 dark:bg-stone-900/30 dark:text-stone-300",
  Balance: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
  Genre: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Discourse: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Syntactic: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Semantic: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Cohesion: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "Pragmatic-Function": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  Metalinguistic: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  "Cross-Modal": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  Metaphorical: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
  Information: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  Lexicogrammatical: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  Multimodal: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  Systemic: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  Critical: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  Developmental: "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
  Corpus: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
  Emergent: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-300",
  "Academic-Advanced": "bg-zinc-100 text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300",
  Interactional: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
  Innovative: "bg-neutral-100 text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-300",
  "Cross-Linguistic": "bg-stone-100 text-stone-800 dark:bg-stone-900/30 dark:text-stone-300",
  Epistemic: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
  Historical: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Neurolinguistic: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Digital: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Philosophical: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Therapeutic: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Master: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
};
