import React from 'react'
import MaterialTable from 'material-table';


export const Table = () => {
    const data = [{ name: "XYZ", age: 24 },
    { name: "ABC", age: 27 },
    { name: "PQR", age: 29 }]

    const columns = [
        { title: "Name", field: "name" },
        { title: "Age", field: "age" }

    ]
    return (
        <div>
            <h2>Table</h2>
            <MaterialTable title=" Material Table"
                data={data}
                columns={columns} />
        </div>
    )
}
