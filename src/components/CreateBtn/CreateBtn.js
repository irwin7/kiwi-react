import React from 'react';

const CreateBtn = ({className,text}) => {
  return (
    <button className={className} type='submit'>{text}</button>
  );
};

export default CreateBtn;
