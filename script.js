const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    if (!textInput.value) {
        alert('Please input a value');
    } else {
        updateResult(textInput.value);
    }
});

const checkPalindrome = (text) => {
    let textCopy = text.split('');
    textCopy = textCopy.reverse();
    textCopy = textCopy.join('');

    return text === textCopy;
};

const updateResult = (text) => {
    result.innerText = checkPalindrome(formatText(text))
        ? `${text} is a palindrome.`
        : `${text} is not a palindrome.`;
};

const formatText = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]/g, '');
};
