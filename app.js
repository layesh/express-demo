const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello world!')
})

app.listen(5000, () => {
    console.log('Listening server on port 5000...')
})