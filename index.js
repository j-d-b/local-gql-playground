const readline = require('readline');
const chalk = require('chalk');
const opn = require('opn');
const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(chalk.yellow('Enter GraphQL endpoint URL: '), (input) => {
  const app = express();

  app.use('/playground', expressPlayground( { endpoint: input }));

  app.listen(5000, () => console.log(chalk.green('💫  Playground ready at http://localhost:5000/playground')));

  opn('http://localhost:5000/playground');
});
