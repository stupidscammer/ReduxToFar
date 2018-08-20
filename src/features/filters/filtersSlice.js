export const colorFilterChanged = (color, changeType) => {
    return {
        type: 'filters/colorFilterChanged',
        payload: { color, changeType }
    }
}