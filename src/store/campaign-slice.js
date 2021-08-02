import { createSlice } from "@reduxjs/toolkit";

const initialCampaignState = 
{
    campaigns:[]
};

const campaignSlice = createSlice(
{
    name:"campaigns",
    initialState:initialCampaignState,
    reducers:
    {
        addCampaign(state,action)
        {
            state.campaigns.push(action.payload);
        },
        deleteCampaign(state,action)
        {
            let flag=0;
            state.campaigns.forEach((campaign,index)=>
            {
                if(campaign.creator === action.payload.creator && campaign.details === action.payload.details)
                {
                    state.campaigns.splice(index,1);
                    flag=1;
                }
            });
            if(flag===0)
            {
                console.log("Campaign not found!");
            }
        },
        editCampaign(state,action)
        {
            state.campaigns.forEach((campaign,index)=>
            {
                if(campaign.creator === action.payload.initialCampaignObj.creator && campaign.details === action.payload.initialCampaignObj.details)
                {
                    campaign.creator = action.payload.updatedCampaignObj.creator;
                    campaign.details = action.payload.updatedCampaignObj.details;
                    return;
                }
            });
        }
    }   
});

export default campaignSlice;
export const campaignActions = campaignSlice.actions;