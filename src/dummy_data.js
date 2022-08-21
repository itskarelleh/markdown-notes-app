import { v4 as uuidv4 } from 'uuid';

const dummyData = { 
    _id: uuidv4(), 
    title: "Famous Quotes", 
    content: "# Famous Quotes \n > I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -- Maya Angelou \n > That which does not kill us makes us stronger. -- Friedrich Nietzsche \n > Life is what happens when you’re busy making other plans. --John Lennon \n > When the going gets tough, the tough get going. -- Joe Kennedy",
    created_at: 'Saturday, Aug 20, 2022'
};

export { dummyData };

