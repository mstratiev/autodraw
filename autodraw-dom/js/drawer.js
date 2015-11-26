'use strict';

var radnom = function(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
};

var COLORS = [
'#fff',
'#ddd',
'#000',
'#666',
'#111',
'#222',
'#333',
'#444',
'#555',
'#666',
'#777',
'#888',
'#999',
'#aaa',
'#bbb',
'#ccc',
'#007eff',
'#008aff',
'#0082e6',
'#0073c3'
];



var Drawer = (function() {

    var Drawer = function(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx || radnom(-1, 1);
        this.dy = dy || radnom(-1, 1);
        this.color = 'black';
        this.randomness = 20;
        this.style = 'css';
        return this;
    };

    Drawer.prototype.move = function() {
        this.x += this.dx;
        this.y += this.dy;
    };

    Drawer.prototype.changeDirection = function(dx, dy) {
        if (!!dx || dx === 0) {
            this.dx = dx;
        }
        if (!!dy || dy === 0) {
            this.dy = dy;
        }
    };

    Drawer.prototype.randomlyChangeDir = function() {
        switch (radnom(0, this.randomness)) {
            case 0:
                this.dx = 0;
                break;
            case 1:
                this.dx = 1;
                break;
            case 2:
                this.dx = -1;
                break;
        };
        switch (radnom(0, this.randomness)) {
            case 0:
                this.dy = -1;
                break;
            case 1:
                this.dy = 1;
                break;
            case 2:
                this.dy = 0;
                break;
        }
    };

    Drawer.prototype.changeColor = function(color) {
        this.color = color;
    };

    Drawer.prototype.randomlyChangeColorClass = function() {
        switch (radnom(0, this.randomness)) {
            case 0:
                this.color = 'gray';
                break;
            case 1:
                this.color = 'lightgray';
                break;
            case 2:
                this.color = 'black';
                break;
            case 3:
                this.color = 'blue';
                break;
            case 4:
                this.color = 'lightblue';
                break;
        }
    };

    Drawer.prototype.randomlyChangeColorProp = function() {
        switch (radnom(0, this.randomness)) {
            case 0:
            case 1:
                this.color = COLORS[radnom(0, 20)];
                break;
        }
    };

    Drawer.prototype.automate = function() {
        this.move();
        if (this.style === 'css') {
            this.randomlyChangeColorClass();
        } else if (this.style === 'prop') {
            this.randomlyChangeColorProp();
        }
        this.randomlyChangeDir();
    };

    Drawer.prototype.randomlyChangePosition = function(maxX, maxY) {
        this.x = radnom(1, maxX - 1);
        this.y = radnom(1, maxY - 1);
    }


    return Drawer;
})();
