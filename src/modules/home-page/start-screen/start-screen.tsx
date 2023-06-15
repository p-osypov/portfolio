import { Component } from '@/modules/home-page/start-screen/start-screen.styles';
import IconPowerButton from '@/assets/icons/jsx/power-button';
import { useStartScreenLogic } from '@/modules/home-page/start-screen/hooks';
import { TypeAnimation } from 'react-type-animation';
export interface PropsStartScreen {
  onClickButton: () => Promise<void>;
}
function StartScreen(props: PropsStartScreen) {
  const { onClickStartButton, powerButtonClicked, typedText, systemStarted } =
    useStartScreenLogic(props);
  return (
    <Component.Container>
      <Component.Gates $open={systemStarted} />
      <Component.Cloud
        className={`animate__animated ${
          systemStarted ? 'animate__zoomOut' : ''
        }`}
      />
      <Component.PowerButtonWrapper
        className={`animate__animated ${
          systemStarted ? 'animate__backOutRight' : ''
        }`}
      >
        <Component.PowerButton
          onClick={onClickStartButton}
          $fastBorderAnimation={powerButtonClicked}
        >
          <IconPowerButton />
        </Component.PowerButton>
      </Component.PowerButtonWrapper>
      <Component.Title
        className={`animate__animated ${
          systemStarted ? 'animate__backOutLeft' : ''
        }`}
      >
        <TypeAnimation sequence={typedText} cursor={true} repeat={Infinity} />
      </Component.Title>
    </Component.Container>
  );
}
export default StartScreen;
