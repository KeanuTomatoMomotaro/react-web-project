import dispatcher from '../Dispatcher/dispatcher';

export function createGuestComment( cId, cAuthor, cTitle, cContent){
    dispatcher.dispatch({
        type: "CREATE_GUEST_COMMENT",
        id: cId,
        author: cAuthor,
        title: cTitle,
        content: cContent
    })
}

export function deleteGuestComment( cId ){
    dispatcher.dispatch({
        type: "DELETE_GUEST_COMMENT",
        id: cId,
    })
}

export function getGuestComment(){
    dispatcher.dispatch({
        type: "GET_GUEST_COMMENT",
    })
}