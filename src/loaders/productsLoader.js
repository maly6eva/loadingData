export async function fetchProductsLoader() {
    const res = await fetch('http://localhost:9000/products');
    if (!res.ok) {
        throw new Error('Failed to fetch Products');
    }
    return res.json();
}