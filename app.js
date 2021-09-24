var target = document.querySelector('body');

var config = {
    attributes: true,
    childList: true,
    subtree:true
};


function changeAttrColor() {
    var elem = document.querySelector('.attr-example');
    var color = elem.getAttribute('data-text-color') === '#FF0000' ? '#8fce00' : '#FF0000';
    elem.setAttribute('data-text-color', color);
}

const callbackAttributeChange = function(mutations, mutationObs) {

    for (var i = 0, length = mutations.length; i < length; i++) {
        
        var mutation = mutations[i];
        
        if (mutation.attributeName === 'data-text-color') {
            console.log('Mutation if...');
            var target = mutation.target;

            console.log(target.getAttribute('data-text-color'));
            target.setAttribute("style", "color:" + target.getAttribute('data-text-color'));
        }
    }
}

var mutationObs = new MutationObserver(callbackAttributeChange);
mutationObs.observe(target, config);
