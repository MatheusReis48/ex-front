

const API_URL = "./public/data.json";

export const fetchInstagramData = async () => {
    const response = await fetch(API_URL);
    return response.json();
}