import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "../css/products.css";
import { FaPlus, FaSearch } from "react-icons/fa";
import Sidebar from "./sidebar";
import Topbar from "./topbar";


export default function Products() {
  const [editableRowIds, setEditableRowIds] = useState([]);

  // Mark a row as editable
  const markRowAsEditable = (rowId) => {
    setEditableRowIds((prev) => [...prev, rowId]);
  };

  // Unmark a row as editable
  const unmarkRowAsEditable = (rowId) => {
    setEditableRowIds((prev) => prev.filter((id) => id !== rowId));
  };

  // Custom Cell Renderer
  const actionCellRenderer = (params) => {
    const {
      editable,
      onClickAcceptButton,
      onClickCancelButton,
      onClickEditButton,
      onClickDeleteButton,
      onClickViewButton,
    } = params;

    return (
      <div className="flex space-x-2">
        {editable(params.data) ? (
          <>
            <button
              className="action-buttons"
              onClick={() => onClickAcceptButton(params.data)}
            >
              <img src="/assets/tick.png" alt="Save" className="w-6 h-6" />
            </button>
            <button
              className="action-buttons"
              onClick={() => onClickCancelButton(params.data)}
            >
              <img src="/assets/cancel.png" alt="Cancel" className="w-6 h-6" />
            </button>
          </>
        ) : (
          <button
            className="action-buttons"
            onClick={() => onClickEditButton(params.data)}
          >
            <img src="/edit.png" alt="Edit" className="w-6 h-6" />
          </button>
        )}
        <button
          className="action-buttons"
          onClick={() => onClickDeleteButton(params.data)}
        >
          <img src="/delete.png" alt="Delete" className="w-6 h-6" />
        </button>
        <button
          className="action-buttons"
          onClick={() => onClickViewButton(params.data)}
        >
          <img src="/view.png" alt="View" className="w-6 h-6" />
        </button>
      </div>
    );
  };

  // Row Data
  const [rowData] = useState([
    { id: "001", name: "Barramundi", rate: 10, measurement: "Per kg", unit: 12 },
    { id: "002", name: "Snapper", rate: 15, measurement: "Per kg", unit: 8 },
    { id: "003", name: "Tuna", rate: 20, measurement: "Per kg", unit: 10 },
  ]);

  // Column Definitions
  const columnDefs = useMemo(
    () => [
      { headerName: "Product ID", field: "id", editable: false },
      {
        headerName: "Name",
        field: "name",
        editable: (params) => editableRowIds.includes(params.node.data.id),
        cellClass: (params) =>
          editableRowIds.includes(params.node.data.id) ? "editable-cell" : "",
      },
      {
        headerName: "Rate",
        field: "rate",
        editable: (params) => editableRowIds.includes(params.node.data.id),
        cellClass: (params) =>
          editableRowIds.includes(params.node.data.id) ? "editable-cell" : "",
      },
      {
        headerName: "Measurement",
        field: "measurement",
        editable: (params) => editableRowIds.includes(params.node.data.id),
        cellClass: (params) =>
          editableRowIds.includes(params.node.data.id) ? "editable-cell" : "",
      },
      {
        headerName: "Unit",
        field: "unit",
        editable: (params) => editableRowIds.includes(params.node.data.id),
        cellClass: (params) =>
          editableRowIds.includes(params.node.data.id) ? "editable-cell" : "",
      },
      {
        headerName: "Actions",
        field: "id",
        cellRenderer: actionCellRenderer,
        cellRendererParams: {
          editable: (data) => editableRowIds.includes(data.id),
          onClickAcceptButton: (data) => unmarkRowAsEditable(data.id),
          onClickCancelButton: (data) => unmarkRowAsEditable(data.id),
          onClickEditButton: (data) => markRowAsEditable(data.id),
          onClickDeleteButton: (data) => console.log("Delete action:", data),
          onClickViewButton: (data) => console.log("View action:", data),
        },
      },
    ],
    [editableRowIds]
  );

  // Default Column Definition
  const defaultColDef = useMemo(
    () => ({
      filter: false,
      sortable: true,
      resizable: true,
    }),
    []
  );

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
  };

  return (
    <>
      <div className="flex font-jakarta">
        <Sidebar />
        <div className="h-screen flex-1 flex flex-col">
          <Topbar />
           {/* Top Bar */}
                 
          {/* Page Content */}
          <div className="p-3">
            <h1 className="text-2xl font-semibold text-light-blue text-center p-3">
              All Products
            </h1>

            {/* Search Bar */}
            <div className="flex justify-center mb-4">
              <div className="flex items-center w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-light-blue">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full outline-none"
                />
                <FaSearch className="text-gray-500 cursor-pointer" />
              </div>
            </div>
            <div className="ag-theme-quartz text-center font-jakarta">
              <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                domLayout="autoHeight"
                onGridReady={onGridReady}
              />
            </div>
            {/* Floating Add Button */}
            <button
              className="fixed bottom-8 right-8 bg-light-blue hover:bg-blue-500 text-white font-bold p-4 rounded-full shadow-lg flex items-center"
              onClick={() => alert("Add Product clicked")}
            >
              <FaPlus className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
