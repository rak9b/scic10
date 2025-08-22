import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("shopnex");
    const products = await db.collection("products").find({}).toArray();

    return Response.json(products);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, description, price, image } = await req.json();
    const client = await clientPromise;
    const db = client.db("shopnex");

    const result = await db.collection("products").insertOne({
      name,
      description,
      price: parseFloat(price),
      image,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
