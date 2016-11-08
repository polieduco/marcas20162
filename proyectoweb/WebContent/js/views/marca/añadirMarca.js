define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/marca/Marca.html'
], function($, _, Backbone, SidebarView, Marca){

  var AñadirMarcaView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(ListadoMarcas);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return MarcaView;
  
});