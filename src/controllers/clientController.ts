import { Request, Response } from "express";
import { getClients, getClientById } from "../services/clientService";

export const searchCustomers = async (req: Request, res: Response) => {
	try {
		const clients = await getClients();
		res.json(clients);
	} catch (err) {
		res.status(500).json({ message: "Erro ao ler arquivo de clientes" });
	}
};

export const searchCustomer = async (req: Request, res: Response) => {
	try {
		const client = await getClientById(parseInt(req.params.id));
		if (client) {
			res.json(client);
		} else {
			res.status(404).json({ message: "Cliente não encontrado" });
		}
	} catch (err) {
		res.status(500).json({ message: "Erro ao ler arquivo de clientes" });
	}
};
