import { CertificateType } from './types';

// Function to get certificate-specific context
export const getCertificateContext = (certType: CertificateType): string => {
  const certificateFormats = {
    IELTS: "Format questions similar to IELTS Academic/General Training tests. Include formal language structures, academic vocabulary, and test-specific question patterns. Focus on grammar points commonly tested in IELTS Writing and Speaking tasks.",
    TOEIC: "Design exercises for business and workplace English. Use professional contexts, business vocabulary, and question formats typical of TOEIC tests. Emphasize practical business communication grammar.",
    PTE: "Create computer-based test-style questions. Use varied question formats, academic contexts, and grammar structures commonly assessed in PTE Academic tests. Include complex sentence structures and academic vocabulary.",
    TOEFL: "Format for academic English proficiency. Use university-level contexts, academic vocabulary, and question types similar to TOEFL iBT. Focus on grammar needed for academic reading, writing, and speaking.",
    Cambridge: "Design according to Cambridge English exam standards (KET/PET/FCE/CAE/CPE levels). Use question formats and difficulty appropriate to the selected proficiency level. Include grammar points from Cambridge exam syllabi.",
    SAT: "Create college-level questions focusing on grammar and usage tested in SAT Writing sections. Use formal academic contexts and advanced grammar structures expected at university level.",
    VSTEP: "Format for Vietnamese English proficiency standards. Include question types and grammar focuses specific to VSTEP test requirements and Vietnamese learners' common challenges."
  };
  
  return `CERTIFICATE-SPECIFIC REQUIREMENTS for ${certType}:
${certificateFormats[certType]}

IMPORTANT: Tailor question difficulty, vocabulary, and format to match ${certType} test standards and requirements.`;
};
