define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/otros/generarSoporte.html'
], function($, _, Backbone, SidebarView, generarSoporte){

  var generarSoporteView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(generarSoporte);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return generarSoporteView;
  
});