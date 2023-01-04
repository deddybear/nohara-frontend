import { globalState } from "./globalState"

export const rootReducer = (state = globalState, action ) => {
    if(action.type === 'OPEN_SIDEBAR') {
        return {
            ...state,
            open: true
        }
    }

    if (action.type === 'CLOSE_SIDEBAR') {
        return {
            ...state,
            open: false
        }
    }

    if (action.type === 'CHOOSE_DASHBOARD') {
        return {
            ...state,
            menuText: 'Main Menu'
        }
    }

    if (action.type === 'CHOOSE_CARAOUSEL') {
        return {
            ...state,
            menuText: 'Caraousel'
        }
    }

    if (action.type === 'CHOOSE_LAYANAN') {
        return {
            ...state,
            menuText: 'Layanan'
        }
    }

    if (action.type === 'CHOOSE_PROTOFO') {
        return {
            ...state,
            menuText: 'Protofolio'
        }
    }

    if (action.type === 'CHOOSE_ABOUT') {
        return {
            ...state,
            menuText: 'About'
        }
    }

    return state;
}