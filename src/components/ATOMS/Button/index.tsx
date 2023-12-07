import { TParameterButton } from '@/types'
import * as Styles from './styles'
import { useGlobal } from '@/hooks/context/global'

export function Button({
  backColor,
  color,
  colorBorder,
  label,
  colorHover,
  backColorHover,
  isBorder
}: TParameterButton) {
  const {visibleBorder} =useGlobal()

  return (
    <Styles.Content>
      <Styles.ButtonStyle
        color={color}
        backColor={backColor}
        colorBorder={colorBorder}
        label={label}
        backColorHover={backColorHover}
        colorHover={colorHover}
        isBorder={isBorder}
      >
        <h1 className="label">{label}</h1>
      </Styles.ButtonStyle>
    </Styles.Content>
  )
}
