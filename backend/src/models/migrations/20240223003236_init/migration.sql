-- CreateTable
CREATE TABLE "User" (
    "username" VARCHAR(75) NOT NULL,
    "email" VARCHAR(75) NOT NULL,
    "password" VARCHAR(75) NOT NULL,
    "moderator" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Post" (
    "postId" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "postDate" TIMESTAMP(3) NOT NULL,
    "publisherId" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postId")
);

-- CreateTable
CREATE TABLE "Comment" (
    "commentId" SERIAL NOT NULL,
    "postDate" TIMESTAMP(3) NOT NULL,
    "commentterId" TEXT NOT NULL,
    "commenttedPostId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentId")
);

-- CreateTable
CREATE TABLE "AddToCart" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "addedPostId" INTEGER NOT NULL,

    CONSTRAINT "AddToCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddToFavorites" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "addedPostId" INTEGER NOT NULL,

    CONSTRAINT "AddToFavorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AddToCart_userId_key" ON "AddToCart"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AddToCart_addedPostId_key" ON "AddToCart"("addedPostId");

-- CreateIndex
CREATE UNIQUE INDEX "AddToFavorites_userId_key" ON "AddToFavorites"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AddToFavorites_addedPostId_key" ON "AddToFavorites"("addedPostId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_commentterId_fkey" FOREIGN KEY ("commentterId") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_commenttedPostId_fkey" FOREIGN KEY ("commenttedPostId") REFERENCES "Post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddToCart" ADD CONSTRAINT "AddToCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddToCart" ADD CONSTRAINT "AddToCart_addedPostId_fkey" FOREIGN KEY ("addedPostId") REFERENCES "Post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddToFavorites" ADD CONSTRAINT "AddToFavorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddToFavorites" ADD CONSTRAINT "AddToFavorites_addedPostId_fkey" FOREIGN KEY ("addedPostId") REFERENCES "Post"("postId") ON DELETE RESTRICT ON UPDATE CASCADE;
