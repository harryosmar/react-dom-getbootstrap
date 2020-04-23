import {getClientsFromJSON} from "../../src/transformers/token";
import Client from "../../src/dto/client";

test('when clients json is empty', () => {
    expect(getClientsFromJSON('')).toEqual({
        list: [],
        categories: [],
    });
});

test('when clients json is not empty', () => {
    const clientsJson = '[{"grant_type":" authorization_code","client_id":"esurvei","client_secret":"SECRET","redirect_uri":"http:\\/\\/esurvei.ristekbrin.go.id\\/authorize\\/callback","code":"CODE","category":"Kategori B","logo":"https:\\/\\/via.placeholder.com\\/275x120.png?text=LOGO","title":"TITLE","description":"DESC"},{"grant_type":" authorization_code","client_id":"myawesomeapp","client_secret":"SECRET","redirect_uri":"http:\\/\\/localhost:8085\\/api\\/authorize\\/callback","code":"CODE","category":"Kategori A","logo":"https:\\/\\/via.placeholder.com\\/275x120.png?text=LOGO","title":"My Awesome App","description":"Demo purpose only"}]';
    const clientsFromJSON = getClientsFromJSON(clientsJson);
    expect(clientsFromJSON.categories).toEqual(['...', 'Kategori B', 'Kategori A',]);
    expect(JSON.stringify(clientsFromJSON.list)).toEqual(
        JSON.stringify([
            new Client({
                grant_type: 'authorization_code',
                client_id: 'esurvei',
                client_secret: 'SECRET',
                redirect_uri: 'http://esurvei.ristekbrin.go.id/authorize/callback',
                code: 'CODE',
                category: 'Kategori B',
                logo: 'https://via.placeholder.com/275x120.png?text=LOGO',
                title: 'TITLE',
                description: 'DESC',
            }),
            new Client({
                grant_type: 'authorization_code',
                client_id: 'myawesomeapp',
                client_secret: 'SECRET',
                redirect_uri: 'http://localhost:8085/api/authorize/callback',
                code: 'CODE',
                category: 'Kategori A',
                logo: 'https://via.placeholder.com/275x120.png?text=LOGO',
                title: 'My Awesome App',
                description: 'Demo purpose only',
            }),
        ]));
});