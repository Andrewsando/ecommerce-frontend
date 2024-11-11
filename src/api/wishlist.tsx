import { authFetch } from "@/app/utils/authFetch";
import { ENV } from "@/app/utils/constants";

export class Wishlist {
    async check(userId: number, gameId: number) {
        try {
            const filterUser = `filters[user][id][$eq][0]=${userId}`;
            const filterGame = `filters[game][id][$eq][1]=${gameId}`;
            const urlParams = `${filterUser}&${filterGame}`;

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`


            const response = await authFetch(url);
            const result = await response?.json();

            if (response?.status !== 200) throw result
            if (result.data.length === 0) {
                return false
            }

            return result.data[0];
        } catch (error) {
            throw error
        }
    }

    async add(userId: number, gameId: number) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`;
            const params = {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    data:{
                        user: userId,
                        game: gameId
                    }
                })
            }

            const response = await authFetch(url, params);
            const result = await response?.json();

            if (response?.status !== 200) throw result

            return result.data;
        } catch (error) {
            throw error
        }
    }

    async delete(id: number) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}/${id}`;
            const params = {
                method: 'DELETE',
            }

            const response = await authFetch(url, params);
            const result = await response?.json();

            if (response?.status !== 200) throw result

            return result
        } catch (error) {
            throw error
        }
    }
}
