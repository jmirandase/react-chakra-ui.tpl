import {
  Button,
  Card,
  HStack,
  Heading,
  Highlight,
  VStack,
} from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"

export default function Landing() {
  return (
    <VStack gap="8">
      <img
        alt="chakra logo"
        src="/static/images/logo.svg"
        width="80"
        height="80"
      />
      <Heading
        size="3xl"
        letterSpacing="tight"
        style={{ color: "var(--color)" }}
      >
        <Highlight
          ignoreCase
          query="app template"
          styles={{ color: "#3EC7BE" }}
        >
          React &amp; Chakra UI v3 App Template
        </Highlight>
      </Heading>

      <HStack style={{ width: "27rem" }}>
        <Card.Root maxW="2xl">
          <Card.Body>
            <Card.Title textStyle="2xl" style={{ color: "var(--color)" }}>
              Welcome 👨🏻‍💻
            </Card.Title>
            <Card.Description spaceY="3" textStyle="lg" pt="3">
              Hello there! 🤗 You can use this as a barebones app template for
              your React projects.
              <br />
              <Highlight
                query={[
                  "Chakra UI v3,",
                  "TanStack Router,",
                  "TanStack Query",
                  "Vite",
                ]}
                styles={{
                  px: "1.5",
                  bg: "green.contrast",
                  color: "#3EC7BE",
                  fontWeight: "600",
                }}
              >
                It's built around Chakra UI v3, TanStack Router, TanStack Query
                &amp; Vite
              </Highlight>
            </Card.Description>
          </Card.Body>
          <Card.Footer placeContent="center">
            <Button
              as={Link}
              to="/about"
              textStyle="md"
              bg="#3EC7BE"
              fontWeight="bold"
            >
              Show me more!
            </Button>
          </Card.Footer>
        </Card.Root>
      </HStack>
    </VStack>
  )
}
