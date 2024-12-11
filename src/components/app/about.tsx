import { Heading, Highlight, Text, VStack } from "@chakra-ui/react"

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
          query="congratulations!"
          styles={{ color: "#3EC7BE", fontWeight: "bold" }}
        >
          Congratulations! You made it!
        </Highlight>
      </Heading>
      <Text textStyle="3xl" pt="7">
        Now it's time to start building your{" "}
        <Highlight
          ignoreCase
          query="awesome app!"
          styles={{ color: "#3EC7BE", fontWeight: "bold" }}
        >
          awesome app! 🚀🚀🚀
        </Highlight>
      </Text>
    </VStack>
  )
}
