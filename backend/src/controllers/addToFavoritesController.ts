import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({});
 
import { Request, Response } from 'express';
 
async function createFavorite(request:Request, response:Response) {
  try {
    const favorite = await prisma.addToFavorites.create(
      {data: request.body}
    )
    response.status(201).json(favorite);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function readFavorite(response:Response) {
  try {
    const favorite = await prisma.addToFavorites.findMany()
    response.status(200).json(favorite);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function updateFavorite(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const favorite = await prisma.addToFavorites.update(
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
    const favorite = await prisma.addToFavorites.delete(
      {where: {id: Number(id)}}
    )
    response.status(200).json(favorite);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
module.exports = {
  createFavorite,
  readFavorite,
  updateFavorite,
  destroyFavorite
}
