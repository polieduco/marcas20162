define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/marca/editarMarca.html'
], function($, _, Backbone, SidebarView, editarMarca){

  var editarMarcaView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(editarMarca);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return editarMarcaView;
  
});