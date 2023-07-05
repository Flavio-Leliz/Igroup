import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/appError";
import { Alert } from "react-native";

export function NewGroup() {
    const navigation = useNavigation()

    const [group, setGroup] = useState('')

    async function handledGroupCreate() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('Novo grupo', 'Digite um nome para o seu grupo')
            }

            await groupCreate(group)
            navigation.navigate('players', { group })

        } catch (error) {

            if (error instanceof AppError) {
                Alert.alert('Novo grupo', error.message)
            } else {
                Alert.alert('Novo grupo', 'Não foi possível criar um novo grupo')
                console.log(error)
            }

        }
    }

    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <Highlight
                    title='Novo grupo'
                    subtitle='Crie um grupo para add pessoas'
                />

                <Input
                    placeholder='Nome do grupo'
                    onChangeText={setGroup}
                    onSubmitEditing={handledGroupCreate}
                    returnKeyType='done'
                />
                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handledGroupCreate}
                />
            </Content>

        </Container>
    )
}