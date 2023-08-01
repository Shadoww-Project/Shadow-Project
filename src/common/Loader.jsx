import { Grid } from "react-loader-spinner";


const Loader = () => {


  return (
    <div className="flex justify-center items-center h-screen">
      <Grid
        height="80"
        width="80"
        color="#3C50E0"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;