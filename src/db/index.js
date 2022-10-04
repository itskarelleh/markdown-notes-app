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

// [{"id":"ee8f6ada-7327-4aa4-8c05-be64c371f9ce","title":"Hello World!","content":"\n## two line\n# One line\n\n#### four\n\n### three line \n\n- [x] Water the plants\n\n- [ ] Affirmations\n\n- [ ] Give gratitude","created_at":"Saturday, Oct 1, 2022, 1:35 AM"},{"id":"c8806923-b30d-4fcf-9403-eee1a2a1a3d2","title":"Untitled","content":"","created_at":"Saturday, Oct 1, 2022, 3:36 PM"},{"id":"c36045ab-ec64-43b9-8437-b6e0e39fc304","title":"Intro","content":"# Hello, World!\n\n## and all you beautiful people in it! \n\n**BTW...**\n\n*i present to you...*\n\nA picture of a kitten \n\n![bengal kitten on plain blanket](https://trublog.imgix.net/bengal-kitten-plaid-blanket.jpg)\n\n","created_at":"Monday, Oct 3, 2022, 8:52 AM"}]