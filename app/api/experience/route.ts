import dbConnect from "@/lib/mongodb";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try {
        const experience = await Experience.find({}).sort({ createdAt: -1 }); // Default sort, maybe change later
        return NextResponse.json({ success: true, data: experience });
    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}

export async function POST(req: Request) {
    await dbConnect();
    try {
        const body = await req.json();
        const experience = await Experience.create(body);
        return NextResponse.json({ success: true, data: experience }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}
