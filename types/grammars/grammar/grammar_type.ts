import { ConditionalsType } from "./conditionals";
import { FutureContinuousType } from "./tenses/future_contnuous";
import { FuturePerfectType } from "./tenses/future_perfect";
import { FuturePerfectContinuousType } from "./tenses/future_perfect_continuous";
import { PluralOnlyNounsType } from "./noun_special/plural_only_nouns";
import { NounsType } from "./nouns";
import { PastContinuousType } from "./tenses/past_continuous";
import { PastPerfectContinuousType } from "./tenses/past_perfect-continuous";
import { PastPerfectType } from "./tenses/past_perfeect";
import { PresentContinuousType } from "./tenses/present_continuous";
import { PresentPerfectType } from "./tenses/present_perfect";
import { PresentPerfectContinuousType } from "./tenses/present_perfect_continuous";
import { PronounsType } from "./pronouns";
import { RelativeClausesType } from "./relative_clauses";
import { ReportedSpeechType } from "./reported_speech";
import { SimpleFutureType } from "./tenses/simple_future";
import { SimplePastType } from "./tenses/simple_past";
import { SimplePresentType } from "./tenses/simple_present";
import { VerbsType } from "./verbs";

// New interface for citations
export interface Citation {
  title: string;
  url: string;
  description: string;
  source: string; // e.g., "Cambridge Dictionary", "Tensesly", "BBC Learning English"
  type: "reference" | "practice" | "examples" | "explanation" | string;
}

// Main interface containing all tenses with their specific separate types
export interface TensesStructure {
  Simple_Present?: SimplePresentType;
  Present_Continuous?: PresentContinuousType;
  Simple_Past?: SimplePastType;
  Past_Continuous?: PastContinuousType;
  Present_Perfect?: PresentPerfectType;
  Present_Perfect_Continuous?: PresentPerfectContinuousType;
  Past_Perfect?: PastPerfectType;
  Past_Perfect_Continuous?: PastPerfectContinuousType;
  Simple_Future?: SimpleFutureType;
  Future_Continuous?: FutureContinuousType;
  Future_Perfect?: FuturePerfectType;
  Future_Perfect_Continuous?: FuturePerfectContinuousType;
  Conditionals?: ConditionalsType;
  Reported_Speech?: ReportedSpeechType;
  Relative_Clauses?: RelativeClausesType;
  Nouns?: NounsType;
  Pronouns?: PronounsType;
  Verbs?: VerbsType;
  PluralOnlyNouns?: PluralOnlyNounsType;
}
