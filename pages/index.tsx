import Head from 'next/head';
import Image from 'next/image';
import homeStyles from '../styles/Home.module.css';
import React, { useState } from 'react';
import List from '../components/list';
import AddGuest from '../components/addGuest';
import { guestData } from '../guestData';

export interface IState {
  people: {
    name: string;
    age: number;
    url?: string;
    quote?: string;
  }[];
}

export interface IProps {
  guests: {
    name: string;
    age: number;
    url?: string;
    quote?: string;
  }[];
}

const Home: React.FC<IProps> = ({ guests }) => {
  const [people, setPeople] = useState<IState['people']>(guests);

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Head>
        <title>Party Planner</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='text-center p-24 min-h-screen min-w-full'>
        <h1 className='text-8xl font-bold '>
          <span className='text-purple-500'>Party</span> Planner
        </h1>
        <div className='my-20 flex flex-col xl:flex-row flex-wrap rounded-xl overflow-hidden'>
          <div className='p-10 xl:w-2/3 bg-gray-100'>
            <List people={people} setPeople={setPeople} />
          </div>
          <div className='xl:w-1/3 py-10 bg-gray-300 flex items-center'>
            <AddGuest people={people} setPeople={setPeople} />
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const guests = guestData;

  return {
    props: {
      guests,
    },
  };
}

export default Home;
