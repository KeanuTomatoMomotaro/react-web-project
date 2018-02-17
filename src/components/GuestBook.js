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
    
    // const { guestBooks } = this.state

    // const GuestBookComponents = guestBooks.map((guestComment) => {
    //   return <GuestComment key = {guestComment.id} {...guestComment}/>;
    // })

    return (
      <div>
          <h1>Keanu's GuestBook</h1>
          {/* <ul>{GuestBookComponents}</ul> */}
          <GuestComments title = "My thoughts on Keanu" author = "Yeezy" content = "Keanu is handsome"/>
          <GuestComments title = "My experience with Keanu" author = "SunJing" content = "Keanu is reliable"/>
          <GuestComments title = "Where do I begin?" author = "Drake" content = "words cannot describe him"/>
      </div>
    );
  }
}

export default GuestBook;
