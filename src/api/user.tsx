import { authFetch } from "@/utils/authFetch";
import { ENV } from "@/utils/constants";

export class User {
    async getMe() {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;



            const response = await authFetch(url);
            const result = await response?.json();

            if (response?.status !== 200) throw result

            return result;
        } catch (error) {
            throw error
        }
    }
    async updateMe(userId:number, data:any) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;

            const params = {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            };
            const response = await authFetch(url, params);
            const result = await response?.json()

            if(response?.status != 200 ) throw result;
            return result

        } catch (error) {
            throw error;
        }
    }
}

