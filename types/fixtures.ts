export type FDRRating = 1 | 2 | 3 | 4 | 5;

export interface Fixture {
  id: string;
  date: string;
  time: string;
  opponent: string;
  opponentElo: number;
  isHome: boolean;
  fdr: FDRRating;
}

export interface GameWeek {
  week: number;
  name: string;
  fixtures: Fixture[];
}

export const mockTeamElo = 2045.2;

export const mockFixtures: GameWeek[] = [
  {
    week: 29,
    name: "Game Week 29",
    fixtures: [
      {
        id: "f1",
        date: "Sat, 28 Oct",
        time: "15:00",
        opponent: "Man City",
        opponentElo: 2062.8,
        isHome: true,
        fdr: 5,
      },
    ],
  },
  {
    week: 30,
    name: "Game Week 30",
    fixtures: [
      {
        id: "f2",
        date: "Wed, 01 Nov",
        time: "20:00",
        opponent: "Bournemouth",
        opponentElo: 1745.3,
        isHome: false,
        fdr: 2,
      },
      {
        id: "f3",
        date: "Sun, 05 Nov",
        time: "16:30",
        opponent: "West Ham",
        opponentElo: 1895.1,
        isHome: true,
        fdr: 3,
      },
    ],
  },
  {
    week: 31,
    name: "Game Week 31",
    fixtures: [
      {
        id: "f4",
        date: "Sat, 11 Nov",
        time: "12:30",
        opponent: "Como 1907",
        opponentElo: 1650.0,
        isHome: true,
        fdr: 1,
      },
    ],
  },
];
