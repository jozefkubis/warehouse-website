import { getProduct } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
    const { productId } = params;

    try {
        const [product, orderedPorudct] = await Promise.all([
            getProduct(productId),
            // getOrder(productId)
        ])
        return Response.json({
            product,
            // orderedPorudct
        })
    } catch {
        return Response.json({
            message: "Product not found"
        })
    }
}