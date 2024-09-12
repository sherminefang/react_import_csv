"use client";
import { ImportCSV} from "./importCSV"
export default function Home() {
  return (
    <div className="container" style={{paddingBlockStart: "1rem", paddingBlockEnd: "200px"}}>
        <ImportCSV />
    </div>
  )  
}
