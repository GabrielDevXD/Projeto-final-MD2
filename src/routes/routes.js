import express from "express";
import {
  getHome,
  getAdd,
  getRead,
  postAdd,
  getUpdate,
  updatePost,
  getDelete,
} from "../controller/PersonagensController.js";

export const router = express.Router();

router.get("/", getHome);
router.get("/adicionar", getAdd);
router.post("/adicionar", postAdd);
router.get("/detalhes/:id", getRead);
router.get("/update/:id", getUpdate);
router.post("/update/:id", updatePost);
router.get("/deletar/:id", getDelete);
