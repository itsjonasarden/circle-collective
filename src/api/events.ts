export interface IEvents {
  id: string
  startsAt: string
  endsAt: string
  location: {
    venue?: string
    city: string
    country: string
  }
  artistIds: string[]
}

export const EVENTS: IEvents[] = [
  {
    id: '1',
    startsAt: '2022-01-01T00:00:00.000Z',
    endsAt: '2022-01-01T00:00:00.000Z',
    location: {
      venue: 'Klokgebouw',
      city: 'Eindehoven',
      country: 'Netherlands',
    },
    artistIds: ['1', '2', '3'],
  },
  {
    id: '2',
    startsAt: '2022-01-01T00:00:00.000Z',
    endsAt: '2022-01-01T00:00:00.000Z',
    location: {
      city: 'Warsaw',
      country: 'Poland',
    },
    artistIds: ['1', '2'],
  },
  {
    id: '3',
    startsAt: '2022-01-01T00:00:00.000Z',
    endsAt: '2022-01-01T00:00:00.000Z',
    location: {
      venue: 'Sport Paleis',
      city: 'Merksem',
      country: 'Belgium',
    },
    artistIds: ['1', '2', '3', '4'],
  },
  {
    id: '4',
    startsAt: '2022-01-01T00:00:00.000Z',
    endsAt: '2022-01-01T00:00:00.000Z',
    location: {
      city: 'Trutnov',
      country: 'Czech Republic',
    },
    artistIds: ['4', '5', '1'],
  },
]
