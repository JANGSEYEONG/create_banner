import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import {immer} from 'zustand/middleware/immer'

import type {CanvasOptionStoreSchema} from '../types/canvasOption'

const CANVAS_OPTION_KEY = 'canvas-option'

export const useCanvasOptionStore = create<CanvasOptionStoreSchema>()(
  //persist(
  immer(
    set => ({
      options: {
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
      },
      actions: {
        changeWidth: (width: number) =>
          set(state => {
            state.options.width = width
          }),
        changeHeight: (height: number) =>
          set(state => {
            state.options.height = height
          }),
        changeBackgroundColor: (color: string) =>
          set(state => {
            state.options.backgroundColor = color
          }),
        changeContent: (content: string) =>
          set(state => {
            state.options.content = content
          }),
        changeFontStyle: (style: string) =>
          set(state => {
            state.options.font.style = style
          }),
        changeFontVariant: (variant: string) =>
          set(state => {
            state.options.font.variant = variant
          }),
        changeFontWeight: (weight: string) =>
          set(state => {
            state.options.font.weight = weight
          }),
        changeFontSize: (size: string) =>
          set(state => {
            state.options.font.size = size
          }),
        changeFontFamily: (family: string) =>
          set(state => {
            state.options.font.family = family
          }),
        changeFontColor: (color: string) =>
          set(state => {
            state.options.font.color = color
          })
      }
    }) //),
    //{name: CANVAS_OPTION_KEY}
  )
)
