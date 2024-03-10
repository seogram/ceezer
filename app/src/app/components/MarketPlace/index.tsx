import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Projects from "../Projects/Projects";
import Wrapper from "../Wrapper";

const MarketPlace = () => {
  // const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string | undefined | null>();
  // const query = searchParams.get("key");


  // useEffect(() => {
  //   setSearchTerm(query ?? undefined);
  // }, [query]);

  return (
    <Wrapper>
      <Projects searchTerm={searchTerm} />
    </Wrapper>
  )
};

export default MarketPlace;