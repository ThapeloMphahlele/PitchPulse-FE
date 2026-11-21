export interface TeamOption {
  id: string;
  name: string;
  shortName: string;
  elo: number;
}

export interface SimulationResult {
  homeWinPct: number;
  drawPct: number;
  awayWinPct: number;
  homeGoalsExpected: number;
  awayGoalsExpected: number;
}

export interface ProjectedStanding {
  id: string;
  pos: number;
  team: string;
  projectedPoints: number;
  standardDeviation: number;
  titleOdds: number;
  relegationOdds: number;
}

export const mockTeams: TeamOption[] = [
  { id: "LIV", name: "Liverpool", shortName: "LIV", elo: 2045.2 },
  { id: "ARS", name: "Arsenal", shortName: "ARS", elo: 2018.4 },
  { id: "MCI", name: "Manchester City", shortName: "MCI", elo: 2062.8 },
  { id: "CHE", name: "Chelsea", shortName: "CHE", elo: 1872.6 },
];

export const mockProjectedTable: ProjectedStanding[] = [
  {
    id: "MCI",
    pos: 1,
    team: "Manchester City",
    projectedPoints: 86.4,
    standardDeviation: 3.2,
    titleOdds: 45.2,
    relegationOdds: 0,
  },
  {
    id: "LIV",
    pos: 2,
    team: "Liverpool",
    projectedPoints: 84.1,
    standardDeviation: 4.1,
    titleOdds: 38.5,
    relegationOdds: 0,
  },
  {
    id: "ARS",
    pos: 3,
    team: "Arsenal",
    projectedPoints: 81.8,
    standardDeviation: 3.8,
    titleOdds: 15.1,
    relegationOdds: 0,
  },
  {
    id: "WHU",
    pos: 4,
    team: "West Ham",
    projectedPoints: 68.2,
    standardDeviation: 5.5,
    titleOdds: 0.8,
    relegationOdds: 0.1,
  },
  {
    id: "CHE",
    pos: 5,
    team: "Chelsea",
    projectedPoints: 65.5,
    standardDeviation: 6.2,
    titleOdds: 0.4,
    relegationOdds: 0.5,
  },
];
