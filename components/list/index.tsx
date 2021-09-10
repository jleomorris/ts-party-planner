import ProfileCard from '../profileCard';
import { IState as Props } from '../../pages/index';

export interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const List: React.FC<IProps> = ({ people, setPeople }) => {
  const renderCards = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <ProfileCard
          person={person}
          people={people}
          setPeople={setPeople}
          key={person.name}
        />
      );
    });
  };

  return <div className='flex flex-wrap'>{renderCards()}</div>;
};

export default List;
