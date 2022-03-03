let a = "secret code";

let auth = null;

if (auth){
    console.dir(document.body.innerHTML = a)
    console.log("your secret code is: " + a);
} else {
    console.dir(document.body.innerHTML = "public")
    console.log("sry");
}