define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/usuario/crearUsuario.html'
], function($, _, Backbone, SidebarView, login){

  var crearUsuario = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(crearUsuario);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return crearUsuario;
  
});
