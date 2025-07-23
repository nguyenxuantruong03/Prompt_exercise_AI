// Simple test to verify AI integration
async function testGrammarAPI() {
  const testData = {
    text: "I have went to the store yesterday",
    action: "fix",
  };

  try {
    const response = await fetch("/api/grammar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    console.log("Grammar Fix Result:", result);

    // Test exercise generation
    const exerciseData = {
      text: "past tense verbs",
      action: "generate",
    };

    const exerciseResponse = await fetch("/api/grammar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exerciseData),
    });

    const exerciseResult = await exerciseResponse.json();
    console.log("Exercise Generation Result:", exerciseResult);
  } catch (error) {
    console.error("Test failed:", error);
  }
}

// Export for use in browser console or testing
if (typeof window !== "undefined") {
  (window as any).testGrammarAPI = testGrammarAPI;
}

export { testGrammarAPI };
