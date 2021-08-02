import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const ModalElement = (props)=>
{
    const [creator,setCreator] = useState('');
    const [details,setDetails] = useState('');

    useEffect(()=>
    {
        setCreator(props.creator);
        setDetails(props.details);
    },[]);
    
    const closeModalHandler = ()=>
    {
        props.closeModal();
    };

    const submitModalHandler = ()=>
    {
        if(creator === '' || details === '')
        {
            window.alert("Entries cannot be empty, please fill the form");
        }
        else
        {
            props.submitModal(creator, details);
            props.closeModal();
        }
    };

    return(
        <div className={classes.modal}>
            <div className={`${classes["modal-content"]}`}>
                <div className={`${classes["modal-header"]}`}>
                    <h4 className={`${classes["modal-title"]}`} data-testid="modal-title">{props.modalType==="add"?`Add a`:`Edit`} campaign</h4>
                </div>
                <div className={classes.seperator}></div>
                <div className={`${classes["modal-body"]}`}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="campaign-creator">Campaign Creator</label>
                            <input id="campaign-creator" className="form-control" type="text" placeholder="Enter a campaign creator" value={creator} onChange={(event)=>setCreator(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="campaign-details">Campaign Details</label>
                            <input id="campaign-details" className="form-control" type="text" placeholder="Enter campaign details" value={details} onChange={(event)=>setDetails(event.target.value)}/>
                        </div>
                    </form>
                </div>
                <div className={classes.seperator}></div>
                <div className={`${classes["modal-footer"]}`}>
                    <button className="btn btn-primary" onClick={submitModalHandler}>Submit</button>
                    <button className="btn btn-secondary" onClick={closeModalHandler}>Close</button>
                </div>
            </div>
        </div>
    );
};

const Modal = (props)=>
{
    if(!props.displayModal)
    {
        return null;
    }
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<ModalElement closeModal={props.closeModal} submitModal={props.submitModal} modalType={props.modalType} creator={props.creator} details={props.details}/>,document.querySelector("#modal-root"))}
        </React.Fragment>
    );
};

export default Modal;