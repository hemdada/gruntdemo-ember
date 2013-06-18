/*! example3 2013-06-17 */
/**
 @class App
 @extends Ember.Application
 */


App = Ember.Application.create();
;/**
 Workspace navigation module.

 @module Workspace
 @submodule  Model
 */


/**
 @class Store
 @extends DS.Store
 */
App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
});

/**
 @class WorkspaceModel
 @extends DS.Model
 */
App.WorkspaceModel = DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    path: function () {
        console.log('path');
        return "/workspace/" + this.get('title');
    }.property('title')
});

App.WorkspaceModel.FIXTURES = [
    {   id: 1,
        title: 'projects',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   id: 2,
        title: 'concepts',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   id: 3,
        title: 'benchmarks',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   id: 4,
        title: 'surveys',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   id: 5,
        title: 'panels',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   id: 6,
        title: 'results',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   id: 7,
        title: 'documents',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   id: 8,
        title: 'examples',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
];

;/**
 Workspace navigation module.

 @module Workspace
 @submodule List
 */

/**
 @class WorkspaceListView
 @extends Ember.View
 */
App.WorkspaceListView = Ember.View.extend({
    templateName: "workspacelist"
});


;/**
 Workspace navigation module.

 @module Workspace
 @submodule Sections
 */

/**
 @class WorkspaceSectionsView
 @extends Ember.View
 */
App.WorkspaceSectionsView = Ember.View.extend({
    templateName: "workspacesections",
    didInsertElement: function () {
        $('.affi-navigation-sections').scroll(function () {
            $(this).find('section').each(function (index, ele) {
                if ($(ele).position().top > 0) {
                    $('.affi-navigation-items li').removeClass('selected').eq(index).addClass('selected');
                    return false;
                }
            });
        });
    }
});

;/**
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


