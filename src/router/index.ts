import { Hono } from "hono";
import { authController } from "../controller/auth-controller";
import { userController } from "../controller/user-controller";
import { favoriteController } from "../controller/favorite-controller";
import { commentController } from "../controller/comment-controller";
import { usersController } from "../controller/users-controller";
import { animeController } from "../controller/anime-controller";
import { mangaController } from "../controller/manga-controller";

const r = new Hono();

r.route('/auth', authController);
r.route('/user', userController);
r.route('/users', usersController)
r.route('/favorite', favoriteController);
r.route('/comment', commentController);
r.route('/anime', animeController)
r.route('/manga', mangaController)

export default r;
