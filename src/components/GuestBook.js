import React, { Component } from 'react';
import GuestComments from './GuestComments';
import WritingPad from './WritingPad';
import GuestBookStores from '../stores/GuestBookStores';
import * as GuestBookActions from '../actions/GuestBookActions';

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

  createComment(){
    GuestBookActions.createGuestComment(4, "Keanu", "Kelebihan Keanu", "Keanu multi talenta")
  }

  render() {
    
    const { guestComments } = this.state

    const GuestBookComponents = guestComments.map((guestComment) => {
      return <GuestComments key = {guestComment.id} {...guestComment}/>;
    })

    return (
      <div>
          <h1>Keanu's GuestBook</h1>
          {/* <button onClick = {this.createComment.bind(this)}>Create Comment</button> */}
          {GuestBookComponents}
          <WritingPad />
      </div>
    );
  }
}

export default GuestBook;
