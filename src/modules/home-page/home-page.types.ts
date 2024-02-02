import { LegacyRef } from 'react';
export type TUseHomePageLogicRes = {
  systemIsReady: boolean;
  onClickPowerButton: () => Promise<void>;
};

export type useBGSpaceRes = {
  bgSpaceSceneRef: LegacyRef<HTMLElement>;
};
