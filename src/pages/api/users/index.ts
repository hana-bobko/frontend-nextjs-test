/**
 * @api {get} /api/users Read list
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que retorne uma lista de usuários
 * - A request deve receber apenas o método GET
 * - A lista deve conter pelo menos 2 usuários
 * - Cada usuário deve ter um id, nome e email
 * - Utilize a interface IUser para tipar os dados
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { IUser } from "@/types/user.d";

{
    /*FEITO ✅*/
}
export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const users: IUser[] = [
            { id: 0, name: "João Silva", email: "joao.silva@email.com" },
            { id: 1, name: "Maria Joaquina", email: "maria.oliveira@email.com" },
            { id: 2, name: "Paulo Cirilo", email: "paulo.cirilo@email.com" },
        ];

        return res.status(200).json(users);
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
};
