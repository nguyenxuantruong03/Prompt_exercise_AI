// Common types and interfaces for all certificate types
export interface CertificateData {
  id: string;
  type: CertificateType;
  candidateName: string;
  candidateId?: string;
  testDate: string;
  issueDate: string;
  score: string;
  level: string;
  validUntil?: string;
  testCenter?: string;
  registrationNumber?: string;
  skills?: CertificateSkills;
}

export interface CertificateSkills {
  listening?: string;
  reading?: string;
  writing?: string;
  speaking?: string;
  useOfEnglish?: string;
  grammar?: string;
  vocabulary?: string;
}

export type CertificateType =
  | "IELTS"
  | "TOEIC"
  | "TOEFL"
  | "Cambridge"
  | "SAT"
  | "VSTEP";
