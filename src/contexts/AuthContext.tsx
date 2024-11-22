"use client";
import { User } from "@/api";
import { Token } from "@/api/token";
import { createContext, useEffect, useState } from "react";

interface AuthContextType {
    accessToken: string | null,
    user: Record<string, any> | null,
    login: (token: string) => void
    logout: () => void
    updateUser: (key: any, value: string) => void
}

export const AuthContext = createContext<AuthContextType | null>(null);;
interface ConfigProviderProps {
    children?: React.ReactNode
}

const tokenCtrl = new Token();
const userCtrl = new User();

export function AuthProvider(props: any) {

    const { children } = props
    const [user, setUser] = useState({});
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async () => {

            const token = tokenCtrl.getToken();

            if (!token) {
                logout();
                setLoading(false);
                return;
            }

            if (tokenCtrl.hasExpired(token)) {
                logout();
            } else {
                await login(token);
            }
        })();
    }, []);


    const login = async (token: string) => {
        try {
            // Guardamos el token en el local storage
            tokenCtrl.setToken(token);
            // Obtenemos los datos del usuario
            const response = await userCtrl.getMe();
            // Seteamos los datos del usuario
            setUser(response)
            // Seteamos el token del usuario
            setToken(token);
            // Seteamos el loading en false 
            setLoading(false)
        } catch (error) {
            console.error(error);
            setLoading(false);

        }
    }

    const logout = () => {
        tokenCtrl.removeToken();
        setToken(null);
        setUser({});

    };

    const updateUser = (key: any, value: string) => {
        setUser({
            ...user,
            [key]: value,
        })
    };

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser
    };

    if (loading) return null;

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}