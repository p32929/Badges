export const replacer = (str, state) => {
    return str.replace(/user/g, state.user).replace(/repo/g, state.repo).replace(/dartpackage/g, state.dartpackage)
}