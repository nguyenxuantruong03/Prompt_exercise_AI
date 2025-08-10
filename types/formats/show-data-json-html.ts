
/**
 * Type for data values that can be formatted to HTML
 */
export type FormattableValue =
  | string
  | number
  | boolean
  | Array<
      string | number | boolean | Record<string, unknown> | null | undefined
    >
  | Record<string, unknown>
  | null
  | undefined;

/**
 * Configuration options for HTML formatting
 */
export interface FormatterOptions {
  includeTheory?: boolean;
  includeExamples?: boolean;
  includeCitations?: boolean;
  includeStructure?: boolean;
  includeCommonMistakes?: boolean;
  includeTips?: boolean;
  includeTimeMarkers?: boolean;
  includeUsage?: boolean;
  comparisonMode?: boolean;
  theme?: "light" | "dark" | "academic";
  maxExamples?: number;
  truncateLongText?: boolean;
  maxTextLength?: number;
}
