import { NextRequest,NextResponse } from "next/server";
import {  updateUserSchema } from "@/server/db/validate-schema";


export function GET(request:NextRequest){
    const query = request.nextUrl.searchParams

    // const name = query.get('name')
    const email = query.get('email')
    // const id = query.get('id')

    const result = updateUserSchema.safeParse({
        // name,
        email,
        // id 
    })
    if(result.success){
        return NextResponse.json({
            // name:result.data.name,
            email:result.data.email
        })
    }else{
        console.error(result.error)

        return NextResponse.json({
            error:result.error
        })

    }
}

