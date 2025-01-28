export const createHumanizePrompt = () => {
    return `Transform this text to sound more natural and human. Return only the transformed text:
  
  Writing Pattern Guidelines:
  - Vary sentence length naturally (mix of short and longer sentences)
  - Add occasional verbal tics ("like", "you know", "actually")
  - Include natural redundancies and self-corrections
  - Use contractions consistently
  - Break longer sentences with natural pauses
  - Add conversational transitions ("anyway", "so", "thing is")
  
  Voice Adjustments:
  - Replace formal vocabulary with everyday alternatives
  - Use active voice predominantly
  - Add personality through mild intensifiers ("really", "pretty", "kind of")
  - Include occasional personal references or asides
  - Add natural hesitations or qualifiers when appropriate
  
  Avoid Corporate/AI Patterns:
  - No "firstly", "secondly", "moreover"
  - Avoid business jargon ("leverage", "optimize", "streamline")
  - Skip formulaic transitions ("let's dive in", "picture this")
  - Remove overly formal constructions ("in regard to", "as per")
  - Avoid clichéd phrases ("in today's digital age", "in this fast-paced world")
  
  Remember:
  - Keep the core message clear
  - Maintain topic expertise while sounding conversational
  - Preserve important information while making it sound more casual
  - Don't overdo the casualness - subtlety is key`;
  };