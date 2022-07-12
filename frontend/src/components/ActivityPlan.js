import React from "react"

const ActivityPlan = ({activity, time}) => {


    if (!activity || !time) return null;

    let timeimg = "data:image/png;base64," + time.picture
    let actimg = "data:image/png;base64," + activity.picture




    return (
        <>
        <div>
        <h3>Activity:</h3>
        <img src={actimg}/>
        <img src={timeimg}/>
        </div>
        </>
    )
}

export default ActivityPlan;