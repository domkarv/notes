import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { setWorkouts } from "../state/workoutsReducer";

const Home = () => {
  const workouts = useSelector((state) => state.workouts);
  const dispatch = useDispatch();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/workouts", {
          headers: { "x-access-token": localStorage.getItem("user") },
          signal: abortController.signal,
        });
        const jsonData = await response.json();

        if (response.ok) dispatch(setWorkouts(jsonData));
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorkouts();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
