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
    eyebrow:'Our events', title:['Where ideas','meet people.'], copy:'Explore the talks, workshops, collaborations and community moments shaping Innovation Xperience.',
    items:[
      {date:'5–6 JUN 2026',title:'IBM × City of Magdeburg Hackathon',text:'A collaborative hackathon bringing together ideas, teams and technology.'},
      {date:'11 JUN 2026',title:'MeetUp Magdeburg Digital',text:'Innovation Xperience hosted Magdeburg’s digital community for exchange and connection.'},
      {date:'9 JUL 2026',title:'Invited lecture: Dr. Candida Maria Greco',text:'An international perspective on human values and moral foundations in LLMs.'},
      {date:'9–10 JUL 2026',title:'DiLanEdu-WB Study Visit',text:'Seminars and workshops with participants of the EU Erasmus+ project.'}
    ],
    upcoming:[
      {date:'2 OCT 2026',title:'Meet potential founders',text:'Introducing the incubator and its support for new ideas.'},
      {date:'30 NOV – 1 DEC 2026',title:'4th HCAI Symposium · AI + Health',text:'Explore the symposium programme and updates in Magdeburg.',url:'https://ovgu-hcai.github.io/symposium2026/#/',cta:'Visit symposium website'}
    ],
    archive:[
      {month:'January',items:[['27 Jan','Student project poster presentations']]},
      {month:'February',items:[['11 Feb','MakerLabs · Building 40 / Sports'],['16 Feb','Incubator presentation to Prof. Jansen and postdoctoral researcher'],['26 Feb','Introduction to new tutors and staff'],['27 Feb','Exchange with Ingo Heyroth of HASOMED'],['27 Feb','Invited lecture by Prof. Marco Polignano']]},
      {month:'March',items:[['19 Mar','MeetUp Magdeburg Digital'],['26 Mar','Exchange with Karsten Steinmetz and Jörg Vierhaus'],['27 Mar','Incubator presentation to Prof. Arndt']]},
      {month:'April',items:[['13 Apr','European Defence Fund information event at OVGU'],['14 Apr','Hackathon planning with IBM and the City of Magdeburg'],['16 Apr','Startup Open Café at HASOMED with Byte Robotics and DocSensei'],['22 Apr','Exchange with HASOMED'],['23 Apr','Incubator introduction for HCAI master’s students interested in startups']]},
      {month:'May',items:[['7 May','KI-Campus podcast discussion'],['19 May','Exchange with IEPS and the State Office for Surveying and Geoinformation'],['20 May','Exchange with HASOMED'],['21 May','Follow-up with Karsten Steinmetz and Jörg Vierhaus'],['26 May','Exchange with Katja Peters of Bechtle']]},
      {month:'June',items:[['1 Jun','Visit by vocational and business education students'],['4 Jun','Exchange with Bechtle'],['5 Jun','Visit by Dr.-Ing. Danny Schott and student'],['5–6 Jun','IBM × City of Magdeburg Hackathon'],['11 Jun','Exchange with Anja Guderjahn, founder of MoXxA®'],['11 Jun','Hosted MeetUp Magdeburg Digital'],['18 Jun','TUGZ Startup Lounge · Pitch Night']]},
      {month:'July',items:[['9 Jul','Invited lecture by Dr. Candida Maria Greco'],['9–10 Jul','DiLanEdu-WB Erasmus+ study visit, seminars and workshops']]},
      {month:'September',items:[['14 Sep','Exchange with Lars and Jana Dornheim of Dornheim Consulting'],['21 Sep','Exchange with Prof. Luca Simeoni of the OVGU Faculty of Medicine']]}
    ]
  },
  people: {
    eyebrow:'The people', title:['Curious minds.','Shared momentum.'], copy:'Meet the HCAI community behind Innovation Xperience.',
    items:[
      {name:'Prof. Dr.-Ing. Ernesto William De Luca',role:'Head, Human-Centred Artificial Intelligence',image:'./images/team/ernesto.jpg',url:'https://ernestodeluca.eu/cv'},
      {name:'M.Sc. Het Darshan Mehta',role:'PhD Researcher · HCAI, OVGU',image:'./images/team/het.jpeg',url:'https://hetmehta.eu/'},
      {name:'M.Sc. Iveta Jaroscakova',role:'Innovation Xperience Incubator Coordinator',image:'./images/team/iveta.jpeg',url:'https://www.hcai.ovgu.de/'}
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
