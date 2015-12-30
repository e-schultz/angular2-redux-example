const express = require('express');
const winston = require('winston');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 3000;
const DOMAIN = '0.0.0.0';

app.use('/', express.static('dist'));

app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening at http://${ chalk.green(DOMAIN) }:${ chalk.yellow(PORT) }`);
});
