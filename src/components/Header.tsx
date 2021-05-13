import React from "react";
import { Flex, Text } from "rebass";
import RelayLogo from "./RelayLogo";

const headerHeight = "50px";
const headerBackgroundColor = "#f26b00";

// const HeaderSide = styled.div`
//   margin-left: auto;
//   margin-right: 0;
//   display: flex;
// `;

const Header = () => {
  return (
    <Flex
      p={"0px 16px"}
      alignItems={"center"}
      width={"100%"}
      height={headerHeight}
      backgroundColor={headerBackgroundColor}
      color={"white"}
    >
      <RelayLogo />
      <Flex flex={1} justifyContent={"space-between"}>
        <Flex color={"white"} ml={"16px"} fontWeight={"bold"}>
          Relay Store REPL
        </Flex>
        <Flex>
          <Text> Built with ❤️</Text>

          <Text
            as={"a"}
            ml={"4px"}
            fontWeight={"bold"}
            href="https://github.com/daniloab"
          >
            @daniloab
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
