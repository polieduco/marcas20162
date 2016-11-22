define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/marcatemplate/plantillaAnadirMarca.html'
], function($, _, Backbone, editapprovequestion){

  var ApproveQView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#pqrs"]').parent().addClass('active');
      this.$el.html(editapprovequestion);
    }

  });

  return ApproveQView;
  
});

