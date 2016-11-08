define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/marca/ListadoMarcas.html'
], function($, _, Backbone, SidebarView, ListadoMarcas){

  var ListadoMarcasView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(ListadoMarcas);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return ListadoMarcasView;
  
});