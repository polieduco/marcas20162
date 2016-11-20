// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/projects/ProjectsView',
  'views/contributors/ContributorsView',
  'views/footer/FooterView',
  'views/usuario/eliminarUsuarioView',
  'views/otros/funcionamientoView',
  'views/otros/generarSoporteView'
  'views/marca/añadirMarcaView',
  'views/marca/listarMarcaView',
  'views/marca/marcaView',
  'views/otros/contactoAyudaView',
], function($, _, Backbone, HomeView, ProjectsView, ContributorsView, FooterView, eliminarUsuarioView, funcionamientoView, generarSoporteView
        añadirMarcaView,listarMarcaView,marcaView,contactoAyudaView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showContributors',
      'otros': 'showFuncionamiento',
      'otros': 'showGenerarSoporte',
      'usuario': 'showEliminarUsuario',
      'añadirMarca': 'showAñadirMarca',
      'Listarmarca': 'showListarMarca',
      'contactoayuda':'showContactoAyuda',
      'marca':'showMarca',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showProjects', function(){
   
        // Call render on the module we loaded in via the dependency array
        var projectsView = new ProjectsView();
        projectsView.render();

    });

    app_router.on('route:showContributors', function () {
    	
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var contributorsView = new ContributorsView();
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    app_router.on('route:showFuncionamiento', function(){
    	   
        var funcionamientoView = new funcionamientoView();
        funcionamientoView.render();

    });

    app_router.on('route:showEliminar_usuario', function(){
 	   
        var eliminar_usuarioView = new eliminarUsuarioView();
        eliminar_usuarioView.render();

    });
    
    app_router.on('route:showGenerar_soporte', function(){
  	   
        var generar_soporteView = new generarSoporteView();
        generar_soporteView.render();

    });

        app_router.on('route:showMarca', function(){
       
        var marcaView = new marcaView();
        marcaView.render();

    });

        app_router.on('route:showListar_Marca', function(){
       
        var listado_MarcaView = new listarMarcaView();
        listado_MarcaView.render();

    });   

        app_router.on('route:showAñadir_Marca', function(){
       
        var añadir_MarcaView = new añadirMarcaView();
        añadir_MarcaView.render();

    });

        app_router.on('route:showContacto_Ayuda', function(){
       
        var contacto_AyudaView = new contactoAyudaView();
        contacto_AyudaView.render();

    });       
    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var footerView = new FooterView();
    var eliminarUsuarioView = new eliminarUsuarioView();
    var funcionamientoView = new funcionamientoView();
    var generarSopoteView = new generarSoporteView();
                        
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
