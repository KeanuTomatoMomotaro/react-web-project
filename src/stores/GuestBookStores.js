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

    getAllGuestComments(){
        return this.guestComments
    }
}

const guestBookStore = new GuestBookStores

export default guestBookStore