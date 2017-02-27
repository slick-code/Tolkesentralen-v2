"use strict";
var http_1 = require('@angular/http');
var testing_1 = require('@angular/http/testing');
var models_1 = require('../_models/models');
exports.fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: http_1.Http,
    useFactory: function (backend, options) {
        // configure fake backend
        backend.connections.subscribe(function (connection) {
            var testUser = { username: 'test@test.no', password: 'test', firstName: 'Test', lastName: 'User' };
            // wrap in timeout to simulate server api call
            setTimeout(function () {
                // fake authenticate api end point
                if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === http_1.RequestMethod.Post) {
                    // get parameters from post request
                    var params = JSON.parse(connection.request.getBody());
                    // check user credentials and return fake jwt token if valid
                    if (params.username === testUser.username && params.password === testUser.password) {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: { token: 'fake-jwt-token' } })));
                    }
                    else {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200 })));
                    }
                }
                if (connection.request.url.endsWith('/api/oppdrag') && connection.request.method === http_1.RequestMethod.Get) {
                    console.log('/api/oppdrag');
                    // check for fake auth token in header and return test users if valid, this security is implemented server side
                    // in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        var oppdrag = new models_1.Oppdrag();
                        oppdrag.type = "Fremmedmøtetolk",
                            oppdrag.fornavn = "Bob",
                            oppdrag.etternavn = "Marley",
                            oppdrag.sted = "Oslo",
                            oppdrag.dato = "20-05.17 kl. 13:20-14:20",
                            oppdrag.fraspraak = "Spansk",
                            oppdrag.tilspraak = "Engelsk",
                            oppdrag.tlf = "13371337",
                            oppdrag.email = "mail@mail.com",
                            oppdrag.melding = "Dette er en melding, en veldig kreativ melding",
                            oppdrag.firma = "Mr.SmokeAlot&Co";
                        var oppdrag2 = new models_1.Oppdrag();
                        oppdrag2.type = "Telefontolk",
                            oppdrag2.fornavn = "Cheddar",
                            oppdrag2.etternavn = "Ost",
                            oppdrag2.sted = "Oslo",
                            oppdrag2.dato = "18-05.17 kl. 09:30-10:30",
                            oppdrag2.fraspraak = "Engelsk",
                            oppdrag2.tilspraak = "Pĺutonesisk",
                            oppdrag2.tlf = "13371337",
                            oppdrag2.email = "mail@mail.com",
                            oppdrag2.melding = "En ost, flere oster, alle ostene, ironi er en fin ost, ost er godt, ost! ",
                            oppdrag2.firma = "Ostefabrikken";
                        var oppdrag3 = new models_1.Oppdrag();
                        oppdrag3.type = "Fremmedmøtetolk",
                            oppdrag3.fornavn = "Franz",
                            oppdrag3.etternavn = "Jeger",
                            oppdrag3.sted = "Oslo",
                            oppdrag3.dato = "20-05.17 kl. 12:00-13:20",
                            oppdrag3.fraspraak = "Engelsk",
                            oppdrag3.tilspraak = "Norsk",
                            oppdrag3.tlf = "13371337",
                            oppdrag3.email = "mail@mail.com",
                            oppdrag3.melding = "",
                            oppdrag3.firma = "Franz&Jeger";
                        var liste = [oppdrag, oppdrag2, oppdrag3];
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: liste })));
                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                    }
                }
                if (connection.request.url.endsWith('/api/getOversettelser') && connection.request.method === http_1.RequestMethod.Get) {
                    console.log('/api/getOversettelser');
                    // check for fake auth token in header and return test users if valid, this security is implemented server side
                    // in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        var oppdrag = new models_1.Oppdrag();
                        oppdrag.type = "Oversettelse1",
                            oppdrag.fornavn = "Bob",
                            oppdrag.etternavn = "Marley",
                            oppdrag.sted = "Oslo",
                            oppdrag.dato = "20-05.17 kl. 13:20-14:20",
                            oppdrag.fraspraak = "Norsk",
                            oppdrag.tilspraak = "Engelsk",
                            oppdrag.tlf = "13371337",
                            oppdrag.email = "mail@mail.com",
                            oppdrag.melding = "Dette er en melding, en veldig kreativ melding",
                            oppdrag.firma = "Mr.SmokeAlot&Co";
                        var oppdrag2 = new models_1.Oppdrag();
                        oppdrag2.type = "Oversettelse2",
                            oppdrag2.fornavn = "Cheddar",
                            oppdrag2.etternavn = "Ost",
                            oppdrag2.sted = "Oslo",
                            oppdrag2.dato = "18-05.17 kl. 09:30-10:30",
                            oppdrag2.fraspraak = "Engelsk",
                            oppdrag2.tilspraak = "Pĺutonesisk",
                            oppdrag2.tlf = "13371337",
                            oppdrag2.email = "mail@mail.com",
                            oppdrag2.melding = "En ost, flere oster, alle ostene, ironi er en fin ost, ost er godt, ost! ",
                            oppdrag2.firma = "Ostefabrikken";
                        var liste = [oppdrag, oppdrag2];
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: liste })));
                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                    }
                }
                if (connection.request.url.endsWith('/api/getListeTolk') && connection.request.method === http_1.RequestMethod.Get) {
                    console.log('/api/getListeTolk');
                    // check for fake auth token in header and return test users if valid, this security is implemented server side
                    // in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        var tolk = new models_1.Tolk();
                        tolk.fornavn = 'Ernt';
                        tolk.etternavn = 'Roger';
                        tolk.tlf = '92922929';
                        var tolk2 = new models_1.Tolk();
                        tolk2.fornavn = 'Frank';
                        tolk2.etternavn = 'Don';
                        tolk2.tlf = '97979797';
                        var tolk3 = new models_1.Tolk();
                        tolk3.fornavn = 'Ole';
                        tolk3.etternavn = 'Fritz';
                        tolk3.tlf = '47474744';
                        var tolk4 = new models_1.Tolk();
                        tolk4.fornavn = 'Arock';
                        tolk4.etternavn = 'Star';
                        tolk4.tlf = '54545454';
                        var tolk5 = new models_1.Tolk();
                        tolk5.fornavn = 'Line';
                        tolk5.etternavn = 'Dee';
                        tolk5.tlf = '32323232';
                        var listeTolk = [tolk, tolk2, tolk3, tolk4, tolk5];
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: listeTolk })));
                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                    }
                }
                // fake users api end point
                if (connection.request.url.endsWith('/api/users') && connection.request.method === http_1.RequestMethod.Get) {
                    // check for fake auth token in header and return test users if valid, this security is implemented server side
                    // in a real application
                    if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 200, body: [testUser] })));
                    }
                    else {
                        // return 401 not authorised if token is null or invalid
                        connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ status: 401 })));
                    }
                }
            }, 500);
        });
        return new http_1.Http(backend, options);
    },
    deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
};
//# sourceMappingURL=fake-backend.js.map