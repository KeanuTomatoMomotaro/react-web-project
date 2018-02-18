import React, { Component } from 'react';
import * as GuestBookActions from '../actions/GuestBookActions';


class GuestComments extends Component {
  constructor(){
    super()
    this.state = {
        
    }
  }

  deleteComment(id){
    GuestBookActions.deleteGuestComment(id)
  }

  render() {
    
    return (
      <div>
            <table>
                <tbody>
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
                        <td><button onClick = {(id)=>this.deleteComment(this.props.id)}>delete</button></td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
  }
}

export default GuestComments;
