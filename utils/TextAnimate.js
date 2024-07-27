
const TextAnimate = (id) => {

    const element = document.getElementById(id);
    const text = element.innerText;
    let anim = '';
    let i = 0;

    const intervalId = setInterval(() => {
        if (i < text.length) {
            anim += text[i];
            element.innerText = anim;
            i++;
        } else {
            clearInterval(intervalId); // Stop the interval when all characters are displayed
        }
    }, 200);
}

export default TextAnimate;
