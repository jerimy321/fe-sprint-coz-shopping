// import React, { useState } from "react";
// import { AiOutlineStar } from "react-icons/ai";
// import "./BookMark.css";

// const BookMark = ({ itemId, onBookmarkClick }) => {
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   const bookmarkStateHandler = () => {
//     setIsBookmarked(!isBookmarked);
//     onBookmarkClick(itemId);
//   };
//   console.log(onBookmarkClick(itemId));
//   return (
//     <AiOutlineStar
//       className={`bookmark__icon${isBookmarked ? " on" : ""}`}
//       onClick={bookmarkStateHandler}
//     />
//   );
// };

// export default BookMark;
