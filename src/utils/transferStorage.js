//used to convert local storage to indexedDb
//this is used for returning users who are using the updated version of 
//this app

//local storage will no longer be used to store notes and 
//only be used for things such as dark mode and accessibility
//settings

function transferLocalStorageToIndexedDB(notes) {
    //if localStorage notes key has items and length >= 1
    //then start transferring from local storage to indexedDB
    //1. parse the stringified notes to js objects

    //2. clear and delete the selected and notes keys



}

// indexedDB will be used for users who don't wish to be
// authenticated or have yet to become authenticated users
// function transferNewUserDataToMongoDB() {

// }