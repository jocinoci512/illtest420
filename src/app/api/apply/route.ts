import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { applicationSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot || body.website) {
      return NextResponse.json({ success: true });
    }

    // Validate
    const result = applicationSchema.safeParse(body);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      const firstError = Object.values(errors)[0]?.[0] || "Validation failed";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    // Insert into database
    const supabase = await createAdminClient();
    const { error } = await supabase.from("membership_applications").insert({
      full_name: result.data.full_name,
      email: result.data.email,
      phone: result.data.phone,
      country: result.data.country,
      occupation: result.data.occupation,
      message: result.data.message,
      preferred_tier: result.data.preferred_tier,
    });

    if (error) {
      console.error("Application submission error:", error);
      return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true, redirect: "/thank-you" });
  } catch (err) {
    console.error("Apply API error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
