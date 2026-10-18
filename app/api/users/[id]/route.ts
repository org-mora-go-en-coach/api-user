import { NextResponse } from "next/server"; import { deleteUser,findUser } from "../../../../src/4-entity/user";
export async function GET(_request:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const user=await findUser(id);return user?NextResponse.json({user}):NextResponse.json({error:"사용자를 찾을 수 없습니다."},{status:404})}
export async function DELETE(_request:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;return await deleteUser(id)?new NextResponse(null,{status:204}):NextResponse.json({error:"사용자를 찾을 수 없습니다."},{status:404})}

