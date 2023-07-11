import { Helpers } from "@/Helpers/Types";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const session = await getServerSession(authOptions);
  const url =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/create/";
  const { title, description, is_resolved } = await req.json();
  const body = JSON.stringify({
    title,
    description,
    is_resolved,
  });
  try {
    const apiRes = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.user.access,
      },
      body: body,
    });
    const data = await apiRes.json();
    if (apiRes.status === 201 || apiRes.status === 200) {
      return NextResponse.json(
        { error: "All Done: " + data.success },
        { status: 200 }
      );
    } else {
      return NextResponse.json(JSON.stringify(data), { status: apiRes.status });
    }
  } catch (error) {
    NextResponse.json(
      { error: "Something went wrong while creating complaint" + error },
      { status: 500 }
    );
  }
}
