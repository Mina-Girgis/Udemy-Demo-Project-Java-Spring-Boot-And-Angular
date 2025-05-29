import { jwtDecode } from "jwt-decode";

export interface JwtPayload {
  userId: string;
  sub: string;
  iat: number;
  exp: number;
}


export const extractUserIdToken = ()=>{
    const token = localStorage.getItem('token');
    if (token) {
        const decoded = jwtDecode<JwtPayload>(token);
        const userId = decoded.userId;
        return userId;
    }
    return undefined;
};

