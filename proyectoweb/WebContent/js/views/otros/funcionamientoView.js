define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/otros/funcionamiento.html'
], function($, _, Backbone, SidebarView, funcionamiento){

  var funcionamientoView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(funcionamiento);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return funcionamientoView;
  
});