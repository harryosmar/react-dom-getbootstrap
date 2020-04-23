import ClientDTO from "../../src/dto/client";

const client1 = new ClientDTO({
    client_id: 1,
    client_secret: 'secret',
    redirect_uri: 'http://localhost/callback',
    code: 'code',
    category: "Kategori A",
    logo: "https://via.placeholder.com/275x120.png?text=LOGO",
    title: "My Awesome App",
    description: "Demo purpose only",
});

const client2 = new ClientDTO({
    client_id: 1,
    client_secret: 'secret',
    redirect_uri: 'http://localhost/callback',
    code: 'code',
    category: "Kategori B",
    logo: "https://via.placeholder.com/275x120.png?text=LOGO",
    title: "SURVEI PENELITIAN DAN PENGEMBANGAN",
    description: "PUSAT DATA DAN INFORMASI IPTEKDIKTI KEMENTERIAN RISET, TEKNOLOGI DAN PENDIDIKAN TINGGI",
});

const clients = [
    client1,
    client2,
];

export {client1, client2, clients};