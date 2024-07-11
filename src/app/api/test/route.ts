import { NextRequest,NextResponse } from "next/server";
import { cookies } from 'next/headers';

import z from "zod";

const inputSchema = z.object({
    name:z.string().min(3).max(10),
    email:z.string().email(),

})

export function GET(request:NextRequest){
    const cookieStore = cookies()
    const token = cookieStore.get("token")

    const query = request.nextUrl.searchParams

    const name = query.get('name')
    const email = query.get('email')
    const result = inputSchema.safeParse({
        name,email
    })
    if(result.success){
        return NextResponse.json({
            name:result.data.name,
            email:result.data.email
        })
    }else{
        return NextResponse.json({
            error:result.error
        })

    }
}