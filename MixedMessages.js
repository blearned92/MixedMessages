pokemonArr = [
    [
      "Pikachu",
      "Eevee",
      "Clafairy",
      "Bulbasaur",
      "Charmander",
      "Squirtle",
      "Meowth",
      "Pidgy",
      "Rattata",
      "Leafeon",
      "Nidoran",
      "Mankey",
      "Totodile",
      "Cyndaquil",
      "Chikorita",
      "Hoothoot",
      "Bidoof",
      "Diglett",
      "Gengar",
      "Slowpoke"
    ],
    [
      "Tackle",
      "Scratch",
      "Bite",
      "Swift",
      "Headbutt",
      "Skull Bash",
      "Crunch", 
      "Fury Swipes",
      "Quick Attack",
      "Slash",
      "Lick",
      "Double Kick"
    ],
    [
    "It's super effective!", 
    "It hurt itself in confusion.", 
    "It's fast asleep.", 
    "It's paralyzed and can't move!", 
    "It's not very affective!",
    "It's frozen solid!"],
    ];
  
  const generateRandomNumber = (num) => {
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
  };
  
  const generatePokemon = () => {
    const num = generateRandomNumber(pokemonArr[0].length);
    const pokemon = pokemonArr[0][num];
    return pokemon;
  };
  
  const generateAttack = () => {
    const num = generateRandomNumber(pokemonArr[1].length);
    const attack = pokemonArr[1][num];
    return attack;
  };
  
  const generateOutcome = () => {
    const num = generateRandomNumber(pokemonArr[2].length);
    const outcome = pokemonArr[2][num];
    return outcome;
  };
  
  const createOutput1 = (pokemon, attack, outcome) => {
    const output1 = `${pokemon} used ${attack}! ${outcome}`;
    return output1;
  };

  const createOutput2 = pokemon => {
    const output2 = `What will ${pokemon} do?`;
    return output2;
  };
  
  const displayMessage = (output1, output2) => {
    console.log(output2);
    console.log(output1);
  };
  
  const init = () => {
    const pokemon = generatePokemon();
    const attack = generateAttack();
    const outcome = generateOutcome();
    const output1 = createOutput1(pokemon, attack, outcome);
    const output2 = createOutput2(pokemon)
    displayMessage(output1, output2);
  };
  
  init();

  