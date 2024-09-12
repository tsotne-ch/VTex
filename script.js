document.querySelector('.form-control').addEventListener('input', (e) => {
    document.querySelector('.card-body').innerHTML = e.target.value.replace(/\n/g, '<br>\n');
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "mathdata"]);
    // var math = MathJax.Hub.getAllJax("mathdata")[0];
    // MathJax.Hub.Queue(["Text",math,e.target.value]);
})