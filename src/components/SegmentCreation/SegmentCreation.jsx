import React from 'react';
import '../SegmentCreation/SegmentCreation.scss';

const SegmentCreation = (props) => {
    const setOpenPopup = props.setOpenPopup;
    const handlePopup = () => {
        setOpenPopup(true);
    }
  return (
    <div className='about-segment-creation-section'>
        <div className='left-section'>
            <div className='save-btn-container' onClick={handlePopup}> 
                <button className='save-segment-btn'>Save Segment</button>
            </div>
        </div>
    </div>
  )
}
export default SegmentCreation;