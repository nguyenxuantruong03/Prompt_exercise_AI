import { PerceptionVerbsType } from "@/types/grammars/grammar/verb_special/perception_verbs";

export const PerceptionVerbsData: PerceptionVerbsType = {
  definition: {
    core_concept:
      "Perception verbs describe how we experience the world through our five senses or mental impressions, such as see, hear, feel, smell, taste, look, sound, appear, seem, etc.",
    grammatical_status:
      "These can be action verbs, stative verbs, linking verbs, or causative depending on context.",
    common_patterns: [
      "Subject + Verb + Object",
      "Subject + Verb + Adjective (Linking)",
      "Subject + Verb + Object + Bare Infinitive",
      "Subject + Verb + Object + Present Participle",
      "Subject + Verb + like/as if + Clause",
    ],
    etymology_origin:
      "Most perception verbs derive from Proto-Indo-European roots related to sensory experience. 'See' comes from PIE *sekw- (to follow), 'hear' from PIE *h₂ous- (ear), demonstrating the deep linguistic connection between physical senses and cognitive understanding.",
    linguistic_classification:
      "Perception verbs belong to multiple syntactic categories: stative verbs (involuntary perception), dynamic verbs (voluntary attention), linking verbs (sensory description), and evidential markers (epistemological stance).",
    cross_cultural_differences:
      "Different languages categorize perception differently. English distinguishes see/look, hear/listen more clearly than many languages. Some cultures have more elaborate smell or taste vocabularies, affecting second language acquisition patterns.",
  },
  perception_verbs_vocab: {
    visual_perception: [
      "see",
      "notice",
      "watch",
      "observe",
      "look (at)",
      "glimpse",
      "spot",
      "stare",
      "glance",
      "peek",
      "scan",
      "view",
      "eye",
      "gaze",
      "behold",
    ],

    auditory_perception: [
      "hear",
      "listen (to)",
      "overhear",
      "eavesdrop",
      "detect",
      "catch",
      "tune in",
      "monitor",
    ],

    tactile_perception: [
      "feel",
      "touch",
      "press",
      "grab",
      "grasp",
      "stroke",
      "pat",
      "rub",
      "tap",
      "squeeze",
      "caress",
    ],

    olfactory_perception: [
      "smell",
      "sniff",
      "inhale",
      "scent",
      "reek (of)",
      "whiff",
    ],

    gustatory_perception: ["taste", "savor", "sip", "sample", "nibble", "lick"],

    cognitive_perception: [
      "notice",
      "realize",
      "perceive",
      "recognize",
      "detect",
      "discern",
      "interpret",
      "sense",
      "comprehend",
      "figure out",
    ],

    idiomatic_phrasal_verbs: [
      "make out",
      "pick up on",
      "zero in on",
      "zone in on",
      "take in",
    ],

    stative_perception_verbs: [
      "see",
      "hear",
      "feel",
      "smell",
      "taste",
      "notice",
      "recognize",
      "realize",
    ],

    dynamic_perception_verbs: [
      "look",
      "listen",
      "watch",
      "observe",
      "sniff",
      "touch",
      "taste",
      "scan",
    ],
    archaic_perception_verbs: ["behold", "hearken", "hark", "espy", "descry"],
    technical_perception_verbs: [
      "detect",
      "register",
      "monitor",
      "scan",
      "perceive",
    ],
  },
  foundational_levels: {
    A1: {
      focus: "Basic sensory verbs and descriptive linking uses",
      verbs: ["see", "hear", "smell", "taste", "feel"],
      usage_examples: [
        "I see a cat.",
        "This cake smells delicious.",
        "The water feels cold.",
        "I hear music.",
        "The food tastes good.",
        "I feel happy.",
        "The room looks nice.",
      ],
      notes: [
        "Stative use only — not used in -ing form.",
        "`Feel like + V-ing` is common at this level.",
        "Focus on basic sensory descriptions.",
        "Use with simple adjectives only.",
      ],
      common_collocations: [
        "see clearly",
        "hear loudly",
        "smell good/bad",
        "taste sweet/sour",
        "feel soft/hard",
        "look beautiful/ugly",
      ],
      basic_patterns: [
        "I + perception verb + noun",
        "This/That + perception verb + adjective",
        "It + perception verb + adjective",
      ],
      frequency_order: ["see", "hear", "feel", "look", "smell", "taste"],
      learning_objectives: [
        "Recognize basic perception verbs in context",
        "Use stative perception verbs correctly (no -ing)",
        "Form simple descriptive sentences",
        "Distinguish between basic senses",
        "Use appropriate adjectives with linking perception verbs",
      ],
      typical_mistakes: [
        "I am seeing vs I see",
        "Missing articles: I see cat vs I see a cat",
        "Wrong adjective forms: smells well vs smells good",
      ],
    },
    A2: {
      focus: "Simple comparisons and expanded subject-verb-object forms",
      verbs: ["look", "sound", "feel like", "watch", "listen"],
      usage_examples: [
        "You look tired.",
        "It sounds nice.",
        "I feel like sleeping.",
        "She looks like her mother.",
        "This sounds like rain.",
        "I watch TV every day.",
        "Listen to the teacher.",
      ],
      notes: [
        "`Look/sound/feel + adjective` is common.",
        "Often used with basic adjectives and noun phrases.",
        "Introduction of voluntary vs involuntary perception.",
        "`Listen to` requires preposition.",
      ],
      comparison_structures: [
        "look like + noun",
        "sound like + noun",
        "feel like + verb-ing",
        "as + adjective + as",
      ],
      extended_vocabulary: [
        "Emotion adjectives: happy, sad, angry, excited",
        "Physical adjectives: hot, cold, warm, cool, soft, hard",
        "Sound adjectives: loud, quiet, noisy, silent",
      ],
      context_awareness: [
        "Distinguishing see vs watch",
        "Understanding hear vs listen difference",
        "Using look vs see appropriately",
      ],
      learning_objectives: [
        "Use comparison structures with perception verbs",
        "Distinguish voluntary from involuntary perception",
        "Apply appropriate prepositions (listen to)",
        "Form comparisons using 'like'",
        "Express preferences and opinions through perception",
      ],
      cultural_contexts: [
        "Politeness in descriptions (You look nice vs You look fat)",
        "Cultural differences in sensory descriptions",
        "Appropriate contexts for different perception verbs",
      ],
    },
  },

  intermediate_levels: {
    B1: {
      focus: "Perception with object + verb structures, comparisons",
      verbs: [
        "watch",
        "notice",
        "listen (to)",
        "seem",
        "appear",
        "observe",
        "spot",
        "detect",
      ],
      usage_examples: [
        "I saw her crossing the street.",
        "He heard the baby crying.",
        "She seems happy.",
        "I noticed him leave early.",
        "They appeared confused.",
        "We observed the birds flying south.",
      ],
      structures: {
        bare_infinitive: "I heard him sing.",
        participle: "I heard him singing.",
        linking_comparison: "It sounds like someone is crying.",
        that_clauses: "I noticed that she was upset.",
        reflexive_usage: "The situation feels like it's getting worse.",
      },
      notes: [
        "`Listen (to)` is intentional, `Hear` is passive.",
        "`Seem/Appear` begin more abstract usage.",
        "Bare infinitive shows complete action, -ing shows ongoing action.",
        "Introduction of evidential uses (seem, appear).",
      ],
      discourse_functions: [
        "Reporting observations objectively",
        "Expressing uncertainty or inference",
        "Narrating past events with sensory details",
        "Making polite suggestions through perception language",
      ],
      register_awareness: [
        "Formal vs informal perception reporting",
        "Academic vs conversational observation language",
        "Professional contexts for perception verbs",
      ],
      pragmatic_implications: [
        "Politeness through indirect perception statements",
        "Hedging with 'seem' and 'appear'",
        "Creating shared understanding through sensory description",
      ],
      learning_objectives: [
        "Master object + bare infinitive vs participle structures",
        "Use evidential perception verbs appropriately",
        "Report observations accurately and objectively",
        "Apply register-appropriate perception language",
        "Understand pragmatic functions of perception statements",
      ],
    },
    B2: {
      focus:
        "More precise action/state distinctions, contrast between infinitive and -ing use",
      usage_examples: [
        "I noticed him leave the room.",
        "They saw the thief escaping.",
        "She appeared tired after work.",
        "The data suggests what we perceived earlier.",
        "He was observed entering the building at midnight.",
        "The witness reported seeing the suspect flee.",
      ],
      notes: [
        "Choose `-ing` for ongoing actions, bare infinitive for complete ones.",
        "`Seem/Appear` can lead clauses.",
        "Passive perception constructions become important.",
        "Academic and formal register distinctions crucial.",
      ],
      advanced_structures: [
        "Passive perception: He was seen leaving",
        "Complex that-clauses: It appears that he understood",
        "Subjunctive-like uses: He seems as though he were dreaming",
        "Nominalized forms: His observation of the phenomenon",
      ],
      stylistic_variations: [
        "Academic reporting: 'It was observed that...'",
        "Narrative techniques: 'She watched as the sun set'",
        "Descriptive writing: 'The garden smelled of jasmine and rain'",
      ],
      academic_usage: [
        "Research reporting with perception verbs",
        "Objective observation descriptions",
        "Evidence-based conclusions using 'appear' and 'seem'",
      ],
      nuanced_meanings: [
        "Degrees of certainty with perception verbs",
        "Subjective vs objective perception reporting",
        "Temporal aspects of perception (ongoing vs completed)",
      ],
      learning_objectives: [
        "Navigate complex syntactic structures with perception verbs",
        "Apply appropriate academic register",
        "Use passive perception constructions effectively",
        "Distinguish nuanced meanings and implications",
        "Integrate perception language in extended discourse",
      ],
      critical_thinking_aspects: [
        "Evaluating reliability of perception-based evidence",
        "Understanding subjectivity in perception reporting",
        "Analyzing bias in observational language",
      ],
    },
  },

  advanced_levels: {
    C1: {
      focus: "Formal, abstract, academic perception verbs",
      verbs: [
        "detect",
        "discern",
        "perceive",
        "witness",
        "sense",
        "behold",
        "apprehend",
        "register",
      ],
      usage_examples: [
        "They perceived a change in attitude.",
        "She discerned subtle patterns in his speech.",
        "He sensed tension in the room.",
        "The researcher detected anomalies in the data.",
        "One could discern a shift in public opinion.",
        "The committee perceived the proposal as inadequate.",
      ],
      advanced_features: [
        "Nominalization: detection, perception, discernment",
        "Passive use: She was seen leaving.",
        "Subjunctive: It appears that he were guilty.",
        "Abstract conceptual perception",
        "Metaphorical extensions of sensory language",
      ],
      nominalization_patterns: [
        "detect → detection, detector, detectable",
        "perceive → perception, perceptive, perceptible",
        "observe → observation, observer, observable",
        "discern → discernment, discerning, discernible",
      ],
      metaphorical_extensions: [
        "Seeing as understanding: 'I see your point'",
        "Hearing as receiving: 'I hear you're leaving'",
        "Feeling as intuiting: 'I feel this won't work'",
        "Tasting as experiencing: 'He tasted success'",
      ],
      philosophical_implications: [
        "Epistemological questions about perception and reality",
        "Phenomenological aspects of sensory experience",
        "The relationship between perception and knowledge",
        "Cultural relativity of perceptual categories",
      ],
      discourse_analysis: [
        "Perception verbs as evidentiality markers",
        "Modalizing functions in academic discourse",
        "Stance-taking through perception language",
        "Constructing objectivity through perceptual reporting",
      ],
      learning_objectives: [
        "Master sophisticated academic discourse features",
        "Apply complex nominalization patterns",
        "Navigate philosophical and theoretical discussions",
        "Use perception language for stance-taking",
        "Understand cross-disciplinary applications",
      ],
    },
    C2: {
      focus: "Philosophical, metaphorical, and legal structures",
      usage_examples: [
        "The committee perceived the policy as flawed.",
        "He was observed to exit the premises.",
        "The scent evokes a childhood memory—he felt himself transported.",
        "One perceives in this work a profound meditation on mortality.",
        "The witness testified to having observed the defendant's suspicious behavior.",
        "The critic discerned in the performance subtle allusions to earlier works.",
      ],
      notes: [
        "Often used in abstract evaluations or metaphor.",
        "Passive and impersonal structures dominate at C2.",
        "Sophisticated register and style variations.",
        "Integration with complex philosophical and academic discourse.",
      ],
      literary_techniques: [
        "Stream of consciousness perception",
        "Synesthetic descriptions (hearing colors, tasting sounds)",
        "Perception as narrative device",
        "Unreliable perception in literature",
      ],
      theoretical_frameworks: [
        "Cognitive linguistics and perception",
        "Phenomenology and embodied cognition",
        "Semiotics and perceptual meaning",
        "Psychology of perception and language",
      ],
      interdisciplinary_connections: [
        "Neuroscience: brain imaging and perception studies",
        "Philosophy: empiricism, rationalism, phenomenology",
        "Psychology: perception, cognition, consciousness",
        "Anthropology: cultural variations in perception",
        "Art: aesthetics and perceptual experience",
      ],
      mastery_indicators: [
        "Seamless register switching",
        "Creative metaphorical usage",
        "Sophisticated academic argumentation",
        "Cultural and literary allusions",
        "Original expression and style",
      ],
      learning_objectives: [
        "Achieve native-like fluency and creativity",
        "Master all registers and contexts",
        "Demonstrate cultural and literary competence",
        "Apply perception language innovatively",
        "Contribute to academic and artistic discourse",
      ],
    },
  },

  perception_structures: {
    action_verb: {
      description: "Perception as a deliberate act",
      example: "He is watching TV.",
      notes: ["These verbs can be used in continuous form."],
    },
    stative_verb: {
      description: "Describes a state, not an action",
      example: "I see a car outside.",
      notes: ["Usually not used in continuous form."],
    },
    linking_verb: {
      description: "Connects subject to a complement (adjective)",
      example: "The soup smells good.",
      notes: ["Acts like 'be' in this use."],
    },
    causative_like: {
      description: "Causes someone to perceive",
      example: "I had him watch the video.",
      notes: ["Different from normal perception verbs."],
    },
  },

  common_mistakes: [
    {
      error: "I am seeing the flowers.",
      correction: "I see the flowers.",
      reason: "`See` is stative, not used in continuous.",
    },
    {
      error: "I heard him to sing.",
      correction: "I heard him sing.",
      reason: "Perception verbs use bare infinitive, not 'to'.",
    },
    {
      error: "She looks as she is tired.",
      correction: "She looks as if she is tired.",
      reason: "Missing 'as if' or 'like'.",
    },
    {
      error: "I listened music.",
      correction: "I listened to music.",
      reason: "`Listen` always needs 'to'.",
    },
  ],

  advanced_usage_notes: {
    passives: [
      "He was seen entering the room.",
      "She was heard singing a lullaby.",
    ],
    nominalization: [
      "Perception of color differs across cultures.",
      "His detection of the problem was impressive.",
    ],
    literary_or_poetic: [
      "He felt the darkness embrace him.",
      "She sensed time slipping away.",
    ],
    academic_discourse: [
      "The study examined participants' perception of risk.",
      "Data analysis revealed patterns not initially perceived.",
    ],
    legal_language: [
      "The defendant was observed to leave the premises.",
      "Witness testimony regarding what was seen and heard.",
    ],
    scientific_terminology: [
      "Instruments detected minute changes in temperature.",
      "Researchers observed cellular behavior under microscopy.",
    ],
  },

  summary: {
    beginner_focus:
      "Learn to describe what you sense (see, hear, feel...) and how things seem.",
    intermediate_focus:
      "Use bare infinitive vs. -ing, and comparisons with 'like', 'as if'.",
    advanced_focus:
      "Master formal, passive, and abstract uses. Nominalize and manipulate mood.",
    tips: [
      "Don't overuse continuous tense with stative perception verbs.",
      "Watch out for infinitive vs. -ing usage differences.",
      "Practice passive perception forms in formal writing.",
    ],
    mastery_progression: [
      "A1-A2: Basic sensory description and stative/dynamic distinction",
      "B1-B2: Complex structures and evidential functions",
      "C1-C2: Academic, literary, and creative applications",
    ],
    assessment_criteria: [
      "Accuracy in form and meaning",
      "Appropriate register selection",
      "Creative and innovative usage",
      "Cultural and contextual awareness",
    ],
  },
  sense_groups: {
    visual: ["see", "look", "watch", "observe", "notice", "witness", "behold"],
    auditory: ["hear", "listen", "overhear", "eavesdrop", "detect", "perceive"],
    tactile: ["feel", "touch", "sense"],
    olfactory: ["smell", "sniff", "inhale", "reek", "emit scent"],
    gustatory: ["taste", "savor", "sample"],
    synesthetic: ["see sounds", "taste colors", "hear textures"],
    metaphorical: ["see the point", "hear the news", "feel the pressure"],
  },
  comparisons_with_other_verbs: {
    perception_vs_action: {
      explanation:
        "Perception verbs describe receiving information through senses; action verbs describe intentional activities.",
      example: {
        perception: "I saw him run.",
        action: "I chased him down the street.",
      },
    },
    perception_vs_linking: {
      explanation:
        "Some perception verbs function as linking verbs (seem, look), similar to 'be'.",
      example: {
        perception: "You look happy.",
        linking_equivalent: "You are happy.",
      },
    },
    perception_vs_cognitive: {
      explanation:
        "Perception is direct sensory input; cognition involves mental processing.",
      example: {
        perception: "I heard the music.",
        cognitive: "I understood the message.",
      },
    },
  },
  adjective_collocations: {
    look: ["happy", "tired", "suspicious", "pale"],
    sound: ["strange", "familiar", "boring", "interesting"],
    smell: ["delicious", "terrible", "fresh", "rotten"],
    taste: ["sweet", "bitter", "salty", "sour"],
    feel: ["soft", "rough", "cold", "warm"],
    seem: ["reasonable", "unlikely", "obvious", "strange"],
    appear: ["confident", "nervous", "surprised", "disappointed"],
  },
  adverb_combinations: {
    see: ["clearly", "barely", "suddenly"],
    hear: ["loudly", "faintly", "accidentally"],
    feel: ["strongly", "intensely", "gently"],
    watch: ["carefully", "intently", "passively"],
    listen: ["attentively", "carefully", "actively"],
  },
  idioms_and_phrases: [
    {
      expression: "look before you leap",
      meaning: "think carefully before taking action",
      level: "B2",
      register: "informal",
    },
    {
      expression: "turn a deaf ear",
      meaning: "ignore someone intentionally",
      level: "B2",
      register: "formal",
    },
    {
      expression: "a sight for sore eyes",
      meaning: "someone/something you're happy to see",
      level: "B2",
      register: "informal",
    },
    {
      expression: "give someone the cold shoulder",
      meaning: "intentionally ignore",
      level: "B2",
      register: "informal",
    },
    {
      expression: "rub the wrong way",
      meaning: "irritate or bother someone",
      level: "B2",
      register: "informal",
    },
  ],
  tense_aspect_and_voice: {
    simple_present: "I see the car. (stative)",
    present_continuous: "I'm watching the movie. (action)",
    past_simple: "She heard the scream.",
    past_continuous: "She was hearing odd sounds all night. (unusual)",
    present_perfect: "I have heard that before.",
    passive_form: "He was seen entering the bank.",
    causative_structure: "She had me listen to it again.",
    future_forms: "You will see the results tomorrow.",
    perfect_continuous: "I have been watching this series for hours.",
    subjunctive: "It seems as though he were invisible.",
  },
  advanced_errors: [
    {
      error: "She perceived him to be smiling broadly.",
      correction: "She perceived him smiling broadly.",
      reason:
        "In perception structures, use present participle (not infinitive with 'to')",
      level: "C1",
      linguistic_explanation:
        "Perception verbs in complex structures require present participle to show ongoing action, not infinitive constructions.",
    },
    {
      error: "The perfume smelt nicely.",
      correction: "The perfume smelt nice.",
      reason: "Linking/perception verbs take adjectives, not adverbs.",
      level: "B2",
      linguistic_explanation:
        "When perception verbs function as linking verbs, they require adjectival complements to describe the subject's quality.",
    },
    {
      error: "They observed as the man to leave.",
      correction: "They observed the man leave.",
      reason: "Incorrect infinitive with 'to' used after perception verb.",
      level: "B2",
      linguistic_explanation:
        "Perception verbs take bare infinitive in object + verb constructions, not 'to' infinitive.",
    },
  ],
  domain_usage: {
    literature: [
      "Symbolic use of perception verbs in stream-of-consciousness writing.",
      "Narrative voice often uses 'sense', 'perceive', 'feel' metaphorically.",
    ],
    law: [
      "Witness statements include perception verbs: 'I saw the suspect run away.'",
      "Perception-related passive forms common in legal reports: 'He was seen holding a weapon.'",
    ],
    science: [
      "Perception verbs used in experimental observation: 'Participants reported hearing a tone.'",
      "Differentiate 'sense' as biological vs psychological.",
    ],
    medicine: [
      "Patient reports: 'I feel pain in my chest.'",
      "Clinical observations: 'The patient appeared distressed.'",
    ],
    psychology: [
      "Perception studies: 'Subjects perceived the ambiguous figure differently.'",
      "Therapeutic contexts: 'How do you feel about that?'",
    ],
    technology: [
      "Sensor technology: 'The device detected movement.'",
      "User interface: 'Users reported seeing improved performance.'",
    ],
    media: [
      "Journalism: 'Witnesses observed the incident unfold.'",
      "Broadcasting: 'Viewers will see a documentary tonight.'",
    ],
  },
  semantic_contrasts: {
    perception_vs_emotion: {
      perception: "She felt the breeze on her face.",
      emotion: "She felt happy after the news.",
      note: "`Feel` is both perception and emotion verb depending on context.",
    },
    perception_vs_thinking: {
      perception: "I saw the man leave.",
      cognition: "I realized he was gone.",
      note: "Perception is direct sensing; cognition is mental processing.",
    },
    perception_vs_volition: {
      perception: "He heard the music.",
      volition: "He chose to play music.",
      note: "Volition verbs involve intent, unlike passive perception.",
    },
    direct_vs_indirect: {
      direct: "I saw her leave the building.",
      indirect: "She appears to have left the building.",
      note: "Direct perception reports sensory experience; indirect perception expresses inference.",
    },
  },
  stylistic_variations: {
    spoken_english: {
      typical_usage: [
        "I saw him do it.",
        "You sound tired.",
        "It feels weird.",
      ],
      notes: [
        "Often informal, with ellipsis or contractions.",
        "Use of 'feel like', 'seem like', etc.",
      ],
    },
    academic_writing: {
      typical_usage: [
        "The participant reported perceiving a slight increase in temperature.",
        "It appears that cognitive dissonance influenced behavior.",
        "Auditory cues were detected under low-light conditions.",
      ],
      notes: [
        "Favor nominalizations: detection, perception, observation.",
        "Prefer passive voice for objectivity: 'was observed', 'was heard'.",
      ],
    },
    creative_writing: {
      typical_usage: [
        "She tasted the salt of her tears.",
        "The silence screamed louder than words.",
        "He could almost hear her thoughts.",
      ],
      notes: [
        "Metaphorical and synesthetic usage common.",
        "Personification through perception verbs.",
      ],
    },
    business_english: {
      typical_usage: [
        "We perceive this as an opportunity.",
        "The market appears to be recovering.",
        "Clients have observed improvements in service.",
      ],
      notes: [
        "Professional, objective tone.",
        "Emphasis on observation and analysis.",
      ],
    },
  },
  hypothetical_and_conditional_usage: {
    examples: [
      "If you hear anything strange, let me know.",
      "It would seem he's not interested.",
      "You might feel as if time stopped.",
    ],
    notes: [
      "`Would + seem/appear` adds tentativeness or politeness.",
      "`Feel like` often used with imagined/unreal scenarios.",
      "Can combine with second or third conditional.",
    ],
    modal_combinations: [
      "might see",
      "could hear",
      "would seem",
      "should appear",
    ],
    counterfactual_scenarios: [
      "If I had seen him, I would have warned you.",
      "She seemed as if she had heard the news already.",
    ],
  },
  clausal_constructions: {
    noun_clause: {
      example: "I noticed that she was nervous.",
      note: "Common with verbs like 'notice', 'sense', 'observe'.",
    },
    infinitive_clause: {
      example: "He appeared to be lying.",
      note: "Frequently used with 'seem', 'appear'.",
    },
    relative_clause: {
      example: "The person I saw yesterday is here.",
      note: "Links perception to past reference.",
    },
    participle_clause: {
      example: "Hearing the news, she started crying.",
      note: "Perception verb in participial constructions for cause-effect.",
    },
  },
  impersonal_structures: {
    format: "It + perception verb + that-clause",
    examples: [
      "It seems that she's right.",
      "It appears that no one is listening.",
      "It sounds like a good idea.",
    ],
    note: "Useful in formal or indirect speech. Helps avoid assigning direct responsibility.",
    formal_variants: [
      "It would appear that...",
      "It would seem that...",
      "One perceives that...",
    ],
  },
  exam_focus: {
    ielts: {
      part_speaking: "Describe something you saw or heard recently.",
      writing:
        "Using verbs like 'seem', 'appear', and 'feel' adds variety and style.",
      tip: "Avoid 'I am seeing' — show tense control.",
      band_descriptors: {
        "6.0": "Uses basic perception verbs accurately",
        "7.0": "Shows range in perception verb usage",
        "8.0": "Uses sophisticated perception language",
        "9.0": "Demonstrates native-like perception verb control",
      },
    },
    toefl: {
      listening: "Identify what the speaker *heard*, *saw*, or *noticed*.",
      writing: "Use 'It appears that...' to express subtle argument.",
      speaking:
        "Describe sensory experiences using appropriate perception verbs.",
      reading: "Understand inference markers like 'seem' and 'appear'.",
    },
    cambridge: {
      B2: "Correct verb form: 'I heard her (sing/singing)?'",
      C1: "Rewriting task with passive perception verbs.",
      C2: "Nominalization and academic style: 'Observation of behavior...'",
      specific_tasks: {
        First: "Use perception verbs in storytelling",
        Advanced: "Transform active to passive perception structures",
        Proficiency: "Academic register with perception language",
      },
    },
  },
  verb_confusion: [
    {
      confusing_pair: ["hear", "listen"],
      example_wrong: "I listened a noise.",
      example_right: "I heard a noise.",
      tip: "`Listen` needs 'to'; `hear` is passive.",
      level: "A2",
    },
    {
      confusing_pair: ["see", "watch"],
      example_wrong: "I was seeing TV.",
      example_right: "I was watching TV.",
      tip: "`See` is passive awareness; `watch` is active observation.",
      level: "A2",
    },
  ],
  pedagogical_suggestions: {
    visual_aids:
      "Use images/sounds/videos and ask learners to describe what they see/hear.",
    roleplay:
      "Simulate situations (e.g., witness a scene) and ask learners to use perception verbs.",
    tense_awareness:
      "Highlight difference in meaning between 'hear someone sing' vs 'hear someone singing'.",
    dictation: "Play sounds and ask learners to describe what they perceived.",
    advanced_practice:
      "Paraphrase active to passive: 'People saw him enter.' → 'He was seen to enter.'",
    technology_integration: "Use VR/AR for immersive perception verb practice.",
    assessment_methods:
      "Portfolio assessment tracking perception verb development across levels.",
  },
  modal_combinations: [
    {
      structure: "might + perception verb",
      example: "You might hear a faint sound if you listen closely.",
      usage: "Express uncertainty or possibility of perception",
      level: "B1",
    },
    {
      structure: "must + perception verb",
      example: "You must have heard that explosion!",
      usage: "Express strong assumption based on sense",
      level: "B2",
    },
    {
      structure: "can + perception verb",
      example: "I can see the mountain from here.",
      usage: "Describe actual sensory ability",
      level: "A2",
    },
  ],
  advanced_passive_usage: [
    {
      active: "People heard the man shout.",
      passive: "The man was heard to shout.",
      note: "Passive perception verbs often add 'to' before bare infinitive.",
      register: "formal",
    },
    {
      active: "They saw her dancing.",
      passive: "She was seen dancing.",
      note: "Present participle stays the same in passive if used.",
      register: "formal",
    },
  ],
  semantic_distinction: {
    direct_perception: {
      definition: "The speaker experienced the perception firsthand.",
      example: "I saw her leave the room.",
    },
    indirect_perception: {
      definition: "The perception is inferred or assumed based on evidence.",
      example: "She seems upset.",
      note: "`Seem`, `appear`, `sound` often indicate inference, not direct sensing.",
    },
    inferred_perception: {
      definition: "Conclusion drawn from indirect sensory evidence.",
      example: "From the smell, it appears dinner is ready.",
      note: "Combines sensory input with logical deduction.",
    },
  },
  authentic_usage_examples: [
    "You smell that? Something's burning.",
    "Did you hear that knock?",
    "I could feel her tension across the table.",
    "The music sounds like something from the 80s.",
    "You don't look okay — what's wrong?",
    "That dish tastes incredible — what's in it?",
    "He was seen running away from the building.",
    "It appears we've made a mistake.",
  ],
  ai_and_data_applications: {
    computer_vision: [
      "AI 'sees' images via convolutional neural networks — analogous to 'see', 'notice', 'observe'.",
    ],
    speech_recognition: [
      "Systems 'hear' and 'interpret' input — equivalent of 'listen', 'hear'.",
    ],
    sentiment_analysis: [
      "`It seems`, `feels like` mapped to modal/subjective expressions in language modeling.",
    ],
    robotics: [
      "Sensors enable robots to 'sense' environment (temperature, motion, touch) using similar semantics.",
    ],
    machine_learning: [
      "Pattern 'detection' and 'recognition' in data analysis.",
      "Algorithm 'perceives' patterns in large datasets.",
    ],
    natural_language_processing: [
      "Text analysis 'detects' sentiment and meaning.",
      "Language models 'sense' context and generate appropriate responses.",
    ],
  },
  tense_shift_and_aspect: [
    {
      structure: "Simple vs Progressive",
      example: {
        simple: "I saw him cross the street.",
        progressive: "I was seeing him cross the street.",
      },
      note: "`Was seeing` thường *không tự nhiên* trừ phi trong ngữ cảnh đặc biệt (e.g. romantic seeing = dating).",
    },
    {
      structure: "Present Perfect with Perception",
      example: {
        perfect: "I've heard that song before.",
      },
      usage: "Diễn tả trải nghiệm cảm nhận đã từng xảy ra.",
    },
    {
      structure: "Future Perception",
      example: {
        simple: "You'll hear from us soon.",
      },
      usage: "Không phải cảm giác vật lý mà là nghĩa bóng (ngữ dụng học).",
    },
  ],
  cross_linguistic_comparison: {
    vietnamese: {
      see: "thấy",
      watch: "xem",
      hear: "nghe",
      feel: "cảm thấy",
      smell: "ngửi",
      note: "Một số perception verbs tiếng Anh phân biệt rất rõ giữa hành động chủ động và thụ động, điều mà tiếng Việt ít phân biệt.",
    },
    french: {
      see: "voir",
      look: "regarder",
      hear: "entendre",
      listen: "écouter",
      feel: "sentir",
      note: "Phân biệt mạnh giữa regarder/voir và écouter/entendre – như tiếng Anh.",
    },
    spanish: {
      see: "ver",
      look: "mirar",
      hear: "oír",
      listen: "escuchar",
      feel: "sentir",
      note: "Similar active/passive distinctions as English",
    },
    mandarin: {
      see: "看见",
      look: "看",
      hear: "听见",
      listen: "听",
      feel: "感觉",
      note: "Uses resultative compounds to show completion of perception",
    },
  },
  pragmatics_and_politeness: [
    {
      form: "You seem upset.",
      function: "Indirect/polite way of expressing concern.",
      level: "B2–C1",
    },
    {
      form: "It looks like we made a mistake.",
      function: "Shared responsibility / softening blame.",
      level: "C1–C2",
    },
    {
      form: "I can feel something's wrong.",
      function: "Expressing intuition / empathy.",
      level: "B2-C1",
    },
  ],
  artistic_usages: {
    music: [
      "`hear`, `listen to`, `sound like`, `resonate` – mô tả cảm giác âm nhạc và tác động cảm xúc.",
      "This melody sounds nostalgic.",
    ],
    visual_art: [
      "`see`, `look at`, `observe`, `perceive` – mô tả phản ứng thị giác với hội họa.",
      "He perceived sadness in the brush strokes.",
    ],
    literature: [
      "Perception verbs dùng mô tả dòng ý thức, miêu tả cảm xúc ngầm, hoặc ẩn dụ.",
      "She felt the silence scream louder than words.",
    ],
    theater: [
      "Audience 'sees' the performance, 'hears' the dialogue.",
      "Directors help actors 'feel' their characters' emotions.",
    ],
    film: [
      "Viewers 'watch' the story unfold, 'observe' character development.",
      "Sound design makes audience 'hear' the atmosphere.",
    ],
  },
  grammar_links: {
    linking_verbs: ["look", "sound", "feel", "seem", "appear"],
    causative_structures: [
      "have someone hear/see/do",
      "get something heard/seen",
    ],
    passive_voice: ["He was seen to leave", "She was heard crying"],
    reported_speech: [
      "He seemed to be lying",
      "It appeared they knew each other",
    ],
    subjunctive_mood: ["It seems as though he were invisible"],
    conditional_sentences: [
      "If you see him, tell me",
      "Were I to hear anything, I'd let you know",
    ],
  },

  references: {
    academic_sources: [
      {
        title: "The Grammar of English Perception Verbs",
        author: "Evans, Vyvyan & Green, Melanie",
        year: 2006,
        publisher: "Edinburgh University Press",
        type: "book",
        url: "https://edinburghuniversitypress.com",
      },
      {
        title: "Perception and Cognition in Language and Thought",
        author: "Talmy, Leonard",
        year: 2018,
        publisher: "MIT Press",
        type: "book",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author: "Quirk, Randolph et al.",
        year: 1985,
        publisher: "Longman",
        type: "book",
      },
      {
        title: "The Cambridge Grammar of English",
        author: "Huddleston, Rodney & Pullum, Geoffrey K.",
        year: 2002,
        publisher: "Cambridge University Press",
        type: "book",
      },
      {
        title:
          "Cognitive Linguistics and Perception Verbs: A Cross-linguistic Study",
        author: "Viberg, Åke",
        year: 2001,
        type: "article",
        url: "https://www.researchgate.net/publication/perception-verbs",
      },
    ],
    online_resources: [
      {
        title: "Oxford English Grammar Course",
        url: "https://www.oxfordlearnersdictionaries.com/grammar",
        description:
          "Comprehensive online grammar resource with perception verb exercises",
        level: "A1-C2",
      },
      {
        title: "Cambridge Dictionary Grammar",
        url: "https://dictionary.cambridge.org/grammar/british-grammar/",
        description: "Detailed explanations of perception verbs with examples",
        level: "B1-C2",
      },
      {
        title: "BBC Learning English Grammar",
        url: "https://www.bbc.co.uk/learningenglish/english/grammar",
        description: "Interactive lessons on perception verbs and their usage",
        level: "A2-B2",
      },
      {
        title: "Purdue OWL Grammar Guide",
        url: "https://owl.purdue.edu/owl/general_writing/grammar/",
        description: "Academic writing focused perception verb usage",
        level: "B2-C2",
      },
      {
        title: "English Grammar in Use Online",
        url: "https://www.cambridge.org/elt/englishgrammarinuse",
        description:
          "Raymond Murphy's comprehensive grammar with perception verb units",
        level: "A2-C1",
      },
    ],
    recommended_books: [
      {
        title: "English Grammar in Use (Intermediate)",
        author: "Raymond Murphy",
        isbn: "978-1-108-45743-7",
        level: "B1-B2",
        focus: "Practical usage of perception verbs with exercises",
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        isbn: "978-1-108-48993-3",
        level: "C1-C2",
        focus: "Complex structures and advanced perception verb usage",
      },
      {
        title: "The Teacher's Grammar of English",
        author: "Ron Cowan",
        isbn: "978-0-521-80939-8",
        level: "Teacher Reference",
        focus: "Pedagogical approaches to teaching perception verbs",
      },
      {
        title: "Longman Grammar of Spoken and Written English",
        author: "Douglas Biber et al.",
        isbn: "978-0-582-23725-4",
        level: "C1-C2",
        focus: "Corpus-based analysis of perception verb usage",
      },
      {
        title: "Oxford Practice Grammar Advanced",
        author: "George Yule",
        isbn: "978-0-19-437014-8",
        level: "C1-C2",
        focus: "Advanced practice with perception verbs in context",
      },
    ],
  },

  progressive_learning_path: {
    A1_to_A2: [
      "Master basic stative perception verbs (see, hear, feel, smell, taste)",
      "Learn simple linking verb patterns (look + adjective, sound + adjective)",
      "Practice basic sensory descriptions",
      "Avoid progressive forms with stative perception verbs",
      "Use appropriate prepositions (listen to, look at)",
    ],
    A2_to_B1: [
      "Distinguish voluntary vs involuntary perception (see/look, hear/listen)",
      "Learn comparison structures (look like, sound like, feel like)",
      "Practice perception in past tenses and narratives",
      "Introduce seem/appear for basic inference",
      "Master object + perception patterns",
    ],
    B1_to_B2: [
      "Complex object + verb structures (bare infinitive vs participle)",
      "Academic and formal register awareness",
      "Passive perception constructions",
      "Extended discourse with perception language",
      "Evidential uses of seem/appear",
    ],
    B2_to_C1: [
      "Advanced academic perception verbs (detect, discern, perceive)",
      "Nominalization and abstract usage",
      "Sophisticated register switching",
      "Metaphorical extensions of perception language",
      "Complex evidential and epistemic functions",
    ],
    C1_to_C2: [
      "Literary and creative applications",
      "Philosophical and theoretical discourse",
      "Innovative metaphorical usage",
      "Cross-disciplinary academic writing",
      "Native-like fluency and creativity",
    ],
  },

  assessment_rubrics: {
    A1: {
      criteria: [
        "Uses basic perception verbs correctly in simple sentences",
        "Avoids progressive forms with stative verbs",
        "Forms simple sensory descriptions",
      ],
      indicators: [
        "I see a cat (not I am seeing)",
        "The cake smells good",
        "I hear music",
      ],
      common_errors: [
        "Progressive forms with stative verbs",
        "Missing articles in basic sentences",
        "Incorrect adjective forms",
      ],
    },
    A2: {
      criteria: [
        "Distinguishes basic voluntary/involuntary perception",
        "Uses comparison structures appropriately",
        "Applies correct prepositions",
      ],
      indicators: [
        "I watch TV vs I see a bird",
        "She looks like her sister",
        "Listen to the teacher",
      ],
      common_errors: [
        "Confusion between see/watch, hear/listen",
        "Missing prepositions",
        "Incorrect comparison structures",
      ],
    },
    B1: {
      criteria: [
        "Masters object + verb constructions",
        "Uses evidential seem/appear appropriately",
        "Reports observations objectively",
      ],
      indicators: [
        "I saw him leave vs I saw him leaving",
        "She seems tired",
        "I noticed that he was upset",
      ],
      common_errors: [
        "Infinitive vs participle confusion",
        "Inappropriate register choices",
        "Incorrect that-clause usage",
      ],
    },
    B2: {
      criteria: [
        "Applies complex syntactic structures",
        "Uses appropriate academic register",
        "Masters passive perception constructions",
      ],
      indicators: [
        "He was observed entering the building",
        "It appears that the hypothesis is correct",
        "The data suggests what we perceived earlier",
      ],
      common_errors: [
        "Register inconsistencies",
        "Passive construction errors",
        "Inappropriate formality levels",
      ],
    },
    C1: {
      criteria: [
        "Uses sophisticated academic perception language",
        "Applies complex nominalization patterns",
        "Demonstrates cross-disciplinary competence",
      ],
      indicators: [
        "The perception of risk varies culturally",
        "One discerns in this work subtle influences",
        "The detection of fraud requires expertise",
      ],
      common_errors: [
        "Overcomplicated structures",
        "Inappropriate nominalizations",
        "Register mixing",
      ],
    },
    C2: {
      criteria: [
        "Demonstrates native-like creativity and fluency",
        "Uses perception language innovatively",
        "Shows cultural and literary competence",
      ],
      indicators: [
        "Creative metaphorical extensions",
        "Sophisticated literary applications",
        "Original academic contributions",
      ],
      common_errors: [
        "Rare at this level",
        "Occasional non-native collocations",
        "Minor register inconsistencies",
      ],
    },
  },
};
