import { Router } from "express";
import {
  createExpense,
  getArrayExpenses,
  getExpenseById,
  updateExpense,
  deleteExpense,
} from "../controllers/expense";

const router = Router();

router.post("/:userId", createExpense);
router.get("/", getArrayExpenses);
router.get("/:id", getExpenseById);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;
