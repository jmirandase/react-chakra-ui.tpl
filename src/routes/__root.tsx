import { Box, ClientOnly, Flex, Skeleton } from "@chakra-ui/react"
import { Outlet, createRootRoute } from "@tanstack/react-router"
import React, { Suspense } from "react"

import { ColorModeToggle } from "@/components/app/color-mode-toggle"
import NotFound from "@/components/app/not-found"

const loadDevtools = () =>
  Promise.all([
    import("@tanstack/router-devtools"),
    import("@tanstack/react-query-devtools"),
  ]).then(([routerDevtools, reactQueryDevtools]) => {
    return {
      default: () => (
        <>
          <routerDevtools.TanStackRouterDevtools />
          <reactQueryDevtools.ReactQueryDevtools />
        </>
      ),
    }
  })

const TanStackDevtools =
  process.env.NODE_ENV === "production" ? () => null : React.lazy(loadDevtools)

export const Route = createRootRoute({
  component: Layout,
  notFoundComponent: () => <NotFound />,
})

function Layout() {
  return (
    <>
      <Flex direction="column" maxW="large" h="auto" position="relative">
        <Box
          textAlign="center"
          fontSize="xl"
          pt="20vh"
          colorPalette="gray"
          css={{ "--color": "colors.colorPalette.600" }}
          _dark={{ "--color": "colors.colorPalette.inverted" }}
        >
          <Outlet />
          <Box pos="absolute" top="4" right="4">
            <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
              <ColorModeToggle />
            </ClientOnly>
          </Box>
        </Box>
        <Suspense>
          <TanStackDevtools />
        </Suspense>
      </Flex>
    </>
  )
}
