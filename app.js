let char=["ABCDEFGHIJKLMNOPQRTSUVWXYZ","abcdefghijklmnopqrstuvwxyz","1234567890","~/*+-\|?><:''!@#$%^&*()_"]



let btn=document.querySelector('button');
let allcheckedElement=document.querySelectorAll('.logic .checked')
let checkedBox
let Index
let inputLength=document.querySelector('#length')
btn.addEventListener('click',()=>{
    let finalchar=''
    allcheckedElement.forEach((checkedBox,Index)=>{
        if(checkedBox.checked){
            finalchar=finalchar+char[Index]
        }
    });

    let finalpassword=''
    for(let i=0;i<inputLength.value;i++){
        let indexnumber=Math.floor(Math.random()*finalchar.length)
        finalpassword=finalpassword+finalchar[indexnumber]
    }
    let result=document.querySelector('.input-box #text')
    result.value=finalpassword;
});