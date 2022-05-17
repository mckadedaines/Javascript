const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const outputElement = document.querySelector('#output');
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  const html = `<h2>${data.name}</h2>
  <img src="${data.sprites.front_default}" alt="image of ${data.name}">`;
  outputElement.innerHTML = html;
}
getPokemon(url);
console.log("second: ", results);