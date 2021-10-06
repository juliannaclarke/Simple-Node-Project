
//setting up the app to use express and listen on port 9001
const express = require('express');
const app = express();
const port = 9001;

app.get('/', (req, res) => {
    //request at the entrance to the server
    res.send("welcome to the server");
});

app.get("/api/penguins", (req,res) => {

    //call to db for data about penguins
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

app.get("/api/bears", (req,res) => {

    //call to db for data about bears
    const bearFacts = ["Fat Bear Week is an annual celebration of fat bears that runs from Sept. 29 to Oct 5.", 
    "This year's Fat Bear Week Champion is Otis, but personally I think Walker should have taken the cake due to his incredibly fat butt.", 
    "The Koala bear is not really a bear.",
    "Despite their heavy build and awkward gait, they are adept runners, climbers, and swimmers.", 
    "While the polar bear is mostly carnivorous, and the giant panda feeds almost entirely on bamboo, the remaining six species are omnivorous with varied diets.", 
    "They may be diurnal or nocturnal and have an excellent sense of smell.", 
    "The most widespread species is the brown bear, which occurs from Western Europe eastwards through Asia to the western areas of North America.", 
    "Most bears are opportunistic omnivores and consume more plant than animal matter.", 
    "In autumn, some bear species forage large amounts of naturally fermented fruits, which affects their behavior.", 
    "Bears sometimes communicate with visual displays such as standing upright, which exaggerates the individual's size."]
    res.send(JSON.stringify(bearFacts));
});

app.listen(port, () => {
    console.log("listening on port", port);
})