(function () {
  var dragDrop = {
      dropFallback: function(){
            var frameleft = document.getElementById('frame-left-1');
            var frameright = document.getElementById('frame-right-1');

                frameleft.addEventListener('click', function () {
                var contentleft = frameleft.innerHTML;
                if (contentleft == "" && frameright.classList.contains('selected')) {
                    frameleft.innerHTML = '<img src="resources/263.jpg" draggable="true" ondragstart="drag(event)" id="drag1" width="328" height="305">';
                    frameleft.classList.remove('selected');
                } else {
                    frameleft.innerHTML = '';
                    frameleft.classList.add('selected');
                }
            });

            frameright.addEventListener('click', function () {
                var contentright = frameright.innerHTML;
                if (contentright == "" && frameleft.classList.contains('selected')) {
                    frameright.innerHTML = '<img src="resources/263.jpg" draggable="true" ondragstart="drag(event)" id="drag1" width="328" height="305">';
                    frameright.classList.remove('selected');
                } else {
                    frameright.innerHTML = '';
                    frameright.classList.add('selected');
                }

            });
        
        },
  }
  dragDrop.dropFallback();
})();

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
