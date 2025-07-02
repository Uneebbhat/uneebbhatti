import { NextRequest, NextResponse } from "next/server";
import { readdir, readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const contentDir = path.join(process.cwd(), "content");
    const files = await readdir(contentDir);
    const blogs = [];
    for (const file of files) {
      if (file.endsWith(".mdx")) {
        const filePath = path.join(contentDir, file);
        const content = await readFile(filePath, "utf8");
        const titleMatch = content.match(/title:\s*(.*)/);
        const slugMatch = content.match(/slug:\s*(.*)/);
        blogs.push({
          title: titleMatch ? titleMatch[1].trim() : file.replace(".mdx", ""),
          slug: slugMatch ? slugMatch[1].trim() : file.replace(".mdx", ""),
        });
      }
    }
    return NextResponse.json({ blogs });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to list blogs" },
      { status: 500 }
    );
  }
}

export function POST() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
