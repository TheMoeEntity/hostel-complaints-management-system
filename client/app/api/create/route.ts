import { Helpers } from "@/Helpers/Types";
import { signIn, signOut } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const url =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/dashboard/complaints/create/";
  const body = await req.json();
  try {
    const apiRes = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await apiRes.json();
    if (apiRes.status === 401) {
      const newAccess = await Helpers.getRefresh(signIn());
      let accessToken = newAccess.access;
      Helpers.setNewToken(accessToken);
      const apiRes = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!apiRes.ok) {
        signIn();
      }
      return NextResponse.json(
        { error: "All Done: " + data.success },
        { status: 200 }
      );
    }
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
