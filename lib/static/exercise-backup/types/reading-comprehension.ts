// Reading Comprehension Exercise Backup Database
import {
  Question,
  CEFRLevel,
  CertificateType,
  TypeExcercise,
} from "@/types/grammars/grammars_type";

export const READING_COMPREHENSION_BACKUPS = {
  "present simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Read the text and answer the question.\n\n**Daily Routine**\n\nMary is a teacher. She works at Lincoln Elementary School. Every morning, she gets up at 6:30 AM. She has breakfast with her family and then drives to work. School starts at 8:00 AM. Mary teaches English to young children. She likes her job very much because children are fun and creative.\n\nAfter school, Mary goes shopping or visits her friends. She comes home at 5:00 PM and has dinner with her husband. They watch TV together in the evening.\n\n**Question:** What time does Mary get up?",
          options: ["6:00 AM", "6:30 AM", "7:00 AM", "8:00 AM"],
          correct: 1,
          explanation:
            "According to the text: 'Every morning, she gets up at 6:30 AM.'",
          tip: "Look for specific time expressions in present simple texts",
          tense: "present simple",
          type: "reading-comprehension" as TypeExcercise,
        },
        {
          id: 2,
          question:
            "Read the text and answer the question.\n\n**My Best Friend**\n\nTom is my best friend. He lives in the same neighborhood as me. Tom is 25 years old and works as a doctor. He helps sick people every day. Tom is very kind and always smiles.\n\nOn weekends, Tom and I play football in the park. We also like to watch movies together. Tom has a dog named Max. Max is very friendly and loves to play.\n\n**Question:** What is Tom's job?",
          options: ["Teacher", "Doctor", "Engineer", "Police officer"],
          correct: 1,
          explanation:
            "The text states: 'Tom is 25 years old and works as a doctor.'",
          tip: "Find job-related vocabulary in present simple descriptions",
          tense: "present simple",
          type: "reading-comprehension" as TypeExcercise,
        },
      ],
      IELTS: [
        {
          id: 1,
          question:
            "Read the passage and answer the question.\n\n**Modern Education Systems**\n\nContemporary educational institutions implement various methodologies to enhance student learning outcomes. Research indicates that interactive teaching approaches significantly improve comprehension rates compared to traditional lecture-based methods. Educational technology also plays a crucial role in modern classrooms.\n\nStudies demonstrate that students who participate in collaborative learning activities show higher engagement levels. Furthermore, personalized learning plans accommodate different learning styles and academic capabilities.\n\n**Question:** According to the passage, what do research findings suggest about interactive teaching?",
          options: [
            "It reduces student engagement",
            "It improves comprehension rates",
            "It replaces traditional methods completely",
            "It focuses only on technology",
          ],
          correct: 1,
          explanation:
            "The passage states: 'Research indicates that interactive teaching approaches significantly improve comprehension rates.'",
          tip: "Focus on research findings and academic vocabulary in IELTS texts",
          tense: "present simple",
          type: "reading-comprehension" as TypeExcercise,
        },
      ],
    },
    A2: {
      default: [
        {
          id: 1,
          question:
            "Read the text and answer the question.\n\n**A Healthy Lifestyle**\n\nLisa believes that a healthy lifestyle is very important. She exercises three times a week at the gym. Lisa also eats lots of fruits and vegetables. She drinks water instead of soft drinks because water is better for her health.\n\nEvery Sunday, Lisa prepares healthy meals for the whole week. She cooks fish, chicken, and lots of salads. Lisa sleeps eight hours every night because she knows that good sleep helps her stay healthy and active.\n\nLisa's friends think she is very disciplined, but she says it's easy when you enjoy healthy habits.\n\n**Question:** How often does Lisa exercise?",
          options: [
            "Every day",
            "Twice a week",
            "Three times a week",
            "Once a week",
          ],
          correct: 2,
          explanation:
            "The text clearly states: 'She exercises three times a week at the gym.'",
          tip: "Pay attention to frequency adverbs (once, twice, three times) in present simple",
          tense: "present simple",
          type: "reading-comprehension" as TypeExcercise,
        },
      ],
    },
  },

  "past simple": {
    A1: {
      default: [
        {
          id: 1,
          question:
            "Read the text and answer the question.\n\n**Yesterday's Adventure**\n\nYesterday was a special day for Jake. He woke up early and had breakfast with his parents. Then he went to the zoo with his class. At the zoo, Jake saw many animals - lions, elephants, monkeys, and birds.\n\nJake's favorite animal was the giraffe. It was very tall and gentle. He took many photos with his camera. After the zoo visit, the class had lunch at a nearby restaurant. Jake ate pizza and drank orange juice.\n\nIn the evening, Jake came home tired but happy. He showed all the photos to his family.\n\n**Question:** What did Jake do yesterday morning?",
          options: [
            "He went to school",
            "He had breakfast with his parents",
            "He visited his friends",
            "He played in the park",
          ],
          correct: 1,
          explanation:
            "The text states: 'He woke up early and had breakfast with his parents.'",
          tip: "Look for past time markers like 'yesterday', 'morning' with past simple verbs",
          tense: "past simple",
          type: "reading-comprehension" as TypeExcercise,
        },
      ],
    },
  },

  "present perfect": {
    B1: {
      default: [
        {
          id: 1,
          question:
            "Read the text and answer the question.\n\n**Career Changes**\n\nSarah has worked in marketing for five years, but recently she has become interested in web development. She has already completed two online programming courses and has started building her own website.\n\nSarah has never studied computer science formally, but she has always been good with technology. Her friends have encouraged her to make the career change because they have seen her natural talent for coding.\n\nSo far, Sarah has created three different websites and has learned four programming languages. She has not made the final decision yet, but she has been thinking about it seriously.\n\n**Question:** How many programming languages has Sarah learned?",
          options: ["Two", "Three", "Four", "Five"],
          correct: 2,
          explanation:
            "The text states: 'So far, Sarah has created three different websites and has learned four programming languages.'",
          tip: "Present perfect often shows completed actions with current relevance",
          tense: "present perfect",
          type: "reading-comprehension" as TypeExcercise,
        },
      ],
    },
  },

  "future simple": {
    A2: {
      default: [
        {
          id: 1,
          question:
            "Read the text and answer the question.\n\n**Weekend Plans**\n\nNext weekend will be very busy for the Johnson family. On Saturday morning, they will visit grandmother in the countryside. They will have lunch together and will help her with some garden work.\n\nOn Saturday evening, they will return home and will prepare for Sunday's activities. Sunday will be different - they will go to the beach if the weather is good. The children will play in the sand while parents will relax and read books.\n\nIf it rains on Sunday, they will stay home and will watch movies together. Mrs. Johnson will cook a special dinner for everyone.\n\n**Question:** What will the family do on Saturday morning?",
          options: [
            "Go to the beach",
            "Visit grandmother",
            "Watch movies",
            "Cook dinner",
          ],
          correct: 1,
          explanation:
            "The text says: 'On Saturday morning, they will visit grandmother in the countryside.'",
          tip: "Future simple uses 'will' to describe planned future actions",
          tense: "future simple",
          type: "reading-comprehension" as TypeExcercise,
        },
      ],
    },
  },
};

export function getReadingComprehensionBackup(
  grammarTopic: string,
  proficiencyLevel: CEFRLevel,
  certificateType?: CertificateType,
  numQuestions: number = 3
): Question[] {
  const topicData =
    READING_COMPREHENSION_BACKUPS[
      grammarTopic.toLowerCase() as keyof typeof READING_COMPREHENSION_BACKUPS
    ];
  if (!topicData) return [];

  const levelData = (topicData as any)[proficiencyLevel];
  if (!levelData) return [];

  const certificateKey = certificateType || "default";
  const questions = levelData[certificateKey] || levelData["default"] || [];

  return questions.slice(0, numQuestions);
}

export default READING_COMPREHENSION_BACKUPS;
