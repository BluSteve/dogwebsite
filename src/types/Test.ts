/* eslint-disable no-unused-vars */
// noinspection ES6UnusedImports

import {login, signup} from "./UserController";
import {getProjects} from "./ProjectController";
import {UserType} from "./OctopiTypes";

global.fetch = require("node-fetch");

export async function main() {
    console.log(await signup('philcollins', 'asdf', 'phil collins', 'phil@phil.com', UserType.ADMIN));
    // console.log(await login('steve', 'MjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='));
    //
    // console.log(await getProjects());
}

main().then()
