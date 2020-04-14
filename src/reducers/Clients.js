import {ACTION_TYPE_SET_CLIENTS} from "../actions/Clients";
import Client from "../dto/client";

const clientsReducerDefaultState = [
    new Client({
        'client_id': 'myawesomeapp',
        'client_secret': 'abc123',
        'redirect_uri': 'http://localhost:8085/api/authorize/callback',
        'code': 'def50200ba46d77e97638fc1ae23b9de2fc1620268fcfa241fe96aafc940198a67728102b97d1f9d943d038f09287c62d3c581e402e69c58febc0dd96eed0d1f239031fb138b6ab2614d9051bc844ad2f28e533e7bbbda03b9596182c2d6303910756a084772f3d0fb93f816c95595c09c17f7111795dba06af0bf54d149e3f89f2e2ced9ec477db40d20182ce79c0fe16091c8283128e892ed4528d90947cd73138f4380e0d06d286a653404115bbd6b9c07db3c097b41089bbbc60f6fc7ee78f035434cda5c81fa77dd9a1a7baa1408806d99b1e78d62422a0f735d8c26e67eb32c5bcff2cfdb008affe5515eb2273805a0c8b6792f27f2658bf39f4f5717a9f222960d8354d6e410e4f85a7890118d2f4ed1085dc8ef1668c571cdde1fd04064342e535754b626419fd1648b04000f758a8ae1388890a58e8d8148c8fa367c94143f279579954b00bdf88b71103a9e2a356c72c5e13f22c237911c0e6ec640b0756dc06dbfeab9a1f33a61da98c7a1f344217a1ea454aa0',
        'category': 'A',
        'logo': 'https://via.placeholder.com/275x120.png?text=LOGO',
        'title': 'SISTEM INFORMASI IPTEK NASIONAL',
        'description': 'Portal berbasis web untuk menampilkan data mengenai penelitian dan pengembangan di Indonesia.',
    })
];


export default (prevState = clientsReducerDefaultState, action) => {
    if (action.type === ACTION_TYPE_SET_CLIENTS) {
        return action.clients;
    }

    return prevState;
};