import { GrammarElement } from "./types";

/**
 * Identifies advanced discourse elements including discourse markers, hedging expressions,
 * emphatic structures, reported speech indicators, tag questions, subjunctive expressions,
 * and focus structures used in sophisticated text analysis
 */
export const identifyAdvancedDiscourseElements = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;

  // 1. DISCOURSE MARKERS
  const discourseMarkerPatterns = [
    // Addition and reinforcement
    /\b(furthermore|moreover|additionally|in\s+addition|what's\s+more|besides|also|too|as\s+well|not\s+only\s+that|on\s+top\s+of\s+that|another\s+thing\s+is|equally\s+important|likewise|similarly|in\s+the\s+same\s+way|correspondingly|by\s+the\s+same\s+token)\b/gi,

    // Contrast and concession
    /\b(however|nevertheless|nonetheless|on\s+the\s+other\s+hand|in\s+contrast|conversely|alternatively|instead|rather|but\s+then|even\s+so|all\s+the\s+same|be\s+that\s+as\s+it\s+may|notwithstanding|albeit|though|although|while|whereas|despite\s+this|in\s+spite\s+of\s+this)\b/gi,

    // Cause and effect
    /\b(therefore|thus|consequently|as\s+a\s+result|accordingly|hence|so|for\s+this\s+reason|because\s+of\s+this|due\s+to\s+this|owing\s+to\s+this|this\s+means\s+that|it\s+follows\s+that|the\s+result\s+is|the\s+consequence\s+is)\b/gi,

    // Exemplification and clarification
    /\b(for\s+example|for\s+instance|such\s+as|namely|that\s+is\s+to\s+say|in\s+other\s+words|to\s+put\s+it\s+differently|to\s+clarify|specifically|particularly|especially|in\s+particular|more\s+precisely|to\s+be\s+more\s+specific)\b/gi,

    // Temporal sequencing
    /\b(first|firstly|second|secondly|third|thirdly|finally|lastly|initially|subsequently|then|next|after\s+that|meanwhile|in\s+the\s+meantime|at\s+the\s+same\s+time|simultaneously|previously|earlier|later|eventually|ultimately|in\s+conclusion|to\s+conclude|to\s+sum\s+up)\b/gi,

    // Emphasis and intensification
    /\b(indeed|in\s+fact|actually|as\s+a\s+matter\s+of\s+fact|certainly|definitely|absolutely|undoubtedly|without\s+doubt|clearly|obviously|evidently|naturally|of\s+course|needless\s+to\s+say|it\s+goes\s+without\s+saying|above\s+all|most\s+importantly|significantly)\b/gi,
  ];

  discourseMarkerPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `discourse_marker_${elementId++}`,
        text: match[0],
        type: "discourse_marker",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0]}" is a discourse marker that organizes and connects ideas in the text.`,
        examples: [
          "furthermore, we must consider...",
          "however, there are exceptions...",
          "therefore, the conclusion is...",
          "for example, in recent studies...",
        ],
        rules: [
          "Connect ideas and show relationships between sentences",
          "Usually appear at the beginning of clauses or sentences",
          "Help guide readers through arguments and explanations",
          "Different types show addition, contrast, cause-effect, etc.",
        ],
      });
    }
  });

  // 2. HEDGING EXPRESSIONS
  const hedgingPatterns = [
    /\b(perhaps|maybe|possibly|probably|likely|presumably|apparently|seemingly|allegedly|reportedly|supposedly|ostensibly|conceivably|potentially|theoretically|hypothetically|arguably|arguably|presumably)\b/gi,
    /\b(it\s+seems\s+that|it\s+appears\s+that|it\s+looks\s+like|it\s+sounds\s+like|it\s+would\s+seem|one\s+might\s+argue|one\s+could\s+suggest|there\s+is\s+some\s+evidence|there\s+appears\s+to\s+be|there\s+seems\s+to\s+be)\b/gi,
    /\b(kind\s+of|sort\s+of|somewhat|rather|quite|fairly|relatively|reasonably|moderately|to\s+some\s+extent|to\s+a\s+certain\s+extent|in\s+a\s+sense|in\s+a\s+way|so\s+to\s+speak|as\s+it\s+were)\b/gi,
    /\b(might|may|could|would|should)\s+\w+/gi,
  ];

  hedgingPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `hedging_${elementId++}`,
        text: match[0],
        type: "hedging",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0]}" is a hedging expression that softens statements and shows uncertainty or politeness.`,
        examples: [
          "perhaps we should consider...",
          "it seems that the data shows...",
          "this might be related to...",
          "there appears to be some correlation...",
        ],
        rules: [
          "Make statements less direct or absolute",
          "Show uncertainty, probability, or tentative conclusions",
          "Common in academic and formal writing",
          "Help writers avoid overgeneralization",
        ],
      });
    }
  });

  // 3. EMPHATIC STRUCTURES
  const emphaticStructurePatterns = [
    // Cleft sentences
    /\bit\s+is\/was\s+\w+(?:\s+\w+)*\s+that\/who\s+\w+(?:\s+\w+)*/gi,
    /\bwhat\s+\w+(?:\s+\w+)*\s+is\/was\s+\w+(?:\s+\w+)*/gi,

    // Inversion for emphasis
    /\b(never|rarely|seldom|hardly|scarcely|barely|little|not\s+only|not\s+until|no\s+sooner|only\s+when|only\s+if|only\s+after|only\s+then)\s+\w+(?:\s+\w+)*/gi,

    // Do-emphasis
    /\b(I|you|he|she|it|we|they)\s+do\s+(like|want|need|think|believe|hope|wish|know|understand|remember|forget|love|hate)\b/gi,
  ];

  emphaticStructurePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `emphatic_structure_${elementId++}`,
        text: match[0],
        type: "emphatic_structure",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0]}" is an emphatic structure used to highlight or stress particular information.`,
        examples: [
          "It was John who called",
          "What I need is help",
          "Never have I seen such beauty",
          "I do like this book",
        ],
        rules: [
          "Used to emphasize particular parts of sentences",
          "Can involve word order changes or special constructions",
          "Cleft sentences divide information for emphasis",
          "Inversion creates dramatic emphasis",
        ],
      });
    }
  });

  // 4. REPORTED SPEECH INDICATORS
  const reportedSpeechPatterns = [
    /\b(said|told|asked|replied|answered|explained|mentioned|stated|declared|announced|claimed|insisted|suggested|proposed|recommended|advised|warned|promised|threatened|admitted|denied|confirmed|revealed|disclosed|reported|informed|notified|reminded|commented|remarked|observed|noted|pointed\s+out|argued|maintained|asserted|contended|alleged|accused)\s+that\s+\w+(?:\s+\w+)*/gi,
    /\b(according\s+to|as\s+reported\s+by|as\s+stated\s+by|as\s+mentioned\s+by|as\s+claimed\s+by|sources\s+say|it\s+is\s+reported\s+that|it\s+is\s+claimed\s+that|it\s+is\s+alleged\s+that)\b/gi,
  ];

  reportedSpeechPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `reported_speech_${elementId++}`,
        text: match[0],
        type: "reported_speech",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0]}" introduces reported speech, showing that someone else's words or thoughts are being conveyed.`,
        examples: [
          "He said that he was tired",
          "She told me she would come",
          "According to the report, sales increased",
          "Sources claim that negotiations continue",
        ],
        rules: [
          "Reports what someone said without using exact words",
          "Usually requires tense changes",
          "Different reporting verbs convey different meanings",
          "Common in news reporting and academic writing",
        ],
      });
    }
  });

  // 5. TAG QUESTIONS
  const tagQuestionPatterns = [
    /\b\w+(?:\s+\w+)*,\s+(don't|doesn't|didn't|won't|wouldn't|can't|couldn't|shouldn't|mustn't|haven't|hasn't|hadn't|aren't|isn't|wasn't|weren't)\s+\w+\?/gi,
    /\b\w+(?:\s+\w+)*,\s+(do|does|did|will|would|can|could|should|must|have|has|had|are|is|was|were)\s+\w+\?/gi,
  ];

  tagQuestionPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `tag_question_${elementId++}`,
        text: match[0],
        type: "tag_question",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0]}" is a tag question used for confirmation or to encourage response.`,
        examples: [
          "You're coming, aren't you?",
          "She likes coffee, doesn't she?",
          "They won't be late, will they?",
          "It's beautiful, isn't it?",
        ],
        rules: [
          "Short questions added to statements",
          "Positive statement + negative tag, or vice versa",
          "Used for confirmation or to keep conversation going",
          "Rising intonation shows real uncertainty",
        ],
      });
    }
  });

  // 6. SUBJUNCTIVE EXPRESSIONS
  const subjunctivePatterns = [
    /\b(suggest|recommend|propose|demand|insist|require|request|ask|advise|urge|command|order)\s+that\s+\w+\s+\w+/gi,
    /\bit\s+is\s+(important|essential|necessary|vital|crucial|imperative|advisable|preferable|desirable)\s+that\s+\w+\s+\w+/gi,
    /\bif\s+I\s+were\s+you/gi,
    /\bI\s+wish\s+\w+\s+were/gi,
  ];

  subjunctivePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `subjunctive_mood_${elementId++}`,
        text: match[0],
        type: "subjunctive_mood",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0]}" uses subjunctive mood to express wishes, suggestions, or hypothetical situations.`,
        examples: [
          "I suggest that he go",
          "It's important that she be here",
          "If I were you, I'd accept",
          "I wish it were easier",
        ],
        rules: [
          "Uses base form of verb regardless of subject",
          "Common after certain verbs and expressions",
          "Expresses non-factual or hypothetical situations",
          "More common in formal English",
        ],
      });
    }
  });

  // 7. FOCUS AND INFORMATION STRUCTURE
  const focusStructurePatterns = [
    /\b(as\s+for|as\s+regards|regarding|concerning|with\s+respect\s+to|with\s+regard\s+to|in\s+terms\s+of|speaking\s+of|talking\s+about)\s+\w+(?:\s+\w+)*/gi,
    /\b(what\s+about|how\s+about|what\s+of)\s+\w+(?:\s+\w+)*/gi,
  ];

  focusStructurePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      elements.push({
        id: `focus_structure_${elementId++}`,
        text: match[0],
        type: "focus_structure",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${match[0]}" is a focus structure that introduces topics or highlights specific information.`,
        examples: [
          "As for the weather, it's getting colder",
          "Regarding your question, I need more time",
          "Speaking of books, have you read this one?",
          "What about the other options?",
        ],
        rules: [
          "Introduce or shift to new topics",
          "Highlight specific aspects of discussion",
          "Help organize information flow",
          "Common in both spoken and written discourse",
        ],
      });
    }
  });

  return elements;
};
