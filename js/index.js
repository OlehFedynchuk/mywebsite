const modal = document.querySelector('.modal');
document.querySelector('.button_big').addEventListener('click', openModal);
document.querySelector('.close').addEventListener('click', closeModal);

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

window.addEventListener('click', function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
})

$('.form').find('input, textarea').on('keyup blur focus', function(e) {

  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    }
    else {
      label.addClass('active highlight');
    }
  }
  else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    }
    else {
      label.removeClass('highlight');
    }
  }
  else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    }
    else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }

});

var hellopreloader = document.getElementById("hellopreloader_preload");

function fadeOutnojquery(el) {
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function() {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05) {
      clearInterval(interhellopreloader);
      hellopreloader.style.display = "none";
    }
  }, 16);
}
window.onload = function() { setTimeout(function() { fadeOutnojquery(hellopreloader); }, 1000); };
