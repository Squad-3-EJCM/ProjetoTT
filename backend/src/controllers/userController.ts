import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({});

import { Request, Response } from 'express';

async function createUser(request:Request, response:Response) {
  try {
    const user = await prisma.user.create(
      {data: request.body}
    )
    response.status(201).json(user);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

async function readUser(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const user = await prisma.user.findUnique(
      {where: {id: String(id)}}
    )
    response.status(200).json(user);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

async function updateUser(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const user = await prisma.user.update(
      {
        data: request.body,
        where: {id: String(id)}
      }
    )
    response.status(200).json(user);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

// Não há método destroy porque não havia a opção de deletar usuários na prototipagem

export {
  createUser,
  readUser,
  updateUser
}
