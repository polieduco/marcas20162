define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/otros/paginainicio.html'
], function($, _, Backbone, SidebarView, login){

  var paginainicio = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(paginainicio);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return paginainicio;
  
});
