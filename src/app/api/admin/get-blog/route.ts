import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
    const fileContent = await readFile(filePath, "utf8");
    const titleMatch = fileContent.match(/title:\s*(.*)/);
    const slugMatch = fileContent.match(/slug:\s*(.*)/);
    const publishedAtMatch = fileContent.match(/publishedAt:\s*(.*)/);
    const summaryMatch = fileContent.match(/summary:\s*(.*)/);
    // Remove frontmatter for content
    const content = fileContent.replace(/---[\s\S]*?---/, "").trim();
    return NextResponse.json({
      title: titleMatch ? titleMatch[1].trim() : slug,
      slug: slugMatch ? slugMatch[1].trim() : slug,
      publishedAt: publishedAtMatch ? publishedAtMatch[1].trim() : "",
      summary: summaryMatch ? summaryMatch[1].trim() : "",
      content,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message || "Failed to get blog" },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: "Failed to get blog" }, { status: 500 });
  }
}

export function POST() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export function formatDate(date: string) {
  if (typeof date !== "string" || !date) {
    return "Invalid date";
  }
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
