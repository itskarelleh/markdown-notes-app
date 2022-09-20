import { marked } from 'marked';
import DOMPurify from 'dompurify';

var dateFormatForNote = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

function rawMarkup(data) {
    let raw = DOMPurify.sanitize(marked.parse(data));
    return raw;
}

function starterContent() {

    const welcomePath = require('../welcome.txt');
    
    var note = {
        id: "c1d4aa5d-b589-49f8-bb48-cdc85ad5e1ab",
        title: "Welcome to Notes Markdown Editor",
        content: "",
        created_at: 'Wednesday, Sep 14, 2022'
    }

    fetch(welcomePath)
    .then((res) => res.text())
    .then((text) => { 
        note.content = text 
    });

    return note;
}

export { rawMarkup, dateFormatForNote, starterContent }