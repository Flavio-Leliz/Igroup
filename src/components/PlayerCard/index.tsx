import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type playerProps = {
    name: string
    onDelete: () => void
}

export function PlayerCard({ name, onDelete }: playerProps) {
    return (
        <Container>
            <Icon name='person' />

            <Name>
                {name}
            </Name>

            <ButtonIcon
                icon='close'
                type='secondary'
                onPress={onDelete}
            />
        </Container>
    )
}