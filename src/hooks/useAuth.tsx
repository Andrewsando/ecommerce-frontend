import { AuthContext } from "@/contexts";
import { useContext } from "react";

export const useAuth = () => {
  const context =  useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within a AuthProvider")
  }
  return context
}