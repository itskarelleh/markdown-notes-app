let openRequest = window.indexedDB.open("notes_markdown", 1);

onRequest.onupgradeneeded = () => {

};

onRequest.onerror = () => {
    console.lerror("Error", openRequest.error);
};

openRequest.onsuccess = () => {
    let db = openRequest.result;
}