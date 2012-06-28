/*
Animation Fill mode can make the use of CSS Animations much easier, but it didn’t come about at the same time as CSS Animations itself. 

See spec:
http://dev.w3.org/csswg/css3-animations/#animation-fill-mode-property
*/

Modernizr.addTest("animationfillmode",function(){
    return Modernizr.testAllProps("animationFillMode");
});