import { microserviceSharedFeatureContext } from './microservice-shared-feature-context';

describe('microserviceSharedFeatureContext', () => {
  it('should work', () => {
    expect(microserviceSharedFeatureContext()).toEqual(
      'microservice-shared-feature-context'
    );
  });
});
