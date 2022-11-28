import { microserviceSharedFeatureLogger } from './microservice-shared-feature-logger';

describe('microserviceSharedFeatureLogger', () => {
  it('should work', () => {
    expect(microserviceSharedFeatureLogger()).toEqual(
      'microservice-shared-feature-logger'
    );
  });
});
