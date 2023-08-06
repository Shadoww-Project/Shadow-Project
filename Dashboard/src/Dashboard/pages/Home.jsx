import CardFour from '../components/CardFour';
import CardOne from '../components/CardOne';
import CardThree from '../components/CardThree';
import CardTwo from '../components/CardTwo';


const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
    </>
  );
};

export default Home;
