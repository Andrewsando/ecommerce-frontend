import { ENV } from '@/app/utils/constants';

export class Platform {
    async getAll() {
        try {
            const sort = "sort=order:asc"
            const populate = "populate=images"
            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${populate}&${sort}`;

            const response = await fetch(url);
            const result = await response.json();

            if (response.status !== 200) throw result;
            return result;
        } catch (error) {
            throw error;
        }
    }
}