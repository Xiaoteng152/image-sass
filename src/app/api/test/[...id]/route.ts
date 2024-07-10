import { NextRequest, NextResponse } from "next/server";

export function GET(
    request: NextRequest,
    { params: { id } }: { params: { id: string } }
) {
    console.log("[...id]");
    return NextResponse.json({ id: id });
}
