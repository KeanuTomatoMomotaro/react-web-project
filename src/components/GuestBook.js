import React, { Component } from 'react';
import GuestComments from './GuestComments';
import WritingPad from './WritingPad';
import GuestBookStores from '../stores/GuestBookStores';

class GuestBook extends Component {
  constructor(){
    super()
    this.state = {
      // guestComments: GuestBookStores.getAllGuestComments()
      guestComments: []
    }
  }

  componentWillMount(){
    fetch("http://localhost:8000/get-all-guest-comments")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              guestComments: result
            })
          },
          (error) => {
            console.log(error)
          }
        )
  }

  render() {
    
    console.log(this.state.guestComments)
    const { guestComments } = this.state

    const GuestBookComponents = guestComments.map((guestComment) => {
      return <GuestComments key = {guestComment.id} title = {guestComment.comment_title} author = {guestComment.comment_author} content = {guestComment.comment_content}/>;
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
