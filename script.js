function breakText(){
    var h1 = document.querySelector( "h1" );
    var h1Text = h1.textContent;
    var splittedh1Text = h1Text.split(""); // converts elem to array
    
    var halfTextindex = Math.floor(splittedh1Text.length/2);
    
    var clutter = "";
    splittedh1Text.forEach(function(elem,idx){
        if(idx < halfTextindex){
            clutter+=`<span class="firstHalf">${elem}</span>`
        }
        else{
            clutter+=`<span class="secondHalf">${elem}</span>`
        }
    
        h1.innerHTML = clutter;
        
    })
}

breakText();

// Gsap code -->
gsap.from(".firstHalf",{
    y:80,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.15
})
gsap.from(".secondHalf",{
    y:80,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: -0.15
})