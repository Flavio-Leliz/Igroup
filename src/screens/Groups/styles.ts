import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray600};
    padding: 24px;
`
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
`;