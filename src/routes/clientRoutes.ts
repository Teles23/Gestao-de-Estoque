import { Router } from "express";
import {
	searchCustomer,
	searchCustomers,
} from "../controllers/clientController";

const router = Router();

router.get("/getClients", searchCustomers);
router.get("/getClients/:id", searchCustomer);

export default router;
