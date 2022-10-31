import { marked } from 'marked';
import DOMPurify from 'dompurify';

var dateFormatForNote = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour: 'numeric', hour12: true, minute: 'numeric'});

function rawMarkup(data) {
    let raw = DOMPurify.sanitize(marked.parse(data));
    return raw;
}

export { rawMarkup, dateFormatForNote }