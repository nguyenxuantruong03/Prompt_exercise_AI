const DiscourseMarkersData = {
  definition:
    "Discourse markers are words or phrases used to connect ideas, show relationships between sentences, and organize spoken or written language. They help create coherence, guide the reader/listener through the text, and signal the speaker's or writer's intentions.",
  functions: {
    Addition: [
      "and",
      "also",
      "in addition",
      "moreover",
      "furthermore",
      "what's more",
      "besides",
    ],
    Contrast: [
      "but",
      "however",
      "on the other hand",
      "nevertheless",
      "whereas",
      "although",
      "even though",
      "yet",
    ],
    "Cause and Effect": [
      "because",
      "so",
      "therefore",
      "thus",
      "as a result",
      "consequently",
    ],
    "Time/Sequence": [
      "first",
      "then",
      "next",
      "after that",
      "finally",
      "meanwhile",
      "at the same time",
      "eventually",
    ],
    "Giving Examples": [
      "for example",
      "for instance",
      "such as",
      "namely",
      "to illustrate",
    ],
    "Reformulation/Clarification": [
      "in other words",
      "that is to say",
      "to put it another way",
      "namely",
    ],
    Emphasis: ["indeed", "in fact", "certainly", "above all", "what is more"],
    "Summarizing/Concluding": [
      "in conclusion",
      "to sum up",
      "overall",
      "in summary",
      "all in all",
    ],
    Condition: ["if", "unless", "provided that", "as long as", "even if"],
  },
  levels: {
    A1: {
      description: "Basic discourse markers for beginners",
      examples: [
        {
          marker: "and",
          function: "Addition",
          example: "I like coffee and tea.",
          explanation: "Connecting two similar ideas",
          context: "Basic coordination",
          pattern: "Sentence + and + sentence",
        },
        {
          marker: "but",
          function: "Contrast",
          example: "I like coffee, but I don't like tea.",
          explanation: "Showing difference between ideas",
          context: "Basic contrast",
          pattern: "Sentence + but + sentence",
        },
        {
          marker: "because",
          function: "Cause and Effect",
          example: "I'm tired because I didn't sleep well.",
          explanation: "Explaining the reason",
          context: "Basic explanation",
          pattern: "Result + because + cause",
        },
        {
          marker: "so",
          function: "Cause and Effect",
          example: "I'm tired, so I'll go to bed early.",
          explanation: "Showing the result",
          context: "Basic consequence",
          pattern: "Cause + so + result",
        },
        {
          marker: "first, then",
          function: "Time/Sequence",
          example: "First, I'll study. Then, I'll watch TV.",
          explanation: "Organizing events in order",
          context: "Basic sequencing",
          pattern: "First + action, then + action",
        },
      ],
      learningTips: [
        "Start with simple connectors (and, but, because, so)",
        "Learn one function at a time",
        "Practice with everyday situations",
      ],
    },
    A2: {
      description: "Common discourse markers for basic communication",
      examples: [
        {
          marker: "also",
          function: "Addition",
          example: "I like pizza. I also like pasta.",
          explanation: "Adding similar information",
          context: "Expanding ideas",
          pattern: "Sentence. Subject + also + verb",
        },
        {
          marker: "however",
          function: "Contrast",
          example: "I like the movie. However, it was too long.",
          explanation: "Introducing a contrasting idea",
          context: "Expressing reservations",
          pattern: "Sentence. However, + contrasting sentence",
        },
        {
          marker: "for example",
          function: "Giving Examples",
          example: "I like sports. For example, I play football.",
          explanation: "Providing specific examples",
          context: "Illustrating points",
          pattern: "General statement. For example, + specific example",
        },
        {
          marker: "finally",
          function: "Time/Sequence",
          example:
            "First, I woke up. Then, I had breakfast. Finally, I went to work.",
          explanation: "Marking the last step in a sequence",
          context: "Completing sequences",
          pattern: "First... Then... Finally...",
        },
        {
          marker: "therefore",
          function: "Cause and Effect",
          example: "It's raining. Therefore, I'll take an umbrella.",
          explanation: "Drawing a logical conclusion",
          context: "Logical reasoning",
          pattern: "Reason + therefore + conclusion",
        },
      ],
      learningTips: [
        "Learn common discourse markers for everyday use",
        "Practice with simple conversations",
        "Understand basic sentence patterns",
      ],
    },
    B1: {
      description: "Intermediate discourse markers for everyday communication",
      examples: [
        {
          marker: "in addition",
          function: "Addition",
          example:
            "The food was delicious. In addition, the service was excellent.",
          explanation: "Adding supporting information",
          context: "Providing additional details",
          pattern: "Main point. In addition, + supporting detail",
        },
        {
          marker: "on the other hand",
          function: "Contrast",
          example: "The job pays well. On the other hand, it's very stressful.",
          explanation: "Presenting an alternative viewpoint",
          context: "Balanced discussion",
          pattern: "One viewpoint. On the other hand, + alternative",
        },
        {
          marker: "as a result",
          function: "Cause and Effect",
          example: "He studied hard. As a result, he passed the exam.",
          explanation: "Showing the consequence of an action",
          context: "Explaining outcomes",
          pattern: "Action + as a result + outcome",
        },
        {
          marker: "meanwhile",
          function: "Time/Sequence",
          example:
            "I was cooking dinner. Meanwhile, my husband was setting the table.",
          explanation: "Showing simultaneous actions",
          context: "Describing parallel events",
          pattern: "Action 1. Meanwhile, + simultaneous action",
        },
        {
          marker: "in other words",
          function: "Reformulation/Clarification",
          example:
            "The weather is terrible. In other words, it's raining heavily.",
          explanation: "Restating information more clearly",
          context: "Clarifying meaning",
          pattern: "Original statement. In other words, + clarification",
        },
      ],
      learningTips: [
        "Master intermediate discourse markers",
        "Learn to use them in complex sentences",
        "Practice with different text types",
      ],
    },
    B2: {
      description:
        "Upper-intermediate discourse markers for complex communication",
      examples: [
        {
          marker: "moreover",
          function: "Addition",
          example:
            "The project was completed on time. Moreover, it was under budget.",
          explanation: "Adding significant additional information",
          context: "Academic and formal writing",
          pattern: "Main point. Moreover, + important addition",
        },
        {
          marker: "nevertheless",
          function: "Contrast",
          example:
            "The weather was bad. Nevertheless, we decided to go hiking.",
          explanation: "Acknowledging a problem but continuing anyway",
          context: "Overcoming obstacles",
          pattern: "Problem + nevertheless + action despite problem",
        },
        {
          marker: "consequently",
          function: "Cause and Effect",
          example:
            "The company lost money. Consequently, they had to lay off workers.",
          explanation: "Showing a direct consequence",
          context: "Formal cause-effect relationships",
          pattern: "Cause + consequently + effect",
        },
        {
          marker: "to illustrate",
          function: "Giving Examples",
          example:
            "Many people prefer online shopping. To illustrate, Amazon's sales increased by 30%.",
          explanation: "Providing a concrete example",
          context: "Academic and professional writing",
          pattern: "General statement. To illustrate, + specific example",
        },
        {
          marker: "that is to say",
          function: "Reformulation/Clarification",
          example:
            "The situation is complex. That is to say, there are many factors involved.",
          explanation: "Providing a more detailed explanation",
          context: "Academic clarification",
          pattern: "Statement + that is to say + detailed explanation",
        },
      ],
      learningTips: [
        "Learn formal discourse markers",
        "Practice with academic contexts",
        "Understand subtle differences between similar markers",
      ],
    },
    C1: {
      description: "Advanced discourse markers for sophisticated communication",
      examples: [
        {
          marker: "furthermore",
          function: "Addition",
          example:
            "The research shows clear benefits. Furthermore, the methodology was robust.",
          explanation: "Adding substantial supporting evidence",
          context: "Academic and professional writing",
          pattern: "Main point. Furthermore, + substantial addition",
        },
        {
          marker: "whereas",
          function: "Contrast",
          example:
            "Some people prefer cities, whereas others enjoy rural life.",
          explanation: "Showing a systematic contrast between two things",
          context: "Academic comparison",
          pattern: "One thing + whereas + contrasting thing",
        },
        {
          marker: "thus",
          function: "Cause and Effect",
          example:
            "The data was incomplete. Thus, we cannot draw definitive conclusions.",
          explanation: "Drawing a logical conclusion from evidence",
          context: "Academic reasoning",
          pattern: "Evidence + thus + logical conclusion",
        },
        {
          marker: "to put it another way",
          function: "Reformulation/Clarification",
          example:
            "The economy is struggling. To put it another way, we're facing a recession.",
          explanation: "Restating information from a different perspective",
          context: "Academic and professional communication",
          pattern:
            "Original statement. To put it another way, + alternative expression",
        },
        {
          marker: "indeed",
          function: "Emphasis",
          example:
            "The results were impressive. Indeed, they exceeded all expectations.",
          explanation: "Emphasizing and confirming a statement",
          context: "Academic emphasis",
          pattern: "Statement + indeed + confirmation/emphasis",
        },
      ],
      learningTips: [
        "Master advanced academic discourse markers",
        "Learn subtle nuances in meaning",
        "Practice with sophisticated texts",
      ],
    },
    C2: {
      description:
        "Mastery-level discourse markers for native-like proficiency",
      examples: [
        {
          marker: "what's more",
          function: "Addition",
          example:
            "The proposal is cost-effective. What's more, it's environmentally sustainable.",
          explanation: "Adding information that strengthens the argument",
          context: "Persuasive and academic writing",
          pattern: "Main point. What's more, + strengthening addition",
        },
        {
          marker: "even though",
          function: "Contrast",
          example:
            "Even though the weather was terrible, we had a wonderful time.",
          explanation:
            "Acknowledging a potential obstacle but showing it didn't matter",
          context: "Sophisticated contrast",
          pattern: "Even though + obstacle + positive outcome",
        },
        {
          marker: "provided that",
          function: "Condition",
          example:
            "We can proceed with the project, provided that we have sufficient funding.",
          explanation: "Setting a specific condition for an action",
          context: "Formal conditional statements",
          pattern: "Action + provided that + condition",
        },
        {
          marker: "above all",
          function: "Emphasis",
          example:
            "The candidate has many qualifications. Above all, she has extensive experience.",
          explanation: "Highlighting the most important point",
          context: "Academic and professional emphasis",
          pattern: "Multiple points. Above all, + most important point",
        },
        {
          marker: "in conclusion",
          function: "Summarizing/Concluding",
          example:
            "In conclusion, the evidence strongly supports our hypothesis.",
          explanation:
            "Summarizing the main points and drawing a final conclusion",
          context: "Academic and formal conclusions",
          pattern: "In conclusion + summary statement",
        },
      ],
      learningTips: [
        "Achieve native-like mastery of discourse markers",
        "Understand cultural and contextual nuances",
        "Use markers creatively and appropriately",
      ],
    },
  },
  examples: [
    "I like tea. **However**, I don't drink it often.",
    "**In addition**, we need to consider the environmental impact.",
    "He was tired. **Therefore**, he went to bed early.",
    "**For example**, many countries have banned plastic bags.",
    "**To sum up**, we need more action on climate change.",
  ],
  recognitionTips: [
    "Usually placed at the beginning or middle of a sentence.",
    "Can often be removed without changing the core meaning, but clarity and flow will decrease.",
    "Often followed by a comma when in writing.",
  ],
  commonErrors: [
    "Using informal discourse markers in academic writing (e.g., 'like' instead of 'such as').",
    "Misusing the marker’s function (e.g., using 'however' when giving an example).",
    "Overusing the same marker (e.g., starting every sentence with 'also').",
  ],
};
