function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = '';
    
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    const regex = /^pet_\d{4}[a-zA-Z]+$/;

    if (regex.test(input)) {
        result = 'Valid Syntax 🟢';
    } else {
        result = 'Invalid Syntax 🔴';
    }

            document.getElementById('result').innerText = result;
}


