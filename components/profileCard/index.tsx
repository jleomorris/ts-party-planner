interface IProps {
  person: {
    name: string;
    age: number;
    url?: string;
    quote?: string;
  };
}

const ProfileCard: React.FC<IProps> = ({ person }) => {
  return (
    <div
      key={person.name}
      className='max-w-sm m-5 bg-white shadow-lg rounded-xl overflow-hidden'
    >
      <div className='sm:flex sm:items-center h-full px-10 py-6'>
        <img
          className='block mx-auto sm:mx-0 sm:flex-shrink-0 h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-full'
          src={person.url}
          alt="Woman's Face"
        />
        <div className='mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left'>
          <p className='text-xl leading-tight font-bold'>{person.name}</p>
          <p className='text-sm leading-tight text-gray-600'>
            Age: {person.age}
          </p>
          <p className='text-sm leading-tight text-gray-600 italic my-3 font-semibold'>
            {`"${person.quote}"`}
          </p>
          <div className='mt-4'>
            <button className='text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal'>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
