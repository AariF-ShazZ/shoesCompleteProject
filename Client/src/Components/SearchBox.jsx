import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

const SearchBox = ({ handleSubmit, query, setQuery }) => {
  const inputWidth = useBreakpointValue({
    base: "100%",
    md: "70%",
    lg: "150%",
  });

  return (
    <>
      <InputGroup
        w={inputWidth}
        bg={"gray.100"}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderRadius="26px"
        pl="1%"
      >
        <InputLeftElement pointerEvents="none" display="flex" alignContent="center" justifyContent="space-between" pl="2%">
          <SearchIcon color="gray.300" mt="10px" fontSize="20px" />
        </InputLeftElement>
        <Input
          type="text"
          color="blackAlpha.600"
          placeholder="Search something here"
          _placeholder={{ color: "gray.500" }}
          size="lg"
          borderRadius="26px"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button-71" role="button" onClick={() => handleSubmit()}>
          Search
        </button>
      </InputGroup>
    </>
  );
};

export default SearchBox;
