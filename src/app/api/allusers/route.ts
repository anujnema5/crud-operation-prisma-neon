import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

// GET ALL THE USERS
export async function GET() {
    const allUsers = await prisma.user.findMany();
    return NextResponse.json(allUsers);
}

// REGISTER A USER
export async function POST(request: Request) {
    const body = await request.json();

    const newUser = await prisma.user.create({ data: body} as any);
    return NextResponse.json(newUser);
}

// DELETE ALL USERS
export async function DELETE() {
    const deletedUsers = await prisma.user.deleteMany();
    return NextResponse.json(deletedUsers);
}