import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            columnDefs:[
                {headerName:"ID", field:"id"},
                {headerName:"Name", field:"name"},
                {headerName:"Address", field:"addr"},
                {headerName:"Phone No", field:"num"},
                {headerName:"Role", field:"role"}
            ],
            rowData:[
                {id:"1",name:"rupika@gmail.com",addr:"abc",num:"123",role:"Admin"},
                {id:"1",name:"ra@gmail.com",addr:"abc",num:"123",role:"Admin"}

            ]
        }
       
        
    }
    handelAddRow=()=>{
        var newItem=this.state.rowData;
        newItem.push({id:"1",name:"rupika@gmail.com",addr:"abc",num:"123",role:"Admin"})
        this.setState({rowData:newItem});
        this.gridApi.setRowData(newItem);
    }
    onGridReady=params=>
    {
        this.gridApi=params.api;
        this.columnApi=params.columnApi;
    }
    render() {
        return (
            <div className="ag-theme-alpine" style={{height:'300px',width:'100%'}} >
                <AgGridReact 
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                onGridReady={this.onGridReady}>
                </AgGridReact>
                <button onClick={()=>this.handelAddRow()}>Add Row</button>
            </div>
        )
    }
}