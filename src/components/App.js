import React from 'react';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import SectionFeatures from './Section/SectionFeatures';
import SectionTours from './Section/SectionTours';
import SectionStories from './Section/SectionStories';
import SectionBook from './Section/SectionBook';


function App() {
  return (
    <div className='App' > 
      <Header></Header>
      <Main></Main>
      <SectionFeatures></SectionFeatures>
      <SectionTours></SectionTours>
      <SectionStories></SectionStories>
      <SectionBook></SectionBook>
    </div>
  );
}

export default App;
