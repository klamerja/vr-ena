AFRAME.registerComponent('tpmenu', {
    schema: { type: 'string' },

    init: function () {
        let data = this.data;
        let el = this.el;
        console.log(el.childNodes)
    }
})

AFRAME.registerComponent('tp', {
    schema: { type: 'string' },

    init: function () {
        this.el.addEventListener('gripChanged', ()=>{
            let secondCameraEl = document.querySelector('#secondCamera');
            secondCameraEl.setAttribute('camera', 'active', 'true');
        });
    }
})