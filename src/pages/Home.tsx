import Dropdown from "~/components/Custom/Dropdown";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Dropdown>
        <Dropdown.Button>Deneme</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item>A</Dropdown.Item>
          <Dropdown.Item>B</Dropdown.Item>
          <Dropdown.Item>C</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Home;
