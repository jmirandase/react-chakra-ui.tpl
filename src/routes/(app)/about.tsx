import About from "@/components/app/about"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/(app)/about")({
  component: About,
})
