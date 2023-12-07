import IconLogo from '@/assets/svg/iconLogo.svg'
import { Button, TextNavHeader } from '@/components'
import * as Styles from './styles'
import { useGlobal } from '@/hooks/context/global'
import {useTheme} from 'styled-components'

export function Header() {
  const {setVisibleBorder} = useGlobal()

  const theme = useTheme()
  
  return (
    <Styles.Wrapper>
      <div className="nameCompanyHeader">
        <IconLogo />
        <h1>CollegeChat</h1>
      </div>
      <TextNavHeader />

      <div className="loginSingUp">
        <Button
          label="Entrar"
          color="#f2edac"
          backColor={'#39a04e'}
          colorHover={''}
          backColorHover={''}
        />
        <Button
          label="Inscrever-se"
          colorBorder="red"
          color="#efebb9"
          backColor={'#39a04e'}
          colorHover={''}
          backColorHover={theme.}
          isBorder={true}
        />
      </div>
    </Styles.Wrapper>
  )
}
