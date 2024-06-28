import express, { Request, Response } from "express";
import path from "path";
import { promises as fs } from "fs";

const app = express();
const PORT = 3000;

// Função para buscar todos os clientes
const buscarClientes = async (req: Request, res: Response) => {
	try {
		const filePath = path.join(__dirname, "../data/clients.json");
		const data = await fs.readFile(filePath, "utf8");
		const clients = JSON.parse(data);
		res.json(clients);
	} catch (err) {
		res.status(500).json({ message: "Erro ao ler arquivo de clientes" });
	}
};

// Função para buscar um cliente por ID
const buscarCliente = async (req: Request, res: Response) => {
	try {
		const filePath = path.join(__dirname, "../data/clients.json");
		const data = await fs.readFile(filePath, "utf8");
		const clients = JSON.parse(data);
		const client = clients.find(
			(client: { id: number }) => client.id === parseInt(req.params.id)
		);

		if (client) {
			res.json(client);
		} else {
			res.status(404).json({ message: "Cliente não encontrado" });
		}
	} catch (err) {
		res.status(500).json({ message: "Erro ao ler arquivo de clientes" });
	}
};

// Rota para obter todos os clientes
app.get("/getClients", buscarClientes);

// Rota para obter um cliente por ID
app.get("/getClients/:id", buscarCliente);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
