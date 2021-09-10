import { IProps as Props } from '../list';

interface IProps {
  people: Props['people'];
  setPeople: Props['setPeople'];
  person: {
    name: string;
    age: number;
    url?: string;
    quote?: string;
  };
}

// interface IProps {
//   person: Props['people'];
// }

const ProfileCard: React.FC<IProps> = ({ person, people, setPeople }) => {
  const removeHandler = (): void => {
    setPeople(people.filter((user) => user.name !== person.name));
  };

  return (
    <div
      key={person.name}
      className='max-w-sm m-3 bg-white shadow-lg rounded-xl overflow-hidden'
    >
      <div className='sm:flex sm:items-center h-full px-5 py-5'>
        <img
          className='block mx-auto sm:mx-0 sm:flex-shrink-0 h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-full'
          src={person.url}
          alt='card image'
        />
        <div className='mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left'>
          <p className='text-xl leading-tight font-bold'>{person.name}</p>
          <p className='text-sm leading-tight text-gray-600'>{person.age}</p>
          <p className='text-sm leading-tight text-gray-600 italic my-3 font-semibold'>
            {`"${person.quote}"`}
          </p>
          <div className='mt-4'>
            <button
              className='text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal'
              onClick={removeHandler}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
