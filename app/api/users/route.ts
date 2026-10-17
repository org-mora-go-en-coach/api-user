import { NextResponse } from "next/server"; import { createUser,listUsers } from "../../../lib/users";
export async function GET(){return NextResponse.json({users:await listUsers(),version:"1.0.1"})}
export async function POST(request:Request){let body:unknown;try{body=await request.json()}catch{return NextResponse.json({error:"Invalid JSON"},{status:400})}const {email,name}=body as Record<string,unknown>;if(typeof email!=="string"||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)||typeof name!=="string"||!name.trim())return NextResponse.json({error:"Valid email and name are required"},{status:400});try{return NextResponse.json({user:await createUser({email,name})},{status:201})}catch{return NextResponse.json({error:"Email already registered"},{status:409})}}
export function OPTIONS(){return new NextResponse(null,{status:204})}

