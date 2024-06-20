import React, { useState } from 'react';
import { Element, scroller } from 'react-scroll';
import Highlighter from 'react-highlight-words';

const chatData = [
  { id: 1, text: "Hello, how are you?", username:"pk" },
  { id: 4, text: "Hello, how are you?" ,username:"ravi" },
  { id: 5, text: "Hello, how are you?",username:"kumar"  },

  { id: 2, text: "I am fine, thank you!",username:"vamsi"  },
  { id: 3, text: "What about you?",username:"kiran"  },
  // Add more chat data here
];

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [highlightedMessageId, setHighlightedMessageId] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setShowResults(true);
    }
  };

  const handleClick = (id) => {
    setHighlightedMessageId(id);
    scroller.scrollTo(`message-${id}`, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const filteredChatData = chatData.filter(message =>
    message.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <input
        type="text"
        placeholder="Search chat..."
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '10px', backgroundColor: '#f1f1f1' }}>
        {showResults && filteredChatData.length > 0 ? (
          filteredChatData.map(message => (
            <Element
              name={`message-${message.id}`}
              key={message.id}
              onClick={() => handleClick(message.id)}
              style={{
                padding: '10px',
                marginBottom: '10px',
                backgroundColor: highlightedMessageId === message.id ? '#e1e1e1' : '#fff',
                border: highlightedMessageId === message.id ? '2px solid #007bff' : '1px solid #ccc',
                cursor: 'pointer'
              }}
            >
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[searchTerm]}
                autoEscape={true}
                textToHighlight={message.text}
              />
            </Element>
          ))
        ) : (
          showResults && <div>No results found</div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
