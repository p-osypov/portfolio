import { Component } from '@/modules/index/start-screen/styles';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import IconPowerButton from '@/assets/icons/jsx/power-button';

interface Props {
  onClickButton: () => void;
}
function StartScreen({ onClickButton }: Props) {
  const [clicked, setClicked] = useState<boolean>(false);
  const typedText = [
    'Make',
    1000, // Waits 1s
    'this',
    2000, // Waits 2s
    'Make this happen!',
    5000, // Waits 5s
    '...', // Deletes all the characters
    500, // Waits 0.5s
  ];
  const onClick = () => {
    setClicked(true);
    onClickButton();
  };
  return (
    <Component.Container>
      <Component.PowerButtonWrapper>
        <Component.PowerButton onClick={onClick} $fastAnimation={clicked}>
          <IconPowerButton />
        </Component.PowerButton>
      </Component.PowerButtonWrapper>
      <Component.Title>
        <TypeAnimation
          sequence={typedText}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
        />
        {/*Make this happen!*/}
      </Component.Title>
    </Component.Container>
  );
}
export default StartScreen;
