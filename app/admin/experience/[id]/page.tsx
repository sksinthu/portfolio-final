import ExperienceForm from "@/components/admin/ExperienceForm";
import dbConnect from "@/lib/mongodb";
import Experience from "@/models/Experience";

export default async function EditExperiencePage({ params }: { params: Promise<{ id: string }> }) {
    await dbConnect();
    const { id } = await params;
    const experience = await Experience.findById(id).lean();

    if (!experience) {
        return <div>Experience not found</div>;
    }

    // Convert _id to string to pass to client component
    const experienceData = {
        ...experience,
        _id: experience._id.toString(),
    };

    return <ExperienceForm initialData={experienceData} />;
}
