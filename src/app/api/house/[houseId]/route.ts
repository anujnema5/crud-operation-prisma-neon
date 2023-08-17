import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}:{params:{houseId: string}}) {
    
    const house = await prisma.house.findUnique({
        where: {id: params.houseId},
        include: {
            builtBy: true,
            owner: true
        }
    })
    return NextResponse.json(house);
}

export async function POST(request:Request) {
    const body = request.json();
    const house = await prisma.house.createMany({data: body} as  any)
    return NextResponse.json(house);
}