export const getElementColor = (type: string) => {
  const colors = {
    subject: "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200",
    verb: "bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200",
    object: "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200",
    article:
      "bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200",
    quantifier:
      "bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200",
    preposition:
      "bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200",
    adjective:
      "bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200",
    adverb:
      "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200",
    complement: "bg-cyan-200 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200",
    determiner: "bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200",
    pronoun: "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200",
    conjunction:
      "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200",
    noun: "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200",
    properNoun:
      "bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200",
    auxiliary: "bg-sky-200 dark:bg-sky-800 text-sky-800 dark:text-sky-200",
    modal:
      "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200",
    infinitive: "bg-lime-200 dark:bg-lime-800 text-lime-800 dark:text-lime-200",
    gerund: "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200",
    participle: "bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200",
    toInfinitive:
      "bg-fuchsia-200 dark:bg-fuchsia-800 text-fuchsia-800 dark:text-fuchsia-200",
    negation:
      "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200",
    passive:
      "bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200",

    // PHRASE TYPES - All 25+ phrase types with distinct colors
    nounPhrase:
      "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 border border-red-300 dark:border-red-700",
    verbPhrase:
      "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border border-blue-300 dark:border-blue-700",
    adjectivePhrase:
      "bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 border border-indigo-300 dark:border-indigo-700",
    adverbPhrase:
      "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100 border border-orange-300 dark:border-orange-700",
    prepositionalPhrase:
      "bg-pink-100 dark:bg-pink-900 text-pink-900 dark:text-pink-100 border border-pink-300 dark:border-pink-700",
    quantifierPhrase:
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 border border-yellow-300 dark:border-yellow-700",
    possessivePhrase:
      "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 border border-green-300 dark:border-green-700",
    infinitivePhrase:
      "bg-lime-100 dark:bg-lime-900 text-lime-900 dark:text-lime-100 border border-lime-300 dark:border-lime-700",
    gerundPhrase:
      "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 border border-amber-300 dark:border-amber-700",
    participialPhrase:
      "bg-rose-100 dark:bg-rose-900 text-rose-900 dark:text-rose-100 border border-rose-300 dark:border-rose-700",
    comparativePhrase:
      "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700",
    determinerPhrase:
      "bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100 border border-teal-300 dark:border-teal-700",
    cleftPhrase:
      "bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 border border-sky-300 dark:border-sky-700",
    idiomaticPhrase:
      "bg-violet-100 dark:bg-violet-900 text-violet-900 dark:text-violet-100 border border-violet-300 dark:border-violet-700",
    collocationalPhrase:
      "bg-emerald-100 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100 border border-emerald-300 dark:border-emerald-700",
    appositivePhrase:
      "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700",
    conditionalPhrase:
      "bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-700",

    // CLAUSE TYPES
    relativeClause:
      "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 border-2 border-purple-400 dark:border-purple-600",
    conditionalClause:
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 border-2 border-yellow-400 dark:border-yellow-600",
    timeClause:
      "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 border-2 border-green-400 dark:border-green-600",

    // TIME AND EXPRESSIONS
    timeExpression:
      "bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200",
    tenseExpression:
      "bg-cyan-200 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200",

    // CONDITIONALS
    conditional:
      "bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200",
    firstConditional:
      "bg-yellow-300 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100",
    secondConditional:
      "bg-orange-300 dark:bg-orange-700 text-orange-900 dark:text-orange-100",
    thirdConditional:
      "bg-red-300 dark:bg-red-700 text-red-900 dark:text-red-100",
    zeroConditional:
      "bg-blue-300 dark:bg-blue-700 text-blue-900 dark:text-blue-100",
    mixedConditional:
      "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-100",

    // TENSES
    presentSimple:
      "bg-green-300 dark:bg-green-700 text-green-900 dark:text-green-100",
    pastSimple:
      "bg-amber-300 dark:bg-amber-700 text-amber-900 dark:text-amber-100",
    futureSimple: "bg-sky-300 dark:bg-sky-700 text-sky-900 dark:text-sky-100",
    presentContinuous:
      "bg-lime-300 dark:bg-lime-700 text-lime-900 dark:text-lime-100",
    pastContinuous:
      "bg-orange-300 dark:bg-orange-700 text-orange-900 dark:text-orange-100",
    futureContinuous:
      "bg-cyan-300 dark:bg-cyan-700 text-cyan-900 dark:text-cyan-100",
    presentPerfect:
      "bg-emerald-300 dark:bg-emerald-700 text-emerald-900 dark:text-emerald-100",
    pastPerfect:
      "bg-rose-300 dark:bg-rose-700 text-rose-900 dark:text-rose-100",
    futurePerfect:
      "bg-indigo-300 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100",
    presentPerfectContinuous:
      "bg-teal-300 dark:bg-teal-700 text-teal-900 dark:text-teal-100",
    pastPerfectContinuous:
      "bg-pink-300 dark:bg-pink-700 text-pink-900 dark:text-pink-100",
    futurePerfectContinuous:
      "bg-violet-300 dark:bg-violet-700 text-violet-900 dark:text-violet-100",
  };
  return (
    colors[type as keyof typeof colors] ||
    "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
  );
};

export const getElementLabel = (type: string) => {
  const labels = {
    subject: "S",
    verb: "V",
    object: "O",
    complement: "C",
    article: "ART",
    determiner: "DET",
    pronoun: "PRON",
    noun: "N",
    properNoun: "N-PROP",
    adjective: "ADJ",
    adverb: "ADV",
    quantifier: "Q",
    numeral: "NUM",
    preposition: "PREP",
    conjunction: "CONJ",
    interjection: "INTJ",
    auxiliary: "AUX",
    modal: "MODAL",
    infinitive: "INF",
    gerund: "GER",
    participle: "PART",
    toInfinitive: "TO-INF",
    negation: "NEG",
    passive: "PASS",
    clause: "CL",
    phrase: "PHR",
    questionWord: "WH",
    relativePronoun: "REL",
    reflexivePronoun: "REFL",
    possessivePronoun: "POSS-PRON",
    possessiveAdjective: "POSS-ADJ",
    timeMarker: "TM",
    timeExpression: "TM",
    tenseExpression: "TENSE",
    conditional: "COND",
    reportedSpeech: "RS",
    punctuation: "PUNC",
    nounPhrase: "NP",
    adverbPhrase: "AdvP",
    adjectivePhrase: "AdjP",
    prepositionalPhrase: "PP",
    verbPhrase: "VP",
    relativeClause: "REL-CL",
    conditionalClause: "COND-CL",
    timeClause: "TIME-CL",
    causeClause: "CAUSE-CL",
    purposeClause: "PURPOSE-CL",
    resultClause: "RESULT-CL",
    presentSimple: "PRES-SIM",
    pastSimple: "PAST-SIM",
    futureSimple: "FUT-SIM",
    presentContinuous: "PRES-CONT",
    pastContinuous: "PAST-CONT",
    futureContinuous: "FUT-CONT",
    presentPerfect: "PRES-PERF",
    pastPerfect: "PAST-PERF",
    futurePerfect: "FUT-PERF",
    presentPerfectContinuous: "PRES-PERF-CONT",
    pastPerfectContinuous: "PAST-PERF-CONT",
    futurePerfectContinuous: "FUT-PERF-CONT",
    firstConditional: "1ST-COND",
    secondConditional: "2ND-COND",
    thirdConditional: "3RD-COND",
    zeroConditional: "0-COND",
    mixedConditional: "MIX-COND",
  };
  return labels[type as keyof typeof labels] || type.toUpperCase();
};


// Helper functions for inline modal-style display (matching grammar-analysis-modal.tsx)
export const getInlineElementColor = (type: string) => {
  const colors = {
    // VOCABULARY LEVELS - CEFR BASED COLORS
    vocabulary_A1:
      "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 border-green-500",
    vocabulary_A2:
      "bg-lime-100 dark:bg-lime-900 text-lime-900 dark:text-lime-100 border-lime-500",
    vocabulary_B1:
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 border-yellow-500",
    vocabulary_B2:
      "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100 border-orange-500",
    vocabulary_C1:
      "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 border-red-500",
    vocabulary_C2:
      "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 border-purple-500",

    // BASIC WORD TYPES
    subject: "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200",
    verb: "bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200",
    object: "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200",
    article:
      "bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200",
    quantifier:
      "bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200",
    preposition:
      "bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200",
    adjective:
      "bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200",
    adverb:
      "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200",
    complement: "bg-cyan-200 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200",
    determiner: "bg-teal-200 dark:bg-teal-800 text-teal-800 dark:text-teal-200",
    pronoun: "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200",
    conjunction:
      "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200",
    noun: "bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200",
    properNoun:
      "bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200",
    auxiliary: "bg-sky-200 dark:bg-sky-800 text-sky-800 dark:text-sky-200",
    modal:
      "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200",
    infinitive: "bg-lime-200 dark:bg-lime-800 text-lime-800 dark:text-lime-200",
    gerund: "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200",
    participle: "bg-rose-200 dark:bg-rose-800 text-rose-800 dark:text-rose-200",
    toInfinitive:
      "bg-fuchsia-200 dark:bg-fuchsia-800 text-fuchsia-800 dark:text-fuchsia-200",
    negation:
      "bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200",
    passive:
      "bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200",
    fillInTheBlank:
      "bg-gradient-to-r from-yellow-200 to-orange-200 dark:from-yellow-800 dark:to-orange-800 text-yellow-900 dark:text-yellow-100 border-2 border-dashed border-yellow-500 dark:border-yellow-400",

    // ADVANCED DISCOURSE ELEMENTS
    discourse_marker:
      "bg-indigo-300 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100",
    emphatic_structure:
      "bg-red-300 dark:bg-red-700 text-red-900 dark:text-red-100",
    ellipsis: "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100",
    substitution:
      "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-100",
    fronting:
      "bg-yellow-300 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100",
    inversion: "bg-pink-300 dark:bg-pink-700 text-pink-900 dark:text-pink-100",
    cleft_sentence:
      "bg-blue-300 dark:bg-blue-700 text-blue-900 dark:text-blue-100",
    hedging:
      "bg-green-300 dark:bg-green-700 text-green-900 dark:text-green-100",
    nominalisation:
      "bg-teal-300 dark:bg-teal-700 text-teal-900 dark:text-teal-100",
    reported_speech:
      "bg-cyan-300 dark:bg-cyan-700 text-cyan-900 dark:text-cyan-100",
    tag_question:
      "bg-orange-300 dark:bg-orange-700 text-orange-900 dark:text-orange-100",
    subjunctive_mood:
      "bg-violet-300 dark:bg-violet-700 text-violet-900 dark:text-violet-100",

    // SEMANTIC ROLES
    agent: "bg-red-400 dark:bg-red-600 text-red-100 dark:text-red-300",
    patient: "bg-blue-400 dark:bg-blue-600 text-blue-100 dark:text-blue-300",
    theme_role:
      "bg-green-400 dark:bg-green-600 text-green-100 dark:text-green-300",
    experiencer:
      "bg-purple-400 dark:bg-purple-600 text-purple-100 dark:text-purple-300",
    instrument:
      "bg-yellow-400 dark:bg-yellow-600 text-yellow-100 dark:text-yellow-300",
    location: "bg-pink-400 dark:bg-pink-600 text-pink-100 dark:text-pink-300",
    temporal:
      "bg-indigo-400 dark:bg-indigo-600 text-indigo-100 dark:text-indigo-300",

    // MORPHOLOGICAL ELEMENTS
    prefix:
      "bg-emerald-400 dark:bg-emerald-600 text-emerald-100 dark:text-emerald-300",
    suffix: "bg-teal-400 dark:bg-teal-600 text-teal-100 dark:text-teal-300",
    root_word: "bg-cyan-400 dark:bg-cyan-600 text-cyan-100 dark:text-cyan-300",
    compound_word: "bg-sky-400 dark:bg-sky-600 text-sky-100 dark:text-sky-300",

    // PRAGMATIC ELEMENTS
    speech_act: "bg-lime-400 dark:bg-lime-600 text-lime-100 dark:text-lime-300",
    politeness_marker:
      "bg-amber-400 dark:bg-amber-600 text-amber-100 dark:text-amber-300",
    intensifier:
      "bg-orange-400 dark:bg-orange-600 text-orange-100 dark:text-orange-300",
    hedge_word: "bg-rose-400 dark:bg-rose-600 text-rose-100 dark:text-rose-300",

    // REGISTER AND STYLE
    formal_register:
      "bg-slate-400 dark:bg-slate-600 text-slate-100 dark:text-slate-300",
    informal_register:
      "bg-gray-400 dark:bg-gray-600 text-gray-100 dark:text-gray-300",
    academic_register:
      "bg-zinc-400 dark:bg-zinc-600 text-zinc-100 dark:text-zinc-300",
    technical_register:
      "bg-neutral-400 dark:bg-neutral-600 text-neutral-100 dark:text-neutral-300",

    // PHRASE TYPES - All 25+ phrase types with distinct colors
    nounPhrase:
      "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 border border-red-300 dark:border-red-700",
    verbPhrase:
      "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border border-blue-300 dark:border-blue-700",
    adjectivePhrase:
      "bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 border border-indigo-300 dark:border-indigo-700",
    adverbPhrase:
      "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100 border border-orange-300 dark:border-orange-700",
    prepositionalPhrase:
      "bg-pink-100 dark:bg-pink-900 text-pink-900 dark:text-pink-100 border border-pink-300 dark:border-pink-700",
    quantifierPhrase:
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 border border-yellow-300 dark:border-yellow-700",
    possessivePhrase:
      "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 border border-green-300 dark:border-green-700",
    infinitivePhrase:
      "bg-lime-100 dark:bg-lime-900 text-lime-900 dark:text-lime-100 border border-lime-300 dark:border-lime-700",
    gerundPhrase:
      "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 border border-amber-300 dark:border-amber-700",
    participialPhrase:
      "bg-rose-100 dark:bg-rose-900 text-rose-900 dark:text-rose-100 border border-rose-300 dark:border-rose-700",
    comparativePhrase:
      "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700",
    determinerPhrase:
      "bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100 border border-teal-300 dark:border-teal-700",
    cleftPhrase:
      "bg-sky-100 dark:bg-sky-900 text-sky-900 dark:text-sky-100 border border-sky-300 dark:border-sky-700",
    idiomaticPhrase:
      "bg-violet-100 dark:bg-violet-900 text-violet-900 dark:text-violet-100 border border-violet-300 dark:border-violet-700",
    collocationalPhrase:
      "bg-emerald-100 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100 border border-emerald-300 dark:border-emerald-700",
    appositivePhrase:
      "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700",
    conditionalPhrase:
      "bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100 border border-stone-300 dark:border-stone-700",

    // CLAUSE TYPES
    relativeClause:
      "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 border-2 border-purple-400 dark:border-purple-600",
    conditionalClause:
      "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 border-2 border-yellow-400 dark:border-yellow-600",
    timeClause:
      "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 border-2 border-green-400 dark:border-green-600",
    causeClause:
      "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 border-2 border-red-400 dark:border-red-600",
    purposeClause:
      "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border-2 border-blue-400 dark:border-blue-600",
    resultClause:
      "bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100 border-2 border-indigo-400 dark:border-indigo-600",

    // TIME AND EXPRESSIONS - Special highlighting for "by" phrases
    timeExpression:
      "bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 shadow-md ring-2 ring-emerald-400",
    tenseExpression:
      "bg-cyan-200 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200",

    // CONDITIONALS
    conditional:
      "bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200",
    firstConditional:
      "bg-yellow-300 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100",
    secondConditional:
      "bg-orange-300 dark:bg-orange-700 text-orange-900 dark:text-orange-100",
    thirdConditional:
      "bg-red-300 dark:bg-red-700 text-red-900 dark:text-red-100",
    zeroConditional:
      "bg-blue-300 dark:bg-blue-700 text-blue-900 dark:text-blue-100",
    mixedConditional:
      "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-100",

    // TENSES
    presentSimple:
      "bg-green-300 dark:bg-green-700 text-green-900 dark:text-green-100",
    pastSimple:
      "bg-amber-300 dark:bg-amber-700 text-amber-900 dark:text-amber-100",
    futureSimple: "bg-sky-300 dark:bg-sky-700 text-sky-900 dark:text-sky-100",
    presentContinuous:
      "bg-lime-300 dark:bg-lime-700 text-lime-900 dark:text-lime-100",
    pastContinuous:
      "bg-orange-300 dark:bg-orange-700 text-orange-900 dark:text-orange-100",
    futureContinuous:
      "bg-cyan-300 dark:bg-cyan-700 text-cyan-900 dark:text-cyan-100",
    presentPerfect:
      "bg-emerald-300 dark:bg-emerald-700 text-emerald-900 dark:text-emerald-100",
    pastPerfect:
      "bg-rose-300 dark:bg-rose-700 text-rose-900 dark:text-rose-100",
    futurePerfect:
      "bg-indigo-300 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100",
    presentPerfectContinuous:
      "bg-teal-300 dark:bg-teal-700 text-teal-900 dark:text-teal-100",
    pastPerfectContinuous:
      "bg-pink-300 dark:bg-pink-700 text-pink-900 dark:text-pink-100",
    futurePerfectContinuous:
      "bg-violet-300 dark:bg-violet-700 text-violet-900 dark:text-violet-100",

    // QUESTION TYPES
    yesNoQuestion:
      "bg-pink-400 dark:bg-pink-600 text-pink-100 dark:text-pink-300 border-2 border-pink-500",
    whQuestion:
      "bg-purple-400 dark:bg-purple-600 text-purple-100 dark:text-purple-300 border-2 border-purple-500",
    indirectQuestion:
      "bg-blue-400 dark:bg-blue-600 text-blue-100 dark:text-blue-300 border-2 border-blue-500",
    embeddedQuestion:
      "bg-indigo-400 dark:bg-indigo-600 text-indigo-100 dark:text-indigo-300 border-2 border-indigo-500",
    negativeQuestion:
      "bg-red-400 dark:bg-red-600 text-red-100 dark:text-red-300 border-2 border-red-500",
    choiceQuestion:
      "bg-yellow-400 dark:bg-yellow-600 text-yellow-100 dark:text-yellow-300 border-2 border-yellow-500",
    rhetoricalQuestion:
      "bg-orange-400 dark:bg-orange-600 text-orange-100 dark:text-orange-300 border-2 border-orange-500",
    leadingQuestion:
      "bg-green-400 dark:bg-green-600 text-green-100 dark:text-green-300 border-2 border-green-500",

    // COMPARISON STRUCTURES
    comparative:
      "bg-blue-300 dark:bg-blue-700 text-blue-900 dark:text-blue-100 border-2 border-blue-400",
    doubleComparative:
      "bg-indigo-300 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100 border-2 border-indigo-400",
    superlative:
      "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-100 border-2 border-purple-400",
    equalityComparison:
      "bg-green-300 dark:bg-green-700 text-green-900 dark:text-green-100 border-2 border-green-400",
    inequalityComparison:
      "bg-red-300 dark:bg-red-700 text-red-900 dark:text-red-100 border-2 border-red-400",
    sameAsComparison:
      "bg-teal-300 dark:bg-teal-700 text-teal-900 dark:text-teal-100 border-2 border-teal-400",
    tooStructure:
      "bg-orange-300 dark:bg-orange-700 text-orange-900 dark:text-orange-100 border-2 border-orange-400",
    enoughStructure:
      "bg-lime-300 dark:bg-lime-700 text-lime-900 dark:text-lime-100 border-2 border-lime-400",
    bothAndStructure:
      "bg-cyan-300 dark:bg-cyan-700 text-cyan-900 dark:text-cyan-100 border-2 border-cyan-400",
    eitherOrStructure:
      "bg-yellow-300 dark:bg-yellow-700 text-yellow-900 dark:text-yellow-100 border-2 border-yellow-400",
    neitherNorStructure:
      "bg-pink-300 dark:bg-pink-700 text-pink-900 dark:text-pink-100 border-2 border-pink-400",
    notOnlyButAlsoStructure:
      "bg-violet-300 dark:bg-violet-700 text-violet-900 dark:text-violet-100 border-2 border-violet-400",
    ratherThanStructure:
      "bg-amber-300 dark:bg-amber-700 text-amber-900 dark:text-amber-100 border-2 border-amber-400",
    insteadOfStructure:
      "bg-rose-300 dark:bg-rose-700 text-rose-900 dark:text-rose-100 border-2 border-rose-400",
    gradableAdjective:
      "bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 border border-emerald-400",
    ungradableAdjective:
      "bg-sky-200 dark:bg-sky-800 text-sky-800 dark:text-sky-200 border border-sky-400",
    incorrectUngradableUsage:
      "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 border-2 border-dashed border-red-500",
    similarity:
      "bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-100",
    explicitComparison:
      "bg-stone-300 dark:bg-stone-700 text-stone-900 dark:text-stone-100",
    contrastiveComparison:
      "bg-zinc-300 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100",
    contrastMarker:
      "bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100",
    preferenceExpression:
      "bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100",

    // NUMBERS, DATES, TIME
    cardinalNumber:
      "bg-emerald-300 dark:bg-emerald-700 text-emerald-900 dark:text-emerald-100 border-2 border-emerald-500",
    ordinalNumber:
      "bg-teal-300 dark:bg-teal-700 text-teal-900 dark:text-teal-100 border-2 border-teal-500",
    dayExpression:
      "bg-sky-300 dark:bg-sky-700 text-sky-900 dark:text-sky-100 border-2 border-sky-500",
    monthExpression:
      "bg-indigo-300 dark:bg-indigo-700 text-indigo-900 dark:text-indigo-100 border-2 border-indigo-500",
    yearExpression:
      "bg-purple-300 dark:bg-purple-700 text-purple-900 dark:text-purple-100 border-2 border-purple-500",
    dateExpression:
      "bg-pink-300 dark:bg-pink-700 text-pink-900 dark:text-pink-100 border-2 border-pink-500",
    atTimePreposition:
      "bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 border-l-4 border-yellow-500",
    inTimePreposition:
      "bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 border-l-4 border-orange-500",
    onTimePreposition:
      "bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200 border-l-4 border-red-500",
    duringTimePreposition:
      "bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 border-l-4 border-blue-500",
    forTimePreposition:
      "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200 border-l-4 border-green-500",
    sinceTimePreposition:
      "bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200 border-l-4 border-violet-500",
    byTimePreposition:
      "bg-cyan-200 dark:bg-cyan-800 text-cyan-800 dark:text-cyan-200 border-l-4 border-cyan-500",
    untilTimePreposition:
      "bg-lime-200 dark:bg-lime-800 text-lime-800 dark:text-lime-200 border-l-4 border-lime-500",
    fromToTimePreposition:
      "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200 border-l-4 border-amber-500",
  };
  return (
    colors[type as keyof typeof colors] ||
    "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
  );
};

export const getInlineElementLabel = (type: string) => {
  const labels = {
    // VOCABULARY LEVELS (keep short and clear)
    vocabulary_A1: "A1",
    vocabulary_A2: "A2",
    vocabulary_B1: "B1",
    vocabulary_B2: "B2",
    vocabulary_C1: "C1",
    vocabulary_C2: "C2",

    // DISCOURSE & TEXTUAL ELEMENTS (super short)
    discourse_marker: "DC",
    emphatic_structure: "EM",
    ellipsis: "EL",
    substitution: "SB",
    fronting: "FR",
    inversion: "IV",
    cleft_sentence: "CF",
    hedging: "HG",
    nominalisation: "NM",
    passivization: "PV",
    causative_form: "CS",
    reported_speech: "RS",
    tag_question: "TQ",
    double_negative: "DN",
    subjunctive_mood: "SJ",
    focus_structure: "FC",
    information_structure: "IS",
    coordination: "CD",
    subordination: "SD",

    // QUESTION TYPES (ultra short)
    yesNoQuestion: "Y/N",
    whQuestion: "WH",
    indirectQuestion: "IQ",
    embeddedQuestion: "EQ",
    negativeQuestion: "NQ",
    choiceQuestion: "CQ",
    rhetoricalQuestion: "RQ",
    leadingQuestion: "LQ",
    apposition: "AP",
    extraposition: "EX",
    comparative_structure: "CS",
    concessive_structure: "CC",

    // ADVANCED PHRASE & CLAUSE TYPES (minimal)
    absolute_construction: "AB",
    small_clause: "SC",
    reduced_relative_clause: "RR",
    free_relative_clause: "FR",
    pseudo_cleft: "PC",
    existential_there: "ET",
    anticipatory_it: "AI",
    cataphoric_reference: "CR",
    anaphoric_reference: "AR",
    zero_anaphora: "ZA",

    // SEMANTIC ROLES (1-2 letters max)
    agent: "AG",
    patient: "PT",
    theme_role: "TH",
    goal: "GL",
    source: "SR",
    instrument: "IN",
    beneficiary: "BF",
    experiencer: "EX",
    location: "LC",
    temporal: "TP",
    manner: "MN",
    cause: "CA",
    purpose: "PU",
    result: "RS",

    // MORPHOLOGICAL (short)
    prefix: "PRE",
    suffix: "SUF",
    root_word: "RT",
    stem: "ST",
    inflection: "IF",
    derivation: "DV",
    compound_word: "CP",
    blend: "BL",
    acronym: "AC",
    abbreviation: "AB",

    // ADDITIONAL MORPHOLOGICAL
    compound: "CPD",

    // PRAGMATIC (minimal)
    speech_act: "SA",
    implicature: "IM",
    presupposition: "PS",
    politeness_marker: "PL",
    honorific: "HN",
    intensifier: "IN",
    downtoner: "DW",
    hedge_word: "HW",
    boosters: "BO",
    attitude_marker: "AT",

    // PHONOLOGICAL (short)
    stress_pattern: "ST",
    intonation_pattern: "IT",
    rhythm: "RH",
    liaison: "LI",
    elision: "EL",
    assimilation: "AS",
    connected_speech: "CS",

    // REGISTER & STYLE (2-3 letters)
    formal_register: "FM",
    informal_register: "IF",
    academic_register: "AC",
    legal_register: "LG",
    technical_register: "TC",
    colloquial: "CL",
    slang: "SL",
    archaic: "AR",
    neologism: "NE",
    euphemism: "EU",

    // PHRASE TYPES (keep standard abbreviations)
    nounPhrase: "NP",
    verbPhrase: "VP",
    adjectivePhrase: "AP",
    adverbPhrase: "AV",
    prepositionalPhrase: "PP",
    quantifierPhrase: "QP",
    possessivePhrase: "PS",
    infinitivePhrase: "IP",
    gerundPhrase: "GP",
    participialPhrase: "PP",
    comparativePhrase: "CP",
    determinerPhrase: "DP",
    cleftPhrase: "CF",
    idiomaticPhrase: "ID",
    collocationalPhrase: "CL",
    appositivePhrase: "AP",
    conditionalPhrase: "CD",

    // ADDITIONAL LONG COMPOUND PHRASE TYPES
    complexPrepositionalPhrase: "CPP",
    nominalizationPhrase: "NP",
    passiveParticipialPhrase: "PPP",
    nonFiniteClause: "NFC",
    adverbialPhrase: "AVP",
    continuousTense: "CT",
    subjunctivePhrase: "SP",
    emphaticPhrase: "EP",
    exclamatoryPhrase: "EXP",
    imperativePhrase: "IMP",
    introductoryPhrase: "INT",
    fixedCollocation: "FC",
    reducedRelativeClause: "RRC",
    cleftSentencePhrase: "CSP",
    passiveVoicePhrase: "PVP",
    modalVerbPhrase: "MVP",
    causativeVerbPhrase: "CVP",
    danglingParticiplePhrase: "DPP",
    subjectVerbInversionPhrase: "SVIP",

    // CLAUSE TYPES (very short)
    relativeClause: "RC",
    conditionalClause: "CC",
    timeClause: "TC",
    causeClause: "CS",
    purposeClause: "PC",
    resultClause: "RS",
    concessive_clause: "CN",
    manner_clause: "MC",
    place_clause: "PL",
    reason_clause: "RC",
    condition_clause: "CD",
    contrast_clause: "CT",

    // ADDITIONAL LONG CLAUSE TYPES
    explanatoryClause: "EC",

    // TIME EXPRESSIONS (minimal)
    timeExpression: "TM",
    tenseExpression: "TS",
    aspectual_marker: "AS",
    temporal_adverbial: "TA",
    duration_phrase: "DU",
    frequency_adverbial: "FR",
    temporal_conjunction: "TC",

    // TENSE TYPES (ultra compact)
    presentSimple: "P-S",
    pastSimple: "PT-S",
    futureSimple: "F-S",
    presentContinuous: "P-C",
    pastContinuous: "PT-C",
    futureContinuous: "F-C",
    presentPerfect: "P-P",
    pastPerfect: "PT-P",
    futurePerfect: "F-P",
    presentPerfectContinuous: "P-PC",
    pastPerfectContinuous: "PT-PC",
    futurePerfectContinuous: "F-PC",

    // ADDITIONAL TENSE/ASPECT TYPES
    pastIntention: "PTI",
    conditionalSimple: "CS",
    presentSubjunctive: "PSJ",
    modalPerfect: "MP",
    modalContinuous: "MC",
    modalPerfectContinuous: "MPC",
    aspectualInceptive: "AI",
    aspectualContinuative: "AC",
    aspectualTerminative: "AT",
    habitualPast: "HP",
    futureInThePast: "FIP",
    iterativeAspect: "IA",
    distributiveAspect: "DA",
    intensiveAspect: "INA",
    semelfactiveAspect: "SA",
    experientialAspect: "EA",
    prospectiveAspect: "PA",
    epistemicModality: "EM",
    deonticModality: "DM",
    volitiveAspect: "VA",
    conativeAspect: "CA",
    resultativeAspect: "RA",
    progressiveInThePast: "PIP",
    inchoativeAspect: "ICA",
    presentParticiple: "PP",
    pastParticiple: "PT",
    thirdPersonSingular: "3PS",

    // CONDITIONAL TYPES (numbers work well)
    conditional: "CD",
    firstConditional: "1C",
    secondConditional: "2C",
    thirdConditional: "3C",
    zeroConditional: "0C",
    mixedConditional: "MC",

    // MODAL VERBS (2 letters)
    ability_modal: "AB",
    possibility_modal: "PS",
    necessity_modal: "NC",
    obligation_modal: "OB",
    permission_modal: "PR",
    advice_modal: "AD",
    suggestion_modal: "SG",
    prohibition_modal: "PH",
    deduction_modal: "DD",
    assumption_modal: "AS",

    // VOICE & ASPECT (minimal)
    active_voice: "AC",
    passive_voice: "PV",
    middle_voice: "MV",
    perfective_aspect: "PF",
    imperfective_aspect: "IM",
    progressive_aspect: "PR",
    habitual_aspect: "HB",
    iterative_aspect: "IT",
    inchoative_aspect: "IC",
    resultative_aspect: "RS",

    // NEGATION TYPES (short)
    sentential_negation: "SN",
    constituent_negation: "CN",
    morphological_negation: "MN",
    lexical_negation: "LN",
    inherent_negation: "IN",
    transferred_negation: "TN",

    // QUESTION TYPES (compact)
    yes_no_question: "Y/N",
    wh_question: "WH",
    alternative_question: "AQ",
    tag_question_confirm: "TC",
    tag_question_check: "TK",
    rhetorical_question: "RQ",
    echo_question: "EQ",
    indirect_question: "IQ",

    // INDIVIDUAL WORDS (single letters where possible)
    subject: "S",
    verb: "V",
    object: "O",
    complement: "C",
    predicative: "PD",
    attributive: "AT",
    article: "AR",
    determiner: "DT",
    pronoun: "PN",
    noun: "N",
    properNoun: "PN",
    commonNoun: "CN",
    countableNoun: "NC",
    uncountableNoun: "NU",
    collectiveNoun: "CL",
    abstractNoun: "AB",
    concreteNoun: "CR",

    // ADDITIONAL LONG NOUN TYPES
    compoundNoun: "CN",
    irregularPlural: "IP",
    pluralOnlyNoun: "PON",
    singularOnlyNoun: "SON",
    dualUsageNoun: "DUN",
    commonNounGeneral: "CNG",
    pluralNoun: "PLN",

    adjective: "AJ",
    qualitative_adjective: "QA",
    classifying_adjective: "CA",
    comparative_adjective: "CP",
    superlative_adjective: "SP",
    participial_adjective: "PA",
    compound_adjective: "CA",

    // ADDITIONAL LONG ADJECTIVE TYPES
    compoundAdjective: "CMA",
    positionAdjective: "POS",
    nonComparableAdjective: "NCA",

    adverb: "AV",
    manner_adverb: "MA",
    time_adverb: "TA",
    place_adverb: "PA",
    frequency_adverb: "FA",
    degree_adverb: "DA",
    sentence_adverb: "SA",
    conjunctive_adverb: "CA",

    quantifier: "Q",
    universal_quantifier: "UQ",
    existential_quantifier: "EQ",
    proportional_quantifier: "PQ",
    cardinal_number: "CD",
    ordinal_number: "OR",
    fraction: "FR",

    preposition: "PP",
    simple_preposition: "SP",
    complex_preposition: "CP",
    phrasal_preposition: "PH",

    conjunction: "CJ",
    coordinating_conjunction: "CC",
    subordinating_conjunction: "SC",
    correlative_conjunction: "CR",

    interjection: "IJ",
    primary_interjection: "PI",
    secondary_interjection: "SI",

    auxiliary: "AX",
    primary_auxiliary: "PA",
    modal_auxiliary: "MA",

    modal: "MD",
    central_modal: "CM",
    marginal_modal: "MM",

    infinitive: "IF",
    bare_infinitive: "BI",
    to_infinitive: "TI",

    gerund: "GR",
    present_participle: "PP",
    past_participle: "PT",
    perfect_participle: "PF",

    toInfinitive: "TO",
    negation: "NG",
    passive: "PV",
    clause: "CL",
    phrase: "PH",

    questionWord: "WH",
    relativePronoun: "RL",
    demonstrative_pronoun: "DM",
    indefinite_pronoun: "ID",
    reflexivePronoun: "RF",
    reciprocal_pronoun: "RC",
    possessivePronoun: "PS",
    possessiveAdjective: "PA",

    // ADDITIONAL MISSING LONG NAMES
    properNounSpecific: "PN",
    interrogativeAdjective: "IA",
    personalPronoun: "PP",
    reportedSpeech: "RS",
    fillInTheBlank: "FB",

    // ADDITIONAL PRONOUN TYPES
    demonstrativePronoun: "DP",
    interrogativePronoun: "IP",
    indefinitePronoun: "IDP",
    reciprocalPronoun: "RP",

    timeMarker: "TM",
    punctuation: "PC",

    // SPECIALIZED FEATURES (2 letters max)
    dummy_subject: "DS",
    expletive_there: "ET",
    expletive_it: "EI",
    light_verb: "LV",
    delexical_verb: "DV",
    auxiliary_verb: "AV",
    linking_verb: "LK",
    transitive_verb: "TV",
    intransitive_verb: "IV",
    ditransitive_verb: "DV",
    ergative_verb: "EV",

    // INFORMATION PACKAGING (short)
    theme: "TH",
    rheme: "RH",
    topic: "TP",
    focus: "FC",
    given_information: "GI",
    new_information: "NI",
    contrastive_topic: "CT",
    contrastive_focus: "CF",

    // COMPARISON (ultra short)
    comparative: "CP",
    doubleComparative: "DC",
    superlative: "SP",
    equalityComparison: "EQ",
    inequalityComparison: "IQ",
    sameAsComparison: "SA",
    tooStructure: "TO",
    enoughStructure: "EN",
    bothAndStructure: "BA",
    eitherOrStructure: "EO",
    neitherNorStructure: "NN",
    notOnlyButAlsoStructure: "NB",
    ratherThanStructure: "RT",
    insteadOfStructure: "IO",
    gradableAdjective: "GA",
    ungradableAdjective: "UA",
    incorrectUngradableUsage: "IU",
    similarity: "SM",
    explicitComparison: "EC",
    contrastiveComparison: "CC",
    contrastMarker: "CM",
    preferenceExpression: "PE",

    // TIME ELEMENTS (single words)
    cardinalNumber: "№",
    ordinalNumber: "º",
    dayExpression: "DY",
    monthExpression: "MO",
    yearExpression: "YR",
    dateExpression: "DT",
    atTimePreposition: "@",
    inTimePreposition: "IN",
    onTimePreposition: "ON",
    duringTimePreposition: "DR",
    forTimePreposition: "FR",
    sinceTimePreposition: "SC",
    byTimePreposition: "BY",
    untilTimePreposition: "TL",
    fromToTimePreposition: "→",
  };

  // ADDITIONAL LONG SPEECH AND VOICE TYPES
  const additionalLabels = {
    directSpeech: "DS",
    reportedQuestion: "RQ",
    reportedCommand: "RC",
    passiveWithModal: "PWM",
    passiveWithReportingVerb: "PWRV",
    danglingParticiplePhrase: "DPP",
    subjectVerbInversionPhrase: "SVIP",
    perceptionVerb: "PV",
    imperativeMood: "IMP",
    indirectQuestion: "IQ",
    embeddedQuestion: "EQ",
    negativeQuestion: "NQ",
    simpleSentence: "SS",
    complexSentence: "CS",
    compoundSentence: "CPS",
    causativeVerb: "CV",
    choiceQuestion: "CQ",
    rhetoricalQuestion: "RQ",
    leadingQuestion: "LQ",
    doubleComparative: "DC",
    equalityComparison: "EC",
    inequalityComparison: "IC",
    sameAsComparison: "SAC",
    enoughStructure: "ES",
    bothAndStructure: "BAS",
    eitherOrStructure: "EOS",
    neitherNorStructure: "NNS",
    notOnlyButAlsoStructure: "NOBAS",
    ratherThanStructure: "RTS",
    insteadOfStructure: "IOS",
    explicitComparison: "ExC",
    contrastiveComparison: "CC",
    contrastMarker: "CM",
    preferenceExpression: "PE",
    dayExpression: "DE",
    monthExpression: "ME",
    yearExpression: "YE",
    dateExpression: "DTE",
    atTimePreposition: "ATP",
    inTimePreposition: "ITP",
    onTimePreposition: "OTP",
    duringTimePreposition: "DTP",
    forTimePreposition: "FTP",
    sinceTimePreposition: "STP",
    byTimePreposition: "BTP",
    untilTimePreposition: "UTP",
    fromToTimePreposition: "FTTP",
    causativeConstruction: "CC",
    benefactiveConstruction: "BC",
    performativeConstruction: "PC",
  };

  // Return phrase label with emoji for better visibility if it's a phrase
  const allLabels = { ...labels, ...additionalLabels };
  const label = allLabels[type as keyof typeof allLabels] || type.toUpperCase();

  // Add special markers for key phrase types
  if (type.includes("Phrase")) {
    return `${label}`;
  } else if (type === "timeExpression") {
    return `${label}`;
  } else if (type.includes("Clause")) {
    return `${label}`;
  } else if (type.includes("modal") || type.includes("Modal")) {
    return `${label}`;
  } else if (
    type.includes("tense") ||
    type.includes("Simple") ||
    type.includes("Continuous") ||
    type.includes("Perfect")
  ) {
    return `${label}`;
  } else if (type.includes("conditional") || type.includes("Conditional")) {
    return `${label}`;
  } else if (type.includes("passive") || type.includes("Passive")) {
    return `${label}`;
  } else if (type.includes("question") || type.includes("Question")) {
    return `${label}`;
  } else if (
    type.includes("negation") ||
    type.includes("Negation") ||
    type.includes("negative")
  ) {
    return `${label}`;
  } else if (type.includes("discourse") || type.includes("Discourse")) {
    return `${label}`;
  } else if (
    type.includes("emphatic") ||
    type.includes("focus") ||
    type.includes("Focus")
  ) {
    return `${label}`;
  }

  return label;
};