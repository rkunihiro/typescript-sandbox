import { Resolver, Query } from "type-graphql";
import { Test } from "../entity/Test";

@Resolver(of => Test)
export class TestResolver {
    @Query(returns => [Test])
    public async getTest(): Promise<Test[]> {
        const tests = Test.find();
        return tests;
    }
}
