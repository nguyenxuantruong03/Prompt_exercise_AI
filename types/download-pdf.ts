// Grammar topic type definitions
export interface GrammarTopic {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  englishDescription: string;
  tenses: string[];
}

export interface PDFBenefit {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export interface HowToUseStep {
  step: string;
  title: string;
  description: string;
  color: string;
}

export interface PDFContentFeature {
  text: string;
}

export interface PDFHighlight {
  icon: string;
  text: string;
}

export interface LearningTip {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export interface PDFFormat {
  icon: string;
  title: string;
  description: string;
  size: string;
  features: string[];
}

export interface PDFUsageScenario {
  icon: string;
  title: string;
  scenarios: string[];
}

export interface DownloadOption {
  icon: string;
  title: string;
  description: string;
  time: string;
  color: string;
}

export interface PDFStatistic {
  number: string;
  label: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
