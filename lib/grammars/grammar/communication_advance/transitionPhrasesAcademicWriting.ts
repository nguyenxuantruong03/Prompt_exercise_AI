import { transitionPhrasesAcademicWritingType } from "@/types/grammars/grammar/communication_advance/transitionPhrasesAcademicWriting";

export const transitionPhrasesAcademicWritingData: transitionPhrasesAcademicWritingType =
  {
    topic: "Sử dụng cụm từ chuyển tiếp trong viết học thuật",
    description:
      "Tổng hợp đầy đủ cụm từ chuyển tiếp (transition phrases/linking words) được dùng để kết nối các ý trong viết học thuật, theo cấp độ CEFR từ A1 đến C2.",
    academic_definition:
      "Transition phrases are linguistic devices that create cohesion and coherence in academic discourse by establishing logical relationships between ideas, sentences, and paragraphs. They serve as bridges that guide readers through the writer's argument structure while maintaining textual unity and flow.",
    linguistic_background:
      "Transition phrases originate from various linguistic traditions including classical rhetoric, discourse analysis, and systemic functional linguistics. They function as cohesive devices that operate at both micro (sentence-level) and macro (text-level) structures, facilitating reader comprehension through explicit signaling of semantic relationships.",
    purposes: [
      "Tạo mạch văn mượt mà và logic",
      "Liên kết các ý tưởng, đoạn văn, luận điểm",
      "Tăng tính học thuật và chuyên nghiệp trong bài viết",
      "Hỗ trợ thể hiện quan điểm, đối chiếu, kết luận, nguyên nhân, kết quả, v.v.",
      "Cải thiện khả năng đọc hiểu và theo dõi luận điểm của người đọc",
      "Thể hiện mức độ học thuật và chuyên môn của người viết",
    ],
    importance_in_academic_writing: [
      "Essential for achieving high scores in academic writing assessments (IELTS, TOEFL, academic essays)",
      "Demonstrates sophisticated command of English discourse structure",
      "Facilitates clear argumentation and logical flow in research papers",
      "Enhances reader engagement and comprehension",
      "Reflects academic register and formal writing conventions",
      "Supports complex idea development and nuanced argument presentation",
    ],
    theoretical_framework: {
      cohesion_theory:
        "Based on Halliday and Hasan's cohesion theory, transition phrases function as conjunctive devices that create surface-level textual connections through explicit linking mechanisms.",
      coherence_principles:
        "Following Grice's cooperative principle and relevance theory, effective transitions enhance semantic coherence by making implicit logical relationships explicit for optimal reader processing.",
      discourse_analysis:
        "Grounded in functional discourse analysis, transitions serve as metadiscourse markers that organize propositional content while guiding reader interpretation through the text's rhetorical structure.",
    },
    levels: {
      A1: {
        description:
          "Foundational transition phrases for basic sentence connections in simple academic contexts.",
        learning_objectives: [
          "Master basic coordinating conjunctions for simple idea connection",
          "Use elementary sequence markers in chronological writing",
          "Apply simple cause-effect relationships in basic explanations",
          "Employ basic contrast markers for opposing ideas",
        ],
        key_concepts: [
          "Linear sentence progression",
          "Basic logical relationships",
          "Simple coordination",
          "Elementary academic vocabulary",
        ],
        transitions: {
          addition: [
            {
              phrase: "and",
              definition:
                "Basic coordinating conjunction connecting similar ideas or items",
              usage:
                "Connects words, phrases, or clauses of equal grammatical importance",
              example: "The study examined grammar and vocabulary acquisition.",
              formality_level: "neutral",
              position: ["middle"],
              punctuation_rules:
                "Use comma before 'and' in series of three or more items",
            },
            {
              phrase: "also",
              definition:
                "Additive adverb indicating an additional point or idea",
              usage:
                "Adds supplementary information to support the main argument",
              example:
                "The research also revealed significant improvements in writing skills.",
              formality_level: "neutral",
              position: ["beginning", "middle"],
              punctuation_rules: "Comma after 'also' when beginning a sentence",
            },
          ],
          sequence: [
            {
              phrase: "first",
              definition:
                "Ordinal adverb indicating the initial step or point in a sequence",
              usage:
                "Introduces the first item in a chronological or logical order",
              example: "First, students completed a diagnostic assessment.",
              formality_level: "neutral",
              position: ["beginning"],
              punctuation_rules:
                "Always followed by comma when beginning a sentence",
            },
            {
              phrase: "then",
              definition:
                "Temporal adverb indicating subsequent action or idea",
              usage:
                "Shows chronological or logical progression to the next step",
              example:
                "Students reviewed the material, then completed the exercise.",
              formality_level: "informal",
              position: ["beginning", "middle"],
              punctuation_rules: "Comma before 'then' in compound sentences",
            },
          ],
          cause_effect: [
            {
              phrase: "because",
              definition:
                "Subordinating conjunction introducing a reason or cause",
              usage: "Explains why something happens or provides justification",
              example: "The results improved because students practiced daily.",
              formality_level: "neutral",
              position: ["middle"],
              punctuation_rules:
                "No comma when 'because' clause follows main clause",
            },
          ],
          contrast: [
            {
              phrase: "but",
              definition:
                "Coordinating conjunction showing opposition or contrast",
              usage: "Presents contrasting information or opposing viewpoints",
              example:
                "The method was effective, but it required extensive preparation.",
              formality_level: "neutral",
              position: ["middle"],
              punctuation_rules: "Comma before 'but' in compound sentences",
            },
          ],
        },
        detailed_explanations: {
          addition: {
            definition:
              "Addition transitions combine ideas that support or extend the same argument direction",
            when_to_use:
              "When presenting multiple supporting points, examples, or evidence for the same claim",
            structure_rules: [
              "Place 'and' between parallel grammatical structures",
              "Use 'also' to add emphasis to additional points",
              "Maintain parallel structure when listing items",
            ],
            examples_in_context: [
              "Academic paragraph: The methodology included interviews and observations. The researchers also conducted surveys to gather quantitative data.",
              "Simple explanation: Students read the text and answered questions. They also discussed their findings in groups.",
            ],
          },
          sequence: {
            definition:
              "Sequence transitions organize information in chronological or logical order",
            when_to_use:
              "When describing processes, steps, or chronological events in academic contexts",
            structure_rules: [
              "Use ordinal numbers (first, second) for formal sequences",
              "Follow with comma when beginning sentences",
              "Maintain consistent tense throughout the sequence",
            ],
            examples_in_context: [
              "Process description: First, participants completed a pre-test. Then, they received instruction for two weeks.",
              "Method explanation: The experiment began with orientation. Then, data collection occurred over three months.",
            ],
          },
        },
        common_patterns: [
          "Subject + verb + object, and subject + verb + object",
          "First, [sentence]. Then, [sentence].",
          "[Statement], but [contrasting statement]",
          "[Statement] because [reason]",
        ],
        practice_guidelines: [
          "Focus on one transition type per writing session",
          "Practice with simple, concrete topics before abstract concepts",
          "Use visual diagrams to understand logical relationships",
          "Read aloud to hear natural rhythm and flow",
        ],
      },
      A2: {
        description:
          "Expanded transition repertoire for more complex idea relationships in pre-intermediate academic writing.",
        learning_objectives: [
          "Diversify addition and contrast markers beyond basic conjunctions",
          "Master intermediate sequence and example markers",
          "Develop cause-effect relationship expression",
          "Begin using simple conclusion markers",
        ],
        key_concepts: [
          "Expanded conjunction variety",
          "Intermediate logical relationships",
          "Basic academic register awareness",
          "Simple paragraph organization",
        ],
        transitions: {
          addition: [
            {
              phrase: "besides",
              definition:
                "Preposition/adverb introducing additional supporting information",
              usage: "Adds extra points that reinforce the main argument",
              example:
                "Besides improving grammar, the course enhanced vocabulary knowledge.",
              formality_level: "neutral",
              position: ["beginning"],
              punctuation_rules:
                "Comma after 'besides' when beginning a sentence",
            },
            {
              phrase: "too",
              definition:
                "Additive adverb placed at sentence end for additional information",
              usage: "Confirms or adds to previously stated information",
              example:
                "The research methodology was innovative. The results were significant too.",
              formality_level: "informal",
              position: ["end"],
              punctuation_rules: "Comma before 'too' at sentence end",
            },
          ],
          contrast: [
            {
              phrase: "however",
              definition:
                "Conjunctive adverb indicating contrast or opposition to previous statement",
              usage: "Introduces contradictory or qualifying information",
              example:
                "The initial results were promising. However, further analysis revealed limitations.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules:
                "Semicolon before and comma after when connecting independent clauses",
            },
            {
              phrase: "although",
              definition:
                "Subordinating conjunction introducing a concessive clause",
              usage:
                "Acknowledges opposing information while maintaining main argument",
              example:
                "Although the sample size was small, the findings were statistically significant.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules:
                "Comma separates dependent clause from independent clause",
            },
          ],
          example: [
            {
              phrase: "for example",
              definition:
                "Phrase introducing specific instances or illustrations",
              usage:
                "Provides concrete evidence or clarification for abstract concepts",
              example:
                "Writing skills improved significantly. For example, essay organization scores increased by 40%.",
              formality_level: "neutral",
              position: ["beginning"],
              punctuation_rules: "Comma after phrase when beginning a sentence",
            },
            {
              phrase: "such as",
              definition:
                "Phrase introducing representative examples or categories",
              usage: "Lists specific items that belong to a general category",
              example:
                "Various teaching methods, such as collaborative learning and peer review, were implemented.",
              formality_level: "neutral",
              position: ["middle"],
              punctuation_rules:
                "Commas around phrase when it introduces non-essential examples",
            },
          ],
        },
        detailed_explanations: {
          contrast: {
            definition:
              "Contrast transitions highlight differences, contradictions, or unexpected relationships between ideas",
            when_to_use:
              "When presenting opposing viewpoints, acknowledging limitations, or showing unexpected results",
            structure_rules: [
              "Use 'however' to begin new sentences showing contrast",
              "Place 'although' at the beginning of dependent clauses",
              "Ensure logical balance between contrasted elements",
            ],
            examples_in_context: [
              "Academic argument: Traditional methods focus on accuracy. However, communicative approaches emphasize fluency.",
              "Research findings: Although the control group showed improvement, the experimental group demonstrated significantly greater gains.",
            ],
          },
          example: {
            definition:
              "Example transitions introduce specific instances that illustrate general statements or abstract concepts",
            when_to_use:
              "When providing evidence, clarifying complex ideas, or supporting theoretical claims with concrete instances",
            structure_rules: [
              "Use 'for example' to introduce complete illustrative sentences",
              "Use 'such as' to introduce lists of representative items",
              "Ensure examples directly support the preceding claim",
            ],
            examples_in_context: [
              "Supporting evidence: Technology enhances language learning. For example, apps provide personalized practice opportunities.",
              "Category illustration: Students used various digital tools, such as vocabulary apps, grammar checkers, and pronunciation software.",
            ],
          },
        },
        common_patterns: [
          "[Statement]. However, [contrasting statement].",
          "Although [concession], [main claim].",
          "[General statement]. For example, [specific illustration].",
          "[Category], such as [examples], [verb phrase].",
        ],
        practice_guidelines: [
          "Practice distinguishing between 'but' and 'however' usage",
          "Create example banks for different academic topics",
          "Use graphic organizers to map contrast relationships",
          "Practice punctuation rules through sentence combining exercises",
        ],
      },
      B1: {
        description:
          "Intermediate transition usage for coherent paragraph and multi-paragraph organization in academic contexts.",
        learning_objectives: [
          "Master sophisticated addition and emphasis markers",
          "Use advanced cause-effect and comparison transitions",
          "Develop paragraph-level coherence through transition variety",
          "Begin using academic register transitions appropriately",
        ],
        key_concepts: [
          "Paragraph coherence and unity",
          "Academic register development",
          "Complex logical relationships",
          "Formal writing conventions",
        ],
        transitions: {
          addition: [
            {
              phrase: "furthermore",
              definition:
                "Formal conjunctive adverb adding reinforcing information to strengthen an argument",
              usage:
                "Introduces additional evidence or points that build upon previous claims",
              example:
                "The intervention improved reading comprehension. Furthermore, it enhanced critical thinking skills.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules:
                "Semicolon before and comma after when connecting clauses; comma after when beginning sentences",
            },
            {
              phrase: "in addition",
              definition:
                "Formal prepositional phrase introducing supplementary information",
              usage:
                "Adds supporting points while maintaining formal academic tone",
              example:
                "In addition to vocabulary gains, students demonstrated improved pronunciation accuracy.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules: "Comma after phrase when beginning a sentence",
            },
          ],
          emphasis: [
            {
              phrase: "indeed",
              definition:
                "Emphatic adverb confirming or strengthening a previous statement",
              usage: "Validates or intensifies claims with additional support",
              example:
                "The results were significant. Indeed, they exceeded all expectations.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules:
                "Comma after 'indeed' when beginning a sentence",
            },
            {
              phrase: "in fact",
              definition:
                "Phrase introducing factual information that supports or clarifies previous claims",
              usage: "Provides concrete evidence or surprising information",
              example:
                "Student motivation increased throughout the program. In fact, attendance rates reached 98%.",
              formality_level: "neutral",
              position: ["beginning"],
              punctuation_rules: "Comma after phrase when beginning a sentence",
            },
          ],
          comparison: [
            {
              phrase: "similarly",
              definition:
                "Adverb indicating parallel or comparable relationships between ideas",
              usage:
                "Draws connections between analogous situations or findings",
              example:
                "Group A showed significant improvement. Similarly, Group B demonstrated comparable gains.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules: "Comma after adverb when beginning a sentence",
            },
            {
              phrase: "likewise",
              definition:
                "Adverb indicating agreement or parallel behavior between different entities",
              usage:
                "Shows that similar patterns occur across different contexts",
              example:
                "Traditional students benefited from the approach. Likewise, non-traditional learners showed similar progress.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules: "Comma after adverb when beginning a sentence",
            },
          ],
        },
        detailed_explanations: {
          emphasis: {
            definition:
              "Emphasis transitions highlight the importance, significance, or surprising nature of information",
            when_to_use:
              "When strengthening arguments, confirming hypotheses, or drawing attention to crucial findings",
            structure_rules: [
              "Use 'indeed' to confirm and strengthen previous claims",
              "Use 'in fact' to introduce supporting or surprising evidence",
              "Place emphasis transitions at strategic points for maximum impact",
            ],
            examples_in_context: [
              "Research validation: The hypothesis was supported by the data. Indeed, the correlation coefficient exceeded 0.85.",
              "Surprising evidence: Students initially resisted the new method. In fact, post-course evaluations revealed overwhelming support.",
            ],
          },
          comparison: {
            definition:
              "Comparison transitions establish parallel relationships, similarities, or analogous patterns between different elements",
            when_to_use:
              "When drawing parallels between studies, showing consistent patterns, or establishing analogies",
            structure_rules: [
              "Use 'similarly' for direct comparisons between parallel situations",
              "Use 'likewise' for agreement or parallel behavior",
              "Ensure compared elements are truly analogous",
            ],
            examples_in_context: [
              "Cross-study comparison: Smith's (2020) findings revealed improved retention rates. Similarly, Jones (2021) reported comparable outcomes using the same methodology.",
              "Pattern consistency: Experienced teachers adapted quickly to the new curriculum. Likewise, novice instructors demonstrated remarkable flexibility.",
            ],
          },
        },
        common_patterns: [
          "[Evidence]. Furthermore, [additional supporting evidence].",
          "[Statement]. Indeed, [confirming evidence].",
          "[Finding in Context A]. Similarly, [parallel finding in Context B].",
          "In addition to [previous point], [new supporting point].",
        ],
        practice_guidelines: [
          "Practice varying transition placement within paragraphs",
          "Focus on logical flow between sentences and ideas",
          "Use academic texts as models for transition usage",
          "Practice integrating multiple transition types in single paragraphs",
        ],
      },
      B2: {
        description:
          "Advanced transition mastery for sophisticated academic discourse and complex argumentation structures.",
        learning_objectives: [
          "Command sophisticated academic register transitions",
          "Master complex concession and qualification markers",
          "Develop nuanced cause-effect relationship expression",
          "Use transitions for advanced rhetorical strategies",
        ],
        key_concepts: [
          "Advanced academic register",
          "Sophisticated argumentation strategies",
          "Nuanced logical relationships",
          "Complex discourse organization",
        ],
        transitions: {
          concession: [
            {
              phrase: "nevertheless",
              definition:
                "Formal conjunctive adverb acknowledging opposing points while maintaining original argument",
              usage:
                "Concedes validity of counterarguments while asserting stronger supporting evidence",
              example:
                "The methodology faced several limitations. Nevertheless, the findings provide valuable insights into language acquisition.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules:
                "Semicolon before and comma after when connecting clauses; comma after when beginning sentences",
            },
            {
              phrase: "nonetheless",
              definition:
                "Formal conjunctive adverb similar to 'nevertheless' but slightly less emphatic",
              usage:
                "Acknowledges contrary evidence while maintaining confidence in main argument",
              example:
                "Sample size limitations affected generalizability. Nonetheless, the statistical significance supports the hypothesis.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules:
                "Semicolon before and comma after when connecting clauses; comma after when beginning sentences",
            },
          ],
          qualification: [
            {
              phrase: "granted that",
              definition:
                "Phrase introducing acknowledged limitations or concessions to opposing viewpoints",
              usage:
                "Formally acknowledges validity of counterarguments before presenting stronger evidence",
              example:
                "Granted that the sample was predominantly female, the findings still demonstrate significant pedagogical implications.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules:
                "Comma after 'granted that' clause when beginning sentences",
            },
          ],
          sophisticated_cause_effect: [
            {
              phrase: "consequently",
              definition:
                "Formal conjunctive adverb indicating logical result or outcome",
              usage:
                "Shows direct causal relationships in formal academic arguments",
              example:
                "Traditional methods proved inadequate for diverse learners. Consequently, educators adopted more inclusive approaches.",
              formality_level: "formal",
              position: ["beginning"],
              punctuation_rules:
                "Semicolon before and comma after when connecting clauses; comma after when beginning sentences",
            },
            {
              phrase: "thus",
              definition:
                "Formal adverb indicating conclusion or logical consequence",
              usage:
                "Presents results or conclusions drawn from preceding evidence",
              example:
                "Multiple studies confirmed the effectiveness of collaborative learning. Thus, institutional policy now mandates group work integration.",
              formality_level: "formal",
              position: ["beginning", "middle"],
              punctuation_rules:
                "Comma after 'thus' when beginning sentences; commas around when in mid-sentence",
            },
          ],
        },
        detailed_explanations: {
          concession: {
            definition:
              "Concession transitions acknowledge opposing viewpoints or limitations while maintaining the strength of the main argument",
            when_to_use:
              "When addressing counterarguments, acknowledging study limitations, or demonstrating balanced academic thinking",
            structure_rules: [
              "Use 'nevertheless' for strong contrast after acknowledging opposition",
              "Use 'nonetheless' for moderate contrast with maintained confidence",
              "Balance concession with stronger supporting evidence",
            ],
            examples_in_context: [
              "Balanced argument: Critics argue that technology isolates learners from human interaction. Nevertheless, research consistently demonstrates enhanced engagement and improved learning outcomes.",
              "Limitation acknowledgment: The study's scope was limited to urban environments. Nonetheless, the methodology provides a robust framework for future research.",
            ],
          },
          sophisticated_cause_effect: {
            definition:
              "Advanced cause-effect transitions express complex causal relationships with precision and academic formality",
            when_to_use:
              "When presenting research conclusions, policy implications, or complex chains of reasoning",
            structure_rules: [
              "Use 'consequently' for direct, logical outcomes",
              "Use 'thus' for conclusions drawn from evidence",
              "Ensure clear causal logic between connected ideas",
            ],
            examples_in_context: [
              "Policy implication: Budget constraints limited technology access across schools. Consequently, achievement gaps widened between institutions with different resource levels.",
              "Research conclusion: Data revealed consistent patterns across multiple variables. Thus, the researchers concluded that socioeconomic factors significantly influence language acquisition rates.",
            ],
          },
        },
        common_patterns: [
          "[Acknowledgment of limitation]. Nevertheless, [stronger counter-evidence].",
          "Granted that [concession], [main argument remains valid].",
          "[Evidence/Cause]. Consequently, [logical result].",
          "[Multiple evidence points]. Thus, [conclusion drawn].",
        ],
        practice_guidelines: [
          "Practice balancing concession with argument strength",
          "Study academic journal articles for sophisticated transition usage",
          "Focus on logical coherence in complex argument structures",
          "Practice varying sentence length and complexity with transitions",
        ],
      },
      C1: {
        description:
          "Expert-level transition usage for sophisticated academic discourse and advanced rhetorical strategies.",
        learning_objectives: [
          "Master highly sophisticated academic register transitions",
          "Employ complex rhetorical strategies through transition use",
          "Develop advanced meta-discourse awareness",
          "Create seamless flow in complex multi-paragraph arguments",
        ],
        key_concepts: [
          "Expert academic register mastery",
          "Advanced rhetorical sophistication",
          "Meta-discourse competence",
          "Complex argumentation architecture",
        ],
        transitions: {
          sophisticated_emphasis: [
            {
              phrase: "it is worth noting that",
              definition:
                "Meta-discourse phrase directing reader attention to particularly significant information",
              usage:
                "Highlights crucial insights that merit special consideration in academic discourse",
              example:
                "The intervention showed modest improvements overall. It is worth noting that advanced learners demonstrated exceptional gains.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules:
                "Comma after phrase; 'that' may introduce clause",
            },
            {
              phrase: "it should be emphasized that",
              definition:
                "Strong meta-discourse marker stressing critical importance of following information",
              usage:
                "Draws reader attention to pivotal findings or arguments requiring emphasis",
              example:
                "Multiple factors influenced the outcomes. It should be emphasized that motivation levels proved most predictive of success.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules:
                "Comma after phrase; 'that' introduces emphasized clause",
            },
          ],
          advanced_concession: [
            {
              phrase: "while it may be true that",
              definition:
                "Complex concessive structure acknowledging potential validity while preparing counter-argument",
              usage:
                "Demonstrates sophisticated academic thinking by acknowledging complexity before presenting position",
              example:
                "While it may be true that standardized testing has limitations, it nonetheless provides valuable comparative data.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules:
                "Comma separates concessive clause from main clause",
            },
          ],
          implication: [
            {
              phrase: "this implies that",
              definition:
                "Phrase introducing logical inferences drawn from preceding evidence or argument",
              usage:
                "Connects evidence to broader theoretical or practical implications",
              example:
                "Retention rates varied significantly across pedagogical approaches. This implies that methodology selection critically impacts long-term learning outcomes.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules:
                "Comma after phrase; 'that' introduces implication clause",
            },
            {
              phrase: "it follows that",
              definition:
                "Logical connector introducing conclusions that necessarily result from previous reasoning",
              usage:
                "Presents unavoidable conclusions based on established premises",
              example:
                "All experimental groups outperformed controls consistently. It follows that the intervention demonstrates genuine pedagogical effectiveness.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules:
                "Comma after phrase; 'that' introduces logical conclusion",
            },
          ],
        },
        detailed_explanations: {
          sophisticated_emphasis: {
            definition:
              "Advanced emphasis transitions function as meta-discourse markers that guide reader interpretation and highlight critical information",
            when_to_use:
              "When directing reader attention to particularly significant findings, unexpected results, or crucial theoretical insights",
            structure_rules: [
              "Use 'it is worth noting' for information requiring special attention",
              "Use 'it should be emphasized' for critical findings demanding focus",
              "Position strategically to control reader interpretation flow",
            ],
            examples_in_context: [
              "Highlighting significance: The study revealed multiple interesting patterns. It is worth noting that the most pronounced effects occurred in the lowest-performing initial cohort.",
              "Stressing importance: Various factors contributed to program success. It should be emphasized that administrative support proved absolutely essential for implementation effectiveness.",
            ],
          },
          implication: {
            definition:
              "Implication transitions bridge empirical findings to theoretical significance or practical applications",
            when_to_use:
              "When connecting research results to broader theories, practical applications, or future research directions",
            structure_rules: [
              "Use 'this implies that' for logical inferences from evidence",
              "Use 'it follows that' for necessary conclusions from premises",
              "Ensure logical validity between evidence and implications",
            ],
            examples_in_context: [
              "Theoretical connection: Neuroimaging data showed increased activation in language processing areas. This implies that the intervention facilitates fundamental changes in neural language networks.",
              "Necessary conclusion: Every pedagogical innovation demonstrated positive outcomes across diverse populations. It follows that the underlying principles transcend specific demographic boundaries.",
            ],
          },
        },
        common_patterns: [
          "[Evidence]. It is worth noting that [significant detail].",
          "While it may be true that [concession], [stronger counter-position].",
          "[Research findings]. This implies that [theoretical significance].",
          "[Established premises]. It follows that [necessary conclusion].",
        ],
        practice_guidelines: [
          "Study expert academic writing in specific disciplines",
          "Practice sophisticated meta-discourse strategies",
          "Focus on controlling reader interpretation through strategic transitions",
          "Develop sensitivity to register appropriateness in different contexts",
        ],
      },
      C2: {
        description:
          "Mastery-level transition usage demonstrating native-like sophistication in academic discourse and complex rhetorical manipulation.",
        learning_objectives: [
          "Demonstrate native-like sophistication in transition usage",
          "Master complex rhetorical manipulation through strategic transition placement",
          "Employ discipline-specific transition conventions",
          "Create elegant, seamless discourse flow in complex argumentation",
        ],
        key_concepts: [
          "Native-like academic discourse competence",
          "Sophisticated rhetorical manipulation",
          "Discipline-specific register mastery",
          "Elegant argumentation architecture",
        ],
        transitions: {
          highly_sophisticated: [
            {
              phrase: "notwithstanding",
              definition:
                "Highly formal preposition/adverb indicating contrast despite acknowledged circumstances",
              usage:
                "Presents arguments that maintain validity despite acknowledged opposing factors",
              example:
                "Notwithstanding methodological constraints, the findings contribute significantly to theoretical understanding.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules:
                "Comma after 'notwithstanding' phrase when beginning sentences",
            },
            {
              phrase: "be that as it may",
              definition:
                "Idiomatic concessive phrase acknowledging previous points while transitioning to different perspective",
              usage:
                "Demonstrates sophisticated register while acknowledging complexity before presenting alternative viewpoint",
              example:
                "Critics raise valid concerns about implementation costs. Be that as it may, the long-term benefits justify initial investments.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules: "Comma after phrase when beginning sentences",
            },
          ],
          advanced_inference: [
            {
              phrase: "it can be deduced that",
              definition:
                "Formal phrase introducing logical conclusions drawn through deductive reasoning",
              usage:
                "Presents conclusions reached through systematic logical analysis of evidence",
              example:
                "All treatment groups showed consistent improvement patterns across diverse measures. It can be deduced that the intervention addresses fundamental learning mechanisms.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules:
                "Comma after phrase; 'that' introduces deduced conclusion",
            },
            {
              phrase: "a logical inference is that",
              definition:
                "Academic phrase introducing reasonable conclusions based on available evidence",
              usage:
                "Presents well-reasoned conclusions while acknowledging inferential nature",
              example:
                "Retention rates correlated strongly with initial motivation assessments. A logical inference is that pre-intervention screening could optimize program effectiveness.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules:
                "Comma after phrase; 'that' introduces inference",
            },
          ],
          synthesis: [
            {
              phrase: "to encapsulate",
              definition:
                "Sophisticated phrase introducing comprehensive summary or synthesis of complex information",
              usage:
                "Presents distilled essence of multifaceted arguments or extensive evidence",
              example:
                "To encapsulate, the research demonstrates that pedagogical innovation requires systematic institutional support, adequate resources, and sustained professional development.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules: "Comma after phrase when beginning sentences",
            },
            {
              phrase: "to synthesize the above",
              definition:
                "Meta-discourse phrase explicitly combining multiple previously presented arguments or evidence",
              usage:
                "Creates unified understanding from diverse or complex information sources",
              example:
                "To synthesize the above, technological integration, pedagogical training, and institutional commitment constitute essential components for educational transformation.",
              formality_level: "academic",
              position: ["beginning"],
              punctuation_rules: "Comma after phrase when beginning sentences",
            },
          ],
        },
        detailed_explanations: {
          highly_sophisticated: {
            definition:
              "Highly sophisticated transitions demonstrate mastery of formal academic register while managing complex rhetorical relationships",
            when_to_use:
              "In advanced academic writing requiring demonstration of sophisticated language competence and nuanced argumentation",
            structure_rules: [
              "Use 'notwithstanding' for formal contrast despite acknowledged factors",
              "Use 'be that as it may' for elegant transition between complex arguments",
              "Reserve for contexts requiring highest register formality",
            ],
            examples_in_context: [
              "Sophisticated contrast: Notwithstanding the considerable challenges inherent in longitudinal research design, the study's temporal scope provides invaluable insights into developmental patterns.",
              "Elegant transition: Skeptics question the practical applicability of theoretical frameworks in classroom contexts. Be that as it may, empirical evidence consistently supports the pedagogical efficacy of research-informed practice.",
            ],
          },
          synthesis: {
            definition:
              "Synthesis transitions create unified understanding from complex, multifaceted information while demonstrating advanced academic discourse competence",
            when_to_use:
              "When concluding complex arguments, integrating diverse evidence sources, or creating comprehensive understanding from multifaceted data",
            structure_rules: [
              "Use 'to encapsulate' for comprehensive distillation of complex information",
              "Use 'to synthesize the above' for explicit integration of multiple arguments",
              "Ensure synthesis genuinely unifies rather than merely summarizes",
            ],
            examples_in_context: [
              "Complex synthesis: To encapsulate, effective educational transformation requires convergence of technological infrastructure, pedagogical innovation, administrative support, and sustained professional development within coherent institutional frameworks.",
              "Explicit integration: To synthesize the above, quantitative measures, qualitative insights, and longitudinal observations collectively demonstrate that learner-centered approaches facilitate deeper engagement, enhanced retention, and improved academic outcomes across diverse educational contexts.",
            ],
          },
        },
        common_patterns: [
          "Notwithstanding [acknowledged limitation], [maintained argument].",
          "[Complex argument]. Be that as it may, [alternative perspective].",
          "[Multiple evidence points]. It can be deduced that [sophisticated conclusion].",
          "To encapsulate, [comprehensive synthesis of complex information].",
        ],
        practice_guidelines: [
          "Analyze sophisticated academic texts in target disciplines",
          "Practice register sensitivity across different academic contexts",
          "Focus on elegant discourse flow in complex argumentation",
          "Develop intuitive sense for appropriate sophistication levels",
        ],
      },
    },
    functions: [
      "Liên kết đoạn văn",
      "Thể hiện mối quan hệ nhân quả",
      "Làm nổi bật quan điểm",
      "Chuyển tiếp mềm giữa các phần lập luận",
      "Tăng tính logic và mạch lạc",
    ],
    groupsByFunction: {
      addition: {
        definition:
          "Addition transitions combine ideas that support, extend, or reinforce the same argumentative direction, creating cumulative effect in academic discourse.",
        purpose:
          "To build stronger arguments through accumulation of supporting evidence, examples, or complementary points.",
        academic_importance:
          "Essential for developing comprehensive arguments and demonstrating thorough research coverage in academic writing.",
        phrases: [
          {
            phrase: "and",
            definition:
              "Basic coordinating conjunction connecting similar ideas",
            usage: "Connects parallel grammatical structures",
            example: "The study examined motivation and achievement.",
            formality_level: "neutral",
            position: ["middle"],
            punctuation_rules: "Comma before 'and' in series of three or more",
          },
          {
            phrase: "furthermore",
            definition: "Formal additive connector for academic discourse",
            usage: "Introduces additional supporting evidence",
            example:
              "The results were significant. Furthermore, they were consistent across groups.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "moreover",
            definition:
              "Academic additive marker emphasizing additional importance",
            usage: "Adds information of particular significance",
            example:
              "The methodology was innovative. Moreover, it proved highly effective.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
        ],
        usage_contexts: [
          "Building cumulative arguments in research papers",
          "Adding supporting evidence to strengthen claims",
          "Expanding on initial findings with additional data",
          "Creating comprehensive literature reviews",
        ],
        combination_rules: [
          "Use variety to avoid repetition within paragraphs",
          "Progress from basic to sophisticated forms",
          "Maintain logical hierarchy of importance",
          "Balance with other transition types for flow",
        ],
      },
      contrast: {
        definition:
          "Contrast transitions highlight differences, contradictions, unexpected relationships, or opposing viewpoints between ideas or evidence.",
        purpose:
          "To present balanced arguments, acknowledge limitations, address counterarguments, and show critical thinking.",
        academic_importance:
          "Demonstrates analytical thinking, balanced perspective, and ability to engage with complex, multi-faceted issues.",
        phrases: [
          {
            phrase: "however",
            definition: "Formal conjunctive adverb showing contrast",
            usage: "Introduces contrasting or opposing information",
            example:
              "The method showed promise. However, implementation proved challenging.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules:
              "Semicolon before, comma after when connecting clauses",
          },
          {
            phrase: "nevertheless",
            definition:
              "Strong formal contrast marker maintaining original position",
            usage: "Acknowledges opposition while asserting original argument",
            example:
              "Criticisms were raised. Nevertheless, the evidence remained compelling.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "notwithstanding",
            definition:
              "Highly formal preposition showing contrast despite circumstances",
            usage: "Presents arguments valid despite acknowledged factors",
            example:
              "Notwithstanding the limitations, the findings contribute significantly.",
            formality_level: "academic",
            position: ["beginning"],
            punctuation_rules: "Comma after phrase when beginning sentences",
          },
        ],
        usage_contexts: [
          "Addressing counterarguments in persuasive writing",
          "Acknowledging study limitations while maintaining conclusions",
          "Presenting balanced analysis of complex issues",
          "Transitioning between opposing viewpoints in literature reviews",
        ],
        combination_rules: [
          "Balance concession with stronger supporting evidence",
          "Use appropriate formality level for context",
          "Ensure logical relationship between contrasted elements",
          "Avoid overuse that weakens argument strength",
        ],
      },
      cause_effect: {
        definition:
          "Cause-effect transitions establish explicit causal relationships, logical consequences, or result-oriented connections between ideas and evidence.",
        purpose:
          "To demonstrate logical reasoning, show research implications, explain outcomes, and establish clear causal chains.",
        academic_importance:
          "Critical for scientific writing, policy arguments, and demonstrating logical thinking in academic discourse.",
        phrases: [
          {
            phrase: "therefore",
            definition: "Formal logical connector showing conclusion",
            usage: "Introduces logical consequences or conclusions",
            example:
              "The data showed clear patterns. Therefore, the hypothesis was supported.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "consequently",
            definition: "Formal marker showing direct causal result",
            usage: "Indicates direct outcomes or logical results",
            example:
              "Funding was reduced. Consequently, programs were eliminated.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "accordingly",
            definition: "Formal adverb showing appropriate response or result",
            usage: "Indicates fitting or logical response to circumstances",
            example:
              "Errors were identified. Accordingly, procedures were revised.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
        ],
        usage_contexts: [
          "Presenting research findings and implications",
          "Explaining policy outcomes and recommendations",
          "Demonstrating logical reasoning in arguments",
          "Connecting theoretical frameworks to practical applications",
        ],
        combination_rules: [
          "Ensure genuine causal relationships exist",
          "Maintain logical sequence in causal chains",
          "Use appropriate strength for relationship type",
          "Support causal claims with sufficient evidence",
        ],
      },
      sequence: {
        definition:
          "Sequence transitions organize information in chronological, procedural, or logical order, creating clear progression through ideas or events.",
        purpose:
          "To guide readers through systematic presentations, explain processes, describe methodologies, and organize complex information.",
        academic_importance:
          "Essential for methodology sections, process descriptions, and creating clear organizational structure in academic writing.",
        phrases: [
          {
            phrase: "first",
            definition: "Ordinal marker indicating initial step or point",
            usage: "Introduces first item in sequence",
            example: "First, participants completed pre-assessments.",
            formality_level: "neutral",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "subsequently",
            definition: "Formal temporal marker for following events",
            usage: "Indicates events following in time or logic",
            example: "Data was collected. Subsequently, analysis began.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "thereafter",
            definition: "Formal temporal marker for following time period",
            usage: "Indicates continuing time period after specified event",
            example:
              "Training concluded in June. Thereafter, implementation began.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
        ],
        usage_contexts: [
          "Describing research methodology steps",
          "Outlining historical developments",
          "Explaining procedural sequences",
          "Organizing argument progression",
        ],
        combination_rules: [
          "Maintain consistent temporal or logical framework",
          "Use parallel structure across sequence items",
          "Ensure clear progression without gaps",
          "Balance detail level across sequence elements",
        ],
      },
      example: {
        definition:
          "Example transitions introduce specific instances, illustrations, or evidence that support, clarify, or demonstrate general statements or abstract concepts.",
        purpose:
          "To provide concrete evidence, clarify abstract concepts, support theoretical claims, and enhance reader understanding.",
        academic_importance:
          "Vital for supporting arguments with evidence, clarifying complex theories, and demonstrating practical applications.",
        phrases: [
          {
            phrase: "for example",
            definition: "Standard phrase introducing illustrative instances",
            usage: "Provides specific examples supporting general claims",
            example:
              "Technology enhances learning. For example, apps provide personalized practice.",
            formality_level: "neutral",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "specifically",
            definition: "Adverb introducing precise or detailed examples",
            usage: "Provides exact or particular instances",
            example:
              "Multiple factors influenced outcomes. Specifically, motivation proved most significant.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "as evidenced by",
            definition: "Formal phrase introducing supporting proof",
            usage: "Provides evidence supporting preceding claims",
            example:
              "The approach proved effective, as evidenced by improved test scores.",
            formality_level: "formal",
            position: ["middle"],
            punctuation_rules: "Comma before phrase when mid-sentence",
          },
        ],
        usage_contexts: [
          "Supporting theoretical arguments with concrete evidence",
          "Clarifying abstract concepts with specific instances",
          "Providing research examples in literature reviews",
          "Demonstrating practical applications of theories",
        ],
        combination_rules: [
          "Ensure examples directly support preceding claims",
          "Use representative rather than exceptional instances",
          "Provide sufficient detail without overwhelming main argument",
          "Maintain appropriate formality level for context",
        ],
      },
      emphasis: {
        definition:
          "Emphasis transitions highlight particularly important, significant, or noteworthy information, directing reader attention to crucial points.",
        purpose:
          "To stress key findings, highlight significant insights, confirm important points, and guide reader focus to critical information.",
        academic_importance:
          "Essential for drawing attention to major contributions, significant findings, and crucial theoretical insights.",
        phrases: [
          {
            phrase: "indeed",
            definition:
              "Emphatic adverb confirming or strengthening statements",
            usage: "Validates or intensifies preceding claims",
            example:
              "The results were remarkable. Indeed, they exceeded expectations.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "notably",
            definition:
              "Adverb highlighting particularly significant information",
            usage: "Draws attention to especially important points",
            example:
              "Several factors contributed to success. Notably, leadership proved crucial.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "it should be emphasized that",
            definition: "Meta-discourse phrase stressing critical importance",
            usage: "Directs reader attention to essential information",
            example:
              "Multiple variables affected outcomes. It should be emphasized that training duration was most critical.",
            formality_level: "academic",
            position: ["beginning"],
            punctuation_rules:
              "Comma after phrase; 'that' introduces emphasized content",
          },
        ],
        usage_contexts: [
          "Highlighting major research findings",
          "Stressing crucial theoretical implications",
          "Drawing attention to unexpected results",
          "Emphasizing practical significance",
        ],
        combination_rules: [
          "Use sparingly to maintain impact",
          "Reserve for genuinely important information",
          "Ensure emphasized content justifies special attention",
          "Balance with other transition types",
        ],
      },
      comparison: {
        definition:
          "Comparison transitions establish parallel relationships, similarities, analogous patterns, or equivalent situations between different elements or contexts.",
        purpose:
          "To draw parallels between studies, show consistent patterns, establish analogies, and demonstrate broader applicability of findings.",
        academic_importance:
          "Critical for synthesizing research, establishing patterns across studies, and demonstrating broader theoretical validity.",
        phrases: [
          {
            phrase: "similarly",
            definition: "Adverb indicating parallel or comparable situations",
            usage: "Shows parallel patterns or outcomes",
            example:
              "Group A improved significantly. Similarly, Group B showed comparable gains.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "likewise",
            definition: "Adverb showing agreement or parallel behavior",
            usage: "Indicates similar patterns across different contexts",
            example:
              "Traditional students benefited. Likewise, non-traditional learners improved.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after when beginning sentences",
          },
          {
            phrase: "by the same token",
            definition: "Idiomatic phrase indicating logical parallel",
            usage: "Shows that same reasoning applies to different situation",
            example:
              "Online learning offers flexibility. By the same token, it requires self-discipline.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after phrase when beginning sentences",
          },
        ],
        usage_contexts: [
          "Comparing research findings across studies",
          "Establishing patterns in literature reviews",
          "Drawing analogies between theoretical frameworks",
          "Demonstrating consistency across different contexts",
        ],
        combination_rules: [
          "Ensure compared elements are genuinely analogous",
          "Maintain parallel structure in comparisons",
          "Use to strengthen arguments through pattern recognition",
          "Balance specific comparisons with broader implications",
        ],
      },
      concession: {
        definition:
          "Concession transitions acknowledge opposing viewpoints, limitations, or contrary evidence while maintaining the strength of the primary argument.",
        purpose:
          "To demonstrate balanced thinking, address counterarguments, acknowledge study limitations, and show sophisticated academic reasoning.",
        academic_importance:
          "Essential for credible argumentation, balanced analysis, and demonstrating awareness of complexity in academic issues.",
        phrases: [
          {
            phrase: "although",
            definition:
              "Subordinating conjunction introducing concessive clause",
            usage:
              "Acknowledges opposing information while maintaining main argument",
            example:
              "Although the sample was small, the findings were significant.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules:
              "Comma separates dependent from independent clause",
          },
          {
            phrase: "granted that",
            definition:
              "Phrase formally acknowledging limitations or opposing viewpoints",
            usage: "Formally acknowledges validity of counterarguments",
            example:
              "Granted that resources were limited, the program achieved remarkable success.",
            formality_level: "formal",
            position: ["beginning"],
            punctuation_rules: "Comma after 'granted that' clause",
          },
          {
            phrase: "irrespective of the fact that",
            definition:
              "Highly formal phrase dismissing opposing considerations",
            usage:
              "Maintains argument validity despite acknowledged contrary factors",
            example:
              "Irrespective of the fact that conditions were challenging, participants demonstrated resilience.",
            formality_level: "academic",
            position: ["beginning"],
            punctuation_rules: "Comma after phrase when beginning sentences",
          },
        ],
        usage_contexts: [
          "Addressing potential criticisms preemptively",
          "Acknowledging study limitations while maintaining conclusions",
          "Presenting balanced analysis of controversial issues",
          "Demonstrating sophisticated understanding of complexity",
        ],
        combination_rules: [
          "Balance concession with stronger counter-evidence",
          "Use to demonstrate rather than weaken arguments",
          "Ensure logical relationship between conceded and maintained points",
          "Maintain argument strength despite acknowledgments",
        ],
      },
      result: {
        definition:
          "Result transitions present outcomes, conclusions, implications, or logical consequences drawn from preceding evidence, arguments, or analysis.",
        purpose:
          "To present research conclusions, show policy implications, demonstrate logical outcomes, and connect evidence to broader significance.",
        academic_importance:
          "Crucial for presenting research contributions, policy recommendations, and demonstrating the significance of academic work.",
        phrases: [
          {
            phrase: "as a result",
            definition: "Phrase indicating direct outcome or consequence",
            usage: "Shows direct causal relationship to outcomes",
            example:
              "Funding increased substantially. As a result, programs expanded significantly.",
            formality_level: "neutral",
            position: ["beginning"],
            punctuation_rules: "Comma after phrase when beginning sentences",
          },
          {
            phrase: "this implies that",
            definition: "Phrase introducing logical inferences from evidence",
            usage: "Connects evidence to broader implications",
            example:
              "Test scores improved across all groups. This implies that the method has universal applicability.",
            formality_level: "academic",
            position: ["beginning"],
            punctuation_rules:
              "Comma after phrase; 'that' introduces implication",
          },
          {
            phrase: "it can be deduced that",
            definition:
              "Formal phrase introducing conclusions from deductive reasoning",
            usage: "Presents conclusions reached through logical analysis",
            example:
              "All treatment groups showed improvement. It can be deduced that the intervention addresses fundamental learning processes.",
            formality_level: "academic",
            position: ["beginning"],
            punctuation_rules:
              "Comma after phrase; 'that' introduces deduction",
          },
        ],
        usage_contexts: [
          "Presenting research conclusions and implications",
          "Connecting findings to theoretical frameworks",
          "Demonstrating practical significance of results",
          "Drawing broader inferences from specific evidence",
        ],
        combination_rules: [
          "Ensure logical validity between evidence and conclusions",
          "Use appropriate strength for type of inference",
          "Support conclusions with sufficient evidence",
          "Connect to broader theoretical or practical significance",
        ],
      },
      conclusion: {
        definition:
          "Conclusion transitions signal synthesis, summary, final thoughts, or closure while providing comprehensive understanding of complex information.",
        purpose:
          "To synthesize complex arguments, provide final analysis, create unified understanding, and bring closure to academic discourse.",
        academic_importance:
          "Essential for effective argumentation closure, comprehensive synthesis, and demonstrating complete understanding of complex issues.",
        phrases: [
          {
            phrase: "in conclusion",
            definition:
              "Standard phrase introducing final summary or synthesis",
            usage: "Signals transition to concluding thoughts",
            example:
              "In conclusion, the evidence strongly supports the proposed framework.",
            formality_level: "neutral",
            position: ["beginning"],
            punctuation_rules: "Comma after phrase when beginning sentences",
          },
          {
            phrase: "to summarize",
            definition: "Phrase introducing condensed review of main points",
            usage: "Provides concise overview of key arguments",
            example:
              "To summarize, three factors emerged as critical for success.",
            formality_level: "neutral",
            position: ["beginning"],
            punctuation_rules: "Comma after phrase when beginning sentences",
          },
          {
            phrase: "to encapsulate",
            definition:
              "Sophisticated phrase introducing comprehensive synthesis",
            usage: "Presents distilled essence of complex information",
            example:
              "To encapsulate, effective pedagogy requires integration of theory, practice, and ongoing reflection.",
            formality_level: "academic",
            position: ["beginning"],
            punctuation_rules: "Comma after phrase when beginning sentences",
          },
        ],
        usage_contexts: [
          "Concluding research papers and academic essays",
          "Synthesizing complex literature reviews",
          "Providing final analysis in policy documents",
          "Creating closure in theoretical discussions",
        ],
        combination_rules: [
          "Ensure synthesis rather than mere repetition",
          "Provide comprehensive view of main arguments",
          "Connect to broader significance or implications",
          "Use appropriate formality for conclusion type",
        ],
      },
    },
    learningTips: [
      "Sử dụng từ chuyển tiếp phù hợp với mục đích: nêu ví dụ, đối lập, nhấn mạnh...",
      "Tránh lạm dụng quá nhiều cụm từ học thuật trong một đoạn.",
      "Luyện viết từng đoạn nhỏ tập trung vào một loại liên kết (nguyên nhân, ví dụ...)",
      "Đọc các bài luận mẫu IELTS, TOEFL, academic articles để học cách sử dụng cụm từ chuyển tiếp tự nhiên.",
      "Tạo bảng nhóm theo chức năng và luyện đặt câu với mỗi cụm từ.",
      "Viết lại một đoạn văn thông thường bằng cách thêm cụm từ chuyển tiếp.",
      "Practice reading academic texts aloud to internalize natural rhythm and flow",
      "Create personal transition phrase banks organized by function and formality level",
      "Analyze published academic papers to observe sophisticated transition usage patterns",
      "Practice varying transition placement within sentences and paragraphs",
      "Focus on logical relationships rather than memorizing individual phrases",
      "Develop sensitivity to register appropriateness in different academic contexts",
    ],
    commonMistakes: [
      "Sử dụng từ chuyển tiếp sai chức năng (e.g., dùng 'for example' để kết luận)",
      "Dùng quá nhiều từ chuyển tiếp trong một câu hoặc đoạn văn",
      "Không nhất quán: bắt đầu câu bằng 'However' nhưng sau đó không có ý đối lập",
      "Lạm dụng những từ đơn giản như 'and', 'but' mà không mở rộng sang từ học thuật hơn",
      "Dùng sai cấu trúc sau từ chuyển tiếp (ví dụ: 'because of + clause' là sai)",
      "Using transitions without genuine logical relationships between ideas",
      "Overusing sophisticated transitions inappropriately for context or audience",
      "Mixing formality levels inconsistently within single texts",
      "Failing to vary transition types, resulting in repetitive or monotonous prose",
      "Using transitions as substitute for clear logical thinking and organization",
      "Incorrectly punctuating complex transition phrases and clauses",
      "Applying spoken language transition patterns in formal academic writing",
    ],
    advanced_techniques: {
      paragraph_transitions: [
        "Use transitional sentences that bridge entire paragraphs by referencing previous content while introducing new ideas",
        "Employ parallel structure across paragraph openings to create cohesive argument flow",
        "Develop sophisticated transition paragraphs that synthesize multiple previous points before advancing argument",
        "Master the art of implicit transitions through careful topic sentence construction and logical progression",
        "Use transitional questions to engage readers while guiding them through complex argumentation",
      ],
      section_transitions: [
        "Create seamless transitions between major sections through strategic placement of transitional paragraphs",
        "Employ meta-discourse markers to explicitly guide readers through document structure and organization",
        "Develop sophisticated signposting techniques that preview upcoming content while connecting to previous sections",
        "Master the integration of section summaries with forward-looking transitions to maintain argument momentum",
        "Use strategic repetition of key terms and concepts to create coherence across section boundaries",
      ],
      argument_flow: [
        "Develop sophisticated concession-refutation patterns that strengthen rather than weaken primary arguments",
        "Master the strategic placement of counterarguments and their systematic refutation through evidence",
        "Create compelling chains of reasoning that build systematically toward powerful conclusions",
        "Employ sophisticated cause-effect chains that demonstrate complex relationships between multiple variables",
        "Develop advanced synthesis techniques that unify seemingly disparate evidence into coherent arguments",
      ],
      academic_register: [
        "Master the subtle distinctions between formality levels and their appropriate application in different contexts",
        "Develop sensitivity to discipline-specific transition conventions and expectations",
        "Learn to modulate register appropriately for different audiences within academic contexts",
        "Master the integration of transitions with sophisticated academic vocabulary and complex sentence structures",
        "Develop expertise in using transitions to create authoritative, scholarly voice while maintaining clarity",
      ],
    },
    assessment_criteria: {
      coherence: [
        "Ideas flow logically from one to another with clear relationships established through appropriate transitions",
        "Arguments build systematically toward convincing conclusions through strategic transition usage",
        "Reader can easily follow the writer's line of reasoning without confusion or gaps",
        "Transitions enhance rather than interrupt the natural flow of ideas and evidence",
        "Overall text structure is clear and purposeful with transitions supporting organizational clarity",
      ],
      cohesion: [
        "Transitions create appropriate textual connections without overuse or redundancy",
        "Varied transition types demonstrate sophisticated understanding of logical relationships",
        "Punctuation and grammar associated with transitions are consistently correct",
        "Transitions integrate smoothly with surrounding text without awkwardness or forced placement",
        "Reference chains and lexical cohesion work together with transitions to create unified text",
      ],
      register: [
        "Formality level of transitions matches overall text register and intended audience",
        "Academic vocabulary and sophisticated transitions demonstrate appropriate scholarly competence",
        "Consistency in register is maintained throughout the text without inappropriate shifts",
        "Transitions contribute to authoritative, scholarly voice without pretentiousness or over-complexity",
        "Cultural and disciplinary conventions for academic writing are respected and demonstrated",
      ],
      sophistication: [
        "Demonstrates mastery beyond basic transition usage through varied and strategic placement",
        "Shows sophisticated understanding of logical relationships and rhetorical strategies",
        "Employs advanced techniques such as implicit transitions and meta-discourse awareness",
        "Demonstrates native-like intuition for natural rhythm and flow in academic prose",
        "Creates elegant, seamless discourse that engages readers while maintaining scholarly authority",
      ],
    },
    references: [
      {
        title: "Cohesion in English",
        author: "Halliday, M.A.K. & Hasan, R.",
        type: "book",
        isbn: "978-0582551411",
        description:
          "Foundational text on cohesive devices including conjunctive relations and their role in text organization",
        relevance:
          "Provides theoretical framework for understanding how transition phrases function as cohesive devices in academic writing",
      },
      {
        title:
          "Academic Writing for Graduate Students: Essential Tasks and Skills",
        author: "Swales, J.M. & Feak, C.B.",
        type: "book",
        isbn: "978-0472034758",
        description:
          "Comprehensive guide to academic writing conventions including sophisticated transition usage",
        relevance:
          "Offers practical guidance on using transitions effectively in different types of academic writing",
      },
      {
        title: "The Elements of Style",
        author: "Strunk, W. Jr. & White, E.B.",
        type: "book",
        isbn: "978-0205309023",
        description:
          "Classic guide to clear, effective writing including principles of coherence and flow",
        relevance:
          "Provides foundational principles for creating smooth, logical connections between ideas",
      },
      {
        title: "They Say / I Say: The Moves That Matter in Academic Writing",
        author: "Graff, G. & Birkenstein, C.",
        type: "book",
        isbn: "978-0393631678",
        description:
          "Guide to academic argument structure and the language patterns that create effective academic discourse",
        relevance:
          "Demonstrates how transitions function within larger patterns of academic argumentation and discourse",
      },
      {
        title:
          "Writing in the Sciences: Exploring Conventions of Scientific Discourse",
        author: "Penrose, A.M. & Katz, S.B.",
        type: "book",
        isbn: "978-0321434272",
        description:
          "Specialized guide to scientific writing conventions including discipline-specific transition usage",
        relevance:
          "Shows how transition usage varies across different academic disciplines and contexts",
      },
      {
        title: "Purdue Online Writing Lab (OWL)",
        author: "Purdue University",
        type: "website",
        url: "https://owl.purdue.edu/owl/general_writing/mechanics/transitions_and_transitional_devices/index.html",
        description:
          "Comprehensive online resource for transition phrases and their usage in academic writing",
        relevance:
          "Provides extensive lists of transitions organized by function with examples and explanations",
      },
      {
        title: "University of North Carolina Writing Center",
        author: "UNC Chapel Hill",
        type: "website",
        url: "https://writingcenter.unc.edu/tips-and-tools/transitions/",
        description:
          "Academic writing resource focusing on transition usage and paragraph organization",
        relevance:
          "Offers practical advice on using transitions to improve coherence and flow in academic writing",
      },
      {
        title: "Harvard College Writing Center",
        author: "Harvard University",
        type: "website",
        url: "https://writingcenter.fas.harvard.edu/pages/transitions",
        description:
          "Guide to transition usage in academic writing with emphasis on logical relationships",
        relevance:
          "Provides advanced guidance on sophisticated transition usage in scholarly writing",
      },
    ],
    additional_resources: {
      style_guides: [
        "MLA Handbook for Writers of Research Papers - transition usage in humanities writing",
        "Publication Manual of the American Psychological Association (APA) - transitions in social sciences",
        "The Chicago Manual of Style - comprehensive style guide including transition conventions",
        "Scientific Style and Format: The CSE Manual - transitions in scientific writing",
        "Oxford Guide to Style - British English academic writing conventions",
      ],
      online_tools: [
        "Grammarly Academic Writing checker - identifies transition usage patterns and suggestions",
        "ProWritingAid Coherence reports - analyzes text flow and transition effectiveness",
        "Hemingway Editor - highlights complex sentences and suggests simpler alternatives",
        "Academic Phrasebank (University of Manchester) - extensive database of academic phrases",
        "Ludwig.guru - search engine for academic writing examples and transition usage",
      ],
      practice_platforms: [
        "Coursera Academic Writing courses - structured practice with transition usage",
        "edX Writing courses from top universities - comprehensive academic writing training",
        "FutureLearn Academic Writing courses - international perspective on academic conventions",
        "Khan Academy Grammar courses - foundational skills for effective transition usage",
        "MIT OpenCourseWare Writing and Humanistic Studies - advanced academic writing resources",
      ],
    },
  };
