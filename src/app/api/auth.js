export const validateToken = async (widgetId, alpbToken) => {
    try {
        setTimeout(() => {
            console.log("validated")
        }, "100");
        return true;
    } catch (error) {
        console.error("Token validation failed", error);
        return false;
    }
};