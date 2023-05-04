import { Box, Button, Circle, Flex, Text } from "@chakra-ui/react";
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
      gap={"8px"}
      p={"20px"}
      cursor={"pointer"}
      onClick={() => onPress && onPress()}
    >
      <Box w={"120px"}>
        <Image src={type} />
      </Box>
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
    </Flex>
  );
};

const Details = () => {
  const router = useRouter();
  const [currType, setCurrType] = useState();
  const [currTitle, setCurrTitle] = useState();
  const [currColor, setCurrColor] = useState();

  const { type, title, color } = router.query;

  useEffect(() => {
    if (router.query) {
      setCurrType(type);
      setCurrTitle(title);
      setCurrColor(color);
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
          onClick={() => router.back()}
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
          Packets Details
        </Text>
        <Flex w={"full"} alignItems={"center"} justifyContent={"center"}>
          <Items
            type={currType === "item" ? item : shelf}
            title={currTitle}
            color={currColor}
          />
          <Flex
            marginLeft={"4px"}
            flexDir={"column"}
            bg={"rgba(217, 217, 217, 0.37)"}
            p={"24px"}
            borderRadius={"12px"}
            w={"400px"}
            h={"200px"}
            justifyContent={"center"}
          >
            {currType === "item" && (
              <Text fontSize={16} fontWeight={700}>
                Packet ID : {currTitle}
              </Text>
            )}
            <Text fontSize={16} fontWeight={700}>
              Shelf ID : {currType === "shelf" ? currTitle : "B2"}
            </Text>
            {currType === "item" && (
              <Text fontSize={16} fontWeight={700}>
                Category :{" "}
                {currColor === "green"
                  ? "Green"
                  : color === "yellow"
                  ? "Yellow"
                  : "Red"}
              </Text>
            )}
            {currType === "shelf" && (
              <Text fontSize={16} fontWeight={700}>
                Status :{" "}
                {currColor === "green"
                  ? "Available Space"
                  : currColor === "yellow"
                  ? "Nearly Full"
                  : "Full"}
              </Text>
            )}
            {currType === "shelf" && (
              <Button
                color={"black"}
                bg={"#FFC30D"}
                w={"48%"}
                h={"32px"}
                alignSelf={"center"}
                marginTop={"20px"}
              >
                <Link
                  href={{
                    pathname: "/packets-inventory",
                    query: {
                      type: "shelf",
                      id: currTitle,
                      status:
                        currColor === "green"
                          ? "Available Space"
                          : currColor === "yellow"
                          ? "Nearly Full"
                          : "Full",
                    },
                  }}
                >
                  <Text>Packages Details</Text>
                </Link>
              </Button>
            )}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Details;
