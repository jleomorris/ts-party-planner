interface IProps {
  people: {
    name: string;
    age: number;
    url?: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  return <div>Example list</div>;
};

export default List;
