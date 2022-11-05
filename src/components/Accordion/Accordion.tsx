import React from 'react'

type AccordionPropsType = {
  titleValue: string
  collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
  return props.collapsed === false ? <div><AccordionTitle title={props.titleValue} /></div> : <div>
    <AccordionTitle title={props.titleValue} />
    <AccordionBody />
  </div>
}

type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");

  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Home</li>
      </ul>
    </div>
  );
}

export default Accordion