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
app.use(function validateBearerToken(req, res, next) {
  const bearerToken = req.get(`Authorization`);
  const apiToken = process.env.API_TOKEN;
  if (!bearerToken || bearerToken.split(` `)[1] !== apiToken) {
    return res
      .status(401)
      .json({ error: `Unauthorized request` });
  }
  next();
});

app.get(`/moviedex`, (req, res) => {
  res.json(MOVIEDEX);
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});