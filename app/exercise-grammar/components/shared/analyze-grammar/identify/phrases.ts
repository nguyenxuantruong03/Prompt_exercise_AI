import type { GrammarElement } from "./types";
import {
  analyzeTenseInfo,
  identifyTimeType,
} from "./helper-functions";

export const identifyPhrases = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;

  // 1. NOUN PHRASES - CORRECTED: More specific patterns to avoid capturing clauses
  const nounPhrasePatterns = [
    // SIMPLE DETERMINER + NOUN combinations (most basic noun phrases)
    /\b(the|a|an|this|that|these|those|my|your|his|her|its|our|their|some|many|few|several|all|every|each|both)\s+(?:very\s+|quite\s+|rather\s+|extremely\s+|incredibly\s+|remarkably\s+)?(?:big|small|large|little|huge|tiny|beautiful|ugly|good|bad|new|old|young|modern|ancient|important|interesting|difficult|easy|expensive|cheap|fast|slow|hot|cold|red|blue|green|black|white|tall|short|long|wide|narrow|thick|thin|heavy|light|strong|weak|smart|intelligent|stupid|kind|nice|mean|happy|sad|angry|excited|tired|busy|free|rich|poor|famous|popular|special|normal|strange|usual|unusual|serious|funny|quiet|loud|clean|dirty|safe|dangerous|healthy|sick|fresh|stale|sharp|dull|smooth|rough|soft|hard|sweet|sour|bitter|spicy)?\s*\w+(?:s|es|ies)?\b/gi,

    // PROPER NOUNS (names, places, etc.)
    /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,3}\b/g,

    // QUANTIFIED NOUNS (numbers + nouns)
    /\b(?:one|two|three|four|five|six|seven|eight|nine|ten|\d+)\s+\w+(?:s|es|ies)?\b/gi,
  ];

  nounPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 1) {
        elements.push({
          id: `noun_phrase_${elementId++}`,
          text: match[0].trim(),
          type: "nounPhrase",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${match[0].trim()}" is a noun phrase consisting of a noun and its modifiers.`,
          examples: [
            "the big house",
            "by tomorrow morning",
            "in the beautiful garden",
            "for the purpose of learning",
            "last night",
            "last year",
            "next week",
            "every morning",
            "three times a day",
            "from time to time",
            "once in a while",
            "day after day",
            "the previous evening",
            "the following month",
            "a long time ago",
            "in the near future",
            "during the summer",
            "throughout the year",
          ],
          rules: [
            "Contains a head noun and optional modifiers",
            "Can include articles, adjectives, and determiners",
            "May have post-modifiers like prepositional phrases or relative clauses",
            "Functions as a single unit in the sentence",
          ],
        });
      }
    }
  });

  // 1.5. COORDINATED VERB PHRASES - Verbs connected by "and", "or", "but"
  const coordinatedVerbPatterns = [
    // Coordinated verbs: verb + and/or/but + verb (with optional objects)
    /\b((?:go|went|come|came|sit|sat|stand|stood|walk|walked|run|ran|eat|ate|drink|drank|watch|watched|listen|listened|read|read|write|wrote|play|played|work|worked|study|studied|sleep|slept|wake|woke|drive|drove|travel|traveled|visit|visited|cook|cooked|clean|cleaned|exercise|exercised|shop|shopped|talk|talked|speak|spoke|sing|sang|dance|danced|laugh|laughed|cry|cried|smile|smiled|think|thought|learn|learned|teach|taught|help|helped|try|tried|start|started|stop|stopped|finish|finished|continue|continued|change|changed|move|moved|stay|stayed|leave|left|return|returned|arrive|arrived)(?:\s+\w+)*)\s+(and|or|but)\s+((?:go|come|sit|stand|walk|run|eat|drink|watch|listen|read|write|play|work|study|sleep|wake|drive|travel|visit|cook|clean|exercise|shop|talk|speak|sing|dance|laugh|cry|smile|think|learn|teach|help|try|start|stop|finish|continue|change|move|stay|leave|return|arrive)(?:\s+\w+)*)\b/gi,
  ];

  coordinatedVerbPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `coordinated_verb_${elementId++}`,
        text: match[0].trim(),
        type: "verbPhrase",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0].trim()}" is a coordinated verb phrase with verbs connected by "${
          match[2]
        }".`,
        examples: [
          "sit and watch TV",
          "read and write",
          "cook and clean",
          "work or study",
        ],
        rules: [
          "Coordinated verbs are connected by conjunctions (and, or, but)",
          "Both parts must be verbs or verb phrases",
          "Often share the same subject",
        ],
      });
    }
  });

  // 2. VERB PHRASES - All tense and aspect combinations
  const verbPhrasePatterns = [
    // Perfect tenses with passive
    /\b(have|has|had)\s+been\s+\w+(?:ed|en|ne|d|t)\b/gi,
    // Perfect continuous
    /\b(have|has|had)\s+been\s+\w+ing\b/gi,
    // Perfect tenses
    /\b(have|has|had)\s+(?:\w+(?:ed|en|ne|d|t)|been|done|gone|come|seen|taken|given|made|said|told|found|thought|brought|bought|caught|taught|fought|sought|wrought)\b/gi,
    // Continuous tenses
    /\b(am|is|are|was|were)\s+(?:being\s+)?\w+ing\b/gi,
    // Future perfect continuous
    /\b(will|shall)\s+have\s+been\s+\w+ing\b/gi,
    // Future perfect
    /\b(will|shall)\s+have\s+\w+(?:ed|en|ne|d|t)\b/gi,
    // Future continuous
    /\b(will|shall)\s+be\s+\w+ing\b/gi,
    // Future tenses
    /\b(will|shall|would|could|might|may|should|must)\s+(?:have\s+)?(?:been\s+)?\w+(?:ing|ed|en)?\b/gi,
    // Modal + verb combinations
    /\b(can|cannot|can't|could|couldn't|may|might|must|mustn't|should|shouldn't|would|wouldn't|will|won't|shall|shan't)\s+(?:not\s+)?(?:be\s+)?(?:have\s+)?\w+(?:ing|ed|en)?\b/gi,
    // Be + adjective/participle
    /\b(am|is|are|was|were|be|been|being)\s+(?:very\s+|quite\s+|rather\s+|extremely\s+)?\w+(?:ed|ing|ly)?\b/gi,
  ];

  verbPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 1) {
        const tenseInfo = analyzeTenseInfo(match[0]);
        elements.push({
          id: `verb_phrase_${elementId++}`,
          text: match[0].trim(),
          type: "verbPhrase",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${match[0].trim()}" is a verb phrase expressing tense, aspect, voice, and mood.`,
          examples: [
            "has been working",
            "will be finished",
            "should have done",
            "is being examined",
          ],
          rules: [
            "Contains a main verb and auxiliary verbs",
            "Expresses tense, aspect, voice, and mood",
            "Functions as the predicate of the sentence",
            "Can include modal verbs for different meanings",
          ],
          tenseInfo: {
            ...tenseInfo,
            confidence: 0.8,
          },
        });
      }
    }
  });

  // 3. INFINITIVE PHRASES
  const infinitivePhrasePatterns = [
    // To + infinitive with objects/complements
    /\bto\s+(?:be\s+)?(?:have\s+)?\w+(?:\s+(?:the\s+|a\s+|an\s+|this\s+|that\s+|my\s+|your\s+|his\s+|her\s+|its\s+|our\s+|their\s+|some\s+)?\w+(?:\s+\w+)*)*(?:\s+(?:to|for|with|in|on|at|by|from)\s+\w+(?:\s+\w+)*)*\b/gi,
    // In order to, so as to
    /\b(?:in\s+order\s+to|so\s+as\s+to|in\s+an\s+attempt\s+to|in\s+an\s+effort\s+to)\s+\w+(?:\s+\w+)*\b/gi,
  ];

  infinitivePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 1) {
        elements.push({
          id: `infinitive_phrase_${elementId++}`,
          text: match[0].trim(),
          type: "infinitivePhrase",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${match[0].trim()}" is an infinitive phrase expressing purpose or intention.`,
          examples: [
            "to buy groceries",
            "in order to succeed",
            "to be considered",
          ],
          rules: [
            "Begins with 'to' followed by a verb",
            "Can express purpose, intention, or result",
            "May include objects and modifiers",
            "Functions as noun, adjective, or adverb",
          ],
        });
      }
    }
  });

  // 4. GERUND PHRASES
  const gerundPhrasePatterns = [
    // Gerund as subject/object with complements
    /\b\w+ing\s+(?:(?:the\s+|a\s+|an\s+|this\s+|that\s+|my\s+|your\s+|his\s+|her\s+|its\s+|our\s+|their\s+|some\s+)?\w+(?:\s+\w+)*\s*)+(?:\s+(?:in|on|at|with|for|by|from|to|about|during|after|before)\s+\w+(?:\s+\w+)*)*\b/gi,
    // After prepositions
    /\b(?:by|after|before|without|instead\s+of|in\s+spite\s+of|because\s+of|for|about|of)\s+\w+ing(?:\s+\w+)*\b/gi,
  ];

  gerundPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 1) {
        elements.push({
          id: `gerund_phrase_${elementId++}`,
          text: match[0].trim(),
          type: "gerundPhrase",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${match[0].trim()}" is a gerund phrase functioning as a noun.`,
          examples: [
            "reading books",
            "by working hard",
            "instead of complaining",
          ],
          rules: [
            "Begins with a gerund (-ing form)",
            "Functions as a noun in the sentence",
            "Can include objects and modifiers",
            "Often follows prepositions",
          ],
        });
      }
    }
  });

  // 5. PARTICIPIAL PHRASES
  const participialPhrasePatterns = [
    // Present participial phrases
    /\b\w+ing(?:\s+(?:the\s+|a\s+|an\s+|this\s+|that\s+|my\s+|your\s+|his\s+|her\s+|its\s+|our\s+|their\s+|some\s+)?\w+(?:\s+\w+)*)*(?:\s*,|\s+(?:the\s+|a\s+|an\s+|this\s+|that\s+|my\s+|your\s+|his\s+|her\s+|its\s+|our\s+|their\s+)?\w+)/gi,
    // Past participial phrases (passive)
    /\b\w+(?:ed|en|ne|d|t)\s+(?:by\s+)?(?:(?:the\s+|a\s+|an\s+|this\s+|that\s+|my\s+|your\s+|his\s+|her\s+|its\s+|our\s+|their\s+|some\s+)?\w+(?:\s+\w+)*\s*)+/gi,
    // Having + past participle
    /\bhaving\s+(?:been\s+)?\w+(?:ed|en|ne|d|t)(?:\s+\w+(?:\s+\w+)*)*\b/gi,
  ];

  participialPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 1) {
        elements.push({
          id: `participial_phrase_${elementId++}`,
          text: match[0].trim(),
          type: "participialPhrase",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${match[0].trim()}" is a participial phrase modifying a noun.`,
          examples: [
            "walking slowly",
            "having finished the work",
            "written by the author",
          ],
          rules: [
            "Begins with a present or past participle",
            "Functions as an adjective modifying nouns",
            "Can show time, cause, or manner",
            "Often set off by commas",
          ],
        });
      }
    }
  });

  // 6. ADJECTIVE PHRASES
  const adjectivePhrasePatterns = [
    // Intensified adjectives
    /\b(very|quite|rather|extremely|incredibly|remarkably|particularly|exceptionally|extraordinarily|somewhat|fairly|pretty|really|truly|absolutely|completely|totally|entirely|perfectly|utterly|thoroughly|highly|deeply|particularly|especially)\s+\w+(?:\s+(?:and|or)\s+\w+)*\b/gi,
    // Adjectives with prepositional complements
    /\b(?:afraid|aware|capable|fond|proud|sure|certain|confident|conscious|guilty|jealous|responsible|tired|sick|full|empty|rich|poor|different|similar|familiar|popular|famous|successful|interested|bored|excited|worried|concerned|satisfied|disappointed|pleased|surprised|shocked|amazed|confused|puzzled|curious|suspicious|nervous|anxious|calm|relaxed|comfortable|uncomfortable)\s+(?:of|about|with|in|for|from|to|at|by)\s+(?:the\s+|a\s+|an\s+|this\s+|that\s+|my\s+|your\s+|his\s+|her\s+|its\s+|our\s+|their\s+)?\w+(?:\s+\w+)*\b/gi,
    // Too/enough constructions
    /\btoo\s+\w+\s+(?:to\s+\w+|for\s+\w+)\b/gi,
    /\b\w+\s+enough\s+(?:to\s+\w+|for\s+\w+)\b/gi,
  ];

  adjectivePhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 1) {
        elements.push({
          id: `adjective_phrase_${elementId++}`,
          text: match[0].trim(),
          type: "adjectivePhrase",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${match[0].trim()}" is an adjective phrase with an adjective as its head word.`,
          examples: [
            "very beautiful",
            "afraid of spiders",
            "too difficult to understand",
            "good enough to eat",
          ],
          rules: [
            "Head word is an adjective",
            "Can be modified by degree adverbs",
            "May include prepositional complements",
            "Can be predicative or attributive",
          ],
        });
      }
    }
  });

  // 7. ADVERB PHRASES - ENHANCED with comprehensive adverbs of frequency
  const adverbPhrasePatterns = [
    // Degree adverbs + adverbs
    /\b(very|quite|rather|extremely|incredibly|remarkably|particularly|exceptionally|extraordinarily|somewhat|fairly|pretty|really|truly|absolutely|completely|totally|entirely|perfectly|exactly|precisely|approximately|roughly|almost|nearly|hardly|scarcely|barely|just|only|even|still|already|yet|always|never|sometimes|often|frequently|occasionally|rarely|seldom|usually|normally|generally|typically|naturally|obviously|clearly|certainly|definitely|probably|possibly|perhaps|maybe)\s+\w+ly\b/gi,

    // COMPREHENSIVE ADVERBS OF FREQUENCY - Single words and phrases
    /\b(always|never|usually|often|frequently|sometimes|occasionally|rarely|seldom|hardly\s+ever|scarcely\s+ever|almost\s+never|almost\s+always|generally|normally|typically|regularly|constantly|continuously|repeatedly|forever|eternally|perpetually|invariably|unfailingly)\b/gi,
    /\b(every\s+(?:day|night|week|month|year|morning|afternoon|evening|weekend|time|now\s+and\s+then|so\s+often))\b/gi,
    /\b(once\s+(?:in\s+a\s+while|a\s+day|a\s+week|a\s+month|a\s+year|or\s+twice|more))\b/gi,
    /\b(twice\s+(?:a\s+day|a\s+week|a\s+month|a\s+year|as\s+often))\b/gi,
    /\b(three\s+times\s+(?:a\s+day|a\s+week|a\s+month|a\s+year))\b/gi,
    /\b(\d+\s+times\s+(?:a\s+day|a\s+week|a\s+month|a\s+year|per\s+day|per\s+week|per\s+month|per\s+year))\b/gi,
    /\b(from\s+time\s+to\s+time|every\s+now\s+and\s+then|every\s+so\s+often|once\s+in\s+a\s+blue\s+moon)\b/gi,
    /\b(more\s+often\s+than\s+not|most\s+of\s+the\s+time|all\s+the\s+time|half\s+the\s+time)\b/gi,
    /\b(on\s+(?:rare\s+)?occasions?|on\s+a\s+(?:regular|daily|weekly|monthly|yearly)\s+basis)\b/gi,
    /\b(day\s+(?:in\s+and\s+)?day\s+out|day\s+after\s+day|week\s+after\s+week|month\s+after\s+month|year\s+after\s+year)\b/gi,
    /\b(around\s+the\s+clock|24\/7|twenty-four\s+seven|night\s+and\s+day)\b/gi,

    // Comparative adverb phrases
    /\b(?:more|less)\s+\w+ly\s+than\s+\w+(?:\s+\w+)*\b/gi,
    /\bas\s+\w+ly\s+as\s+\w+(?:\s+\w+)*\b/gi,

    // Time expressions as adverb phrases - ENHANCED
    /\b(right\s+now|just\s+now|at\s+the\s+moment|for\s+the\s+time\s+being|from\s+time\s+to\s+time|once\s+in\s+a\s+while|every\s+now\s+and\s+then|sooner\s+or\s+later|as\s+soon\s+as\s+possible|in\s+no\s+time|before\s+long|in\s+the\s+near\s+future|in\s+the\s+long\s+run|for\s+the\s+foreseeable\s+future|day\s+by\s+day|step\s+by\s+step|little\s+by\s+little|more\s+and\s+more|over\s+and\s+over|again\s+and\s+again)\b/gi,
    /\b(at\s+(?:first|last|once|times|length)|in\s+the\s+(?:beginning|end|meantime|past|future)|on\s+(?:time|schedule|occasion)|for\s+(?:now|good|ever|life))\b/gi,
    /\b(by\s+(?:now|then|chance|accident|mistake|design|far|all\s+means))\b/gi,
    /\b(so\s+far|thus\s+far|up\s+to\s+now|up\s+until\s+now|as\s+yet|to\s+date|from\s+now\s+on|henceforth|thereafter|afterwards|meanwhile|simultaneously)\b/gi,

    // Manner and degree adverb phrases
    /\b(in\s+(?:a\s+(?:hurry|rush|way|manner|sense)|general|particular|detail|brief|short|fact|reality|theory|practice))\b/gi,
    /\b(by\s+(?:hand|heart|chance|accident|mistake|design|far|all\s+means|no\s+means))\b/gi,
    /\b(on\s+(?:purpose|accident|foot|time|schedule|average|the\s+whole|second\s+thought))\b/gi,
    /\b(at\s+(?:random|will|ease|peace|last|first|once|times|length|most|least))\b/gi,
  ];

  adverbPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 1) {
        elements.push({
          id: `adverb_phrase_${elementId++}`,
          text: match[0].trim(),
          type: "adverbPhrase",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${match[0].trim()}" is an adverb phrase modifying verbs, adjectives, or other adverbs.`,
          examples: [
            "very quickly",
            "more carefully than before",
            "from time to time",
            "as soon as possible",
            "always",
            "never",
            "usually",
            "often",
            "frequently",
            "sometimes",
            "occasionally",
            "rarely",
            "seldom",
            "hardly ever",
            "almost never",
            "every day",
            "once a week",
            "twice a month",
            "three times a year",
            "once in a while",
            "every now and then",
            "more often than not",
            "all the time",
            "day in and day out",
            "around the clock",
            "24/7",
          ],
          rules: [
            "Head word is an adverb",
            "Can be modified by degree adverbs",
            "Shows manner, time, place, degree, etc.",
            "Position can vary for emphasis",
          ],
        });
      }
    }
  });

  // 8. PREPOSITIONAL PHRASES - Complex and simple
  const prepositionalPhrasePatterns = [
    // Complex prepositional phrases with nested structures
    /\b(in\s+front\s+of|in\s+back\s+of|on\s+top\s+of|at\s+the\s+bottom\s+of|in\s+the\s+middle\s+of|in\s+spite\s+of|because\s+of|instead\s+of|according\s+to|due\s+to|owing\s+to|thanks\s+to|with\s+regard\s+to|in\s+terms\s+of|by\s+means\s+of|for\s+the\s+purpose\s+of|in\s+the\s+event\s+of|in\s+the\s+case\s+of|as\s+a\s+result\s+of|on\s+behalf\s+of|in\s+addition\s+to|as\s+opposed\s+to|in\s+contrast\s+to|with\s+respect\s+to|in\s+relation\s+to|in\s+connection\s+with|in\s+accordance\s+with|in\s+compliance\s+with)\s+(?:the\s+|a\s+|an\s+|this\s+|that\s+|my\s+|your\s+|his\s+|her\s+|its\s+|our\s+|their\s+|some\s+)?\w+(?:\s+\w+)*\b/gi,
    // Standard prepositional phrases
    /\b(in|on|at|by|for|with|without|through|during|before|after|since|until|under|over|above|below|beside|behind|near|next\s+to|far\s+from|close\s+to|up\s+to|down\s+to|out\s+of|away\s+from|toward|towards|into|onto|across|along|around|between|among|against|except|besides|despite|throughout|within|beyond|beneath|underneath)\s+(?:the\s+|a\s+|an\s+|this\s+|that\s+|my\s+|your\s+|his\s+|her\s+|its\s+|our\s+|their\s+|some\s+)?\w+(?:\s+\w+)*\b/gi,
  ];

  prepositionalPhrasePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 1) {
        elements.push({
          id: `prep_phrase_${elementId++}`,
          text: match[0].trim(),
          type: "prepositionalPhrase",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${match[0].trim()}" is a prepositional phrase showing relationships in the sentence.`,
          examples: [
            "in the house",
            "according to the report",
            "in spite of difficulties",
            "by means of technology",
          ],
          rules: [
            "Starts with a preposition",
            "Contains a noun or pronoun as object",
            "Functions as adjective or adverb",
            "Can be simple or complex with multiple prepositions",
          ],
        });
      }
    }
  });

  // 9. TIME EXPRESSION PHRASES - Specific dedicated patterns for comprehensive time coverage
  const timeExpressionPatterns = [
    // DURATION PHRASES - for X time/period (HIGH PRIORITY - most specific)
    /\b(for\s+(?:the\s+past\s+|the\s+last\s+|over\s+|almost\s+|about\s+|around\s+|nearly\s+|more\s+than\s+|less\s+than\s+|exactly\s+|precisely\s+|roughly\s+|approximately\s+)?(?:\d+|a\s+few|many|several|some|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)\s+(?:days?|weeks?|months?|years?|hours?|minutes?|seconds?|decades?|centuries?))\b/gi,
    /\b(for\s+(?:a\s+(?:long\s+time|while|moment|second|minute|hour|day|week|month|year|decade|century)|ages?|hours?|days?|weeks?|months?|years?|decades?|centuries?))\b/gi,
    // Specific comprehensive past time patterns
    /\b(last\s+(?:night|evening|morning|afternoon|week|weekend|month|year|decade|century|time|moment|second|minute|hour|day|summer|winter|spring|autumn|fall|christmas|holiday|birthday|tuesday|wednesday|thursday|friday|saturday|sunday|monday|january|february|march|april|may|june|july|august|september|october|november|december))\b/gi,
    /\b(yesterday\s+(?:morning|afternoon|evening|night))\b/gi,
    /\b(the\s+(?:previous|past|other|preceding)\s+(?:night|evening|morning|afternoon|week|month|year|decade|century|weekend|summer|winter|spring|autumn|fall|day|tuesday|wednesday|thursday|friday|saturday|sunday|monday))\b/gi,
    /\b(the\s+day\s+before\s+yesterday|the\s+night\s+before\s+last|the\s+week\s+before\s+last)\b/gi,
    /\b(\d+\s+(?:days?|weeks?|months?|years?|hours?|minutes?|seconds?)\s+ago)\b/gi,
    /\b(a\s+(?:few|couple\s+of|long\s+time|while)\s+ago|ages?\s+ago|long\s+ago|not\s+long\s+ago)\b/gi,

    // Specific comprehensive future time patterns
    /\b(next\s+(?:week|weekend|month|year|decade|century|time|moment|second|minute|hour|day|summer|winter|spring|autumn|fall|christmas|holiday|birthday|tuesday|wednesday|thursday|friday|saturday|sunday|monday|january|february|march|april|may|june|july|august|september|october|november|december))\b/gi,
    /\b(tomorrow\s+(?:morning|afternoon|evening|night))\b/gi,
    /\b(the\s+(?:following|coming|upcoming)\s+(?:week|month|year|decade|weekend|summer|winter|spring|autumn|fall|day|tuesday|wednesday|thursday|friday|saturday|sunday|monday))\b/gi,
    /\b(the\s+day\s+after\s+tomorrow|the\s+week\s+after\s+next|the\s+month\s+after\s+next)\b/gi,
    /\b(in\s+(?:a\s+(?:few|couple\s+of|long\s+time|while|moment|second|minute|hour|day|week|month|year)|the\s+(?:near|distant)\s+future))\b/gi,
    /\b(in\s+\d+\s+(?:days?|weeks?|months?|years?|hours?|minutes?|seconds?)(?:\s+time)?)\b/gi,

    // Specific frequency and repetition patterns
    /\b(every\s+(?:day|night|week|month|year|morning|afternoon|evening|weekend|tuesday|wednesday|thursday|friday|saturday|sunday|monday|hour|minute|second))\b/gi,
    /\b(once\s+(?:in\s+a\s+while|a\s+day|a\s+week|a\s+month|a\s+year|or\s+twice|more))\b/gi,
    /\b(twice\s+(?:a\s+day|a\s+week|a\s+month|a\s+year|as\s+often))\b/gi,
    /\b(three\s+times\s+(?:a\s+day|a\s+week|a\s+month|a\s+year))\b/gi,
    /\b(\d+\s+times\s+(?:a\s+day|a\s+week|a\s+month|a\s+year|per\s+day|per\s+week|per\s+month|per\s+year))\b/gi,
    /\b(day\s+(?:in\s+and\s+)?day\s+out|day\s+after\s+day|week\s+after\s+week|month\s+after\s+month|year\s+after\s+year)\b/gi,
    /\b(from\s+time\s+to\s+time|every\s+now\s+and\s+then|every\s+so\s+often|once\s+in\s+a\s+blue\s+moon)\b/gi,
    /\b(more\s+often\s+than\s+not|most\s+of\s+the\s+time|all\s+the\s+time|half\s+the\s+time)\b/gi,
    /\b(around\s+the\s+clock|24\/7|twenty-four\s+seven|night\s+and\s+day)\b/gi,

    // Specific duration patterns
    /\b(for\s+(?:a\s+(?:long\s+time|while|moment|second|minute|hour|day|week|month|year)|ages?|hours?|days?|weeks?|months?|years?|decades?|centuries?))\b/gi,
    /\b(during\s+(?:the\s+)?(?:day|night|morning|afternoon|evening|week|weekend|month|year|summer|winter|spring|autumn|fall|holiday|vacation|christmas|birthday))\b/gi,
    /\b(throughout\s+(?:the\s+)?(?:day|night|week|month|year|decade|century|process|journey|life|career))\b/gi,
    /\b(all\s+(?:day|night|week|month|year|morning|afternoon|evening|weekend|summer|winter|spring|autumn|fall)\s+long)\b/gi,
    /\b(since\s+(?:yesterday|last\s+\w+|the\s+\w+|childhood|birth|then|\d+))\b/gi,
    /\b(until\s+(?:now|then|recently|tomorrow|next\s+\w+|the\s+\w+))\b/gi,
  ];

  timeExpressionPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 0) {
        const matchText = match[0].trim();

        // Skip if this is a time clause with finite verb (e.g., "by the time I arrived")
        if (
          /\bby\s+the\s+time\s+(?:I|you|he|she|it|we|they|[A-Z]\w+)\s+(?:am|is|are|was|were|will|would|can|could|may|might|must|should|have|has|had|do|does|did|\w+(?:s|ed|ing))/.test(
            matchText
          )
        ) {
          continue;
        }

        // Skip prepositional phrases that are NOT temporal
        // "at the party" should be preposition, "at 3 o'clock" should be time expression
        if (
          /^at\s+(?:the\s+)?(?:party|meeting|event|conference|concert|theater|restaurant|store|shop|office|house|home|school|university|hospital|airport|station|beach|park|hotel|library|church|mall|market|gym|club|bar|cafe|dinner|lunch|breakfast|wedding|funeral)/.test(
            matchText
          )
        ) {
          continue;
        }

        // Skip non-temporal "on" phrases: "on the table" vs "on Monday"
        if (
          /^on\s+(?:the\s+)?(?:table|floor|wall|bed|chair|desk|shelf|ground|roof|door|window|screen|page|board|list|menu|map|road|street|highway|bridge|mountain|hill|island|beach|farm|boat|ship|plane|train|bus|car|computer|phone|internet|website|book|paper|magazine|newspaper|TV|television|radio|stage|field|court|track|pitch)/.test(
            matchText
          )
        ) {
          continue;
        }

        // Skip non-temporal "for" phrases: "for the meeting" vs "for three years"
        if (
          /^for\s+(?:the\s+)?(?:meeting|party|event|conference|job|work|project|assignment|task|purpose|reason|benefit|sake|good|fun|dinner|lunch|breakfast|trip|vacation|holiday|wedding|birthday|celebration|ceremony|game|match|show|concert|movie|play|book|magazine|newspaper|course|class|lesson|exam|test|interview|appointment|date)(?:\s|$)/.test(
            matchText
          )
        ) {
          continue;
        }

        // Check for overlap with existing preposition elements
        const hasPrepositionOverlap = elements.some(
          (el) =>
            el.type === "preposition" &&
            ((el.startPos <= match!.index &&
              el.endPos >= match!.index + matchText.length) ||
              (match!.index <= el.startPos &&
                match!.index + matchText.length >= el.endPos))
        );

        // Check if this overlaps with existing time clause
        const hasTimeClauseOverlap = elements.some(
          (el) =>
            el.type === "timeClause" &&
            ((el.startPos <= match!.index &&
              el.endPos >= match!.index + matchText.length) ||
              (match!.index <= el.startPos &&
                match!.index + matchText.length >= el.endPos))
        );

        if (hasTimeClauseOverlap || hasPrepositionOverlap) {
          continue;
        }

        const timeType = identifyTimeType(matchText);
        elements.push({
          id: `time_expression_${elementId++}`,
          text: matchText,
          type: "timeExpression",
          startPos: match.index,
          endPos: match.index + matchText.length,
          description: `"${matchText}" is a time phrase indicating ${timeType} (not a time clause - no finite verb).`,
          examples: [
            "last night",
            "last year",
            "next week",
            "yesterday morning",
            "tomorrow evening",
            "three times a day",
            "every morning",
            "once in a while",
            "from time to time",
            "day after day",
            "all week long",
            "during the summer",
            "throughout the year",
            "for ages",
            "since childhood",
            "until now",
            "in the near future",
            "a long time ago",
            "every now and then",
            "more often than not",
          ],
          rules: [
            "Time phrases/expressions indicate when, how long, or how often something happens",
            "Can show past, present, or future time relationships",
            "May express duration (for X time), frequency (every day), or specific moments (yesterday)",
            "Often function as adverbial phrases modifying verbs",
            "Time PHRASES have no finite verb (unlike time CLAUSES which have subject + verb)",
            "Duration phrases with 'for' show how long something lasted",
            "Frequency expressions show how often something occurs",
          ],
        });
      }
    }
  });

  return elements;
};
