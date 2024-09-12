import {describe, expect, test} from '@jest/globals';
import renderer from 'react-test-renderer';
import {ImportCSVReader} from './importCSVReader';

// eslint-disable-next-line no-undef
describe('CSVReader', () => {
  // eslint-disable-next-line no-undef
  it('should match snapshot', async function () {
    const handleUploadAccepted = jest.fn().mockImplementation();
    const tree = renderer
      .create(
        <ImportCSVReader
          onUploadAccepted={handleUploadAccepted}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

