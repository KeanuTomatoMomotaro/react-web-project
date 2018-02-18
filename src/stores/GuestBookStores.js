import { EventEmitter } from 'events';

import dispatcher from '../Dispatcher/dispatcher';

class GuestBookStores extends EventEmitter {
    constructor(){
        super()
        this.guestComments = [
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

    createGuestComment( id, author, title, content){
      this.guestComments.push({
        id,
        author,
        title,
        content
      })

      this.emit("change")
    }

    getAllGuestComments(){
        return this.guestComments
    }

    handleAction(action){
      switch (action.type){
        case "CREATE_GUEST_COMMENT" : 
        
          this.createGuestComment(action.id, action.author, action.title, action.content)
        
        break;

        default:
        
        break;
      }
    }
}

const guestBookStore = new GuestBookStores()
dispatcher.register(guestBookStore.handleAction.bind(guestBookStore))
window.dispatcher = dispatcher
export default guestBookStore