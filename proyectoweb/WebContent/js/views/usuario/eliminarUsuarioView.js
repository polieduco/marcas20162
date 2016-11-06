define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/usuario/eliminarUsuario.html'
], function($, _, Backbone, SidebarView, eliminarUsuario){

  var eliminarUsuarioView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(eliminarUsuario);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return eliminarUsuarioView;
  
});