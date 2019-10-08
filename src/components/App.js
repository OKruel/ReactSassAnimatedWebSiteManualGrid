import React from 'react';

import Navigation from './Navigation/Navigation'
import Header from './Header/Header';
import Main from './Main/Main';
import SectionFeatures from './Section/SectionFeatures';
import SectionTours from './Section/SectionTours';
import SectionStories from './Section/SectionStories';
import SectionBook from './Section/SectionBook';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className='App' >
      <Navigation></Navigation>
      <Header></Header>
      <Main></Main>
      <SectionFeatures></SectionFeatures>
      <SectionTours></SectionTours>
      <SectionStories></SectionStories>
      <SectionBook></SectionBook>
      <Footer></Footer>
    </div>
  );
}

export default App;
