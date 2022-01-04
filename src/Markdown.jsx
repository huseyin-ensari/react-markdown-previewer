import { useState } from "react";
import "./App.css";
import { marked } from "marked";

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

const Markdown = () => {
  const [text, setText] = useState(initialValue);
  const markdownText = marked(text);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    text == initialValue && setText("");
  };
  return (
    <div>
      <div className="app">
        <textarea
          onClick={handleClick}
          className="p"
          onChange={handleChange}
          value={text}
        />
        <div
          className="p markdown-text"
          dangerouslySetInnerHTML={{ __html: markdownText }}
        ></div>
      </div>
    </div>
  );
};

export default Markdown;
