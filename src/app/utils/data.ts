import { Project, Team } from "../pages/projects/projects.component";

export const TEAM: Team[] = [
  {
    id: 'migal',
    name: 'Migal',
    linkedIn: 'https://www.linkedin.com/in/migal-lewis-216244b2/',
    imageSrc: 'https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1670951390~exp=1670951990~hmac=d42df4f5113785cc2b8aff0bbab2630fb4459f7d5690d452bb47ab4972a58453',
    position: 'Senior Software Developer',
  }
];

export const getTeam = (team: string[]) => {
  return TEAM.filter(member => {
    return team.includes(member.id);
  });
}

export const PROJECTS: Project[] = [
  {
    id: 'enl_ib',
    name: 'eNL Internet Banking',
    description: 'Internet banking web applications for eNL\'s client, business and back office applications',
    tags: ['frontend', 'angular', 'git', 'ci/cd pipelines'],
    platforms: ['Web'],
  },
  {
    id: 'bbb_planner',
    name: 'Botle Buhle Brands Campaign Planner',
    description: 'A system that allows users to capture and manage products and their prices for a time based campaign months in advance to allow internal marketing department to print out physical copies of a piece list to distribute to customers and distributors',
    tags: ['frontend', 'backend', 'angular', 'git', 'ci/cd pipelines', 'bitbucket', 'java', 'spring boot'],
    platforms: ['Web'],
  },
  {
    id: 'mentor_me',
    name: 'Mentor Me',
    description: 'A mobile application that seeks to provide value through mentorship.',
    imageSrc: 'mentor_me_preview',
    tags: ['frontend', 'firebase', 'git', 'ionic', 'node.js', 'backend', 'neo4j', 'personal'],
    platforms: ['Mobile'],
    sourceCode: 'https://github.com/tanaka-kenny/mentorMe',
    endResult: 'Still in development.',
    team: getTeam(['migal'])
  }
];



