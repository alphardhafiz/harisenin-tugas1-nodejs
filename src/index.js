require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');
const aboutMeRouter = require('./routes/about-me');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use('/', router);
app.use('/about-me', aboutMeRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server Running');
});
