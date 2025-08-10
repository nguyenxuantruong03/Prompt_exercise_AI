import pdfMake from "pdfmake/build/pdfmake";
import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from "pdfmake/interfaces";
import {
  categorizeGrammarTopics,
  colors,
  createCoverPage,
  createIntroductionPage,
  createTableOfContents,
  formatGrammarSection,
} from "./style-pdf";
import toast from "react-hot-toast";

export const generatePDF = async (): Promise<void> => {
  // Allow UI to update by yielding control
  await new Promise((resolve) => setTimeout(resolve, 10));

  const { categories, categoryColors } = categorizeGrammarTopics();
  const allContent: Content[] = [];

  // Add cover page with async yield
  allContent.push(...createCoverPage());
  allContent.push({ text: "", pageBreak: "after" });
  await new Promise((resolve) => setTimeout(resolve, 50));

  // Add introduction page with async yield
  allContent.push(...createIntroductionPage());
  allContent.push({ text: "", pageBreak: "after" });
  await new Promise((resolve) => setTimeout(resolve, 50));

  // Add table of contents with async yield
  allContent.push(...createTableOfContents(categories));
  allContent.push({ text: "", pageBreak: "after" });
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Add all grammar sections organized by category with async processing
  let processedCategories = 0;
  for (const [categoryName, sections] of Object.entries(categories)) {
    processedCategories++;

    if (sections.length === 0) continue;

    // Enhanced category separator page with beautiful backgrounds
    const categoryBg = categoryColors[categoryName] || colors.categoryBg;

    allContent.push({
      table: {
        widths: ["*"],
        body: [
          [
            {
              stack: [
                {
                  text: "[BOOK COVER]",
                  fontSize: 48,
                  alignment: "center",
                  margin: [0, 0, 0, 20],
                },
                {
                  text: categoryName,
                  style: "categoryPage",
                  alignment: "center",
                  color: colors.primary,
                  margin: [0, 0, 0, 20],
                },
                {
                  text: `${sections.length} chủ đề / ${sections.length} topics`,
                  fontSize: 16,
                  alignment: "center",
                  color: colors.secondary,
                  italics: true,
                },
              ],
              fillColor: categoryBg,
              margin: [40, 80, 40, 80],
            },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 3,
        vLineWidth: () => 3,
        hLineColor: () => colors.primary,
        vLineColor: () => colors.primary,
        paddingLeft: () => 20,
        paddingRight: () => 20,
        paddingTop: () => 40,
        paddingBottom: () => 40,
      },
      margin: [40, 150, 40, 0],
    });
    allContent.push({ text: "", pageBreak: "after" });

    // Add all sections in this category with async processing
    for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
      const section = sections[sectionIndex];
      allContent.push(
        ...formatGrammarSection(section, processedCategories - 1, sectionIndex)
      );

      // Yield control every 5 sections to prevent blocking
      if (sectionIndex % 5 === 0) {
        await new Promise((resolve) => setTimeout(resolve, 20));
      }
    }

    // Yield control after each category
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  // Enhanced styles with beautiful typography and visual hierarchy
  const styles: StyleDictionary = {
    // Cover page styles with enhanced typography
    coverTitleVi: {
      fontSize: 28,
      bold: true,
      color: "white",
      
    },
    coverTitle: {
      fontSize: 30,
      bold: true,
      color: "white",
      
    },
    coverSubtitleVi: {
      fontSize: 18,
      bold: true,
      color: colors.primary,
      
    },
    coverSubtitle: {
      fontSize: 20,
      bold: true,
      color: colors.secondary,
      
    },
    coverFeatureHeader: {
      fontSize: 20,
      bold: true,
      color: colors.accent,
      
    },
    featureTitle: {
      fontSize: 14,
      bold: true,
      
    },
    coverFeaturesVi: {
      fontSize: 11,
      color: colors.neutral,
      lineHeight: 1.6,
      
    },
    coverFeatures: {
      fontSize: 11,
      color: colors.neutral,
      lineHeight: 1.6,
      
    },
    coverDate: {
      fontSize: 12,
      color: colors.neutral,
      italics: true,
    },
    coverUpdatedAtDate: {
      fontSize: 8,
      color: colors.neutral,
      italics: true,
    },
    premiumBadge: {
      fontSize: 10,
      bold: true,
      
    },

    // Introduction page styles
    introHeader: {
      fontSize: 24,
      bold: true,
      color: "white",
      
    },
    introSubheader: {
      fontSize: 16,
      bold: true,
      color: colors.secondary,
      
    },
    introText: {
      fontSize: 12,
      color: colors.neutral,
      lineHeight: 1.5,
      
    },
    introList: {
      fontSize: 11,
      color: colors.neutral,
      lineHeight: 1.6,
      
    },

    // Color guide styles
    colorKey: {
      fontSize: 11,
      bold: true,
      
    },
    colorDesc: {
      fontSize: 11,
      color: colors.neutral,
      
    },

    // Table of contents styles
    tocHeader: {
      fontSize: 24,
      bold: true,
      color: colors.primary,
      
    },
    tocCategory: {
      fontSize: 16,
      bold: true,
      color: colors.secondary,
      
    },
    tocItem: {
      fontSize: 12,
      color: colors.neutral,
      
    },
    tocPage: {
      fontSize: 12,
      color: colors.primary,
      bold: true,
      
    },

    // Category page styles
    categoryPage: {
      fontSize: 32,
      bold: true,
      
    },

    // Content section styles with enhanced hierarchy
    sectionHeader: {
      fontSize: 20,
      bold: true,
      
    },
    subsectionHeader: {
      fontSize: 16,
      bold: true,
      margin: [0, 0, 0, 0],
      
    },
    structureType: {
      fontSize: 13,
      bold: true,
      
    },
    formLabel: {
      fontSize: 12,
      bold: true,
      
    },
    formContent: {
      fontSize: 13,
      italics: true,
      bold: true,
      color: colors.primary,
      
    },
    description: {
      fontSize: 11,
      color: colors.neutral,
      lineHeight: 1.4,
      
    },
    usageNumber: {
      fontSize: 11,
      bold: true,
      
    },
    usageItem: {
      fontSize: 11,
      color: colors.neutral,
      lineHeight: 1.4,
      
    },
    exampleBullet: {
      fontSize: 14,
      bold: true,
      
    },
    example: {
      fontSize: 11,
      italics: true,
      lineHeight: 1.4,
      
    },
    applicationLabel: {
      fontSize: 12,
      bold: true,
      
    },
    applicationContent: {
      fontSize: 11,
      color: colors.neutral,
      lineHeight: 1.4,
      
    },
    noteIcon: {
      fontSize: 14,
      
    },
    note: {
      fontSize: 11,
      color: colors.info,
      lineHeight: 1.4,
      
    },
    errorText: {
      fontSize: 11,
      color: colors.error,
      italics: true,
      
    },
    correctText: {
      fontSize: 11,
      color: colors.success,
      italics: true,
      
    },
    tipText: {
      fontSize: 11,
      color: colors.info,
      lineHeight: 1.5,
      
    },
    ruleText: {
      fontSize: 11,
      color: colors.neutral,
      lineHeight: 1.4,
      
    },
    // Statistics styles
    statsHeader: {
      fontSize: 14,
      bold: true,
      
    },
    statsCell: {
      fontSize: 10,
      bold: true,
      lineHeight: 1.3,
      
    },
    statsTotal: {
      fontSize: 12,
      bold: true,
      italics: true,
      
    },
    // Table of contents statistics style
    tocStats: {
      fontSize: 9,
      bold: true,
      lineHeight: 1.2,
      
    },
    // Quick analysis table styles
    analysisHeader: {
      fontSize: 16,
      bold: true,
      
    },
    analysisSubHeader: {
      fontSize: 12,
      bold: true,
      
    },
    analysisLabel: {
      fontSize: 10,
      bold: true,
      lineHeight: 1.3,
      
    },
    analysisValue: {
      fontSize: 11,
      bold: true,
      lineHeight: 1.3,
      
    },
    tipsList: {
      fontSize: 10,
      lineHeight: 1.4,
      
    },
    pitfallsList: {
      fontSize: 10,
      lineHeight: 1.4,
      
    },
    practiceList: {
      fontSize: 10,
      lineHeight: 1.4,
      
    },
    // Attention priority chart styles
    chartHeader: {
      fontSize: 16,
      bold: true,
      
    },
    chartCategoryHeader: {
      fontSize: 12,
      bold: true,
      
    },
    chartCategorySubHeader: {
      fontSize: 10,
      bold: true,
      
    },
    chartValue: {
      fontSize: 14,
      bold: true,
      lineHeight: 1.2,
      
    },
    chartDescription: {
      fontSize: 9,
      lineHeight: 1.3,
      
    },
    chartNote: {
      fontSize: 9,
      lineHeight: 1.4,
      
    },
    // Enhanced table of contents styles
    tocCategoryHeader: {
      fontSize: 14,
      bold: true,
      
    },
    tocNumber: {
      fontSize: 11,
      bold: true,
      
    },
  };

  const documentDefinition: TDocumentDefinitions = {
    content: allContent,
    styles: styles,
    defaultStyle: {
      fontSize: 10,
      lineHeight: 1.3,
       // Use Roboto as default font
    },
    pageSize: "A4",
    pageMargins: [40, 60, 40, 60],
    header: (currentPage: number) => {
      if (currentPage <= 3) return null; // No header on cover, intro, and TOC pages
      return {
        text: "Ngữ Pháp Tiếng Anh Hoàn Chỉnh bởi: Nguyễn Xuân Trường / Complete English Grammar Guide by: Nguyen Xuan Truong",
        alignment: "center",
        fontSize: 8,
        color: colors.neutral,
        margin: [0, 20, 0, 0],
      };
    },
    footer: (currentPage: number, pageCount: number) => {
      return {
        text: `Trang / Page ${currentPage} / ${pageCount}`,
        alignment: "center",
        fontSize: 8,
        color: colors.neutral,
        margin: [0, 0, 0, 20],
      };
    },
  };

  await new Promise((resolve) => setTimeout(resolve, 100));

  // Generate and download PDF
  return new Promise<void>((resolve, reject) => {
    try {
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);

      // Use getBlob to properly handle async PDF generation
      pdfDocGenerator.getBlob((blob) => {
        try {
          // Create download link
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "Complete_English_Grammar_Guide_119_Topics.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

          // Resolve after successful download with small delay
          setTimeout(() => {
            resolve();
          }, 500);
        } catch (error) {
          reject(error);
        }
      });
    } catch (error) {
      reject(error);
      toast.error(
        "Có lỗi xảy ra khi tạo PDF. Vui lòng thử lại. / Error generating PDF. Please try again."
      );
    }
  });
};
