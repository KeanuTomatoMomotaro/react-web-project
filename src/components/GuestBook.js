import React, { Component } from 'react';
import GuestComments from './GuestComments';
import WritingPad from './WritingPad';
import GuestBookStores from '../stores/GuestBookStores';

class GuestBook extends Component {
  constructor(){
    super()
    this.state = {
      guestComments: GuestBookStores.getAllGuestComments()
    }
  }

  componentWillMount(){
    GuestBookStores.on("change", () => {
      this.setState({
        guestComments: GuestBookStores.getAllGuestComments()
      })
    })
  }

  render() {
    
    const { guestComments } = this.state

    const GuestBookComponents = guestComments.map((guestComment) => {
      return <GuestComments key = {guestComment.id} {...guestComment}/>;
    })

    return (
      <div>
          <h1>Keanu's GuestBook</h1>
          <h3>See what other people are saying about Keanu!</h3>
          {GuestBookComponents}
          <WritingPad />
      </div>
    );
  }
}

export default GuestBook;
