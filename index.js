import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
        arget.value;
        const reversedSentence = markdown.split(' ').reverse().join(' ');
        const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
        setMarkdown(capitalizedSentence);
    };

    const names = data.flat().map(item => item.name);
    
    useEffect(() => {
        const names = data.flat().map(item => item.name);
        console.log(names); // ['John', 'Jane', 'Bob']
    }, [data]);

    const data = [
        [
          { name: 'John', age: 25 },
          { name: 'Jane', age: 30 }
        ],
        [
          { name: 'Bob', age: 40 }
        ]
      ];

    return (
        <div>
            <textarea 
                value={markdown} 
                onChange={handleChange} 
                style={{ width: '50%', height: '200px' }}
            />
            <ReactMarkdown children={markdown} />
        </div>
    );
}