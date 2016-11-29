define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/marca/registroEmpresa.html'
], function($, _, Backbone, SidebarView, registroEmpresa){

  var registroEmpresaView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(registroEmpresa);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return registroEmpresaView;
  
});