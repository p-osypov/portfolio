import { LegacyRef } from 'react';
export type TUseHomePageLogicRes = {
  systemIsActivated: boolean;
  jsStackIsFinished: boolean;
  onClickPowerButton: () => Promise<void>;
};

export type useBGSpaceRes = {
  bgSpaceSceneRef: LegacyRef<HTMLElement>;
};
