import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma=new PrismaClient();//インスタンス化

//ブログの全記事取得のAPI
export const GET=async(req:Request,res:NextResponse)=>{
    try{
        await prisma.$connect();
        const posts=await prisma.post.findMany();
        return NextResponse.json({message:"Success",posts},{status:200});
    }catch(err){
        return NextResponse.json({message:"Error",err},{status:500});
    }finally{
        await prisma.$disconnect();
    }
};