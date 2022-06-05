/* eslint-disable max-len */
export interface IBlogPost {
  id: string
  slug: string
  title: string
  cover: string
  description: string
  content: string
}

export const BLOG_POSTS: IBlogPost[] = [
  {
    id: '1',
    slug: 'deep-dives-pola-brysons-beneath-the-surface',
    title: "Deep Dives: Pola & Bryson's Beneath The Surface",
    cover:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    content:
      "If you haven't heard of Pola & Bryson's latest album Beneath The Surface then what rock have you been living under? Clearly not the same one the duo have been hibernating under the last 12 months.",
    description:
      "If you haven't heard of Pola & Bryson's latest album Beneath The Surface then what rock have you been living under? Clearly not the same one the duo have been hibernating under the last 12 months.",
  },
  {
    id: '2',
    slug: 'mix-of-the-month-gest',
    title: 'Mix of the Month: GEST',
    cover:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    content:
      "There aren't many duos causing as much of a stir in the drum and bass scene as GEST are right now. Formerly known as Gerra & Stone, these two Shogun Audio mainstays continue to excel with their deep, dark, rolling sound.",
    description:
      "There aren't many duos causing as much of a stir in the drum and bass scene as GEST are right now. Formerly known as Gerra & Stone, these two Shogun Audio mainstays continue to excel with their deep, dark, rolling sound.",
  },
  {
    id: '3',
    slug: 'get-to-know-the-sound-of-koherent',
    title: 'Get To Know: The Sound Of Koherent',
    cover:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    content:
      'Inspired by their love of rave culture (which we all sorely miss right now), the EP represents the pinnacle sound Koherent have been honing over recent years.',
    description:
      'Inspired by their love of rave culture (which we all sorely miss right now), the EP represents the pinnacle sound Koherent have been honing over recent years.',
  },
  {
    id: '4',
    slug: 'behind-the-track-monrroe-out-of-time',
    title: 'Behind The Track:  Monrroe - Out Of Time',
    cover:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    content:
      'Inspired by their love of rave culture (which we all sorely miss right now), the EP represents the pinnacle sound Koherent have been honing over recent years.',
    description:
      'Inspired by their love of rave culture (which we all sorely miss right now), the EP represents the pinnacle sound Koherent have been honing over recent years.',
  },
  {
    id: '5',
    slug: 'spotlight-on-pola-bryson-puzzlewood-dj-set',
    title: 'Spotlight on:  Pola & Bryson Puzzlewood DJ set',
    cover:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    content:
      'It will come as no surprise to hear that the spotlight is well and truly on Pola & Bryson right now after the release of their third album Beneath The Surface earlier this month.',
    description:
      'It will come as no surprise to hear that the spotlight is well and truly on Pola & Bryson right now after the release of their third album Beneath The Surface earlier this month.',
  },
]
