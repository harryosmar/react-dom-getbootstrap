const getVisibleClients = (clients = [], {text, category}) => {
    return clients.filter((client) => {
        const titleMatch = !text || client.title.toLowerCase().includes(text.toLowerCase());
        const descriptionMatch = !text || client.description.toLowerCase().includes(text.toLowerCase());
        const categoryMatch = !category || client.category === category;

        return (titleMatch || descriptionMatch) && categoryMatch
    });
};

export {getVisibleClients};