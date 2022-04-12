import { Component } from 'react';
import nextId from "react-id-generator";
import { setPrefix } from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Петр И.', salary: 700, increase: false, id: +nextId()},
                {name: 'Юлия H.', salary: 3000, increase: true, id: +nextId()},
                {name: 'Алиса Г.', salary: 2000, increase: true, id: +nextId()},
            ]
        }        
        setPrefix("");
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
                name,
                salary,
                increase: false,
                id: +nextId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
    )
    }
}

export default App;