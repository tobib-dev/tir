import Link from "next/link";
import { Button } from "tir/components/ui/button";
import { getTeams } from "tir/server/queries";

export default async function Teams() {
  const teams = await getTeams();
  return (
    <div>
      <div className="flex items-center">
        {teams.map((team) => (
          <div key={team.id} className="flex">
            {team.name}
            Captain: {team.captain}
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center rounded-lg border border-dashed border-gray-200 p-8 text-center">
        <div className="mb-4 text-lg font-medium">
          To register a new team, click the button below:
        </div>
        <Link href="/teams/create-team">
          <Button>Register Team</Button>
        </Link>
      </div>
    </div>
  );
}
