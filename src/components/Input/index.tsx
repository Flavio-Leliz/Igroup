import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

type InputProps = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
    const { colors } = useTheme()

    return (
        <Container
            ref={inputRef}
            placeholderTextColor={colors.gray300}
            {...rest}
        />
    )
}