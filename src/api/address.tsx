import { ENV } from '@/app/utils/constants';
import { authFetch } from "@/app/utils/authFetch";

export class Address {
    async create(data: Record<string, any>, userId: number) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`
            const params = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        ...data,
                        user: userId,
                    }
                })
            };
            const response = await authFetch(url, params);
            const result = await response?.json();

            if (response?.status !== 200) throw result;
            return result
        } catch (error) {
            throw error
        }
    }

    async getAll(userId: number) {
        try {
            const filters = `filters[user][id][$eq]=${userId}`
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`

            const response = await authFetch(url);
            const result = await response?.json()

            if (response?.status !== 200) throw result

            return result;
        } catch (error) {
            throw error
        }
    }

    async update(data: Record<string, any>, addressId: number) {

        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`
            const params = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data }),
            };

            const response = await authFetch(url, params);
            const result = await response?.json();

            if (response?.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error
        }
    }

    async delete(addressId: number) {
        try {
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`
            const params = {
                method: "DELETE",
            };

            const response = await authFetch(url, params);
            const result = await response?.json();

            if (response?.status !== 200) throw result;

            return result
        } catch (error) {
            throw error
        }
    }
}
