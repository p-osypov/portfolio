import { useEffect, useState } from 'react';
import axios from 'axios';
import useLocalStorage from 'use-local-storage';
import { TUseHomePageLogic } from '@/modules/home-page/types';

const method = typeof localStorage === 'undefined' ? useState : useLocalStorage;
export const useHomePageLogic = (): TUseHomePageLogic => {
  // ToDo: use server to get systemIsReady(client started work with system)
  // const [systemIsReady, setSystemIsReady] = useLocalStorage(
  //   'systemIsReady',
  //   false
  // );
  const [systemIsReady, setSystemIsReady] = useState(false);

  const onClickPowerButton = async () => {
    const response = await axios.post('/api/gpt', {});
    setTimeout(() => {
      // Finish all animations before show chat screen
      setSystemIsReady(true);
    }, 1000);
  };
  useEffect(() => {}, [systemIsReady]);
  return { systemIsReady, onClickPowerButton };
};
