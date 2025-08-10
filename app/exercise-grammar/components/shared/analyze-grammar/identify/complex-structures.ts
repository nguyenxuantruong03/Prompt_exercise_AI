import type { GrammarElement } from "./types";
import {
  determineGrammaticalFunction,
  getAdverbialClauseType,
  getAdverbialClauseExamples,
  getAdverbialClauseRules,
  getConditionalExamples,
  getConditionalRules,
  identifyConditionalType,
} from "./helper-functions";

export const identifyComplexStructures = (
  sentence: string,
  elements: GrammarElement[],
  elementId: number
) => {
  let match: RegExpExecArray | null;

  // === K. CLAUSES & PHRASES - COMPREHENSIVE ANALYSIS ===

  // 1. NOUN CLAUSES - Function as subjects, objects, or complements
  const nounClausePatterns = [
    // Direct noun clauses with wh-words and subordinators
    /\b(that|what|who|whom|whose|which|when|where|why|how|whether|if)\s+[^.!?;]*?(?=\s*[,.!?;]|\s+(?:and|but|or|so)\s|$)/gi,
    // Embedded noun clauses after reporting/thinking verbs
    /\b(?:I\s+(?:think|believe|know|hope|wonder|doubt|assume|suppose|imagine|realize|understand|feel|wish|expect|remember|forget|learn|discover|find|notice|observe|see|hear|say|tell|claim|argue|suggest|recommend|propose|mention)|he\s+(?:says|thinks|believes|knows|hopes|wonders|doubts|assumes|supposes|imagines|realizes|understands|feels|wishes|expects|remembers|forgets|learns|discovers|finds|notices|observes|sees|hears|tells|claims|argues|suggests|recommends|proposes|mentions)|she\s+(?:says|thinks|believes|knows|hopes|wonders|doubts|assumes|supposes|imagines|realizes|understands|feels|wishes|expects|remembers|forgets|learns|discovers|finds|notices|observes|sees|hears|tells|claims|argues|suggests|recommends|proposes|mentions)|we\s+(?:think|believe|know|hope|wonder|doubt|assume|suppose|imagine|realize|understand|feel|wish|expect|remember|forget|learn|discover|find|notice|observe|see|hear|say|tell|claim|argue|suggest|recommend|propose|mention)|they\s+(?:say|think|believe|know|hope|wonder|doubt|assume|suppose|imagine|realize|understand|feel|wish|expect|remember|forget|learn|discover|find|notice|observe|see|hear|tell|claim|argue|suggest|recommend|propose|mention))\s+(?:that\s+)?[^.!?;]*?(?=\s*[.!?;]|$)/gi,
    // Wh-clause questions as noun clauses (ONLY when not starting a sentence with a question mark)
    /(?<!^)\b(?:what|who|whom|whose|which|when|where|why|how)\s+\w+(?:\s+\w+)*\s+(?:is|are|was|were|do|does|did|will|would|can|could|may|might|must|should|have|has|had)\s+[^.!?;]*?(?=\s*[.!?;](?!\?))/gi,
    // Whether/if clauses
    /\b(?:whether|if)\s+[^.!?;]*?\s+or\s+(?:not\s+)?[^.!?;]*?(?=\s*[.!?;]|$)/gi,
    // Noun clauses as subjects (often starting sentences - but NOT direct questions)
    /^(?:That|What|Who|Whom|Whose|Which|When|Where|Why|How|Whether|If)\s+[^.!?;]*?\s+(?:is|are|was|were|will|would|can|could|may|might|must|should|have|has|had|do|does|did)\s+[^.!?;]*?(?=\s*[.!?;](?!\?)|$)/gi,
    // Noun clauses after certain adjectives (It is + adjective + that...)
    /\bit\s+(?:is|was|will\s+be|would\s+be)\s+(?:clear|obvious|certain|likely|possible|impossible|important|necessary|essential|vital|crucial|strange|surprising|amazing|wonderful|terrible|sad|happy|good|bad|true|false|right|wrong)\s+(?:that\s+)?[^.!?;]*?(?=\s*[.!?;]|$)/gi,
  ];

  nounClausePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      if (match[0].trim().split(/\s+/).length > 2) {
        const nounClauseText = match[0].trim();

        elements.push({
          id: `noun_clause_${elementId++}`,
          text: nounClauseText,
          type: "clause",
          startPos: match.index,
          endPos: match.index + match[0].length,
          description: `"${nounClauseText}" is a noun clause functioning as a subject, object, or complement in the sentence.`,
          examples: [
            "What he said was important", // Subject noun clause
            "I know that you're right", // Object noun clause
            "The question is whether we should go", // Complement noun clause
            "How you did it amazes me", // Subject noun clause
            "I wonder if she will come", // Object noun clause
            "It's clear that he's upset", // Extraposed subject clause
          ],
          rules: [
            "Noun clauses function as nouns (subject, object, complement)",
            "Begin with subordinators: that, what, who, whether, if, how, etc.",
            "Contain their own subject and predicate",
            "Can be replaced by 'something' or 'the fact' in most cases",
            "Essential for sentence meaning (cannot be omitted)",
            "May be extraposed with 'it' as dummy subject",
          ],
        });
      }
    }
  });

  // 2. ADJECTIVE CLAUSES (RELATIVE CLAUSES) - Enhanced comprehensive patterns
  // IMPORTANT: These patterns must NOT match questions or wh-question phrases
  const relativeClausePatterns = [
    // Standard relative clauses with relative pronouns (MUST have a clear antecedent noun)
    // This pattern requires a noun/pronoun before the relative pronoun and excludes sentence-initial wh-words
    /\b(?:the|this|that|these|those|my|your|his|her|its|our|their|a|an|some|any|every|each|one|man|woman|person|people|child|children|student|students|teacher|teachers|doctor|doctors|book|books|house|houses|car|cars|place|places|time|times|day|days|way|ways|reason|reasons|thing|things|idea|ideas|problem|problems|question|questions|answer|answers|someone|somebody|anyone|anybody|everyone|everybody|something|anything|everything|nothing|somewhere|anywhere|everywhere|nowhere)\s+(who|which|that|whose|whom|where|when|why)(?!\s+(?:is|are|am|was|were|do|does|did|have|has|had|will|would|can|could|may|might|must|should|shall))\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // Non-defining relative clauses (with commas) - these are clearly relative clauses
    /,\s*(who|which|whose|whom)(?!\s+(?:is|are|am|was|were|do|does|did|have|has|had|will|would|can|could|may|might|must|should|shall))\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // More general pattern for noun + relative pronoun (to catch cases like "books that have")
    /\b([a-zA-Z]+s?)\s+(who|which|that|whose|whom|where|when|why)(?!\s+(?:is|are|am|was|were|do|does|did|have|has|had|will|would|can|could|may|might|must|should|shall))\s+(?:have|has|had|are|is|was|were|will|would|can|could|may|might|must|should|do|does|did|[a-zA-Z]+(?:s|ed|ing)?)\s+[^.!?;]*?(?=\s*[,.!?;]|\s+(?:and|but|or|so|yet)|$)/gi,

    // Specific relative clauses with clear noun antecedents (more restrictive)
    /\b(?:the\s+(?:man|woman|person|people|child|children|student|students|teacher|teachers|doctor|doctors|book|books|house|houses|car|cars|place|places|time|times|day|days|way|ways|reason|reasons|thing|things|idea|ideas|problem|problems|question|questions|answer|answers|one|ones)|(?:someone|somebody|anyone|anybody|everyone|everybody|something|anything|everything|nothing|somewhere|anywhere|everywhere|nowhere))\s+(who|which|that|whose|whom|where|when|why)(?!\s+(?:is|are|am|was|were|do|does|did|have|has|had|will|would|can|could|may|might|must|should|shall))\s+[^.!?;]*?(?=\s*[,.!?;]|\s+(?:and|but|or|so|yet))/gi,

    // Reduced relative clauses (participle-based) - these are clearly not questions
    /\b(?:the\s+(?:man|woman|person|people|student|students|book|books|house|houses))\s+(?:working|living|studying|sitting|standing|walking|running|lying|sleeping|written|made|built|designed|created|painted|sung|played|directed|produced)\s+[^.!?;]*?(?=\s*[,.!?;]|\s+(?:and|but|or))/gi,
  ];

  relativeClausePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      const relativeClauseText = match[0].trim();
      const isDefining = !relativeClauseText.startsWith(",");
      const relativeWord = match[1] || relativeClauseText.split(/\s+/)[0];

      elements.push({
        id: `relative_clause_${elementId++}`,
        text: relativeClauseText,
        type: "relativeClause",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${relativeClauseText}" is a ${
          isDefining ? "defining" : "non-defining"
        } relative clause modifying a noun using "${relativeWord}".`,
        examples: [
          "the man who lives here", // Defining relative clause
          "the book that I read", // Defining relative clause
          "John, who is my friend, called", // Non-defining relative clause
          "the place where we met", // Defining relative clause
          "students whose grades improved", // Defining relative clause
          "the reason why she left", // Defining relative clause
        ],
        rules: [
          "Relative clauses modify nouns and pronouns",
          "Begin with relative pronouns (who, which, that, etc.) or relative adverbs (where, when, why)",
          "Defining clauses are essential and not separated by commas",
          "Non-defining clauses add extra information and are separated by commas",
          "Can be reduced by omitting the relative pronoun and auxiliary verb",
          "'Who/whom' for people, 'which' for things, 'that' for both, 'whose' for possession",
        ],
      });
    }
  });

  // 3. ADVERBIAL CLAUSES - All major types with comprehensive patterns
  const adverbialClausePatterns = [
    // TIME CLAUSES - When something happens (WITH finite verbs - subject + verb)
    // Specific "by the time" pattern
    /\bby\s+the\s+time\s+(?:I|you|he|she|it|we|they|[A-Z]\w+)\s+(?:am|is|are|was|were|will|would|can|could|may|might|must|should|have|has|had|do|does|did|\w+(?:s|ed|ing))\s*[^.!?;,]*?(?=\s*[,.!?;]|$)/gi,

    // Other time clauses - Enhanced to catch more patterns
    /\b(when|while|before|after|since|until|till|as\s+soon\s+as|as\s+long\s+as|whenever|once|the\s+moment|the\s+instant|the\s+minute|every\s+time|each\s+time|the\s+first\s+time|the\s+last\s+time|next\s+time|some\s+time)\s+(?:I|you|he|she|it|we|they|[A-Z]\w+)\s+(?:am|is|are|was|were|will|would|can|could|may|might|must|should|have|has|had|do|does|did|\w+(?:s|ed|ing))\s*[^.!?;,]*?(?=\s*[,.!?;]|$)/gi,

    // Additional time clause patterns for better coverage
    /\b(while|when|before|after|since|until|as)\s+(?:I|you|he|she|it|we|they|[A-Z]\w+)\s+(?:watch|work|study|play|sleep|eat|drive|walk|run|talk|speak|listen|read|write|cook|clean|exercise|travel|visit|stay|live|wait|rest|relax|think|feel|look|see|hear|smell|taste|touch|remember|forget|learn|teach|help|try|want|need|like|love|hate|enjoy|prefer|choose|decide|believe|know|understand|hope|wish|expect|plan|prepare|start|stop|begin|end|finish|continue|change|move|go|come|arrive|leave|return|buy|sell|pay|cost|spend|save|earn|invest|grow|develop|improve|increase|decrease|rise|fall|happen|occur|appear|disappear|exist|belong|contain|include|exclude|provide|offer|give|take|bring|carry|send|receive|deliver|collect|gather|distribute|share|keep|hold|put|place|set|lay|sit|stand|lie|hang|attach|connect|join|separate|divide|cut|break|fix|repair|build|create|make|produce|design|paint|draw|write|compose|sing|dance|perform|act|direct|manage|control|lead|follow|guide|teach|train|coach|advise|suggest|recommend|propose|discuss|argue|debate|negotiate|agree|disagree|accept|refuse|deny|admit|confess|apologize|forgive|thank|congratulate|celebrate|mourn|worry|fear|hope|dream)\s*[^.!?;,]*?(?=\s*[,.!?;]|$)/gi,

    // PLACE CLAUSES - Where something happens
    /\b(where|wherever|anywhere|everywhere|nowhere)\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // MANNER CLAUSES - How something is done
    /\b(as|as\s+if|as\s+though|like|the\s+way|the\s+manner\s+in\s+which|how)\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // REASON/CAUSE CLAUSES - Why something happens
    /\b(because|since|as|given\s+that|seeing\s+that|in\s+that|now\s+that|considering\s+that|inasmuch\s+as|insofar\s+as)\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // PURPOSE CLAUSES - For what purpose
    /\b(so\s+that|in\s+order\s+that|in\s+case|lest|for\s+fear\s+that|with\s+the\s+purpose\s+that|with\s+the\s+intention\s+that)\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // RESULT CLAUSES - What happens as a consequence
    /\b(so\s+that|such\s+that|so\s+\w+\s+that|such\s+\w+\s+that|with\s+the\s+result\s+that|consequently)\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // EXPLANATORY/REASON CLAUSES - Explains why something happened
    /\bis\s+why\s+[^.!?;,]*?(?=\s*[,.!?;]|$)/gi,
    /\bthat\s+is\s+why\s+[^.!?;,]*?(?=\s*[,.!?;]|$)/gi,
    /\bwhich\s+is\s+why\s+[^.!?;,]*?(?=\s*[,.!?;]|$)/gi,
    /\bwhich\s+explains\s+why\s+[^.!?;,]*?(?=\s*[,.!?;]|$)/gi,

    // CONTRAST/CONCESSION CLAUSES - Despite what might be expected
    /\b(although|though|even\s+though|even\s+if|while|whereas|despite\s+the\s+fact\s+that|in\s+spite\s+of\s+the\s+fact\s+that|much\s+as|however|no\s+matter\s+how|no\s+matter\s+what|no\s+matter\s+where|no\s+matter\s+when|regardless\s+of\s+how|regardless\s+of\s+what)\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // DEGREE/COMPARISON CLAUSES - To what extent
    /\b(as\s+\w+\s+as|more\s+\w+\s+than|less\s+\w+\s+than|not\s+as\s+\w+\s+as|not\s+so\s+\w+\s+as|the\s+more\s+\w+|the\s+less\s+\w+)\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,
  ];

  adverbialClausePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      const adverbialClauseText = match[0].trim();
      const clauseType = getAdverbialClauseType(adverbialClauseText);

      elements.push({
        id: `adverbial_clause_${elementId++}`,
        text: adverbialClauseText,
        type: "adverbialClause" as GrammarElement["type"],
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${adverbialClauseText}" is an adverbial clause of ${clauseType
          .replace("Clause", "")
          .toLowerCase()} modifying the main verb.`,
        examples: getAdverbialClauseExamples(clauseType),
        rules: getAdverbialClauseRules(clauseType),
      });
    }
  });

  // 4. CONDITIONAL CLAUSES - Enhanced with all conditional types (ONLY actual if-then structures)
  const conditionalPatterns = [
    // ZERO CONDITIONAL - General truths/facts (if + present, present)
    /\bif\s+[^,]*?(?:\w+s?|\w+(?:es)?|am|is|are)\s*[^,]*?,\s*[^.!?;]*?(?:\w+s?|\w+(?:es)?|am|is|are)\s*[^.!?;]*?(?=\s*[.!?;]|$)/gi,

    // FIRST CONDITIONAL - Real future possibility (if + present, will/can/may)
    /\bif\s+[^,]*?(?:\w+s?|\w+(?:es)?|am|is|are|do|does)\s*[^,]*?,\s*[^.!?;]*?(?:will|shall|can|may|might)\s+\w+[^.!?;]*?(?=\s*[.!?;]|$)/gi,

    // SECOND CONDITIONAL - Unreal present/future (if + past/were, would/could/might)
    /\bif\s+[^,]*?(?:\w+ed|\w+|were|was)\s*[^,]*?,\s*[^.!?;]*?(?:would|could|might|should)\s+\w+[^.!?;]*?(?=\s*[.!?;]|$)/gi,

    // THIRD CONDITIONAL - Unreal past (if + had + pp, would/could/might + have + pp) - STRICT PATTERN
    /\bif\s+[^,]*?\bhad\s+\w+(?:ed|en|ne|d|t)\b[^,]*?,\s*[^.!?;]*?\b(?:would|could|might|should)\s+have\s+\w+(?:ed|en|ne|d|t)\b[^.!?;]*?(?=\s*[.!?;]|$)/gi,

    // General conditional conjunctions (not just if)
    /\b(unless|provided\s+that|providing\s+that|supposing|suppose|assuming|as\s+long\s+as|on\s+condition\s+that|given\s+that|granted\s+that|in\s+case|in\s+the\s+event\s+that|only\s+if|even\s+if)\s+[^.!?;]*?(?=\s*[,.!?;]|$)/gi,

    // Inverted conditionals (should/were/had at start without 'if')
    /^\s*(should|were|had)\s+[^,]*?,\s*[^.!?;]*?(?=\s*[.!?;]|$)/gi,
  ];

  conditionalPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      const conditionalText = match[0].trim();
      const condType = identifyConditionalType(conditionalText);

      elements.push({
        id: `conditional_${elementId++}`,
        text: conditionalText,
        type: condType,
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${conditionalText}" is a ${condType} expressing a hypothetical situation and its consequence.`,
        examples: getConditionalExamples(condType),
        rules: getConditionalRules(condType),
        // ENHANCED: Add contextual information for conditional structures
        contextualInfo: {
          position: match.index === 0 ? "sentence-initial" : "mid-sentence",
          precedingWords: sentence.substring(
            Math.max(0, match.index - 30),
            match.index
          ),
          followingWords: sentence.substring(
            match.index + match[0].length,
            Math.min(sentence.length, match.index + match[0].length + 30)
          ),
          grammaticalFunction: determineGrammaticalFunction(
            condType,
            match.index === 0 ? "sentence-initial" : "mid-sentence"
          ),
          semanticRole:
            "Conditional structure expressing hypothetical scenario and its logical consequence",
        },
      });
    }
  });

  // 5.5. NON-FINITE CLAUSES - Clauses without finite verbs (infinitive, participle, gerund clauses)
  const nonFiniteClausePatterns = [
    // Before/After + gerund (non-finite)
    /\b(before|after|while|when|since|until)\s+(?:\w+ing|\w+ing\s+\w+|\w+ing\s+\w+\s+\w+)\b/gi,

    // Infinitive clauses with subordinating conjunctions
    /\b(before|after|while|when|since|until|in\s+order)\s+to\s+\w+(?:\s+\w+)*\b/gi,

    // Participle clauses starting with subordinating words
    /\b(after|before|while|when|since)\s+(?:\w+ed|\w+en|\w+ing)(?:\s+\w+)*\b/gi,

    // Time expressions + non-finite constructions
    /\b(for\s+\w+\s+(?:years?|months?|weeks?|days?|hours?|minutes?))\s+(before|after)\s+(?:\w+ing|to\s+\w+)\b/gi,
  ];

  nonFiniteClausePatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      const nonFiniteText = match[0].trim();

      elements.push({
        id: `non_finite_clause_${elementId++}`,
        text: nonFiniteText,
        type: "nonFiniteClause",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${nonFiniteText}" is a non-finite clause (no finite verb) expressing time, purpose, or manner.`,
        examples: [
          "before deciding to leave",
          "after finishing the work",
          "while walking home",
          "for three years before starting",
          "since returning from abroad",
        ],
        rules: [
          "Contains no finite verb (no subject-verb agreement)",
          "Uses infinitive (to + verb), gerund (-ing), or participle forms",
          "Often functions as an adverbial clause",
          "More concise than finite clauses",
          "Subject usually understood from context",
        ],
      });
    }
  });

  // 6. REPORTED SPEECH CLAUSES - Direct and indirect speech patterns
  const reportedSpeechPatterns = [
    // THAT-clauses after reporting verbs
    /\b(?:he|she|they|I|we|you|the\s+\w+|[A-Z]\w*)\s+(?:said|told|asked|explained|mentioned|stated|declared|announced|reported|claimed|admitted|denied|suggested|proposed|promised|threatened|warned|advised|recommended|replied|answered|responded|added|continued|concluded|argued|insisted|maintained|asserted|confirmed|revealed|disclosed|confessed|acknowledged|emphasized|stressed|noted|observed|pointed\s+out|remarked|commented)\s+(?:that\s+)?[^.!?";]*?(?=\s*[.!?";]|$)/gi,

    // WH-questions in reported speech
    /\b(?:he|she|they|I|we|you|the\s+\w+|[A-Z]\w*)\s+(?:wondered|asked|inquired|questioned|wanted\s+to\s+know)\s+(?:whether|if|what|who|whom|whose|which|when|where|why|how)\s+[^.!?";]*?(?=\s*[.!?";]|$)/gi,

    // YES/NO questions in reported speech
    /\b(?:he|she|they|I|we|you|the\s+\w+|[A-Z]\w*)\s+(?:asked|wondered|inquired|wanted\s+to\s+know)\s+(?:whether|if)\s+[^.!?";]*?(?=\s*[.!?";]|$)/gi,

    // Commands/requests in reported speech
    /\b(?:he|she|they|I|we|you|the\s+\w+|[A-Z]\w*)\s+(?:told|asked|ordered|commanded|requested|begged|urged|advised|warned|reminded|instructed|directed)\s+(?:me|you|him|her|us|them|\w+)\s+(?:to|not\s+to)\s+[^.!?";]*?(?=\s*[.!?";]|$)/gi,

    // According to phrases
    /\b(?:according\s+to|as\s+(?:he|she|they)\s+(?:said|told|explained|mentioned|stated|reported|claimed))\s+[^.!?;]*?(?=\s*[.!?;]|$)/gi,
  ];

  reportedSpeechPatterns.forEach((pattern) => {
    while ((match = pattern.exec(sentence)) !== null) {
      const reportedSpeechText = match[0].trim();

      elements.push({
        id: `reported_speech_${elementId++}`,
        text: reportedSpeechText,
        type: "reported_speech",
        startPos: match.index,
        endPos: match.index + match[0].length,
        description: `"${reportedSpeechText}" is a reported speech clause conveying someone's words, thoughts, or questions indirectly.`,
        examples: [
          "She said that she was tired", // Statement
          "He asked if I was coming", // Yes/No question
          "They told us to wait", // Command/Request
          "I wondered what he meant", // Wh-question
          "According to him, it's true", // According to
          "She promised to help us", // Promise
        ],
        rules: [
          "Reports what someone said, asked, thought, or felt without direct quotation",
          "Often uses 'that' after reporting verbs (can be omitted)",
          "Tenses may shift back (backshift) from direct speech",
          "Pronouns and time/place expressions change to match reporting context",
          "Questions become statements with changed word order",
          "Commands use 'to + infinitive' or 'not to + infinitive'",
        ],
      });
    }
  });

  return elements;
};
