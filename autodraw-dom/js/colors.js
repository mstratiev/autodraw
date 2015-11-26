function createClass(name, rules) {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if (!(style.sheet || {}).insertRule) {
        (style.styleSheet || style.sheet).addRule(name, rules);
    } else {
        style.sheet.insertRule(name + "{" + rules + "}", 0);
    }
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

var initColorClasses = function(colors) {
    var rule;
    colors.forEach(function(color) {
        rule = 'color: ' + color + '; background-color: ' + color;
        createClass(color, rule);
    });
};
