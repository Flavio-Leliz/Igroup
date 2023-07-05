import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'primary' | 'secondary'

type ButtonIconProps = {
    type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;

    margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(({ theme, type }) => ({
    size: 24,
    color: type === 'primary' ? theme.colors.green700 : theme.colors.red
}))``