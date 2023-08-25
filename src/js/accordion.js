const accSettings = {
   speed: 300, // Animation speed
   oneOpen: true, // Close all other accordion items if true
   offsetAnchor: false, // Activate scroll to top for active item
   offsetFromTop: 180, // In pixels – Scroll to top at what distance
   scrollTopDelay: 400, // In Milliseconds – Delay before scroll to top

   classes: {
      accordion: "js-accordion",
      header: "js-accordion-header",
      item: "js-accordion-item",
      body: "js-accordion-body",
      icon: "js-accordion-icon",
      active: "active"
   }
};

const prefix = accSettings.classes;

const accordion = (function () {
   const accordionElem = $(`.${prefix.accordion}`);
   const accordionHeader = accordionElem.find(`.${prefix.header}`);
   const accordionItem = $(`.${prefix.item}`);
   const accordionBody = $(`.${prefix.body}`);
   const accordionIcon = $(`.${prefix.icon}`);
   const activeClass = prefix.active;

   return {
      // pass configurable object literal
      init: function (settings) {
         accordionHeader.on("click", function () {
            accordion.toggle($(this));
            if (accSettings.offsetAnchor) {
               setTimeout(() => {
                  $("html").animate(
                     {
                        scrollTop:
                           $(this).offset().top - accSettings.offsetFromTop
                     },
                     accSettings.speed
                  );
               }, accSettings.scrollTopDelay);
            }
         });

         $.extend(accSettings, settings);

         // ensure only one accordion is active if oneOpen is true
         if (
            settings.oneOpen &&
            $(`.${prefix.item}.${activeClass}`).length > 1
         ) {
            $(`.${prefix.item}.${activeClass}:not(:first)`)
               .removeClass(activeClass)
               .find(`.${prefix.header} > .${prefix.icon}`)
               .removeClass(activeClass);
         }
         // reveal the active accordion bodies
         $(`.${prefix.item}.${activeClass}`).find(`> .${prefix.body}`).show();
      },

      toggle: function ($this) {
         if (
            accSettings.oneOpen &&
            $this[0] !=
               $this
                  .closest(accordionElem)
                  .find(
                     `> .${prefix.item}.${activeClass} > .${prefix.header}`
                  )[0]
         ) {
            $this
               .closest(accordionElem)
               .find(`> .${prefix.item}`)
               .removeClass(activeClass)
               .find(accordionBody)
               .slideUp(accSettings.speed);
            $this
               .closest(accordionElem)
               .find(`> .${prefix.item}`)
               .find(`> .${prefix.header} > .${prefix.icon}`)
               .removeClass(activeClass);
         }

         // show/hide the clicked accordion item
         $this
            .closest(accordionItem)
            .toggleClass(`${activeClass}`)
            .find(`> .${prefix.header} > .${prefix.icon}`)
            .toggleClass(activeClass);
         $this.next().stop().slideToggle(accSettings.speed);
      }
   };
})();

$.when($.ready).then(function () {
   accordion.init(accSettings);
});