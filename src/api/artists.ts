/* eslint-disable max-len */
export interface IArtist {
  id: string
  name: string
  description: string
  image: string
  socialMedia: {
    instagram?: string
    soundcloud?: string
    spotify?: string
  }
}

export const ARTISTS: IArtist[] = [
  {
    id: '1',
    name: 'IMANU',
    description: `Established late 2019, the IMANU project follows an already impressive chapter in drum & bass. Breaking through at the age of just 16 with a highly distinctive and technical brutalist style, he made a remarkable impression in a very short space of time. However, this was only a hint at what was to come. Now in his early 20s, IMANU has already been responsible for releases on significant labels such as VISION, Deadbeats, Heaven Sent, UKF and mau5trap, he’s remixed the likes of Apashe, TOKiMONSTA and What So Not & Skrillex and already collaborated with fellow kindred, unclassifiable spirits like Sleepnet, Mefjus and Buunshin. Many more are expected to drop in due course.`,
    image: 'https://i.scdn.co/image/ab67616d00001e02d8f8f8f8f8f8f8f8f8f8f8f8f',
    socialMedia: {},
  },
  {
    id: '2',
    name: 'Apache',
    description: `Apache is a French DJ and producer, who has been active in the electronic music scene for over a decade. He is known for his high-quality, high-energy, and unique sound. He has spearheaded the development of a wide range of music styles, including dubstep, house, techno, and more.`,
    image: 'https://i.scdn.co/image/ab67616d00001e02d8f8f8f8f8f8f8f8f8f8f8f8f',
    socialMedia: {
      spotify: 'https://open.spotify.com/artist/1qQLhymHXFPtP5U8KNKsm6',
    },
  },
  {
    id: '3',
    name: 'Monrroe',
    description: `For Bookings: michelle@soulinmotionagency.com Drum & Bass producer/DJ based in Bath/Bristol Shogun Audio Liquicity//Galacy//SGN:LTD//RAM//Fokuz//Liquid Tones//Rush//Soul Deep//Influenza//Liquiddnbftw`,
    image: 'https://i1.sndcdn.com/avatars-xtjfdrmdjK5vCpyE-W4ViKA-t500x500.jpg',
    socialMedia: {
      instagram: 'https://www.instagram.com/monrroe_uk/',
      soundcloud: 'https://soundcloud.com/monrroe-e',
    },
  },
  {
    id: '4',
    name: 'Maduk',
    description: `The pseudonym of Dutch producer Mark van der Schoot (30), Maduk first came to prominence via the YouTube channel Liquicity Drum & Bass in 2011. Van der Schoot had started producing just a year before and had given his friend Maris Goudzwaard -- who ran Liquicity -- a copy of the track "Avalon" which was promptly uploaded. The liquid drum & bass sound was the perfect fit for the burgeoning channel and was released on their new label of the same name.`,
    image: 'https://i1.sndcdn.com/avatars-zJ2lj3GLn0dugVS8-dpx8jA-t500x500.jpg',
    socialMedia: {
      instagram: 'https://www.instagram.com/madukdnb/',
      soundcloud: 'https://soundcloud.com/madukdnb',
      spotify: 'https://open.spotify.com/artist/6TaaqqCMRMSpvNHClfnbEL',
    },
  },
  {
    id: '5',
    name: 'Mefjus',
    description: `Based out of Linz, north Austria, Martin Schober is a singular protagonist at the forefront of this beguiling game we call drum & bass. He likes hip-hop, skateboarding, schnitzel, Leibniz biscuits and long walks in the sunset, but he’s most respected for how he traipses across electronic music’s wildest terrains with total boundary abandonment… And is regarded as a leading influential new-gen figure in the genre.`,
    image: 'https://i1.sndcdn.com/avatars-88X7bczxTlUNcVpV-9zBh3Q-t500x500.jpg',
    socialMedia: {
      instagram: 'https://www.instagram.com/martinmefjus/',
      soundcloud: 'https://soundcloud.com/mefjus',
      spotify: 'https://open.spotify.com/artist/54qqaSH6byJIb8eFWxe3Pj',
    },
  },
]
