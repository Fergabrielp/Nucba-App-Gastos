import { Request, Response } from "express";
import {
  createOneExpense,
  deleteOneExpense,
  getAllExpenses,
  getOneExpense,
  updateOneExpense,
} from "../services/expense";

export const createExpense = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const dataExpense = req.body;
    const newExpense = await createOneExpense(userId, dataExpense);
    res.status(201).json({ msg: "Expense succesfuly created", newExpense });
  } catch (error) {
    res.status(500).json({ msg: "Error creating a new expense", error });
  }
};

export const getArrayExpenses = async ({}, res: Response) => {
  try {
    const expensesArray = await getAllExpenses();
    res.status(200).json({ msg: "Expenses Array: ", expensesArray });
  } catch (error) {
    res.status(500).json({ msg: "Error finding Expenses in database", error });
  }
};

export const getExpenseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const expenseFound = await getOneExpense(id);
    res.status(200).json({ msg: "Expense found:", expenseFound });
  } catch (error) {
    res.status(500).json({ msg: "Error finding a new Expense", error });
  }
};

export const updateExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const expenseUpdated = await updateOneExpense(id, dataToUpdate);
    res.status(200).json({ msg: "Expense Updated:", expenseUpdated });
  } catch (error) {
    res.status(500).json({ msg: "Error updating a Expense", error });
  }
};

export const deleteExpense = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const expenseDeleted = await deleteOneExpense(id);
    res.status(200).json({ msg: "Expense deleted:", expenseDeleted });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting an Expense", error });
  }
};
