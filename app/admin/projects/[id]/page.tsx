import ProjectForm from "@/components/admin/ProjectForm";
import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
    await dbConnect();
    const { id } = await params;
    const project = await Project.findById(id).lean();

    if (!project) {
        return <div>Project not found</div>;
    }

    // Convert _id to string to pass to client component
    const projectData = {
        ...project,
        _id: project._id.toString(),
    };

    return <ProjectForm initialData={projectData} />;
}
