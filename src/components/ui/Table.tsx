import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import PageNavigator from "./PageNavigator";
import SearchBar from "./SearchBar";

const Component = styled.div`
    background-color: #f2f0fa;
    padding: 0.5rem;

    .table__pre-append {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    .table {
        width: 100%;
        background-color: #ffffff;
        border-radius: 0.25rem;

        .table__filters {
            display: flex;
            justify-content: space-between;
            border-bottom: 2px solid #e7e5e5;
            padding: 0.5rem;
        }

        .table__table-header {
            border-bottom: 2px solid #e7e5e5;
            padding: 0.5rem;
        }

        .table__no-data {
            padding: 1rem 0;
            text-align: center;
        }

        table {
            border-spacing: 0px;
            width: 100%;

            th {
                text-align: left;
                border-bottom: 2px solid #e7e5e5;
            }

            td, th {
                padding: 0.25rem;
            }

            tbody {
                tr {
                    cursor: pointer;
                    &:hover {
                        background-color: #777188;
                        color: #dfdede;
                    }
                }
            }
        }
    }
`;

// TODO: Move in models
interface TableHeaderInfo {
    key: string;
    label?: string;
    parseFunction?: (value: any) => string;
}

interface TableProps {
    title: string;
    pageInfo?: any;
    filters?: ReactNode;
    headers: TableHeaderInfo[];
    items: any;
    onRowClick: (item: any) => void;
    onSearch: (term: string) => void;
    onPageChange?: (pageInfo: any) => void;
}

const Table: FunctionComponent<TableProps> = ({ title, pageInfo, filters, headers, items, onRowClick, onSearch, onPageChange }) => {

    const handleRowClick = (id: string) => onRowClick(id);
    const handleSearch = (term: string) => onSearch(term);
    const handlePageChange = (page: any) => {
        if (onPageChange) {
            onPageChange({ pageSize: page.pageSize, pageNumber: page.pageNumber });
        }
    };

    const parseRow = (item: any, index: number) => (headers
        .map((header: TableHeaderInfo) => ({ key: `${index}-${header.key}`, item, value: header.parseFunction ? header.parseFunction(item[header.key]) : String(item[header.key]) }))
        .map(row => <td className="item-row" key={row.key} onClick={handleRowClick.bind(this, row.item.id)}>{row.value}</td>));

    const emptyTable = (<div className="table__no-data">No Data</div>);


    return (
        <Component>
            <div className="table__pre-append">
                <div>
                    <strong>{title}</strong>
                </div>
                {pageInfo && <PageNavigator {...pageInfo} onPageChange={handlePageChange} />}
            </div>
            <div className="table">
                <div className="table__filters">
                    <div>
                        {filters}
                    </div>
                    <div>
                        <SearchBar placeHolder="Search by code" onSearch={handleSearch} />
                    </div>
                </div>
                {items.length === 0
                    ? emptyTable
                    : (
                        <div className="table__body">
                            <table>
                                <thead className="table__table-header">
                                    <tr>
                                        {headers.map(header => (<th key={header.key}>{header.label ?? header.key}</th>))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item: any, index: number) => (<tr key={index}>{parseRow(item, index)}</tr>))}
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </div>
        </Component>
    )
}

export default Table;