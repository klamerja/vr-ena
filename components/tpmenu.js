AFRAME.registerComponent('tpmenu', {
    schema: { type: 'string' },

    init: function () {
        let data = this.data;
        let el = this.el;

        el.addEventListener("gripdown", function() {
        })

        el.addEventListener("gripup", function() {
        })
    }
})