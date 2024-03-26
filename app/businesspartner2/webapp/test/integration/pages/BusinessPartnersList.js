sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sony.businesspartner2',
            componentId: 'BusinessPartnersList',
            contextPath: '/BusinessPartners'
        },
        CustomPageDefinitions
    );
});