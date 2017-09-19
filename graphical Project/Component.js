sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/kloudData/MyRouter",
    "sap/ui/model/json/JSONModel"
], function (UIComponent,Router,JSONModel) {
    "use strict";
    return UIComponent.extend("com.kloudData.Component", {
    	metadata: {
    		name: "First Project",
    		version: "1.0",
    		includes: [],
    		dependencies: {
    			libs: ["sap.m", "sap.ui.layout"],
    			components: []
    		},

    		rootView: "com.kloudData.view.App",

    		config: {
    			resourceBundle: "i18n/messageBundle.properties",
    			/*serviceConfig: {                                     // To Declare Service
    				name: "MWORKORDER_SRV",
    				serviceUrl: "/sap/opu/odata/INVMWO/MWORKORDER_SRV/"
    			}*/
    		},

    		routing: {
    			config: {
    				routerClass: Router,
    				viewType: "XML",
    				viewPath: "com.kloudData.view",
    				clearTarget: false,
    				transition: "slide"
    			},
    			routes: [{
    				pattern: "",
    				name: "Home",
    				view: "home",
    				viewLevel: 1,
    				targetAggregation: "pages",
    				targetControl: "idAppControl",
    				
    			}]
    		}
    	},

    	init: function() {
    		UIComponent.prototype.init.apply(this, arguments);

    		var mConfig = this.getMetadata().getConfig();

    		// Always use absolute paths relative to our own component
    		// (relative paths will fail if running in the Fiori Launchpad)
    		var oRootPath = jQuery.sap.getModulePath("com.kloudData");

    		// Set i18n model
    		var i18nModel = new sap.ui.model.resource.ResourceModel({
    			bundleUrl: [oRootPath, mConfig.resourceBundle].join("/")
    		});
    		this.setModel(i18nModel, "i18n");

    		//var sServiceUrl = mConfig.serviceConfig.serviceUrl;  // To call the service Url

    		/*//This code is only needed for testing the application when there is no local proxy available
    		var bIsMocked = jQuery.sap.getUriParameters().get("responderOn") === "true";
    		// Start the mock server for the domain model
    		if (bIsMocked) {
    			this._startMockServer(sServiceUrl);
    		}*/
    			/*if(window.location.hostname == "localhost"){                // To set the localhost and set the model to global
    				sServiceUrl = "proxy"+sServiceUrl;
    			}
    		// Create and set domain model to the component
    			var username = "mworkorder1";
    			var passowrd = "qwerty";
    			var auth = "Basic " + btoa(username + ":" + password);
    			var uHeader = {
    				"Authorization": auth
    			};
    			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true, null, null, uHeader);
    		this.setModel(oModel);*/

    		// Set device model
    		var oDeviceModel = new JSONModel({
    			isTouch: sap.ui.Device.support.touch,
    			isNoTouch: !sap.ui.Device.support.touch,
    			isPhone: sap.ui.Device.system.phone,
    			isNoPhone: !sap.ui.Device.system.phone,
    			listMode: sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
    			listItemType: sap.ui.Device.system.phone ? "Active" : "Inactive"
    		});
    		oDeviceModel.setDefaultBindingMode("OneWay");
    		this.setModel(oDeviceModel, "device");

    		this.getRouter().initialize();

    	},


  });
});




