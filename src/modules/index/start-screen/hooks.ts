import { useState, useCallback } from 'react';
import { PropsStartScreen } from '@/modules/index/start-screen/start-screen';

export const useStartScreenLogic = ({ onClickButton }: PropsStartScreen) => {
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
  const onClickStartButton = useCallback(() => {
    setClicked(true);
    onClickButton();
  }, [onClickButton]);
  return { clicked, typedText, onClickStartButton };
};
