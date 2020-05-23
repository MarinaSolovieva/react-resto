export const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED",
        payload: newMenu
    }
};

 export const menuRequested = () => {
    return {
        type: "MENU_REQUESTED"
    }
};

export const menuError = () => {
    return {
        type: "MENU_ERROR"
    }
};

export const addedToCart = (id) => {
    return {
        type: "ITEM_ADD_TO_CART",
        payload: id
    }
};

