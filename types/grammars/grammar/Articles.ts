export interface ArticlePattern {
  concept: string;
  patterns: string[];
  examples: string[];
  notes?: string[];
}

export interface ArticleUsageRule {
  rule: string;
  examples: string[];
  exceptions?: string[];
  references?: string[];
}

export interface ArticleLevel {
  definition: string;
  keyLearningPoints: string[];
  detailedConcepts: {
    [conceptName: string]: {
      explanation: string;
      patterns: ArticlePattern;
      commonMistakes: string[];
      practicePoints: string[];
      references: string[];
    };
  };
  mastery: {
    canDo: string[];
    shouldAvoid: string[];
  };
  references: {
    books: string[];
    websites: string[];
    academicSources: string[];
  };
}

export interface ArticleDefinition {
  concept: string;
  importance: string;
  corePrinciple: string;
  scope: string;
  linguisticBackground: string;
  references: {
    books: string[];
    websites: string[];
    researchPapers: string[];
  };
}

export interface ArticleType {
  name: string;
  symbol: string;
  definition: string;
  usage: ArticleUsageRule[];
  examples: string[];
  commonErrors: string[];
  advancedUsage?: string[];
}

export interface ArticleSpecialUsage {
  context: string;
  rules: ArticleUsageRule[];
  examples: string[];
  academicReferences: string[];
}

export interface ArticlesType {
  articlesDefinition: ArticleDefinition;
  A1: ArticleLevel;
  A2: ArticleLevel;
  B1: ArticleLevel;
  B2: ArticleLevel;
  C1: ArticleLevel;
  C2: ArticleLevel;
  articleTypes: {
    indefiniteArticles: ArticleType;
    definiteArticle: ArticleType;
    zeroArticle: ArticleType;
  };
  specialUsages: {
    geographical: ArticleSpecialUsage;
    institutional: ArticleSpecialUsage;
    academic: ArticleSpecialUsage;
    scientific: ArticleSpecialUsage;
    literary: ArticleSpecialUsage;
    idiomatic: ArticleSpecialUsage;
  };
  advancedPatterns: {
    [patternName: string]: {
      description: string;
      patterns: ArticlePattern;
      levelRequired: string;
      academicReferences: string[];
    };
  };
  commonMistakes: {
    [mistakeType: string]: {
      description: string;
      incorrectExamples: string[];
      correctExamples: string[];
      explanation: string;
      preventionTips: string[];
    };
  };
  assessmentGuidelines: {
    [level: string]: {
      criteria: string[];
      expectedMastery: string[];
      commonErrors: string[];
    };
  };
  references: {
    authoritative: {
      books: string[];
      websites: string[];
      dictionaries: string[];
    };
    academic: {
      journals: string[];
      researchPapers: string[];
      theses: string[];
    };
    pedagogical: {
      textbooks: string[];
      teachingGuides: string[];
      onlineResources: string[];
    };
  };
}
