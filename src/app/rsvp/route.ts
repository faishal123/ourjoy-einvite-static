// import { createClient } from "@supabase/supabase-js";
// import { Database } from "../../supabase/supabase";
// import { NextRequest, NextResponse } from "next/server";

// // Create a single supabase client for interacting with your database
// const supabase = createClient<Database>(
//   process.env.SupabaseProjectUrl || "",
//   process.env.SupabaseAPIKey || ""
// );

// export async function GET(request: NextRequest) {
//   let { data: rsvp, error } = await supabase.from("rsvp").select("*");
//   if (!error) {
//     return NextResponse.json(rsvp, { status: 200 });
//   }
//   return NextResponse.json(error, { status: 400 });
// }

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const { data, error } = await supabase.from("rsvp").insert([body]).select();
//   if (!error) {
//     return NextResponse.json(data, { status: 200 });
//   }
//   return NextResponse.json(error, { status: 400 });
// }
