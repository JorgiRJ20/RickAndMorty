import AsyncStorage from "@react-native-async-storage/async-storage";
import {includes, remove,pull} from "lodash";
import {FAVORITE_STORAGE} from "../utils/Constans";

export const getFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || []);
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const addFavoriteApi = async (id, name) => {
    try {
        const favorite = await getFavoriteApi();
        if (!includes(favorite, id)) {
            favorite.push(id);
            await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorite));
        }
    } catch (error) {
        console.log(error);
    }
};

export const removeFavoriteApi = async (id) => {
    try {
        const favorite = await getFavoriteApi();
        remove(favorite, (item) => {
            return item === id;
        });
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorite));
    } catch (error) {
        console.log(error);
    }
}

