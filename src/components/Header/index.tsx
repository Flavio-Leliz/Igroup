import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, Logo } from './styles'
import logoImage from '@assets/logo.png'

type HeaderProps = {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: HeaderProps) {
    const navigation = useNavigation()

    function handleRouterHome() {
        navigation.navigate('groups')
    }

    return (
        <Container>
            {showBackButton &&
                <BackButton onPress={handleRouterHome}>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImage} />
        </Container>
    )
}