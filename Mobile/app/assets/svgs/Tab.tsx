import React from 'react';
import Svg, { ClipPath, Defs, G, Line, Path, Rect } from 'react-native-svg';


export const MediumSearchIcon = () => {
  return (
    <Svg
      width="40"
      height="39"
      viewBox="0 0 40 39"
      fill="none"
    >
      <Rect width="40" height="39" rx="8" fill="black" />
      <Path
        d="M16.16 14.65H23.83C24.47 14.65 24.99 15.17 24.99 15.81V17.09C24.99 17.56 24.7 18.14 24.41 18.43L21.91 20.64C21.56 20.93 21.33 21.51 21.33 21.98V24.48C21.33 24.83 21.1 25.29 20.81 25.47L20 25.98C19.24 26.45 18.2 25.92 18.2 24.99V21.91C18.2 21.5 17.97 20.98 17.73 20.69L15.52 18.36C15.23 18.08 15 17.55 15 17.2V15.87C15 15.17 15.52 14.65 16.16 14.65Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 20.92V23C10 28 12 30 17 30H23C28 30 30 28 30 23V17C30 12 28 10 23 10H17C12 10 10 12 10 17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}