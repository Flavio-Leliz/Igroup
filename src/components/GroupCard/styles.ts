import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: auto;
    height: 90px;
    background-color: ${({ theme }) => theme.colors.gray500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
    margin-right: 8px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.fontSize.lg}px;
    color: ${theme.colors.gray100};
    font-family: ${theme.fontFamily.regular};
    `}
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
    size: 32,
    color: theme.colors.green500,
    weight: 'fill'
}))`
    margin-right: 20px;
`