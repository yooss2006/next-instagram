import dynamic from "next/dynamic";
import React from "react";
import { LoaderSizeMarginProps } from "react-spinners/helpers/props";
const GridLoader = dynamic<LoaderSizeMarginProps>(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  { ssr: false }
);

type Props = {
  color?: string;
};

export default function GridSpinner({ color = "red" }: Props) {
  return <GridLoader color={color} />;
}
