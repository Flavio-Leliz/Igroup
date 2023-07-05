import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export type FilterStyledProps = {
    isActive?: boolean
}

export const Container = styled(TouchableOpacity) <FilterStyledProps>`
    ${({ theme, isActive }) => isActive && css`
        border: 1px solid ${theme.colors.green500};
    `}
    background-color: ${({ theme }) => theme.colors.gray600};
    border-radius: 6px;
    margin-right: 8px;
    height: 42px;
    width: 70px;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    text-transform: uppercase;
    ${({ theme }) => css`
        font-family: ${theme.fontFamily.bold};
        font-size: ${theme.fontSize.sm}px;
        color: ${theme.colors.white};
    `}
`
