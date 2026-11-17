// Everything personal lives here, so you edit one file instead of hunting through pages.

export const site = {
  name: 'Gavin Cannon',
  role: 'Backend Engineer',
  location: 'Utah',
  experience: '2 yrs',
  status: 'Open to remote roles',

  // Two sentences. Say what you do, then one real opinion or habit only you would write.
  pitch:
    'I build the boring parts that have to stay right: schemas, migrations, permissions, and the APIs on top of them. I would rather spend an afternoon on a migration plan than an evening restoring a backup.',

  links: {
    email: 'you@example.com',
    resume: '/resume.pdf', // drop your PDF into public/resume.pdf
    github: 'https://github.com/USERNAME',
    linkedin: 'https://www.linkedin.com/in/USERNAME',
  },
};

export const experience = [
  {
    company: 'Alliance Community Services',
    title: 'Software Developer (Contract)',
    dates: 'Aug 2024 – Oct 2026',
    where: 'Remote',
    // Outcomes, not duties. Keep each to one line if you can. Edit anything I overstated.
    bullets: [
      'Built a lead-tracking module from scratch: 7 tables and 11 pages in PL/SQL, delivered ahead of schedule and under budget.',
      'Split a legacy service into two domains with a solo production data migration. Live data moved with zero loss.',
      'Designed role-based permissions so only admins can delete records and only designated editors can change them.',
      'Gathered requirements directly from stakeholders and helped plan the roadmap for a platform that connected 2,100+ people to public resources.',
      'Refactored broken legacy components left by a previous developer and tuned schema and queries for stable performance.',
    ],
    stack: ['Oracle APEX', 'PL/SQL', 'SQL', 'Schema design'],
  },
];

export const education = {
  school: 'Brigham Young University–Idaho',
  degree: 'B.S. Software Development',
  dates: '2024',
  note: '3.93 GPA · 64 credits in 15 months',
};

export const stack = [
  'SQL', 'PostgreSQL', 'PL/SQL', 'Node.js', 'TypeScript', 'C#', '.NET',
  'Express', 'MongoDB', 'Supabase', 'Git', 'GitHub Actions', 'Vercel',
];
