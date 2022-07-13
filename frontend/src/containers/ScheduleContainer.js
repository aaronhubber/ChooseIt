import React, {useState, useEffect} from 'react'
import {getActivityPictures} from '../services/services.js';
import Navigation from '../components/Navigation';
import ActivityPlan from '../components/ActivityPlan';
import styled from 'styled-components'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import img from '../assets/images/background.png';


const PageFlex = styled.div`
display: flex;
flex: flex-wrap;
`

const Tile = styled.div`
border-style:solid;
border-color:grey;
border-width:1px;
/* height: 450px; */
width: 23%;
margin:20px;
padding:20px;
justify-content:center;
display:flex;
flex-direction:column;
align-items:center;
background-color:white;`

const Select = styled.select`
/* appearance:none; */
width: 95%;
height: 35px;
background: white;
color: black;
padding-left: 5px;
font-size: 14px;
border-color: grey;
border-style:solid;
margin:5px;
text-align-last:center;
`

 const Title = styled.h1`
 text-align:center;
 color:white;

 `

const ScheduleContainer = ( signOutUser, currentProfile) => {

  const[time1,setTime1] = useState(null)
  const[time2,setTime2] = useState(null)
  const[time3,setTime3] = useState(null)
  const[time4,setTime4] = useState(null)
  const[activity1,setActivity1] = useState(null)
  const[activity2,setActivity2] = useState(null)
  const[activity3,setActivity3] = useState(null)
  const[activity4,setActivity4] = useState(null)
  const [allActivityPictures, setAllActivityPictures] = useState([])

  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
  const element = printRef.current;
  const canvas = await html2canvas(element);
  const data = canvas.toDataURL('image/png');

  const pdf = new jsPDF();
  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

  pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('ACTIVITIES.pdf');
  };


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
        if (length <=4)
        return <option value = {time.id} key={index}>{time.title} </option>;
      });


const activityOptions = allActivityPictures?.map((activity, index,) => {
        const length = activity.title.length
        if (length >4)
      
        return <option value = {activity.id} key={index}>{activity.title}</option>;
      });


  return (
    <div>
    <Navigation signOutUser = {signOutUser}/>
      <Title>Choose What To Do Today!</Title>
      <p>Here you can choose your activities for the day. In the top set of boxes you can chose times, in the botton set of boxes you can chose things to do. If you want to save this timetable you can click the button at the botton of the screen.</p>
      <PageFlex ref={printRef}>
      <Tile>
        <form>
          <Select onChange = {handleTimeChange}>
          <option value="" disabled selected hidden>Choose a Time</option>
          {timeOptions}
          </Select>
          <Select  onChange = {handleActivityChange}>
          <option value="" disabled selected hidden>Choose an Activity</option>
          {activityOptions}
          </Select>
        </form>
        <ActivityPlan activity={activity1} time={time1}/>
      </Tile>
        <Tile>
          <form>
            <Select onChange = {handleTimeChange2}>
            <option value="" disabled selected hidden>Choose a Time</option>
            {timeOptions}
            </Select>
            <Select  onChange = {handleActivityChange2}>
            <option value="" disabled selected hidden>Choose an Activity</option>
            {activityOptions}
            </Select>
          </form>
        <ActivityPlan activity={activity2} time={time2}/>
      </Tile>
      <Tile>
          <form>
              <Select onChange = {handleTimeChange3}>
              <option value="" disabled selected hidden>Choose a Time</option>
              {timeOptions}
              </Select>
              <Select  onChange = {handleActivityChange3}>
              <option value="" disabled selected hidden>Choose an Activity</option>
              {activityOptions}
              </Select>
          </form>
        <ActivityPlan activity={activity3} time={time3}/>
      </Tile>
        <Tile>
          <form>
            <Select onChange = {handleTimeChange4}>
            <option value="" disabled selected hidden>Choose a Time</option>
            {timeOptions}
            </Select>
            <Select  onChange = {handleActivityChange4}>
            <option value="" disabled selected hidden>Choose an Activity</option>
            {activityOptions}
            </Select>
          </form>
          <ActivityPlan activity={activity4} time={time4}/>
          </Tile>
      </PageFlex>
          <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
        </button>
    
    </div>
  )
}

export default ScheduleContainer
