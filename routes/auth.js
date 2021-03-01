import express from "express";
import controllers from "../controllers/index.js";

import { isAuth } from '../helpers/authentication.js';
import { isAdmin, isDeveloper, isModerator, isQA } from '../helpers/authorization.js';

const router = express.Router();

router.post('/registration', isAuth, controllers.auth.post.registration);
router.post('/login', controllers.auth.post.login);
router.post('/logout', isAuth, isAdmin, isDeveloper, isModerator, isQA, controllers.auth.post.logout);

export default router;