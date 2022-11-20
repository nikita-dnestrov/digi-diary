import Express, { json, urlencoded } from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import { errorHandler, NotFoundError } from "./src/common";
import { CONFIG } from "./src/config";
import { globalRouter } from "./src/router";
import morgan from "morgan";
import cors from "cors";
import { jwtMiddleware } from "./src/common/jwt.middleware";

const app = Express();

app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use(jwtMiddleware);

app.use("/api", globalRouter);

app.all("*", async () => {
	throw new NotFoundError();
});

app.use(errorHandler);

app.listen(CONFIG.PORT, () => console.log(`Up on ${CONFIG.PORT}!`));
