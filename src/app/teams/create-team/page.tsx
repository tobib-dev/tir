"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "tir/components/ui/button";
import { Input } from "tir/components/ui/input";
import { Label } from "tir/components/ui/label";
import { registerTeam } from "tir/app/actions";
import { UploadButton, UploadDropzone } from "src/utils/uploadthing";

export default function CreateTeam() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="mb-8 text-xl font-bold">Register New Team</h1>

      <form action={registerTeam} className="w-full max-w-sm space-y-6">
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
          <Label>Team Logo</Label>
          {imageUrl ? (
            <div className="relative mt-2">
              <div className="relative aspect-square w-32 overflow-hidden rounded-lg border">
                <Image src={imageUrl} alt="Team logo preview" fill className="object-cover" />
              </div>
              <Button type="button" variant="destructive" size="icon" onClick={() => setImageUrl(null)} className="absolute -right-2 -top-2 h-6 w-6 rounded-full">
                X
              </Button>
            </div>
          ) : (
            <UploadButton endpoint="imageUploader" />
          )}
        </div>

        <Button type="submit" className="w-full">
          Register Team
        </Button>
      </form>
    </div>
  );
}
