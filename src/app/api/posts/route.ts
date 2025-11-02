import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const { title, content, authorEmail } = await req.json();
  if (!title || !authorEmail) {
    return NextResponse.json(
      { error: "title und authorEmail sind erforderlich" },
      { status: 400 }
    );
  }
  const user = await prisma.user.upsert({
    where: { email: authorEmail },
    update: {},
    create: { email: authorEmail },
  });
  const post = await prisma.post.create({
    data: { title, content, authorId: user.id },
  });
  return NextResponse.json(post, { status: 201 });
}
