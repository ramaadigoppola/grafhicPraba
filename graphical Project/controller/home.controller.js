sap.ui.controller("com.kloudData.controller.home", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.home
*/
	onInit: function() {
        var url = "http://services.odata.org/Northwind/Northwind.svc/Products"
var oModel = new sap.ui.model.json.JSONModel(url);
sap.ui.getCore().setModel(oModel);
this.getView().byId("idVizFrame").setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.home
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.home
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.home
*/
//	onExit: function() {
//
//	}

});