import {
  useState,
  useEffect,
  useContext,
  createContext,
  useMemo,
} from 'react'
import { GlobalProps, ChildrenType } from '@/types'

export const StateInitial: GlobalProps = {
  desktopHeaderMenu: false,
  setDesktopHeaderMenu: () => {},
}

const GlobalContext = createContext<GlobalProps>(StateInitial)

function GlobalProvider({ children }: ChildrenType) {
  const [desktopHeaderMenu, setDesktopHeaderMenu] = useState<boolean>(false)
  useEffect(() => {}, [desktopHeaderMenu])

  const value = useMemo(
    () => ({
      desktopHeaderMenu,
      setDesktopHeaderMenu,
    }),
    [desktopHeaderMenu, setDesktopHeaderMenu],
  )

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

const useGlobal = ()=> useContext(GlobalContext)

export {GlobalProvider, useGlobal}
