"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from("site_settings").select("*");
    const map: Record<string, any> = {};
    data?.forEach((s: any) => { map[s.key] = s.value; });
    setSettings(map);
  }

  async function updateSetting(key: string, value: any) {
    const supabase = createClient();
    await supabase.from("site_settings").upsert({ key, value });
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

  async function saveAll() {
    setLoading(true);
    await fetch("/api/revalidate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/", secret: "" }),
    });
    setLoading(false);
    alert("Settings saved and published!");
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-white">Site Settings</h1>
        <Button variant="primary" onClick={saveAll} disabled={loading}>
          {loading ? "Publishing..." : "Save & Publish"}
        </Button>
      </div>

      <div className="space-y-6">
        <Card hover={false} className="p-6">
          <h2 className="text-white font-medium mb-4">Contact Information</h2>
          <div className="space-y-4">
            <Input
              label="Contact Email"
              defaultValue={typeof settings.contact_email === "string" ? settings.contact_email : ""}
              onBlur={(e) => updateSetting("contact_email", e.target.value)}
            />
            <Input
              label="Contact Phone"
              defaultValue={typeof settings.contact_phone === "string" ? settings.contact_phone : ""}
              onBlur={(e) => updateSetting("contact_phone", e.target.value)}
            />
            <Input
              label="Address"
              defaultValue={typeof settings.contact_address === "string" ? settings.contact_address : ""}
              onBlur={(e) => updateSetting("contact_address", e.target.value)}
            />
          </div>
        </Card>

        <Card hover={false} className="p-6">
          <h2 className="text-white font-medium mb-4">Social Media Links</h2>
          <div className="space-y-4">
            {["twitter", "instagram", "facebook", "linkedin"].map((platform) => (
              <Input
                key={platform}
                label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                defaultValue={settings.social_links?.[platform] || ""}
                onBlur={(e) => {
                  const links = { ...settings.social_links, [platform]: e.target.value };
                  updateSetting("social_links", links);
                }}
              />
            ))}
          </div>
        </Card>

        <Card hover={false} className="p-6">
          <h2 className="text-white font-medium mb-4">Site Information</h2>
          <div className="space-y-4">
            <Input
              label="Site Name"
              defaultValue={typeof settings.site_name === "string" ? settings.site_name : ""}
              onBlur={(e) => updateSetting("site_name", e.target.value)}
            />
            <Textarea
              label="Site Description"
              defaultValue={typeof settings.site_description === "string" ? settings.site_description : ""}
              onBlur={(e) => updateSetting("site_description", e.target.value)}
              rows={3}
            />
            <Textarea
              label="Footer Description"
              defaultValue={typeof settings.footer_description === "string" ? settings.footer_description : ""}
              onBlur={(e) => updateSetting("footer_description", e.target.value)}
              rows={3}
            />
            <Input
              label="Copyright Text"
              defaultValue={typeof settings.copyright_text === "string" ? settings.copyright_text : ""}
              onBlur={(e) => updateSetting("copyright_text", e.target.value)}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
