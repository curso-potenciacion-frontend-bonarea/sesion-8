import React, { PropsWithChildren } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({
  level = 1,
  children,
}: PropsWithChildren<HeadingProps>): React.ReactElement => {
  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;
