/**
 * @api {get} /api/users/create Create User
 *
 * Resolva o exercício aqui:
 *
 * - Crie uma API que registre um usuário no array users
 * - A request deve receber apenas o método POST
 * - A request deve receber um body com os dados do usuário
 * - O body vai seguir a interface IUserCreate, removendo o id
 * - Você deve corrigir a interface IUserCreate em src/types/user.d.ts
 */

import { NextApiRequest, NextApiResponse } from "next/types";

import { IUser, IUserCreate } from "@/types/user.d";

const users: IUser[] = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        try {
            const { name, email }: IUserCreate = req.body;

            if (!name || !email) {
                return res.status(400).json({ error: "Nome e email são obrigatórios." });
            }

            const newUser: IUser = {
                id: users.length + 1,
                name,
                email,
            };

            users.push(newUser);

            console.log(users);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao criar o usuário." });
        }
    } else {
        return res.status(405).json({ error: "Método não permitido. Use POST." });
    }
};
