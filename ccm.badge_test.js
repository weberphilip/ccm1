/** badge_test.js */
ccm.component( {
  name: 'badge_test',
  config:{
   style: [ ccm.load, 'https://rawgit.com/weberphilip/ccm1/master/badge.css' ], //css datei
   badge_name: "Zungenbrecher",            //Name des Badges, der unterhalb des Abzeichens angezeigt wird
   badge_beschreibung: "Herzlichen Glückwunsch! Du bist einer der Top 10, die 100% des Pflichtmaterials des Kurses bearbeitet hat!!!dfgdfgdfgdfgdfgdfdfdfdfgdf fgdfgdf dfgdfgdfgd ert retergdgdfgdf erterdfgd ertegdf",   //Beschreibung 
   badge_date: "05.08.2016 19:50:24",                                                                           // Zeitstempel des Empfangsdatums
   bild: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge_test.png"                           // Bild-Pfad
  
   }, 
  Instance: function () {
  	var self = this;
    this.render = function (callback) {
  	  var element = ccm.helper.element( self );
  	  element.html( '<div class = "badge">'+
  	  					'<img src ="'+self.bild+'" alt = "Bild: Badge" width = 100 height = 100>'+
  	  					'<span class ="badge_info">'+'<span>'+"Erhalten am:"+self.badge_date+'<br>'+                          //Nimm badge_date aus der config  
  	  														                   "Beschreibung: "+self.badge_beschreibung+'</span>'+'</span>'+		   //Nimm badge_beschreibung aus der config					
  	  					'<span class="badge_name">'+self.badge_name+'</span>'+         //Nimm badge_name aus der config
                '</div>'          
  	  				);	
  	  				
  	  				
  	
    };  
  }
} );


