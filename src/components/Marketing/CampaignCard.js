import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {campaignActions} from '../../store/campaign-slice';
import classes from './CampaignCard.module.css';
import Modal from '../UI/Modal';

const CampaignCard = (props)=>
{
    const [displayModal,setDisplayModal] = useState(false);

    const dispatch = useDispatch();

    const dismissHandler = ()=>
    {
        const campaignObj = {creator:props.creator,details:props.details};
        dispatch(campaignActions.deleteCampaign(campaignObj));
    };

    const displayModalHandler = ()=>
    {
        setDisplayModal(true);
    };
    const closeModalHandler = ()=>
    {
        setDisplayModal(false);
    };

    const editHandler = (creator,details)=>
    {
        let today = new Date();
        let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes();
        let dateTime = time+'  '+date;

        const initialCampaignObj = {creator: props.creator,details:props.details};
        const updatedCampaignObj = {creator: creator,details: details,lastModified: dateTime};

        dispatch(campaignActions.editCampaign({initialCampaignObj,updatedCampaignObj}));
    };

    return(
        <div className={`card ${classes["card-styles"]}`} style={{width: "18rem"}}>
            <div className={`card-body ${classes["card-body-styles"]}`}>
                <h4 className="card-title" data-testid="card-title">A Campaign by {props.creator}</h4>
                <p className="card-text">{props.details}</p>
                <small data-testid="date-modified">Last Modified:<strong>{props.lastModified}</strong></small>
                <div className={`${classes["card-buttons"]}`}>
                    <button className="btn btn-primary btn-sm" onClick={dismissHandler}>Dismiss</button>
                    <button className="btn btn-secondary btn-sm" onClick={displayModalHandler}>Edit Campaign</button>
                    <Modal displayModal={displayModal} closeModal={closeModalHandler} submitModal={editHandler} modalType="edit" creator={props.creator} details={props.details}/>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;