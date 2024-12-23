import React from 'react';
import Button from './Button';

const list = [
  'All',
  'Live',
  'Cricket',
  'Chess',
  'News',
  'WWE',
  'Music',
  'Gaming',
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name, index) => {
        return <Button key={index} name={name} />;
      })}
    </div>
  );
};

export default ButtonList;
