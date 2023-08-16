import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
    <ContentLoader 
    speed={1.5}
    width={300}
    height={40}
    viewBox="0 0 300 40"
    backgroundColor="#666666"
    foregroundColor="#b05fce"
    {...props}
    >
    <rect x="0" y="0" rx="5" ry="5" width="300" height="40" /> 
  </ContentLoader>
);

export default MyLoader;
