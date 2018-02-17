import React, { Component } from 'react';
import guestComments from './GuestComments';
import GuestComments from './GuestComments';


class GuestBook extends Component {
  constructor(){
    super()
    this.state = {
      guestComments: [
        {
          id : 1,
          author : "Yeezy",
          title : "My thoughts on Keanu",
          content : "Keanu is handsome"
        },
        {
          id : 2,
          author : "Bobby",
          title : "My experience with Keanu",
          content : "Keanu is reliable"
        },
        {
          id : 3,
          author : "Sun jing",
          title : "Where do i begin?",
          content : "Words cannnot describe him"
        },
      ]
    }
  }
  render() {
    
    const { guestComments } = this.state

    const GuestBookComponents = guestComments.map((guestComment) => {
      return <GuestComments key = {guestComment.id} {...guestComment}/>;
    })

    return (
      <div>
          <h1>Keanu's GuestBook</h1>
          {GuestBookComponents}
      </div>
    );
  }
}

export default GuestBook;