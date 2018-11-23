import React, { Component } from 'react';
import './customers.css';

class Tumbuhan extends Component{
    constructor() {
        super();
        this.state = {
          data: []
        };
      }
    
      componentDidMount() {
        fetch('/api/tumbuhan/',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({offset:0,limit:5})
        })
        .then(result => {return result.json()})
        .then(data => {
            this.setState(data)
        })
      }
    
      render() {
        return (
          <div>
            <h2>Tumbuhan</h2>
            <ul>
            {this.state.data.map((item,i) =>
                <li key={item.id}>{item.nama} {item.latin}</li>
             )
            }
            {JSON.stringify({numberOfRows:this.state.totalRows})}
            </ul>
            
          </div>
        );
      }
}
export default Tumbuhan;
