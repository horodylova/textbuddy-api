export const humanize = (input) => {
    return `Transform this text to sound more natural and human. Return only the transformed text:
 
 
 <INPUT>
 ${input}
 </INPUT>
 
 
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
 
 
 Content Structure:
 - Break up dense paragraphs
 - Use natural linking words between ideas
 - Add contextual callbacks to earlier points
 - Include subtle opinion markers ("I think", "probably", "seems like")
 
 
 Remove Corporate/AI Patterns:
 ${generateCorporatePatternList()}
 
 
 Authenticity Markers:
 - Add subtle imperfections in punctuation
 - Include occasional word repetition
 - Use incomplete sentences when natural
 - Mix up listing patterns (avoid consistent formatting)
 - Add parenthetical thoughts
 - Include casual asides
 
 
 Remember:
 - Keep the core message clear
 - Maintain topic expertise while sounding conversational
 - Preserve important information while making it sound more casual
 - Don't overdo the casualness - subtlety is key`;
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
