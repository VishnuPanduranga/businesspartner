sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/sony/businesspartnerui/test/integration/FirstJourney',
		'com/sony/businesspartnerui/test/integration/pages/BusinessPartnersList',
		'com/sony/businesspartnerui/test/integration/pages/BusinessPartnersObjectPage',
		'com/sony/businesspartnerui/test/integration/pages/BusinessPartnerAddressesObjectPage'
    ],
    function(JourneyRunner, opaJourney, BusinessPartnersList, BusinessPartnersObjectPage, BusinessPartnerAddressesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/sony/businesspartnerui') + '/index.html'
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