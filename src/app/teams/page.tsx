import Link from "next/link";
import { Button } from "tir/components/ui/button";
import { getTeams } from "tir/server/queries";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "tir/components/ui/card";

export default async function Teams() {
  const teams = await getTeams();

  return (
    <div className="container mx-auto p-6">
      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Teams</CardTitle>
          <CardDescription className="text-center">
            List of teams registered in the league
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-gray-200">
            {teams.map((team) => (
              <div
                key={team.id}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-medium">{team.name}</span>
                  <span className="text-sm text-gray-500">{team.captain}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <div className="w-full space-y-4 text-center">
            <p className="text-lg font-medium">
              Click the button below to register a new team:
            </p>
            <Link href="/teams/create-team">
              <Button className="w-full max-w-sm">Register Team</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
