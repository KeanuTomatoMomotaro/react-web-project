import React, { Component } from 'react';
import * as GuestBookActions from '../actions/GuestBookActions';
import uuid4 from 'uuid/v4'

class WritingPad extends Component {
  constructor(){
    super()
    this.state = {
        author_name : "",
        comment_title : "",
        comment_content : "",
    }
  }

  postComment(){
    var id = uuid4() // generate random using uuid4
    var author = this.state.author_name
    var title = this.state.comment_title
    var content = this.state.comment_content

    GuestBookActions.createGuestComment(id, author, title, content)
  }

  render() {
    
    return (
      <div>
          <h1>Write New Comment Here </h1>
          <form>
              <label htmlFor = "author_name">Author Name: </label>
              <input type="text" name = "authorName" id = "author_name" onChange = {(event) => this.setState({author_name : event.target.value})}/><br/>
              <label htmlFor = "comment_title">Comment Title: </label>              
              <input type="text" name = "commentTitle" id = "comment_title" onChange = {(event) => this.setState({comment_title : event.target.value})}/><br/>
              <label htmlFor = "comment_content">Comments: </label><br/>              
              <textarea name = "commentContent" id = "comment_content" onChange = {(event) => this.setState({comment_content : event.target.value})}/><br />
          </form>
          <button onClick = {() => this.postComment()}>Post New Comment</button>
      </div>
    );
  }
}

export default WritingPad;
