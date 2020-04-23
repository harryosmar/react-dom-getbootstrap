import {getUserFromToken} from "../../src/transformers/user";

test('when token is empty', () => {
    expect(getUserFromToken('', '')).toBe(false);
});


test('when token is not empty', () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJQaW50dSIsImlhdCI6MTU4NzYzMjM0OSwiZXhwIjoxNTkwMjI0MzQ5LCJ1aWQiOjEsInVzZXJuYW1lIjoiaGFycnlvc21hcnNpdG9oYW5nQGdtYWlsLmNvbSIsIm5hbWUiOiJoYXJyeSJ9.HEjOHlWLVfC9T_lfSs01CF6Pil6QCTPfbn2g2oSu2NGf34EKC-oqm6x-NRu_OKSSJGuGlsF1nv8W8z_PJaLBkwMef2udmUHCI8tAqozSkBcWGoElcpSgjBt4Semi20OgpPl4GAM7uOKEHqMBbQaM9qQE1s1REhBlS19CWAjbG1sRpKsZc7ZpWJ_fef-GpWV1uqTiuKE4MyN2JggSnsGNYZFWl-dUk4EeXjxVye-pAovZZu4z3YgnVCflEZMQmrCXLswttCc62449vDB3WlmIAhHE7NOtHU2SlSU0TeqoKaeSnCUpiYx56EcCDmsf75Tl5Rn4iUDsnKysH8d_lUWBuA';
    const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwEnYtHMGTC6/uBLCsH2d
08CQNthv04lONpsa7fmH5F3m3/Ot86Tn06o5iGmShyx8I04yd8rUZYYxlT9lLdYH
fa4AFhrgrhQYQxEdKWfXcD0vwZdc/dmlUJsiIyMIDisn/Iup990Mq2ow10d+lMWB
bg67lF42Gtgui2E1FeNas/KhefcVpTxsLOnQrwiUCCovEQMbBuCK2zq+KL5ZzcaR
Ohi88o29/X+NJYvzjMHZJJeai72SBnhRTTf6yWr7a38Zly0nkBoQH/YCsUEf6f+h
PUOd+BRuUyGVw0Q6H90dJaNa3/EuTI9Lpx4lnM4UvLW0xmX2USm+5vIaGx+jZYV+
AQIDAQAB
-----END PUBLIC KEY-----
`;
    expect(getUserFromToken(token, publicKey)).toEqual({"id": 1, "name": "harry", "username": "harryosmarsitohang@gmail.com"});
});