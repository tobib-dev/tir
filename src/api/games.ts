import { createGame, getGames } from "tir/server/queries";

export type Game = {
  id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  startTime: string;
  location: string;
  visitingTeam: string;
  homeTeam: string;
  homeScore: string;
  visitingScore: string;
};

const seedGames: Game[] = [
  {
    name: "Team A vs Team B",
    startTime: "11-01-2025 08:00 PM CST",
    location: "Dallas, TX",
    visitingTeam: "Team B",
    homeTeam: "Team A",
    homeScore: "0",
    visitingScore: "0",
  },
  {
    name: "Team C vs Team D",
    startTime: "11-02-2025 08:00 PM CST",
    location: "Plano, TX",
    visitingTeam: "Team D",
    homeTeam: "Team C",
    homeScore: "0",
    visitingScore: "0",
  },
  {
    name: "Team E vs Team F",
    startTime: "11-04-2025 08:00 PM CST",
    location: "Allen, TX",
    visitingTeam: "Team F",
    homeTeam: "Team E",
    homeScore: "0",
    visitingScore: "0",
  },
  {
    name: "Team G vs Team H",
    startTime: "11-07-2025 08:00 PM CST",
    location: "McKinney, TX",
    visitingTeam: "Team H",
    homeTeam: "Team G",
    homeScore: "0",
    visitingScore: "0",
  },
];

export async function SeedDatabase() {
  const existingGames = await getGames();

  if (existingGames.length === 0) {
    console.log("Seeding database with games...");
    await Promise.all(
      seedGames.map((g) => 
      createGame({
        name: g.name,
        startTime: new Date(g.startTime),
        location: g.location,
        homeTeam: g.homeTeam,
        visitingTeam: g.visitingTeam,
        homeScore: g.homeScore,
        visitingScore: g.visitingScore,
      }),),
    );
    console.log("Seeding complete.");
  } else {
    console.log("Games already exists in Database.")
  }
};