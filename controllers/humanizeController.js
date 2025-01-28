export const humanizeController = (req, res) => {
    const { text } = req.body;
  
    if (!text || typeof text !== "string") {
      return res.status(400).json({ error: "Invalid input. Please provide a valid text." });
    }
  
     res.json({ humanizedText: `Humanized version of: ${text}` });
  };
  