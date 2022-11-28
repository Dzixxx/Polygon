import { b } from '@polygon/microservice-b';
import { sharedBootstrap } from '@polygon/shared-backend/feature-bootstrap';

console.log('Hello World from Mircoservice-A!');
console.log('Loaded deps from b:', b);

sharedBootstrap();
