import { Button, Container, Text } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"

const NotFound = () => {
  return (
    <>
      <Container
        alignItems="stretch"
        justifyContent="center"
        textAlign="center"
        maxW="sm"
        pt="24"
      >
        <Text
          fontSize="8xl"
          fontWeight="bold"
          lineHeight="1"
          mb={4}
          color={{ base: "#3EC7BE", _dark: "white" }}
        >
          404
        </Text>
        <Text fontSize="md">Oops!</Text>
        <Text fontSize="md">Page not found.</Text>
        <Button
          as={Link}
          to="/"
          mt={4}
          textStyle="md"
          bg={{ base: "#3EC7BE" }}
          color={{ base: "white", _dark: "black" }}
          fontWeight="bold"
        >
          Go back
        </Button>
      </Container>
    </>
  )
}

export default NotFound
