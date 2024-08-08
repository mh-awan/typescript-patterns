/**
 * can also use 'type' here.
 * see difference in cheat-sheet folder
 */
export interface User {
    name: string,
    age: number,
    occupation: string,
}

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

/**
 * use destructuring pattern to log properties we want.
 * 
 * this is useful where the actual type might have several properties, but the function
 * might only care about a subset of those properties.
 */
export function logPerson({ name, age }: User) {
    console.log(` - ${name}, ${age}`);
}

console.log('Users:');
users.forEach(logPerson);

/**
 * pattern focus:
 * https://www.typescriptlang.org/docs/handbook/2/objects.html
 */
