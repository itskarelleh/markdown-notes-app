import Dexie from "dexie";

export const db = new Dexie("notes-markdown");

db.version(1).stores({
  notes: "id, title, created_at, updated_at",
});

db.version(2)
  .stores({
    notes2: "++id, title, created_at, updated_at",
  })
  .upgrade((trans) => {
    return trans.notes.toArray().then((objs) => {
      return trans.notes2.bulkAdd(objs);
    });
  });

export const transferLocalStorageToIndexedDB = () => {
  db.notes.bulkAdd(JSON.parse(localStorage.getItem("notes")));
  localStorage.removeItem("notes");
  localStorage.removeItem("selected");
};
