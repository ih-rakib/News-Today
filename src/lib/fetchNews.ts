export const fetchNews = async (category:string="", search:string="") => {
    try {
        const res = await fetch(`https://news-api-next-js-kappa.vercel.app/api/news?category=${category}&search=${search}`);

        // Check if the response is OK before parsing
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error('Erron fetching news!', error)
        return []
    }
}