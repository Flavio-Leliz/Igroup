import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray600};
    padding: 24px;
`

export const Form = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray700};

    flex-direction: row;
    border-radius: 6px;
    margin: 32px 0px;
    justify-content: center;
    padding: 6px;
    gap: 8px;
`

export const HeaderList = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin: 32px 0px 19px;
`

export const PlayerCount = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.gray200};
        font-family: ${theme.fontFamily.bold};
        font-size: ${theme.fontSize.sm}px;
    `}
`