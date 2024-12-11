import Landing from "@/components/app/landing"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(app)/_landing/")({
  component: Landing,
})
