import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import React, {useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import Button from "react-bootstrap/Button";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { useCSVReader } from 'react-papaparse';

interface ImportCSVReaderProps {
  onUploadAccepted?: ((data: any, file?: any) => void) | undefined;
}

export const ImportCSVReader: React.FC<ImportCSVReaderProps> = (
  props: ImportCSVReaderProps
) => {
  const { CSVReader } = useCSVReader();
  const { onUploadAccepted } = props;
  const [array, setArray] = useState([]);

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
    <CSVReader
            onUploadAccepted={(results:any) => {
              setArray(results.data);
            }}
            accept='text/csv, .csv'
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
};

