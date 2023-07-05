import { Header } from "@components/Header";
import { Container, Form, HeaderList, PlayerCount } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/appError";
import { addPlayer } from "@storage/player/addPlayer";
import { getPlayerByTeam } from "@storage/player/getPlayerByTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { deletePlayer } from "@storage/player/deletePlayer";
import { deleteGroup } from "@storage/group/deleteGroup";
import { Loading } from "@components/Loading";

type RouteParams = {
    group: string
}

export function Players() {
    const [isLoading, setIsLoading] = useState(true)
    const [newPlayer, setNewPlayer] = useState('')
    const [team, setTeam] = useState('time a')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

    const route = useRoute()
    const navigation = useNavigation()
    const { group } = route.params as RouteParams

    const inputFocusOff = useRef<TextInput>(null)

    async function handleAddPlayer() {
        if (newPlayer.trim().length === 0) {
            return Alert.alert('Novo jogador', 'Informe o nome do jogador que será adicionado')
        }

        const newPlayerInfo = {
            name: newPlayer,
            team
        }

        try {
            await addPlayer(newPlayerInfo, group)
            inputFocusOff.current?.blur()
            setNewPlayer('')
            fetchPlayersByTeam()

        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo jogoador', error.message)
            } else {
                console.log(error)
                Alert.alert('Novo jogador', 'Não foi possível adicionar o novo jogador')
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            setIsLoading(true)

            const playersByteam = await getPlayerByTeam(group, team)

            setPlayers(playersByteam)
        } catch (error) {
            console.log(error)
            Alert.alert('Sem jogadores', 'Nenhum jogador foi encontrado nesse time')
        } finally {
            setIsLoading(false)
        }
    }

    async function handleDeletePlayer(playerName: string) {
        try {
            await deletePlayer(playerName, group)
            fetchPlayersByTeam()

        } catch (error) {
            console.log(error)
            Alert.alert('Excluir jogador', 'Não foi possível excluir esse jogador')
        }
    }

    async function deletedGroup() {
        try {
            await deleteGroup(group)
            navigation.navigate('groups')

        } catch (error) {
            console.log(error)
            Alert.alert('Excluir grupo', 'Não foi possível excluir o grupo')
        }
    }

    async function handledeletedGroup() {
        Alert.alert(
            'Excluir grupo',
            'Deseja excluir esse grupo',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => deletedGroup() }
            ]

        )
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />

            <Form>
                <Input
                    inputRef={inputFocusOff}
                    onChangeText={setNewPlayer}
                    value={newPlayer}
                    placeholder='Nome do participante'
                    autoCorrect={false}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType='done'
                />


                <ButtonIcon
                    icon='add'
                    onPress={handleAddPlayer}
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={['time a', 'time b']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <PlayerCount>
                    {players.length}
                </PlayerCount>
            </HeaderList>

            {
                isLoading ? <Loading /> :

                    <FlatList
                        data={players}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <PlayerCard
                                name={item.name}
                                onDelete={() => { handleDeletePlayer(item.name) }}
                            />
                        )}

                        ListEmptyComponent={() => (
                            <ListEmpty
                                message='Ainda não foi adicionado jogadores a esse time'
                            />
                        )}

                        contentContainerStyle={[
                            { paddingBottom: 15, },
                            players.length === 0 && { flex: 1 },
                        ]}
                    />
            }



            <Button
                title='Remover grupo'
                type='secondary'
                onPress={handledeletedGroup}
            />
        </Container>
    )
}