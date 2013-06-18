/**
 Workspace navigation module.

 @module Workspace
 @submodule Sections
 */

/**
 @class WorkspaceSectionsView
 @extends Ember.View
 */
App.WorkspaceSectionsView = Ember.View.extend({
    templateName:"workspacesections",
    didInsertElement:function () {
        $('.navigation-sections').scroll(function () {
            $(this).find('section').each(function (index, ele) {
                if ($(ele).position().top > 0) {
                    $('.navigation-items li').removeClass('selected').eq(index).addClass('selected');
                    return false;
                }
            });
        });
    }
});

