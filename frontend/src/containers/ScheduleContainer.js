import React, {useState, useEffect} from 'react'
import {getActivityPictures} from '../services/services.js';
import Navigation from '../components/Navigation';

const ScheduleContainer = () => {

  const[time,setTime] = useState(null)
  const[time2,setTime2] = useState(null)
  const[time3,setTime3] = useState(null)
  const[time4,setTime4] = useState(null)
  const[activity,setActivity] = useState(null)
  const[activity2,setActivity2] = useState(null)
  const[activity3,setActivity3] = useState(null)
  const[activity4,setActivity4] = useState(null)
  const [allActivityPictures, setAllActivityPictures] = useState([])

  let time1img = "data:image/png;base64," + time.picture
  let act1img = "data:image/png;base64," + activity.picture

  useEffect(() => {
    getActivityPictures().then((res) => setAllActivityPictures(res));
  }, []);

  const handleTimeChange = (event) => {
    setTime(event.target.value)
    console.log(event.target.value);
  }
  
  const handleActivityChange = (event)=> {
    setActivity(event.target.value)
  }


 const timeOptions = allActivityPictures?.map((time, index) => {
        const length = time.title.length
        if (length <3)
        return <option value = {time}key={index}>{time.title} </option>;
      });


const activityOptions = allActivityPictures?.map((activity, index) => {
        const length = activity.title.length
        if (length >3)
      
        return <option value = {activity} key={index}>{activity.title}</option>;
      });


  return (
    <div>
     <Navigation/>
      <h3>I am a schedule container</h3>
      <form>
      <select onChange = {handleTimeChange}>
      {timeOptions}
      </select>
      <select  onChange = {handleActivityChange}>
      {activityOptions}
      </select>
      {/* <img src = {act1img}/> */}
      </form>
    </div>
  )
}

export default ScheduleContainer
