define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/login/login.html'
], function($, _, Backbone, SidebarView, login){

  var login = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#"]').parent().addClass('active');
      this.$el.html(login);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return login;
  
});
