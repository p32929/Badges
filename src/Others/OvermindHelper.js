// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        user: "p32929",
        repo: "EasiestSqlLibrary",
        dartpackage: "easiestdb"
    },
    actions: {
        setUser({state}, user) {
            state.user = user
        },
        setRepo({state}, repo) {
            state.repo = repo
        },
        setDartPackage({state}, dartpackage) {
            state.dartpackage = dartpackage
        }
    }
});
