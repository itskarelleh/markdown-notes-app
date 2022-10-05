import Dexie from 'dexie';

export const db = new Dexie('notes-markdown');

db.version(1).stores({ 
    notes: 'id, title, created_at, updated_at',
});

export const transferLocalStorageToIndexedDB = () => {
    db.notes.bulkAdd(JSON.parse(localStorage.getItem('notes')));
    localStorage.removeItem('notes');
    localStorage.removeItem('selected');
}