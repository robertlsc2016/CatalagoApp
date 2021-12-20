const menuDireito = document.getElementById("right-menu")
const opAbrir = document.getElementById("menu-abrir")
const verCarrinhoBody = document.getElementById("ver-carrinho")

// ABRIR MENU
$("#menu-abrir").click(function () {

    menuDireito.style.display = "flex"
    verCarrinhoBody.style.display = 'none'
    document.getElementsByTagName("html")[0].style.scrollBehavior = "auto"
    
    $("html").css({"overflow":"hidden"});


});



// FECHAR MENU
menuDireito.addEventListener('click', (e) => {
    if(e.target.id == "right-menu") {
        menuDireito.style.display = 'none'
        verCarrinhoBody.style.display = "flex"
        document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth"

        $("html").css({"overflow":"auto"});



    }
})
