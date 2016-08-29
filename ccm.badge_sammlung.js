/** badge_sammlung.js */
/** Diese Komponente befindet sich derzeit im Status eines ersten Prototyps*/
ccm.component( {
  name: 'badge_sammlung',
  config:{
   style: [ ccm.load, 'https://rawgit.com/weberphilip/ccm1/master/badge_sammlung.css' ], //css datei
   
   //Folgendes könnte auch in ein Dataset, dient nur als Prototyp: (Nummerrierung von links nach rechts, Nr.7 ist das erst Abzeichen in der zweiten Zeile)
                                      
   badge_name_1: "Fehlerfrei",            //Name des Badges, der unterhalb des Abzeichens angezeigt wird
   badge_beschreibung_1: "Quiz ohne Fehler im ersten Versuch bestanden",   //Beschreibung 
   badge_date_1: "23.05.2016 16:30:53",                                                                           // Zeitstempel des Empfangsdatums
   bild_1: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge5.png",                           // Bild-Pfad

   badge_name_2: "Quizmaster",           
   badge_beschreibung_2: "Du hast das Abzeichen 'Fehlerfrei' 3 mal erhalten und bekommst dadurch dieses Abzeichen!",   
   badge_date_2: "25.06.2016 17:10:28",                                                                          
   bild_2: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge4.png",                           

   badge_name_3: "Klausurzulassung",            
   badge_beschreibung_3: "Indem du bereits über 77 Punkte gesammelt hast, ist dir die Klausurzulassung zumindest sicher!",   
   badge_date_3: "27.06.2016 14:57:15",                                                                           
   bild_3: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge_test.png",                          

   badge_name_4: "Aus freien Stücken",            
   badge_beschreibung_4: "Sehr schön! Du hast bereits 50% des freiwilligen Materials bearbeitet",  
   badge_date_4: "05.08.2016 23:10:24",                                                                          
   bild_4: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge11.png",                           

   badge_name_5: "Cineast",           
   badge_beschreibung_5: "50% der Lernvideos angeschaut",   
   badge_date_5: "04.06.2016 11:10:44",                                                                          
   bild_5: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge10.png",                         

   badge_name_6: "Schnelllerner",            
   badge_beschreibung_6: "WOW! Du gehörst zu den ersten 10 Studierenden, die bereits 100% des Pflichtmaterials bearbeitet haben",  
   badge_date_6: "05.08.2016 19:52:03",                                                                         
   bild_6: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge1.PNG",                         

   badge_name_7: "Gut vorbereitet!",           
   badge_beschreibung_7: "Herzlichen Glückwunsch! Du hast 100% des Pflichtmaterials in diesem Kurs bearbeitet",   
   badge_date_7: "05.08.2016 11:52:01",                                                                          
   bild_7: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge3.png",                           

   badge_name_8: "Forumsbesucher",          
   badge_beschreibung_8: "Erstelle deinen ersten Beitrag im Forum",  
   badge_date_8: "-Noch nicht erhalten-",                                                                          
   bild_8: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge8_no_color.png", 

   badge_name_9: "Vielschreiber",           
   badge_beschreibung_9: "Tipp: Die soziale Interaktion ist wichtiger Bestandteil eines E-Learning Kurses!",   
   badge_date_9: "-Noch nicht erhalten-",                                                                          
   bild_9: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge7_no_color.png",

   badge_name_10: "Hello World!",            
   badge_beschreibung_10: "???",   
   badge_date_10: "-Noch nicht erhalten-",                                                                           
   bild_10: "https://raw.githubusercontent.com/weberphilip/ccm1/master/badge6_no_color.png",

   badge_name_11: "",           
   badge_beschreibung_11: "???",   
   badge_date_11: "-Noch nicht erhalten-",                                                                          
   bild_11: "https://raw.githubusercontent.com/weberphilip/ccm1/master/locked_no_color.png",

   badge_name_12: "",           
   badge_beschreibung_12: "???",   
   badge_date_12: "-Noch nicht erhalten-",                                                                         
   bild_12: "https://raw.githubusercontent.com/weberphilip/ccm1/master/locked_no_color.png",  
   }, 

  Instance: function () {
  	var self = this;
    this.render = function (callback) {
  	  var element = ccm.helper.element( self );
  	  element.html( '<div class = "badge">'+
  	  					'<img src ="'+self.bild_1+'" alt = "Bild: Badge" width = 100 height = 100>'+                             //Nimm src aus der config  
  	  					'<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_1+'<br>'+                          //Nimm badge_date aus der config  
  	  														                   "Beschreibung: "+self.badge_beschreibung_1+'</span>'+'</span>'+		 //Nimm badge_beschreibung aus der config					
  	  					'<span class="badge_name">'+self.badge_name_1+'</span>'+                                                 //Nimm badge_name aus der config
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_2+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_2+'<br>'+                          
                                                     "Beschreibung: "+self.badge_beschreibung_2+'</span>'+'</span>'+        
                '<span class="badge_name">'+self.badge_name_2+'</span>'+         
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_3+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_3+'<br>'+                          
                                                     "Beschreibung: "+self.badge_beschreibung_3+'</span>'+'</span>'+          
                '<span class="badge_name">'+self.badge_name_3+'</span>'+         
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_4+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_4+'<br>'+                          
                                                     "Beschreibung: "+self.badge_beschreibung_4+'</span>'+'</span>'+            
                '<span class="badge_name">'+self.badge_name_4+'</span>'+         
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_5+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_5+'<br>'+                         
                                                     "Beschreibung: "+self.badge_beschreibung_5+'</span>'+'</span>'+            
                '<span class="badge_name">'+self.badge_name_5+'</span>'+        
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_6+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_6+'<br>'+                         
                                                     "Beschreibung: "+self.badge_beschreibung_6+'</span>'+'</span>'+           
                '<span class="badge_name">'+self.badge_name_6+'</span>'+       
                '</div>'+ '<br>'+                                                                                                 //Beginn der zweiten Zeile                                                                          
                '<div class = "badge">'+                                                                        
                '<img src ="'+self.bild_7+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_7+'<br>'+                          
                                                     "Beschreibung: "+self.badge_beschreibung_7+'</span>'+'</span>'+            
                '<span class="badge_name">'+self.badge_name_7+'</span>'+        
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_8+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_8+'<br>'+                          
                                                     "Beschreibung: "+self.badge_beschreibung_8+'</span>'+'</span>'+            
                '<span class="badge_name">'+self.badge_name_8+'</span>'+         
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_9+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_9+'<br>'+                         
                                                     "Beschreibung: "+self.badge_beschreibung_9+'</span>'+'</span>'+         
                '<span class="badge_name">'+self.badge_name_9+'</span>'+        
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_10+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_10+'<br>'+                          
                                                     "Beschreibung: "+self.badge_beschreibung_10+'</span>'+'</span>'+               
                '<span class="badge_name">'+self.badge_name_10+'</span>'+        
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_11+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_11+'<br>'+                          
                                                     "Beschreibung: "+self.badge_beschreibung_11+'</span>'+'</span>'+           
                '<span class="badge_name">'+self.badge_name_11+'</span>'+        
                '</div>'+
                '<div class = "badge">'+
                '<img src ="'+self.bild_12+'" alt = "Bild: Badge" width = 100 height = 100>'+
                '<span class ="badge_info">'+'<span>'+"Erhalten am: "+self.badge_date_12+'<br>'+                          
                                                     "Beschreibung: "+self.badge_beschreibung_12+'</span>'+'</span>'+       
                '<span class="badge_name">'+self.badge_name_12+'</span>'+        
                '</div>'
  	  				);	
  	  				
  	  				
  	
    };
  
  }
} );

