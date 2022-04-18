/**
 * @description       : 
 * @author            : Johnny A. Guayanay Troya
 * @group             : 
 * @last modified on  : 04-18-2022
 * @last modified by  : Johnny A. Guayanay Troya
**/
import { LightningElement, api } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
export default class BearTile extends LightningElement {
	@api bear;
	appResources = {
		bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
	};
    //evento btn
    handleOpenRecordClick() {
        const selectEvent = new CustomEvent('bearview', {
            detail: this.bear.Id
        });
        this.dispatchEvent(selectEvent);
    }
}