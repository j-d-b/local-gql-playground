const express = require('express');
const expressPlayground = require('graphql-playground-middleware-express').default;

const app = express();

app.use('/playground', expressPlayground());

app.listen(5000, () => console.log('Playground ready at http://localhost:5000/playground'));
