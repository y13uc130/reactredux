
export function selectBook(sbook){
    //selectBook is an ActionCreator, it needs to return an action,
    // an object with a type(defines the purpose of the action) property.
    return {
        type: 'BOOK_SELECTED',
        payloadkuchbhi: sbook //more info abt the action that is taken.
    }
}
