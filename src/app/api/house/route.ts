import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const body = await request.json();
    const newHouse = await prisma.house.create({
        data: body
    })
    return NextResponse.json(newHouse);
}

export async function GET(request:Request) {
    const allHouses = await prisma.house.findMany({
        include: {
            owner: true,
            builtBy: true
        },


    })
    return NextResponse.json(allHouses);
}