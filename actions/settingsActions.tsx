/*
 * Settings Action Types
 */
export const DARK_MODE_ON = 'DARK_MODE_ON';
export const DARK_MODE_OFF = 'DARK_MODE_OFF';

interface DarkModeOnAction {
  type: typeof DARK_MODE_ON;
  isDarkMode: boolean;
}

interface DarkModeOffAction {
  type: typeof DARK_MODE_OFF;
  isDarkMode: boolean;
}

export type SettingsActionTypes = DarkModeOnAction | DarkModeOffAction;

/*
 * Settings Action Creators
 */
export function darkModeOn(): any {
  return { type: DARK_MODE_ON };
}

export function darkModeOff(): any {
  return { type: DARK_MODE_OFF };
}
