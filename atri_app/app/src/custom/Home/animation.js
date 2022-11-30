if (window){
    window.addEventListener('scroll',reveal);

    function reveal(){
        var reveals = document.querySelector(".Flex24")
        console.log("its working",reveals);
    }

setTimeout(()=>{reveal()},1000)}