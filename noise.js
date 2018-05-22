
const player = function player(target){
  $(target).each( function() {
    this.pause();
    this.currentTime = 0
    this.play();
  });
}

$(document).ready( function() {

  $('.instrument').on('click','button',function(event){
    let button = event.target.classList[1];
    let target = `#${button}Audio`;

    player(target);
  });


  $('body').keydown(function(event){
    let note = event.key.toLowerCase();
    let allowed = ['a','b','c','d','e', 'f','g'];

    if (allowed.includes(note)) {

      let target = `#${note}Audio`;
      $(`.${note}`).addClass('active');

      player(target);

      setTimeout(function(){ $(`.${note}`).removeClass('active'); }, 150);
    }

  });

});
