import { createConnection } from "typeorm";
import { GraphQLServer, Options } from "graphql-yoga";
import { buildSchema } from "type-graphql";
import { Test } from "./entity/Test";
import { TestResolver } from "./schema/Test";

const main = async () => {
    await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "test",
        password: "test",
        database: "test",
        entities: [Test],
        synchronize: false,
        logging: false,
    });

    const schema = await buildSchema({
        resolvers: [TestResolver],
    });
    const server = new GraphQLServer({
        schema,
    });
    const options: Options = {
        port: 4000,
        endpoint: "/graphql",
        subscriptions: "/subscriptions",
        playground: "/playground",
    };
    server.start(options, () => {
        // tslint:disable-next-line:no-console
        console.log(`Server is running on localhost:4000`);
    });
};
main();
