export async function fetchCategoryLoader() {
    const res = await fetch('http://localhost:9000/categories');
    if (!res.ok) {
        throw new Error('Failed to fetch Categories');
    }
    return res.json();
}