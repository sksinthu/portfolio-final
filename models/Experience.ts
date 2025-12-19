import mongoose, { Schema, model, models } from 'mongoose';

const ExperienceSchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tech: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

const Experience = models.Experience || model('Experience', ExperienceSchema);

export default Experience;
