import React from "react";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import "./styles.css";

const Filter = () => {
  return (
    <>
      <div className="filters">
        <div>
          <Select placeholder="David White">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div>
          <Select placeholder="Filter by Project">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>

        <Button colorScheme="gray">Apply Filter</Button>
        <Button colorScheme="gray" variant="solid">
          Reset
        </Button>
      </div>
      <div className="process">
        <Button
          rightIcon={<ChevronLeftIcon />}
          colorScheme="teal"
          variant="outline"
        >
          To Do
        </Button>
        <Button
          rightIcon={<ChevronLeftIcon />}
          colorScheme="teal"
          variant="outline"
        >
          In Progress
        </Button>
        <Button
          rightIcon={<ChevronLeftIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Completed
        </Button>
      </div>
    </>
  );
};

export default Filter;
