import React from 'react';
import userImage from './assets/Images/Mohan-muruge.jpg';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Comments from './components/Comments/Comments';
import Form from './components/Form/Form';
import Aside from './components/Aside/Aside';
import AsideCard from './components/AsideCard/AsideCard';
import HeroCard from './components/HeroCard/HeroCard';
import HighlightsCard from './components/Highlights/Highlights';

function App() {
  return (
    <div className="app">
      <Header userImage={userImage} />
      <main className="app__main">
        <Hero />
        <HeroCard />
         <div className="app__highlights-container">
         <Highlights />
         <HighlightsCard />
         </div>
         <Form userImage={userImage} />
         <div className="app__comments-container">
          <Comments />
         </div>
         <Aside />
         <AsideCard />
      </main>
    </div>
  );
}

export default App;