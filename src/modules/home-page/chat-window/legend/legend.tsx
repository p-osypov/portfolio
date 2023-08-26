import { Component } from './legend.styles';
import Button from '@/components/button';
import { useState } from 'react';
const data = [
  {
    header: {
      icon: '🧐',
      text: 'What it is?',
    },
    text: `This system is based on OpenAI API and knows everything that is related to Pavlo Osypov as a software engineer or a personality.
    You can use this system like Wikipedia and it will provide you with any information you need.`,
    button: 'Next',
  },
  {
    header: {
      icon: '💡',
      text: 'What can I ask?',
    },
    text: `What are his hard/soft skills?
    What domains is he familiar with?
    What are his hobbies?
    Where can I see code samples written by him?
    Anything you want to know...
    `,
    button: 'Next',
  },
  {
    header: {
      icon: '🚀',
      text: 'Need idea what to start with?',
    },
    text: `Just say Hello! =)`,
    button: 'Done',
  },
];
function Legend() {
  const [legendPageIndex, setLegendPageIndex] = useState(0);
  const [showLegend, setShowLegend] = useState(true);
  const onClickButton = () => {
    if (legendPageIndex === data.length - 1) {
      setShowLegend(false);
    } else {
      setLegendPageIndex(legendPageIndex + 1);
    }
  };
  if (!showLegend) return null;
  return (
    <Component.Container>
      <Component.Header>
        <i className="icon">{data[legendPageIndex].header.icon}</i>
        <span className="text">{data[legendPageIndex].header.text}</span>
      </Component.Header>
      <Component.Content>
        <Component.ContentCard>
          {data[legendPageIndex].text}
        </Component.ContentCard>
      </Component.Content>
      <Component.Footer>
        <Component.Button width={100} onClick={onClickButton}>
          {data[legendPageIndex].button}
        </Component.Button>
      </Component.Footer>
    </Component.Container>
  );
}
export default Legend;
