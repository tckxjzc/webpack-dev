import icon from "../static/favicon.ico";

if (DEVELOPMENT) {
    console.log(`start----{dev:${DEVELOPMENT}}`);
}

function p1() {
    return new Promise(function (resolve) {
        setTimeout(()=>{
            resolve('p1')
        },2000)
    })
}
function p2() {
    return new Promise(function (resolve) {
        setTimeout(()=>{
            resolve('p2')
        },2000)
    })
}
async function fn() {
    const a1=await p1();
    console.log(a1);
    const a2=await p2();
    console.log(a2);
}
const img=document.createElement('img');
img.src=icon;
document.body.append(img);
console.log('--0-9')
fn();