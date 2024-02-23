import { Router } from "express";
const userController = require( "../controllers/userController");
const postController = require("../controllers/postController");
const commentControllers = require("../controllers/commentController");
const addToFavoritesController = require("../controllers/addToFavoritesController");
const addToCartController = require("../controllers/addToCartController");

// import {createUser} from "../controllers/userController";

const router = Router();

// router.post("/User",createUser);
router.post("/User",userController.createUser);
router.get("/User",userController.readUser);
router.put("/User",userController.updateUser);

router.post("/Post",postController.createPost);
router.get("/Post",postController.readPost);
router.put("/Post",postController.updatePost);
router.delete("/Post",postController.destroyPost);

router.post("/Comment",commentControllers.createComment);
router.get("/Commment",commentControllers.readComment);
router.put("/Comment",commentControllers.updateComment);
router.delete("/Comment",commentControllers.destroyComment);

router.post("/AddToFavorites",addToFavoritesController.createFavorite);
router.get("/AddToFavorites",addToFavoritesController.readFavorite);
router.put("/AddToFavorites",addToFavoritesController.updateFavorite);
router.delete("/AddToFavorites",addToFavoritesController.destroyFavorite);

router.post("/AddToCart",addToCartController.createCart);
router.get("/AddToCart",addToCartController.readCart);
router.put("/AddToCart",addToCartController.updateCart);
router.delete("/AddToCart",addToCartController.destroyCart);



export default router;