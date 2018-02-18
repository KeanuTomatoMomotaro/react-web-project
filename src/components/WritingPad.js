import React, { Component } from 'react';
import * as GuestBookActions from '../actions/GuestBookActions';
import uuid4 from 'uuid/v4'

class WritingPad extends Component {
  constructor(){
    super()
    this.state = {
        
    }
  }

  postComment(){
    var id = uuid4() // generate random using uuid4
    var author = document.getElementById("author_name").value
    var title = document.getElementById("comment_title").value
    var content = document.getElementById("comment_content").value

    GuestBookActions.createGuestComment(id, author, title, content)
  }

  render() {
    
    return (
      <div>
          <h1>Write New Comment Here </h1>
          <form>
              <label htmlFor = "author_name">Author Name: </label>
              <input type="text" name = "authorName" id = "author_name"/><br/>
              <label htmlFor = "comment_title">Comment Title: </label>              
              <input type="text" name = "commentTitle" id = "comment_title"/><br/>
              <label htmlFor = "comment_content">Comments: </label><br/>              
              <textarea name = "commentContent" id = "comment_content" /><br />
          </form>
          <button onClick = {() => this.postComment()}>Post New Comment</button>
      </div>
    );
  }
}

export default WritingPad;
