export const createHumanizePrompt = () => {
  return `Transform this text to sound more natural and human. Return only the transformed text:

Guidelines:
- Vary sentence length (short and long)
- Use verbal tics ("like", "you know"), redundancies, and contractions
- Break long sentences, use transitions ("anyway", "so")
- Use active voice, everyday vocabulary, mild intensifiers ("really", "pretty")
- Add personal references, asides, and occasional hesitations

Avoid:
${generateCorporatePatternList()}

Authenticity Markers:
- Imperfect punctuation, word repetition, incomplete sentences, casual asides

Maintain clarity and expertise while sounding natural.`;
};

const generateCorporatePatternList = () => {
  const patterns = [
      "firstly", "secondly", "moreover", "furthermore", "in conclusion",
      "leverage", "optimize", "streamline", "synergy", "paradigm",
      "let's dive in", "picture this", "imagine if", "it's crucial",
      "game-changing", "revolutionary", "innovative solution", "unlock",
      "in regard to", "as per", "in the realm of", "in the landscape of",
      "in today's digital age", "in this fast-paced world", "digital transformation",
      "very", "extremely", "absolutely", "literally", "undoubtedly",
      "it goes without saying", "needless to say", "it should be noted",
      "thus", "hence", "therefore", "consequently", "subsequently"
  ];
  return patterns.join(", ") + ", and similar formulaic patterns";
};