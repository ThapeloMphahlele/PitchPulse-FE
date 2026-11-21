export interface MatchHistory {
  id: string;
  opponent: string;
  date: string;
  isHome: boolean;
  goalsFor: number;
  goalsAgainst: number;
  xgFor: number;
  xgAgainst: number;
  result: "W" | "D" | "L";
}

export interface TeamStats {
  id: string;
  name: string;
  manager: string;
  elo: number;
  keyPlayer: string; // Subtle nod to the squad
  homeWinPct: number;
  awayWinPct: number;
  recentMatches: MatchHistory[];
}

export const mockTeamData: TeamStats = {
  id: "LIV",
  name: "Liverpool",
  manager: "Arne Slot",
  elo: 2045.2,
  keyPlayer: "A. Isak",
  homeWinPct: 78,
  awayWinPct: 52,
  recentMatches: [
    {
      id: "1",
      opponent: "Chelsea",
      date: "Oct 24",
      isHome: true,
      goalsFor: 2,
      goalsAgainst: 1,
      xgFor: 2.14,
      xgAgainst: 0.82,
      result: "W",
    },
    {
      id: "2",
      opponent: "Arsenal",
      date: "Oct 18",
      isHome: false,
      goalsFor: 1,
      goalsAgainst: 1,
      xgFor: 1.05,
      xgAgainst: 1.2,
      result: "D",
    },
    {
      id: "3",
      opponent: "Como 1907",
      date: "Oct 05",
      isHome: true,
      goalsFor: 3,
      goalsAgainst: 0,
      xgFor: 2.8,
      xgAgainst: 0.1,
      result: "W",
    },
    {
      id: "4",
      opponent: "West Ham",
      date: "Sep 28",
      isHome: false,
      goalsFor: 2,
      goalsAgainst: 0,
      xgFor: 1.9,
      xgAgainst: 0.45,
      result: "W",
    },
    {
      id: "5",
      opponent: "Man City",
      date: "Sep 21",
      isHome: true,
      goalsFor: 1,
      goalsAgainst: 2,
      xgFor: 1.1,
      xgAgainst: 1.8,
      result: "L",
    },
    {
      id: "6",
      opponent: "Aston Villa",
      date: "Sep 14",
      isHome: false,
      goalsFor: 4,
      goalsAgainst: 1,
      xgFor: 3.2,
      xgAgainst: 0.9,
      result: "W",
    },
  ],
};
