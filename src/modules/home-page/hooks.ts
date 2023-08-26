import { useEffect, useState } from 'react';
import { TUseHomePageLogic } from '@/modules/home-page/types';

export const useHomePageLogic = (): TUseHomePageLogic => {
  const [systemIsReady, setSystemIsReady] = useState(false);
  const onClickPowerButton = async () => {
    setTimeout(() => {
      // Finish all animations before show chat screen
      setSystemIsReady(true);
    }, 1300);
  };
  useEffect(() => {
    let size = 20;
    let isDecreasing = true;
    setInterval(() => {
      if (isDecreasing) {
        if (size > 10) {
          size -= 0.01;
        } else {
          isDecreasing = false;
        }
      } else {
        if (size < 20) {
          size += 0.01;
        } else {
          isDecreasing = true;
        }
      }
      document.body.style.backgroundSize = `${size}%`;
    }, 100);
  }, []);

  return { systemIsReady, onClickPowerButton };
};
