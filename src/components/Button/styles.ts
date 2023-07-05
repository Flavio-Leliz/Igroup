import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export type ButtonTypeStylesProps = 'primary' | 'secondary'

type ButtonProps = {
    type: ButtonTypeStylesProps
}

export const Container = styled(TouchableOpacity) <ButtonProps>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
         
    background-color: ${({ theme, type }) =>
        type === 'primary' ?
            theme.colors.green700 :
            theme.colors.redDark
    };
    
    border-radius: 6px;
    padding: 16px;
    justify-content: center;
    align-items: center;
`

export const ButtonTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fontSize.md}px;
        font-family: ${theme.fontFamily.bold};
        color: ${theme.colors.white};
    `}
`