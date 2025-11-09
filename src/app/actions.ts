"use server";
import { redirect } from "next/navigation";
import { createTeam } from "tir/server/queries";

export async function registerTeam(formData: FormData) {
  const teamName = formData.get("teamName") as string;
  const teamCaptain = formData.get("teamCaptain") as string;

  if (!teamName || !teamCaptain) {
    return;
  }

  await createTeam({ name: teamName, captain: teamCaptain });
  redirect("/teams");
}
