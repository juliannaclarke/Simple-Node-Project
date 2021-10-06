const express = require('express');
const app = express();
const port = 9001;

app.get('/', (req, res) => {
    res.send("welcome to the server");
});

app.get("/api/penguin", (req,res) => {
    //call to db for data
    const penguinFacts = ["Penguins are flightless birds.", 
    "Several species are found in the temperate zone, and one species, the Galápagos penguin, lives near the Equator.", 
    "The largest living species is the emperor penguin.", 
    "The smallest penguin species is the little blue penguin.", 
    "Some prehistoric penguin species were enormous: as tall or heavy as an adult human.", 
    "A group of penguins on land is a 'waddle'.", 
    "A group of penguins in the water is a raft.", 
    "Penguin eggs are smaller than any other bird species when compared proportionally to the weight of the parent birds.", 
    "Most penguins lay two eggs in a clutch, although the two largest species, the emperor and the king penguins, lay only one.", 
    "Penguins for the most part breed in large colonies, the exceptions being the yellow-eyed and Fiordland species"]
    res.send(JSON.stringify(penguinFacts));
});

app.listen(port, () => {
    console.log("listening on port", port);
})