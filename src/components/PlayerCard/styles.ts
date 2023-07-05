import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    width: auto;
    height: 54px;
    background-color: ${({ theme }) => theme.colors.gray500};
    flex-direction: row;
    align-items: center;
    margin-bottom: 14px;
    margin-right: 8px;
    border-radius: 6px;

`

export const Name = styled.Text`
    flex: 1;

    ${({ theme }) => css`
        font-family: ${theme.fontFamily.regular};
        font-size: ${theme.fontSize.md}px;
        color: ${theme.colors.gray200};
    `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.gray200
}))`
    margin-left: 13px;
    margin-right: 4px;
`

