/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import theme from './theme'

export type theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}