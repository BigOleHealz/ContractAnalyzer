import { testFeature } from './testFeature';

describe('Test Feature', () => {
  it('should log the correct message', () => {
    console.log = jest.fn();
    testFeature();
    expect(console.log).toHaveBeenCalledWith('Test feature is working');
  });
});

