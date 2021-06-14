import React, { Component } from 'react'
// import { useHistory } from "react-router-dom";
import axios from 'axios'
import ReactTable from "react-table"; 
import Button from '@material-ui/core/Button'
import Styles from './table.css'
// const history= useHistory();
export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'ID',  
      accessor: 'id',
     }
     ,{  
      Header: 'Name',  
      accessor: 'name' ,
      Cell: (row) => {
        return <h4>{row.original.name}</h4>
      }
      }
     
     ,{  
     Header: 'Username',  
     accessor: 'username' ,
     }
     ,{  
     Header: 'Phone',  
     accessor: 'phone',
     },
     {  
      Header: 'Email',  
      accessor: 'email',
      Cell: (row) => {
        return <a href={`mail.to:${row.original.email}`}>{row.original.name}</a>
      }
      },
      {  
        Header: 'Website',  
        accessor: 'website',
        }
  ]
    return (
      <div>
        <Button variant="contained" color="primary" href="#contained-buttons"
      style={{ marginLeft: '10px', marginTop: '30px', float: 'left'}}>
      Go to Page 2
     </Button>
     <Button variant="contained" color="primary" href="#contained-buttons"
     style={{ marginLeft: '590px', marginTop: '38px',marginBottom: '44px'}}>
      Show User Details
     </Button>
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
      </div>
      
    )
  }
}

