/** badge.js */
ccm.component( {
  name: 'badge',
  config:{
 
 //badge_image: [ ccm.load, 'http://www.fh-lsoopjava.de/ccm/img/dialogbox.png'  ]
   style: [ ccm.load, 'https://rawgit.com/weberphilip/ccm1/master/badge.css' ] 
   }, 
  Instance: function () {
  	var self = this;
  	var badge_image = "http://www.fh-lsoopjava.de/ccm/img/dialogbox.png";
  	 
    
    this.render = function (callback) {
  	  var element = ccm.helper.element( self );
  	  element.html( '<div class = "badge_img">'+ '<img src = "http://www.fh-lsoopjava.de/ccm/img/dialogbox.png" alt = "Bild: Badge" width = "128" height = "128">'+ '</div>'+
  	  				'<div class = "badge_name">'+"Schnelllerner"+'</div>');
  	
    };

/**    function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);

}  */
  
  }
} );



//'<div class = "badge_image">'+ show_image( 'http://www.fh-lsoopjava.de/ccm/img/dialogbox.png' , 100, 100, 'Bild: Badge')  +'</img>'