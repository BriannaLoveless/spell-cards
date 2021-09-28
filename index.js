const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));

const api_url = 'https://www.dnd5eapi.co/api/spells/';
async function getSpells() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}

getSpells();
