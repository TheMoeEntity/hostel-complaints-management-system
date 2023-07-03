// require("dotenv").config();
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const {
    first_name,
    last_name,
    email,
    matric_number,
    hostel,
    password,
    password2,
    gender,
  } = await req.json();

  const userDetails = JSON.stringify({
    first_name,
    last_name,
    email,
    matric_number,
    hostel,
    password,
    password2,
    gender,
  });

  try {
    const apiRes = await fetch(
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/sign-up/", {
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:userDetails
      },
    );
    const data = await apiRes.json()
    if (apiRes.status === 201|| apiRes.status === 200) {
      return NextResponse.json({ error: "All Done: "+data.success }, { status: 200 })
    } else {
      return NextResponse.json(JSON.stringify(data) , { status: apiRes.status })
    }
  } catch (error) {
    NextResponse.json({ error: "Something went wrong while creating user"+error }, { status: 500 })
  }

  
}
