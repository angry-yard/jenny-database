//import * as knex from "knex";

export class QueryBuilder {
    //private sql: knex;

    constructor() {
        //this.sql = knex({client: "mssql"});
    }

    getTables = (includedTables?: string[], excludedTables?: string[]): string => {
        return null;
        //return this.sql("table").insert("test").toString();
    };
}