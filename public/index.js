const apiData = {
  url: 'https://www.dnd5eapi.co',
  subject: '/api/spells',
};

const { url, subject, index } = apiData;
const api_url = `${url}${subject}`;

let spells = [];
let currentSpell = {};
let currentSpellIndex = 2;

async function getSpells() {
  const response = await fetch(api_url);
  return await response.json();
}

async function getSpellDetails(spellUrl) {
  const response = await fetch(`${url}${spellUrl}`);
  return await response.json();
}

const generateHtml = (data) => {
  // define all query selectors
  let name = data.name;
  let school = data.school.name;
  let range = data.range;
  let castingTime = data.casting_time;
  let duration = data.duration;
  let desc = data.desc;
  let higherLevel = data.higher_level;
  let components = data.components;
  let material = data.material;

  // assign all values to query selectors
  document.querySelector('.name').textContent = name;
  document.querySelector('.school').textContent = school;
  document.querySelector('.range').textContent = range;
  document.querySelector('.casting_time').textContent = castingTime;
  document.querySelector('.duration').textContent = duration;
  document.querySelector('.desc').textContent = desc;
  document.querySelector('.higher_level').textContent = higherLevel;
  document.querySelector('.components').textContent = components;
  document.querySelector('.material').textContent = material;

  let img = document.querySelector('.img_school');

  switch (school) {
    case 'Enchantment':
      img.setAttribute('src', './images/enchantment.jpg');
      break;
    case 'Abjuration':
      img.setAttribute('src', './images/abjuration.jpg');
      break;
    case 'Conjuration':
      img.setAttribute('src', './images/conjuration.jpg');
      break;
    case 'Divination':
      img.setAttribute('src', './images/divination.jpg');
      break;
    case 'Evocation':
      img.setAttribute('src', './images/evocation.jpg');
      break;
    case 'Illusion':
      img.setAttribute('src', './images/illusion.jpg');
      break;
    case 'Necromancy':
      img.setAttribute('src', './images/necromancy.jpg');
      break;
    case 'Transmutation':
      img.setAttribute('src', './images/transmutation.jpg');
      break;
    default:
      img.setAttribute('src', 'https://bulma.io/images/placeholders/96x96.png');
  }
};

getSpells().then(async (apiSpells) => {
  spells = apiSpells;
  currentSpell = await getSpellDetails(spells.results[currentSpellIndex].url);
  console.log(currentSpell);
  generateHtml(currentSpell);
});
