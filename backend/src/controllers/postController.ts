import { PrismaClient,Prisma } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient({});


interface postInfo {
  description: string;
  image: string;
  title: string;
  price: string;
  postDate: Date;
  publisher: string;
}

async function createPost(request:Request, response:Response) {
  try {
    const {
      description,
      image,
      title,
      price,
      publisher
    }: postInfo = request.body;

    let postInput: Prisma.PostCreateInput = {
      description: description,
      image: image,
      title: title,
      price: parseFloat(price),
      postDate: new Date(),
      publisher: {
        connect: {
          username: publisher
        },
      }
    };

    const newPost = await prisma.post.create({
      data: postInput
    });

    return response.status(201).json(newPost);
  }
  catch(error) {
    return response.status(500).json({error: request.body})
  }
}

async function readPost(response:Response) {
  try {
    const post = await prisma.post.findMany()
    response.status(200).json(post);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

async function updatePost(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const post = await prisma.post.update(
      {
        data: request.body,
        where: {postId: Number(id)}
      }
    )
    response.status(200).json(post);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

async function destroyPost(request:Request, response:Response) {
  const {id} = request.params;
  try {
    const post = await prisma.post.delete(
      {where: {postId: Number(id)}}
    )
    response.status(204).json(post);
  }
  catch(error) {
    response.status(500).json({error:error})
  }
}

module.exports = {
  createPost,
  readPost,
  updatePost,
  destroyPost
}
