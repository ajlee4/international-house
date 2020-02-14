"use strict";

$(function () {
  var Accordion = function Accordion(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    var links = this.el.find('.list-item__top') ;
    links.on('click', {
      
      el: this.el,
      multiple: this.multiple
    }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {

    e.preventDefault();
    var $el = e.data.el;
    var $this = $(this);
    var $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.list-item__bottom').not($next).slideUp().parent().removeClass('open');
    }
    ;
  };
  var accordion = new Accordion($('#accordion'), false);
  var headerAccordion = new Accordion($('#header-accordion'), false);
});




