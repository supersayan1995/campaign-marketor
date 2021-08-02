import { render,screen } from "@testing-library/react";
import {Provider} from 'react-redux';

import store from '../../store/store';
import CampaignCard from "./CampaignCard";

describe("CampaignCard Component",()=>
{
    test("Renders CampaignCard component and checks if title rendered correctly",()=>
    {
        render(<Provider store={store}><CampaignCard/></Provider>);

        const cardHeading = screen.getByTestId('card-title');
        expect(cardHeading).not.toBeNull();
    });

    test("Renders CampaignCard component and checks if date rendered correctly",()=>
    {
        render(<Provider store={store}><CampaignCard/></Provider>);

        const dateModified = screen.getByTestId('date-modified');
        expect(dateModified).not.toBeNull();
    });
});