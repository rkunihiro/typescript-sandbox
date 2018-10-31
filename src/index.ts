import { createConnection } from "typeorm";
import { Test } from "./entity/Test";

// tslint:disable-next-line:no-console
console.log("Hello,World!");

const main = async () => {
    const connection = await createConnection({
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

    // const testRepo = connection.getRepository(Test);
    // const tests = await testRepo.find();
    const tests = await Test.find();
    // tslint:disable-next-line:no-console
    console.log(JSON.stringify(tests, null, 2));

    await connection.close();
};
main().catch(err => {
    // tslint:disable-next-line:no-console
    console.error(err);
});
