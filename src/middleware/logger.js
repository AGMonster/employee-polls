const logger = (store) => (next) => (action) => {

    console.group(action.type)
    console.log(action)
    const returnVal = next(action)
    console.log("new state is", store.getState())
    console.groupEnd()
    return returnVal
}

export default logger