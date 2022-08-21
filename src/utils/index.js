import { marked } from 'marked';
import DOMPurify from 'dompurify';

function rawMarkup(data) {
    let raw = DOMPurify.sanitize(marked.parse(data));
    return raw;
}

export { rawMarkup }