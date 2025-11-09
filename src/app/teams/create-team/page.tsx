import { Button } from "tir/components/ui/button";
import { Input } from "tir/components/ui/input";
import { Label } from "tir/components/ui/label";
import { registerTeam } from "tir/app/actions";
import Form from "next/form";

export default function CreateTeam() {
  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="mb-8 text-xl font-bold">Register New Team</h1>

      <Form action={registerTeam} className="w-full max-w-sm space-y-6">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="teamName">Team Name</Label>
          <Input
            type="text"
            id="teamName"
            name="teamName"
            placeholder="Enter team name"
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="teamCaptain">Team Captain</Label>
          <Input
            type="text"
            id="teamCaptain"
            name="teamCaptain"
            placeholder="Enter team's captain name"
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="teamLogo">Team Logo</Label>
          <div className="flex flex-row items-center gap-2">
            <Input id="teamLogo" type="file" name="teamLogo" />
            <Button>Upload Logo</Button>
          </div>
        </div>
        <Button type="submit" className="w-full">
          Create Team
        </Button>
      </Form>
    </div>
  );
}
