import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const votes = (index) => {
    const languagesVotes = languages.map((language, i) => {
      if (i === index) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });
    setLanguages(languagesVotes);
  };

  return (
    <div>
      <h1>Vote Your Language</h1>
      {languages.map((language, index) => (
        <div key={index}>
               
          <button onClick={() => votes(index)}>{language.votes}    {language.name}   Click Here</button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
