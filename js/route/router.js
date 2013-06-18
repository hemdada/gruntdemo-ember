/**
 Workspace navigation module.

 @module Workspace
 @submodule  Routes
 */

App.Router.map(function () {
    this.resource("workspace", function () {
        this.route("proj", {path: ":title"});
    });
});

/**
 @class IndexRoute
 @extends Ember.Route
 */
App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo("workspace.proj", "projects");
    }
});

/**
 @class WorkspaceRoute
 @extends Ember.Route
 */
App.WorkspaceRoute = Ember.Route.extend({
    model: function () {
        return App.WorkspaceModel.find();
    }
});


