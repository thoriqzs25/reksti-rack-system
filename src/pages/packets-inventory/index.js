import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
      p={"20px"}
      cursor={"pointer"}

      // onClick={() => onPress && onPress()}
    >
      <Link
        href={{
          pathname: "/details",
          query: { type: "item", title: title, color: color },
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"120px"} marginBottom={"8px"}>
          <Image src={type} />
        </Box>
        <Flex borderRadius={"8px"} bgColor={"black"} px={"30px"}>
          <Text color={"white"}>{title}</Text>
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

const PacketsInventory = () => {
  const router = useRouter();
  const { type, id, status } = router.query;

  const [currType, setCurrType] = useState();
  const [currId, setCurrId] = useState();
  const [currStatus, setCurrStatus] = useState();

  useEffect(() => {
    if (router.query) {
      setCurrType(type);
      setCurrId(id);
      setCurrStatus(status);
    }
  }, [router.query]);

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
          onClick={() => {
            if (currType === "shelf") router.back();
            else router.push("/");
          }}
        >
          <Image src={back} />
        </Box>
        <Flex
          marginTop={"40px"}
          marginBottom={"40px"}
          marginLeft={"40px"}
          alignItems={"center"}
        >
          {currType === "shelf" && (
            <Box w={"32px"} marginRight={"16px"}>
              <Image src={shelf} />
            </Box>
          )}
          <Text fontSize={currType === "shelf" ? 20 : 32} fontWeight={700}>
            {currType === "shelf"
              ? `Shelf ID : ${currId} (${currStatus})`
              : "Packets Inventory"}
          </Text>
        </Flex>
        <Flex w={"full"} flexWrap={"wrap"} justifyContent={"center"}>
          <Items
            type={item}
            title={"#A18BC3"}
            color={"red"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={item}
            title={"#D38BE2"}
            color={"red"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={item}
            title={"#7H3M4F"}
            color={"yellow"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={item}
            title={"#4G8H2J"}
            color={"green"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={item}
            title={"#7AGN22"}
            color={"green"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={item}
            title={"#V6Y8W2"}
            color={"green"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={item}
            title={"#F2S1R6"}
            color={"green"}
            onPress={() => router.push("/details")}
          />
          <Items
            type={item}
            title={"#L7N9P4"}
            color={"green"}
            onPress={() => router.push("/details")}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default PacketsInventory;
