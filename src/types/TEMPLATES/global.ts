import {Dispatch, SetStateAction} from 'react'
export type GlobalProps={
    desktopHeaderMenu:Boolean,
    setDesktopHeaderMenu:Dispatch<SetStateAction<boolean>>
}