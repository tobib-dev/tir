CREATE TABLE "tir_game" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp,
	"start_time" timestamp NOT NULL,
	"location" varchar(256) NOT NULL,
	"home_team" varchar(256) NOT NULL,
	"visiting_team" varchar(256) NOT NULL,
	"home_score" varchar(256),
	"visiting_score" varchar(256)
);
--> statement-breakpoint
CREATE INDEX "name_idx" ON "tir_game" USING btree ("name");