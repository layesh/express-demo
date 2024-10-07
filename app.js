const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     console.log('Hello world!')
// })

//static middleware 
app.use(express.static('./static'))

app.get('*', (req, res) =>{
    res.status(404).send('Resource no found.')
})

app.listen(5000, () => {
    console.log('Listening server on port 5000...')
})