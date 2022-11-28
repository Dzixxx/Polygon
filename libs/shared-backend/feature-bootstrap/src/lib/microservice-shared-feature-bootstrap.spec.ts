import { microserviceSharedFeatureBootstrap } from './microservice-shared-feature-bootstrap';

describe('microserviceSharedFeatureBootstrap', () => {
  it('should work', () => {
    expect(microserviceSharedFeatureBootstrap()).toEqual(
      'microservice-shared-feature-bootstrap'
    );
  });
});
