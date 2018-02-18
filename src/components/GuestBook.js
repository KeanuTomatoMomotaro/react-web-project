import React, { Component } from 'react';
import GuestComments from './GuestComments';
import GuestBookStores from '../stores/GuestBookStores';


class GuestBook extends Component {
  constructor(){
    super()
    this.state = {
      guestComments: GuestBookStores.getAllGuestComments()
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
