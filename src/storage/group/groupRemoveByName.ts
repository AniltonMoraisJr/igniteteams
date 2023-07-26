import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groupGetAll";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storage.config";

export async function groupRemoveByName(deletedGroup: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter((group) => group !== deletedGroup);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${deletedGroup}`);
  } catch (error) {
    throw error;
  }
}
