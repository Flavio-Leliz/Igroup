import { Header } from '@components/Header'
import { Container } from './styles'
import { Highlight } from '@components/Highlight'
import { GroupCard } from '@components/GroupCard'
import { useState, useCallback } from 'react'
import { Alert, FlatList } from 'react-native'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getGroups } from '@storage/group/getGroups'
import { Loading } from '@components/Loading'


export function Groups() {
    const [isLoading, setIsLoading] = useState(true)
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()

    function handleRouter() {
        navigation.navigate('new')
    }

    async function fetchGroups() {
        try {
            setIsLoading(true)

            const data = await getGroups()
            setGroups(data)

        } catch (error) {
            console.log(error)
            Alert.alert('Erro!', 'Não foi possível carregar os grupos')
        } finally {
            setIsLoading(false)
        }
    }

    function handleOpenGroup(group: string) {
        navigation.navigate('players', { group })
    }

    useFocusEffect(useCallback(() => {
        fetchGroups()
    }, []))

    return (
        <Container >
            <Header />
            <Highlight
                title='Grupos'
                subtitle='Monte o seu grupo'
            />

            {
                isLoading ? <Loading /> :

                    <FlatList
                        data={groups}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <GroupCard
                                title={item}
                                onPress={() => handleOpenGroup(item)}
                            />
                        )}

                        contentContainerStyle={[
                            { paddingBottom: 15, },
                            groups.length === 0 && ({
                                flex: 1
                            })
                        ]}

                        ListEmptyComponent={() => (
                            <ListEmpty
                                message='Nenhum grupo foi criado'
                            />
                        )}
                    />
            }

            <Button
                title='Próximo passo'
                onPress={handleRouter}
            />
        </Container>
    )
}

