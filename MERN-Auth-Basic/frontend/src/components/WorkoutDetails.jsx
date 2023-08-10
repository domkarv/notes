import { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteWorkout } from "../state/workoutsReducer";

const WorkoutDetails = ({ workout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(workout.title);
  const [load, setLoad] = useState(workout.load);
  const [reps, setReps] = useState(workout.reps);
  const [updatedAt, setUpdatedAt] = useState(workout.updatedAt);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/workouts/${workout._id}`,
        {
          method: "DELETE",
          headers: {
            "x-access-token": localStorage.getItem("user"),
          },
        }
      );

      if (response.ok) {
        dispatch(deleteWorkout(workout));
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:4000/api/workouts/${workout._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem("user"),
          },
          body: JSON.stringify({ title, load, reps }),
        }
      );

      if (response.ok) {
        setUpdatedAt(new Date());
        setIsEditing(false);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  function formatDistanceToNow(date) {
    const distanceInSeconds = Math.floor((new Date() - new Date(date)) / 1000);

    if (distanceInSeconds < 60) return `${distanceInSeconds} second(s) ago`;
    else if (distanceInSeconds < 3600)
      return `${Math.floor(distanceInSeconds / 60)} minute(s) ago`;
    else if (distanceInSeconds < 86400)
      return `${Math.floor(distanceInSeconds / 3600)} hour(s) ago`;
    else return `${Math.floor(distanceInSeconds / 86400)} day(s) ago`;
  }

  return (
    <div className="workout-details">
      <>
        {isEditing ? (
          <form onSubmit={handleEdit}>
            <label>Excersize Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Load (in kg):</label>
            <input
              type="number"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
            />
            <label>Reps:</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <>
            <h4>{title}</h4>
            <p>
              <strong>Load (kg): </strong>
              {load}
            </p>
            <p>
              <strong>Reps: </strong>
              {reps}
            </p>
            <p>{formatDistanceToNow(updatedAt)}</p>
            <span
              className="edit-icon"
              onClick={() => setIsEditing(!isEditing)}
            >
              <img src="./icons/edit.svg" alt="edit" />
            </span>
            <span className="delete-icon" onClick={handleDelete}>
              <img src="./icons/delete.svg" alt="delete" />
            </span>
          </>
        )}
      </>
    </div>
  );
};

export default WorkoutDetails;
