'use strict'

{

const $ = q => document.querySelector(q)
//const $$ = q => Array.from(document.querySelectorAll(q))

const switchSections = () =>{
    
    $('#chevron').onclick = () => window.location.href='#description';
    
    $('#chevron1').onclick= () => window.location.href='#bateson';
    
    $('#chevron2').onclick = () => window.location.href='#purpose_title';
    
    $('#chevron3').onclick = () => window.location.href='#reconfigure';

}
switchSections();

}
