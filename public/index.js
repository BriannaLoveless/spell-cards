const apiData = {
    url: "https://www.dnd5eapi.co/api/",
    subject: 'spells',
    index: 'acid-arrow',
}

const {url, subject, index} = apiData
const api_url = `${url}${subject}/${index}`

async function getSpells() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
}

getSpells();