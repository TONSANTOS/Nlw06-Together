import { Request, Response, NextFunction, json } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    // Verificar se usuário é admin
    const admin = true;

    if(admin) { // Se for admin pode seguir o fluxo, se não for pula pro error 401
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    })
}