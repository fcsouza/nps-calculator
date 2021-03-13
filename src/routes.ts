import { Router } from "express";

import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";


const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();


export { router };
