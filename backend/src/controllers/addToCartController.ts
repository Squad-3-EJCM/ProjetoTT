import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({});
 
import { Request, Response } from 'express';
 
async function createCart(request:Request, response:Response) {
  try {
    const cart = await prisma.cart.create(
      {data: request.body}
    )
    response.status(201).json(cart);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function readCart(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const cart = await prisma.cart.findUnique(
      {where: {id: Number(id)}}
    )
    response.status(200).json(cart);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function updateCart(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const cart = await prisma.cart.update(
      {
        data: request.body,
        where: {id: Number(id)}
      }
    )
    response.status(200).json(cart);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
export {
  createCart,
  readCart,
  updateCart
}
