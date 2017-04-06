angular
		.module('EfarmaApp')
		.constant('BASE_URL', configuracion.host)
		.factory(
				'DatosUsuarioService',
				[
						'BASE_URL',
						'$http',
						'$httpBackend',
						'$location',
						'$window',
						function(BASE_URL, $http, $httpBackend, $location,
								$window, ngProgressFactory) {
							'use strict';
							try {
								angular.module('ngMockE2E');
								$httpBackend
										.whenPOST(
												BASE_URL
														+ '/rest/users/login')
										.respond(
												200,
                                                [
												 {
													"usuario" : {
                                                        "nombre":"darwin",
                                                        "direccion":"el recreo",
                                                        "telefono":"793399",
                                                        "email":"dj@gmail.com",
                                                        "id":"user001",
                                                        "usuario":"darwin",
                                                        "contrasenia":"123",
                                                        "rol":[
                                                            {
                                                            "nombre" : "usuario",
															"importancia" : 3
                                                             },
                                                             {
                                                                 "nombre":"capo",
                                                                 "importancia":1
                                                             }
                                                        ]
													}		
												}
                                            ]);

							} catch (err) {
								console.log("Error " + err);
							}

                            return {
                                getUser: function () {
                                    var req = {
                                        method: 'POST',
                                        url: BASE_URL + '/rest/data/login',
                                        headers: {
                                            'Content-Type': 'text/plain'
                                        }
                                    }
                                return $http(req);
                                }
                
                            };
						}]);