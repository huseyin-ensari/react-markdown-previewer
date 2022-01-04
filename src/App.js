import { useState } from "react";
import "./App.css";
import { marked } from "marked";
import Markdown from "./Markdown";

const initialValue = `# Tutorial
---  
# Heading 1
## Heading 2
### Heading 3

- list item 1
- list item 2

- [ ] checklist
- [x] checklist 2

[this is a link](https://www.markdownguide.org/)
`;

function App() {
  const [text, setText] = useState(initialValue);
  const markdownText = marked(text);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    text == initialValue && setText("");
  };

  return (
    <div className="App">
      <h1 className="header">Markdown Previewer</h1>
      <Markdown />
      <p className="created-by">© Hüseyin Ensari</p>
    </div>
  );
}

export default App;
