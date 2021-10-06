const express = require('express');
const app = express();
const port = 9001;

app.get('/', (req, res) => {
    res.send("welcome to the server");
});

app.listen(port, () => {
    console.log("listening on port", port);
})