const headingsAndParagraphs = [
    "# Heading 1",
    "## Heading 2",
    "### Heading 3",
    "#### Heading 4",
    "##### Heading 5",
    "###### Heading 6",
    "Paragraph"
];

const emphasis = [
    "Here's some **bold** text.",
    "Here's some *italicized* text.",
    "Here's some ***bolded and italicized*** text.",
];

const blockQuotes = [
    { label: "Simple", content: "> there is no such thing as disciplining your cat."},
    { label: "Nested", content: "> there is no such thing as disciplining your cat.\r\n > \r\n >> ... when it comes to multiple-cat homes, that's where rules go to die."}
];

const lists = [
    {subtitle: "Order Lists", content: "1. Wake up\r\n 2. Bathe and brush teeth\r\n 3. Eat breakfast \r\n 4. Go to Work"},
    {subtitle: "Unordered Lists", content: "- Water the plants\n - Cuddle the cat 😻\n - Eat some 🥑 toast"}
];

const images = {
    subtitle: "Copy + pasting images from the web", 
    content: "![Cute cat caption](http://fenozi.com/wp-content/uploads/2017/04/cute-cats-8.jpg)"
};

const code = "`` use backticks to write code in the editor``";

const taskLists = [
    "- [x] Drink water",
    "- [ ] Write/Chant Affirmations",
    "- [ ] Give Gratitude to the universe"
];

export { headingsAndParagraphs, emphasis, blockQuotes, code, lists, images, taskLists };