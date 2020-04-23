import {clients} from "./clients.data";
import {
    getCategoryList,
    getFilteredCategoryList,
    getCategoryOptionLabel,
    getCategoryOptionValue
} from "../../src/selectors/filters";

test('getCategoryList when empty clients', () => {
    expect(getCategoryList([])).toEqual(['...']);
});

test('getCategoryList when not empty clients', () => {
    expect(getCategoryList(clients)).toEqual(['...', 'Kategori A', 'Kategori B']);
});

test('getFilteredCategoryList when filter value is "Kategori"', () => {
    expect(getFilteredCategoryList(['...', 'Kategori A', 'Kategori B'], "Kategori")).toEqual(['Kategori A', 'Kategori B']);
});

test('getFilteredCategoryList when filter value is "Kategori A"', () => {
    expect(getFilteredCategoryList(['...', 'Kategori A', 'Kategori B'], "Kategori A")).toEqual(['Kategori A']);
});

test('getCategoryOptionLabel', () => {
    expect(getCategoryOptionLabel('')).toEqual('Filter Kategori');
    expect(getCategoryOptionLabel('ABC')).toEqual('ABC');
});

test('getCategoryOptionValue', () => {
    expect(getCategoryOptionValue('...')).toEqual('');
    expect(getCategoryOptionValue('ABC')).toEqual('ABC');
});