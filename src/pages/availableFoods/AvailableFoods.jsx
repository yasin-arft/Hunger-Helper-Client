import axios from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const AvailableFoods = () => {
  // const navigate = useNavigate();
  const [availableFoods, setAvailableFoods] = useState([]);

  useEffect(() => {
    axios.get('/foods')
      .then(res => setAvailableFoods(res.data));
  }, []);

  console.log(availableFoods);
  
  return (
    <section className="my-5 md:my-8 lg:my-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Available Foods</h2>

    </section>
  );
};

export default AvailableFoods;