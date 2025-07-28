import { irregularPluralsType } from "@/types/grammars/grammar/noun_special/irregular_plurals";

// Comprehensive Irregular Plurals Data (A1-C2)
export const irregularPluralsData: irregularPluralsType = {
  definition: {
    core_concept:
      "Irregular plurals are nouns that form their plural form in ways other than simply adding '-s' or '-es' to the singular form. These represent systematic deviations from regular English pluralization patterns, often preserving historical linguistic features from Old English, Latin, Greek, and other languages that have influenced English throughout its development.",
    grammatical_status:
      "These nouns follow specific morphological patterns or have completely unique plural forms that must be memorized. They constitute approximately 3-5% of English nouns but include many high-frequency vocabulary items essential for effective communication.",
    linguistic_significance:
      "Irregular plurals represent crucial evidence of English language evolution, demonstrating phonological changes, morphological adaptation, and cross-linguistic borrowing patterns that have shaped modern English morphology over more than 1,500 years of documented development.",
    historical_development:
      "Most irregular plurals derive from Old English strong noun declensions, Germanic umlaut processes, Latin/Greek scholarly borrowings during the Renaissance, and French Norman influence following 1066. These forms have been preserved due to their high frequency of use and cultural significance.",
    morphological_patterns: [
      "Vowel mutation (Germanic umlaut): foot → feet, tooth → teeth",
      "Consonant alternation: wife → wives, knife → knives",
      "Zero morphology (no change): sheep → sheep, deer → deer",
      "Suppletive forms (complete change): person → people, go → went",
      "Latin/Greek retention: criterion → criteria, alumnus → alumni",
      "Old English -en suffix: child → children, ox → oxen",
      "Double plurals: children (child + -r + -en)",
      "Metaplasm (sound change): mouse → mice, louse → lice",
    ],
    frequency_analysis:
      "High-frequency irregular plurals (child/children, man/men, woman/women, foot/feet, tooth/teeth) occur in the top 3,000 most common English words. Academic irregular plurals (criteria, phenomena, analyses) appear primarily in formal registers and specialized discourse.",
    cross_linguistic_comparison:
      "English irregular plurals show similarities to other Germanic languages (German Mann/Männer, Fuß/Füße) while incorporating Romance language patterns (Latin -a/-ae, Greek -on/-a) and maintaining unique Anglo-Saxon features not found in related languages.",
    examples: [
      "child/children",
      "foot/feet",
      "tooth/teeth",
      "man/men",
      "woman/women",
      "person/people",
      "goose/geese",
      "mouse/mice",
      "louse/lice",
      "ox/oxen",
      "criterion/criteria",
      "phenomenon/phenomena",
      "analysis/analyses",
      "crisis/crises",
      "thesis/theses",
      "index/indices",
      "matrix/matrices",
      "vertex/vertices",
      "alumnus/alumni",
      "focus/foci",
      "nucleus/nuclei",
      "radius/radii",
      "stimulus/stimuli",
      "syllabus/syllabi",
      "fungus/fungi",
      "cactus/cacti",
      "octopus/octopi",
      "corpus/corpora",
      "genus/genera",
    ],
  },

  // CEFR Level-based Learning Structure
  cefrLevels: {
    A1: {
      focus:
        "Basic recognition and production of most common irregular plurals in everyday contexts",
      vocabulary: [
        {
          singular: "child",
          plural: "children",
          pronunciation: "/ˈtʃɪldrən/",
          difficulty: "A1",
          examples: [
            "The children are playing.",
            "How many children do you have?",
          ],
        },
        {
          singular: "man",
          plural: "men",
          pronunciation: "/mɛn/",
          difficulty: "A1",
          examples: ["Two men are talking.", "The men work here."],
        },
        {
          singular: "woman",
          plural: "women",
          pronunciation: "/ˈwɪmɪn/",
          difficulty: "A1",
          examples: ["Three women arrived.", "The women are friends."],
        },
        {
          singular: "foot",
          plural: "feet",
          pronunciation: "/fiːt/",
          difficulty: "A1",
          examples: ["My feet hurt.", "He has big feet."],
        },
        {
          singular: "tooth",
          plural: "teeth",
          pronunciation: "/tiːθ/",
          difficulty: "A1",
          examples: ["Brush your teeth.", "The baby has two teeth."],
        },
        {
          singular: "person",
          plural: "people",
          pronunciation: "/ˈpiːpəl/",
          difficulty: "A1",
          examples: ["Many people came.", "People like music."],
        },
      ],
      patterns: [
        "Vowel change: man → men, foot → feet",
        "Complete word change: person → people, child → children",
        "High-frequency everyday vocabulary",
      ],
      learningObjectives: [
        "Recognize 6-8 most common irregular plurals",
        "Use irregular plurals in basic sentences",
        "Distinguish between regular and irregular plural forms",
        "Apply irregular plurals in personal information contexts",
      ],
      commonMistakes: [
        "Adding -s to irregular plurals (*childs, *mens, *foots)",
        "Using singular form instead of plural (*one feet, *two man)",
        "Confusion with pronunciation (*womans instead of women)",
      ],
      practiceTypes: [
        "Picture recognition exercises",
        "Simple substitution drills",
        "Basic sentence completion",
        "Matching singular to plural forms",
      ],
      keyRules: [
        "These words never take -s for plural",
        "Must memorize each form individually",
        "Used for people, body parts, and family",
      ],
    },

    A2: {
      focus:
        "Expansion of irregular plural vocabulary and pattern recognition in descriptive contexts",
      vocabulary: [
        {
          singular: "goose",
          plural: "geese",
          pronunciation: "/ɡiːs/",
          difficulty: "A2",
          examples: ["The geese are flying south.", "We saw wild geese."],
        },
        {
          singular: "mouse",
          plural: "mice",
          pronunciation: "/maɪs/",
          difficulty: "A2",
          examples: ["Mice live in the wall.", "The cat caught three mice."],
        },
        {
          singular: "sheep",
          plural: "sheep",
          pronunciation: "/ʃiːp/",
          difficulty: "A2",
          examples: ["The sheep are in the field.", "We counted twenty sheep."],
        },
        {
          singular: "fish",
          plural: "fish",
          pronunciation: "/fɪʃ/",
          difficulty: "A2",
          examples: ["Many fish swim here.", "The fish are colorful."],
        },
        {
          singular: "deer",
          plural: "deer",
          pronunciation: "/dɪər/",
          difficulty: "A2",
          examples: ["Two deer crossed the road.", "The deer are beautiful."],
        },
        {
          singular: "knife",
          plural: "knives",
          pronunciation: "/naɪvz/",
          difficulty: "A2",
          examples: ["Sharp knives cut well.", "Put the knives away."],
        },
        {
          singular: "life",
          plural: "lives",
          pronunciation: "/laɪvz/",
          difficulty: "A2",
          examples: ["They saved many lives.", "People have busy lives."],
        },
        {
          singular: "wife",
          plural: "wives",
          pronunciation: "/waɪvz/",
          difficulty: "A2",
          examples: ["The wives met together.", "Both wives work."],
        },
      ],
      patterns: [
        "Animals with vowel changes: goose → geese, mouse → mice",
        "No change patterns: sheep → sheep, fish → fish, deer → deer",
        "F to V changes: knife → knives, life → lives, wife → wives",
        "Pattern recognition and grouping",
      ],
      learningObjectives: [
        "Master 15-20 irregular plurals including animals",
        "Recognize no-change patterns (sheep, fish, deer)",
        "Understand f→v pattern in common words",
        "Use irregular plurals in descriptive contexts",
      ],
      commonMistakes: [
        "Adding -s to no-change plurals (*sheeps, *fishs, *deers)",
        "Not changing f to v (*knifes instead of knives)",
        "Overgeneralizing patterns (*gooses instead of geese)",
      ],
      practiceTypes: [
        "Animal and object categorization",
        "Pattern recognition exercises",
        "Descriptive sentence building",
        "Story completion activities",
      ],
      keyRules: [
        "Some animal names never change (sheep, fish, deer)",
        "Many words ending in -f change to -ves",
        "Vowel changes follow historical patterns",
      ],
    },

    B1: {
      focus:
        "Complex irregular patterns and usage in narrative and explanatory contexts",
      vocabulary: [
        {
          singular: "ox",
          plural: "oxen",
          pronunciation: "/ˈɒksən/",
          difficulty: "B1",
          examples: [
            "The oxen pulled the cart.",
            "Farmers used oxen for plowing.",
          ],
          etymology: "Old English",
        },
        {
          singular: "louse",
          plural: "lice",
          pronunciation: "/laɪs/",
          difficulty: "B1",
          examples: ["Head lice spread quickly.", "The lice were removed."],
          etymology: "Germanic",
        },
        {
          singular: "die",
          plural: "dice",
          pronunciation: "/daɪs/",
          difficulty: "B1",
          examples: ["Roll the dice.", "The dice showed six."],
          etymology: "Old French",
        },
        {
          singular: "penny",
          plural: "pence",
          pronunciation: "/pɛns/",
          difficulty: "B1",
          examples: ["It costs fifty pence.", "Count the pence carefully."],
          etymology: "Old English",
        },
        {
          singular: "aircraft",
          plural: "aircraft",
          pronunciation: "/ˈɛəkrɑːft/",
          difficulty: "B1",
          examples: [
            "Military aircraft flew overhead.",
            "The aircraft landed safely.",
          ],
        },
        {
          singular: "species",
          plural: "species",
          pronunciation: "/ˈspiːʃiːz/",
          difficulty: "B1",
          examples: ["Many species are endangered.", "This species is rare."],
          etymology: "Latin",
        },
      ],
      patterns: [
        "Old English -en suffix: ox → oxen (rare survival)",
        "Germanic umlaut: mouse → mice, louse → lice",
        "Compound words maintaining singular form: aircraft, spacecraft",
        "Latin borrowings with no change: species → species",
        "Historical and technical vocabulary",
      ],
      learningObjectives: [
        "Master 25-30 irregular plurals including historical terms",
        "Understand compound word pluralization rules",
        "Use irregular plurals in narrative contexts",
        "Recognize Latin borrowings with unchanged forms",
      ],
      commonMistakes: [
        "Adding -s to Latin singular forms (*specieses)",
        "Creating false irregular forms (*oxes instead of oxen)",
        "Confusion with compound words (*aircrafts)",
      ],
      practiceTypes: [
        "Historical and cultural context exercises",
        "Narrative writing with irregular plurals",
        "Technical vocabulary application",
        "Error correction activities",
      ],
      keyRules: [
        "Compound words often keep singular form for plural",
        "Latin words may not change at all",
        "Historical terms preserve old patterns",
      ],
    },

    B2: {
      focus:
        "Academic and professional irregular plurals with Latin and Greek origins",
      vocabulary: [
        {
          singular: "criterion",
          plural: "criteria",
          pronunciation: "/kraɪˈtɪəriə/",
          difficulty: "B2",
          examples: ["The criteria are strict.", "What criterion do you use?"],
          etymology: "Greek",
        },
        {
          singular: "phenomenon",
          plural: "phenomena",
          pronunciation: "/fɪˈnɒmɪnə/",
          difficulty: "B2",
          examples: [
            "Natural phenomena amaze us.",
            "This phenomenon is unusual.",
          ],
          etymology: "Greek",
        },
        {
          singular: "analysis",
          plural: "analyses",
          pronunciation: "/əˈnæləsiːz/",
          difficulty: "B2",
          examples: [
            "The analyses were thorough.",
            "Her analysis was correct.",
          ],
          etymology: "Greek",
        },
        {
          singular: "thesis",
          plural: "theses",
          pronunciation: "/ˈθiːsiːz/",
          difficulty: "B2",
          examples: [
            "Students defend their theses.",
            "His thesis was accepted.",
          ],
          etymology: "Greek",
        },
        {
          singular: "crisis",
          plural: "crises",
          pronunciation: "/ˈkraɪsiːz/",
          difficulty: "B2",
          examples: [
            "Economic crises affect everyone.",
            "The crisis was resolved.",
          ],
          etymology: "Greek",
        },
        {
          singular: "hypothesis",
          plural: "hypotheses",
          pronunciation: "/haɪˈpɒθəsiːz/",
          difficulty: "B2",
          examples: [
            "Scientists test hypotheses.",
            "The hypothesis was proven.",
          ],
          etymology: "Greek",
        },
        {
          singular: "alumnus",
          plural: "alumni",
          pronunciation: "/əˈlʌmnaɪ/",
          difficulty: "B2",
          examples: ["The alumni gathered.", "He's an alumnus of Harvard."],
          etymology: "Latin",
        },
        {
          singular: "focus",
          plural: "foci",
          pronunciation: "/ˈfoʊsaɪ/",
          difficulty: "B2",
          examples: ["The research has multiple foci.", "The focus is clear."],
          etymology: "Latin",
        },
      ],
      patterns: [
        "Greek -is → -es: analysis → analyses, crisis → crises",
        "Greek -on → -a: criterion → criteria, phenomenon → phenomena",
        "Latin -us → -i: alumnus → alumni, focus → foci",
        "Academic and scientific vocabulary",
        "Formal register usage",
      ],
      learningObjectives: [
        "Master 30-40 irregular plurals including academic terms",
        "Understand Greek and Latin derivation patterns",
        "Use irregular plurals in academic writing",
        "Distinguish between formal and informal registers",
      ],
      commonMistakes: [
        "Using regular plurals for Latin/Greek words (*criterions, *phenomenons)",
        "Gender confusion in Latin words (*alumnae for mixed groups)",
        "Register inappropriate usage (informal contexts)",
      ],
      practiceTypes: [
        "Academic writing exercises",
        "Research paper analysis",
        "Etymology-based learning",
        "Register awareness activities",
      ],
      keyRules: [
        "Greek words ending in -is change to -es",
        "Greek words ending in -on change to -a",
        "Latin words ending in -us often change to -i",
      ],
    },

    C1: {
      focus:
        "Specialized technical, medical, and scientific irregular plurals with complex derivations",
      vocabulary: [
        {
          singular: "matrix",
          plural: "matrices",
          pronunciation: "/ˈmeɪtrɪsiːz/",
          difficulty: "C1",
          examples: [
            "The matrices were calculated.",
            "This matrix is complex.",
          ],
          etymology: "Latin mathematical term",
        },
        {
          singular: "vertex",
          plural: "vertices",
          pronunciation: "/ˈvɜːrtɪsiːz/",
          difficulty: "C1",
          examples: ["The vertices form angles.", "Each vertex is marked."],
          etymology: "Latin geometric term",
        },
        {
          singular: "index",
          plural: "indices",
          pronunciation: "/ˈɪndɪsiːz/",
          difficulty: "C1",
          examples: ["The indices show trends.", "The index rose sharply."],
          etymology: "Latin",
        },
        {
          singular: "appendix",
          plural: "appendices",
          pronunciation: "/əˈpɛndɪsiːz/",
          difficulty: "C1",
          examples: ["The appendices contain data.", "See appendix A."],
          etymology: "Latin",
        },
        {
          singular: "stimulus",
          plural: "stimuli",
          pronunciation: "/ˈstɪmjʊlaɪ/",
          difficulty: "C1",
          examples: [
            "Multiple stimuli were used.",
            "The stimulus was effective.",
          ],
          etymology: "Latin",
        },
        {
          singular: "nucleus",
          plural: "nuclei",
          pronunciation: "/ˈnuːkliˌaɪ/",
          difficulty: "C1",
          examples: ["Cell nuclei contain DNA.", "The nucleus divides."],
          etymology: "Latin",
        },
        {
          singular: "fungus",
          plural: "fungi",
          pronunciation: "/ˈfʌŋɡaɪ/",
          difficulty: "C1",
          examples: ["The fungi grew rapidly.", "This fungus is poisonous."],
          etymology: "Latin",
        },
        {
          singular: "radius",
          plural: "radii",
          pronunciation: "/ˈreɪdiˌaɪ/",
          difficulty: "C1",
          examples: ["The radii are equal.", "Measure the radius."],
          etymology: "Latin",
        },
      ],
      patterns: [
        "Latin -ex/-ix → -ices: matrix → matrices, index → indices",
        "Latin -us → -i in scientific terms: stimulus → stimuli, nucleus → nuclei",
        "Technical and mathematical vocabulary",
        "Medical and biological terminology",
        "Specialized academic discourse",
      ],
      learningObjectives: [
        "Master 40-50 irregular plurals including technical terms",
        "Understand specialized register requirements",
        "Use irregular plurals in professional contexts",
        "Recognize etymology-based patterns",
      ],
      commonMistakes: [
        "Using anglicized forms in formal contexts (*indexes instead of indices)",
        "Overgeneralizing Latin patterns (*statuses instead of status)",
        "Pronunciation errors in technical terms",
      ],
      practiceTypes: [
        "Technical document analysis",
        "Scientific paper writing",
        "Professional communication",
        "Specialized vocabulary building",
      ],
      keyRules: [
        "Scientific terms often preserve Latin plurals",
        "Mathematical terms have specific plural forms",
        "Medical terminology requires precision",
      ],
    },

    C2: {
      focus:
        "Mastery of rare, archaic, and highly specialized irregular plurals across all registers",
      vocabulary: [
        {
          singular: "corpus",
          plural: "corpora",
          pronunciation: "/ˈkɔːrpərə/",
          difficulty: "C2",
          examples: [
            "Linguistic corpora provide data.",
            "The corpus was analyzed.",
          ],
          etymology: "Latin body of work",
        },
        {
          singular: "genus",
          plural: "genera",
          pronunciation: "/ˈdʒɛnərə/",
          difficulty: "C2",
          examples: ["The genera were classified.", "This genus is extinct."],
          etymology: "Latin biological term",
        },
        {
          singular: "opus",
          plural: "opera",
          pronunciation: "/ˈɒpərə/",
          difficulty: "C2",
          examples: [
            "Beethoven's opera are masterpieces.",
            "His opus 27 is famous.",
          ],
          etymology: "Latin musical work",
        },
        {
          singular: "viscus",
          plural: "viscera",
          pronunciation: "/ˈvɪsərə/",
          difficulty: "C2",
          examples: ["The viscera were examined.", "Each viscus was healthy."],
          etymology: "Latin anatomical",
        },
        {
          singular: "erratum",
          plural: "errata",
          pronunciation: "/ɛˈrɑːtə/",
          difficulty: "C2",
          examples: ["The errata were listed.", "One erratum was found."],
          etymology: "Latin publishing",
        },
        {
          singular: "stratum",
          plural: "strata",
          pronunciation: "/ˈstreɪtə/",
          difficulty: "C2",
          examples: [
            "Geological strata reveal history.",
            "This stratum is ancient.",
          ],
          etymology: "Latin geological",
        },
        {
          singular: "bacterium",
          plural: "bacteria",
          pronunciation: "/bækˈtɪəriə/",
          difficulty: "C2",
          examples: [
            "The bacteria were cultured.",
            "Each bacterium was studied.",
          ],
          etymology: "Latin/Greek",
        },
        {
          singular: "millennium",
          plural: "millennia",
          pronunciation: "/mɪˈlɛniə/",
          difficulty: "C2",
          examples: [
            "Many millennia passed.",
            "This millennium brought change.",
          ],
          etymology: "Latin",
        },
      ],
      patterns: [
        "Latin -us → -a in specialized terms: corpus → corpora, genus → genera",
        "Latin -um → -a: erratum → errata, stratum → strata",
        "Highly specialized academic and professional vocabulary",
        "Archaic and literary forms",
        "Cross-disciplinary technical terminology",
      ],
      learningObjectives: [
        "Master 50+ irregular plurals including rare and archaic forms",
        "Use irregular plurals appropriately across all registers",
        "Understand historical and etymological development",
        "Apply knowledge in specialized academic writing",
      ],
      commonMistakes: [
        "Using incorrect forms in specialized contexts",
        "Mixing register levels inappropriately",
        "Pronunciation errors in rare terms",
      ],
      practiceTypes: [
        "Advanced academic writing",
        "Historical text analysis",
        "Cross-disciplinary research",
        "Professional editing and proofreading",
      ],
      keyRules: [
        "Rare terms often preserve classical forms",
        "Context determines appropriate form choice",
        "Mastery requires extensive exposure",
      ],
    },
  },

  // Enhanced categorization with comprehensive examples
  irregular_plurals_categories: {
    vowel_change: [
      {
        singular: "man",
        plural: "men",
        etymology: "Germanic umlaut",
        difficulty: "A1",
      },
      {
        singular: "woman",
        plural: "women",
        etymology: "Germanic umlaut",
        difficulty: "A1",
      },
      {
        singular: "foot",
        plural: "feet",
        etymology: "Germanic umlaut",
        difficulty: "A1",
      },
      {
        singular: "tooth",
        plural: "teeth",
        etymology: "Germanic umlaut",
        difficulty: "A1",
      },
      {
        singular: "goose",
        plural: "geese",
        etymology: "Germanic umlaut",
        difficulty: "A2",
      },
      {
        singular: "mouse",
        plural: "mice",
        etymology: "Germanic umlaut",
        difficulty: "A2",
      },
      {
        singular: "louse",
        plural: "lice",
        etymology: "Germanic umlaut",
        difficulty: "B1",
      },
    ],

    consonant_change: [
      {
        singular: "knife",
        plural: "knives",
        etymology: "Old English fricative voicing",
        difficulty: "A2",
      },
      {
        singular: "life",
        plural: "lives",
        etymology: "Old English fricative voicing",
        difficulty: "A2",
      },
      {
        singular: "wife",
        plural: "wives",
        etymology: "Old English fricative voicing",
        difficulty: "A2",
      },
      {
        singular: "leaf",
        plural: "leaves",
        etymology: "Old English fricative voicing",
        difficulty: "A2",
      },
      {
        singular: "half",
        plural: "halves",
        etymology: "Old English fricative voicing",
        difficulty: "A2",
      },
      {
        singular: "calf",
        plural: "calves",
        etymology: "Old English fricative voicing",
        difficulty: "B1",
      },
      {
        singular: "shelf",
        plural: "shelves",
        etymology: "Old English fricative voicing",
        difficulty: "A2",
      },
      {
        singular: "thief",
        plural: "thieves",
        etymology: "Old English fricative voicing",
        difficulty: "B1",
      },
      {
        singular: "loaf",
        plural: "loaves",
        etymology: "Old English fricative voicing",
        difficulty: "B1",
      },
      {
        singular: "wolf",
        plural: "wolves",
        etymology: "Old English fricative voicing",
        difficulty: "B1",
      },
      {
        singular: "elf",
        plural: "elves",
        etymology: "Old English fricative voicing",
        difficulty: "B1",
      },
      {
        singular: "scarf",
        plural: "scarves",
        etymology: "Old English fricative voicing",
        difficulty: "B1",
        notes: "Also 'scarfs' accepted",
      },
    ],

    latin_origin: [
      {
        singular: "alumnus",
        plural: "alumni",
        etymology: "Latin masculine",
        difficulty: "B2",
      },
      {
        singular: "alumna",
        plural: "alumnae",
        etymology: "Latin feminine",
        difficulty: "B2",
      },
      {
        singular: "radius",
        plural: "radii",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "focus",
        plural: "foci",
        etymology: "Latin",
        difficulty: "B2",
      },
      {
        singular: "fungus",
        plural: "fungi",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "cactus",
        plural: "cacti",
        etymology: "Latin",
        difficulty: "B2",
        notes: "Also 'cactuses' accepted",
      },
      {
        singular: "nucleus",
        plural: "nuclei",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "stimulus",
        plural: "stimuli",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "syllabus",
        plural: "syllabi",
        etymology: "Latin",
        difficulty: "B2",
        notes: "Also 'syllabuses' accepted",
      },
      {
        singular: "analysis",
        plural: "analyses",
        etymology: "Greek via Latin",
        difficulty: "B2",
      },
      {
        singular: "crisis",
        plural: "crises",
        etymology: "Greek via Latin",
        difficulty: "B2",
      },
      {
        singular: "thesis",
        plural: "theses",
        etymology: "Greek via Latin",
        difficulty: "B2",
      },
      {
        singular: "diagnosis",
        plural: "diagnoses",
        etymology: "Greek via Latin",
        difficulty: "B2",
      },
      {
        singular: "oasis",
        plural: "oases",
        etymology: "Greek via Latin",
        difficulty: "B2",
      },
      {
        singular: "ellipsis",
        plural: "ellipses",
        etymology: "Greek via Latin",
        difficulty: "C1",
      },
      {
        singular: "axis",
        plural: "axes",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "matrix",
        plural: "matrices",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "index",
        plural: "indices",
        etymology: "Latin",
        difficulty: "C1",
        notes: "Also 'indexes' in some contexts",
      },
      {
        singular: "vertex",
        plural: "vertices",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "appendix",
        plural: "appendices",
        etymology: "Latin",
        difficulty: "C1",
        notes: "Also 'appendixes' accepted",
      },
    ],

    greek_origin: [
      {
        singular: "phenomenon",
        plural: "phenomena",
        etymology: "Greek",
        difficulty: "B2",
      },
      {
        singular: "criterion",
        plural: "criteria",
        etymology: "Greek",
        difficulty: "B2",
      },
      {
        singular: "datum",
        plural: "data",
        etymology: "Latin from Greek",
        difficulty: "B2",
      },
      {
        singular: "automaton",
        plural: "automata",
        etymology: "Greek",
        difficulty: "C1",
      },
      {
        singular: "polyhedron",
        plural: "polyhedra",
        etymology: "Greek",
        difficulty: "C1",
      },
    ],

    germanic_origin: [
      {
        singular: "child",
        plural: "children",
        etymology: "Old English with double plural",
        difficulty: "A1",
      },
      {
        singular: "ox",
        plural: "oxen",
        etymology: "Old English weak declension",
        difficulty: "B1",
      },
      {
        singular: "brother",
        plural: "brethren",
        etymology: "Archaic Old English",
        difficulty: "C2",
        notes: "Used in religious/formal contexts",
      },
    ],

    french_origin: [
      {
        singular: "beau",
        plural: "beaux",
        etymology: "French",
        difficulty: "C2",
      },
      {
        singular: "tableau",
        plural: "tableaux",
        etymology: "French",
        difficulty: "C2",
      },
      {
        singular: "chateau",
        plural: "chateaux",
        etymology: "French",
        difficulty: "C2",
      },
    ],

    no_change: [
      {
        singular: "sheep",
        plural: "sheep",
        etymology: "Old English unchanged",
        difficulty: "A2",
      },
      {
        singular: "fish",
        plural: "fish",
        etymology: "Old English unchanged",
        difficulty: "A2",
      },
      {
        singular: "deer",
        plural: "deer",
        etymology: "Old English unchanged",
        difficulty: "A2",
      },
      {
        singular: "species",
        plural: "species",
        etymology: "Latin unchanged",
        difficulty: "B1",
      },
      {
        singular: "aircraft",
        plural: "aircraft",
        etymology: "Modern compound",
        difficulty: "B1",
      },
      {
        singular: "spacecraft",
        plural: "spacecraft",
        etymology: "Modern compound",
        difficulty: "B1",
      },
      {
        singular: "bison",
        plural: "bison",
        etymology: "French unchanged",
        difficulty: "B1",
      },
      {
        singular: "salmon",
        plural: "salmon",
        etymology: "Old French unchanged",
        difficulty: "B1",
      },
      {
        singular: "trout",
        plural: "trout",
        etymology: "Old English unchanged",
        difficulty: "B1",
      },
      {
        singular: "moose",
        plural: "moose",
        etymology: "Algonquian unchanged",
        difficulty: "B1",
      },
      {
        singular: "elk",
        plural: "elk",
        etymology: "Old English unchanged",
        difficulty: "B1",
      },
      {
        singular: "buffalo",
        plural: "buffalo",
        etymology: "Portuguese unchanged",
        difficulty: "B1",
      },
    ],

    en_suffix: [
      {
        singular: "child",
        plural: "children",
        etymology: "Old English cild + -r- + -en",
        difficulty: "A1",
      },
      {
        singular: "ox",
        plural: "oxen",
        etymology: "Old English weak declension",
        difficulty: "B1",
      },
    ],

    foreign_exceptions: [
      {
        singular: "tempo",
        plural: "tempi",
        etymology: "Italian",
        difficulty: "C1",
      },
      {
        singular: "memorandum",
        plural: "memoranda",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "medium",
        plural: "media",
        etymology: "Latin",
        difficulty: "B2",
      },
      {
        singular: "bacterium",
        plural: "bacteria",
        etymology: "Modern Latin",
        difficulty: "C1",
      },
      {
        singular: "curriculum",
        plural: "curricula",
        etymology: "Latin",
        difficulty: "B2",
        notes: "Also 'curriculums' accepted",
      },
      {
        singular: "stratum",
        plural: "strata",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "millennium",
        plural: "millennia",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "addendum",
        plural: "addenda",
        etymology: "Latin",
        difficulty: "C1",
      },
      {
        singular: "referendum",
        plural: "referenda",
        etymology: "Latin",
        difficulty: "C1",
      },
    ],

    archaic_forms: [
      {
        singular: "brother",
        plural: "brethren",
        etymology: "Old English",
        difficulty: "C2",
        notes: "Religious/formal only",
      },
      {
        singular: "cow",
        plural: "kine",
        etymology: "Old English",
        difficulty: "C2",
        notes: "Obsolete except dialectally",
      },
      {
        singular: "shoe",
        plural: "shoon",
        etymology: "Old English",
        difficulty: "C2",
        notes: "Completely obsolete",
      },
    ],

    special_cases: [
      {
        singular: "person",
        plural: "people",
        etymology: "Suppletive from Old French",
        difficulty: "A1",
      },
      {
        singular: "people",
        plural: "peoples",
        etymology: "Different meaning (nations)",
        difficulty: "B1",
      },
      {
        singular: "die",
        plural: "dice",
        etymology: "Old French",
        difficulty: "B1",
      },
      {
        singular: "penny",
        plural: "pence",
        etymology: "Old English",
        difficulty: "B1",
        notes: "UK currency context",
      },
    ],

    compound_words: [
      {
        singular: "passerby",
        plural: "passersby",
        etymology: "Modern compound",
        difficulty: "B2",
      },
      {
        singular: "father-in-law",
        plural: "fathers-in-law",
        etymology: "Modern compound",
        difficulty: "B2",
      },
      {
        singular: "attorney general",
        plural: "attorneys general",
        etymology: "Modern compound",
        difficulty: "C1",
      },
      {
        singular: "court martial",
        plural: "courts martial",
        etymology: "Modern compound",
        difficulty: "C1",
      },
    ],
  },

  // Academic and Reference Materials
  references: {
    academic_sources: [
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Huddleston, Rodney & Pullum, Geoffrey K.",
        year: 2002,
        publisher: "Cambridge University Press",
        type: "book",
        description:
          "Comprehensive reference grammar covering irregular plural formation and morphological patterns in modern English",
      },
      {
        title: "A Comprehensive Grammar of the English Language",
        author: "Quirk, Randolph et al.",
        year: 1985,
        publisher: "Longman",
        type: "book",
        description:
          "Authoritative grammar reference with detailed coverage of irregular noun pluralization patterns and historical development",
      },
      {
        title: "An Introduction to English Morphology",
        author: "Lieber, Rochelle",
        year: 2009,
        publisher: "Edinburgh University Press",
        type: "book",
        description:
          "Detailed analysis of English morphological processes including irregular plural formation and phonological changes",
      },
      {
        title: "The Oxford English Grammar",
        author: "Greenbaum, Sidney",
        year: 1996,
        publisher: "Oxford University Press",
        type: "book",
        description:
          "Comprehensive treatment of English grammar including extensive coverage of irregular plurals and their usage patterns",
      },
      {
        title: "English Historical Morphology",
        author: "Kastovsky, Dieter",
        year: 2006,
        publisher: "De Gruyter Mouton",
        type: "book",
        description:
          "Historical analysis of English morphological development including the evolution of irregular plural systems",
      },
      {
        title:
          "The Structure of English: An Introduction to Grammatical Analysis",
        author: "Börjars, Kersti & Burridge, Kate",
        year: 2010,
        publisher: "Cambridge University Press",
        type: "book",
        description:
          "Modern linguistic analysis of English structure including morphological patterns and irregular plural formation",
      },
    ],
    online_resources: [
      {
        title: "Oxford English Dictionary Online",
        url: "https://www.oed.com",
        description:
          "Comprehensive etymological information for irregular plurals with historical development and usage patterns",
        reliability: "high",
      },
      {
        title: "Merriam-Webster Dictionary",
        url: "https://www.merriam-webster.com",
        description:
          "Reliable source for irregular plural forms with pronunciation guides and usage notes",
        reliability: "high",
      },
      {
        title: "Cambridge Dictionary Online",
        url: "https://dictionary.cambridge.org",
        description:
          "Learner-friendly resource with clear irregular plural explanations and examples",
        reliability: "high",
      },
      {
        title: "Etymology Online",
        url: "https://www.etymonline.com",
        description:
          "Detailed etymological information about the historical development of irregular plural forms",
        reliability: "high",
      },
      {
        title: "Corpus of Contemporary American English (COCA)",
        url: "https://www.english-corpora.org/coca/",
        description:
          "Large corpus database for analyzing frequency and usage patterns of irregular plurals",
        reliability: "high",
      },
    ],
    dictionaries: [
      {
        name: "Oxford English Dictionary",
        url: "https://www.oed.com",
        description:
          "Most comprehensive historical dictionary with full etymological information",
      },
      {
        name: "Webster's Third New International Dictionary",
        description:
          "Authoritative American English dictionary with detailed usage information",
      },
      {
        name: "Cambridge Advanced Learner's Dictionary",
        url: "https://dictionary.cambridge.org",
        description:
          "Excellent for ESL learners with clear irregular plural guidance",
      },
    ],
  },
  // Linguistic Analysis
  linguistic_analysis: {
    phonological_changes: [
      "Germanic umlaut: foot → feet (fronting of back vowel)",
      "Vowel mutation: man → men (historical i-umlaut)",
      "Consonant voicing: knife → knives (fricative voicing)",
      "Vowel lengthening: goose → geese (Middle English changes)",
      "Stress shift effects in compound plurals",
    ],
    morphological_processes: [
      "Ablaut (vowel gradation) from Proto-Germanic",
      "Weak declension preservation: ox → oxen",
      "Strong declension vowel changes: mouse → mice",
      "Suppletion: person → people (different word roots)",
      "Zero morphology: sheep → sheep (no overt marking)",
      "Foreign morphology retention: alumnus → alumni",
    ],
    historical_etymology: {
      old_english: [
        "Mann/menn (man/men) - Germanic umlaut preservation",
        "Cild/cildru (child/children) - weak declension + additional -en",
        "Fōt/fēt (foot/feet) - umlaut from Germanic *fōts/*fōtiz",
        "Mūs/mȳs (mouse/mice) - i-umlaut vowel fronting",
      ],
      middle_english: [
        "Goos/gees (goose/geese) - Great Vowel Shift influence",
        "Tooth/teeth - continued Germanic pattern",
        "Sheep/sheep - zero plural from Old English scēap",
        "Deer/deer - maintained unchanged pattern",
      ],
      latin_influence: [
        "Medieval scholarly borrowings: alumnus/alumni",
        "Scientific terminology: datum/data, medium/media",
        "Mathematical terms: radius/radii, focus/foci",
        "Academic vocabulary: curriculum/curricula, criterion/criteria",
      ],
      greek_influence: [
        "Classical borrowings: phenomenon/phenomena",
        "Scientific terms: analysis/analyses",
        "Technical vocabulary: hypothesis/hypotheses",
        "Medical terminology: diagnosis/diagnoses",
      ],
      germanic_roots: [
        "Proto-Germanic *mann-/*mann-iz → man/men",
        "Proto-Germanic *fōts/*fōtiz → foot/feet",
        "Proto-Germanic *gans/*gansiz → goose/geese",
        "Proto-Germanic *mūs/*mūsiz → mouse/mice",
      ],
    },
    semantic_evolution: [
      "Person → people: shift from individual to collective",
      "Datum → data: specialized scientific usage development",
      "Medium → media: modern technological adaptation",
      "Children: development from collective to standard plural",
    ],
  },

  // Pedagogical Information
  pedagogical_approach: {
    teaching_strategies: [
      {
        level: "A1-A2",
        methods: [
          "Visual association",
          "Repetition drilling",
          "Memory techniques",
          "Pattern recognition",
        ],
        activities: [
          "Picture matching",
          "Singular-plural pairing",
          "Basic substitution",
          "Family vocabulary",
        ],
        assessment: [
          "Recognition tasks",
          "Simple production",
          "Picture identification",
          "Oral repetition",
        ],
      },
      {
        level: "B1-B2",
        methods: [
          "Etymology awareness",
          "Pattern categorization",
          "Contextual learning",
          "Error analysis",
        ],
        activities: [
          "Text completion",
          "Error correction",
          "Category sorting",
          "Academic vocabulary",
        ],
        assessment: [
          "Context application",
          "Pattern recognition",
          "Written production",
          "Register awareness",
        ],
      },
      {
        level: "C1-C2",
        methods: [
          "Historical analysis",
          "Cross-linguistic comparison",
          "Advanced etymology",
          "Register sensitivity",
        ],
        activities: [
          "Academic writing",
          "Research tasks",
          "Professional contexts",
          "Specialized vocabulary",
        ],
        assessment: [
          "Complex production",
          "Register appropriateness",
          "Specialized usage",
          "Error sensitivity",
        ],
      },
    ],
    learning_progression: [
      "Stage 1: High-frequency memorization (A1-A2)",
      "Stage 2: Pattern recognition and grouping (A2-B1)",
      "Stage 3: Etymology-based understanding (B1-B2)",
      "Stage 4: Register and context sensitivity (B2-C1)",
      "Stage 5: Complete mastery and specialization (C1-C2)",
    ],
    memory_techniques: [
      "Visual mnemonics: feet look like feet",
      "Sound associations: mice rhymes with nice",
      "Etymology connections: Latin roots for academic terms",
      "Pattern grouping: f→v changes (knife/knives)",
      "Frequency exposure: repeated contextual encounters",
    ],
    error_prediction: [
      "Overgeneralization: adding -s to irregular forms",
      "Pattern confusion: applying wrong irregular pattern",
      "Register mixing: informal forms in academic contexts",
      "Etymology errors: incorrect Latin/Greek patterns",
      "Pronunciation transfer: L1 phonological interference",
    ],
  },

  forms: {
    basic:
      "Singular form → Irregular plural form without regular -s/-es suffix",
    vowel_change:
      "Internal vowel modification: foot → feet, tooth → teeth, goose → geese",
    en_ending: "Old English weak declension: child → children, ox → oxen",
    no_change:
      "Zero morphology maintenance: sheep → sheep, deer → deer, fish → fish",
    latin_greek:
      "Classical language retention: criterion → criteria, phenomenon → phenomena",
    es_ending: "Fricative + -es pattern: analysis → analyses, crisis → crises",
    irregular_patterns: [
      "Germanic umlaut vowel changes",
      "Suppletive root replacement",
      "Historical weak declension survival",
      "Foreign language morphology preservation",
      "Compound word pluralization variations",
      "Archaic form maintenance in specialized contexts",
    ],
  },

  usage: [
    "Common everyday objects and people in daily communication",
    "Body parts and anatomical references in medical contexts",
    "Animals and creatures in nature and farming contexts",
    "Academic and scientific terms in formal discourse",
    "Latin and Greek derived words in scholarly writing",
    "Technical and specialized vocabulary in professional settings",
    "Historical and literary references in cultural contexts",
    "Mathematical and geometric terms in analytical contexts",
  ],

  // Comprehensive examples by category and level
  examples: {
    by_category: {
      people: [
        { singular: "man", plural: "men", difficulty: "A1" },
        { singular: "woman", plural: "women", difficulty: "A1" },
        { singular: "child", plural: "children", difficulty: "A1" },
        { singular: "person", plural: "people", difficulty: "A1" },
      ],
      body_parts: [
        { singular: "foot", plural: "feet", difficulty: "A1" },
        { singular: "tooth", plural: "teeth", difficulty: "A1" },
        { singular: "hand", plural: "hands", difficulty: "A1" },
        { singular: "eye", plural: "eyes", difficulty: "A1" },
      ],
      animals: [
        { singular: "goose", plural: "geese", difficulty: "A2" },
        { singular: "mouse", plural: "mice", difficulty: "A2" },
        { singular: "sheep", plural: "sheep", difficulty: "A2" },
        { singular: "deer", plural: "deer", difficulty: "A2" },
      ],
      academic: [
        { singular: "criterion", plural: "criteria", difficulty: "B2" },
        { singular: "phenomenon", plural: "phenomena", difficulty: "B2" },
        { singular: "analysis", plural: "analyses", difficulty: "B2" },
        { singular: "thesis", plural: "theses", difficulty: "B2" },
      ],
    },
    by_level: {
      A1: [
        {
          singular: "child",
          plural: "children",
          pronunciation: "/ˈtʃɪldrən/",
          difficulty: "A1",
        },
        {
          singular: "man",
          plural: "men",
          pronunciation: "/mɛn/",
          difficulty: "A1",
        },
        {
          singular: "woman",
          plural: "women",
          pronunciation: "/ˈwɪmɪn/",
          difficulty: "A1",
        },
        {
          singular: "foot",
          plural: "feet",
          pronunciation: "/fiːt/",
          difficulty: "A1",
        },
        {
          singular: "tooth",
          plural: "teeth",
          pronunciation: "/tiːθ/",
          difficulty: "A1",
        },
        {
          singular: "person",
          plural: "people",
          pronunciation: "/ˈpiːpəl/",
          difficulty: "A1",
        },
      ],
      A2: [
        {
          singular: "goose",
          plural: "geese",
          pronunciation: "/ɡiːs/",
          difficulty: "A2",
        },
        {
          singular: "mouse",
          plural: "mice",
          pronunciation: "/maɪs/",
          difficulty: "A2",
        },
        {
          singular: "sheep",
          plural: "sheep",
          pronunciation: "/ʃiːp/",
          difficulty: "A2",
        },
        {
          singular: "fish",
          plural: "fish",
          pronunciation: "/fɪʃ/",
          difficulty: "A2",
        },
        {
          singular: "knife",
          plural: "knives",
          pronunciation: "/naɪvz/",
          difficulty: "A2",
        },
        {
          singular: "life",
          plural: "lives",
          pronunciation: "/laɪvz/",
          difficulty: "A2",
        },
      ],
      B1: [
        {
          singular: "ox",
          plural: "oxen",
          pronunciation: "/ˈɒksən/",
          difficulty: "B1",
        },
        {
          singular: "louse",
          plural: "lice",
          pronunciation: "/laɪs/",
          difficulty: "B1",
        },
        {
          singular: "aircraft",
          plural: "aircraft",
          pronunciation: "/ˈɛəkrɑːft/",
          difficulty: "B1",
        },
        {
          singular: "species",
          plural: "species",
          pronunciation: "/ˈspiːʃiːz/",
          difficulty: "B1",
        },
      ],
      B2: [
        {
          singular: "criterion",
          plural: "criteria",
          pronunciation: "/kraɪˈtɪəriə/",
          difficulty: "B2",
        },
        {
          singular: "phenomenon",
          plural: "phenomena",
          pronunciation: "/fɪˈnɒmɪnə/",
          difficulty: "B2",
        },
        {
          singular: "analysis",
          plural: "analyses",
          pronunciation: "/əˈnæləsiːz/",
          difficulty: "B2",
        },
        {
          singular: "alumnus",
          plural: "alumni",
          pronunciation: "/əˈlʌmnaɪ/",
          difficulty: "B2",
        },
      ],
      C1: [
        {
          singular: "matrix",
          plural: "matrices",
          pronunciation: "/ˈmeɪtrɪsiːz/",
          difficulty: "C1",
        },
        {
          singular: "vertex",
          plural: "vertices",
          pronunciation: "/ˈvɜːrtɪsiːz/",
          difficulty: "C1",
        },
        {
          singular: "stimulus",
          plural: "stimuli",
          pronunciation: "/ˈstɪmjʊlaɪ/",
          difficulty: "C1",
        },
        {
          singular: "nucleus",
          plural: "nuclei",
          pronunciation: "/ˈnuːkliˌaɪ/",
          difficulty: "C1",
        },
      ],
      C2: [
        {
          singular: "corpus",
          plural: "corpora",
          pronunciation: "/ˈkɔːrpərə/",
          difficulty: "C2",
        },
        {
          singular: "genus",
          plural: "genera",
          pronunciation: "/ˈdʒɛnərə/",
          difficulty: "C2",
        },
        {
          singular: "opus",
          plural: "opera",
          pronunciation: "/ˈɒpərə/",
          difficulty: "C2",
        },
        {
          singular: "erratum",
          plural: "errata",
          pronunciation: "/ɛˈrɑːtə/",
          difficulty: "C2",
        },
      ],
    },
    high_frequency: [
      { singular: "child", plural: "children", difficulty: "A1" },
      { singular: "man", plural: "men", difficulty: "A1" },
      { singular: "woman", plural: "women", difficulty: "A1" },
      { singular: "person", plural: "people", difficulty: "A1" },
      { singular: "foot", plural: "feet", difficulty: "A1" },
      { singular: "tooth", plural: "teeth", difficulty: "A1" },
    ],
    academic_scientific: [
      { singular: "analysis", plural: "analyses", difficulty: "B2" },
      { singular: "hypothesis", plural: "hypotheses", difficulty: "B2" },
      { singular: "criterion", plural: "criteria", difficulty: "B2" },
      { singular: "phenomenon", plural: "phenomena", difficulty: "B2" },
      { singular: "datum", plural: "data", difficulty: "B2" },
    ],
    everyday_usage: [
      { singular: "child", plural: "children", difficulty: "A1" },
      { singular: "foot", plural: "feet", difficulty: "A1" },
      { singular: "tooth", plural: "teeth", difficulty: "A1" },
      { singular: "knife", plural: "knives", difficulty: "A2" },
      { singular: "life", plural: "lives", difficulty: "A2" },
    ],
  },

  // Error analysis and common mistakes
  commonMistakes: {
    by_level: {
      A1: [
        "Adding -s to basic irregular plurals (*childs, *mans, *womans)",
        "Using singular forms in plural contexts (*one feet, *two man)",
        "Pronunciation errors (*womans /ˈwʊmənz/ instead of women /ˈwɪmɪn/)",
        "Confusion between regular and irregular (*tooths instead of teeth)",
      ],
      A2: [
        "Overgeneralizing patterns (*gooses instead of geese)",
        "Adding -s to no-change plurals (*sheeps, *fishs, *deers)",
        "Not applying f→v changes (*knifes instead of knives)",
        "Creating false irregular forms (*mouses instead of mice)",
      ],
      B1: [
        "Confusion with compound words (*spacecrafts instead of spacecraft)",
        "Incorrect pattern application (*oxes instead of oxen)",
        "Register mixing in academic contexts (*datas instead of data)",
        "Overgeneralization of Latin patterns (*statuses instead of status)",
      ],
      B2: [
        "Incorrect Latin/Greek plurals (*criterions instead of criteria)",
        "Gender confusion in Latin words (*alumni for mixed groups)",
        "Using regular forms in academic writing (*phenomenons instead of phenomena)",
        "Double pluralization (*bacterias instead of bacteria)",
      ],
      C1: [
        "Mixing anglicized and classical forms inappropriately",
        "Using incorrect forms in specialized contexts (*matrixes in mathematics)",
        "Pronunciation errors in technical terms (*nucleuses instead of nuclei)",
        "Register sensitivity failures (informal forms in formal contexts)",
      ],
      C2: [
        "Rare form confusion (*corpuses instead of corpora in linguistics)",
        "Archaic form misuse (using obsolete plurals)",
        "Context-inappropriate classical forms",
        "Hypercorrection in specialized terminology",
      ],
    },
    by_pattern: {
      vowel_change: [
        "Adding -s to umlaut words (*mans, *foots)",
        "Pronunciation confusion (*womans)",
      ],
      no_change: [
        "Adding unnecessary -s (*sheeps, *deers)",
        "Uncertainty about plural marking",
      ],
      latin_greek: [
        "Using English patterns (*criterions)",
        "Gender confusion (*alumnae for mixed)",
      ],
      f_to_v: [
        "Not applying consonant change (*knifes)",
        "Overapplying to exceptions (*rooves)",
      ],
    },
    fossilized_errors: [
      "Persistent *datas in informal speech",
      "Common *sheeps in children's language",
      "*Mouses in computer contexts",
      "*Criterions in non-academic writing",
    ],
  },

  recognition: [
    "Memorize high-frequency irregular patterns through repeated exposure",
    "Learn Latin/Greek derived word patterns for academic vocabulary",
    "Understand historical language changes and their modern effects",
    "Practice with context clues and semantic associations",
    "Develop register sensitivity for appropriate form selection",
    "Use etymology to predict and remember irregular patterns",
    "Apply pattern recognition strategies for similar word groups",
    "Develop error monitoring and self-correction strategies",
  ],

  timeMarkers: [
    "Always use irregular form regardless of time reference",
    "In all contexts and time periods maintain irregular pattern",
    "Regardless of temporal markers use correct irregular plural",
    "Historical, present, and future contexts require same irregular form",
  ],

  pronounChanges: {
    basic:
      "Singular pronouns (it, this) → Plural pronouns (they, these) with irregular plurals",
    advanced:
      "Complex pronoun agreement with irregular plurals in formal and academic contexts",
    agreement_rules: [
      "Demonstratives: this child → these children, that mouse → those mice",
      "Quantifiers: one person → many people, each criterion → all criteria",
      "Possessives: the child's toy → the children's toys",
      "Relative pronouns: the man who → the men who",
      "Subject-verb agreement: the foot is → the feet are",
    ],
  },

  // Cultural and contextual information
  culturalContexts: {
    daily_life:
      "Common irregular plurals in everyday conversation, family contexts, and basic social interactions",
    academic:
      "Scholarly irregular plurals in research, analysis, and formal academic writing contexts",
    professional:
      "Workplace irregular plurals in business, technical, and specialized professional communications",
    literary:
      "Irregular plurals in creative writing, poetry, and literary contexts including archaic forms",
    scientific:
      "Technical irregular plurals in scientific research, laboratory work, and academic publications",
    medical:
      "Anatomical and medical irregular plurals in healthcare settings and medical documentation",
    legal:
      "Legal terminology irregular plurals in contracts, court proceedings, and legal documentation",
    idiomatic:
      "Idiomatic expressions and fixed phrases containing irregular plurals in natural speech",
  },

  // Special cases and variations
  specialCases: {
    dual_forms: [
      {
        singular: "index",
        plural: "indices",
        notes: "Mathematical/technical contexts",
        difficulty: "C1",
      },
      {
        singular: "index",
        plural: "indexes",
        notes: "General/book contexts",
        difficulty: "B2",
      },
      {
        singular: "appendix",
        plural: "appendices",
        notes: "Medical/technical",
        difficulty: "C1",
      },
      {
        singular: "appendix",
        plural: "appendixes",
        notes: "Book/document",
        difficulty: "B2",
      },
      {
        singular: "cactus",
        plural: "cacti",
        notes: "Scientific/botanical",
        difficulty: "B2",
      },
      {
        singular: "cactus",
        plural: "cactuses",
        notes: "General usage",
        difficulty: "B1",
      },
    ],
    archaic: [
      {
        singular: "brother",
        plural: "brethren",
        notes: "Religious/formal contexts only",
        difficulty: "C2",
      },
      {
        singular: "cow",
        plural: "kine",
        notes: "Completely obsolete",
        difficulty: "C2",
      },
      {
        singular: "house",
        plural: "housen",
        notes: "Dialectal/obsolete",
        difficulty: "C2",
      },
    ],
    regional: [
      {
        singular: "you",
        plural: "youse",
        notes: "Dialectal Australian/Irish",
        difficulty: "C2",
      },
      {
        singular: "antenna",
        plural: "antennae",
        notes: "British preference",
        difficulty: "B2",
      },
      {
        singular: "antenna",
        plural: "antennas",
        notes: "American preference",
        difficulty: "B2",
      },
    ],
    technical: [
      {
        singular: "matrix",
        plural: "matrices",
        notes: "Mathematics/computer science",
        difficulty: "C1",
      },
      {
        singular: "vertex",
        plural: "vertices",
        notes: "Geometry/mathematics",
        difficulty: "C1",
      },
      {
        singular: "locus",
        plural: "loci",
        notes: "Mathematics/genetics",
        difficulty: "C1",
      },
    ],
    medical: [
      {
        singular: "vertebra",
        plural: "vertebrae",
        notes: "Anatomy",
        difficulty: "C1",
      },
      {
        singular: "bacterium",
        plural: "bacteria",
        notes: "Microbiology",
        difficulty: "C1",
      },
      {
        singular: "fungus",
        plural: "fungi",
        notes: "Medical/biological",
        difficulty: "C1",
      },
    ],
    scientific: [
      {
        singular: "datum",
        plural: "data",
        notes: "Research/statistics",
        difficulty: "B2",
      },
      {
        singular: "medium",
        plural: "media",
        notes: "Scientific/technical",
        difficulty: "B2",
      },
      {
        singular: "stratum",
        plural: "strata",
        notes: "Geology/archaeology",
        difficulty: "C1",
      },
    ],
  },

  // Etymology and historical development
  etymology: {
    origin:
      "Irregular plurals derive from various historical sources including Old English strong noun declensions, Germanic umlaut processes, Latin scholarly borrowings, Greek technical terminology, and Norman French influences",
    development:
      "These forms developed through phonological changes, morphological restructuring, and cultural borrowing over 1,500 years of English language evolution, preserving ancient patterns due to high frequency of use",
    modernUsage:
      "Contemporary English maintains these irregular forms due to their entrenchment in high-frequency vocabulary, though some show variation between classical and anglicized forms in different registers",
    historical_periods: {
      old_english: [
        "Strong noun declensions: mann/menn, fōt/fēt, mūs/mȳs",
        "Weak declension survivals: cild/cildru → child/children",
        "Umlaut processes: Germanic i-mutation effects",
        "Gender-based inflectional patterns",
      ],
      middle_english: [
        "Vowel system changes affecting irregular patterns",
        "Loss of grammatical gender simplifying some patterns",
        "French borrowings introducing new irregular patterns",
        "Dialect mixing creating variation",
      ],
      early_modern: [
        "Renaissance Latin/Greek borrowings: alumni, criteria",
        "Printing standardization affecting form stability",
        "Scholarly language development",
        "Scientific terminology establishment",
      ],
      modern: [
        "Continued borrowing from classical languages",
        "Technical terminology standardization",
        "Global English variation development",
        "Digital age vocabulary adaptation",
      ],
    },
  },

  // Cross-linguistic comparisons
  crossLinguistic: {
    similarities: [
      "Germanic languages show similar umlaut patterns (German Mann/Männer, Fuß/Füße)",
      "Romance languages have Latin-derived irregular plurals (Italian uomo/uomini)",
      "Many languages preserve historical morphological patterns in high-frequency words",
      "Scientific terminology shows cross-linguistic consistency (Latin/Greek terms)",
    ],
    differences: [
      "English has fewer irregular plurals than German or Icelandic",
      "Romance languages have more systematic gender-based irregularities",
      "English uniquely combines Germanic, Latin, and Greek irregular patterns",
      "Some English irregularities (person/people) are unique among Germanic languages",
    ],
    learnerChallenges: {
      by_l1: {
        Spanish: [
          "Difficulty with Germanic umlaut patterns",
          "Confusion with gender-neutral forms",
        ],
        Chinese: [
          "Plural marking challenges",
          "Vowel discrimination difficulties",
        ],
        Arabic: [
          "Semitic plural pattern interference",
          "Vowel system differences",
        ],
        Japanese: ["No plural marking in L1", "Consonant cluster difficulties"],
        German: [
          "False friends with different patterns",
          "Overgeneralization of cognates",
        ],
        French: ["Gender assignment confusion", "Liaison pattern interference"],
      },
      universal_challenges: [
        "Memory load for irregular forms",
        "Pattern recognition difficulties",
        "Register sensitivity development",
        "Pronunciation accuracy",
        "Error monitoring and correction",
      ],
    },
  },

  // Comprehensive vocabulary lists by level
  vocabulary: {
    A1: [
      { singular: "child", plural: "children", difficulty: "A1" },
      { singular: "man", plural: "men", difficulty: "A1" },
      { singular: "woman", plural: "women", difficulty: "A1" },
      { singular: "foot", plural: "feet", difficulty: "A1" },
      { singular: "tooth", plural: "teeth", difficulty: "A1" },
      { singular: "person", plural: "people", difficulty: "A1" },
    ],
    A2: [
      { singular: "goose", plural: "geese", difficulty: "A2" },
      { singular: "mouse", plural: "mice", difficulty: "A2" },
      { singular: "sheep", plural: "sheep", difficulty: "A2" },
      { singular: "fish", plural: "fish", difficulty: "A2" },
      { singular: "deer", plural: "deer", difficulty: "A2" },
      { singular: "knife", plural: "knives", difficulty: "A2" },
      { singular: "life", plural: "lives", difficulty: "A2" },
      { singular: "wife", plural: "wives", difficulty: "A2" },
    ],
    B1: [
      { singular: "ox", plural: "oxen", difficulty: "B1" },
      { singular: "louse", plural: "lice", difficulty: "B1" },
      { singular: "aircraft", plural: "aircraft", difficulty: "B1" },
      { singular: "species", plural: "species", difficulty: "B1" },
      { singular: "die", plural: "dice", difficulty: "B1" },
      { singular: "penny", plural: "pence", difficulty: "B1" },
    ],
    B2: [
      { singular: "criterion", plural: "criteria", difficulty: "B2" },
      { singular: "phenomenon", plural: "phenomena", difficulty: "B2" },
      { singular: "analysis", plural: "analyses", difficulty: "B2" },
      { singular: "alumnus", plural: "alumni", difficulty: "B2" },
      { singular: "focus", plural: "foci", difficulty: "B2" },
      { singular: "cactus", plural: "cacti", difficulty: "B2" },
    ],
    C1: [
      { singular: "matrix", plural: "matrices", difficulty: "C1" },
      { singular: "vertex", plural: "vertices", difficulty: "C1" },
      { singular: "index", plural: "indices", difficulty: "C1" },
      { singular: "stimulus", plural: "stimuli", difficulty: "C1" },
      { singular: "nucleus", plural: "nuclei", difficulty: "C1" },
      { singular: "fungus", plural: "fungi", difficulty: "C1" },
    ],
    C2: [
      { singular: "corpus", plural: "corpora", difficulty: "C2" },
      { singular: "genus", plural: "genera", difficulty: "C2" },
      { singular: "opus", plural: "opera", difficulty: "C2" },
      { singular: "erratum", plural: "errata", difficulty: "C2" },
      { singular: "stratum", plural: "strata", difficulty: "C2" },
      { singular: "millennium", plural: "millennia", difficulty: "C2" },
    ],
    essential: [
      { singular: "child", plural: "children", difficulty: "A1" },
      { singular: "person", plural: "people", difficulty: "A1" },
      { singular: "man", plural: "men", difficulty: "A1" },
      { singular: "woman", plural: "women", difficulty: "A1" },
      { singular: "foot", plural: "feet", difficulty: "A1" },
      { singular: "tooth", plural: "teeth", difficulty: "A1" },
    ],
    academic: [
      { singular: "analysis", plural: "analyses", difficulty: "B2" },
      { singular: "criterion", plural: "criteria", difficulty: "B2" },
      { singular: "phenomenon", plural: "phenomena", difficulty: "B2" },
      { singular: "hypothesis", plural: "hypotheses", difficulty: "B2" },
      { singular: "thesis", plural: "theses", difficulty: "B2" },
    ],
    specialized: [
      { singular: "matrix", plural: "matrices", difficulty: "C1" },
      { singular: "corpus", plural: "corpora", difficulty: "C2" },
      { singular: "genus", plural: "genera", difficulty: "C2" },
      { singular: "viscus", plural: "viscera", difficulty: "C2" },
      { singular: "erratum", plural: "errata", difficulty: "C2" },
    ],
  },

  // Grammatical patterns and usage
  grammaticalPatterns: {
    article_usage: [
      "Definite articles with irregular plurals: the children, the men, the feet",
      "Indefinite articles impossible with plurals: *a children (incorrect)",
      "Zero article with generic reference: Children need love, People are kind",
      "Partitive usage: some of the children, many of the people",
    ],
    verb_agreement: [
      "Subject-verb agreement: The children are playing, The man is working",
      "Irregular plural subjects take plural verbs: The feet are cold, The teeth are white",
      "Collective meaning affects agreement: People are (not *is) coming",
      "Data as plural or mass noun: The data are/is conclusive",
    ],
    quantifiers: [
      "Count quantifiers with irregular plurals: many children, few people, several mice",
      "Number expressions: two men, three women, twenty sheep",
      "Approximation: dozens of people, hundreds of children",
      "Universal quantifiers: all people, every child (singular), each criterion",
    ],
    determiners: [
      "Demonstratives: these children, those people, this/that child (singular)",
      "Possessives: the children's toys, the men's room, people's choice",
      "Distributive: each child (singular), every person (singular)",
      "Interrogative: which children, whose feet, how many people",
    ],
    possessive_forms: [
      "Regular possessive with irregular plurals: children's, people's, men's, women's",
      "Pronunciation changes: women's /ˈwɪmɪnz/, children's /ˈtʃɪldrənz/",
      "Double marking avoided: *childrens' (incorrect)",
      "Compound possessives: the men's and women's teams",
    ],
  },

  // Usage contexts by proficiency level
  usageContexts: {
    A1: [
      "Basic family and personal identification contexts",
      "Simple descriptions of people and body parts",
      "Elementary daily routine and health discussions",
      "Basic quantity and counting situations",
    ],
    A2: [
      "Descriptive contexts about animals and nature",
      "Simple narrative and storytelling",
      "Basic shopping and everyday object descriptions",
      "Elementary social and cultural topics",
    ],
    B1: [
      "Extended narrative and explanatory contexts",
      "Basic academic and educational discussions",
      "Travel and cultural comparison contexts",
      "Simple professional and work-related topics",
    ],
    B2: [
      "Academic writing and research contexts",
      "Professional and business communications",
      "Media analysis and critical discussions",
      "Complex social and cultural topics",
    ],
    C1: [
      "Specialized and technical professional contexts",
      "Advanced academic research and writing",
      "Complex analytical and evaluative discussions",
      "Sophisticated cultural and literary contexts",
    ],
    C2: [
      "Highly specialized professional and academic contexts",
      "Advanced research and scholarly writing",
      "Complex literary and cultural analysis",
      "Nuanced register-appropriate communications",
    ],
  },

  // Error patterns and remediation
  errorPatterns: {
    A1: [
      "Systematic overgeneralization: adding -s to all irregular plurals",
      "Memory failures: forgetting irregular forms under cognitive load",
      "Pronunciation interference: L1 phonological patterns affecting production",
      "Pattern confusion: mixing regular and irregular plural rules",
    ],
    A2: [
      "Partial pattern learning: correct some but not all similar forms",
      "Context insensitivity: using wrong forms in inappropriate contexts",
      "Analogical errors: creating false patterns based on partial knowledge",
      "Register confusion: informal forms in formal contexts",
    ],
    B1: [
      "Academic vocabulary gaps: missing formal irregular plurals",
      "Compound word confusion: uncertainty about pluralization rules",
      "Technical terminology errors: incorrect specialized forms",
      "Cross-linguistic interference: L1 plural patterns affecting English",
    ],
    B2: [
      "Classical language confusion: mixing Latin and Greek patterns",
      "Register sensitivity failures: inappropriate form choices",
      "Etymology-based errors: incorrect historical pattern application",
      "Specialized context insensitivity: wrong forms in technical contexts",
    ],
    C1: [
      "Rare form uncertainty: hesitation with low-frequency irregular plurals",
      "Professional context inadequacy: inappropriate forms in specialized settings",
      "Hypercorrection: overusing classical forms inappropriately",
      "Subtle register violations: minor inappropriate form choices",
    ],
    C2: [
      "Archaic form misuse: inappropriate historical form usage",
      "Ultra-specialized terminology gaps: missing highly technical forms",
      "Cross-register contamination: mixing forms across contexts inappropriately",
      "Subtle pronunciation errors: incorrect stress or vowel patterns",
    ],
    intervention_strategies: [
      "Systematic pattern teaching with clear categorization",
      "Etymology-based learning for academic vocabulary",
      "Contextual exposure and register sensitivity training",
      "Error analysis and self-monitoring development",
      "Spaced repetition and memory enhancement techniques",
    ],
  },

  // Learning strategies and techniques
  learningStrategies: {
    A1: [
      "Visual mnemonics and memory association techniques",
      "Repetition drilling with high-frequency irregular plurals",
      "Picture-based learning and contextual association",
      "Simple categorization and pattern recognition exercises",
    ],
    A2: [
      "Pattern grouping and systematic categorization methods",
      "Contextual learning through stories and descriptions",
      "Error analysis and correction practice",
      "Basic etymology awareness for common patterns",
    ],
    B1: [
      "Etymology-based learning for academic vocabulary development",
      "Register awareness and context-appropriate usage training",
      "Complex pattern recognition and analogical reasoning",
      "Self-monitoring and error correction strategy development",
    ],
    B2: [
      "Classical language pattern recognition and application",
      "Advanced etymology and historical development understanding",
      "Specialized context sensitivity and register appropriateness",
      "Complex error analysis and intervention strategies",
    ],
    C1: [
      "Advanced pattern analysis and cross-linguistic comparison",
      "Specialized terminology acquisition and application",
      "Professional context sensitivity and register mastery",
      "Complex error monitoring and self-correction development",
    ],
    C2: [
      "Complete mastery through extensive exposure and practice",
      "Advanced register sensitivity and context appropriateness",
      "Historical and etymological depth of understanding",
      "Professional editing and proofreading skill development",
    ],
    mnemonic_devices: [
      "Visual associations: feet look like feet (shape similarity)",
      "Sound patterns: mice rhymes with nice, dice, spice",
      "Etymology connections: Latin -us becomes -i (alumnus/alumni)",
      "Conceptual linking: people as collective, person as individual",
      "Rhyme and rhythm: children playing, women working",
    ],
    pattern_recognition: [
      "Germanic umlaut grouping: man/men, foot/feet, tooth/teeth",
      "F-to-V consonant changes: knife/knives, life/lives, wife/wives",
      "No-change animal patterns: sheep, deer, fish, moose",
      "Latin classical patterns: -us/-i, -um/-a, -is/-es",
      "Greek academic patterns: -on/-a, -is/-es",
    ],
    contextual_learning: [
      "Authentic material exposure through reading and listening",
      "Task-based learning with real-world applications",
      "Register-specific practice in appropriate contexts",
      "Error correction through meaningful communication",
      "Corpus-based learning with frequency information",
    ],
  },

  // Assessment and evaluation
  assessment: {
    recognition_tasks: [
      "Multiple choice identification of correct irregular plurals",
      "Matching exercises pairing singular and plural forms",
      "Error detection in texts with incorrect irregular plurals",
      "Audio recognition of correct pronunciation patterns",
    ],
    production_tasks: [
      "Sentence completion with appropriate irregular plural forms",
      "Paragraph writing incorporating specified irregular plurals",
      "Oral production exercises with irregular plural usage",
      "Register-appropriate writing tasks requiring correct forms",
    ],
    correction_tasks: [
      "Error correction exercises with marked incorrect forms",
      "Proofreading tasks identifying and correcting irregular plural errors",
      "Peer editing activities focusing on irregular plural accuracy",
      "Self-monitoring exercises with error identification training",
    ],
    contextual_tasks: [
      "Reading comprehension with irregular plural focus",
      "Listening comprehension requiring irregular plural recognition",
      "Academic writing tasks requiring appropriate register usage",
      "Professional communication scenarios with specialized terminology",
    ],
    by_level: {
      A1: ["Basic recognition and simple production tasks"],
      A2: ["Pattern recognition and contextual application exercises"],
      B1: ["Complex production and register awareness tasks"],
      B2: ["Academic writing and specialized terminology assessment"],
      C1: ["Professional context and advanced register evaluation"],
      C2: ["Mastery assessment across all contexts and registers"],
    },
  },

  // Frequency and corpus data
  frequency_data: {
    high_frequency: [
      { singular: "child", plural: "children", difficulty: "A1" },
      { singular: "person", plural: "people", difficulty: "A1" },
      { singular: "man", plural: "men", difficulty: "A1" },
      { singular: "woman", plural: "women", difficulty: "A1" },
      { singular: "foot", plural: "feet", difficulty: "A1" },
    ],
    medium_frequency: [
      { singular: "mouse", plural: "mice", difficulty: "A2" },
      { singular: "goose", plural: "geese", difficulty: "A2" },
      { singular: "knife", plural: "knives", difficulty: "A2" },
      { singular: "life", plural: "lives", difficulty: "A2" },
    ],
    low_frequency: [
      { singular: "ox", plural: "oxen", difficulty: "B1" },
      { singular: "louse", plural: "lice", difficulty: "B1" },
      { singular: "corpus", plural: "corpora", difficulty: "C2" },
    ],
    academic_frequency: [
      { singular: "analysis", plural: "analyses", difficulty: "B2" },
      { singular: "criterion", plural: "criteria", difficulty: "B2" },
      { singular: "phenomenon", plural: "phenomena", difficulty: "B2" },
      { singular: "hypothesis", plural: "hypotheses", difficulty: "B2" },
    ],
    spoken_frequency: [
      { singular: "child", plural: "children", difficulty: "A1" },
      { singular: "person", plural: "people", difficulty: "A1" },
      { singular: "foot", plural: "feet", difficulty: "A1" },
      { singular: "tooth", plural: "teeth", difficulty: "A1" },
    ],
    written_frequency: [
      { singular: "analysis", plural: "analyses", difficulty: "B2" },
      { singular: "data", plural: "data", difficulty: "B2" },
      { singular: "criterion", plural: "criteria", difficulty: "B2" },
      { singular: "phenomenon", plural: "phenomena", difficulty: "B2" },
    ],
  },

  // Additional pedagogical notes
  notes: [
    "Irregular plurals represent approximately 3-5% of English nouns but include many high-frequency vocabulary items essential for effective communication",
    "Latin and Greek words often follow classical plural patterns in academic and scientific contexts, while everyday contexts may use anglicized forms",
    "Some words have both regular and irregular plural forms, with usage depending on context, register, and regional variation",
    "Historical development explains most irregular patterns: Germanic umlaut, Old English declensions, and classical language borrowings",
    "Memory strategies work best when combined with etymology awareness and systematic pattern recognition",
    "Context determines appropriate plural form choice, especially for words with dual forms (indices vs. indexes)",
    "Pronunciation accuracy is crucial for effective communication, particularly for vowel changes and stress patterns",
    "Error monitoring and self-correction skills develop through extensive exposure and focused practice",
    "Register sensitivity becomes increasingly important at higher proficiency levels for academic and professional communication",
    "Cross-linguistic awareness helps predict and prevent interference errors from learners' first languages",
  ],

  teachingTips: [
    "Introduce irregular plurals gradually, starting with highest frequency items and basic patterns",
    "Use visual mnemonics and memory associations to help students remember irregular forms",
    "Group irregular plurals by pattern (umlaut, f→v changes, no change) for systematic learning",
    "Provide extensive contextual exposure through authentic materials and meaningful communication",
    "Emphasize register awareness and context-appropriate form selection for advanced learners",
    "Use etymology explanations to help students understand and remember academic irregular plurals",
    "Practice pronunciation explicitly, particularly for vowel changes and stress patterns",
    "Develop error monitoring skills through guided self-correction and peer editing activities",
    "Provide regular recycling and spaced repetition to ensure long-term retention",
    "Use corpus data to show frequency and authentic usage patterns in different contexts",
  ],

  learnerDifficulties: [
    "Memory load: irregular plurals must be memorized individually rather than following productive rules",
    "Pattern interference: overgeneralization of regular plural rules to irregular forms",
    "Register sensitivity: difficulty choosing appropriate forms for different contexts",
    "Pronunciation challenges: vowel changes and stress patterns difficult for many learners",
    "Cross-linguistic interference: L1 plural patterns affecting English irregular plural acquisition",
    "Academic vocabulary gaps: missing knowledge of Latin/Greek derived irregular plurals",
    "Error fossilization: persistent incorrect forms resistant to correction",
    "Context insensitivity: using inappropriate forms in specialized or formal contexts",
    "Frequency effects: low-frequency irregular plurals more difficult to acquire and retain",
    "Phonological complexity: Germanic umlaut patterns unfamiliar to many language backgrounds",
  ],

  cognitiveLoad: {
    by_level: {
      A1: "High cognitive load due to memory demands and interference with regular plural rules",
      A2: "Moderate cognitive load as basic patterns become familiar and automatic",
      B1: "Variable cognitive load depending on vocabulary range and context complexity",
      B2: "High cognitive load for academic vocabulary and register-appropriate selections",
      C1: "Moderate cognitive load for familiar forms, high for specialized terminology",
      C2: "Low cognitive load for most forms, occasional challenges with rare or archaic terms",
    },
    processing_strategies: [
      "Automatic retrieval for high-frequency irregular plurals through extensive practice",
      "Pattern-based processing for grouped irregular forms with similar characteristics",
      "Etymology-based analysis for academic and technical irregular plural recognition",
      "Context-sensitive selection based on register and situational appropriateness",
      "Error monitoring and self-correction through metalinguistic awareness development",
    ],
  },
};
