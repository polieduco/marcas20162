define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/otros/contactoAyuda.html'
], function($, _, Backbone, SidebarView, ayuda){

  var contactoAyuda = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#/contactoAyuda"]').parent().addClass('active');
      this.$el.html(contactoAyuda);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return contactoAyuda;
  
});
