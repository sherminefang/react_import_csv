"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import React from 'react';
import { ImportCSVReader } from "./importCSVReader";

export default function Home() {
  return (
    <div data-testid="container" className="container" style={{paddingBlockStart: "1rem", paddingBlockEnd: "200px"}}>
        <h1 style={{textAlign: "center", paddingBlock: "1rem"}}>CSV IMPORT</h1>
       <ImportCSVReader />
    </div>
  )  
}
