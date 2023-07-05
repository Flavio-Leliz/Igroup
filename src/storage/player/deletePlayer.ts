import AsyncStorage from "@react-native-async-storage/async-storage"
import { getPlayerByGroups } from "./getPlayersByGroups"
import { PLAYER_COLLECTION } from "@storage/config"

export async function deletePlayer(playerName: string, group: string) {
    try {
        const storage = await getPlayerByGroups(group)

        const filtered = storage.filter((player) => player.name !== playerName)
        const players = JSON.stringify(filtered)

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)

    } catch (error) {
        throw error
    }
}