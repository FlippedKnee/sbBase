// ./styled-components.d.ts
import { projectTheme } from './theme'
type ProjectTheme = typeof projectTheme
declare module 'styled-components' {
  export interface DefaultTheme extends ProjectTheme {}
}