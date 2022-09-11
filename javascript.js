function changeTheme() {
    let src = document.getElementById('style').href
    let style = src.slice(-5,-4)
    if(style === "1") {
        document.getElementById('style').href = src.slice(0, -5) + "2" + src.slice(-4)
        console.log(src.slice(0, -5) + "2" + src.slice(-6))
    }
    else if(style === "2") {
        document.getElementById('style').href = src.slice(0, -5) + "1" + src.slice(-4)
        console.log(src.slice(0, -5) + "1" + src.slice(-6))
    }
}