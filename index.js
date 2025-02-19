import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { humanizeRouter } from "./routes/humanizeRouter.js";

dotenv.config();

const app = express();
 
app.use(cors());
app.use(express.json());

 
app.use("/api/humanize", humanizeRouter);
 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});