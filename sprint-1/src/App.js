import React from 'react';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import SearchBar from './components/SearchBar/SearchBar';
import UploadButton from './components/UploadButton/UploadButton';
import UserIcon from './components/UserIcon/UserIcon';
// import HeroVideo from './components/HeroVideo/HeroVideo';
import HighlightsTitle from './components/HighlightsTitle/HighlightsTitle';
import HighlightsViewsAndLikes from './components/HighlightsViewsAndLikes/HighlightsViewsAndLikes';

function App() {
  return (
    <div className="app">
       <header className="app__header">
      <HeaderLogo />
      <SearchBar />
      <UploadButton />
      <UserIcon />
      </header>
      <div className="app__main">
       <section className="app__highlights">
         <HighlightsTitle />
         <HighlightsViewsAndLikes />
       </section>
      </div>
    </div>
  );
}

export default App;

// /* <div className="app__hero"> after app main