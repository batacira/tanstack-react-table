import React from "react";
import {
    useReactTable,
    flexRender,
    getCoreRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./columns";
import "./table.css";
import dataJSON from "./MOCK_DATA.json";

const BasicTable = () => {
    const finalData = React.useMemo(() => dataJSON, []);
    const finalColumnDef = React.useMemo(() => columnDef, []);

    const tableInstance = useReactTable({
        columns: columnDef,
        data: dataJSON,
        getCoreRowModel: getCoreRowModel(),
    });

    console.log(tableInstance.getHeaderGroups(), 'headers');
    console.log(tableInstance.getRowModel().rows, 'rows');

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
