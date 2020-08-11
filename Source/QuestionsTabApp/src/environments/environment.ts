export const environment = {
    production: false,
    apiBaseUrl: "https://qboteduken.azurewebsites.net/api/Request/",
    selfUrl: "https://qboteduken-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "53d2d6b1-afa9-4b5c-92fa-6bd3a58789e7",
        clientId: "5d83cbf9-d385-43b3-b3b7-154bf30050df",
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
    gid: "",
    cname: ""
};
