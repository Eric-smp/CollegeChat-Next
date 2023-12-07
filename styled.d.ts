import {DefaultTheme} from 'styled-components'
type ColorsType ={
    green:string
    greenTwo:string
    greenTree:string
    white:string
    WhiteG:string

}



declare module 'styled-component'{
    export interface DefaultTheme{
        colors:ColorsType
    }
}
/* .color-1 { background-color: rgb(27, 147, 70); }
  .color-2 { background-color: rgb(84, 174, 116); }
  .color-3 { background-color: rgb(141, 201, 163); }
  .color-4 { background-color: rgb(198, 228, 209); }
  .color-5 { background-color: rgb(255, 255, 255); }
   */