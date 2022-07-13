import React from "react"
import styled from 'styled-components'

const ActivityDetail = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;`

const H3 = styled.h3`
color:black;
`

const ActivityPlan = ({activity, time}) => {


    if (!activity || !time) return null;

    let timeimg = "data:image/png;base64," + time.picture
    let actimg = "data:image/png;base64," + activity.picture




    return (
        <>
        <ActivityDetail>
        <H3>Activity</H3>
        <img src={actimg}/>
        <img src={timeimg}/>
        </ActivityDetail>
        </>
    )
}

export default ActivityPlan;