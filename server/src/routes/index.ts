import express from "express"
import nodemailer from "nodemailer";
import {  NodemailerMailAdapter } from "../adapters/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "../repositories/Prisma/prisma-feedbacks-repository";
import { SubmitFeedBackUseCase } from "../use-cases/submit-feedback-use-case";
import { prisma } from "./../prisma";
export const routes = express.Router()


routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailMailAdapter =  new NodemailerMailAdapter() 
    const submitFeedbackUseCase = new SubmitFeedBackUseCase(prismaFeedbackRepository,nodemailMailAdapter)

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })
    return res.status(201).send();
  });