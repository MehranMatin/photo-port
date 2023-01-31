import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

function App() {
  const [categories] = useState([
    {
      name: 'commerical',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects'
    },
    {
      name: 'portraits',
      description: 'Portraits of people in my life'
    },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouse, waterfalls, and the beauty of nature'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <ContactForm />
        <Gallery currentCategory={currentCategory} />
        <About />
      </main>
    </div>
  );
}

export default App;
