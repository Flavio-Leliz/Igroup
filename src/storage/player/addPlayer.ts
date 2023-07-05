import AsyncStorage from "@react-native-async-storage/async-storage"
import { PLAYER_COLLECTION } from "@storage/config"
import { PlayerStorageDTO } from "./PlayerStorageDTO"
import { getPlayerByGroups } from "./getPlayersByGroups"
import { AppError } from "@utils/appError"

export async function addPlayer(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storagePlayers = await getPlayerByGroups(group)
        const playerRepeated = storagePlayers.filter((player) => player.name === newPlayer.name)

        if (playerRepeated.length > 0) {
            throw new AppError('Este jogador já foi adicionado a outro time')
        }

        const storage = JSON.stringify([...storagePlayers, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)

    } catch (error) {
        throw error
    }
}