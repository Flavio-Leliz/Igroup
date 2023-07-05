import { getPlayerByGroups } from "./getPlayersByGroups"

export async function getPlayerByTeam(group: string, team: string) {
    try {
        const storage = await getPlayerByGroups(group)
        const players = storage.filter((player) => player.team === team)

        return players

    } catch (error) {
        throw error
    }
}