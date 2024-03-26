sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sony/businesspartner2/test/integration/FirstJourney',
		'sony/businesspartner2/test/integration/pages/BusinessPartnersList',
		'sony/businesspartner2/test/integration/pages/BusinessPartnersObjectPage',
		'sony/businesspartner2/test/integration/pages/BusinessPartnerAddressesObjectPage'
    ],
    function(JourneyRunner, opaJourney, BusinessPartnersList, BusinessPartnersObjectPage, BusinessPartnerAddressesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sony/businesspartner2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBusinessPartnersList: BusinessPartnersList,
					onTheBusinessPartnersObjectPage: BusinessPartnersObjectPage,
					onTheBusinessPartnerAddressesObjectPage: BusinessPartnerAddressesObjectPage
                }
            },
            opaJourney.run
        );
    }
);