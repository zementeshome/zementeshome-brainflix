import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HighlightsSection from './components/Highlights/Highlights';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Hero />
         <div className="app__highlights-container">
         <HighlightsSection />
         </div>
         <div className="app__comments-container">
          <Comments />
         </div>
      </main>
    </div>
  );
}

export default App;