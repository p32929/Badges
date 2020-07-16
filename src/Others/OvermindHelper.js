// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {replacer} from '../Others/GlobalMethods'
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        user: "p32929",
        repo: "EasiestSqlLibrary",
        dartpackage: "easiestdb",
        code: "",
        servicesAndBadges: [
            {
                name: "Github",
                splitter: (value, actions) => {
                    try {
                        var splittedParts = new URL(value).pathname.split("/")
                        actions.setUser(splittedParts[1])
                        actions.setRepo(splittedParts[2])
                    } catch (e) {
                        //
                    }
                },
                badges: [
                    "https://badgen.net/github/release/user/repo",
                    "https://badgen.net/github/release/user/repo/stable",
                    "https://badgen.net/github/tag/user/repo",
                    "https://badgen.net/github/watchers/user/repo",
                    "https://badgen.net/github/checks/user/repo",
                    "https://badgen.net/github/status/user/repo",
                    "https://badgen.net/github/stars/user/repo",
                    "https://badgen.net/github/forks/user/repo",
                    "https://badgen.net/github/issues/user/repo",
                    "https://badgen.net/github/open-issues/user/repo",
                    "https://badgen.net/github/closed-issues/user/repo",
                    "https://badgen.net/github/label-issues/user/repo/help-wanted/open",
                    "https://badgen.net/github/prs/user/repo",
                    "https://badgen.net/github/open-prs/user/repo",
                    "https://badgen.net/github/closed-prs/user/repo",
                    "https://badgen.net/github/merged-prs/user/repo",
                    "https://badgen.net/github/commits/user/repo",
                    "https://badgen.net/github/last-commit/user/repo",
                    "https://badgen.net/github/branches/user/repo",
                    "https://badgen.net/github/releases/user/repo",
                    "https://badgen.net/github/tags/user/repo",
                    "https://badgen.net/github/license/user/repo",
                    "https://badgen.net/github/contributors/user/repo",
                    "https://badgen.net/github/dependents-pkg/user/repo"],
                moreDetails: "https://badgen.net/",
                checked: [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                ]
            },
            {
                name: "Dart pub",
                splitter: (value, actions) => {
                    try {
                        var splittedParts = new URL(value).pathname.split("/")
                        actions.setDartPackage(splittedParts[2])
                    } catch (e) {
                        //
                    }
                },
                badges: [
                    "https://badgen.net/pub/v/dartpackage",
                    "https://badgen.net/pub/likes/dartpackage",
                    "https://badgen.net/pub/sdk-version/dartpackage",
                    "https://badgen.net/pub/flutter-platform/dartpackage"
                ],
                moreDetails: "https://badgen.net/",
                checked: [
                    false,
                    false,
                    false,
                    false,
                ]
            }
        ]
    },
    actions: {
        setUser({state}, user) {
            state.user = user
        },
        setRepo({state}, repo) {
            state.repo = repo
            setCodeTexts(state)
        },
        setDartPackage({state}, dartpackage) {
            state.dartpackage = dartpackage
            setCodeTexts(state)
        },
        setCheckboxState({state}, cb) {
            state.servicesAndBadges[cb.index].checked[cb.index2] = cb.b;
            setCodeTexts(state)
        },
        setAllChecked({state}, index) {
            var checked = []
            for (var i = 0; i < state.servicesAndBadges[index].badges.length; i++) {
                checked[i] = true
            }
            state.servicesAndBadges[index].checked = checked
            setCodeTexts(state)
        },
        setAllUnchecked({state}, index) {
            var checked = []
            for (var i = 0; i < state.servicesAndBadges[index].badges.length; i++) {
                checked[i] = false
            }
            state.servicesAndBadges[index].checked = checked
            setCodeTexts(state)
        }
    }
});

var setCodeTexts = (state) => {
    var code = ""
    for (var i = 0; i < state.servicesAndBadges.length; i++) {
        for (var j = 0; j < state.servicesAndBadges[i].badges.length; j++) {
            if (state.servicesAndBadges[i].checked[j]) {
                // code += state.servicesAndBadges[i].badges[j] + "\n";
                // [![](https://badgen.net/pub/v/easiestdb)]()
                code += `[![](${state.servicesAndBadges[i].badges[j]})]() `
            }
        }
    }
    code = replacer(code, state)
    state.code = code;
}