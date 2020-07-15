require(`dotenv`).config();
const express = require(`express`);
const morgan = require(`morgan`);
const helmet =  require(`helmet`);
const cors = require(`cors`);
const MOVIEDEX = require(`./moviedex.json`);

const app = express();

app.use(morgan(`dev`));
app.use(helmet());
app.use(cors());

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});