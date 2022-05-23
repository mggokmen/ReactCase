import React from 'react'
import Datatable  from  'react-laravel-datatable'

function ListLeads(){

    const columns=[
        {
            id: 'id',
            label: 'id',
        },
        {
            id: 'full_name',
            label: 'full_name',
        },
        {
            id: 'email',
            label: 'email',
        },
        {
            id: 'phone',
            label: 'phone',
        },
        {
            id: 'referer',
            label: 'referer',
        },
    ]

    const dataSource = "http://localhost:8000/api/list"

    const myHeaders =  {
        "Content-Type" : 'application/json',
    }

    return(
        <div id="listDiv">
            <h2 className="testHead2">List Leads Page</h2>
            <Datatable url={dataSource} columns={columns} headers={myHeaders} />
        </div>
    )
}

export default ListLeads