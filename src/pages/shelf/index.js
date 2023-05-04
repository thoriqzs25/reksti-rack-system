import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import back from "../../../public/arrow-left.png";
import shelf from "../../../public/shelf.png";
import item from "../../../public/item.png";
import { useRouter } from "next/router";
import Link from "next/link";

const Items = ({ type, title, color, onPress }) => {
  return (
    <Flex
      pos={"relative"}
      flexDir={"column"}
      alignItems={"center"}
      gap={"8px"}
      p={"20px"}
      cursor={"pointer"}
      // onClick={() => onPress && onPress()}
    >
      <Link
        href={{
          pathname: "/details",
          query: { type: "shelf", title: title, color: color },
        }}
      >
        <Box w={"120px"}>
          <Image src={type} />
        </Box>
        <Flex borderRadius={"8px"} bgColor={"black"} px={"30px"}>
          <Text color={"white"} textAlign={"center"} w={"full"}>
            {title}
          </Text>
        </Flex>
        {/* {type === "item" && ( */}
        <Circle
          pos={"absolute"}
          bgColor={
            color === "green"
              ? "#00FF19"
              : color === "yellow"
              ? "#FFE600"
              : "#FF0000"
          }
          w={"28px"}
          h={"28px"}
          right={"28px"}
          top={"16px"}
        />
        {/* )} */}
      </Link>
    </Flex>
  );
};

const Shelf = () => {
  const router = useRouter();

  return (
    <Flex
      flexDir={"column"}
      pt={"40px"}
      px={"400px"}
      alignItems={"center"}
      w={"full"}
    >
      <Box>
        <Box
          w={"40px"}
          h={"40px"}
          cursor={"pointer"}
          onClick={() => router.push("/")}
        >
          <Image src={back} />
        </Box>
        <Text
          fontSize={32}
          fontWeight={700}
          marginTop={"40px"}
          marginBottom={"40px"}
          marginLeft={"40px"}
        >
          Packets Inventory
        </Text>
        <Flex w={"full"} flexWrap={"wrap"} justifyContent={"center"}>
          <Items
            type={shelf}
            title={"A1"}
            color={"green"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={shelf}
            title={"A2"}
            color={"red"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={shelf}
            title={"B1"}
            color={"red"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={shelf}
            title={"B2"}
            color={"yellow"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={shelf}
            title={"C1"}
            color={"yellow"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={shelf}
            title={"C2"}
            color={"green"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={shelf}
            title={"D1"}
            color={"green"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={shelf}
            title={"D2"}
            color={"yellow"}
            onPress={() => router.push("/details")}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Shelf;
