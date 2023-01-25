import React, { useState } from 'react';
import About from './components/About';
import Gallery from './components/Gallery';
import Nav from './components/Nav';

function App() {
  const [categories] = useState([
    {
      name: 'Commerical',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects'
    },
    {
      name: 'Portraits',
      description: 'Portraits of people in my life'
    },
    { name: 'Food', description: 'Delicious delicacies' },
    {
      name: 'Landscape',
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
      ></Nav>
      <main>
        <div>
          <Gallery></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
