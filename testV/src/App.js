import './App.css';
import ListOfCallsTable from "./components/ListOfCallsTable";
import {useMemo, useState} from "react";
import {Input, Select} from 'antd';
import Chart from "./components/Chart";


const {Option} = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function App() {
  const items = [{
    id: 1,
    name: "Leanne Graham",
    status: "Missed",
    date: "01/07/2022"
  },
    {
      id: 2,
      name: "Ervin Howell",
      status: "Incoming",
      date: "03/07/2022"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      status: "Missed",
      date: "05/07/2022"
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      status: "Outgoing",
      date: "11/07/2022"
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      status: "Outgoing",
      date: "10/07/2022"
    },
    {
      id: 6,
      name: "Dennis Schulist",
      status: "Incoming",
      date: "03/07/2022"
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      status: "Outgoing",
      date: "02/07/2022"
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir",
      status: "Missed",
      date: "08/07/2022"
    },
    {
      id: 9,
      name: "Glenna Reichert",
      status: "Missed",
      date: "07/07/2022"
    },
  ];

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedItems = useMemo(() => {
    if (selectedSort) {
      return [...items].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return items;
  }, [selectedSort, items])

  const sortItems = (sort) => {
    setSelectedSort(sort);
  }

  const sortedAndFilteredItems = useMemo(() => {
    return sortedItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase())
        || item.date.toLowerCase().includes(searchQuery.toLowerCase())
        || item.status.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedItems])


  return (
      <div className="App">
        <Input placeholder="Search" size='large' value={searchQuery}
               onChange={e => setSearchQuery(e.target.value)}
               width='fit-content'/>
        <Select
            value={selectedSort}
            onChange={sortItems}
            size='large'
            dropdownMatchSelectWidth='false'>
          <Option disabled value=''>Sorting</Option>
          <Option value="status">Status</Option>
          <Option value="date">Date</Option>
          <Option value="name">Name</Option>
        </Select>

        <ListOfCallsTable data={sortedAndFilteredItems}/>
        <Chart data={sortedAndFilteredItems}/>
      </div>
  );
}

export default App;
