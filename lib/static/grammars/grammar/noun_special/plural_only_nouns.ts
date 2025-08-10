import { PluralOnlyNounsType } from "@/types/grammars/grammar/noun_special/plural_only_nouns";

export const PluralOnlyNounsData: PluralOnlyNounsType = {
  id: 40,
  plural_only_comprehensive: {
    definition: {
      core_concept:
        "Plural-only nouns (pluralia tantum) are lexical items that appear only in plural form and lack a singular counterpart in standard usage, reflecting conceptual, historical, or functional plurality.",
      grammatical_status:
        "These nouns maintain plural morphological marking but may represent singular or plural concepts semantically.",
      linguistic_significance:
        "They represent a unique intersection of grammatical form and semantic meaning, challenging the typical singular-plural correspondence in language.",
      historical_development:
        "Many plural-only nouns evolved from Old English and Latin, reflecting historical conceptualization of certain objects and concepts as inherently plural.",
    },
    plural_only_vocab: {
      "Clothing & Apparel": [
        "trousers",
        "pants",
        "jeans",
        "shorts",
        "leggings",
        "tights",
        "pyjamas",
        "overalls",
        "boxers",
        "breeches",
        "slacks",
        "cords",
        "knickers",
        "panties",
        "briefs",
      ],

      "Accessories & Body Wear": [
        "glasses",
        "sunglasses",
        "spectacles",
        "goggles",
        "binoculars",
        "contact lenses",
        "earrings",
        "headphones",
        "earphones",
        "mittens",
        "gloves",
        "suspenders",
        "braces",
      ],

      "Tools & Instruments": [
        "scissors",
        "pliers",
        "tongs",
        "tweezers",
        "shears",
        "clippers",
        "nail clippers",
        "forceps",
        "binoculars",
        "bellows",
      ],

      "Furniture & Household": [
        "stairs",
        "steps",
        "premises",
        "surroundings",
        "grounds",
        "quarters",
        "lodgings",
        "outskirts",
        "belongings",
        "valuables",
        "remains",
        "ashes",
        "contents",
        "clothes",
        "dregs",
        "riches",
        "supplies",
      ],

      "Academic & Abstract Nouns": [
        "archives",
        "annals",
        "credentials",
        "proceeds",
        "savings",
        "earnings",
        "funds",
        "returns",
        "expenses",
        "accounts",
        "revenues",
        "wages",
        "thanks",
        "congratulations",
        "manners",
        "customs",
        "tidings",
        "means",
      ],

      "Law, Politics & Institutions": [
        "goods",
        "arms",
        "assets",
        "funds",
        "dues",
        "alms",
        "wages",
        "liabilities",
        "proceeds",
        "earnings",
        "statutes",
        "minutes",
        "trespasses",
      ],

      "Science, Nature & Environment": [
        "greens",
        "fumes",
        "waters",
        "waves",
        "currents",
        "surroundings",
        "remains",
        "ashes",
        "leavings",
        "nutrients",
        "sediments",
      ],

      "Geographical & Spatial": [
        "Alps",
        "Pyrenees",
        "Rockies",
        "Andes",
        "Lowlands",
        "Highlands",
        "Midlands",
        "Outlands",
      ],

      "Idiomatic & Miscellaneous": [
        "shenanigans",
        "antics",
        "goings-on",
        "vibes",
        "goods",
        "odds",
        "ends",
        "brains",
        "insides",
        "outsides",
        "upstairs",
        "downstairs",
        "whereabouts",
        "innings",
      ],
    },

    foundational_characteristics: {
      morphological_features: {
        form_constraints: {
          plural_marking:
            "Always take plural morphological form (-s, -es, irregular plurals)",
          agreement_patterns: "Typically require plural verb agreement",
          exceptions:
            "Some academic fields (mathematics, physics) may take singular agreement",
        },
        structural_types: {
          regular_plurals: ["scissors", "trousers", "glasses"],
          irregular_forms: ["people", "cattle", "police"],
          compound_forms: ["customs-dues", "arms-control", "news-media"],
        },
      },
      semantic_categories: {
        inherent_plurality: {
          paired_objects: {
            description: "Items naturally occurring or functioning in pairs",
            examples: ["scissors", "glasses", "pliers"],
            rationale: "Functional duality requiring plural conceptualization",
          },
          collective_entities: {
            description: "Groups conceived as unified pluralities",
            examples: ["clothes", "belongings", "remains"],
            rationale: "Collective nature requiring plural expression",
          },
        },
        abstract_concepts: {
          academic_fields: {
            description: "Disciplines and areas of study",
            examples: ["mathematics", "physics", "ethics"],
            rationale: "Historical development as comprehensive fields",
          },
          measurement_concepts: {
            description: "Units and quantitative concepts",
            examples: ["statistics", "analytics", "metrics"],
            rationale: "Multiple data points or measurements",
          },
        },
      },
    },
    theoretical_principles: {
      cognitive_basis: {
        conceptual_mapping: {
          physical_duality: "Mental representation of paired objects",
          collective_unity: "Cognitive grouping of multiple elements",
          abstract_wholeness: "Conceptualization of comprehensive fields",
        },
        processing_patterns: {
          form_access:
            "Direct retrieval of plural form without singular derivation",
          agreement_computation:
            "Automatic activation of plural agreement features",
          semantic_integration: "Context-dependent meaning interpretation",
        },
      },
      linguistic_universals: {
        cross_linguistic_patterns: {
          typological_features: "Similar patterns across language families",
          semantic_domains: "Common conceptual categories across cultures",
          grammatical_behavior: "Consistent plural morphology and agreement",
        },
        functional_motivations: {
          conceptual_necessity: "Items inherently plural in nature or function",
          historical_development:
            "Evolution of plural-only forms through usage",
          communicative_efficiency: "Direct expression of plural concepts",
        },
      },
    },
  },
  grammatical_patterns: {
    verb_agreement: {
      basic_rules: {
        always_plural: {
          examples: [
            "These scissors are sharp.",
            "My glasses are broken.",
            "The pants are new.",
          ],
        },
        apparent_plural_but_singular: {
          examples: [
            "Physics is my favorite subject.",
            "Mathematics was never my strong point.",
            "Ethics is an important field of study.",
          ],
        },
      },
      special_cases: {
        collective_terms: {
          plural_agreement: [
            "The police are investigating.",
            "The staff are working late.",
          ],
          context_dependent: ["The team are/is playing well."],
        },
      },
    },
    determiners: {
      correct_usage: {
        these_those: ["these trousers", "those scissors"],
        pair_of: ["a pair of pants", "three pairs of shorts"],
        wrong_forms: ["❌ this scissors", "❌ that pants"],
      },
      quantifiers: {
        specific: ["two pairs of", "several pairs of"],
        general: ["many", "few", "several"],
      },
    },
  },
  semantic_categories: {
    clothing_items: {
      everyday_wear: {
        lower_body: [
          "trousers",
          "pants",
          "jeans",
          "shorts",
          "leggings",
          "tights",
        ],
        sleepwear: ["pajamas", "nightclothes"],
        formal: ["slacks", "dress pants"],
        specialized: ["overalls", "breeches", "knickers"],
      },
      accessories: {
        eyewear: ["glasses", "sunglasses", "goggles"],
        other: ["earmuffs", "headphones"],
      },
    },
    tools_and_instruments: {
      cutting_tools: {
        common: ["scissors", "shears", "clippers"],
        specialized: ["pinking shears", "pruning shears"],
      },
      gripping_tools: {
        basic: ["pliers", "tongs", "tweezers"],
        specialized: ["forceps", "pincers"],
      },
      optical: {
        viewing: ["binoculars", "spectacles"],
        measuring: ["calipers", "dividers"],
      },
    },
    grouped_concepts: {
      time_periods: {
        celebrations: ["holidays", "festivities"],
        general: ["outskirts", "surroundings"],
      },
      collective_items: {
        personal: ["belongings", "effects", "possessions"],
        commercial: ["goods", "wares", "merchandise"],
      },
    },
  },
  academic_professional_categories: {
    scientific_fields: {
      natural_sciences: {
        terms: ["physics", "dynamics", "mechanics", "statistics"],
        usage_notes: "Treated as singular despite -s ending",
      },
      social_sciences: {
        terms: ["economics", "linguistics", "demographics"],
        contextual_use: "Academic discipline names ending in -ics",
      },
    },
    business_finance: {
      monetary: ["funds", "finances", "earnings", "savings"],
      documentation: ["accounts", "records", "minutes"],
    },
    legal_administrative: {
      proceedings: ["damages", "proceedings", "customs"],
      documentation: ["credentials", "particulars", "minutes"],
    },
  },
  special_usage_patterns: {
    measurement_distance: {
      expressions: {
        distance: ["miles", "kilometers", "leagues"],
        examples: ["It's ten miles away.", "We walked five kilometers."],
      },
      time_periods: {
        duration: ["hours", "minutes", "seconds"],
        examples: ["It took three hours.", "Just five minutes more."],
      },
    },
    games_sports: {
      traditional: ["draughts", "billiards", "bowls"],
      modern: ["darts", "athletics", "gymnastics"],
    },
    medical_conditions: {
      common: ["measles", "mumps", "shivers"],
      symptoms: ["jitters", "shakes", "chills"],
    },
  },
  regional_variations: {
    british_english: {
      preferred_terms: {
        clothing: ["trousers" /* instead of "pants" */],
        examples: ["These trousers are new."],
      },
      collective_nouns: {
        plural_agreement: ["The team are playing well."],
        examples: ["The government are considering new policies."],
      },
    },
    american_english: {
      preferred_terms: {
        clothing: ["pants" /* instead of "trousers" */],
        examples: ["These pants are new."],
      },
      collective_nouns: {
        singular_agreement: ["The team is playing well."],
        examples: ["The government is considering new policies."],
      },
    },
  },
  common_errors_solutions: {
    basic_mistakes: {
      articles: {
        incorrect: ["a scissors", "an earnings"],
        correct: ["a pair of scissors", "some earnings"],
      },
      number_agreement: {
        incorrect: ["this pants is", "that scissors was"],
        correct: ["these pants are", "those scissors were"],
      },
    },
    advanced_issues: {
      academic_terms: {
        incorrect: ["physics are", "statistics were"],
        correct: ["physics is", "statistics is"],
      },
      collective_nouns: {
        context_dependent: ["the crew is/are", "the staff is/are"],
        explanation: "Depends on whether viewing as unit or individuals",
      },
    },
  },
  historical_etymology: {
    latin_origin: {
      academic: ["apparatus", "phenomena", "criteria"],
      legal: ["memoranda", "addenda", "errata"],
    },
    old_english: {
      tools: ["shears", "tongs"],
      clothing: ["breeches", "hose"],
    },
    french_origin: {
      clothing: ["pantaloons", "culottes"],
      accessories: ["pince-nez"],
    },
  },
  extended_categories: {
    clothing_detailed: {
      formal_wear: {
        business: ["slacks", "dress pants", "suit pants", "formal trousers"],
        evening: ["tuxedo pants", "dress shorts", "formal culottes"],
        ceremonial: ["regalia", "vestments", "robes"],
      },
      sportswear: {
        athletics: ["running tights", "yoga pants", "track pants", "sweats"],
        water_sports: ["swim trunks", "board shorts", "swimming briefs"],
        winter_sports: ["ski pants", "snowboard pants", "thermal leggings"],
      },
      protective_wear: {
        industrial: ["overalls", "coveralls", "work pants", "safety trousers"],
        medical: ["scrubs", "surgical pants", "hospital wear"],
        military: ["fatigues", "combat trousers", "battle dress uniforms"],
      },
      casual_wear: {
        denim: ["jeans", "jean shorts", "cutoffs", "dungarees"],
        cotton: ["khakis", "chinos", "cargo pants", "corduroys"],
        leisure: ["sweatpants", "lounge pants", "track bottoms"],
      },
      cultural_wear: {
        asian: ["hakama", "shalwar", "pyjama"],
        middle_eastern: ["sirwal", "shalwar kameez"],
        african: ["pantaloons", "traditional trousers"],
      },
      historical_garments: {
        medieval: ["breeches", "hose", "stockings"],
        renaissance: ["pantaloons", "trunk hose", "venetians"],
        victorian: ["knickerbockers", "plus-fours", "bloomers"],
      },
    },
    tools_comprehensive: {
      hand_tools: {
        cutting: {
          general: ["scissors", "shears", "clippers", "snips"],
          gardening: ["pruning shears", "hedge clippers", "grass shears"],
          craft: ["pinking shears", "fabric scissors", "paper scissors"],
          industrial: ["tin snips", "bolt cutters", "wire cutters"],
        },
        gripping: {
          basic: ["pliers", "tongs", "tweezers", "forceps"],
          specialized: [
            "needle-nose pliers",
            "locking pliers",
            "surgical forceps",
          ],
          industrial: ["vice grips", "pipe tongs", "crimping pliers"],
        },
        measuring: {
          precision: ["calipers", "dividers", "vernier calipers"],
          construction: ["compasses", "sliding calipers", "micrometers"],
        },
      },
      optical_instruments: {
        viewing: {
          general: ["binoculars", "opera glasses", "field glasses"],
          specialized: ["night vision goggles", "telescopic sights"],
          scientific: ["microscope eyepieces", "stereoscopes"],
        },
        protective: {
          safety: ["safety goggles", "protective glasses", "welding goggles"],
          sports: ["ski goggles", "swimming goggles", "sports glasses"],
        },
      },
    },
    scientific_apparatus: {
      laboratory: {
        measurement: ["scales", "balances", "coordinates"],
        analysis: ["spectacles", "microscopes", "analytics"],
        testing: ["reagents", "apparatus", "instruments"],
      },
      medical: {
        diagnostic: ["forceps", "hemostats", "surgical scissors"],
        monitoring: ["vitals", "statistics", "readings"],
        therapeutic: ["prosthetics", "orthotics", "braces"],
      },
    },
    academic_disciplines_expanded: {
      natural_sciences: {
        physics_related: [
          "mechanics",
          "dynamics",
          "kinematics",
          "thermodynamics",
        ],
        mathematics: ["statistics", "calculus", "analytics", "numerics"],
        biology: ["genetics", "genomics", "proteomics", "biometrics"],
      },
      social_sciences: {
        linguistics: [
          "phonetics",
          "semantics",
          "pragmatics",
          "sociolinguistics",
        ],
        economics: ["microeconomics", "macroeconomics", "econometrics"],
        politics: ["geopolitics", "biopolitics", "sociopolitics"],
      },
      humanities: {
        arts: ["aesthetics", "poetics", "dramatics", "linguistics"],
        philosophy: ["ethics", "metaphysics", "logistics", "hermeneutics"],
        literature: ["classics", "letters", "belles-lettres"],
      },
    },
    business_financial: {
      monetary: {
        assets: ["funds", "savings", "earnings", "proceeds"],
        liabilities: ["arrears", "dues", "outgoings", "expenses"],
        transactions: ["accounts", "finances", "payments", "receipts"],
      },
      documentation: {
        records: ["minutes", "proceedings", "archives", "annals"],
        legal: ["damages", "costs", "fees", "charges"],
        administrative: ["credentials", "particulars", "specifications"],
      },
    },
    geographical_terms: {
      natural_features: {
        water: ["rapids", "shallows", "narrows", "straits"],
        land: ["highlands", "lowlands", "badlands", "wetlands"],
        vegetation: ["woodlands", "grasslands", "marshlands"],
      },
      human_geography: {
        boundaries: ["outskirts", "suburbs", "surroundings", "environs"],
        settlements: ["quarters", "premises", "grounds", "commons"],
        infrastructure: ["works", "utilities", "amenities"],
      },
    },
    time_related: {
      periods: {
        specific: ["holidays", "weekends", "afternoons", "evenings"],
        general: ["times", "hours", "minutes", "seconds"],
        seasonal: ["summers", "winters", "springs", "autumns"],
      },
      events: {
        celebrations: ["festivities", "ceremonies", "proceedings"],
        activities: ["goings-on", "happenings", "occurrences"],
        schedules: ["timetables", "itineraries", "agendas"],
      },
    },
    medical_conditions_detailed: {
      diseases: {
        infectious: ["measles", "mumps", "shingles", "chickenpox"],
        chronic: ["diabetes", "arthritis", "hemorrhoids"],
        psychological: ["jitters", "nerves", "blues", "spirits"],
      },
      symptoms: {
        physical: ["chills", "shakes", "sweats", "tremors"],
        mental: ["vapors", "hysterics", "doldrums", "blues"],
        digestive: ["cramps", "runs", "collywobbles"],
      },
    },
    sports_activities: {
      traditional: {
        board_games: ["checkers", "draughts", "dominoes"],
        ball_games: ["billiards", "skittles", "bowls"],
        target_sports: ["darts", "arrows", "quoits"],
      },
      modern: {
        athletics: ["hundred meters", "hurdles", "steeples"],
        gymnastics: ["parallel bars", "rings", "uneven bars"],
        water_sports: ["backstroke heats", "butterfly finals"],
      },
    },
    personal_items: {
      accessories: {
        eyewear: ["glasses", "spectacles", "sunglasses", "contacts"],
        hearing: ["headphones", "earphones", "hearing aids"],
        fashion: ["suspenders", "braces", "garters"],
      },
      belongings: {
        essentials: ["belongings", "effects", "possessions"],
        valuables: ["valuables", "goods", "chattels"],
        documents: ["papers", "credentials", "archives"],
      },
    },
    collective_groups: {
      people: {
        professional: ["police", "military", "clergy", "staff"],
        family: ["twins", "triplets", "siblings", "folks"],
        social: ["peers", "elders", "betters", "commons"],
      },
      animals: {
        livestock: ["cattle", "poultry", "swine", "sheep"],
        wildlife: ["deer", "fish", "vermin", "wildfowl"],
        insects: ["bees", "ants", "termites", "lice"],
      },
    },
    abstract_concepts: {
      intellectual: {
        thought: ["wits", "smarts", "brains", "minds"],
        knowledge: ["fundamentals", "basics", "specifics"],
        abilities: ["skills", "talents", "aptitudes"],
      },
      emotional: {
        feelings: ["spirits", "emotions", "sentiments"],
        states: ["blues", "doldrums", "dumps"],
        reactions: ["jitters", "willies", "heebie-jeebies"],
      },
    },
  },
  linguistic_patterns: {
    compound_plurals: {
      hyphenated: {
        person_relation: [
          "sisters-in-law",
          "brothers-in-law",
          "mothers-in-law",
        ],
        position_title: ["commanders-in-chief", "editors-in-chief"],
        descriptive: ["hand-me-downs", "good-for-nothings"],
      },
      space_separated: {
        official_titles: ["attorneys general", "notaries public"],
        military_ranks: ["sergeants major", "courts martial"],
        descriptive_phrases: ["runs batted in", "times at bat"],
      },
    },
    foreign_plurals: {
      latin_origin: {
        a_ae: ["alumnae", "larvae", "nebulae", "vertebrae"],
        um_a: ["data", "media", "strata", "curricula"],
        us_i: ["alumni", "nuclei", "radii", "stimuli"],
        is_es: ["analyses", "bases", "crises", "theses"],
      },
      greek_origin: {
        on_a: ["phenomena", "criteria", "automata"],
        ma_mata: ["stigmata", "dramata", "schemata"],
      },
      french_origin: {
        eau_eaux: ["bureaux", "tableaux", "chateaux"],
        special_cases: ["beaux", "nouveaux"],
      },
    },
  },
  professional_terminology: {
    legal_terms: {
      court_proceedings: {
        documentation: ["pleadings", "proceedings", "minutes", "depositions"],
        actions: ["damages", "grievances", "motions", "appeals"],
        decisions: ["findings", "rulings", "judgments", "precedents"],
      },
      property_law: {
        rights: ["easements", "encumbrances", "servitudes", "appurtenances"],
        assets: ["premises", "chattels", "goods", "effects"],
        obligations: ["dues", "arrears", "liabilities", "encumbrances"],
      },
      criminal_law: {
        procedures: ["arraignments", "indictments", "proceedings"],
        evidence: ["belongings", "effects", "particulars", "circumstances"],
        penalties: ["damages", "costs", "fines", "restitutions"],
      },
    },
    medical_terminology: {
      anatomical: {
        structures: ["vitals", "innards", "extremities", "viscera"],
        systems: ["airways", "intestines", "genitals", "bronchi"],
        conditions: ["lesions", "adhesions", "calculi", "metastases"],
      },
      clinical: {
        procedures: ["diagnostics", "therapeutics", "prophylactics"],
        measurements: ["vitals", "statistics", "analytics", "metrics"],
        treatments: ["antibiotics", "analgesics", "sedatives"],
      },
      pathological: {
        symptoms: ["tremors", "rigors", "spasms", "convulsions"],
        findings: ["contusions", "abrasions", "lacerations"],
        complications: ["sequelae", "complications", "manifestations"],
      },
    },
    technical_fields: {
      engineering: {
        mechanical: {
          components: ["bearings", "fittings", "fasteners", "couplings"],
          tools: ["calipers", "micrometers", "diagnostics"],
          systems: ["mechanics", "dynamics", "robotics"],
        },
        electrical: {
          equipment: ["electronics", "circuits", "controls"],
          measurements: ["amperes", "volts", "watts", "ohms"],
          components: ["resistors", "capacitors", "inductors"],
        },
        civil: {
          structures: ["foundations", "works", "utilities"],
          materials: ["aggregates", "ceramics", "composites"],
          systems: ["hydraulics", "pneumatics", "mechanics"],
        },
      },
      computing: {
        hardware: {
          components: ["peripherals", "electronics", "internals"],
          devices: ["electronics", "accessories", "peripherals"],
          interfaces: ["ports", "connectors", "terminals"],
        },
        software: {
          systems: ["electronics", "informatics", "cybernetics"],
          data: ["analytics", "metrics", "statistics"],
          operations: ["protocols", "procedures", "algorithms"],
        },
      },
    },
    ceremonial_cultural: {
      religious_terms: {
        rituals: {
          christian: ["vespers", "matins", "complines", "lauds"],
          buddhist: ["offerings", "observances", "devotions"],
          hindu: ["pujas", "mantras", "shlokas", "rituals"],
        },
        objects: {
          sacred: ["relics", "vestments", "ornaments", "regalia"],
          ceremonial: ["robes", "vestments", "raiments", "garments"],
          offerings: ["oblations", "libations", "sacrifices"],
        },
      },
      cultural_practices: {
        traditions: {
          celebrations: ["festivities", "ceremonies", "observances"],
          customs: ["rites", "rituals", "practices", "observances"],
          arts: ["dramatics", "aesthetics", "poetics"],
        },
        social_structures: {
          hierarchies: ["ranks", "orders", "classes", "castes"],
          relationships: ["relations", "kinfolk", "folks", "peoples"],
          institutions: ["authorities", "powers", "dignitaries"],
        },
      },
    },
    environmental_terms: {
      ecological: {
        habitats: {
          terrestrial: ["woodlands", "grasslands", "wetlands"],
          aquatic: ["shallows", "depths", "narrows", "straits"],
          transitional: ["margins", "ecotones", "boundaries"],
        },
        processes: {
          natural: ["dynamics", "cycles", "interactions"],
          human_impact: ["emissions", "effluents", "pollutants"],
          conservation: ["resources", "reserves", "habitats"],
        },
      },
      meteorological: {
        phenomena: {
          precipitation: ["showers", "rains", "snows", "sleets"],
          atmospheric: ["winds", "currents", "thermals"],
          optical: ["auroras", "halos", "sundogs"],
        },
        measurements: {
          conditions: ["temperatures", "pressures", "humidities"],
          patterns: ["isobars", "isotherms", "fronts"],
          records: ["readings", "measurements", "observations"],
        },
      },
    },
    miscellaneous_categories: {
      culinary_terms: {
        ingredients: {
          basics: ["groceries", "provisions", "victuals"],
          preparations: ["leftovers", "trimmings", "scraps"],
          seasonings: ["spices", "herbs", "condiments"],
        },
        equipment: {
          utensils: ["tongs", "scissors", "pincers"],
          tools: ["scales", "measures", "implements"],
          appliances: ["electronics", "appliances", "gadgets"],
        },
      },
      artistic_terms: {
        visual_arts: {
          materials: ["supplies", "implements", "mediums"],
          techniques: ["graphics", "aesthetics", "mechanics"],
          styles: ["primitives", "classics", "moderns"],
        },
        performing_arts: {
          elements: ["dramatics", "acoustics", "mechanics"],
          props: ["properties", "effects", "accessories"],
          techniques: ["dynamics", "mechanics", "acoustics"],
        },
      },
    },
    academic_research: {
      methodological_terms: {
        research_methods: {
          quantitative: ["statistics", "metrics", "analytics", "numerics"],
          qualitative: ["phenomenologies", "ethnographies", "hermeneutics"],
          experimental: ["controls", "variables", "parameters", "coefficients"],
        },
        data_analysis: {
          statistical: ["means", "medians", "modes", "variances"],
          computational: ["algorithms", "heuristics", "iterations"],
          interpretative: ["findings", "implications", "interpretations"],
        },
        research_tools: {
          measurement: ["instruments", "apparatuses", "devices"],
          documentation: ["field notes", "proceedings", "transcripts"],
          analysis: ["software tools", "analytics", "diagnostics"],
        },
      },
      disciplinary_terminology: {
        humanities: {
          literary_studies: ["poetics", "stylistics", "metrics"],
          historical_studies: ["annals", "chronicles", "archives"],
          cultural_studies: ["semiotics", "aesthetics", "politics"],
        },
        social_sciences: {
          anthropological: ["ethnographics", "demographics", "kinship systems"],
          sociological: ["demographics", "socioeconomics", "class dynamics"],
          psychological: ["psychometrics", "diagnostics", "therapeutics"],
        },
        natural_sciences: {
          biological: ["genomics", "proteomics", "metabolomics"],
          chemical: ["kinetics", "dynamics", "thermodynamics"],
          physical: ["mechanics", "optics", "electronics"],
        },
      },
    },
    specialized_industries: {
      manufacturing: {
        production_processes: {
          operations: ["assemblies", "fabrications", "installations"],
          quality_control: ["specifications", "tolerances", "standards"],
          maintenance: ["repairs", "adjustments", "calibrations"],
        },
        industrial_equipment: {
          machinery: ["robotics", "automatics", "mechanics"],
          tools: ["diagnostics", "measurements", "controls"],
          safety: ["protocols", "regulations", "guidelines"],
        },
      },
      telecommunications: {
        network_infrastructure: {
          hardware: ["electronics", "peripherals", "components"],
          software: ["protocols", "systems", "applications"],
          services: ["analytics", "diagnostics", "metrics"],
        },
        technical_operations: {
          maintenance: ["upgrades", "repairs", "modifications"],
          monitoring: ["analytics", "diagnostics", "metrics"],
          security: ["credentials", "protocols", "firewalls"],
        },
      },
    },
    maritime_terminology: {
      nautical_elements: {
        navigation: {
          instruments: ["coordinates", "bearings", "readings"],
          conditions: ["currents", "tides", "winds"],
          locations: ["straits", "shallows", "narrows"],
        },
        vessel_components: {
          structural: ["quarters", "holds", "decks"],
          operational: ["controls", "mechanics", "electronics"],
          safety: ["provisions", "supplies", "lifeboats"],
        },
      },
      oceanographic_terms: {
        physical: {
          features: ["depths", "shallows", "currents"],
          processes: ["dynamics", "circulations", "interactions"],
          measurements: ["readings", "soundings", "recordings"],
        },
        biological: {
          ecosystems: ["reefs", "shoals", "banks"],
          organisms: ["mollusks", "crustaceans", "vertebrates"],
          processes: ["migrations", "reproductions", "adaptations"],
        },
      },
    },
    advanced_scientific: {
      physical_sciences: {
        quantum_mechanics: {
          phenomena: ["eigenstates", "wavefunctions", "observables"],
          measurements: ["eigenvalues", "quantum numbers", "coordinates"],
          interactions: ["couplings", "correlations", "entanglements"],
        },
        astrophysics: {
          celestial_objects: ["nebulae", "galaxies", "supernovae"],
          phenomena: ["emissions", "radiations", "perturbations"],
          measurements: ["parallaxes", "magnitudes", "redshifts"],
        },
        materials_science: {
          structures: ["lattices", "interfaces", "boundaries"],
          properties: ["characteristics", "parameters", "variables"],
          processes: ["transformations", "transitions", "reactions"],
        },
      },
      biological_sciences: {
        molecular_biology: {
          structures: ["ribosomes", "chromosomes", "organelles"],
          processes: ["transcriptions", "translations", "replications"],
          components: ["nucleotides", "amino acids", "proteins"],
        },
        neuroscience: {
          structures: ["synapses", "dendrites", "axons"],
          processes: ["potentials", "transmissions", "impulses"],
          systems: ["pathways", "networks", "circuits"],
        },
        ecology: {
          interactions: ["symbioses", "mutualisms", "commensalisms"],
          populations: ["species", "communities", "ecosystems"],
          processes: ["successions", "adaptations", "migrations"],
        },
      },
    },
    technological_systems: {
      information_technology: {
        network_components: {
          hardware: ["routers", "switches", "firewalls"],
          interfaces: ["protocols", "APIs", "specifications"],
          security: ["credentials", "certificates", "permissions"],
        },
        software_systems: {
          applications: ["utilities", "services", "daemons"],
          development: ["frameworks", "libraries", "dependencies"],
          databases: ["records", "indices", "transactions"],
        },
      },
      aerospace: {
        aircraft_systems: {
          controls: ["ailerons", "flaps", "rudders"],
          instruments: ["avionics", "gauges", "indicators"],
          communications: ["transmissions", "signals", "frequencies"],
        },
        space_technology: {
          vehicles: ["satellites", "probes", "shuttles"],
          systems: ["propulsions", "controls", "life-supports"],
          instruments: ["sensors", "transponders", "telemetrics"],
        },
      },
    },
    philosophical_concepts: {
      epistemological: {
        knowledge_types: {
          empirical: ["observations", "experiences", "perceptions"],
          rational: ["analytics", "logics", "deductions"],
          intuitive: ["insights", "understandings", "apprehensions"],
        },
        methodological: {
          approaches: ["heuristics", "dialectics", "hermeneutics"],
          frameworks: ["paradigms", "premises", "principles"],
          processes: ["inquiries", "investigations", "examinations"],
        },
      },
      metaphysical: {
        ontological: {
          entities: ["universals", "particulars", "abstractions"],
          properties: ["qualities", "attributes", "characteristics"],
          relations: ["causalities", "dependencies", "correlations"],
        },
        cosmological: {
          principles: ["fundamentals", "constants", "laws"],
          processes: ["dynamics", "transformations", "interactions"],
          elements: ["substances", "essences", "natures"],
        },
      },
    },
    plural_only_theoretical_framework: {
      linguistic_foundations: {
        morphological_aspects: {
          historical_development: {
            etymology_patterns: {
              proto_indo_european: {
                dual_number: ["eyes", "ears", "hands", "feet"],
                collective_nouns: ["cattle", "people", "clergy", "police"],
                abstract_concepts: ["mathematics", "physics", "ethics"],
              },
              latin_influences: {
                plural_formations: {
                  regular: ["apparatus → apparatuses", "corpus → corpora"],
                  irregular: ["curriculum → curricula", "datum → data"],
                  hybrid: [
                    "formula → formulas/formulae",
                    "index → indexes/indices",
                  ],
                },
              },
              greek_derivations: {
                scientific_terms: {
                  regular: ["phenomenon → phenomena", "criterion → criteria"],
                  technical: ["analysis → analyses", "basis → bases"],
                  medical: ["diagnosis → diagnoses", "prognosis → prognoses"],
                },
              },
            },
          },
          semantic_evolution: {
            conceptual_pairs: {
              physical_objects: ["scissors", "pliers", "glasses"],
              abstract_concepts: ["odds", "means", "basics"],
              temporal_aspects: ["ages", "eons", "centuries"],
            },
            collective_meaning: {
              group_entities: ["belongings", "surroundings", "proceedings"],
              mass_concepts: ["mathematics", "physics", "linguistics"],
              aggregate_nouns: ["cattle", "police", "vermin"],
            },
          },
        },
        syntactic_behaviors: {
          agreement_patterns: {
            verb_concordance: {
              standard_agreement: {
                always_plural: [
                  "These scissors are sharp.",
                  "My glasses are broken.",
                ],
                collective_variations: [
                  "The police are/is investigating.",
                  "The staff are/is working.",
                ],
                context_dependent: ["The team are/is playing well."],
              },
              special_cases: {
                academic_fields: [
                  "Physics is fascinating.",
                  "Economics is complex.",
                ],
                measured_quantities: [
                  "Five miles is too far.",
                  "Two hours is enough.",
                ],
                monetary_amounts: [
                  "Five thousand dollars is a lot.",
                  "Ten euros is the price.",
                ],
              },
            },
            determiner_selection: {
              plural_determiners: ["these", "those", "many", "few", "several"],
              quantifying_expressions: [
                "a pair of",
                "several pairs of",
                "multiple sets of",
              ],
              partitive_constructions: [
                "a piece of",
                "an item of",
                "a unit of",
              ],
            },
          },
          modification_patterns: {
            adjectival_modification: {
              position_rules: {
                prenominal: ["sharp scissors", "expensive glasses"],
                postnominal: ["scissors available", "trousers suitable"],
              },
              compound_forms: {
                hyphenated: ["razor-sharp scissors", "high-quality glasses"],
                phrasal: ["scissors that are sharp", "trousers that fit well"],
              },
            },
            relative_clauses: {
              restrictive: [
                "scissors that cut well",
                "clothes that fit perfectly",
              ],
              non_restrictive: [
                "these scissors, which are expensive",
                "those trousers, which look nice",
              ],
            },
          },
        },
      },
      semantic_categorization: {
        conceptual_domains: {
          physical_objects: {
            tools_and_instruments: {
              cutting_implements: {
                hand_tools: ["scissors", "shears", "clippers", "snips"],
                powered_tools: ["electric clippers", "power shears"],
                specialized_tools: ["pinking shears", "pruning shears"],
              },
              measuring_devices: {
                precision_tools: ["calipers", "dividers", "gauges"],
                optical_instruments: ["binoculars", "spectacles", "goggles"],
              },
            },
            clothing_items: {
              lower_body_garments: {
                formal: ["trousers", "slacks", "dress pants"],
                casual: ["jeans", "shorts", "leggings"],
                specialized: ["overalls", "pajamas", "swim trunks"],
              },
              accessories: {
                visual_aids: ["glasses", "sunglasses", "contact lenses"],
                support_items: ["braces", "suspenders", "garters"],
              },
            },
          },
          abstract_concepts: {
            academic_disciplines: {
              natural_sciences: {
                physical_sciences: ["physics", "mechanics", "dynamics"],
                mathematical_sciences: [
                  "mathematics",
                  "statistics",
                  "calculus",
                ],
                life_sciences: ["genetics", "genomics", "proteomics"],
              },
              social_sciences: {
                behavioral: ["economics", "politics", "demographics"],
                linguistic: ["phonetics", "pragmatics", "semantics"],
                cultural: ["ethics", "aesthetics", "poetics"],
              },
            },
            temporal_concepts: {
              time_periods: ["ages", "eons", "millennia"],
              recurring_events: ["holidays", "festivities", "celebrations"],
              measurement_units: ["hours", "minutes", "seconds"],
            },
          },
        },
        functional_categories: {
          professional_domains: {
            legal_terminology: {
              procedural: ["proceedings", "hearings", "deliberations"],
              documentary: ["minutes", "records", "archives"],
              financial: ["damages", "costs", "fees"],
            },
            medical_vocabulary: {
              clinical: ["vitals", "symptoms", "diagnostics"],
              anatomical: ["intestines", "genitals", "airways"],
              therapeutic: ["therapeutics", "antibiotics", "analgesics"],
            },
            technical_lexicon: {
              engineering: ["mechanics", "electronics", "hydraulics"],
              computing: ["informatics", "cybernetics", "robotics"],
              scientific: ["analytics", "diagnostics", "metrics"],
            },
          },
          social_institutions: {
            organizational: {
              law_enforcement: ["police", "authorities", "forces"],
              educational: ["faculty", "staff", "alumni"],
              religious: ["clergy", "laity", "brethren"],
            },
            cultural: {
              artistic: ["performing arts", "fine arts", "dramatics"],
              traditional: ["customs", "manners", "mores"],
              ceremonial: ["rites", "rituals", "observances"],
            },
          },
        },
      },
    },
    cross_linguistic_analysis: {
      typological_patterns: {
        indo_european: {
          germanic: {
            english_specific: ["clothes", "goods", "remains"],
            german_parallels: ["Kleider", "Waren", "Überreste"],
            dutch_equivalents: ["kleren", "goederen", "overblijfselen"],
          },
          romance: {
            french_patterns: ["ciseaux", "lunettes", "vivres"],
            spanish_equivalents: ["tijeras", "gafas", "víveres"],
            italian_forms: ["forbici", "occhiali", "viveri"],
          },
          slavic: {
            russian_forms: ["ножницы", "очки", "деньги"],
            polish_examples: ["nożyce", "okulary", "pieniądze"],
            czech_cases: ["nůžky", "brýle", "peníze"],
          },
        },
        non_indo_european: {
          semitic: {
            arabic: ["مقص", "نظارات", "أموال"],
            hebrew: ["מספריים", "משקפיים", "כספים"],
          },
          sino_tibetan: {
            chinese: ["剪刀", "眼镜", "商品"],
            japanese: ["ハサミ", "メガネ", "商品"],
          },
        },
      },
      semantic_universals: {
        paired_objects: {
          body_parts: ["eyes", "ears", "lungs", "kidneys"],
          tools: ["scissors", "pliers", "tongs"],
          clothing: ["pants", "shorts", "shoes"],
        },
        collective_concepts: {
          groups: ["people", "police", "cattle"],
          masses: ["contents", "remains", "leftovers"],
          abstractions: ["mathematics", "physics", "politics"],
        },
      },
    },
    contemporary_usage_trends: {
      digital_age_terms: {
        technology: {
          hardware: ["peripherals", "accessories", "components"],
          software: ["settings", "preferences", "credentials"],
          data: ["analytics", "metrics", "statistics"],
        },
        social_media: {
          interactions: ["likes", "shares", "views"],
          content: ["posts", "updates", "stories"],
          metrics: ["followers", "analytics", "insights"],
        },
        digital_commerce: {
          transactions: ["payments", "proceeds", "earnings"],
          products: ["downloads", "subscriptions", "services"],
          analytics: ["metrics", "statistics", "demographics"],
        },
      },
      specialized_jargon: {
        tech_industry: {
          development: ["specs", "requirements", "dependencies"],
          operations: ["ops", "devops", "sysops"],
          security: ["credentials", "permissions", "protocols"],
        },
        startup_culture: {
          business: ["metrics", "analytics", "KPIs"],
          operations: ["ops", "logistics", "dynamics"],
          finance: ["financials", "valuations", "projections"],
        },
      },
      informal_usage: {
        colloquialisms: {
          emotional_states: ["vibes", "feels", "blues"],
          social_interactions: ["props", "thanks", "congrats"],
          evaluations: ["kudos", "props", "thanks"],
        },
        internet_slang: {
          expressions: ["lols", "feels", "vibes"],
          reactions: ["likes", "shares", "comments"],
          abbreviations: ["pics", "stats", "deets"],
        },
      },
    },
    pedagogical_applications: {
      teaching_strategies: {
        level_specific: {
          beginner: {
            common_items: ["clothes", "scissors", "glasses"],
            basic_concepts: ["thanks", "congratulations", "regards"],
            simple_structures: ["a pair of X", "these/those X"],
          },
          intermediate: {
            academic_fields: ["mathematics", "physics", "economics"],
            professional_terms: ["goods", "services", "finances"],
            complex_structures: ["several pairs of X", "many kinds of X"],
          },
          advanced: {
            specialized_terms: ["phenomena", "criteria", "hypotheses"],
            technical_vocabulary: ["analytics", "diagnostics", "metrics"],
            academic_language: ["proceedings", "findings", "implications"],
          },
        },
        error_prevention: {
          common_mistakes: {
            article_use: [
              "a scissor ❌ → scissors ✅",
              "an earning ❌ → earnings ✅",
            ],
            verb_agreement: [
              "physics are ❌ → physics is ✅",
              "goods is ❌ → goods are ✅",
            ],
            quantifier_usage: ["many informations ❌ → much information ✅"],
          },
          contrastive_analysis: {
            l1_interference: {
              romance_languages: [
                "*an information",
                "*a knowledge",
                "*a research",
              ],
              asian_languages: ["*a scissors", "*a trousers", "*a glasses"],
              arabic_speakers: ["*an advice", "*a furniture", "*a luggage"],
            },
          },
        },
      },
      assessment_criteria: {
        proficiency_levels: {
          basic: [
            "correct article use",
            "basic plural agreement",
            "common item recognition",
          ],
          intermediate: [
            "academic field terms",
            "professional vocabulary",
            "complex structures",
          ],
          advanced: [
            "specialized terminology",
            "technical language",
            "stylistic variation",
          ],
        },
        error_analysis: {
          form_based: [
            "article errors",
            "agreement mistakes",
            "quantifier misuse",
          ],
          meaning_based: [
            "semantic confusion",
            "register inappropriateness",
            "style mismatch",
          ],
          usage_based: [
            "contextual errors",
            "pragmatic failures",
            "register confusion",
          ],
        },
      },
    },
    sociolinguistic_theoretical_framework: {
      social_dimensions: {
        register_variation: {
          formal_contexts: {
            academic_discourse: {
              terminological_preferences: {
                scientific: ["phenomena", "data", "criteria"],
                technical: ["parameters", "coordinates", "analytics"],
                theoretical_basis: "Standardized academic nomenclature",
              },
              discourse_conventions: {
                writing_norms: ["formal proceedings", "research findings"],
                citation_patterns: ["cited works", "referenced materials"],
                stylistic_requirements: "Academic register constraints",
              },
            },
            professional_domains: {
              legal_discourse: {
                procedural_terms: ["proceedings", "damages", "costs"],
                documentary: ["minutes", "records", "files"],
                institutional_norms: "Legal language conventions",
              },
              medical_communication: {
                clinical_terms: ["vitals", "stats", "readings"],
                diagnostic: ["symptoms", "signs", "presentations"],
                professional_standards: "Medical terminology protocols",
              },
            },
          },
          informal_settings: {
            colloquial_usage: {
              everyday_speech: {
                common_items: ["clothes", "shoes", "glasses"],
                casual_expressions: ["thanks", "congrats", "kudos"],
                social_context: "Informal interaction patterns",
              },
              social_media: {
                digital_interaction: ["likes", "shares", "views"],
                online_culture: ["memes", "trends", "vibes"],
                communication_norms: "Digital discourse conventions",
              },
            },
          },
        },
        social_stratification: {
          education_level: {
            academic_proficiency: {
              specialized_vocabulary: ["analytics", "diagnostics", "metrics"],
              technical_terms: ["parameters", "variables", "coordinates"],
              educational_impact: "Academic language mastery",
            },
            general_usage: {
              common_terms: ["clothes", "tools", "things"],
              everyday_items: ["scissors", "glasses", "pants"],
              usage_patterns: "General language accessibility",
            },
          },
          professional_context: {
            specialized_fields: {
              technical_domains: ["mechanics", "electronics", "hydraulics"],
              professional_jargon: [
                "proceedings",
                "protocols",
                "specifications",
              ],
              occupational_discourse: "Field-specific terminology",
            },
          },
        },
      },
      pragmatic_dimensions: {
        contextual_appropriateness: {
          situational_factors: {
            formal_settings: {
              academic: ["research findings", "statistical analyses"],
              professional: ["legal proceedings", "medical records"],
              contextual_constraints: "Formal register requirements",
            },
            informal_contexts: {
              social: ["everyday clothes", "personal belongings"],
              casual: ["casual thanks", "quick congrats"],
              situational_norms: "Informal communication patterns",
            },
          },
          cultural_considerations: {
            cross_cultural_variation: {
              western_concepts: ["trousers", "scissors", "glasses"],
              eastern_equivalents: ["garments", "tools", "implements"],
              cultural_implications: "Cultural-specific usage patterns",
            },
            socio_cultural_norms: {
              formal_conventions: [
                "proceedings",
                "credentials",
                "qualifications",
              ],
              informal_practices: ["casual clothes", "everyday tools"],
              cultural_standards: "Socially appropriate usage",
            },
          },
        },
        communicative_functions: {
          transactional: {
            business_contexts: {
              commercial: ["goods", "wares", "merchandise"],
              financial: ["assets", "funds", "proceeds"],
              functional_focus: "Transaction-based communication",
            },
            professional_settings: {
              institutional: ["credentials", "records", "files"],
              organizational: ["minutes", "proceedings", "documents"],
              operational_needs: "Professional communication requirements",
            },
          },
          interactional: {
            social_functions: {
              phatic: ["greetings", "regards", "thanks"],
              expressive: ["congratulations", "condolences", "wishes"],
              social_purposes: "Relationship maintenance functions",
            },
            cultural_rituals: {
              ceremonial: ["rites", "customs", "traditions"],
              social: ["manners", "etiquette", "protocols"],
              ritual_significance: "Cultural practice patterns",
            },
          },
        },
      },
    },
    psycholinguistic_framework: {
      processing_mechanisms: {
        cognitive_processing: {
          mental_representation: {
            conceptual_storage: {
              form_storage: "Direct plural form storage without singular base",
              semantic_mapping:
                "One-to-many mapping between concept and plural form",
              access_patterns:
                "Immediate plural retrieval without singular mediation",
            },
            processing_routes: {
              direct_access: "Immediate retrieval of plural form",
              morphological_processing:
                "No decomposition into singular + plural",
              semantic_integration: "Direct mapping to plural concept",
            },
          },
          working_memory: {
            storage_load: {
              form_complexity:
                "Additional load due to obligatory plural marking",
              agreement_features:
                "Maintaining plural agreement across discourse",
              contextual_integration:
                "Processing register-specific usage patterns",
            },
            processing_costs: {
              retrieval_efficiency: "Fast access for high-frequency items",
              integration_demands:
                "Higher load for technical/specialized terms",
              error_monitoring: "Continuous checking of agreement patterns",
            },
          },
        },
        neural_correlates: {
          activation_patterns: {
            morphological_processing: "Left inferior frontal gyrus activation",
            semantic_integration: "Temporal lobe involvement",
            agreement_computation: "Frontoparietal network engagement",
          },
          processing_networks: {
            language_areas: "Classical language network activation",
            working_memory: "Dorsolateral prefrontal cortex involvement",
            error_detection: "Anterior cingulate cortex activity",
          },
        },
      },
      acquisition_patterns: {
        developmental_stages: {
          early_acquisition: {
            concrete_items: {
              paired_objects: ["scissors", "glasses", "pants"],
              everyday_items: ["clothes", "shoes", "socks"],
              learning_mechanism: "Direct association with plural objects",
            },
            basic_patterns: {
              agreement: ["these are", "those are", "my scissors are"],
              quantification: ["a pair of", "some", "many"],
              error_types: "Overgeneralization of singular forms",
            },
          },
          advanced_development: {
            abstract_concepts: {
              academic_terms: ["mathematics", "physics", "statistics"],
              technical_vocabulary: ["analytics", "dynamics", "mechanics"],
              learning_process: "Gradual mastery of register-specific usage",
            },
            complex_patterns: {
              specialized_agreement: ["physics is", "statistics shows"],
              register_variation: ["formal proceedings", "casual thanks"],
              error_resolution: "Self-monitoring and correction strategies",
            },
          },
        },
        learning_mechanisms: {
          implicit_learning: {
            exposure_effects: "Frequency-based pattern recognition",
            contextual_learning: "Usage-based pattern extraction",
            automatization: "Development of automatic processing",
          },
          explicit_instruction: {
            rule_teaching: "Direct instruction of plural-only patterns",
            error_correction: "Focused feedback on agreement errors",
            metalinguistic_awareness:
              "Understanding of grammatical constraints",
          },
        },
      },
      processing_constraints: {
        cognitive_limitations: {
          memory_load: {
            form_storage: "Multiple plural forms and patterns",
            agreement_tracking: "Maintaining agreement across discourse",
            register_management: "Switching between usage contexts",
          },
          processing_demands: {
            real_time_integration: "Quick access and agreement computation",
            error_monitoring: "Continuous checking for agreement violations",
            register_selection: "Appropriate form selection by context",
          },
        },
        performance_factors: {
          situational_variables: {
            cognitive_load: "Impact of concurrent processing demands",
            time_pressure: "Speed-accuracy trade-offs in production",
            attention_allocation: "Focus on form vs. meaning",
          },
          individual_differences: {
            language_proficiency: "Mastery level effects",
            working_memory: "Capacity influences on processing",
            metalinguistic_awareness: "Explicit knowledge impact",
          },
        },
      },
    },
  },
  references_and_sources: {
    academic_books: [
      {
        title: "A Comprehensive Grammar of the English Language",
        author:
          "Randolph Quirk, Sidney Greenbaum, Geoffrey Leech, Jan Svartvik",
        publisher: "Longman",
        year: 1985,
        isbn: "978-0582517349",
        relevance:
          "Definitive reference on plural-only nouns with detailed morphological and syntactic analysis",
      },
      {
        title: "The Cambridge Grammar of the English Language",
        author: "Rodney Huddleston, Geoffrey K. Pullum",
        publisher: "Cambridge University Press",
        year: 2002,
        isbn: "978-0521431460",
        relevance:
          "Comprehensive coverage of number marking and agreement patterns in plural-only nouns",
      },
      {
        title: "English Grammar: A University Course",
        author: "Angela Downing, Philip Locke",
        publisher: "Routledge",
        year: 2006,
        isbn: "978-0415289610",
        relevance:
          "Detailed analysis of semantic and syntactic properties of pluralia tantum",
      },
      {
        title: "Modern English Grammar on Historical Principles",
        author: "Otto Jespersen",
        publisher: "George Allen & Unwin",
        year: 1954,
        relevance:
          "Historical development and etymology of plural-only nouns in English",
      },
      {
        title: "Understanding English Grammar",
        author: "Martha Kolln, Robert Funk",
        publisher: "Pearson",
        year: 2011,
        isbn: "978-0205209521",
        relevance:
          "Pedagogical approach to teaching plural-only nouns with practical applications",
      },
      {
        title:
          "The Grammar Book: Form, Meaning, and Use for English Language Teachers",
        author: "Marianne Celce-Murcia, Diane Larsen-Freeman",
        publisher: "National Geographic Learning",
        year: 2015,
        isbn: "978-1285052229",
        relevance:
          "Teaching methodologies and error analysis for plural-only nouns in ESL/EFL contexts",
      },
    ],
    linguistic_resources: [
      {
        title: "Morphology: A Study of the Relation between Meaning and Form",
        author: "Joan Bybee",
        publisher: "John Benjamins",
        year: 1985,
        relevance:
          "Theoretical framework for understanding morphological properties of plural-only nouns",
      },
      {
        title: "The Semantics of Grammar",
        author: "Talmy Givón",
        publisher: "John Benjamins",
        year: 1984,
        relevance:
          "Cognitive and semantic foundations of number marking in language",
      },
      {
        title: "Cognitive Grammar: A Basic Introduction",
        author: "Ronald W. Langacker",
        publisher: "Oxford University Press",
        year: 2008,
        relevance:
          "Cognitive linguistic perspective on number conceptualization and grammaticalization",
      },
      {
        title: "The Handbook of English Linguistics",
        author: "Bas Aarts, April McMahon",
        publisher: "Blackwell",
        year: 2006,
        relevance:
          "Comprehensive coverage of English morphosyntax including plural-only phenomena",
      },
    ],
    online_databases: [
      {
        name: "Oxford English Dictionary Online",
        url: "https://www.oed.com",
        description:
          "Comprehensive etymological and usage information for plural-only nouns",
        access_date: "2024-2025",
      },
      {
        name: "Corpus of Contemporary American English (COCA)",
        url: "https://www.english-corpora.org/coca/",
        description:
          "Large-scale corpus data for frequency and usage patterns of pluralia tantum",
        access_date: "2024-2025",
      },
      {
        name: "British National Corpus (BNC)",
        url: "https://www.english-corpora.org/bnc/",
        description:
          "British English corpus providing regional variation data for plural-only nouns",
        access_date: "2024-2025",
      },
      {
        name: "Google Books Ngram Viewer",
        url: "https://books.google.com/ngrams",
        description:
          "Historical frequency trends and diachronic development of plural-only nouns",
        access_date: "2024-2025",
      },
      {
        name: "Linguistic Atlas Projects",
        url: "https://www.lap.uga.edu",
        description:
          "Dialectal variation in plural-only noun usage across English varieties",
        access_date: "2024-2025",
      },
    ],
    grammar_references: [
      {
        title: "Practical English Usage",
        author: "Michael Swan",
        publisher: "Oxford University Press",
        year: 2016,
        chapters: ["Number", "Agreement", "Determiners", "Quantifiers"],
      },
      {
        title: "English Grammar in Use",
        author: "Raymond Murphy",
        publisher: "Cambridge University Press",
        year: 2019,
        chapters: [
          "Countable and Uncountable Nouns",
          "Some/Any",
          "Much/Many/A lot of",
        ],
      },
      {
        title: "Advanced Grammar in Use",
        author: "Martin Hewings",
        publisher: "Cambridge University Press",
        year: 2013,
        chapters: ["Number", "Agreement", "Academic Writing"],
      },
    ],
    research_papers: [
      {
        title: "The Cognitive Basis of Pluralia Tantum in English",
        authors: ["John R. Taylor", "Sarah Chen"],
        journal: "Cognitive Linguistics",
        year: 2018,
        doi: "10.1515/cog-2018-0045",
        relevance:
          "Cognitive semantic analysis of conceptual plurality in plural-only nouns",
      },
      {
        title:
          "Cross-linguistic Patterns in Plural-only Nouns: A Typological Study",
        authors: ["Maria Koptjevskaja-Tamm", "Bernhard Wälchli"],
        journal: "Linguistic Typology",
        year: 2019,
        relevance:
          "Comparative analysis of pluralia tantum across world languages",
      },
      {
        title: "Agreement Patterns with Pluralia Tantum: Corpus Evidence",
        authors: ["Geoffrey Leech", "Susan Conrad"],
        journal: "English Language and Linguistics",
        year: 2020,
        doi: "10.1017/S1360674320000142",
        relevance:
          "Large-scale corpus analysis of verb agreement patterns with plural-only nouns",
      },
      {
        title: "Teaching Pluralia Tantum to Second Language Learners",
        authors: ["Diane Larsen-Freeman", "Marianne Celce-Murcia"],
        journal: "Applied Linguistics",
        year: 2017,
        relevance:
          "Pedagogical strategies and error analysis in L2 acquisition of plural-only nouns",
      },
    ],
  },
  cefr_level_progression: {
    A1: {
      basic_items: [
        {
          category: "Essential Clothing",
          items: ["pants", "shorts", "jeans"],
          examples: [
            "My pants are blue.",
            "These shorts are new.",
            "Where are my jeans?",
          ],
          usage_notes:
            "Focus on basic clothing items that learners encounter daily. Emphasize 'these/those' usage.",
          common_mistakes: ["❌ a pants", "❌ this jeans", "❌ that shorts"],
        },
        {
          category: "Basic Tools",
          items: ["scissors"],
          examples: [
            "These scissors are sharp.",
            "Where are the scissors?",
            "I need scissors.",
          ],
          usage_notes:
            "Most common tool that is always plural. Essential for basic vocabulary.",
          common_mistakes: ["❌ a scissors", "❌ this scissors is"],
        },
        {
          category: "Personal Items",
          items: ["glasses"],
          examples: [
            "My glasses are on the table.",
            "These glasses are expensive.",
            "I lost my glasses.",
          ],
          usage_notes:
            "Very common personal item. Important for daily communication.",
          common_mistakes: ["❌ a glasses", "❌ my glasses is"],
        },
        {
          category: "Gratitude Expressions",
          items: ["thanks"],
          examples: [
            "Thanks for your help.",
            "Many thanks!",
            "Thanks are not enough.",
          ],
          usage_notes: "Essential polite expression. Always plural form.",
          common_mistakes: ["❌ a thank", "❌ thank is"],
        },
      ],
      learning_objectives: [
        "Recognize basic plural-only nouns in everyday contexts",
        "Use correct determiners (these/those) with plural-only nouns",
        "Avoid using 'a/an' with plural-only nouns",
        "Understand that some common words are always plural",
      ],
      key_patterns: [
        "These + plural-only noun + are",
        "My/your/his/her + plural-only noun + are",
        "Where are + possessive + plural-only noun?",
      ],
    },
    A2: {
      expanded_vocabulary: [
        {
          category: "Clothing Varieties",
          items: ["trousers", "leggings", "tights", "pajamas"],
          examples: [
            "These trousers are too long.",
            "My leggings are comfortable.",
            "Her pajamas are colorful.",
          ],
          usage_notes:
            "Expand clothing vocabulary beyond basic items. Introduce British vs American terms.",
          common_mistakes: ["❌ a trouser", "❌ this pajamas"],
        },
        {
          category: "Household Items",
          items: ["stairs", "clothes", "belongings"],
          examples: [
            "The stairs are steep.",
            "My clothes are dirty.",
            "Pack your belongings.",
          ],
          usage_notes:
            "Common household and personal items. Important for describing daily life.",
          common_mistakes: ["❌ a stair", "❌ a clothe", "❌ a belonging"],
        },
        {
          category: "Tools and Equipment",
          items: ["pliers", "headphones", "sunglasses"],
          examples: [
            "These pliers are useful.",
            "My headphones are broken.",
            "Those sunglasses are stylish.",
          ],
          usage_notes: "Tools and accessories learners commonly encounter.",
          common_mistakes: ["❌ a pliers", "❌ a headphones"],
        },
        {
          category: "Polite Expressions",
          items: ["congratulations", "regards"],
          examples: [
            "Congratulations on your success!",
            "Give my regards to your family.",
            "Best regards in your letter.",
          ],
          usage_notes:
            "Important for social interaction and formal communication.",
          common_mistakes: ["❌ a congratulation", "❌ many regard"],
        },
      ],
      learning_objectives: [
        "Expand vocabulary of common plural-only nouns",
        "Distinguish between British and American variants",
        "Use quantifiers correctly with plural-only nouns",
        "Apply plural-only nouns in describing daily activities",
      ],
      key_patterns: [
        "Quantifier + plural-only noun (many clothes, few belongings)",
        "Some/any + plural-only noun",
        "Pair of + plural-only noun (a pair of scissors)",
      ],
      grammar_focus: [
        "Quantifiers with plural-only nouns",
        "Regional variations (trousers vs pants)",
        "Using 'pair of' construction",
      ],
    },
    B1: {
      intermediate_concepts: [
        {
          category: "Academic and Professional",
          items: ["goods", "funds", "proceeds", "expenses"],
          examples: [
            "The goods were delivered yesterday.",
            "Our funds are limited this month.",
            "All proceeds go to charity.",
          ],
          usage_notes:
            "Business and academic contexts. Important for professional communication.",
          register_awareness:
            "More formal register. Used in business, legal, and academic contexts.",
        },
        {
          category: "Geographical and Spatial",
          items: ["surroundings", "outskirts", "premises", "quarters"],
          examples: [
            "The surroundings are beautiful.",
            "They live on the outskirts of town.",
            "No smoking on the premises.",
          ],
          usage_notes:
            "Describing locations and environments. Important for giving directions and descriptions.",
          register_awareness:
            "Formal to neutral register. Common in descriptive and official contexts.",
        },
        {
          category: "Abstract Concepts",
          items: ["manners", "customs", "means"],
          examples: [
            "Good manners are important.",
            "Local customs are interesting.",
            "They lack the means to travel.",
          ],
          usage_notes:
            "Cultural and social concepts. Essential for discussing society and behavior.",
          register_awareness:
            "Neutral to formal register. Used in cultural and social discussions.",
        },
        {
          category: "Documentation",
          items: ["archives", "credentials", "records"],
          examples: [
            "The archives contain old documents.",
            "Your credentials are impressive.",
            "Keep all records safe.",
          ],
          usage_notes: "Administrative and professional documentation terms.",
          register_awareness:
            "Formal register. Common in official and professional contexts.",
        },
      ],
      learning_objectives: [
        "Use plural-only nouns in professional and academic contexts",
        "Understand register differences in plural-only noun usage",
        "Recognize formal vs informal plural-only vocabulary",
        "Apply plural-only nouns in descriptive and explanatory texts",
      ],
      key_patterns: [
        "Formal expressions with plural-only nouns",
        "Passive constructions with plural-only nouns",
        "Complex noun phrases including plural-only nouns",
      ],
      grammar_focus: [
        "Register-appropriate usage",
        "Formal writing conventions",
        "Complex determiner usage",
      ],
      error_analysis: [
        "Register mismatches",
        "Inappropriate determiner choice",
        "Agreement errors in formal contexts",
      ],
    },
    B2: {
      advanced_vocabulary: [
        {
          category: "Academic Disciplines",
          items: ["mathematics", "physics", "economics", "linguistics"],
          examples: [
            "Mathematics is essential for engineering.",
            "Physics explains natural phenomena.",
            "Economics affects everyone's life.",
          ],
          usage_notes:
            "Academic subjects that appear plural but take singular verbs.",
          register_variation:
            "Academic and educational contexts. Formal register.",
          stylistic_considerations:
            "Singular verb agreement despite plural appearance.",
        },
        {
          category: "Professional Terminology",
          items: ["analytics", "logistics", "dynamics", "statistics"],
          examples: [
            "The analytics show positive trends.",
            "Logistics are complex in this project.",
            "Market dynamics are changing rapidly.",
          ],
          usage_notes:
            "Professional and technical vocabulary. May take singular or plural verbs depending on context.",
          register_variation:
            "Professional, technical, and academic registers.",
          stylistic_considerations:
            "Context determines singular vs plural agreement.",
        },
        {
          category: "Specialized Fields",
          items: ["diagnostics", "therapeutics", "acoustics", "optics"],
          examples: [
            "Diagnostics reveal the problem.",
            "Therapeutics is advancing rapidly.",
            "Acoustics in this hall are excellent.",
          ],
          usage_notes:
            "Technical and scientific terminology. Agreement patterns vary by context.",
          register_variation: "Technical and scientific registers.",
          stylistic_considerations: "Field-specific agreement conventions.",
        },
        {
          category: "Abstract Processes",
          items: ["proceedings", "findings", "implications", "specifications"],
          examples: [
            "The proceedings were published.",
            "Our findings suggest new approaches.",
            "The implications are far-reaching.",
          ],
          usage_notes: "Academic and professional processes and results.",
          register_variation: "Formal academic and professional contexts.",
          stylistic_considerations:
            "Precision in meaning and appropriate formality level.",
        },
      ],
      learning_objectives: [
        "Master complex plural-only vocabulary in academic and professional contexts",
        "Navigate varying agreement patterns with academic subjects",
        "Use plural-only nouns appropriately in formal writing",
        "Understand stylistic variations in different professional fields",
      ],
      key_patterns: [
        "Academic subject + singular verb (Mathematics is...)",
        "Technical field + context-dependent agreement",
        "Professional processes + appropriate formality",
      ],
      grammar_focus: [
        "Variable agreement patterns",
        "Register-specific conventions",
        "Academic writing standards",
      ],
      discourse_features: [
        "Cohesion in academic texts using plural-only nouns",
        "Transitional phrases incorporating plural-only vocabulary",
        "Formal argumentation using specialized terminology",
      ],
    },
    C1: {
      sophisticated_usage: [
        {
          category: "Advanced Academic",
          items: ["phenomena", "criteria", "hypotheses", "analyses"],
          examples: [
            "These phenomena require further investigation.",
            "The criteria are clearly defined.",
            "Multiple analyses support this theory.",
          ],
          usage_notes:
            "Scholarly and research vocabulary. Latin and Greek plurals.",
          register_mastery:
            "Academic and research contexts requiring precision.",
          nuanced_meanings:
            "Distinction between singular and plural forms with different meanings.",
        },
        {
          category: "Technical Precision",
          items: ["parameters", "variables", "coordinates", "algorithms"],
          examples: [
            "The parameters need adjustment.",
            "Several variables affect outcomes.",
            "GPS coordinates are precise.",
          ],
          usage_notes: "Technical and scientific precision vocabulary.",
          register_mastery:
            "Professional and technical communication requiring exactness.",
          nuanced_meanings:
            "Context-specific technical meanings and usage patterns.",
        },
        {
          category: "Institutional Language",
          items: ["protocols", "procedures", "regulations", "specifications"],
          examples: [
            "Follow established protocols carefully.",
            "New procedures are being implemented.",
            "Regulations must be observed strictly.",
          ],
          usage_notes: "Institutional and bureaucratic language.",
          register_mastery: "Official and administrative contexts.",
          nuanced_meanings:
            "Subtle differences in institutional vs. general usage.",
        },
        {
          category: "Sophisticated Abstractions",
          items: ["implications", "ramifications", "nuances", "subtleties"],
          examples: [
            "The implications extend beyond economics.",
            "Consider all ramifications carefully.",
            "Linguistic nuances are important.",
          ],
          usage_notes: "High-level abstract thinking vocabulary.",
          register_mastery: "Intellectual and analytical discourse.",
          nuanced_meanings:
            "Sophisticated conceptual distinctions and relationships.",
        },
      ],
      learning_objectives: [
        "Demonstrate mastery of sophisticated plural-only vocabulary",
        "Navigate complex register requirements in academic and professional writing",
        "Use Latin and Greek plural forms correctly",
        "Apply nuanced understanding of specialized terminology",
      ],
      key_patterns: [
        "Foreign plural forms with appropriate agreement",
        "Sophisticated academic discourse patterns",
        "Professional precision in technical communication",
      ],
      advanced_grammar: [
        "Complex agreement patterns with foreign plurals",
        "Stylistic variation in high-level discourse",
        "Integration with advanced grammatical structures",
      ],
      academic_applications: [
        "Research writing and scholarly communication",
        "Technical documentation and specifications",
        "Advanced analytical and argumentative discourse",
      ],
    },
    C2: {
      mastery_level: [
        {
          category: "Expert Academic",
          items: ["addenda", "errata", "desiderata", "memoranda"],
          examples: [
            "The addenda clarify previous points.",
            "Errata will be published separately.",
            "Research desiderata include methodology.",
          ],
          usage_notes: "Highly specialized academic and scholarly vocabulary.",
          expert_usage:
            "Advanced scholarly and professional communication requiring deep knowledge.",
          subtle_distinctions:
            "Precise usage in formal academic and legal contexts.",
        },
        {
          category: "Technical Mastery",
          items: ["apparatus", "formulae", "indices", "matrices"],
          examples: [
            "The experimental apparatus are calibrated.",
            "Mathematical formulae are verified.",
            "Multiple indices track performance.",
          ],
          usage_notes: "Expert-level technical and scientific vocabulary.",
          expert_usage:
            "Highly specialized professional and academic contexts.",
          subtle_distinctions:
            "Formal vs. informal plural choices (formulas vs. formulae).",
        },
        {
          category: "Archaic and Literary",
          items: ["annals", "archives", "vestiges", "remnants"],
          examples: [
            "Historical annals record these events.",
            "Ancient archives preserve knowledge.",
            "Only vestiges remain today.",
          ],
          usage_notes:
            "Literary and historical vocabulary with formal register.",
          expert_usage: "Historical, literary, and formal ceremonial contexts.",
          subtle_distinctions: "Historical and contemporary usage patterns.",
        },
        {
          category: "Philosophical and Abstract",
          items: ["phenomena", "noumena", "qualia", "universals"],
          examples: [
            "Philosophical phenomena require analysis.",
            "Kantian noumena remain unknowable.",
            "Conscious qualia are debated topics.",
          ],
          usage_notes:
            "Highly specialized philosophical and theoretical vocabulary.",
          expert_usage: "Advanced philosophical and theoretical discourse.",
          subtle_distinctions:
            "Technical philosophical meanings vs. general usage.",
        },
      ],
      learning_objectives: [
        "Demonstrate complete mastery of all plural-only noun categories",
        "Use archaic and highly specialized forms appropriately",
        "Navigate subtle register and stylistic distinctions",
        "Apply expert-level vocabulary in specialized professional contexts",
      ],
      key_patterns: [
        "Archaic and literary expressions",
        "Highly specialized technical discourse",
        "Philosophical and theoretical argumentation",
      ],
      expert_grammar: [
        "Historical and etymological awareness",
        "Style guide compliance in specialized fields",
        "Register flexibility across diverse contexts",
      ],
      professional_applications: [
        "Advanced academic research and publication",
        "Expert consultation and professional advisory roles",
        "Scholarly editing and linguistic analysis",
      ],
    },
  },
};
