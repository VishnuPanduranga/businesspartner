using AddressManagerService as service from '../../srv/address-manager-service';

annotate service.BusinessPartners with {
    BusinessPartner         @Common.Label: 'Business Partner';
    BusinessPartnerCategory @Common.Label: 'Business Partner Category';

};

annotate service.BusinessPartners with @(
    UI.SelectionFields: [
        BusinessPartner,
        BusinessPartnerCategory
    ],
    UI.LineItem       : [
        {
            $Type: 'UI.DataField',
            Label: 'Business Partner',
            Value: BusinessPartner
        },
        {
            $Type: 'UI.DataField',
            Label: 'Last Name',
            Value: LastName
        },
        {
            $Type: 'UI.DataField',
            Label: 'First Name',
            Value: FirstName
        },
        {
            $Type: 'UI.DataField',
            Label: 'Business Partner Category',
            Value: BusinessPartnerCategory
        },
        {
            $Type: 'UI.DataField',
            Label: 'Business Partner Type',
            Value: BusinessPartnerType
        },

        {
            $Type: 'UI.DataField',
            Label: 'Business Partner Type',
            Value: BusPartNationality
        }
    ]
);

annotate service.BusinessPartners with @(
    UI.FieldGroup #GeneratedGroup1: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'Business Partner',
                Value: BusinessPartner,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Last Name',
                Value: LastName,
            },
            {
                $Type: 'UI.DataField',
                Label: 'First Name',
                Value: FirstName,
            }
        ],
    },

    UI.FieldGroup #GeneratedGroup2: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'HouseNumber',
                Value: to_BusinessPartnerAddress.HouseNumber,
            },
            {
                $Type: 'UI.DataField',
                Label: 'StreetName',
                Value: to_BusinessPartnerAddress.StreetName,
            },
            {
                $Type: 'UI.DataField',
                Label: 'CityName',
                Value: to_BusinessPartnerAddress.CityName,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Country',
                Value: to_BusinessPartnerAddress.Country,
            }
        ],
    },
    UI.Facets                     : [
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet1',
            Label : 'General Information',
            Target: '@UI.FieldGroup#GeneratedGroup1',
        },
        {
            $Type : 'UI.ReferenceFacet',
            ID    : 'GeneratedFacet2',
            Label : 'Address',
            Target: '@UI.FieldGroup#GeneratedGroup2',
        }
    ]
);

annotate service.BusinessPartnerAddresses with @(
    UI.FieldGroup #GeneratedGroup3: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'BusinessPartner',
                Value: BusinessPartner,
            },
            {
                $Type: 'UI.DataField',
                Label: 'HouseNumber',
                Value: HouseNumber,
            },
            {
                $Type: 'UI.DataField',
                Label: 'StreetName',
                Value: StreetName,
            },
            {
                $Type: 'UI.DataField',
                Label: 'CityName',
                Value: CityName,
            },
            {
                $Type: 'UI.DataField',
                Label: 'Country',
                Value: Country,
            },
        ],
    },
    UI.Facets                     : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet2',
        Label : 'Address',
        Target: '@UI.FieldGroup#GeneratedGroup3',
    }]

);
