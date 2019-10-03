import React from 'react';

import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import SectionFeatures from './Section/SectionFeatures'
import SectionTours from './Section/SectionTours'


function App() {
  return (
    <div className='App' > 
      <Header></Header>
      <Main></Main>
      <SectionFeatures></SectionFeatures>
      <SectionTours></SectionTours>
    </div>
  );
}

export default App;
