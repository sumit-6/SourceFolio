import mongoose from "mongoose";

const Schema = mongoose.Schema;
const EducationSchema = new Schema({
  institutionName: String,
  place: String,
  year: Number,
  aggregate: Number,
  coursePursuied: String,
});

const DurationSchema = new Schema({
  start: { type: String },
  end: { type: String },
});

const ExperienceSchema = new Schema({
  role: String,
  duration: DurationSchema,
  company: String,
  workDescription: [String],
  certificate: String,
});

const ProjectSchema = new Schema({
  projectName: String,
  description: [String],
  gitHubLink: String,
  projectLink: String,
});

const skillProElementSchema = new Schema({
  skillName: String,
  skillLevel: String,
});

const skillToolElementSchema = new Schema({
  toolName: String,
  toolLevel: String,
});

const SkillsSchema = new Schema({
  programmingSkills: [skillProElementSchema],
  toolsAndFrameworks: [skillToolElementSchema],
});

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

const PortfolioSchema = new Schema({
  user_id: String,
  name: String,
  bio: String,
  githubProfile: String,
  numberOfProjects: String,
  yearsOfExperience: String,
  mainDesignations: [String],
  description: String,
  profilePicture: ImageSchema,
  myEducation: [EducationSchema],
  myExperience: [ExperienceSchema],
  myProjects: [ProjectSchema],
  mySkills: SkillsSchema,
  myAchievements: [String],
  linkedIn: String,
  email: String,
  instagram: String,
  telephone: Number,
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);
export default Portfolio;
