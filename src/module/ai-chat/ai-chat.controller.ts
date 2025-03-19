import express from "express";
import AiChatServices from "./ai-chat.service";

const create = async (req: express.Request, res: express.Response) => {
  const question = req.body.question;
};

const fetch = async (req: express.Request, res: express.Response) => {
  const results = await AiChatServices.fetch(req.body);
};
