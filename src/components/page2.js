import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { useHistory } from 'react-router-dom';

const history = useHistory();

const getUsersData = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(res.data)
    this.setState({loading:false, data: res.data})
  }

  
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
  }

  const pie = () => {
    return(
      <Paper>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title
            text="User Details"
          />
          <Animation />
        </Chart>
      </Paper>
    );
    
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <div>
      <Button variant="contained" color="primary" href="#contained-buttons" onClick={() => { history.push('/App.js') }}
      style={{ marginLeft: '10px', marginTop: '30px', float: 'left'}}>
      Go to Page 1
     </Button>
      
     <Button variant="contained" color="primary" href="#contained-buttons" onClick={pie}
      style={{ marginLeft: '10px', marginTop: '30px', float: 'left'}}>
      Go to Page 1
     </Button>
      </div>
    );
  }
}
