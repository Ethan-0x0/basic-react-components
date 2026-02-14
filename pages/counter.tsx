import Navbar from "../components/Bar";
import Counter from "../components/Counter"
export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Welcome to the counter page</h1>
      <Counter />
    </>
  );
}