import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Badge, Heading } from "@chakra-ui/react";

const Home = () => {
  const [project, setProject] = useState("");
  const fetchApi = () => {
    axios
      .get("http://localhost:5000")
      .then(function (response) {
        console.log(response.data.data);
        setProject(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Heading
        as="h2"
        size="xl"
        isTruncated
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Rental House
      </Heading>
      {project.map((item) => (
        <Box
          style={{ marginLeft: "20px", marginTop: "40px" }}
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          {/* <Image
            src={item.coverPhoto.url}
            style={{ height: "270px", width: "100%" }}
            alt="home"
          /> */}
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {item.ProjectName}
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {/* {item.ProjectName} */}
                baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {/* {item.ProjectName} */}
            </Box>
            <Box>
              <Box as="span" color="gray.600" fontSize="sm">
                {/* {item.price}/week */}
              </Box>
            </Box>
            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {/* {item.ProjectName} */}
              </Box>
              <span
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              ></span>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default Home;
