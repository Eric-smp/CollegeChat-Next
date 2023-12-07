import {Dispatch, SetStateAction} from 'react'
export type GlobalProps={
    desktopHeaderMenu:Boolean,
    visibleBorder:boolean,
    setVisibleBorder:Dispatch<SetStateAction<boolean>>
    setDesktopHeaderMenu:Dispatch<SetStateAction<boolean>>

}