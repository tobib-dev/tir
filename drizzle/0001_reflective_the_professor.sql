ALTER TABLE "tir_games" RENAME TO "tir_game";--> statement-breakpoint
ALTER TABLE "tir_game" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "tir_game" RENAME COLUMN "updatedAt" TO "updated_at";--> statement-breakpoint
ALTER TABLE "tir_game" RENAME COLUMN "startTime" TO "start_time";--> statement-breakpoint
ALTER TABLE "tir_game" RENAME COLUMN "homeTeam" TO "home_team";--> statement-breakpoint
ALTER TABLE "tir_game" RENAME COLUMN "homeScore" TO "home_score";--> statement-breakpoint
ALTER TABLE "tir_game" RENAME COLUMN "visitingScore" TO "visiting_score";--> statement-breakpoint
ALTER TABLE "tir_game" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "tir_game" ADD COLUMN "visiting_team" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "tir_game" DROP COLUMN "visitingTeam";