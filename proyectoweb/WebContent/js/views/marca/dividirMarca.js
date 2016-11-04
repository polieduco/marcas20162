define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/marca/dividirMarca.html'
], function($, _, Backbone, SidebarView, dividirMarca){

  var dividirMarcaView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(dividirMarca);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return dividirMarcaView;
  
});