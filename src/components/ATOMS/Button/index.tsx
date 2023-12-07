import {TParameterButton} from '@/types'
import * as Styles from './styles'

export function Button({backColor,color,colorBorder, label}:TParameterButton){

    return(
        <Styles.Content>
            <Styles.ButtonStyle color={color} backColor={backColor} colorBorder={colorBorder} label={label} >
                <h1 className='label'>{label}</h1>
            </Styles.ButtonStyle>
        </Styles.Content>
    )
}