import { createClient } from "@/lib/supabase/server";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default async function AdminSubmissionsPage() {
  const supabase = await createClient();

  let contacts: any[] = [];
  let applications: any[] = [];

  try {
    const [c, a] = await Promise.all([
      supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }).limit(50),
      supabase.from("membership_applications").select("*").order("created_at", { ascending: false }).limit(50),
    ]);
    contacts = c.data || [];
    applications = a.data || [];
  } catch (e) {}

  return (
    <div>
      <h1 className="font-heading text-2xl text-white mb-8">Submissions</h1>

      {/* Contact Submissions */}
      <div className="mb-12">
        <h2 className="text-white font-medium text-lg mb-4">Contact Messages ({contacts.length})</h2>
        {contacts.length === 0 ? (
          <Card hover={false} className="p-8 text-center">
            <p className="text-neutral-400">No contact submissions yet.</p>
          </Card>
        ) : (
          <div className="space-y-3">
            {contacts.map((c) => (
              <Card key={c.id} hover={false} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium">{c.name}</h3>
                      {!c.read && <Badge variant="warning">New</Badge>}
                    </div>
                    <p className="text-sm text-neutral-500">{c.email} &bull; {new Date(c.created_at).toLocaleDateString()}</p>
                  </div>
                </div>
                <p className="text-neutral-300 text-sm mt-2">{c.message}</p>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Membership Applications */}
      <div>
        <h2 className="text-white font-medium text-lg mb-4">Membership Applications ({applications.length})</h2>
        {applications.length === 0 ? (
          <Card hover={false} className="p-8 text-center">
            <p className="text-neutral-400">No applications yet.</p>
          </Card>
        ) : (
          <div className="space-y-3">
            {applications.map((a) => (
              <Card key={a.id} hover={false} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium">{a.full_name}</h3>
                      <Badge variant={a.status === "pending" ? "warning" : a.status === "accepted" ? "success" : "default"}>
                        {a.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-neutral-500">
                      {a.email} &bull; {a.country} &bull; {a.occupation} &bull; {new Date(a.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                {a.message && <p className="text-neutral-300 text-sm mt-2">{a.message}</p>}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
