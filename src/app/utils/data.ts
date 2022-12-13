import { Project, Team } from "../pages/projects/projects.component";

export const TEAM: Team[] = [
  {
    id: 'migal',
    name:'Migal',
    linkedIn: 'https://www.linkedin.com/in/migal-lewis-216244b2/',
    imageSrc: 'https://media-exp1.licdn.com/dms/image/C5603AQFG6W7fdyIecA/profile-displayphoto-shrink_800_800/0/1593121569933?e=1676505600&v=beta&t=0MJSdZOaEqlzwB1Qdeqiufvz7jwZ7MvmOE_H4nOqLKc',
    position: 'Senior Software Developer',
  },
  {
    id: 'thierry',
    name: 'Thierry',
    linkedIn: 'https://www.linkedin.com/in/thierry-luhandjula-12823922/',
    imageSrc: 'https://media-exp1.licdn.com/dms/image/D4D03AQF6Qw623PdnhQ/profile-displayphoto-shrink_800_800/0/1665039266142?e=1676505600&v=beta&t=rLsna5xnA9_AnEYjQ3t4HK4dDWA9xPoHyLow6I73B-8',
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
    imageSrc: 'https://media-exp1.licdn.com/dms/image/C4D03AQGYNfmd6gnzVw/profile-displayphoto-shrink_800_800/0/1590503414708?e=1676505600&v=beta&t=uSfRn838wzn2c6uaH2KR4t2XrBDKO4JbmeFnfGFGvBE',
    position: 'Project Owner'
  },
  {
    id: 'liezel',
    name: 'Liezel',
    imageSrc: '',
    linkedIn: 'https://www.linkedin.com/in/liezel-vermeulen-29540b9/',
    position: 'Social Media Manager'
  },
  {
    id: 'mosima',
    name: 'Mosima',
    linkedIn: 'https://www.linkedin.com/in/mosima-selota-7a261624/',
    imageSrc: 'https://media-exp1.licdn.com/dms/image/C4E03AQGxBgXdGK7Bng/profile-displayphoto-shrink_800_800/0/1521022336062?e=1676505600&v=beta&t=oRfJAWIzkCtxvf2FiGi3OfTxdaZxGLEelryisX1xags',
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
      description: 'This is a mobile application that seeks to provide value through mentorship.',
      imageSrc: 'mentor_me_preview',
      tags: ['Frontend','Firebase', 'Ionic', 'Node.js', 'Backend', 'Neo4j', 'Personal'],
      platforms: ['Mobile'],
      sourceCode: 'https://github.com/tanaka-kenny/mentorMe',
      endResult: 'Still in development.'
    },
    {
      id: 'assembly_management',
      name: 'Assembly Management',
      description: 'platform for the AFM Church in the Gauteng Region that attempts to modernize and/or digitize the existing manual management system currently being used by the church.',
      tags: ['Professional', 'Frontend', 'Angular','Firebase', 'Node.js', 'Backend'],
      platforms: ['Web'],
      team: getTeam(['migal'])
    },
    {
      id: 'horus',
      name: 'Horus Management System',
      description: 'remote asset monitoring platform for cell towers that provides clients with visibility of their entire asset portfolio',
      tags: ['Professional', 'Frontend', 'Angular','Firebase', 'Ionic', 'Node.js', 'Backend'],
      liveUrl: '',
      platforms: ['Web', 'Mobile'],
      team: getTeam(['migal', 'thierry', 'jamie'])
    },
    {
      id: 'kasi_connect',
      name:'Kasi Connect',
      description: 'A mobile that attempted to bring internet connect to South African townships',
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
      tags: ['Profession', 'Frontend', 'Angular','Firebase'],
      liveUrl: 'https://murderinparis.com/',
      platforms: ['Web'],
      team: getTeam(['enver', 'liezel', 'migal', 'banele'])
    }
  ];



