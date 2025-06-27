import { randomSuperhero } from 'superheroes';

const superheroes = Array.from({ length: 5 }, () => randomSuperhero());
console.log(superheroes.join(' - '));