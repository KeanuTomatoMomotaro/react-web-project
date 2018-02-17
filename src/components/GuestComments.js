import React, { Component } from 'react';

class GuestComments extends Component {
  constructor(){
    super()
    this.state = {
    //   guestComments: [
    //     {
    //       id : 1,
    //       author : "Yeezy",
    //       title : "My thoughts on Keanu",
    //       content : "Keanu is handsome"
    //     },
    //     {
    //       id : 2,
    //       author : "Bobby",
    //       title : "My experience with Keanu",
    //       content : "Keanu is reliable"
    //     },
    //     {
    //       id : 3,
    //       author : "Sun jing",
    //       title : "Where do i begin?",
    //       content : "Words cannnot describe him"
    //     },
    //   ]
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
