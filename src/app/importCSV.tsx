import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import React, {useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Button from "react-bootstrap/Button";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { useCSVReader } from 'react-papaparse';

export function ImportCSV() {
  const [array, setArray] = useState([]);
  const { CSVReader } = useCSVReader();
  const headerKeys = Object.keys(Object.assign({}, ...array));

  const { SearchBar } = Search;
  const columns = [
    {
      dataField: "postId",
      text: "Post ID",
    },
    {
      dataField: "id",
      text: "ID",
      sort: true
    },
    {
      dataField: "name",
      text: "Name",
      sort: true
    },
    {
      dataField: "email",
      text: "Email",
      sort: true
    },
    {
      dataField: "body",
      text: "Body"
    }
  ];

  return (
      <>
        <h1 style={{textAlign: "center", paddingBlock: "1rem"}}>CSV IMPORT</h1>
          <CSVReader
            onUploadAccepted={(results:any) => {
              setArray(results.data);
            }}
            config={{
              header: true,
              dynamicTyping: true,
              skipEmptyLines: true,
            }}>
          {({
            getRootProps,
            acceptedFile,
            ProgressBar
          }: any) => (
            <>
              <Button  {...getRootProps()} style={{marginBlockEnd:"1rem"}} >
                  Browse file
                </Button>
                  {acceptedFile && acceptedFile.name}
                  <ProgressBar animated />
                  </>
                )}
          </CSVReader>     
          <ToolkitProvider
            keyField="id"
            data={ array }
            columns={ columns }
            search>
            {
              props => (
                <div>
                  <SearchBar { ...props.searchProps } />
                  <hr />
                  <BootstrapTable
                  bootstrap4
                  filter={ filterFactory() }
                  pagination={paginationFactory({ sizePerPage: 5 })}
                  { ...props.baseProps }
                />
                </div>
              )
            }
          </ToolkitProvider>
      </>
  );
}
