import React, { useState } from 'react';

const MainContent: React.FC = () => {
  const [sections, setSections] = useState([
    'Content Section 1',
    'Content Section 2',
    'Content Section 3'
  ]);

  return (
    <main className="main-content">
      {sections.map((section, index) => (
        <section key={index}>
          <h2>{section}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      ))}
    </main>
  );
};

export default MainContent;
