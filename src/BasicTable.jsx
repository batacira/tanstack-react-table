import React from "react";
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { columnDef } from "./columns";
import "./table.css";
import dataJSON from "./db.json";
import axios from 'axios'

const BasicTable = () => {

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users');
            return response.data;  // Axios automatski parsira JSON odgovor
        } catch (error) {
            // Rukovanje greškom
            throw new Error('Network response was not ok: ' + error.message);
        }
    };
    const { data: users, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers, // funkcija za dohvatanje podataka
    });
    console.log(users);

    const finalColumnDef = React.useMemo(() => columnDef, []);
    const finalData = React.useMemo(() => users, [users]);

    const tableInstance = useReactTable({
        columns: finalColumnDef,
        data: finalData || [],
        getCoreRowModel: getCoreRowModel(),
    });


    console.log(tableInstance);
    console.log(tableInstance.getHeaderGroups(), 'headers');
    console.log(tableInstance.getRowModel().rows, 'rows');

    if (isLoading) {
        return <div>Loading...</div>; // Dodajte return ovde
    }

    // Ako je došlo do greške, možete dodati i ovo
    if (error) {
        return <div>Error loading data: {error.message}</div>;
    }

    return (
        <table>
            <thead>
                {tableInstance.getHeaderGroups().map((headerEl) => {
                    return (
                        <tr key={headerEl.id}>
                            {headerEl.headers.map((columnEl) => {
                                return (
                                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                                        {flexRender(
                                            columnEl.column.columnDef.header,
                                            columnEl.getContext()
                                        )}
                                    </th>
                                );
                            })}
                        </tr>
                    );
                })}
            </thead>
            <tbody>
                {tableInstance.getRowModel().rows.map((rowEl) => {
                    return (
                        <tr key={rowEl.id}>
                            {rowEl.getVisibleCells().map((cellEl) => {
                                return (
                                    <td key={cellEl.id}>
                                        {flexRender(
                                            cellEl.column.columnDef.cell,
                                            cellEl.getContext()
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default BasicTable;
