import {useRef,useState} from 'react';
import { useDispatch } from 'react-redux';

import classes from './MainNavigation.module.css';
import {campaignActions} from '../../store/campaign-slice';
import Modal from '../UI/Modal';

const MainNavigation = ()=>
{
    const [displayModal,setDisplayModal] = useState(false);

    const dispatch = useDispatch();

    const sumbitFormHandler = (creator,details)=>
    {
        let today = new Date();
        let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes();
        let dateTime = time+'  '+date;

        const campaignObj = {creator: creator,details: details,lastModified: dateTime};
        dispatch(campaignActions.addCampaign(campaignObj));
    };

    const displayModalHandler = ()=>
    {
        setDisplayModal(true);
    };
    const closeModalHandler = ()=>
    {
        setDisplayModal(false);
    };

    return(
        <nav className={`navbar navbar-expand-lg container ${classes["main-nav"]}`}>
            <a className="navbar-brand">Campaign Marketor</a>
            <div className="add">
                <button className="btn btn-secondary" data-bs-toggle="modal" data-testid="add-campaign" data-bs-target="#myModal" onClick={displayModalHandler}>Add Campaign</button>
                <Modal displayModal={displayModal} closeModal={closeModalHandler} submitModal={sumbitFormHandler} modalType="add" creator="" details=""/>
            </div>
        </nav>
    );
};

export default MainNavigation;