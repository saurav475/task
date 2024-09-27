import React from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../PopupFooter/PopupFooter.scss';
import axios from 'axios';

const history = useHistory();

 const PopupFooter = (props) => {
    const setOpenPopup = props.setOpenPopup;
    const inputData = props.inputData;
    const array = props.array;
    console.log('props', props)
    function handleSubmit(){
      if(inputData!==""){
      const result = array.map(obj => {
        const [firstKey, firstValue] = Object.entries(obj)[0];
        return { [firstKey]: firstValue };
      });
      const payload = {"segment_name": inputData,
        "schema":result}

      const headers = new Headers();
      headers.append("Content-Type", "application/json")

      const options = {
        method: "POST",
        headers,
        mode: "cors",
        body: JSON.stringify(payload),
      }

        // console.log('payload', payload);
     
        axios.post("https://eo5oir38966l8l9.m.pipedream.net", options)
        .then(res => {
          if (res.status === 200)
            toast.success("Success!");
  
            history.push('/localhost:3000')
                  
          } )
          .catch(err => {
            toast.success(err);   
         });
    }
    }
  return (
    <div className='footer-container'>
        <div className='popup-btn-wrapper' onClick={handleSubmit}><button className='popup-save-btn'>Save the Segment</button></div>
        <div className='popup-btn-wrapper' onClick={()=>{
            setOpenPopup(false);
        }}><button className='popup-close-btn'>Cancel</button></div>
    </div>
  )
}
export default PopupFooter;