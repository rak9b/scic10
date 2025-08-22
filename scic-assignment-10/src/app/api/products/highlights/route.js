import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("shopnex");

    const products = await db
      .collection("products")
      .find({})
      .sort({ rating: -1 })
      .limit(8)
      .toArray();

    return Response.json(products);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
