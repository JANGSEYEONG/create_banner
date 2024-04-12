import type {ThumnailDesign} from '../types/types'

import {atom} from 'recoil'

export const ThumnailDesignAtom = atom<ThumnailDesign>({
  key: 'ThumnailDesignAtom',
  default: {
    width: 380,
    height: 200, /// 1 : 1.9
    backgroundColor: '#ffffff',
    content: 'hello',
    font: {
      style: 'normal',
      variant: 'normal',
      weight: '100',
      size: '55',
      family: 'Arial',
      color: '#000000'
    }
  }
})
