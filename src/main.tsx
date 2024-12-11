import { Provider } from "@/components/app/provider"
import { routeTree } from "@/routeTree.gen"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { ThemeProvider } from "next-themes"
import React from "react"
import ReactDOM from "react-dom/client"

const queryClient = new QueryClient()

// create a new router instance
const router = createRouter({ routeTree })
// register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
