'use strict';

var span = $('<span />').text('00').addClass('white');
var br = $('<br />');

var Container = (function() {
    var Container = function(DOMelement, drawers) {
        this.el = $(DOMelement);
        this.interval = 20;
        this.elements= [];
        this.drawers = [];
        this.holder = $('<div />');
        this.drawersCount = drawers || 0;
        this.timeout = false;
    };

    Container.prototype.setSize = function(x, y) {
        this.x = x;
        this.y = y;
    };

    Container.prototype.init =function(){
    	var i = 0, total = this.x*this.y, temp;
    	for(i=0; i<total; i+=1){
    		temp = span.clone();
    		this.elements.push(temp);
    		this.holder.append(temp);
    		if(i%this.x === 0){
    			this.holder.append(br.clone());
    		}
    	}
        this.el.append(this.holder);


        for(i = 0; i<this.drawersCount; i+=1){
            this.drawers.push(new Drawer(radnom(0, this.x), radnom(0, this.y)));
        }

    };

    Container.prototype.size = Container.prototype.setSize;

    Container.prototype.refreshDom = function(){
        var self = this;
        var node;
        self.drawers.forEach(function(drawer){

            if(drawer.x <=0 || drawer.y <=0 || drawer.x >=self.x || drawer.y>=self.y){
                drawer.randomlyChangePosition(self.x, self.y);
            }
            node = self.x * (drawer.y) + drawer.x;
            self.elements[node].attr('class', drawer.color);
           /* self.elements[node].css({
                'color': drawer.color,
                'background-color': drawer.color});
*/
            drawer.automate();
        });

    };

    Container.prototype.automate = function(arg) {
    	var period = this.interval;
        var self = this;
    	var iterate = function(){
    		self.refreshDom();
            if(arg == 'stop'){
                clearTimeout(self.timeout);
                return;
            } else {
    	   self.timeout = setTimeout(iterate, period);
    	}};
    	iterate();
    };
     Container.prototype.start = function(){
        this.automate();
        return 'started'
     };

     Container.prototype.stop = function(){
        this.automate('stop');
        return 'stopped'
     };

    return Container;
})();

var c = new Container('#container', 3);
c.size(160,80);
c.init();
c.automate()