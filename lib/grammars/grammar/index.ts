import { Simple_PresentData } from "./tenses/simple_present";
import { Present_ContinuousData } from "./tenses/present_continuous";
import { Simple_PastData } from "./tenses/simple_past";
import { Past_ContinuousData } from "./tenses/past_continuous";
import { Present_PerfectData } from "./tenses/present_perfect";
import { Present_Perfect_ContinuousData } from "./tenses/present_perfect_continuous";
import { Past_PerfectData } from "./tenses/past_perfect";
import { Past_Perfect_ContinuousData } from "./tenses/past_perfect_continuous";
import { Simple_FutureData } from "./tenses/simple_future";
import { Future_ContinuousData } from "./tenses/future_continuous";
import { Future_PerfectData } from "./tenses/future_perfect";
import { FuturePerfectContinuousData } from "./tenses/future_perfect_continuous";
import { ConditionalsData } from "./conditionals";
import { ReportedSpeechData } from "./reported_speech";
import { RelativeClausesData } from "./relative_clauses";
import { NounsData } from "./nouns";
import { PronounsData } from "./pronouns";
import { VerbsData } from "./verbs";
import { AdjectiveData } from "./Adjective";
import { AdjectiveOrderData } from "./AdjectiveOrder";
import { AdverbData } from "./Adverb";
import { ArticlesData } from "./Articles";
import { CausativeFormData } from "./CausativeForm";
import { ComparativeData } from "./Comparative";
import { ComparisonsData } from "./Comparisons";
import { ConjunctionsData } from "./Conjunctions";
import { DeterminersData } from "./Determiners";
import { DirectAndIndirectSpeechData } from "./DirectAndIndirectSpeech";
import { DiscourseMarkersData } from "./DiscourseMarkers";
import { DoubleComparativeData } from "./DoubleComparative";
import { EllipsisAndSubstitutionData } from "./EllipsisAndSubstitution";
import { EmphasisData } from "./Emphasis";
import { EqualityComparisonData } from "./EqualityComparison";
import { FocusStructuresData } from "./FocusStructures";
import { FutureInThePastData } from "./FutureInThePast";
import { GerundsAndInfinitivesData } from "./GerundsAndInfinitives";
import { HedgingData } from "./Hedging";
import { IdiomaticLanguageData } from "./IdiomaticLanguage";
import { ImperativesData } from "./Imperatives";
import { InfinitivesData } from "./Infinitives";
import { InterjectionsData } from "./Interjections";
import { InversionData } from "./Inversion";
import { ModalVerbsData } from "./ModalVerbs";
import { NegationData } from "./Negation";
import { NominalisationData } from "./Nominalisation";
import { PassiveVoiceData } from "./PassiveVoice";
import { PhrasalVerbsData } from "./PhrasalVerbs";
import { PossessivesData } from "./Possessives";
import { PrepositionData } from "./Preposition";
import { QuantifiersData } from "./Quantifiers";
import { QuestionFormsData } from "./QuestionForms";
import { ReflexivePronounsData } from "./ReflexivePronouns";
import { RepeatedComparativeData } from "./RepeatedComparative";
import { ReportedQuestionsData } from "./ReportedQuestions";
import { SentenceTypesData } from "./SentenceTypes";
import { SubjectVerbAgreementData } from "./SubjectVerbAgreement";
import { SubjunctiveMoodData } from "./SubjunctiveMood";
import { SuperlativeData } from "./Superlative";
import { TagQuestionsData } from "./TagQuestions";
import { TenseConsistencyData } from "./TenseConsistency";
import { TenseShiftInReportedSpeechData } from "./TenseShiftInReportedSpeech";
import { TimeExpressionsData } from "./TimeExpressions";
import WordFormationSentencesData from "./WordFormationSentences";
import { WordOrderData } from "./WordOrder";
import { adjectivesNoComparisonData } from "./adjective_special/adjectivesNoComparison";
import { adjectivesUsedAsNounsData } from "./adjective_special/adjectivesUsedAsNouns";
import { adjectivesWithPluralNounsData } from "./adjective_special/adjectivesWithPluralNouns";
import { compoundAdjectivesData } from "./adjective_special/compound_adjectives";
import { emotionAdjectivesData } from "./adjective_special/emotionAdjectives";
import { possessiveAndEmphaticAdjectivesData } from "./adjective_special/possessiveAndEmphaticAdjectives";
import { postpositiveAdjectivesData } from "./adjective_special/postpositiveAdjectives";
import { quantitativeAdjectivesData } from "./adjective_special/quantitativeAdjectives";
import { specialPositionAdjectivesData } from "./adjective_special/Special_Position_Adjectives";
import { adverbFrontingInversionData } from "./adverbs_special/adverbFrontingInversion";
import { adverbPositionMeaningChangeData } from "./adverbs_special/adverbPositionMeaningChange";
import { adverbsEndingLyVsIdenticalAdjectivesData } from "./adverbs_special/adverbsEndingLyVsIdenticalAdjectives";
import { adverbsInversionAndEmphasisData } from "./adverbs_special/adverbsInversionAndEmphasis";
import { adverbsNotEndingLyData } from "./adverbs_special/adverbsNotEndingLy";
import { adverbsOfCertaintyData } from "./adverbs_special/adverbsOfCertainty";
import { adverbsOfFrequencyData } from "./adverbs_special/adverbsOfFrequency";
import { degreeAdverbsData } from "./adverbs_special/degreeAdverbs";
import { emphasizingAdverbsData } from "./adverbs_special/emphasizingAdverbs";
import { linkingAdverbsData } from "./adverbs_special/linkingAdverbs";
import { expressingAgreementDisagreementSuggestionsRequestsResponsesData } from "./communication_advance/expressingAgreementDisagreementSuggestionsRequestsResponses";
import { politeVsDirectLanguageData } from "./communication_advance/politeVsDirectLanguage";
import { transitionPhrasesAcademicWritingData } from "./communication_advance/transitionPhrasesAcademicWriting";
import { advancedConditionalsData } from "./grammar_advance/advancedConditionals";
import { adverbialClauseAdvancedData } from "./grammar_advance/adverbialClauseAdvanced";
import { binomialsData } from "./grammar_advance/binomials";
import { cleftSentencesData } from "./grammar_advance/cleftSentences";
import { collocationsDatabaseData } from "./grammar_advance/collocations";
import { emphaticCleftSentencesData } from "./grammar_advance/emphatic_cleft_sentences";
import { fixedExpressionsData } from "./grammar_advance/fixedExpressions";
import { nounClauseGrammarData } from "./grammar_advance/nounClauseGrammar";
import { parallelStructuresData } from "./grammar_advance/parallelStructures";
import { purposeResultConditionClausesData } from "./grammar_advance/purposeResultConditionClauses";
import { reducedRelativeClausesData } from "./grammar_advance/reducedRelativeClauses";
import { verbToVOrVingAdvancedData } from "./grammar_advance/verbToVOrVingAdvanced";
import { abstractNounsData } from "./noun_special/abstract_nouns";
import { CollectiveNounsData } from "./noun_special/collective_nouns";
import { CountableVsUncountableNounsData } from "./noun_special/countable_vs_uncountable_nouns";
import { DualUsageNounsData } from "./noun_special/dual_usage_nouns";
import { irregularPluralsData } from "./noun_special/irregular_plurals";
import { PluralOnlyNounsData } from "./noun_special/plural_only_nouns";
import { pluraliaTantumData } from "./noun_special/pluralia_tantum";
import { singularOnlyNounsData } from "./noun_special/singular_only_nouns";
import { singulariaTantumData } from "./noun_special/singularia_tantum";
import { uncountableNounsData } from "./noun_special/uncountable_nouns";
import { CausativeVerbsData } from "./verb_special/causative_verbs";
import { infinitivePatternsData } from "./verb_special/infinitive_patterns";
import { IrregularVerbsData } from "./verb_special/irregular_verbs";
import { LinkingVerbsData } from "./verb_special/linking_verbs";
import { PerceptionVerbsData } from "./verb_special/perception_verbs";
import { phrasalVerbsData } from "./verb_special/phrasal_verbs";
import { ReflexiveVerbsData } from "./verb_special/reflexive_verbs";
import { ReportingVerbsData } from "./verb_special/reporting_verbs";
import { StatisticVerbsData } from "./verb_special/statistic_verbs";
import { transitiveIntransitiveVerbsData } from "./verb_special/transitiveIntransitive_verbs";
import { VerbsOfPerceptionData } from "./verb_special/verbs_of_perception";

export {
  Simple_PresentData,
  Present_ContinuousData,
  Simple_PastData,
  Past_ContinuousData,
  Present_PerfectData,
  Present_Perfect_ContinuousData,
  Past_PerfectData,
  Past_Perfect_ContinuousData,
  Simple_FutureData,
  Future_ContinuousData,
  Future_PerfectData,
  FuturePerfectContinuousData,
  ConditionalsData,
  ReportedSpeechData,
  RelativeClausesData,
  NounsData,
  PronounsData,
  VerbsData,
  AdjectiveData,
  AdjectiveOrderData,
  AdverbData,
  ArticlesData,
  CausativeFormData,
  ComparativeData,
  ComparisonsData,
  ConjunctionsData,
  DeterminersData,
  DirectAndIndirectSpeechData,
  DiscourseMarkersData,
  DoubleComparativeData,
  EllipsisAndSubstitutionData,
  EmphasisData,
  EqualityComparisonData,
  FocusStructuresData,
  FutureInThePastData,
  GerundsAndInfinitivesData,
  HedgingData,
  IdiomaticLanguageData,
  ImperativesData,
  InfinitivesData,
  InterjectionsData,
  InversionData,
  ModalVerbsData,
  NegationData,
  NominalisationData,
  PassiveVoiceData,
  PhrasalVerbsData,
  PossessivesData,
  PrepositionData,
  QuantifiersData,
  QuestionFormsData,
  ReflexivePronounsData,
  RepeatedComparativeData,
  ReportedQuestionsData,
  SentenceTypesData,
  SubjectVerbAgreementData,
  SubjunctiveMoodData,
  SuperlativeData,
  TagQuestionsData,
  TenseConsistencyData,
  TenseShiftInReportedSpeechData,
  TimeExpressionsData,
  WordFormationSentencesData,
  WordOrderData,
  adjectivesNoComparisonData,
  adjectivesUsedAsNounsData,
  adjectivesWithPluralNounsData,
  compoundAdjectivesData,
  emotionAdjectivesData,
  possessiveAndEmphaticAdjectivesData,
  postpositiveAdjectivesData,
  quantitativeAdjectivesData,
  specialPositionAdjectivesData,
  adverbFrontingInversionData,
  adverbPositionMeaningChangeData,
  adverbsEndingLyVsIdenticalAdjectivesData,
  adverbsInversionAndEmphasisData,
  adverbsNotEndingLyData,
  adverbsOfCertaintyData,
  adverbsOfFrequencyData,
  degreeAdverbsData,
  emphasizingAdverbsData,
  linkingAdverbsData,
  expressingAgreementDisagreementSuggestionsRequestsResponsesData,
  politeVsDirectLanguageData,
  transitionPhrasesAcademicWritingData,
  advancedConditionalsData,
  adverbialClauseAdvancedData,
  binomialsData,
  cleftSentencesData,
  collocationsDatabaseData,
  emphaticCleftSentencesData,
  fixedExpressionsData,
  nounClauseGrammarData,
  parallelStructuresData,
  purposeResultConditionClausesData,
  reducedRelativeClausesData,
  verbToVOrVingAdvancedData,
  abstractNounsData,
  CollectiveNounsData,
  CountableVsUncountableNounsData,
  DualUsageNounsData,
  irregularPluralsData,
  PluralOnlyNounsData,
  pluraliaTantumData,
  singularOnlyNounsData,
  singulariaTantumData,
  uncountableNounsData,
  CausativeVerbsData,
  infinitivePatternsData,
  IrregularVerbsData,
  LinkingVerbsData,
  PerceptionVerbsData,
  phrasalVerbsData,
  ReflexiveVerbsData,
  ReportingVerbsData,
  StatisticVerbsData,
  transitiveIntransitiveVerbsData,
  VerbsOfPerceptionData,
};
