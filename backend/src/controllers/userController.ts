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
  const {username}=request.body
  try {
    const user = await prisma.user.findUnique(
      {where: {username: username}}
    )
    response.status(200).json(user);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

async function updateUser(request:Request, response:Response) {
  const {username,email,password,oldUsername}=request.body
  try {
    const user = await prisma.user.update(
      {
        data: {"username":username,"email":email,"password":password},
        where: {username: oldUsername}
      }
    )
    response.status(200).json(user);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

// Não há método destroy porque não havia a opção de deletar usuários na prototipagem

module.exports =  {
  createUser,
  readUser,
  updateUser
}
