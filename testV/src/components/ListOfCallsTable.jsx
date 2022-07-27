import React from 'react';
import {Table} from "antd";

const ListOfCallsTable = ({data}) => {
    const columns = [{
        title: 'Name', dataIndex: 'name',
    }, {
        title: 'Status', dataIndex: 'status',
    }, {
            title: 'Date', dataIndex: 'date',
        },];

    return (<Table dataSource={data} columns={columns} pagination={false}/>);
};

export default ListOfCallsTable;
