/**
 * Gets random element from Array
 * @param  {[*]} source
 * @return {*} One element from array
 */
export const random = (source) => {
    if (!Array.isArray(source)) {
        console.error(`rand expects an array but received ${source}`)
    }
    return source[Math.floor(Math.random() * source.length)];
}
