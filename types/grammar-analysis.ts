export interface GrammarElement {
  id: string;
  text: string;
  type:
    | "subject"
    | "verb"
    | "object"
    | "can"
    | "could"
    | "article"
    | "quantifier"
    | "preposition"
    | "adjective"
    | "adverb"
    | "complement"
    | "determiner"
    | "pronoun"
    | "conjunction"
    | "noun"
    | "properNoun"
    | "auxiliary"
    | "modal"
    | "infinitive"
    | "gerund"
    | "participle"
    | "toInfinitive"
    | "negation"
    | "passive"
    | "clause"
    | "phrase"
    | "questionWord"
    | "relativePronoun"
    | "reflexivePronoun"
    | "possessivePronoun"
    | "possessiveAdjective"
    | "timeMarker"
    | "timeExpression"
    | "tenseExpression"
    | "conditional"
    | "reportedSpeech"
    | "punctuation"
    | "fillInTheBlank"

    // VOCABULARY LEVEL TYPES
    | "vocabulary_A1"
    | "vocabulary_A2"
    | "vocabulary_B1"
    | "vocabulary_B2"
    | "vocabulary_C1"
    | "vocabulary_C2"

    // ADVANCED DISCOURSE ELEMENTS
    | "discourse_marker"
    | "emphatic_structure"
    | "ellipsis"
    | "substitution"
    | "fronting"
    | "inversion"
    | "cleft_sentence"
    | "hedging"
    | "nominalisation"
    | "passivization"
    | "causative_form"
    | "reported_speech"
    | "tag_question"
    | "double_negative"
    | "subjunctive_mood"
    | "focus_structure"
    | "information_structure"
    | "coordination"
    | "subordination"
    | "apposition"
    | "extraposition"
    | "comparative_structure"
    | "concessive_structure"

    // PHRASE TYPES
    | "nounPhrase"
    | "adverbPhrase"
    | "adjectivePhrase"
    | "prepositionalPhrase"
    | "verbPhrase"
    | "infinitivePhrase"
    | "gerundPhrase"
    | "participialPhrase"
    | "quantifierPhrase"
    | "possessivePhrase"
    | "comparativePhrase"
    | "determinerPhrase"
    | "complexPrepositionalPhrase"
    | "cleftPhrase"
    | "nominalizationPhrase"
    | "passiveParticipialPhrase"
    | "idiomaticPhrase"
    | "collocationalPhrase"
    | "appositivePhrase"
    | "conditionalPhrase"
    | "nonFiniteClause"
    | "timePhrase"
    | "modalPhrase"
    | "adverbialPhrase"
    | "perfectTense"
    | "continuousTense"

    // CLAUSE TYPES
    | "relativeClause"
    | "conditionalClause"
    | "timeClause"
    | "causeClause"
    | "purposeClause"
    | "resultClause"
    | "explanatoryClause"
    | "concessive_clause"
    | "manner_clause"
    | "place_clause"
    | "reason_clause"
    | "condition_clause"
    | "contrast_clause"

    // TENSE TYPES
    | "presentSimple"
    | "pastSimple"
    | "futureSimple"
    | "presentContinuous"
    | "pastContinuous"
    | "futureContinuous"
    | "presentPerfect"
    | "pastPerfect"
    | "futurePerfect"
    | "presentPerfectContinuous"
    | "pastPerfectContinuous"
    | "futurePerfectContinuous"

    // CONDITIONAL TYPES
    | "firstConditional"
    | "secondConditional"
    | "thirdConditional"
    | "zeroConditional"
    | "mixedConditional"

    // SEMANTIC ROLES
    | "agent"
    | "patient"
    | "theme_role"
    | "goal"
    | "source"
    | "instrument"
    | "beneficiary"
    | "experiencer"
    | "location"
    | "temporal"
    | "manner"
    | "cause"
    | "purpose"
    | "result"

    // MORPHOLOGICAL ELEMENTS
    | "prefix"
    | "suffix"
    | "root_word"
    | "stem"
    | "inflection"
    | "derivation"
    | "compound_word"
    | "blend"
    | "acronym"
    | "abbreviation"

    // PRAGMATIC ELEMENTS
    | "speech_act"
    | "implicature"
    | "presupposition"
    | "politeness_marker"
    | "honorific"
    | "intensifier"
    | "downtoner"
    | "hedge_word"
    | "boosters"
    | "attitude_marker"

    // REGISTER AND STYLE
    | "formal_register"
    | "informal_register"
    | "academic_register"
    | "legal_register"
    | "technical_register"
    | "colloquial"
    | "slang"
    | "archaic"
    | "neologism"
    | "euphemism"

    // ADDITIONAL PHRASE TYPES
    | "subjunctivePhrase"
    | "emphaticPhrase"
    | "exclamatoryPhrase"
    | "imperativePhrase"
    | "linkingPhrase"
    | "introductoryPhrase"
    | "emotivePhrase"
    | "fixedCollocation"
    | "reducedRelativeClause"
    | "cleftSentencePhrase"
    | "passiveVoicePhrase"

    // SPEECH AND VOICE TYPES
    | "directSpeech"
    | "reportedSpeech"
    | "reportedQuestion"
    | "reportedCommand"
    | "passiveVoice"
    | "passiveWithModal"
    | "passiveWithReportingVerb"
    | "modalVerbPhrase"
    | "causativeVerbPhrase"
    | "danglingParticiplePhrase"
    | "subjectVerbInversionPhrase"
    | "phrasalVerb"
    | "perceptionVerb"
    | "imperativeMood"

    // QUESTION TYPES
    | "yesNoQuestion"
    | "whQuestion"
    | "indirectQuestion"
    | "embeddedQuestion"
    | "negativeQuestion"

    // ADDITIONAL MISSING TYPES (for synchronization)
    | "actionVerb"
    | "stativeVerb"
    | "modalCan"
    | "modalCould"
    | "modalWill"
    | "modalWould"
    | "modalShall"
    | "modalShould"
    | "modalMay"
    | "modalMight"
    | "modalMust"
    | "concreteNoun"
    | "abstractNoun"
    | "personalPronoun"
    | "simpleSentence"
    | "complexSentence"
    | "compoundSentence"
    | "affirmative"
    | "emphasis"
    | "exclamatory"
    | "fronting"
    | "inversion"
    | "causativeVerb"
    | "complement"
    | "ellipsis"
    | "substitution"
    | "double_negative"
    | "choiceQuestion"
    | "rhetoricalQuestion"
    | "leadingQuestion"

    // ADDITIONAL NOUN TYPES
    | "properNounSpecific"
    | "collectiveNoun"
    | "compoundNoun"
    | "abstractNoun"
    | "concreteNoun"
    | "uncountableNoun"
    | "irregularPlural"
    | "pluralOnlyNoun"
    | "singularOnlyNoun"
    | "dualUsageNoun"
    | "commonNounGeneral"
    | "countableNoun"
    | "pluralNoun"

    // ADDITIONAL TENSE TYPES
    | "pastIntention"
    | "conditionalSimple"
    | "presentSubjunctive"

    // ADDITIONAL ADJECTIVE TYPES
    | "interrogativeAdjective"
    | "compoundAdjective"
    | "positionAdjective"
    | "nonComparableAdjective"

    // ADDITIONAL PRONOUN TYPES
    | "personalPronoun"
    | "demonstrativePronoun"
    | "interrogativePronoun"
    | "indefinitePronoun"
    | "reciprocalPronoun"
    | "dummyPronoun"

    // COMPARISON STRUCTURES
    | "comparative"
    | "doubleComparative"
    | "superlative"
    | "equalityComparison"
    | "inequalityComparison"
    | "sameAsComparison"
    | "tooStructure"
    | "enoughStructure"
    | "bothAndStructure"
    | "eitherOrStructure"
    | "neitherNorStructure"
    | "notOnlyButAlsoStructure"
    | "ratherThanStructure"
    | "insteadOfStructure"
    | "gradableAdjective"
    | "ungradableAdjective"
    | "incorrectUngradableUsage"
    | "similarity"
    | "explicitComparison"
    | "contrastiveComparison"
    | "contrastMarker"
    | "preferenceExpression"

    // NUMBERS, DATES, TIME TYPES
    | "cardinalNumber"
    | "ordinalNumber"
    | "dayExpression"
    | "monthExpression"
    | "yearExpression"
    | "dateExpression"
    | "atTimePreposition"
    | "inTimePreposition"
    | "onTimePreposition"
    | "duringTimePreposition"
    | "forTimePreposition"
    | "sinceTimePreposition"
    | "byTimePreposition"
    | "untilTimePreposition"
    | "fromToTimePreposition"
    | "modalPerfect"
    | "modalContinuous"
    | "modalPerfectContinuous"
    | "aspectualInceptive"
    | "aspectualContinuative"
    | "aspectualTerminative"
    | "habitualPast"
    | "futureInThePast"
    | "getPassive"
    | "emphaticDo"

    // ADDITIONAL ADVANCED TENSE AND ASPECT TYPES
    | "iterativeAspect"
    | "distributiveAspect"
    | "intensiveAspect"
    | "semelfactiveAspect"
    | "experientialAspect"
    | "recentPast"
    | "prospectiveAspect"
    | "epistemicModality"
    | "deonticModality"
    | "volitiveAspect"
    | "conativeAspect"
    | "resultativeAspect"
    | "progressiveInThePast"
    | "phasalAspect"
    | "inchoativeAspect"
    | "causativeConstruction"
    | "benefactiveConstruction"
    | "performativeConstruction"
    | "interjection"
    | "presentParticiple"
    | "pastParticiple"
    | "thirdPersonSingular"
    | "compound"
    | "unknown"
  startPos: number;
  endPos: number;
  description: string;
  examples: string[];
  rules: string[];
  subElements?: GrammarElement[];
  tenseInfo?: {
    confidence: number;
    tense: string;
    aspect: string;
    voice: string;
    mood: string;
  };
  contextualInfo?: {
    position: string;
    precedingWords: string;
    followingWords: string;
    grammaticalFunction: string;
    semanticRole: string;
  };
  // NEW PROPERTIES FOR ENHANCED ANALYSIS
  vocabularyLevel?: string;
  wordType?: string;
  layer?: number;
  totalLayers?: number;
  speechInfo?: {
    type?:
      | "direct"
      | "reported"
      | "reportedQuestion"
      | "reportedCommand"
      | "passive"
      | "passiveModal"
      | "passiveReporting";
    speechType?: string;
    quotedText?: string;
    hasReportingVerb?: boolean;
    reportingVerb?: string;
    reporter?: string;
    reportedContent?: string;
    hasBackshift?: boolean;
    hasThatClause?: boolean;
    questionType?: string;
    questionWord?: string;
    isWHQuestion?: boolean;
    isYesNoQuestion?: boolean;
    hasInfinitive?: boolean;
    commandType?: string;
    commandVerb?: string;
    isNegative?: boolean;
    tense?: string;
    auxiliary?: string;
    pastParticiple?: string;
    hasAgent?: boolean;
    agent?: string | null;
    isGetPassive?: boolean;
    modal?: string;
    meaning?: string;
    isPerfect?: boolean;
    verb?: string;
    purpose?: string;
    structure?: string;
    hasExtraposition?: boolean;
  };
}
