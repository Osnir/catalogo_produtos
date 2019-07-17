/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ovly/catalogo_produtos/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});