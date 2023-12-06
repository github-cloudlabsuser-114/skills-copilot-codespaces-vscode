const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];    

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);
// import React, { useState } from 'react';
// import ReactMarkdown from 'react-markdown';

// const MarkdownEditor = () => {
//   const [markdown, setMarkdown] = useState('type markdown here');

//   const handleMarkdownChange = (event) => {
//     setMarkdown(event.target.value);
//   };

//   return (
//     <div>
//       <textarea value={markdown} onChange={handleMarkdownChange} />
//       <ReactMarkdown>{markdown}</ReactMarkdown>
//     </div>
//   );
// };

// export default MarkdownEditor;

