define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/marcatemplate/marca.html'
], function($, _, Backbone, editmarca){

  var MarcaView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="#pqrs"]').parent().addClass('active');
      this.$el.html(editmarca);
    }

  });

  return MarcaView;
  
});
