window.onload = function() {
    console.log('here')
    console.log(localStorage.getItem("page_stylesheet_num"))
    if(localStorage.getItem("page_stylesheet_num") === "2") {
        let src = document.getElementById('style').href
        let second_style = src.slice(0, -5) + "2" + src.slice(-4)
        document.getElementById('style').href = second_style
        console.log('second')
    }
}

function changeTheme() {
    let src = document.getElementById('style').href
    let style = src.slice(-5,-4)
    
    if(localStorage.getItem("page_stylesheet_num") === "2") {
        let first_style = src.slice(0, -5) + "1" + src.slice(-4)
        document.getElementById('style').href = first_style
        localStorage.setItem("page_stylesheet_num", "1")
    }
    else {
        let second_style = src.slice(0, -5) + "2" + src.slice(-4)
        document.getElementById('style').href = second_style
        localStorage.setItem("page_stylesheet_num", "2");
    }
}