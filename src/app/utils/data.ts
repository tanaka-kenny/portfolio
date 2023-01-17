import { Project, Team } from "../pages/projects/projects.component";

export const TEAM: Team[] = [
  {
    id: 'migal',
    name:'Migal',
    linkedIn: 'https://www.linkedin.com/in/migal-lewis-216244b2/',
    imageSrc: 'https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1670951390~exp=1670951990~hmac=d42df4f5113785cc2b8aff0bbab2630fb4459f7d5690d452bb47ab4972a58453',
    position: 'Senior Software Developer',
  },
  {
    id: 'thierry',
    name: 'Thierry',
    linkedIn: 'https://www.linkedin.com/in/thierry-luhandjula-12823922/',
    imageSrc: 'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556785.jpg?w=740&t=st=1670951242~exp=1670951842~hmac=179152ebb01da16fb1dce27301f36b7636b94b1279b8544b5676c7ab749092c8',
    position: 'Chief Technology Officer',
  },
  {
    id: 'jamie',
    name: 'Jamie',
    linkedIn: 'https://www.linkedin.com/in/jamie-jooste-4526a315b/',
    imageSrc: 'https://media-exp1.licdn.com/dms/image/C4D03AQGCkspViG0mXA/profile-displayphoto-shrink_800_800/0/1616043483710?e=1676505600&v=beta&t=vdW4p1RibF_01_QvdYImtNnMzsGiqMH9Udti0HcvRGM',
    position: 'Frontend Developer'
  },
  {
    id: 'banele',
    name: 'Banele',
    linkedIn: 'https://www.linkedin.com/in/banele-mlangeni-347083195/',
    imageSrc: 'https://media-exp1.licdn.com/dms/image/C4D03AQHoSPPKghHNVw/profile-displayphoto-shrink_800_800/0/1578320685515?e=1676505600&v=beta&t=ldCpLor4geZc2Go18M2fl5a8MgvX-XESycxZCXfp_AU',
    position: 'Software Developer'
  },
  {
    id: 'bradley',
    name: 'Bradley',
    linkedIn: 'https://www.linkedin.com/in/bradley-sass-437919187/',
    imageSrc: 'https://media-exp1.licdn.com/dms/image/C4D03AQGYwjAjQN6DDg/profile-displayphoto-shrink_800_800/0/1593097087229?e=1676505600&v=beta&t=jBy52Xy5hf7E3VLyxb7-_Akdy8ACaVvL85T1-cLP4RI',
    position: 'Software Developer'
  },
  {
    id: 'enver',
    name: 'Enver',
    linkedIn: 'https://www.linkedin.com/in/enver-samuel-4730b31ab/',
    imageSrc: '../../assets/images/enver.png',
    position: 'Project Owner'
  },
  {
    id: 'liezel',
    name: 'Liezel',
    imageSrc: '../../assets/images/liezel.jpeg',
    linkedIn: 'https://www.linkedin.com/in/liezel-vermeulen-29540b9/',
    position: 'Social Media Manager'
  },
  {
    id: 'mosima',
    name: 'Mosima',
    linkedIn: 'https://www.linkedin.com/in/mosima-selota-7a261624/',
    imageSrc: 'https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556785.jpg?w=740&t=st=1670951242~exp=1670951842~hmac=179152ebb01da16fb1dce27301f36b7636b94b1279b8544b5676c7ab749092c8',
    position: 'Owner'
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
    },
    {
      id: 'assembly_management',
      name: 'Assembly Management',
      description: 'A platform for the AFM Church in the Gauteng Region that attempts to modernize and/or digitize the existing manual management system currently being used by the church.',
      tags: ['Professional', 'Frontend', 'Angular','Firebase', 'Node.js', 'Backend'],
      platforms: ['Web'],
      team: getTeam(['migal'])
    },
    {
      id: 'horus',
      name: 'Horus Management System',
      description: 'A remote asset monitoring platform for cell towers that provides clients with visibility of their entire asset portfolio',
      tags: ['Professional', 'Frontend', 'Angular','Firebase', 'Ionic', 'Node.js', 'Backend'],
      liveUrl: 'https://www.youtube.com/watch?v=H47zatp2MuM',
      platforms: ['Web', 'Mobile'],
      team: getTeam(['migal', 'thierry', 'jamie'])
    },
    {
      id: 'kasi_connect',
      name:'Kasi Connect',
      description: 'A mobile application that attempted to bring internet connect to South African townships',
      imageSrc: 'kasi_connect_preview',
      tags: ['Profession', 'Frontend', 'Angular','Firebase', 'Ionic'],
      liveUrl: 'https://play.google.com/store/apps/details?id=za.co.omnipresent.kasi.connect&pli=1',
      platforms: ['Mobile'],
      team: getTeam(['mosima', 'migal', 'bradley'])
    },
    {
      id: 'mip',
      name: 'Murder in Paris',
      description: 'A website for the multi-award winning documentary by South African director, Enver Samuel.',
      imageSrc: 'murder_in_paris_preview',
      tags: ['Professional', 'Frontend', 'Angular','Firebase'],
      liveUrl: 'https://murderinparis.com/',
      platforms: ['Web'],
      team: getTeam(['enver', 'liezel', 'migal', 'banele']),
      endResult: 'Murder in Paris has gone on to screen in multiple countries as well as win multiple award. Also, Hawks Investigators said Murder in Paris the documentary was extremely helpful in thier investigations.'
    }
  ];



