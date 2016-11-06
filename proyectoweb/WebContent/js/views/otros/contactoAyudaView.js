define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/otros/contactoAyuda.html'
], function($, _, Backbone, SidebarView, login){

  var contactoAyuda = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(contactoAyuda);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return contactoAyuda;
  
});
