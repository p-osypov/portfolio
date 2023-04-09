import { Component } from '@/modules/index/start-screen/styles';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import IconPowerButton from '@/assets/icons/jsx/power-button';
import { useStartScreenLogic } from '@/modules/index/start-screen/hooks';

export interface PropsStartScreen {
  onClickButton: () => void;
}
function StartScreen(props: PropsStartScreen) {
  const { onClickStartButton, clicked, typedText } = useStartScreenLogic(props);
  return (
    <Component.Container>
      <Component.PowerButtonWrapper>
        <Component.PowerButton
          onClick={onClickStartButton}
          $fastAnimation={clicked}
        >
          <IconPowerButton />
        </Component.PowerButton>
      </Component.PowerButtonWrapper>
      <Component.Title
        sequence={typedText}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
      />
    </Component.Container>
  );
}
export default StartScreen;
