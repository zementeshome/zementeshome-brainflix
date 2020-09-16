import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HighlightsSection from './components/Highlights/Highlights';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form';
import Aside from './components/Aside/Aside';
import Card from './components/AsideCard/AsideCard';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Hero />
         <div className="app__highlights-container">
         <HighlightsSection />
         </div>
         <Form />
         <div className="app__comments-container">
          <Comments />
         </div>
         <Aside />
         <Card />
      </main>
    </div>
  );
}

export default App;