import ProfileCard from '../profileCard';
import { IState as IProps } from '../../pages/index';

const List: React.FC<IProps> = ({ people }) => {
  const renderCards = (): JSX.Element[] => {
    return people.map((person) => {
      return <ProfileCard person={person} key={person.name} />;
    });
  };

  return <div className='my-10 flex flex-wrap'>{renderCards()}</div>;
};

export default List;
