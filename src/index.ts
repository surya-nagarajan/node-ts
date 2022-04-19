import express, { Request, Response } from "express";
const { Client } = require("pg");
import path from "path";
import { migrate } from "postgres-migrations";

const app = express();

const port = 5001;

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "password",
//   port: 5432,
// });
// client.connect(function (err: any) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// const migrateFunction=async()=> {
//   const dbConfig:any = {
//     database: "database-name",
//     user: "postgres",
//     password: "password",
//     host: "localhost",
//     port: 5432,
//     ensureDatabaseExists: true,
//     defaultDatabase: "postgres"
//   }

//   await migrate(dbConfig, path.resolve(__dirname, 'db/migrations/sql'));
//   console.log("inside function after")

// }

const migrateFunction = async () => {
    const dbConfig = {
        database: "postgres",
        user: "postgres",
        password: "password",
        host: "localhost",
        port: 5432,
    };

    // Note: when passing a client, it is assumed that the database already exists
    const client = new Client(dbConfig); // or a Pool, or a PoolClient
    await client.connect();
    try {
        await migrate({ client }, path.resolve(__dirname, "db/migrations/sql"));
    } finally {
        await client.end();
    }
};

app.get("/", (req, res) => {
    res.send("working");
});

app.listen(port, () => {
    console.log(`i am listening on ${port}`);
    migrateFunction();
});
