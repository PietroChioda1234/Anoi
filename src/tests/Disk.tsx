
interface DiskProps {
  width: number;
}

const Disk = ({ width }: DiskProps) => {
  const diskStyle = {
    width: `${width * 20}px`, // Adjust the multiplier as needed
    backgroundColor: "blue", // You can customize the color or other styles
    height: "20px", // Set the height as needed
    margin: "0px", // Add margin between disks
    borderRadius: "5px",
  };

  return <div style={diskStyle}></div>;
};

export default Disk;
