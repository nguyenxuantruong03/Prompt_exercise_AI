// Type definitions for UltraCompletePDFGenerator

import { TableCell, Content } from "pdfmake/interfaces";

// Type definitions for certificate data structures
export interface CertificateData {
  createdAt: string;
  updatedAt: string;
  [key: string]: CertificateDataValue;
}

export type CertificateDataValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | CertificateDataValue[]
  | { [key: string]: CertificateDataValue };

// PDF Make related interfaces
export interface PdfMakeInstance {
  vfs?: Record<string, string>;
  createPdf: (
    documentDefinition: import("pdfmake/interfaces").TDocumentDefinitions
  ) => {
    download: (filename: string) => void;
    getBlob: (callback: (blob: Blob) => void) => void;
    open: () => void;
  };
}

export interface PdfMakeModule {
  default?: PdfMakeInstance;
  createPdf?: PdfMakeInstance["createPdf"];
  vfs?: Record<string, string>;
}

export interface VfsFontsModule {
  default?: { vfs: Record<string, string> };
  vfs?: Record<string, string>;
  pdfMake?: { vfs: Record<string, string> };
}

// Table of Contents related types
export interface TocItem {
  text: string;
  style: string;
  margin: number[];
  color: string;
  linkToDestination: string;
  fontSize: number;
  bold: boolean;
}

// Table related types
export interface TableRow extends Array<TableCell> {}

export interface LayoutFunction {
  (i: number, node: { table: { body: TableRow[] } }): number;
}

export interface CustomTableLayout {
  hLineWidth?: LayoutFunction;
  vLineWidth?: () => number;
  hLineColor?: () => string;
  vLineColor?: () => string;
  paddingLeft?: () => number;
  paddingRight?: () => number;
  paddingTop?: () => number;
  paddingBottom?: () => number;
}

// Certificate types
export type CertificateType =
  | "Cambridge"
  | "IELTS"
  | "PTE"
  | "SAT"
  | "TOEFL"
  | "TOEIC"
  | "VSTEP"
  | "All Skills"
  | "ALL";

// Type guards
export const isRecord = (
  value: CertificateDataValue
): value is Record<string, CertificateDataValue> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

export const isArray = (
  value: CertificateDataValue
): value is CertificateDataValue[] => {
  return Array.isArray(value);
};

export const isString = (value: CertificateDataValue): value is string => {
  return typeof value === "string";
};

export const isNumber = (value: CertificateDataValue): value is number => {
  return typeof value === "number";
};

export const isBoolean = (value: CertificateDataValue): value is boolean => {
  return typeof value === "boolean";
};

// Extended Content type with additional properties used in the application
export interface ExtendedContent {
  text?: string | string[];
  style?: string | string[];
  pageBreak?: "before" | "after";
  id?: string;
  linkToDestination?: string;
  table?: {
    widths?: (string | number)[];
    headerRows?: number;
    body: TableRow[];
  };
  layout?: CustomTableLayout;
  margin?: number | number[];
  alignment?: "left" | "right" | "center" | "justify";
  fontSize?: number;
  bold?: boolean;
  italics?: boolean;
  color?: string;
  background?: string;
  fillColor?: string;
  decoration?: string;
  decorationStyle?: string;
  lineHeight?: number;
  colSpan?: number;
}

// Symbol mapping type
export type CertificateSymbolMapping = Record<string, string>;

// PDF generation result type
export interface PdfGenerationResult {
  success: boolean;
  fileName?: string;
  error?: string;
}

// Data analysis result type
export interface DataAnalysisResult {
  totalSize: number;
  totalProperties: number;
  certificates: Array<{
    name: string;
    size: number;
    propertyCount: number;
  }>;
}
