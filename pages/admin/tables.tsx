import { table } from "console";
import { NextPage } from "next";
import React, { useState } from "react";
import { MouseEventHandler } from "react";


const Tables: NextPage = () => {
    const [tables, setTables] = useState([]);
    const [newTable, setNewTable] = useState('');
    function addPage(event: any): undefined {
        setTables((tables) => [...tables, newTable]);
        setNewTable((newTable) => '');
        event.preventDefault();
        return undefined;
    }

    function handleUpdate(event) {
        setNewTable((newTable) => {
            newTable = event.target.value;
            return newTable;
        })
    }

    return (
        <>
            <form onSubmit={addPage}>
                <input type='text' id='test' value={newTable} onChange={handleUpdate} />
                <br />
                <button type='submit'>test</button>
            </form>

            <ul>
                {(tables || []).map((table) => (
                    <li>{table}</li>
                ))}
            </ul>
        </>
    )
}

export default Tables;


