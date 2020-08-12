export const environment = {
    production: false,
    apiBaseUrl: "https://qbotedukenthree.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "53d2d6b1-afa9-4b5c-92fa-6bd3a58789e7",
        clientId: "1e5d2dc8-a7fb-4e55-b3c7-fe8ac5129492",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
