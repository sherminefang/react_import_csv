import React from 'react';
import { act, screen, render } from '@testing-library/react'
//import {ImportCSVReader} from '../app/importCSVReader';
import Home from '../app/page';

describe('Home tests', () => {
    it('render correctly', () => {
        render(<Home/>);
        const headingElem = screen.getByRole('heading', { level: 1 });
        expect(headingElem).toBeInTheDocument()

        const buttonElem = screen.getByRole('button');
        expect(buttonElem).toBeInTheDocument()


    });
});

// describe('Component tests', () => {
//     const handleUploadAccepted = jest.fn().mockImplementation();
//     const tree = render(<ImportCSVReader onUploadAccepted={handleUploadAccepted}/>)

//     // it('should contains the button', () => {
//     //     expect(tree('btn')).toBeInTheDocument();
//     // });

//     it("should have", () => {
//         expect(tree).toMatchSnapshot();
//     });
// });



// import Home from '../app/page';

// test('renders learn react link', () => {
//     render(<Home />);

//     const linkElement = screen.getByText(/learn react/i);
  
//     expect(linkElement).toBeInTheDocument();
  
//   });

// // // eslint-disable-next-line no-undef
// // describe('CSVReader', () => {
// //   // eslint-disable-next-line no-undef
// //   it('able extract file', async function () {
// //     const handleUploadAccepted = jest.fn().mockImplementation();
// //     const tree = renderer.create(
// //         <ImportCSVReader
// //           onUploadAccepted={handleUploadAccepted} />
// //       )
// //       .toJSON();
// //     expect(tree).toMatchSnapshot();
// //   });
// // });

