import React, { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

const BookMark = () => {
  const [isBookmarked, setIsBookmarked] = useState();

  return <AiOutlineStar />;
};

export default BookMark;
