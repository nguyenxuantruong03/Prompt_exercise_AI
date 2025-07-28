export interface emphaticCleftSentencesType {
  topic: string;
  levels: string[];
  description: string;
  goals: string[];
  recognition_patterns: string[];

  // Level-specific learning content
  level_specific_content: {
    [key: string]: {
      level: string;
      focus_areas: string[];
      detailed_explanation: string;
      key_structures: string[];
      examples: string[];
      learning_objectives: string[];
      common_mistakes: string[];
      practice_points: string[];
    };
  };

  main_types: Array<{
    type: string;
    structure: string;
    level: string;
    purpose: string;
    examples: string[];
    variations?: string[];
    detailed_rules?: string[];
    formal_vs_informal?: {
      formal: string[];
      informal: string[];
    };
  }>;

  emphatic_contrast: {
    level: string;
    techniques: Array<{
      method: string;
      description: string;
      examples: string[];
      level_appropriateness?: string;
    }>;
  };

  usage_notes: string[];

  advanced_usage: {
    level: string;
    strategies: Array<{
      name: string;
      example: string;
      explanation: string;
      difficulty_level?: string;
    }>;
  };

  functions: string[];

  transformation_exercises: {
    description: string;
    examples: Array<{
      original: string;
      cleft: string;
      level?: string;
      explanation?: string;
    }>;
  };

  common_errors: Array<{
    mistake: string;
    correction: string;
    level?: string;
    explanation?: string;
  }>;

  learning_tips: string[];

  // Enhanced reference section
  references: Array<{
    title: string;
    author?: string;
    type: "book" | "website" | "academic_paper" | "online_course";
    url?: string;
    isbn?: string;
    description: string;
    relevance_level: string[];
  }>;

  // Additional comprehensive sections
  linguistic_analysis?: {
    syntactic_structure: string;
    semantic_function: string;
    pragmatic_use: string;
    discourse_markers: string[];
  };

  corpus_examples?: {
    spoken_english: string[];
    written_english: string[];
    academic_writing: string[];
    news_media: string[];
  };

  cross_linguistic_comparison?: {
    similar_structures: string[];
    language_specific_notes: string[];
  };
}
