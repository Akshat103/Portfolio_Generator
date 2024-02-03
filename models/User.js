const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  githubId: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  profileUrl: { type: String, required: true },
  photos: { type: String, required: true },
  title: { type: String }, // Added from resumeData
  email: { type: String }, // Added from resumeData
  phoneNumbers: [{ type: String }], // Added from resumeData
  website: { type: String }, // Added from resumeData
  socialLinks: {
    linkedin: { type: String }, // Added from resumeData
    twitter: { type: String }, // Added from resumeData
    github: { type: String }, // Added from resumeData
  },
  education: [{
    institute: { type: String }, // Added from resumeData
    degree: { type: String }, // Added from resumeData
    duration: { type: String }, // Added from resumeData
    grades: { type: String }, // Added from resumeData
  }],
  projects: [{
    name: { type: String }, // Added from resumeData
    link: { type: String }, // Added from resumeData
    technologies: { type: String }, // Added from resumeData
    description: { type: String }, // Added from resumeData
    date: { type: String }, // Added from resumeData
  }],
  awards: [{
    name: { type: String }, // Added from resumeData
    certificateLink: { type: String }, // Added from resumeData
    issuer: { type: String }, // Added from resumeData
    date: { type: String }, // Added from resumeData
  }],
  summary: { type: String }, // Added from resumeData, renamed from "interests"
  resumeLink: { type: String }, // Added from resumeData
});

module.exports = mongoose.model('User', userSchema);
