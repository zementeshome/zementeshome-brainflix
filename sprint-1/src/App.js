import React from 'react';
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import SearchBar from './components/SearchBar/SearchBar';
import UploadButton from './components/UploadButton/UploadButton';
import UserIcon from './components/UserIcon/UserIcon';

function App() {
  return (
    <div className="App">
      <HeaderLogo />
      <SearchBar />
      <UploadButton />
      <UserIcon />
    </div>
  );
}

export default App;