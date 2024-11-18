import { authFetch } from '@/utils/authFetch';
import { ENV } from '@/utils/constants';
import { forEach } from 'lodash';

interface CartItem { id: number; quantity: number; };

export class Cart {
    add(gameId: any) {
        const games = this.getAll();
        const objIndex = games.findIndex((game: CartItem) => game.id === gameId)

        if (objIndex < 0) {
            console.log(123, objIndex);
            console.log(1234, gameId);

            games.push({ id: gameId, quantity: 1 })
        } else {
            const game = games[objIndex]
            games[objIndex].quantity = game.quantity + 1;

        }
        localStorage.setItem(ENV.CART, JSON.stringify(games))
    }

    getAll() {
        const response = localStorage.getItem(ENV.CART);

        if (!response) {
            return [];
        } else {
            return JSON.parse(response)
        }
    }

    count() {
        const response = this.getAll();
        let count = 0;

        forEach(response, (item) => {
            count += item.quantity;

        })
        return count;
    }

    changeQuantity(gameId: number, quantity: number) {
        const games = this.getAll();
        const objIndex = games.findIndex((game: any) => game.id === gameId);

        games[objIndex].quantity = quantity;

        localStorage.setItem(ENV.CART, JSON.stringify(games))
    }

    delete(gameId: number) {
        const games = this.getAll();
        const updateGames = games.filter((game: any) => game.id !== gameId)

        localStorage.setItem(ENV.CART, JSON.stringify(updateGames))

    }

    deleteAll() {
        localStorage.removeItem(ENV.CART)
    }

    async paymentCart(token: any, products: any, idUser: number, address: any) {
        try {

            const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT_ORDER}`;
            const params = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    token,
                    products,
                    idUser,
                    addressShipping: address,
                }),
            }
            const response = await authFetch(url, params)

            return response;
        } catch (error) {
            throw error
        }
    }
}