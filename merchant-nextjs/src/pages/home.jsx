'use client'

import { useContext, useEffect, useMemo, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Theme, { ThemeContext } from "./theme";
import "../app/globals.css";  
// import "ag-grid-community/csv-export";


export default function Home() {

  const {theme} = useContext(ThemeContext);

  // console.log(contextValue);

    const [rowData, setRowData] = useState([]);
    // Mapping // cellComponents //resizng
    const [colDefs, setColDefs] = useState([
      { 
        field: "company",
        headerName: "Company Name",
        flex: 3,
        cellClass: 'my-class',
        headerTooltip: "This is the company name",
        headerClass: "custom-header-class",
        headerStyle: { backgroundColor: "lightblue", fontWeight: "bold" }, // Notworking
       },
      { field: "location",
        editable: true,
       // cellEditor: 'agPopupTextCellEditor',
        cellEditor: "agPopupSelectCellEditor",
        cellEditorParams: {
          values: ["Electronics", "Clothing", "Groceries"], // Dropdown values
        },
        flex: 3,
       },
       {
        headerName: "Demo",
        children:  [
          {
            field: "mission",
            columnGroupShow: "closed",
            colId: "Test-Id",
          },
          {
            field: "rocket",
            tooltipField: "company",
            columnGroupShow: "open",
           },
        ]
       },
       
       
       {
        field: "time",
        },
      { 
        // Textformatting
        field: "price",
       },
      { 
        field: "date",
        filter: "agDateColumnFilter", // Date filter
        flex: 1,
        editable: true,
       }
    ]);

  
// old value stored in memory (value not changed) => usememo
    const rowSelection = useMemo(() => { 
      return {
         mode: 'multiRow',
        //  mode: 'singleRow',
        //  checkboxes: false,`
         enableClickSelection: true
        };
    }, []);

    const pagination = true;
    const paginationPageSize = 5;
    const paginationPageSizeSelector = [2, 8, 15];

    useEffect(() => {
      fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
        .then(result => result.json()) // Convert to JSON
        .then(rowData => setRowData(rowData)); // Update state of `rowData`
     }, [])


     const defaultColDef = useMemo(() => ({
      filter: true, // Enable filtering on all columns
      lockPinned: true,
     }))

    const gridOptions = {
      onCellMouseOver: (event) => {
        if (event.column && event.value) {
          console.log(`Mouse entered cell: ${event.column.getColId()} with value: ${event.value}`);
        }
        if (event.event) {
          const cellElement = event.event.target; // The actual DOM element of the cell
          cellElement.style.backgroundColor = "#fff"; // Highlight the cell
        }
      },
      onCellMouseOut: (event) => {
        if (event.event) {
          const cellElement = event.event.target; // Reset the cell background
          cellElement.style.backgroundColor = "";
        }
      }
    };
    
  
  return (
    
    <>
     <div className={`ag-theme-quartz ${theme === "dark" ? "black" : "white"}`} style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} rowSelection={rowSelection}  pagination={pagination} paginationPageSize={paginationPageSize} defaultColDef={defaultColDef} paginationPageSizeSelector={paginationPageSizeSelector} gridOptions={gridOptions} debug /> 
    </div>

    </>
  );
}
