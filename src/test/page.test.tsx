import React from 'react';
import { act, screen, render } from '@testing-library/react'
import {ImportCSVReader} from '../app/importCSVReader';
import Home from '../app/page';

describe('Render tests', () => {
    it('render correctly', () => {
        render(<Home/>);
        const headingElem = screen.getByRole('heading', { level: 1 });
        expect(headingElem).toBeInTheDocument();
    });

    it('render button correctly', () => {
        render(<Home/>);
        const buttonElem = screen.getByText('Browse file');
        expect(buttonElem).toBeInTheDocument();
    });

    it('render table correctly', () => {
        render(<Home/>);
        const tableElem = screen.getByRole('table');
        expect(tableElem).toBeInTheDocument();
    });

    it('render search correctly', () => {
        render(<Home/>);
        const searchElem = screen.getByPlaceholderText('Search');
        expect(searchElem).toBeInTheDocument();
    });

    it('render pagination correctly', () => {
        render(<Home/>);
        const paginationElem = screen.getByRole('menu');
        expect(paginationElem).toBeInTheDocument();
    });
});

describe('Render tests', () => {
    it('render correctly', () => {
        const handleUploadAccepted = jest.fn().mockImplementation();
        const tree = render(<ImportCSVReader onUploadAccepted={handleUploadAccepted} />)
        expect(tree).toMatchSnapshot();
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

