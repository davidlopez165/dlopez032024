let selStylesheet=document.querySelector('#selstylesheet');
let styleLink=document.querySelector('#stylelink');
let mainImage=document.querySelector('#mainimage');
let headerQuote=document.querySelector('#quote');




function updateStylesheet() {


        styleLink.href=selStylesheet.value;
        // changeSong();
        localStorage.setItem('selectedStylesheet19448', selStylesheet.value);
        // alert(selStylesheet.value)


        // Change blockquote
        changeElements();

}


window.addEventListener('load', function () {
        let savedStylesheet;
        savedStylesheet=localStorage.getItem('selectedStylesheet19448');

        /*** && Update for changed stylesheet names */
        if (savedStylesheet !==null && savedStylesheet.value == styleLink.attributes.href.value) {

            styleLink.href=savedStylesheet;
            selStylesheet.value=savedStylesheet;
            
        }


    });

    function changeElements()
    {
        //alert();
        let currentStylesheet = styleLink.attributes.href.value; 

        //alert(currentStylesheet);



        if(currentStylesheet == "redtheme.css")
            {
                mainImage.src = "Images/redsquare.png";
                headerQuote.innerHTML ="<h1>hello</h1>";
            }

                    if(currentStylesheet == "greentheme.css")
            {
                mainImage.src = "Images/greensquare.png";
                headerQuote.innerHTML ="<h1>bye bye</h1>";
            }
    }


