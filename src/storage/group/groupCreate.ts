import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION } from "@storage/config"
import { getGroups } from "./getGroups"
import { AppError } from "@utils/appError"

export async function groupCreate(newGroup: string) {
    try {
        const storedGroup = await getGroups()

        const checkGroup = storedGroup.includes(newGroup)

        if (checkGroup) {
            throw new AppError('Você já possui um grupo com este nome')


            // CLEAR STORAGE
            // const allKeys = await AsyncStorage.getAllKeys()
            // await AsyncStorage.multiRemove(allKeys)
            // console.log('All data deleted successfully!')
        }

        const storage = JSON.stringify([...storedGroup, newGroup])

        await AsyncStorage.setItem(GROUP_COLLECTION, storage)
    } catch (error) {
        throw error
    }
}