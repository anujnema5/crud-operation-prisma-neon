import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
    const body = request.json();
    const house = await prisma.house.createMany({data: body} as  any)
    return NextResponse.json(house);
}