let elMainList = $('.main-list');

pokemons.forEach(pokemon => {
  let partItem = createElement('li', 'part-item d-flex flex-column mb-5');
  let itemHeading = createElement('h3', 'pokemon-heading', `${pokemon.name}`);
  let itemImg = createElement('img', 'pokemon-img mb-3');
  itemImg.src = pokemon.img;
  itemImg.height = 150;
  itemImg.width = 150;
  let itemType = createElement('p', 'pokemon-type m-0', `Type: ${pokemon.type}`);
  let itemWidth = createElement('span', 'pokemon-width', `Width: ${pokemon.weight}`);
  let itemHeight = createElement('span', 'pokemon-height', `Height: ${pokemon.height}`);
  let itemCandy = createElement('span', 'pokemon-candy', `Candy: ${pokemon.candy}`);
  let itemCandyCount = createElement('span', 'pokemon-count', `Candy count: ${pokemon.candy_count}`);
  let itemEgg = createElement('span', 'pokemon-egg', `Egg: ${pokemon.egg}`);
  let itemSpawnChance = createElement('span', 'pokemon-chance', `Spawn chance: ${pokemon.spawn_chance}`);
  let itemAvgSpavns = createElement('span', 'pokemon-avg', `Avg Spawns: ${pokemon.avg_spawns}`);
  let itemSpawnTime = createElement('span', 'pokemon-time', `Spawns time: ${pokemon.spawn_time}`);
  let itemMultipliers = createElement('span', 'pokemon-multipliers', `Multipliers: ${pokemon.multipliers}`);
  let itemWeaknesses = createElement('span', 'pokemon-weaknesses', `Weaknesses: ${pokemon.weaknesses}`);
  
  partItem.append(itemHeading, itemImg, itemType, itemWidth, itemHeight, itemCandy, itemCandyCount, itemEgg, itemSpawnChance, itemAvgSpavns, itemSpawnTime, itemMultipliers, itemWeaknesses);
  elMainList.appendChild(partItem);
})

// for (let pokemon of pokemons) {
//   let partItem = createElement('li', 'part-item d-flex flex-column mb-5');
//   let itemHeading = createElement('h3', 'pokemon-heading', `${pokemon.name}`);
//   let itemImg = createElement('img', 'pokemon-img mb-3');
//   itemImg.src = pokemon.img;
//   itemImg.height = 150;
//   itemImg.width = 150;
//   let itemType = createElement('p', 'pokemon-type m-0', `Type: ${pokemon.type}`);
//   let itemWidth = createElement('span', 'pokemon-width', `Width: ${pokemon.weight}`);
//   let itemHeight = createElement('span', 'pokemon-height', `Height: ${pokemon.height}`);
//   let itemCandy = createElement('span', 'pokemon-candy', `Candy: ${pokemon.candy}`);
//   let itemCandyCount = createElement('span', 'pokemon-count', `Candy count: ${pokemon.candy_count}`);
//   let itemEgg = createElement('span', 'pokemon-egg', `Egg: ${pokemon.egg}`);
//   let itemSpawnChance = createElement('span', 'pokemon-chance', `Spawn chance: ${pokemon.spawn_chance}`);
//   let itemAvgSpavns = createElement('span', 'pokemon-avg', `Avg Spawns: ${pokemon.avg_spawns}`);
//   let itemSpawnTime = createElement('span', 'pokemon-time', `Spawns time: ${pokemon.spawn_time}`);
//   let itemMultipliers = createElement('span', 'pokemon-multipliers', `Multipliers: ${pokemon.multipliers}`);
//   let itemWeaknesses = createElement('span', 'pokemon-weaknesses', `Weaknesses: ${pokemon.weaknesses}`);
  
//   partItem.append(itemHeading, itemImg, itemType, itemWidth, itemHeight, itemCandy, itemCandyCount, itemEgg, itemSpawnChance, itemAvgSpavns, itemSpawnTime, itemMultipliers, itemWeaknesses);
//   elMainList.appendChild(partItem);
// }