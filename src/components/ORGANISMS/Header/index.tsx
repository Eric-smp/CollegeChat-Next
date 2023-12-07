import IconLogo from '@/assets/svg/iconLogo.svg'
import { Button } from '@/components'
import * as Styles from './styles'

export function Header() {
  return (
    <Styles.Wrapper>
      <div className="nameCompanyHeader">
        <IconLogo />
        <h1>CollegeChat</h1>
      </div>
      <div className="textNavHeader">
        <h1>Inicio</h1>
        <h1>Sobre nós</h1>
        <h1>Contato</h1>
      </div>

      <div className="loginSingUp">
      <Button label='Entrar' colorBorder='red' color='red' backColor={'green'} />
      <Button label='Inscrever-se' colorBorder='red' color='red' backColor={'green'} />
      </div>
    </Styles.Wrapper>
  )
}
