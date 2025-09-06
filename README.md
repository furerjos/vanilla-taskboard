Hello. In my efforts to become a more seasoned self-taught developer, I will be creating a vanilla JS, CSS, and HTML taskboard application.
Rules for self: zero code from AI or online, only can refer to documentation. Will document when I use anything else here.

Sources used:
https://www.w3schools.com/html/html_intro.asp -- HTML
https://developer.mozilla.org/en-US/docs/Web/JavaScript -- JS

Day 1:
- Created git repo and initial files
- Began with HTML
- Using Live Server extension to view progress
- Made main.js and added it to HTML head (putting script in head with defer is best practice)
- Made header, gave body background color
- Took an embarassing amount of time figuring out how to center the text and the form items
- I liked learning about FormData straight from HTML. One of the cons of skipping programming a functional app with vanilla and skipping to React/Spring is that I didn't appreciate how React combines the HTML, Javascript/Typescript logic, and even CSS if you use Tailwind and can inline everything. 
- This is the first time I am playing around with localStorage. 
- I forgot how it depends where you declare and call a variable in vanilla. Originally I was making variables for the localStorage stored name. If I make the stored name's variable on initializing, and try to console log it after clearing the local storage, I will still print out the name because the variable grabs the value at the start. Maybe React is smart and knows when to reassign a value to a variable when the reference changes, kind of like a useEffect?