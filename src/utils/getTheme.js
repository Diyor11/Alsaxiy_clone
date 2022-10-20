export default function getTheme(type, name) {
    return ({theme}) => theme[type][name]
}