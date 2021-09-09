import ProfileCard from '../profileCard';

interface IProps {
  people: {
    name: string;
    age: number;
    url?: string;
    quote?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderCards = (): JSX.Element[] => {
    return people.map((person) => {
      return <ProfileCard person={person} key={person.name} />;
    });
  };

  return <div className='my-20 flex'>{renderCards()}</div>;
};

export default List;
