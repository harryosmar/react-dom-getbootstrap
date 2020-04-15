const CATEGORY_OPTION_ALL = '...';

const getCategoryList = (clients = []) => {
    const list = clients.map(client => client.category);
    list.unshift(CATEGORY_OPTION_ALL);

    return Array.from(new Set(list));
};

const getCategoryOptionValue = (categoryText) => {
    return categoryText === CATEGORY_OPTION_ALL ? '' : categoryText;
};

const getCategoryOptionLabel = (categoryValue) => {
    return categoryValue === '' ? 'Filter Kategori' : categoryValue;
};

const getFilteredCategoryList = (categories = [], key = '') => {
    return categories.filter(category => category.toLowerCase().includes(key.toLowerCase()));
};

export {getCategoryList, getFilteredCategoryList, getCategoryOptionValue, getCategoryOptionLabel};