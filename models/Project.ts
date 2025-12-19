import mongoose, { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    link: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'from-gray-500 to-slate-500', // Default gradient
    },
}, { timestamps: true });

const Project = models.Project || model('Project', ProjectSchema);

export default Project;
