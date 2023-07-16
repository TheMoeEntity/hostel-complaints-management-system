import { NextRequest, NextResponse } from "next/server";
import { NextApiResponse } from "next";

export async function POST(req: NextRequest, res: NextApiResponse) {
  const { email, matric_number, password, porter } = await req.json();

  const userDetails = JSON.stringify({
    matric_number,
    password,
  });
  const porterDetails = JSON.stringify({
    email,
    matric_number,
    password,
  });

  const url: string =
    porter === "true"
      ? "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/porters/login/"
      : "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/students/login/";
  const refresh: string =
    "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/login/refresh/";
  try {
    const apiRes = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: porter === "true" ? porterDetails : userDetails,
    });

    const data = await apiRes.json();

    if (apiRes.status === 201 || apiRes.status === 200) {
      return NextResponse.json(
        { error: "All Done: " + JSON.stringify(data) },
        { status: 200 }
      );
    } else {
      return NextResponse.json(data, { status: apiRes.status });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong while logging in user " + error },
      { status: 500 }
    );
  }
}
