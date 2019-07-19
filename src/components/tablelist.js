import React from 'react';

import { Table } from 'antd';

const columns = [
  {
    title: 'NAME',
    dataIndex: 'name',  
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'AGE',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'COUNTRY',
    dataIndex: 'country',
    sorter: (a, b) => a.country.length - b.country.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'CITY',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    country:'beijing',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    country:'beijing',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    country:'hongkong',
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    country:'tokyo',
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

const TableList = () => {
  return <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} />
}

export default TableList;