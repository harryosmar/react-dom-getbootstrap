export default class Client {
    grant_type;
    client_id;
    client_secret;
    redirect_uri;
    code;
    category;
    logo;
    title;
    description;

    constructor({client_id, client_secret, redirect_uri, code, category, logo, title, description}) {
        this.grant_type = 'authorization_code';
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.redirect_uri = redirect_uri;
        this.code = code;
        this.category = category;
        this.logo = logo;
        this.title = title;
        this.description = description;
    }

    generateUrl = () => {
        const params = new URLSearchParams();
        params.append('grant_type', this.grant_type);
        params.append('client_id', this.client_id);
        params.append('client_secret', this.client_secret);
        params.append('code', this.code);

        return `${this.redirect_uri}?${params.toString()}`;
    }
}