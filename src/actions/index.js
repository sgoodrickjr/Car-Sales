export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const ADD_CAR = "ADD_CAR";

export const addFeature = () => {
    console.log('added new feature')
    return {
        type: ADD_FEATURE
    }
}

export const removeFeature = () => {
    console.log('removed feature')
    return {
        type: REMOVE_FEATURE
    }
}

export const addCar = newCar => {
    console.log('added new car')
    return {
        type: ADD_CAR,
        payload: newCar
    }
}
