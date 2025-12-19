import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try {
        const projects = await Project.find({});
        return NextResponse.json({ success: true, data: projects });
    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}

export async function POST(req: Request) {
    await dbConnect();
    try {
        const body = await req.json();
        const project = await Project.create(body);
        return NextResponse.json({ success: true, data: project }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}
