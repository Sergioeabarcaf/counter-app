// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import Heroes from '../data/heroes';


// console.log( owners );


export const getHeroeById = (id) => Heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => Heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );


