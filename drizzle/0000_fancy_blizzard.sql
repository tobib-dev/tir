CREATE TABLE "tir_games" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256),
	"createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"startTime" timestamp with time zone NOT NULL,
	"location" varchar(256) NOT NULL,
	"homeTeam" varchar(256) NOT NULL,
	"visitingTeam" varchar(256) NOT NULL,
	"homeScore" varchar(256) NOT NULL,
	"visitingScore" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE INDEX "name_idx" ON "tir_games" USING btree ("name");