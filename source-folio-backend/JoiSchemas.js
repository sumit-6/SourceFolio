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
    institutionName: Joi.string().allow(''),
    place: Joi.string().allow(''),
    year: Joi.number().default(0).allow(),
    aggregate: Joi.number().default(0).allow(),
    coursePursuied: Joi.string().allow('')
});

const durationSchema = Joi.object({
    start: Joi.string().allow(''),
    end: Joi.string().allow('')
});

const experienceSchema = Joi.object({
    role: Joi.string().allow(''),
    duration: durationSchema,
    company: Joi.string().allow(''),
    workDescription: Joi.array().items(Joi.string().allow('')),
    certificate: Joi.string().allow('')
});

const projectSchema = Joi.object({
    projectName: Joi.string().allow(''),
    description: Joi.array().items(Joi.string().allow('')),
    gitHubLink: Joi.string().allow(''),
    projectLink: Joi.string().allow('')
});

const skillProElementSchema = Joi.object({
    skillName: Joi.string().allow(''),
    skillLevel: Joi.string().valid('Expert', 'Intermediate', 'Beginner', '')
});

const skillToolElementSchema = Joi.object({
    toolName: Joi.string().allow(''),
    toolLevel: Joi.string().valid('Expert', 'Intermediate', 'Beginner', '')
});

const skillsSchema = Joi.object({
    programmingSkills: Joi.array().items(skillProElementSchema),
    toolsAndFrameworks: Joi.array().items(skillToolElementSchema)
});

const imageSchema = Joi.object({
    url: Joi.string().allow(''),
    filename: Joi.string().allow('')
});

const portfolioSchema = Joi.object({
    user_id: Joi.string().required(),
    name: Joi.string().allow(''),
    bio: Joi.string().allow(''),
    githubProfile: Joi.string().allow(''),
    numberOfProjects: Joi.string().valid('Beginner', '1-2 Projects', '3-5 Projects', '5-10 Projects', '10+ Projects', ''),
    yearsOfExperience: Joi.string().valid('Fresher', '6+ Months', '1-2 Years', '3-5 Years', '5-10 Years', '10+ Years', ''),
    mainDesignations: Joi.array().items(Joi.string().allow('')),
    description: Joi.string().allow(''),
    profilePicture: imageSchema,
    myEducation: Joi.array().items(educationSchema).default([]),
    myExperience: Joi.array().items(experienceSchema).default([]),
    myProjects: Joi.array().items(projectSchema).default([]),
    mySkills: skillsSchema,
    myAchievements: Joi.array().items(Joi.string().allow('')).default([]),
    linkedIn: Joi.string().allow(''),
    email: Joi.string().allow(''),
    instagram: Joi.string().allow(''),
    telephone: Joi.number().default(0)
});

export default portfolioSchema;