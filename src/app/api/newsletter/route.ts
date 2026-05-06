import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { newsletterSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate
    const result = newsletterSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const supabase = await createAdminClient();

    // Check if already subscribed
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", result.data.email)
      .single();

    if (existing) {
      return NextResponse.json({ success: true, message: "You are already subscribed." });
    }

    // Insert
    const { error } = await supabase.from("newsletter_subscribers").insert({
      email: result.data.email,
    });

    if (error) {
      console.error("Newsletter subscription error:", error);
      return NextResponse.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Successfully subscribed." });
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
