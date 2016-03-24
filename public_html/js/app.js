(function () {
    var dragDrop = {
        item: null,
        itemId: null,
        itemClick: function (item) {

            item.addEventListener('click', function () {
                if (dragDrop.item == null) {
                    item.parentNode.removeChild(item);
                    dragDrop.item = '<img src="'+item.src+'" draggable="true" ondragstart="drag(event)" class="dragitem" id="'+item.id+'" width="328" height="305">';
                    dragDrop.itemId = item.id;
                }
            });

        },
        
        frameClick: function(frame){
            
            frame.addEventListener('click', function(event){
                if (frame !== event.target) {
                    return;
                }
                if(dragDrop.item != null){
                    frame.innerHTML += dragDrop.item;
                    dragDrop.itemClick(document.getElementById(dragDrop.itemId));
                    dragDrop.item = null;
                    dragDrop.itemId = null;
                }
            }, false);
        }
        
    }

    var items = document.querySelectorAll(".dragitem")

    for(i = 0; i < items.length; i++){
        dragDrop.itemClick(items[i]);
    }
    
    var frames = document.querySelectorAll("section");    
    
    for(i = 0; i < frames.length; i++){
        dragDrop.frameClick(frames[i]);
    }
    
})();

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var parent = document.getElementById(ev.target.id).parentNode;
    parent.classList.add('selected');
    
    console.log(parent);    
    if (parent.id == 'right') {
        document.getElementById('left').classList.add('target');
    }
    if (parent.id == 'left') {
        document.getElementById('right').classList.add('target');
    }
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    var parent = document.getElementById(ev.target.id);
    parent.classList.remove('target');

    if(parent.id == 'right'){
        document.getElementById('left').classList.remove('selected');
    }
    if(parent.id == 'left'){
        document.getElementById('right').classList.remove('selected');
    }
}

