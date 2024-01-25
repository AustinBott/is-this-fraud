const { Router } = require("express");
const calendarRoutes = require("./calendarRoutes");
const eventRoutes = require("./eventRoutes");
const gptRoutes = require("./chatGPTRoutes");
const userRoutes = require("./userRoutes");

const rootRouter = Router();

rootRouter.use(calendarRoutes, eventRoutes, gptRoutes, userRoutes);

export default rootRouter;
