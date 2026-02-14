import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email;

    if (!email) {
      return NextResponse.json(
        { error: "Email required" },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase
      .from("early_access")
      .insert([{ email }]);

    if (error) {
      // Duplicate email (unique constraint)
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "already_exists" },
          { status: 409 }
        );
      }

      // Any other Supabase error
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    // ✅ SUCCESS PATH (THIS WAS THE ONE YOU LIKELY MISSED)
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    // ✅ CATCH ALWAYS RETURNS
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
