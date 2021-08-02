import { useSelector } from "react-redux";

import classes from './MarketingContainer.module.css';
import CampaignCard from './CampaignCard';

const MarketingContainer = ()=>
{
    const campaigns = useSelector((state)=>state.campaigns.campaigns);

    let content = [];
    let isContentEmpty = false;

    if(campaigns.length === 0)
    {
        isContentEmpty = true;
    }
    else
    {
        isContentEmpty = false;
        campaigns.forEach((campaign,index)=>
        {
            content.push(<CampaignCard className={`${classes["cards"]}`} key={index} creator={campaign.creator} details={campaign.details} lastModified={campaign.lastModified}/>);
        });
    }

    return(
        <div className={`container ${classes["marketing-page"]}`}>
            {isContentEmpty ? <h3 key="0">No Campaigns to display</h3> : <div className={`${classes["card-display"]}`}>{content}</div>}
        </div>
    );
};

export default MarketingContainer;