import { useState } from "react";
import Activity from "../Components/Activity";
import AddActivity from "../Components/AddActivity";
import { useSelector } from "react-redux";

const Workout = () => {
    const [add, SetAdd] = useState(false);
    const allActivities = useSelector((state) => state)
    const handleClick = () => {
        SetAdd(!add)
    }
    return (
        <div className="workour-wrapper">
            <h2>My Workout</h2>
            <button onClick={handleClick}>Add Activity</button>
            {add && <AddActivity/>}
            {allActivities.map((activity) => {
                return (
                    <Activity
                    key={activity.id}
                    id={activity.id}
                    name={activity.name}
                    duration={activity.duration}
                    />
                )
            })}
        </div>
    )
}

export default Workout