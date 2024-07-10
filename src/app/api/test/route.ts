import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function GET(request: NextRequest) {
    console.log("--->");

    console.log(cookies().get("a"));

    return NextResponse.json({ a: "Hello World!" });
}
