import dbConnect from "@/lib/mongodb";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    await dbConnect();
    try {
        const { id } = await params;
        const body = await req.json();
        const experience = await Experience.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true,
        });
        if (!experience) {
            return NextResponse.json({ success: false, error: "Experience not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: experience });
    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    await dbConnect();
    try {
        const { id } = await params;
        const deletedExperience = await Experience.deleteOne({ _id: id });
        if (!deletedExperience) {
            return NextResponse.json({ success: false }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}
