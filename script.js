/**
 * Exercice : Mini Pokédex
 * @author Steve Fallet <steve.fallet@dvitec.ch>
 * @since 2024-09-01
 */

'use strict';

// Couleur par défaut pour les types de Pokémon non définis
const DEFAULT_COLOR = '#ccc';

// Couleurs pour chaque type de Pokémon
const typeColors = {
    'Électrique': '#FFD700',
    'Plante': '#78C850',
    'Poison': '#A040A0',
    'Feu': '#F08030',
    'Eau': '#6890F0',
    'Normal': '#A8A878',
    'Fée': '#EE99AC',
    'Spectre': '#705898',
    'Combat': '#C03028',
    'Vol': '#A890F0',
    'Glace': '#98D8D8',
    'Roche': '#B8A038',
    'Sol': '#E0C068',
    'Psy': '#F85888'
};

// Tableau d'objets représentant les Pokémon
const pokemonsTab = [
    { name: 'Pikachu', type: 'Électrique', level: 35, img: 'pikachu.png' },
    { name: 'Bulbizarre', type: 'Plante,Poison', level: 15, img: 'bulbizarre.png' },
    { name: 'Salamèche', type: 'Feu', level: 20, img: 'salameche.png' },
    { name: 'Carapuce', type: 'Eau', level: 10, img: 'carapuce.png' },
    { name: 'Rondoudou', type: 'Normal,Fée', level: 25, img: 'rondoudou.png' },
    { name: 'Ectoplasma', type: 'Spectre,Poison', level: 45, img: 'ectoplasma.png' },
    { name: 'Évoli', type: 'Normal,Combat', level: 22, img: 'evoli.png' },
    { name: 'Dracaufeu', type: 'Feu,Vol', level: 50, img: 'dracaufeu.png' },
    { name: 'Florizarre', type: 'Plante,Poison', level: 55, img: 'florizarre.png' },
    { name: 'Tortank', type: 'Eau', level: 52, img: 'tortank.png' },
    { name: 'Mélofée', type: 'Fée', level: 18, img: 'melofee.png' },
    { name: 'Raichu', type: 'Électrique', level: 40, img: 'raichu.png' },
    { name: 'Magicarpe', type: 'Eau', level: 5, img: 'magicarpe.png' },
    { name: 'Lokhlass', type: 'Eau,Glace', level: 35, img: 'lokhlass.png' },
    { name: 'Onix', type: 'Roche,Sol', level: 30, img: 'onix.png' },
    { name: 'Ronflex', type: 'Normal', level: 45, img: 'ronflex.png' },
    { name: 'Mewtwo', type: 'Psy', level: 70, img: 'mewtwo.png' }
];

/**
 * Fonction qui retourne le code HTML de la carte du pokémon passé en paramètre
 * @param pokemon { name: 'Mewtwo', type: 'Psy', level: 70, img: 'mewtwo.png' } un objet Pokémon
 */
function generatePokemonCardHTML(pokemon){
    let tabType = pokemon.type.split(',');
    let type1 = tabType[0];
    let type2 = tabType[1];
    let bgColor = typeColors[type1];

    // Si un deuxième type existe
    if(type2) {
        bgColor = `linear-gradient(to right, #78C850 50%, #A040A0 50%);`;
    }





    return `<div class="pokemon-card"
                 style="background: ${bgColor};"
            >
                <img src="images/${pokemon.img}" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
                <div>Type: ${pokemon.type.replace(',', ' / ')}</div>
                <div>Niveau: ${pokemon.level}</div>
            </div>`;
}

/**
 * Affiche le nom des pokémons dans la <div class="pokemon-container">
 */
function displayPokemons () {
    // Récupération de l'élément HTML <div class="pokemon-container">
    const divContainer = document.querySelector('.pokemon-container');
    // Vide le contenu du container
    divContainer.innerHTML = '';
    // Si tableau est vide, si la taille est de 0
    if(!pokemonsTab.length) {
        divContainer.innerHTML = "<p>Dracaufeu a tout brûlé, aucun Pokémon ne correspond à ta recherche !</p>";
        return; // Sort de la fonction
    }
    let resHTML = '';
    // Pour chaque pokémon du tableau pokemons
    for (let pokemon of pokemonsTab) {
        resHTML += generatePokemonCardHTML(pokemon);
    }
    // Ajoute les cartes au container
    divContainer.innerHTML = resHTML;
}

// Appelle la fonction displayPokemons()
displayPokemons();
