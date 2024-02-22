import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({});
 
import { Request, Response } from 'express';
 
async function createFavorite(request:Request, response:Response) {
  try {
    const favorite = await prisma.favorite.create(
      {data: request.body}
    )
    response.status(201).json(favorite);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function readFavorite(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const favorite = await prisma.favorite.findUnique(
      {where: {id: Number(id)}}
    )
    response.status(200).json(favorite);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function updateFavorite(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const favorite = await prisma.favorite.update(
      {
        data: request.body,
        where: {id: Number(id)}
      }
    )
    response.status(200).json(favorite);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

async function destroyFavorite(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const favorite = await prisma.favorite.delete(
      {where: {id: Number(id)}}
    )
    response.status(200).json(favorite);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
export {
  createFavorite,
  readFavorite,
  updateFavorite,
  destroyFavorite
}
