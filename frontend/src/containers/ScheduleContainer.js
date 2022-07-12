import React, {useState, useEffect} from 'react'
import {getActivityPictures} from '../services/services.js';
import Navigation from '../components/Navigation';
import ActivityPlan from '../components/ActivityPlan';
import styled from 'styled-components'

const PageFlex = styled.div`
display: flex;
flex: flex-wrap;
`

const ScheduleContainer = () => {

  const[time1,setTime1] = useState(null)
  const[time2,setTime2] = useState(null)
  const[time3,setTime3] = useState(null)
  const[time4,setTime4] = useState(null)
  const[activity1,setActivity1] = useState(null)
  const[activity2,setActivity2] = useState(null)
  const[activity3,setActivity3] = useState(null)
  const[activity4,setActivity4] = useState(null)
  const [allActivityPictures, setAllActivityPictures] = useState([])

  // let time1img = "data:image/png;base64," + time1.picture
  // let act1img = "data:image/png;base64," + activity1.picture


  useEffect(() => {
    getActivityPictures().then((res) => setAllActivityPictures(res));
  }, []);

  //Activity1
  const handleTimeChange = event => {
    let timeObject = allActivityPictures.find( time => time.id  == event.target.value)
    setTime1(timeObject)
  }
  const handleActivityChange = event => {
    var activityObject = allActivityPictures.find(activity => activity.id == event.target.value)
    setActivity1(activityObject)
  }

  //Activity2
  const handleTimeChange2 = event => {
    let timeObject = allActivityPictures.find( time => time.id  == event.target.value)
    setTime2(timeObject)
  }
  const handleActivityChange2 = event => {
    var activityObject = allActivityPictures.find(activity => activity.id == event.target.value)
    setActivity2(activityObject)
  }

  //Activity3
  const handleTimeChange3 = event => {
    let timeObject = allActivityPictures.find( time => time.id  == event.target.value)
    setTime3(timeObject)
  }
  const handleActivityChange3 = event => {
    var activityObject = allActivityPictures.find(activity => activity.id == event.target.value)
    setActivity3(activityObject)
  }

  //Activity4
  const handleTimeChange4 = event => {
    let timeObject = allActivityPictures.find( time => time.id  == event.target.value)
    setTime4(timeObject)
  }
  const handleActivityChange4 = event => {
    var activityObject = allActivityPictures.find(activity => activity.id == event.target.value)
    setActivity4(activityObject)
  }

 const timeOptions = allActivityPictures?.map((time, index) => {
        const length = time.title.length
        if (length <3)
        return <option value = {time.id} key={index}>{time.title} </option>;
      });


const activityOptions = allActivityPictures?.map((activity, index,) => {
        const length = activity.title.length
        if (length >3)
      
        return <option value = {activity.id} key={index}>{activity.title}</option>;
      });


  return (
    <div>
    <Navigation/>
      <h3>I am a schedule container</h3>
      <PageFlex>
      <div>
        <form>
          <select onChange = {handleTimeChange}>
          {timeOptions}
          </select>
          <select  onChange = {handleActivityChange}>
          {activityOptions}
          </select>
        </form>
        <ActivityPlan activity={activity1} time={time1}/>
      </div>
        <div>
          <form>
            <select onChange = {handleTimeChange2}>
            {timeOptions}
            </select>
            <select  onChange = {handleActivityChange2}>
            {activityOptions}
            </select>
          </form>
        <ActivityPlan activity={activity2} time={time2}/>
      </div>
      <div>
          <form>
              <select onChange = {handleTimeChange3}>
              {timeOptions}
              </select>
              <select  onChange = {handleActivityChange3}>
              {activityOptions}
              </select>
          </form>
        <ActivityPlan activity={activity3} time={time3}/>
      </div>
        <div>
          <form>
            <select onChange = {handleTimeChange4}>
            {timeOptions}
            </select>
            <select  onChange = {handleActivityChange4}>
            {activityOptions}
            </select>
          </form>
          <ActivityPlan activity={activity4} time={time4}/>
        </div>
      </PageFlex>
    
    </div>
  )
}

export default ScheduleContainer
