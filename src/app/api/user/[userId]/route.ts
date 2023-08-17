import prisma from '@/lib/prisma';
import { useParams } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

// UPDATE A USER
export async function PUT(request: Request, { params }: { params: { userId: string } }) {
    const id = params.userId;
    const body = await request.json();

    const userUpdate = await prisma.user.update({
        where: { id: id },
        data: { age: body.age }
    })

    return NextResponse.json(userUpdate)
}

// DELETE A USER
export async function DELETE(request: Request, { params }: { params: { userId: string } }) {
    const id = params.userId;
    const deletedUser = await prisma.user.delete({
        where: { id: id },
    })

    return NextResponse.json(deletedUser)
}