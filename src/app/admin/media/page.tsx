"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Upload, Trash2, Copy } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function AdminMediaPage() {
  const [media, setMedia] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("media").select("*").order("created_at", { ascending: false });
    setMedia(data || []);
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (res.ok) {
      load();
    } else {
      alert("Upload failed");
    }
    setUploading(false);
  }

  async function handleDelete(id: string, url: string) {
    if (!confirm("Delete this file?")) return;
    const supabase = createClient();
    
    // Extract filename from URL for storage deletion
    const filename = url.split("/").pop();
    if (filename) {
      await supabase.storage.from("media").remove([filename]);
    }
    await supabase.from("media").delete().eq("id", id);
    load();
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url);
    alert("URL copied to clipboard!");
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">Media Library</h1>
        <label className="cursor-pointer">
          <input type="file" className="hidden" onChange={handleUpload} accept="image/*" />
          <span className="inline-flex items-center px-6 py-3 bg-gold-500 text-dark-bg font-medium text-sm rounded-sm hover:bg-gold-400 transition-colors">
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? "Uploading..." : "Upload File"}
          </span>
        </label>
      </div>

      {media.length === 0 ? (
        <Card hover={false} className="p-12 text-center">
          <p className="text-neutral-400">No media files yet. Upload your first image to get started.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item) => (
            <Card key={item.id} hover={false} className="p-0 overflow-hidden">
              <div className="aspect-square bg-dark-surface flex items-center justify-center">
                <img
                  src={item.url}
                  alt={item.alt_text || item.filename}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-xs text-neutral-400 truncate">{item.filename}</p>
                <div className="flex gap-1 mt-2">
                  <button onClick={() => copyUrl(item.url)} className="p-1.5 text-neutral-400 hover:text-gold-500">
                    <Copy className="w-3 h-3" />
                  </button>
                  <button onClick={() => handleDelete(item.id, item.url)} className="p-1.5 text-neutral-400 hover:text-red-400">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
