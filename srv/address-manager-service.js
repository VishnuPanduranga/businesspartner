const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { BusinessPartners, BusinessPartnerAddresses } = this.entities;
    const service = await cds.connect.to('API_BUSINESS_PARTNER');

    this.on('READ', BusinessPartners, async (req) => {
        try {
            const tx = service.transaction();

            //entity name as it is in the .csn file for the service API_BUSINESS_PARTNER
            let entity = 'A_BusinessPartner';
            //columns which we have declared in cds entity that we want to expose
            let columnsToSelect = ["BusinessPartner", "FirstName", "LastName"];
           return service.run(req.query);


        } catch (err) {
            req.reject(err);
        }
    });

    this.on('READ', BusinessPartnerAddresses, async (req) => {
        try {
            //const tx = service.transaction();

            //entity name as it is in the .csn file for the service API_BUSINESS_PARTNER
            //let entity = 'A_BusinessPartnerAddress';
            //columns which we have declared in cds entity that we want to expose
           // let columnsToSelect = ["BusinessPartner", "AddressID", "Country", "PostalCode", "CityName", "StreetName", "HouseNumber"];

            // return await tx.emit({
            //     query: SELECT.from(entity)
            //         .columns(columnsToSelect),
            //     //For API Business Hub usage, we send custom APIKey header
            // headers: {
            //     "APIKey": process.env.S4_APIKEY
            // }
            // })
            return service.run(req.query);
        } catch (err) {
            req.reject(err);
        }
    });

});