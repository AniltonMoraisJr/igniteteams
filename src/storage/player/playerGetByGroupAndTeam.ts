import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "@storage/storage.config";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerGetByGroupAndTeam(
  group: string,
  team: string
): Promise<PlayerStorageDTO[]> {
  try {
    const storedPlayersByGroup = await playerGetByGroup(group);

    const players: PlayerStorageDTO[] = storedPlayersByGroup
      ? storedPlayersByGroup.filter((player) => player.team === team)
      : [];

    return players;
  } catch (error) {
    throw error;
  }
}
