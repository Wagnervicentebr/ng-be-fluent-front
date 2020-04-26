const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/dist/frontend-be-fluent'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/frontend-be-fluent/index.html')
});

app.listen(PORT, () =>{
    console.log('listen on port ' + PORT)
});