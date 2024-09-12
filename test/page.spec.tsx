import renderer from 'react-test-renderer';
//import { act, render, screen } from '@testing-library/react'
import {ImportCSVReader} from '../src/app/importCSVReader';

// eslint-disable-next-line no-undef
describe('CSVReader', () => {
  // eslint-disable-next-line no-undef
  it('able extract file', async function () {
    const handleUploadAccepted = jest.fn().mockImplementation();
    const tree = renderer.create(
        <ImportCSVReader
          onUploadAccepted={handleUploadAccepted} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

