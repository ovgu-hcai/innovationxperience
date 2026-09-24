// Edit this file to update every piece of visible website content.
export const siteContent = {
  brand: { first: 'Innovation', accent: 'X', last: 'perience', tagline: 'The next wave' },
  navigation: [
    { id: 'about', label: 'About' }, { id: 'program', label: 'Program' },
    { id: 'events', label: 'Events' }, { id: 'people', label: 'People' },
    { id: 'contact', label: 'Contact' }, { id: 'sponsors', label: 'Sponsors' }
  ],
  hero: {
    eyebrow: 'Magdeburg · Ideas in motion',
    title: 'Innovation Xperience',
    headline: ['Imagine boldly.', 'Build what matters.'],
    copy: 'A living launchpad for human-centred technology, ambitious people and ideas ready to move.',
    primary: 'Explore the experience', secondary: 'Meet the people'
  },
  about: {
    eyebrow: 'This is Innovation Xperience', title: ['Ideas need space.', 'We create momentum.'],
    copy: 'An open environment where students, researchers, founders and industry partners turn ambition into practical, human-centred innovation.',
    cards: [
      { number:'01', title:'Open by design.', text:'Different disciplines, perspectives and experiences come together around problems worth solving.' },
      { number:'02', title:'Human at the centre.', text:'Technology should amplify people—not replace them. Ethics, fairness and usability belong in every build.' },
      { number:'03', title:'From thought to thing.', text:'Prototype quickly. Test honestly. Learn continuously. Build what creates meaningful change.' }
    ]
  },
  program: {
    eyebrow:'The experience', title:['Everything an idea','needs to move.'], copy:'Three connected environments create the momentum to validate, build and grow.',
    items:[
      {title:'Startup Studio',text:'Shape the problem, validate demand and move toward a testable MVP.'},
      {title:'Tech Lab',text:'Explore AI, IoT, data and design with academic and industry expertise.'},
      {title:'Community',text:'Find collaborators through talks, working sessions and shared challenges.'}
    ],
    research:['Responsible AI','Ethical AI','Explainability','Bias & Fairness','Human–AI Collaboration','Natural Language Processing','Usability','Privacy & Safety']
  },
  events: {
    eyebrow:'On the horizon', title:['Ideas are better','when shared.'], copy:'Dates remain provisional. Confirmed programme details and registration links will be announced here.',
    items:[
      {date:'14 OCT',title:'HCAI Leadership Lessons',text:'A leadership series exploring responsible, human-centred AI.'},
      {date:'24 OCT',title:'Innovation Xperience Kick-off',text:'Meet the community and discover the programme.'},
      {date:'24—25 NOV',title:'HCAI Symposium',text:'Two days of ideas, research and human-centred technology.'}
    ]
  },
  people: {
    eyebrow:'The people', title:['Curious minds.','Shared momentum.'], copy:'Meet the HCAI community behind Innovation Xperience.',
    items:[
      {name:'Prof. Dr.-Ing. Ernesto William De Luca',role:'Head, Human-Centred Artificial Intelligence',image:'./images/team/ernesto.jpg',url:'https://ernestodeluca.eu/cv'},
      {name:'M.Sc. Het Darshan Mehta',role:'PhD Researcher · HCAI, OVGU',image:'./images/team/het.jpeg',url:'https://hetmehta.eu/'},
      {name:'M.Sc. Iveta Jaroscakova',role:'Innovation Xperience Incubator Coordinator',image:'./images/team/iveta.jpeg',url:'https://www.hcai.ovgu.de/'},
      {name:'B.Sc. Gavin Rony Correia',role:'HCAI Team',image:'./images/team/gavin.jpeg',url:'https://www.hcai.ovgu.de/'},
      {name:'B.Sc. Shivnandini Ravikumar Chinnannvar',role:'HCAI Team',image:'./images/team/shivnandini.jpeg',url:'https://www.hcai.ovgu.de/'},
      {name:'B.Sc. Yashashwini Sidramappa Awate',role:'HCAI Team',image:'./images/team/yashashwini-awate.jpg',url:'https://de.linkedin.com/in/yashashwini-awate-b2abb4227'}
    ]
  },
  contact: {
    eyebrow:'Start something', title:['Let’s make your','idea real.'], copy:'Talk to us about the problem you want to solve, the team you are building or the support you need.',
    email:'info@innovationxperience.eu', location:'Experimentelle Fabrik · Magdeburg', map:'https://maps.google.com/?q=Sandtorstr.+23,+39106+Magdeburg'
  },
  sponsors: {
    eyebrow:'Together with', title:['A network that','makes it possible.'], copy:'Hosted and supported by research, university, innovation and funding partners.',
    items:[
      {name:'Human-Centred Artificial Intelligence',image:'./images/partners/hcai.png',url:'https://www.hcai.ovgu.de/'},
      {name:'Otto von Guericke University Magdeburg',image:'./images/partners/ovgu.png',url:'https://www.ovgu.de/'},
      {name:'Experimentelle Fabrik Magdeburg',image:'./images/partners/experimentelle-fabrik.png',url:'https://www.exfa.de/'},
      {name:'Investitionsbank Sachsen-Anhalt',image:'./images/partners/investitionsbank.png',url:'https://www.ib-sachsen-anhalt.de/de/'}
    ]
  },
  footer: { statement:'Human-centred ideas. Real-world impact.', copyright:'Innovation Xperience · Magdeburg' }
}
