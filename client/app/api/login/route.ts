import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
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
      body: porter === 'true' ? porterDetails : userDetails,
    });

    const data = await apiRes.json();
    console.log(data); 
    if (apiRes.status === 201 || apiRes.status === 200) {
      // res.setHeader('Set-Cookie', [
      //   'cookieName1=cookieValue1; Path=/; Max-Age=3600',
      //   'cookieName2=cookieValue2; Path=/; Max-Age=3600',
      // ]);
    
      // req.headers.set(
      //   "Set-Cookie",
      //   cookie.serialize(
      //     'refresh',
      //     data.refresh,
      //     {
      //       httpOnly: true,
      //       secure: process.env.NODE_ENV !== "development",
      //       maxAge: 60 * 60 * 24,
      //       sameSite: "strict",
      //       path: "/api/",
      //     }
      //   )
      // );

      return NextResponse.json(
        { error: "All Done: " +JSON.stringify(data)},
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
