"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ADMIN_EMAIL = "uneebbhatti3@gmail.com";
const ADMIN_PASSWORD = "Pakairforce1.";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [blogs, setBlogs] = useState<{ title: string; slug: string }[]>([]);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [publishedAt, setPublishedAt] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [summary, setSummary] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isAdminLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem("isAdminLoggedIn", "true");
      setError("");
    } else {
      setError("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isAdminLoggedIn");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    try {
      const res = await fetch("/api/admin/post-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, content, publishedAt, summary }),
      });
      if (res.ok) {
        setSubmitStatus("Blog posted successfully!");
        setTitle("");
        setSlug("");
        setContent("");
      } else {
        const data = await res.json();
        setSubmitStatus(data.error || "Failed to post blog.");
      }
    } catch (err) {
      setSubmitStatus("Failed to post blog.");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch("/api/admin/list-blogs")
        .then((res) => res.json())
        .then((data) => setBlogs(data.blogs || []));
    }
  }, [isLoggedIn, submitStatus]);

  const handleDelete = async (slug: string) => {
    if (!window.confirm("Are you sure you want to delete this blog post?"))
      return;
    const res = await fetch("/api/admin/delete-blog", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (res.ok) {
      setSubmitStatus("Blog deleted successfully!");
      setBlogs(blogs.filter((b) => b.slug !== slug));
    } else {
      setSubmitStatus("Failed to delete blog.");
    }
  };

  const handleEdit = async (slug: string) => {
    const res = await fetch(`/api/admin/get-blog?slug=${slug}`);
    if (res.ok) {
      const data = await res.json();
      setTitle(data.title);
      setSlug(data.slug);
      setContent(data.content);
      setPublishedAt(
        data.publishedAt
          ? typeof data.publishedAt === "string"
            ? data.publishedAt.slice(0, 10)
            : new Date(data.publishedAt).toISOString().slice(0, 10)
          : new Date().toISOString().slice(0, 10)
      );
      setSummary(data.summary || "");
      setEditingSlug(slug);
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);
    try {
      const res = await fetch("/api/admin/edit-blog", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, content, publishedAt, summary }),
      });
      if (res.ok) {
        setSubmitStatus("Blog updated successfully!");
        setEditingSlug(null);
        setTitle("");
        setSlug("");
        setContent("");
      } else {
        const data = await res.json();
        setSubmitStatus(data.error || "Failed to update blog.");
      }
    } catch (err) {
      setSubmitStatus("Failed to update blog.");
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link", "image"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  if (!isLoggedIn) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="email" className="block mb-1">
              Email
            </Label>
            <Input
              type="email"
              value={email}
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="block mb-1">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </section>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Your Blog Posts</h2>
        <ul>
          {blogs.map((blog) => (
            <li
              key={blog.slug}
              className="flex items-center justify-between border-b py-2"
            >
              <span>
                {blog.title} ({blog.slug})
              </span>
              <div className="space-x-2 flex">
                <Button onClick={() => handleEdit(blog.slug)}>Edit</Button>
                <Button
                  variant={"destructive"}
                  onClick={() => handleDelete(blog.slug)}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <form
        onSubmit={editingSlug ? handleSaveEdit : handleSubmit}
        className="space-y-4"
      >
        <div>
          <Label htmlFor="title" className="block mb-1 font-medium">
            Title
          </Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="slug" className="block mb-1 font-medium">
            Slug
          </Label>
          <Input
            type="text"
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            placeholder="e.g. my-first-blog"
          />
        </div>
        <div>
          <Label htmlFor="content" className="block mb-1 font-medium">
            Content
          </Label>
          <ReactQuill
            value={content}
            id="content"
            onChange={setContent}
            className="bg-white"
            modules={quillModules}
            style={{ height: 400, marginBottom: 60 }}
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="publishedAt" className="block mb-1 font-medium">
            Published At
          </Label>
          <Input
            type="date"
            id="publishedAt"
            name="publishedAt"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="summary" className="block mb-1 font-medium">
            Summary
          </Label>
          <Textarea
            id="summary"
            name="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            rows={2}
          />
        </div>
        <Button type="submit" className="w-full">
          {editingSlug ? "Save Changes" : "Post Blog"}
        </Button>
        {submitStatus && (
          <div
            className={
              submitStatus.includes("success")
                ? "text-green-600"
                : "text-red-500"
            }
          >
            {submitStatus}
          </div>
        )}
      </form>
    </section>
  );
}
