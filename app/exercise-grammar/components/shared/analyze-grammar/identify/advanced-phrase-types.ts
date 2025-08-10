import { GrammarElement } from "./types";

/**
 * Identifies advanced phrase types including subjunctive, emphatic, exclamatory,
 * imperative, linking, introductory, emotive, and other sophisticated phrase patterns
 */
export const identifyAdvancedPhraseTypes = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;

  // 1. SUBJUNCTIVE PHRASES
  const subjunctivePhrasePatterns = [
    /\b(I|you|he|she|it|we|they)\s+(suggest|recommend|propose|demand|insist|require|request|ask|advise|urge|command|order|prefer|wish|desire)\s+that\s+\w+\s+\w+\b/gi,
    /\bit\s+is\s+(important|essential|necessary|vital|crucial|imperative|advisable|preferable|desirable|urgent|critical)\s+that\s+\w+\s+\w+\b/gi,
    /\bif\s+(I|you|he|she|it|we|they)\s+were\s+\w+/gi,
    /\b(I|you|he|she|it|we|they)\s+wish\s+\w+\s+were\b/gi,
    /\b(long\s+live|god\s+save|heaven\s+forbid|so\s+be\s+it)\b/gi,
  ];

  subjunctivePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `subjunctive_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "subjunctivePhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a subjunctive phrase expressing hypothetical or non-factual situations.`,
        examples: [
          "I suggest that he go",
          "It's important that she be here",
          "If I were you",
          "Long live the king",
        ],
        rules: [
          "Uses base form of verb regardless of subject",
          "Common after certain verbs and expressions of necessity/importance",
          "Expresses wishes, suggestions, or hypothetical situations",
          "More formal in tone than indicative mood",
        ],
      });
    }
  });

  // 2. EMPHATIC PHRASES
  const emphaticPhrasePatterns = [
    /\b(do|does|did)\s+(like|want|need|think|believe|hope|wish|know|understand|remember|love|hate|enjoy|prefer)\b/gi,
    /\bit\s+(is|was)\s+\w+(?:\s+\w+)*\s+(who|that|which)\s+\w+/gi,
    /\bwhat\s+\w+(?:\s+\w+)*\s+(is|was)\s+\w+/gi,
    /\b(never|rarely|seldom|hardly|scarcely|barely|little|not\s+only|not\s+until|no\s+sooner|only\s+when|only\s+if|only\s+after|only\s+then)\s+\w+/gi,
    /\b(indeed|in\s+fact|certainly|absolutely|definitely|really|truly|actually)\s+\w+/gi,
  ];

  emphaticPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `emphatic_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "emphaticPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is an emphatic phrase that adds emphasis or stress to the statement.`,
        examples: [
          "I do like this",
          "It was John who called",
          "What I need is help",
          "Never have I seen",
          "Indeed, you are right",
        ],
        rules: [
          "Uses auxiliary 'do' for emphasis in affirmative sentences",
          "Cleft sentences divide information for emphasis",
          "Negative adverbs at sentence start cause inversion",
          "Emphatic adverbs strengthen statements",
        ],
      });
    }
  });

  // 3. EXCLAMATORY PHRASES
  const exclamatoryPhrasePatterns = [
    /\b(what\s+(?:a|an)\s+\w+(?:\s+\w+)*|what\s+\w+(?:\s+\w+)*)\!/gi,
    /\bhow\s+\w+(?:\s+\w+)*\!/gi,
    /\b(such\s+(?:a|an)\s+\w+(?:\s+\w+)*|such\s+\w+(?:\s+\w+)*)\!/gi,
    /\b(oh\s+my|good\s+heavens|dear\s+me|my\s+goodness|holy\s+cow|wow|amazing|incredible|unbelievable)\!/gi,
    /\b(alas|hurrah|bravo|oops|ouch|yay|hooray)\!/gi,
  ];

  exclamatoryPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `exclamatory_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "exclamatoryPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is an exclamatory phrase expressing strong emotion or surprise.`,
        examples: [
          "What a beautiful day!",
          "How wonderful!",
          "Such a surprise!",
          "Oh my goodness!",
          "Bravo!",
        ],
        rules: [
          "Often begin with 'what', 'how', or 'such'",
          "Express strong emotions like surprise, admiration, or dismay",
          "Usually end with exclamation marks",
          "May be interjections or modified noun/adjective phrases",
        ],
      });
    }
  });

  // 4. IMPERATIVE PHRASES
  const imperativePhrasePatterns = [
    /\b(please\s+)?(go|come|stop|wait|listen|look|see|watch|help|call|tell|give|take|put|get|make|do|be|have|let|don't|never|always)\s+\w+(?:\s+\w+)*(?:\!|\.)?/gi,
    /\b(let's|let\s+us)\s+\w+(?:\s+\w+)*\b/gi,
    /\b(would\s+you|could\s+you|can\s+you|will\s+you)\s+(please\s+)?\w+(?:\s+\w+)*\b/gi,
  ];

  imperativePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `imperative_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "imperativePhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is an imperative phrase giving commands, instructions, or requests.`,
        examples: [
          "Please sit down",
          "Don't go there",
          "Let's start",
          "Would you help me",
          "Be quiet!",
        ],
        rules: [
          "Uses base form of verb without explicit subject",
          "Can be commands, requests, or suggestions",
          "May include 'please' for politeness",
          "Let's constructions include the speaker",
        ],
      });
    }
  });

  // 5. LINKING PHRASES
  const linkingPhrasePatterns = [
    /\b(in\s+addition\s+to|apart\s+from|aside\s+from|except\s+for|other\s+than|rather\s+than|instead\s+of|as\s+well\s+as|along\s+with|together\s+with|not\s+to\s+mention|let\s+alone)\s+\w+/gi,
    /\b(that\s+is\s+to\s+say|in\s+other\s+words|to\s+put\s+it\s+differently|namely|specifically|particularly|especially|more\s+precisely)\s+\w+/gi,
    /\b(on\s+the\s+one\s+hand|on\s+the\s+other\s+hand|by\s+contrast|in\s+contrast|conversely|alternatively|meanwhile|at\s+the\s+same\s+time)\s+\w+/gi,
  ];

  linkingPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `linking_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "linkingPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a linking phrase that connects ideas and shows relationships between concepts.`,
        examples: [
          "In addition to studying",
          "Rather than waiting",
          "That is to say",
          "On the other hand",
          "By contrast",
        ],
        rules: [
          "Connect ideas and show logical relationships",
          "Can show addition, contrast, clarification, or alternatives",
          "Often appear at the beginning of clauses or sentences",
          "Help create coherent and flowing text",
        ],
      });
    }
  });

  // 6. INTRODUCTORY PHRASES
  const introductoryPhrasePatterns = [
    /\b(to\s+begin\s+with|first\s+of\s+all|in\s+the\s+first\s+place|to\s+start\s+with|initially|at\s+first|first\s+and\s+foremost)\b/gi,
    /\b(speaking\s+of|talking\s+about|as\s+for|as\s+regards|regarding|concerning|with\s+respect\s+to|with\s+regard\s+to|in\s+terms\s+of)\s+\w+/gi,
    /\b(generally\s+speaking|broadly\s+speaking|strictly\s+speaking|frankly\s+speaking|honestly\s+speaking|personally\s+speaking)\b/gi,
    /\b(by\s+the\s+way|incidentally|as\s+a\s+matter\s+of\s+fact|in\s+fact|actually|believe\s+it\s+or\s+not)\b/gi,
  ];

  introductoryPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `introductory_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "introductoryPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is an introductory phrase that introduces topics or provides context.`,
        examples: [
          "To begin with",
          "Speaking of books",
          "Generally speaking",
          "By the way",
          "As a matter of fact",
        ],
        rules: [
          "Introduce new topics or shift focus",
          "Often appear at the beginning of sentences",
          "Set the context for what follows",
          "May express the speaker's attitude or perspective",
        ],
      });
    }
  });

  // 7. EMOTIVE PHRASES
  const emotivePhrasePatterns = [
    /\b(I'm\s+(?:so|really|very|extremely|incredibly)\s+(?:happy|sad|excited|worried|confused|surprised|disappointed|pleased|angry|frustrated|grateful|sorry|afraid|concerned|delighted|amazed|shocked|proud|ashamed))\b/gi,
    /\b(what\s+a\s+(?:shame|pity|relief|surprise|pleasure|honor|privilege|nightmare|disaster|miracle|blessing|tragedy))\b/gi,
    /\b(thank\s+(?:god|goodness|heavens)|oh\s+(?:no|yes|dear|my)|good\s+(?:lord|grief)|for\s+(?:heaven's\s+sake|crying\s+out\s+loud|pete's\s+sake))\b/gi,
    /\b(I\s+(?:can't\s+believe|hope\s+so|hope\s+not|doubt\s+it|suppose\s+so|guess\s+so|think\s+so|expect\s+so))\b/gi,
  ];

  emotivePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `emotive_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "emotivePhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is an emotive phrase expressing feelings, emotions, or personal reactions.`,
        examples: [
          "I'm so happy",
          "What a shame",
          "Thank goodness",
          "I can't believe",
          "Good grief",
        ],
        rules: [
          "Express emotions, feelings, or personal reactions",
          "Often include intensifiers (so, very, really)",
          "May use exclamatory structures",
          "Can be positive, negative, or neutral emotionally",
        ],
      });
    }
  });

  // 8. FIXED COLLOCATIONS
  const fixedCollocationPatterns = [
    /\b(make\s+(?:a\s+decision|a\s+mistake|progress|sense|money|friends|an\s+effort|a\s+difference|a\s+choice|a\s+plan))\b/gi,
    /\b(take\s+(?:a\s+break|a\s+chance|a\s+risk|time|care|place|responsibility|action|advantage|part))\b/gi,
    /\b(do\s+(?:homework|business|research|exercise|damage|harm|good|justice|your\s+best|the\s+dishes))\b/gi,
    /\b(have\s+(?:a\s+good\s+time|trouble|difficulty|experience|an\s+idea|a\s+problem|a\s+meeting|a\s+party|a\s+rest))\b/gi,
    /\b(pay\s+(?:attention|a\s+visit|a\s+compliment|the\s+price|respect|tribute)|draw\s+(?:attention|a\s+conclusion|a\s+picture))\b/gi,
    /\b(break\s+(?:the\s+news|the\s+law|a\s+promise|someone's\s+heart)|catch\s+(?:a\s+cold|fire|someone's\s+attention))\b/gi,
  ];

  fixedCollocationPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `fixed_collocation_${elementId++}`,
        text: match[0].trim(),
        type: "fixedCollocation",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a fixed collocation - words that commonly occur together in a predictable way.`,
        examples: [
          "make a decision",
          "take a break",
          "do homework",
          "have trouble",
          "pay attention",
          "break the news",
        ],
        rules: [
          "Conventional combinations of words",
          "Sound natural to native speakers",
          "Cannot usually substitute with synonyms",
          "Must be learned as complete units",
        ],
      });
    }
  });

  // 9. REDUCED RELATIVE CLAUSES
  const reducedRelativeClausePatterns = [
    /\b\w+\s+(made|written|taken|given|bought|sold|found|seen|heard|built|designed|created|painted|sung|played|directed)\s+(?:by\s+\w+|in\s+\w+|at\s+\w+|for\s+\w+)\b/gi,
    /\b\w+\s+(working|living|studying|sitting|standing|walking|running|lying|sleeping|teaching|learning)\s+(?:in|on|at|with|for)\s+\w+\b/gi,
    /\b\w+\s+(wearing|carrying|holding|having|showing|displaying)\s+\w+(?:\s+\w+)*\b/gi,
    /\bthe\s+(?:man|woman|person|student|teacher|doctor|lawyer)\s+(responsible\s+for|interested\s+in|involved\s+in|good\s+at|afraid\s+of)\s+\w+\b/gi,
  ];

  reducedRelativeClausePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `reduced_relative_clause_${elementId++}`,
        text: match[0].trim(),
        type: "reducedRelativeClause",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a reduced relative clause with the relative pronoun and auxiliary verb omitted.`,
        examples: [
          "the book written by Shakespeare",
          "the man sitting there",
          "the girl wearing red",
          "the person responsible for this",
        ],
        rules: [
          "Relative pronoun (who, which, that) is omitted",
          "Auxiliary verbs may be omitted",
          "Still functions to modify nouns",
          "More concise than full relative clauses",
        ],
      });
    }
  });

  // 10. CLEFT SENTENCE PHRASES
  const cleftSentencePhrasePatterns = [
    /\bit\s+(?:is|was)\s+\w+(?:\s+\w+)*\s+(?:who|that|which|whom)\s+\w+/gi,
    /\bwhat\s+\w+(?:\s+\w+)*\s+(?:is|was|are|were)\s+\w+/gi,
    /\ball\s+(?:that|which)\s+\w+(?:\s+\w+)*\s+(?:is|was|are|were)\s+\w+/gi,
    /\bthe\s+(?:thing|person|place|time|way|reason)\s+(?:that|which|who|when|where|why)\s+\w+/gi,
  ];

  cleftSentencePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `cleft_sentence_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "cleftSentencePhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a cleft sentence phrase that emphasizes particular information by splitting it into two clauses.`,
        examples: [
          "It was John who called",
          "What I need is help",
          "All that matters is love",
          "The thing that worries me is...",
        ],
        rules: [
          "Divides a simple sentence into two parts for emphasis",
          "The emphasized element comes after 'it is/was' or 'what'",
          "Creates focus on specific information",
          "Common in both speech and writing",
        ],
      });
    }
  });

  // 11. PASSIVE VOICE PHRASES
  const passiveVoicePhrasePatterns = [
    /\b(?:am|is|are|was|were|be|been|being)\s+\w+(?:ed|en|ne|d|t)\b/gi,
    /\b(?:have|has|had)\s+been\s+\w+(?:ed|en|ne|d|t)\b/gi,
    /\b(?:will|would|can|could|may|might|must|should)\s+be\s+\w+(?:ed|en|ne|d|t)\b/gi,
    /\bget\s+\w+(?:ed|en|ne|d|t)\b/gi,
  ];

  passiveVoicePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `passive_voice_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "passiveVoicePhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a passive voice phrase where the subject receives the action.`,
        examples: [
          "was written",
          "has been completed",
          "will be finished",
          "got broken",
        ],
        rules: [
          "Subject receives the action rather than performing it",
          "Formed with auxiliary verb + past participle",
          "Agent may be omitted or introduced with 'by'",
          "Used when focus is on the action or result",
        ],
      });
    }
  });

  // 12. MODAL VERB PHRASES
  const modalVerbPhrasePatterns = [
    /\b(can|could|may|might|will|would|shall|should|must|ought\s+to|have\s+to|need\s+to|be\s+able\s+to|be\s+going\s+to|used\s+to)\s+\w+(?:\s+\w+)*\b/gi,
    /\b(had\s+better|would\s+rather|would\s+prefer|had\s+to|didn't\s+have\s+to|don't\s+have\s+to)\s+\w+\b/gi,
  ];

  modalVerbPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `modal_verb_phrase_${elementId++}`,
        text: match[0].trim(),
        type: "modalVerbPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a modal verb phrase expressing ability, possibility, necessity, or attitude.`,
        examples: [
          "can swim",
          "must go",
          "should study",
          "ought to help",
          "be able to understand",
          "would rather stay",
        ],
        rules: [
          "Express various meanings: ability, possibility, necessity, permission, obligation",
          "Followed by bare infinitive (base form of verb)",
          "Do not change form for different subjects",
          "Cannot be used together (*will can go)",
        ],
      });
    }
  });

  return elements;
};
