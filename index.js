const express = require('express');
const fetch = require('node-fetch')
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

// TODO (What I want this app to do)
// Display all spells from D&D 5e in a "card"
    // Name, effect, range, conditions, maybe images? -- might require separate api or something?
// Create search functionality for users
// Have a way to "favorite" or save specific spells -- local storage, not w/ sign in
    // separate page? just down at the bottom, smaller maybe?
    // maybe separate "tab" within the page that hides the search section and displays all saved spells in a list/grid, maybe by level

getSpells();

const api_url = 'https://www.dnd5eapi.co/api/spells/'
async function getSpells() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
}
