import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// import SearchBox from "../SearchBox/SearchBox";
// import ResultCard from "../ResultCard/ResultCard";
import Wrapper from "../Wrapper";

const Container = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string | undefined | null>();
  const query = searchParams.get("key");
  
  useEffect(() => {
    setSearchTerm(query ?? undefined);
  }, [query]);

return (
    <Wrapper>
        something goes here
    {/* <SearchBox />
    <ResultCard searchTerm={searchTerm} /> */}
  </Wrapper>
)
};

export default Container;