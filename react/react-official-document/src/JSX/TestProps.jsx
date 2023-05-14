import React from "react";

const TestProps = props => {
  return <div>{JSON.stringify(props, null, 2)}</div>;
};

export default TestProps;
