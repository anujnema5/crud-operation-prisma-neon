import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
    const filteredHouse = await prisma.house.findMany({
        where: {
            wifiPassword: {
                not: null
            },

            owner: {
                age: {
                    gte: 22
                }
            },
        },

        orderBy: {
            owner: {
                firstName: "desc"
            }
        },

        include: {
            builtBy:true,
            owner: true
        }
    })

    return NextResponse.json(filteredHouse);
}