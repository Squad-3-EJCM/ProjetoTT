import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({});
 
import { Request, Response } from 'express';
 
async function createComment(request:Request, response:Response) {
  try {
    const comment = await prisma.comment.create(
      {data: request.body}
    )
    response.status(201).json(comment);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function readComment(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const comment = await prisma.comment.findUnique(
      {where: {id: Number(id)}}
    )
    response.status(200).json(comment);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function updateComment(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const comment = await prisma.comment.update(
      {
        data: request.body,
        where: {id: Number(id)}
      }
    )
    response.status(200).json(comment);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

async function destroyComment(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const comment = await prisma.comment.delete(
      {where: {id: Number(id)}}
    )
    response.status(200).json(comment);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
export {
  createComment,
  readComment,
  updateComment,
  destroyComment
}
