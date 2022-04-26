import React from 'react';
import Back from '@assets/images/back_Icon.svg'
import Search from '@assets/images/search_icon.svg'

export const BackIcon = ({size = 24, fill, isChecked = false}: any) =>
isChecked ? (
  <Back width={size} height={size} fill={fill} />
) : (
  <Back width={size} height={size} fill={fill} />
);

export const SearchIcon = ({size = 24, fill, isChecked = false}:any) =>
isChecked ? (
  <Search width={size} height={size} fill={fill} />
) : (
  <Search width={size} height={size} fill={fill} />
);