import { Box, Flex, Image, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { shuffle } from "lodash"

import InlineLink from "@/components/Link"
import Text from "@/components/OldText"

// TODO: Re-import once Crowdin scripts are functional and data available
// import data from "../data/contributors.json"

export interface Contributor {
  login: string
  name: string
  avatar_url: string
  profile: string
  contributions: Array<string>
}

const Contributors = () => {
  const [contributorsList, setContributorsList] = useState<Array<Contributor>>(
    []
  )

  // TODO: Re-enable once Crowdin scripts are functional and data available
  // useEffect(() => {
  //   const list = shuffle(data.contributors)
  //   setContributorsList(list)
  // }, [])

  return (
    <>
      <p>
        Thanks to our {contributorsList.length} Ethereum community members who
        have contributed so far!
      </p>

      <Flex flexWrap="wrap">
        {contributorsList.map((contributor, idx) => (
          <LinkBox
            key={contributor.name + idx}
            as="div"
            maxWidth="132px"
            margin="2"
            boxShadow="0px 14px 66px rgba(0, 0, 0, 0.07), 0px 10px 17px rgba(0, 0, 0, 0.03), 0px 4px 7px rgba(0, 0, 0, 0.05)"
            _hover={{
              textDecoration: "none",
              borderRadius: "base",
              boxShadow: "0px 8px 17px rgba(0, 0, 0, 0.15)",
              background: "tableBackgroundHover",
              transition: "transform 0.1s",
              transform: "scale(1.02)",
            }}
            _focus={{
              textDecoration: "none",
              borderRadius: "base",
              boxShadow: "0px 8px 17px rgba(0, 0, 0, 0.15)",
              background: "tableBackgroundHover",
              transition: "transform 0.1s",
              transform: "scale(1.02)",
            }}
          >
            <Image
              width="132px"
              height="132px"
              src={contributor.avatar_url}
              alt={contributor.name}
            />
            <Box padding="1rem">
              <Text as="h3" fontSize="md" marginTop="2" marginBottom="4">
                <LinkOverlay
                  as={InlineLink}
                  href={contributor.profile}
                  hideArrow
                  color="text"
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                  isExternal
                >
                  {contributor.name}
                </LinkOverlay>
              </Text>
            </Box>
          </LinkBox>
        ))}
      </Flex>
    </>
  )
}

export default Contributors
