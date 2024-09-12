"use client";
//import { ImportCSV} from "./importCSV"
import { ImportCSVReader } from "./importCSVReader";
export default function Home() {
  return (
    <div className="container" style={{paddingBlockStart: "1rem", paddingBlockEnd: "200px"}}>
        <h1 style={{textAlign: "center", paddingBlock: "1rem"}}>CSV IMPORT</h1>
       {/* <ImportCSV /> */}
       <ImportCSVReader />
    </div>
  )  
}
