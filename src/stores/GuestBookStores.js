import { EventEmitter } from 'events';

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
}

const guestBookStore = new GuestBookStores()
window.guestBookStore = guestBookStore
export default guestBookStore