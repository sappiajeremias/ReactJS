import { BounceLoader } from "react-spinners";

const override = {
  position: "absolute",
  top: "40%",
  left: "45%",
};

function Spinner() {
  return <BounceLoader color="#434242" size={250} cssOverride={override}/>;
}

export default Spinner;
