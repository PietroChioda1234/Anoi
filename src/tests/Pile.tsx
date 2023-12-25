
import Disk from "./Disk";

interface Props {
  stacks: number[];
}

const Pile = ({ stacks }: Props) => {
  return (
    <div>
      <p>Pile</p>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {stacks.map((number, index) => (
          <li key={index}>
            <Disk width={number}></Disk>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pile;
