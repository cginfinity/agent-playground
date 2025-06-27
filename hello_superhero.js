import { randomSuperhero } from 'superheroes';

// Configuration constants
const NUMBER_OF_SUPERHEROES = 5;
const SEPARATOR = ' - ';

// Generate an array of random superhero names
const superheroes = Array.from({ length: NUMBER_OF_SUPERHEROES }, () => randomSuperhero());

// Display the superheroes separated by dashes
console.log(superheroes.join(SEPARATOR));