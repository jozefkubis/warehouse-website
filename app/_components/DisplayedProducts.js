import { getWarehouseStore } from "../_lib/data-service"

async function DisplayedProducts({ filter }) {
    try {
        const products = await getWarehouseStore()

        if (!products.length) return null

        let displayedProducts

        switch (filter) {
            case "all":
                displayedProducts = products
                break
            case "with-discount":
                displayedProducts = products.filter((product) => product.discount > 0)
                break
            case "no-discount":
                displayedProducts = products.filter((product) => product.discount === 0)
                break
            default:
                displayedProducts = []
        }

        return displayedProducts
    } catch (error) {
        console.error("Failed to fetch products:", error)
        return null
    }
}

export default DisplayedProducts
