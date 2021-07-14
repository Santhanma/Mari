import React,{useState} from 'react';
import './static/ViewDetails.css';
import BackspaceIcon from '@material-ui/icons/Backspace';


export default ({user,chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id:123,
        avatar:'https://www.w3schools.com/w3images/avatar2.png',
        name:'Santhanamari',
        pat_no:'1001',
        mob_no:'8148226840',
        place:'Vadapalani',
        distict:'Chennei',
        state:'Tamilnadu',
        pincode:'600006'
    }
    ])
    const handleClose = () => {
        setShow(false);
    }

   return(
   <div className = "viewDetails" style={{right: show?0:-500}}>
       <div className="viewDetails-head">
           <div onClick={handleClose} className="viewDetails-backbutton">
           <BackspaceIcon style={{color:'#FFFF'}}/>
           </div>
           <div className="viewDetails-headtitle">View User Details
           </div>
           </div>
           <div className="viewDetails-area">
               {list.map((item, key)=>(
                    <div className="viewDetails-item" key={key}>
                        <img className="viewDetails-img" src={item.avatar} alt="" />
                        <div className="viewDetails-name">Name:  {item.name}</div>
                        <div className="viewDetails-name">Patient No:  {item.pat_no}</div>
                        <div className="viewDetails-name">Mobile No:  {item.mob_no}</div>
                        <div className="viewDetails-name">Place:  {item.place}</div>
                        <div className="viewDetails-name">Distict:  {item.distict}</div>
                        <div className="viewDetails-name">State:  {item.state}</div>
                        <div className="viewDetails-name">PinCode:  {item.pincode}</div>


                    </div>
     
               ))}
               
           </div>
   </div>
   );
}