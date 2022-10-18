const headingsAndParagraphs = [
    "# Heading 1",
    "## Heading 2",
    "### Heading 3",
    "#### Heading 4",
    "##### Heading 5",
    "###### Heading 6",
    "Paragraphs"
];

const emphasis = [
    "Here's some **bold** text.",
    "Here's some *italicized* text.",
    "Here's some ***bolded and italicized*** text.",
];

const blockQuotes = [
    { subtitle: "Simple", content: "> there is no such thing as disciplining your cat."},
    { subtitle: "Nested", content: "> there is no such thing as disciplining your cat.\r\n > \r\n >> ... when it comes to multiple-cat homes, that's where rules go to die."}
];

const lists = [
    {subtitle: "Order Lists", content: "1. Wake up\r\n2. Bathe and brush teeth\r\n3. Eat breakfast"},
    {subtitle: "Unordered Lists", content: "- Water the plants\n- Cuddle the cat 😻\n- Eat some 🥑 toast"}, 
    {subtitle: "Task Lists", content: "- [x] Drink water\n- [ ] Write/Chant Affirmations \n- [ ] Give Gratitude to the universe"}
];

const images = {
    subtitle: "Copy + pasting images from the web", 
    content: "![Cute cat caption](http://fenozi.com/wp-content/uploads/2017/04/cute-cats-8.jpg)"
};

const code = `{
        "firstName": "John", 
        "lastName": "Doe",
        "age": 25
    }
    `;

export { headingsAndParagraphs, emphasis, blockQuotes, code, lists, images };