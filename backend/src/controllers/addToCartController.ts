import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({});
 
import { Request, Response } from 'express';
 
async function createCart(request:Request, response:Response) {
  try {
    const cart = await prisma.addToCart.create(
      {data: request.body}
    )
    response.status(201).json(cart);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function readCart(response:Response) {
  try {
    const cart = await prisma.addToCart.findMany()
    response.status(200).json(cart);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
async function updateCart(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const cart = await prisma.addToCart.update(
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

async function destroyCart(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const cart = await prisma.addToCart.delete(
      {where: {id: Number(id)}}
    )
    response.status(200).json(cart);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}
 
module.exports = {
  createCart,
  readCart,
  updateCart,
  destroyCart
}
