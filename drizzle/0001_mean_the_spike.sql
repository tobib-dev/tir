CREATE TABLE "tir_team" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp,
	"captain" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "team_name_idx" ON "tir_team" USING btree ("name");