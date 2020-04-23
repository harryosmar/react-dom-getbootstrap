import {getVisibleClients} from "../../src/selectors/clients";
import {client1, client2, clients} from "./clients.data";

test('when empty clients', () => {
    expect(getVisibleClients([], {text: '', category: ''})).toEqual([]);
});

test('when filters empty', () => {
    expect(getVisibleClients(clients, {text: '', category: ''})).toEqual(clients);
});

test('when filter by text value is "Awesome"', () => {
    expect(getVisibleClients(clients, {text: 'Awesome', category: ''})).toEqual([client1]);
});

test('when filter by text value is "Awesome" and category value is "Kategori A"', () => {
    expect(getVisibleClients(clients, {text: 'Awesome', category: 'Kategori A'})).toEqual([client1]);
});

test('when filter by text value is "survei" and category value is "Kategori B"', () => {
    expect(getVisibleClients(clients, {text: 'survei', category: 'Kategori B'})).toEqual([client2]);
});

test('when filter by text value is "Awesome" and category value is "Kategori B"', () => {
    expect(getVisibleClients(clients, {text: 'Awesome', category: 'Kategori B'})).toEqual([]);
});

test('when filter by category value is "Kategori B"', () => {
    expect(getVisibleClients(clients, {text: '', category: 'Kategori B'})).toEqual([client2]);
});

