import { Router } from "express";
import {
  postUser,
  getArrayUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/user";

const router = Router();

router.post("/", postUser);
router.get("/", getArrayUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
