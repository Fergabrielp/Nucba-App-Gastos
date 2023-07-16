import { Router } from "express";
import {
  postUser,
  getArrayUsers,
  getUserById,
  createExpense,
  deleteUser,
  updateUser,
  geExpenseByUser,
} from "../controllers/user";

const router = Router();

router.post("/", postUser);
router.get("/", getArrayUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/:id", createExpense);
router.get("/exp/:id", geExpenseByUser);

export default router;
