import { b } from '@polygon/microservice-b';
import { name } from '@polygon/api-interfaces';

console.log('Hello World from Mircoservice-A!');
console.log('Loaded deps from b:', b);
console.log('Loaded deps from api-interfaces', name)
