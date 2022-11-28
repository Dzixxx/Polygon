import { b } from '@polygon/microservice-b';

export const sharedBootstrap = () => {
    console.log('Welcome from shared bootstrap', b);
}