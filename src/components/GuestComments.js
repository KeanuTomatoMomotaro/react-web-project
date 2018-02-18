import React, { Component } from 'react';

class GuestComments extends Component {
  constructor(){
    super()
    this.state = {
        
    }
  }
  render() {
    
    return (
      <div>
            <table>
                <tr>
                    <td>Title: {this.props.title}</td>
                </tr>
                <tr>
                    <td>by : {this.props.author}</td>
                </tr>                    
                <tr>
                    <td>Content: {this.props.content}</td>
                </tr>
                <tr>
                    <td />
                </tr>
            </table>
      </div>
    );
  }
}

export default GuestComments;
