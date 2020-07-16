export const servicesAndBadges = [
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
        moreDetails: "https://badgen.net/"
    },
    {
        name: "Dart pub",
        badges: ["https://badgen.net/pub/v/dartpackage",
            "https://badgen.net/pub/v/dartpackage",
            "https://badgen.net/pub/license/dartpackage",
            "https://badgen.net/pub/likes/dartpackage",
            "https://badgen.net/pub/sdk-version/dartpackage",
            "https://badgen.net/pub/flutter-platform/dartpackage"],
        moreDetails: "https://badgen.net/"
    }
]