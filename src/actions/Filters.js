const ACTION_TYPE_SET_TEXT_FILTER = 'SET_TEXT_FILTER';
const setTextFilter = (text = '') => ({
    type: ACTION_TYPE_SET_TEXT_FILTER,
    text,
});

const ACTION_TYPE_SET_CATEGORY = 'SET_CATEGORY';
const setCategoryFilter = (category = '') => ({
    type: ACTION_TYPE_SET_CATEGORY,
    category,
});

export {setTextFilter, setCategoryFilter, ACTION_TYPE_SET_TEXT_FILTER, ACTION_TYPE_SET_CATEGORY};