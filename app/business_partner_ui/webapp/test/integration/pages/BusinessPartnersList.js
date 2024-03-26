sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.sony.businesspartnerui',
            componentId: 'BusinessPartnersList',
            contextPath: '/BusinessPartners'
        },
        CustomPageDefinitions
    );
});