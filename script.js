console.log("script is running")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if( document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';
    }
    else{
        document.querySelector('.cross').style.display='inline';
        setTimeout(()=>{
            document.querySelector('.ham').style.display='none';
        }, 350)
       // document.querySelector('.ham').style.display='none';
        
    }
})