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

const ACTION_TYPE_SET_CATEGORY_SEARCH = 'SET_CATEGORY_SEARCH';
const setCategorySearchFilter = (categorySearch = '') => ({
    type: ACTION_TYPE_SET_CATEGORY_SEARCH,
    categorySearch,
});

export {
    setTextFilter,
    setCategoryFilter,
    setCategorySearchFilter,
    ACTION_TYPE_SET_TEXT_FILTER,
    ACTION_TYPE_SET_CATEGORY,
    ACTION_TYPE_SET_CATEGORY_SEARCH,
};