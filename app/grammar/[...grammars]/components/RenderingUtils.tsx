"use client";

import React from "react";

interface RenderingUtilsProps {}

export class RenderingUtils {
  // Safe rendering function to avoid [object Object]
  static safeRender = (value: any): string => {
    if (value === null || value === undefined) {
      return "";
    }
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return String(value);
    }
    if (Array.isArray(value)) {
      return value.map((item) => RenderingUtils.safeRender(item)).join(", ");
    }
    if (typeof value === "object") {
      // Special handling for journal/research article objects
      if (value.title && value.authors && value.journal && value.year) {
        const authors = Array.isArray(value.authors)
          ? value.authors.join(", ")
          : String(value.authors);
        const doi = value.doi ? ` - DOI: ${value.doi}` : "";
        const findings = value.keyFindings
          ? ` - Key Findings: ${value.keyFindings}`
          : "";
        return `${value.title} by ${authors} (${value.year}) in ${value.journal}${doi}${findings}`;
      }

      // Special handling for citation/reference objects
      if (value.title && value.author && (value.year || value.publisher)) {
        const chapters =
          value.relevantChapters && Array.isArray(value.relevantChapters)
            ? ` - Chapters: ${value.relevantChapters.join(", ")}`
            : "";
        const isbn = value.isbn ? ` (ISBN: ${value.isbn})` : "";
        return `${value.title} by ${value.author} (${value.year || "N/A"}) - ${
          value.publisher || "Unknown Publisher"
        }${chapters}${isbn}`;
      }

      // Special handling for web resource objects
      if (value.name && value.url && value.description) {
        const accessDate = value.accessDate
          ? ` (Accessed: ${value.accessDate})`
          : "";
        return `${value.name} - ${value.description} - URL: ${value.url}${accessDate}`;
      }

      // Special handling for book/resource objects
      if (value.title && value.author && (value.focus || value.level)) {
        const focus = value.focus ? ` - Focus: ${value.focus}` : "";
        const level = value.level ? ` - Level: ${value.level}` : "";
        return `${value.title} by ${value.author}${focus}${level}`;
      }

      // Generic object fallback - format key-value pairs nicely
      const objectEntries = Object.entries(value);
      if (objectEntries.length <= 5) {
        return objectEntries
          .map(([key, val]) => {
            const formattedKey = key
              .replace(/([A-Z])/g, " $1")
              .replace(/_/g, " ")
              .toLowerCase();
            return `${formattedKey}: ${RenderingUtils.safeRender(val)}`;
          })
          .join(" | ");
      }

      // Special handling for language error correction objects
      if (
        value.language &&
        value.error &&
        value.correction &&
        value.explanation
      ) {
        return `Language: ${value.language} | Error: ${value.error} | Correction: ${value.correction} | Explanation: ${value.explanation}`;
      }

      // Special handling for pattern objects with structure like: { pattern: "...", examples: [...], level: "..." }
      if (value.pattern && value.examples && value.level) {
        const examples = Array.isArray(value.examples)
          ? value.examples.join(", ")
          : String(value.examples);
        return `${value.pattern} (Level: ${value.level}) - Examples: ${examples}`;
      }

      // Special handling for objects with description and examples
      if (value.description && value.examples) {
        const examples = Array.isArray(value.examples)
          ? value.examples.join(", ")
          : String(value.examples);
        return `${value.description} - Examples: ${examples}`;
      }

      // Special handling for objects with rule and examples
      if (value.rule && value.examples) {
        const examples = Array.isArray(value.examples)
          ? value.examples.join(", ")
          : String(value.examples);
        return `${value.rule} - Examples: ${examples}`;
      }

      // For simple key-value objects, format them nicely
      const entries = Object.entries(value);
      if (entries.length <= 3) {
        return entries
          .map(([key, val]) => `${key}: ${RenderingUtils.safeRender(val)}`)
          .join(" | ");
      }

      // If object is too complex, format it nicely instead of JSON
      return `Complex object with ${entries.length} properties: ${entries
        .map(([key]) => key)
        .join(", ")}`;
    }
    return String(value);
  };
}

export default RenderingUtils;
