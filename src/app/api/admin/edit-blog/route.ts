import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function PATCH(req: NextRequest) {
  try {
    const { title, slug, content, publishedAt, summary } = await req.json();
    if (!title || !slug || !content || !summary) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const today = new Date().toISOString().slice(0, 10);
    const mdxContent = `---\ntitle: ${title}\nslug: ${slug}\npublishedAt: ${
      publishedAt || today
    }\nsummary: ${summary}\n---\n\n${content}`;
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
    await writeFile(filePath, mdxContent, "utf8");
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message || "Failed to edit blog" },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Failed to edit blog" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
