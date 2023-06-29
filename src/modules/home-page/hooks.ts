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
  useEffect(() => {}, [systemIsReady]);
  return { systemIsReady, onClickPowerButton };
};
