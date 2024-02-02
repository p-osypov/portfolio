import { useState, useCallback } from 'react';
import { PropsStartScreen } from '@/modules/home-page/start-screen/start-screen';

export const useStartScreenLogic = ({ onClickButton }: PropsStartScreen) => {
  const [powerButtonClicked, setPowerButtonClicked] = useState<boolean>(false);
  const [systemStarted, setSystemStarted] = useState<boolean>(false);
  const typeAnimationSequence = [
    'Make',
    1000, // Waits 1s
    'this',
    2000, // Waits 2s
    'Make this happen!',
    5000, // Waits 5s
    '...', // Deletes all the characters
    500, // Waits 0.5s
  ];
  const onClickStartButton = useCallback(() => {
    setPowerButtonClicked(true);
    onClickButton().then(() => {
      setTimeout(() => {
        setSystemStarted(true);
      }, 500);
    });
  }, [onClickButton]);

  return {
    powerButtonClicked,
    typeAnimationSequence,
    onClickStartButton,
    systemStarted,
  };
};
