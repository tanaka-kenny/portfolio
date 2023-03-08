import { Project, Team } from "../pages/projects/projects.component";

export const TEAM: Team[] = [
  {
    id: 'migal',
    name:'Migal',
    linkedIn: 'https://www.linkedin.com/in/migal-lewis-216244b2/',
    imageSrc: 'https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1670951390~exp=1670951990~hmac=d42df4f5113785cc2b8aff0bbab2630fb4459f7d5690d452bb47ab4972a58453',
    position: 'Senior Software Developer',
  }
];

export const getTeam = (team: string[])  => {
  return TEAM.filter(member => {
    return team.includes(member.id);
  });
}

export const PROJECTS:Project[] = [
    {
      id: 'mentor_me',
      name: 'Mentor Me',
      description: 'A mobile application that seeks to provide value through mentorship.',
      imageSrc: 'mentor_me_preview',
      tags: ['Frontend','Firebase', 'Ionic', 'Node.js', 'Backend', 'Neo4j', 'Personal'],
      platforms: ['Mobile'],
      sourceCode: 'https://github.com/tanaka-kenny/mentorMe',
      endResult: 'Still in development.',
      team: getTeam(['migal'])
    }
  ];



