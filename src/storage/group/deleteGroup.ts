import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/config"
import { getGroups } from "./getGroups"

export async function deleteGroup(deletedGroupSelect: string) {

    try {
        const storage = await getGroups()

        const groups = storage.filter((group) => group !== deletedGroupSelect)

        await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${deletedGroupSelect}`)

    } catch (error) {
        throw error
    }
}
