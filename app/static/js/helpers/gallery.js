$(document).ready(function(){
    $('.sertificat-info__image').magnificPopup({
        type: 'image',
        delegate: 'a',
        zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
        },
    })

    $('.gallery-slider').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery : {
            enabled: true,
            tCounter:'',
        },
        zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
        },
        
    })
})