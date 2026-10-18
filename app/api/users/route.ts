import { NextResponse } from "next/server"; import { createUser,listUsers } from "../../../src/4-entity/user";
export async function GET(){return NextResponse.json({users:await listUsers(),version:"1.0.1"})}
export async function POST(request:Request){let body:unknown;try{body=await request.json()}catch{return NextResponse.json({error:"올바른 JSON 형식이 아닙니다."},{status:400})}const {email,name}=body as Record<string,unknown>;if(typeof email!=="string"||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)||typeof name!=="string"||!name.trim())return NextResponse.json({error:"올바른 이메일과 이름을 입력해 주세요."},{status:400});try{return NextResponse.json({user:await createUser({email,name})},{status:201})}catch{return NextResponse.json({error:"이미 등록된 이메일입니다."},{status:409})}}
export function OPTIONS(){return new NextResponse(null,{status:204})}

