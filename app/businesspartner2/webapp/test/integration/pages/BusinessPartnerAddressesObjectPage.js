sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sony.businesspartner2',
            componentId: 'BusinessPartnerAddressesObjectPage',
            contextPath: '/BusinessPartners/to_BusinessPartnerAddress'
        },
        CustomPageDefinitions
    );
});