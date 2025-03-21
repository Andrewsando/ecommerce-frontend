import { ENV } from '@/utils/constants';
import { jwtDecode } from 'jwt-decode';


export class Token {
    setToken(token: string) {
        localStorage.setItem(ENV.TOKEN, token);

    }

    getToken() {
        return localStorage.getItem(ENV.TOKEN);
    }

    hasExpired(token: string): boolean {
        const tokenDecode = jwtDecode(token);
        const expireDate = tokenDecode?.exp ? tokenDecode.exp * 1000 : null;
        const currentDate = new Date().getTime();

        if (expireDate && currentDate > expireDate) {
            return true;
        }

        return false;
    }

    removeToken() {
        localStorage.removeItem(ENV.TOKEN);
    }
}


