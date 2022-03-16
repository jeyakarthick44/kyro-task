import React from "react";
// import axios from "axios";
import { Box, Badge, Image, Heading } from "@chakra-ui/react";

const Home = ({ propertiesForSale, propertiesForRent }) => {
  //   const [data, setData] = useState([]);
  //   console.log(propertiesForSale, propertiesForRent);
  //   var options = {
  //     method: "GET",
  //     url: "https://bayut.p.rapidapi.com/properties/list",
  //     params: {
  //       locationExternalIDs: "5002,6020",
  //       purpose: "for-rent",
  //       hitsPerPage: "25",
  //       page: "0",
  //       lang: "en",
  //       sort: "city-level-score",
  //       rentFrequency: "monthly",
  //       categoryExternalID: "4",
  //     },
  //     headers: {
  //       "x-rapidapi-host": "bayut.p.rapidapi.com",
  //       "x-rapidapi-key": "f14362c2f9msh256b7ee1078a2eap1c6fcejsn569f7774bf22",
  //     },
  //   };

  //   useEffect(() => {
  //     <BallTriangle color="#00BFFF" height={80} width={80} />;
  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         setData(response.data.hits);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }, []);

  return (
    <>
      <Box
        style={{ marginLeft: "20px", marginTop: "40px", marginBottom: "30px" }}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="whitelemon"
      >
        {/* <Image
          src={item.coverPhoto.url}
          style={{ height: "270px", width: "100%" }}
          alt="home"
        /> */}
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              whdoijho
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              whdoijho whdoijho baths
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            whdoijho
          </Box>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              whdoijho
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
              whdoijho
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
      {/* ---------------------------------------------- */}

      <Box
        style={{ marginLeft: "20px", marginTop: "40px", marginBottom: "30px" }}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="black"
      >
        {/* <Image
          src={item.coverPhoto.url}
          style={{ height: "270px", width: "100%" }}
          alt="home"
        /> */}
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              whdoijho
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              whdoijho whdoijho baths
            </Box>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            whdoijho
          </Box>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm">
              whdoijho
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
              whdoijho
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
    </>
  );
};

export default Home;
