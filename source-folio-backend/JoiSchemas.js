import BaseJoi from 'joi';
import sanitizeHTML from 'sanitize-html';

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHTML(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if(clean !== value) return helpers.error('string.escapeHTML', {value})
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension);

const educationSchema = Joi.object({
    institutionName: Joi.string().required(),
    place: Joi.string().required(),
    year: Joi.number().required(),
    aggregate: Joi.number().required(),
    coursePursuied: Joi.string().required()
});

const durationSchema = Joi.object({
    start: Joi.string().required(),
    end: Joi.string().required()
});

const experienceSchema = Joi.object({
    role: Joi.string().required(),
    duration: durationSchema.required(),
    company: Joi.string().required(),
    workDescription: Joi.array().items(Joi.string().required()).required(),
    certificate: Joi.string().default('')
});

const projectSchema = Joi.object({
    projectName: Joi.string().required(),
    description: Joi.array().items(Joi.string().required()).required(),
    gitHubLink: Joi.string().default(''),
    projectLink: Joi.string().default('')
});

const skillProElementSchema = Joi.object({
    skillName: Joi.string().required(),
    skillLevel: Joi.string().valid('Expert', 'Intermediate', 'Beginner').required()
});

const skillToolElementSchema = Joi.object({
    toolName: Joi.string().required(),
    toolLevel: Joi.string().valid('Expert', 'Intermediate', 'Beginner').required()
});

const skillsSchema = Joi.object({
    programmingSkills: Joi.array().items(skillProElementSchema),
    toolsAndFrameworks: Joi.array().items(skillToolElementSchema)
});

const imageSchema = Joi.object({
    url: Joi.string().required(),
    filename: Joi.string().required()
});

const portfolioSchema = Joi.object({
    user_id: Joi.string().required(),
    name: Joi.string().required(),
    bio: Joi.string().required(),
    githubProfile: Joi.string().required(),
    numberOfProjects: Joi.string().valid('Beginner', '1-2 Projects', '3-5 Projects', '5-10 Projects', '10+ Projects').required(),
    yearsOfExperience: Joi.string().valid('Fresher', '6+ Months', '1-2 Years', '3-5 Years', '5-10 Years', '10+ Years').required(),
    mainDesignations: Joi.array().items(Joi.string()).required(),
    description: Joi.string().required(),
    profilePicture: imageSchema,
    myEducation: Joi.array().items(educationSchema).required(),
    myExperience: Joi.array().items(experienceSchema).default([]),
    myProjects: Joi.array().items(projectSchema).required(),
    mySkills: skillsSchema,
    myAchievements: Joi.array().items(Joi.string()).required(),
    linkedIn: Joi.string().required(),
    email: Joi.string().email().required(),
    instagram: Joi.string().required(),
    telephone: Joi.number().required()
});

export default portfolioSchema;