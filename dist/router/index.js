"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const auth_controller_1 = require("../controller/auth-controller");
const user_controller_1 = require("../controller/user-controller");
const favorite_controller_1 = require("../controller/favorite-controller");
const comment_controller_1 = require("../controller/comment-controller");
const users_controller_1 = require("../controller/users-controller");
const anime_controller_1 = require("../controller/anime-controller");
const manga_controller_1 = require("../controller/manga-controller");
const r = new hono_1.Hono();
r.route('/auth', auth_controller_1.authController);
r.route('/user', user_controller_1.userController);
r.route('/users', users_controller_1.usersController);
r.route('/favorite', favorite_controller_1.favoriteController);
r.route('/comment', comment_controller_1.commentController);
r.route('/anime', anime_controller_1.animeController);
r.route('/manga', manga_controller_1.mangaController);
exports.default = r;
