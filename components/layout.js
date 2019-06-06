import React from "react";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <h1>Title</h1>

      {children}
    </>
  );
}
