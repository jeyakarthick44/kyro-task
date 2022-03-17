import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Badge, SimpleGrid, Heading } from "@chakra-ui/react";

const Home = () => {
  const [work, setWork] = useState([]);
  const fetchApi = () => {
    axios
      .get("http://localhost:5000")
      .then(function (response) {
        let backEnd = response.data.Task;
        console.log(response.data.Task);
        setWork(backEnd);
        console.log(work);
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
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={4}
        style={{
          margin: "20px",
        }}
      >
        {work.map((item) => (
          <Box
            style={{
              width: "100%",
              backgroundColor: "rgb(255 255 255)",
              boxShadow: "rgba(3 209 255) 0px 5px 15px",
            }}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            key={item.id}
          >
            <Box p={6}>
              <Box textAlign="center">
                <Heading color="teel" as="h5" size="sm">
                  {item.ProjectId} - {item.ProjectName}
                </Heading>
              </Box>
              <Box
                textAlign="center"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {item.Licenses}
              </Box>

              <Box as="h5" color="gray.600" fontSize="sm" textAlign="center">
                {item.Design}
              </Box>
              <Box as="h4" color="gray.600" fontSize="sm" textAlign="center">
                {item.date}
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Box as="span" color="gray.600" fontSize="sm">
                  <Badge borderRadius="full">{item.percentage}</Badge>
                </Box>
                <Box>
                  <Box as="span" color="gray.600" fontSize="sm">
                    <Badge borderRadius="full">Notes</Badge>
                  </Box>
                </Box>
                <Box as="span" color="gray.600" fontSize="sm">
                  <Badge borderRadius="full">{item.risk}</Badge>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
