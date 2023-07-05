import { TouchableOpacityProps } from "react-native";
import { ButtonTitle, ButtonTypeStylesProps, Container } from "./styles";

type ButtonProps = TouchableOpacityProps & {
    title: string
    type?: ButtonTypeStylesProps
}

export function Button({ title, type = 'primary', ...rest }: ButtonProps) {
    return (
        <Container {...rest} type={type}>
            <ButtonTitle>
                {title}
            </ButtonTitle>
        </Container>
    )
}