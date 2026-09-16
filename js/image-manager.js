/* Replace these paths with your own uploaded photographs. Missing files intentionally render as placeholders. */
const SITE_IMAGES = {
  hero: ['assets/hero/hero-1.jpg', 'assets/hero/hero-2.jpg', 'assets/hero/hero-3.jpg', 'assets/hero/hero-4.jpg'],
  services: {
    bartending: 'assets/services/bartending.jpg',
    callCentre: 'assets/services/call-centre.jpg',
    hospitality: 'assets/services/hospitality.jpg',
    recruitment: 'assets/services/recruitment.jpg'
  },
  training: 'assets/training/hospitality-training.jpg',
  industries: 'assets/industries/industries.jpg'
};

const SERVICE_DATA = [
  { key:'bartending', title:'Bartenders / Mixologists', description:'Professional bartenders and mixologists for hospitality establishments, events and client requirements.', benefits:['Professional hospitality service','Event-ready team members','Guest-focused delivery'], audience:'Hospitality establishments, event organisers and clients needing polished bar service.' },
  { key:'callCentre', title:'Call Centre / Customer Service', description:'Professional and trained call centre and customer service personnel for businesses requiring excellent customer interaction and support.', benefits:['Clear communication','Customer-first mindset','Reliable support teams'], audience:'Businesses that value responsive, professional customer interactions.' },
  { key:'hospitality', title:'Hospitality', description:'Skilled hospitality personnel for hotels, restaurants, events and guest-service environments.', benefits:['Guest service capability','Professional presentation','Flexible staffing support'], audience:'Hotels, restaurants, venues and hospitality operators.' },
  { key:'recruitment', title:'Recruitment', description:'End-to-end recruitment solutions including sourcing, screening, candidate matching and onboarding support.', benefits:['Sourcing and screening','Candidate matching','Onboarding support'], audience:'Employers looking for a considered, efficient recruitment partner.' }
];
