import { useState, useCallback } from 'react';
import { PropsStartScreen } from '@/modules/index/start-screen/start-screen';

export const useStartScreenLogic = ({ onClickButton }: PropsStartScreen) => {
  const [powerButtonClicked, setPowerButtonClicked] = useState<boolean>(false);
  const [systemStarted, setSystemStarted] = useState<boolean>(false);
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
  const onClickStartButton = useCallback(() => {
    setPowerButtonClicked(true);
    onClickButton().then(() => {
      setSystemStarted(true);
    });
  }, [onClickButton]);

  return { powerButtonClicked, typedText, onClickStartButton, systemStarted };
};
