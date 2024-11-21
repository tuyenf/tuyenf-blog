import IconEnglishFlag from 'assets/media/icons/english-flag.svg'
import IconVietnamFlag from 'assets/media/icons/vietnam-flag.svg'

export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
  SEPIA = 'sepia',
}

export const AVAILABLE_LOCALES: CommonModule.Language[] = [
  {
    name: 'English',
    code: 'en',
    flag: IconEnglishFlag,
  },
  {
    name: 'Vietnamese',
    code: 'vi',
    flag: IconVietnamFlag,
  },
]

export const DEFAULT_BROWSER_LANGUAGE: CommonModule.Language = {
  name: 'English',
  code: 'en',
  flag: IconEnglishFlag,
}
