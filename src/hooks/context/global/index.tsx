import { useState, useEffect, useContext, createContext, useMemo } from 'react'
import { GlobalProps, ChildrenType } from '@/types'

export const StateInitial: GlobalProps = {
  desktopHeaderMenu: false,
  visibleBorder: false,
  setVisibleBorder: () => {},
  setDesktopHeaderMenu: () => {},
}

const GlobalContext = createContext<GlobalProps>(StateInitial)

function GlobalProvider({ children }: ChildrenType) {
  const [desktopHeaderMenu, setDesktopHeaderMenu] = useState<boolean>(false)
  useEffect(() => {}, [desktopHeaderMenu])
  const [visibleBorder, setVisibleBorder] = useState<boolean>(false)

  const value = useMemo(
    () => ({
      desktopHeaderMenu,
      visibleBorder,
      setVisibleBorder,
      setDesktopHeaderMenu,
    }),
    [desktopHeaderMenu, visibleBorder, setDesktopHeaderMenu],
  )

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  )
}

const useGlobal = () => useContext(GlobalContext)

export { GlobalProvider, useGlobal }
