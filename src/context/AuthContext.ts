import { createContext } from "react";
import type { AuthContextData, User } from "../types";

export type { AuthContextData, User };

export const STORAGE_KEY = "@RouteBoard:auth";
export const AuthContext = createContext<AuthContextData | null>(null);
