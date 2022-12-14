import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
  return (
    <div>
      <PageTitle title={"This is App component"} />
      <Rating value={3} />
      <Accordion titleValue="Меню" collapsed={false}/>
      <Accordion titleValue="О нас" collapsed={true}/>
      <Rating value={4} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <h1>
      {props.title}
    </h1>
  );
}


export default App;
