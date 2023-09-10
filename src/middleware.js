import { NextResponse } from "next/server";

export function middleware(request,response,next){
    let auth = 3;
    if(auth == 0){
        return NextResponse.redirect(new URL("/login/401",request.url));
    }else if(auth == 1){
        next()
    }else{
        return NextResponse.redirect(new URL("/login/403",request.url));
    }
    
}

export const config = {
    matcher:["/dashboard/:path*","/course/:path*"]
}