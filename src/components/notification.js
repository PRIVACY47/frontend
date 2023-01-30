
import {NavigationBar} from  './Navbar.js'

import {Footer} from "./Footer"

import {useState, useEffect} from "react";
import axios from 'axios';

const NotificationCard = (props) => {

    return (<>
    
        <div className='m-2 p-2 rounded border-2 border-gray-200' >
            
            <p className='text-center'>{props.Notification}</p>
            <p className='text-right'>{new Date(props.date).toLocaleString()}</p>
        </div>
    </>);
}
export const Notifications = () => {

    const [AllNotification, setAllNotication] = useState([]);

    const FetchNotification = () => {
        axios.get('/api/notifications')
        .then(function (response) {
          setAllNotication(response.data["notfications"])
            console.log(response.data["notfications"])
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      
    }
    const notificationSection= AllNotification.map((n) =>  <div  key={n._id}> {<NotificationCard  Notification={n.description} date={n.date}  id={n._id} />} </div>)
    useEffect(FetchNotification,[])
    return (    
        <>

        <NavigationBar heading="Notifications" /> 

        <div className='md:grid grid-cols-2'>

        {notificationSection}

        </div>
       
    
        <Footer /> 
      
        </>
    );
}