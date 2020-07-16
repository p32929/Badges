export const replacer = (str, state) => {
    return str.replace("user", state.user).replace("repo", state.repo)
}