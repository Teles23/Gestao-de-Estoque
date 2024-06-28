import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(__dirname, "../../data/clients.json");

export const getClients = async () => {
	const data = await fs.readFile(filePath, "utf8");
	return JSON.parse(data);
};

export const getClientById = async (id: number) => {
	const data = await fs.readFile(filePath, "utf8");
	const clients = JSON.parse(data);
	return clients.find((client: { id: number }) => client.id === id);
};
