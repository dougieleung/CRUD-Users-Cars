import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from './Schema';
import cors from "cors";
import { DataSource } from "typeorm";
import { User } from './Entities/User';
import { Car } from './Entities/Car';
import * as dotenv from 'dotenv';

dotenv.config();

const main = async () => {
  const myDataSource = new DataSource({
    type: "mysql",
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    logging: true,
    synchronize: false,
    entities: [User, Car]
  });
  await myDataSource
    .initialize()
    .then(() => {
      console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
      console.error(`Data Source initialization error`, err);
    });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/graphql", graphqlHTTP({
      schema,
      graphiql: true
  }))

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
