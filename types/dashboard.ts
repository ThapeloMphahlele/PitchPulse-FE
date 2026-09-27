export type FormResult = "W" | "D" | "L";

export interface TeamStanding {
  id: string;
  pos: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
  xg: number;
  elo: number;
  form: FormResult[];
}

export interface MatchResult {
  id: string;
  homeTeam: string;
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  homeEloDelta: number;
  awayEloDelta: number;
  date: string;
}

export const mockStandings: TeamStanding[] = [
  {
    id: "1",
    pos: 1,
    team: "Liverpool",
    played: 28,
    won: 21,
    drawn: 5,
    lost: 2,
    gf: 68,
    ga: 24,
    gd: 44,
    points: 68,
    xg: 62.4,
    elo: 2045.2,
    form: ["W", "W", "D", "W", "W"],
  },
  {
    id: "2",
    pos: 2,
    team: "Manchester City",
    played: 28,
    won: 20,
    drawn: 6,
    lost: 2,
    gf: 72,
    ga: 26,
    gd: 46,
    points: 66,
    xg: 74.1,
    elo: 2062.8,
    form: ["W", "D", "W", "W", "L"],
  },
  {
    id: "3",
    pos: 3,
    team: "Arsenal",
    played: 28,
    won: 19,
    drawn: 5,
    lost: 4,
    gf: 65,
    ga: 22,
    gd: 43,
    points: 62,
    xg: 60.5,
    elo: 2018.4,
    form: ["L", "W", "W", "D", "W"],
  },
  {
    id: "4",
    pos: 4,
    team: "West Ham",
    played: 28,
    won: 15,
    drawn: 7,
    lost: 6,
    gf: 48,
    ga: 36,
    gd: 12,
    points: 52,
    xg: 44.2,
    elo: 1895.1,
    form: ["W", "L", "W", "W", "D"],
  },
  {
    id: "5",
    pos: 5,
    team: "Chelsea",
    played: 28,
    won: 14,
    drawn: 6,
    lost: 8,
    gf: 52,
    ga: 40,
    gd: 12,
    points: 48,
    xg: 55.8,
    elo: 1872.6,
    form: ["D", "D", "L", "W", "W"],
  },
];

export const mockResults: MatchResult[] = [
  {
    id: "m1",
    homeTeam: "Arsenal",
    homeScore: 2,
    awayTeam: "Chelsea",
    awayScore: 1,
    homeEloDelta: 14.2,
    awayEloDelta: -14.2,
    date: "Today",
  },
  {
    id: "m2",
    homeTeam: "West Ham",
    homeScore: 3,
    awayTeam: "Man City",
    awayScore: 3,
    homeEloDelta: 8.5,
    awayEloDelta: -8.5,
    date: "Yesterday",
  },
  {
    id: "m3",
    homeTeam: "Liverpool",
    homeScore: 2,
    awayTeam: "Como 1907",
    awayScore: 0,
    homeEloDelta: 4.1,
    awayEloDelta: -4.1,
    date: "Yesterday",
  },
];
