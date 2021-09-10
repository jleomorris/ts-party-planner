import React, { useState } from 'react';
import { IState as Props } from '../../pages/index';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

interface IState {
  guest: {
    name: string;
    age?: number;
    url?: string;
    quote?: string;
  };
}

const AddGuest: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState<IState['guest']>({
    name: '',
    age: undefined,
    url: '',
    quote: '',
  });

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const clickHandler = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }
    setPeople([...people, input]);
    setInput({ name: '', age: 0, url: '', quote: '' });
  };

  return (
    <div className='flex flex-col w-96 m-auto'>
      <input
        type='text'
        placeholder='Name'
        className='shadow-inner m-3 p-3 rounded-md'
        value={input.name}
        onChange={changeHandler}
        name='name'
      />
      <input
        type='number'
        placeholder='Age'
        className='shadow-inner m-3 p-3 rounded-md'
        value={input.age}
        onChange={changeHandler}
        name='age'
      />
      <input
        type='text'
        placeholder='Image URL'
        className='shadow-inner m-3 p-3 rounded-md'
        value={input.url}
        onChange={changeHandler}
        name='url'
      />
      <textarea
        placeholder='Quote'
        className='shadow-inner m-3 p-3 rounded-md h-28'
        value={input.quote}
        onChange={changeHandler}
        name='quote'
      />
      <button
        className='bg-purple-200 hover:bg-purple-300 rounded-md shadow-md m-3 p-3'
        onClick={clickHandler}
      >
        Add to list
      </button>
    </div>
  );
};

export default AddGuest;
