// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";
import {servicesAndBadges} from '../Others/GlobalVars'

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        user: "p32929",
        repo: "EasiestSqlLibrary",
        dartpackage: "easiestdb",
        servicesAndBadges
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
        },
        setCheckboxState({state}, cb) {
            console.log(cb.b)
            console.log(cb.index)
            console.log(cb.index2)

            state.servicesAndBadges[cb.index].checked[cb.index2] = cb.b;
        }
    }
});
