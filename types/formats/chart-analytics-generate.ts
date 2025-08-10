import {
  TDocumentDefinitions,
  Content,
  StyleDictionary,
  DynamicContent,
} from "pdfmake/interfaces";

// PDFMake VFS interface
export interface VfsInterface {
  [filename: string]: string;
}

// PDFMake with VFS property
export interface PDFMakeStatic {
  vfs: VfsInterface;
  createPdf: (documentDefinition: TDocumentDefinitions) => PDFDocumentProxy;
}

// PDF Document Generator interface
export interface PDFDocumentProxy {
  download: (defaultFileName?: string) => void;
  open: (options?: { target?: string }) => void;
  print: (options?: { target?: string }) => void;
  getBlob: (callback: (blob: Blob) => void) => void;
  getBase64: (callback: (base64: string) => void) => void;
  getBuffer: (callback: (buffer: ArrayBuffer) => void) => void;
}

// PDFFonts interface
export interface PDFFontsInterface {
  pdfMake?: {
    vfs: VfsInterface;
  };
  vfs?: VfsInterface;
  [key: string]: unknown;
}

// Mistake data interface (from JSON)
export interface MistakeData {
  question: string;
  userAnswer: string | string[];
  correctAnswer: string | string[];
  grammarTopic: string;
  difficulty: "easy" | "medium" | "hard";
  exerciseType: string;
  timestamp: string;
  explanation?: string;
}
