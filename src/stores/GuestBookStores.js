import { EventEmitter } from 'events';

import dispatcher from '../Dispatcher/dispatcher';

class GuestBookStores extends EventEmitter {
    constructor(){
        super()
        this.guestComments = []
    }

    createGuestComment( id, author, title, content){
      fetch('http://localhost:8000/post-new-comment', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          author: author,
          title: title,
          content: content,
        }),
      });
      
      this.guestComments.push({
        "id":id,
        "comment_author":author,
        "comment_title":title,
        "comment_content":content
      })
      this.emit("change")
    }

    deleteGuestComment(id){
      var index = this.guestComments.map(function(e) {return e.id}).indexOf(id)
      if(index > -1){
        this.guestComments.splice(index, 1)
      }
      this.emit("change")
    }

    getAllGuestComments(){
      fetch("http://localhost:8000/get-all-guest-comments")
        .then(res => res.json())
        .then(
          (result) => {
            this.guestComments = result
          },
          (error) => {
            console.log(error)
          }
        )
        return this.guestComments
                        
    }

    handleAction(action){
      switch (action.type){
        case "CREATE_GUEST_COMMENT" : 
        
          this.createGuestComment(action.id, action.author, action.title, action.content)
        
        break;

        case "DELETE_GUEST_COMMENT" : 
        
          this.deleteGuestComment(action.id)
        
        break;

        case "GET_GUEST_COMMENT" : 
        
          this.getAllGuestComment()
        
        break;

        default:
        
        break;
      }
    }
}

const guestBookStore = new GuestBookStores()
dispatcher.register(guestBookStore.handleAction.bind(guestBookStore))
export default guestBookStore