import { LegacyRef } from 'react';
export type TUseHomePageLogic = {
  systemIsReady: boolean;
  onClickPowerButton: () => Promise<void>;
  bgSpaceSceneRef: LegacyRef<HTMLElement>;
};
