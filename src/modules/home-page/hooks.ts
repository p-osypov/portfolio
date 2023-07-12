import { useEffect, useState } from 'react';
import { TUseHomePageLogic } from '@/modules/home-page/types';

export const useHomePageLogic = (): TUseHomePageLogic => {
  // ToDo: use server to get systemIsReady(client started work with system)
  const [systemIsReady, setSystemIsReady] = useState(false);
  const onClickPowerButton = async () => {
    setTimeout(() => {
      // Finish all animations before show chat screen
      setSystemIsReady(true);
    }, 1000);
  };
  useEffect(() => {
    let size = 300;
    let isDecreasing = true;
    setInterval(() => {
      if (isDecreasing) {
        if (size > 200) {
          size -= 0.2;
        } else {
          isDecreasing = false;
        }
      } else {
        if (size < 300) {
          size += 0.2;
        } else {
          isDecreasing = true;
        }
      }
      document.body.style.backgroundSize = `${size}px`;
    }, 100);
  }, []);
  return { systemIsReady, onClickPowerButton };
};
