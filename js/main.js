  const emailabel = document.getElementById('emailabel')
    const emailabelRight = document.getElementById('emailabelRight')
    const passLabel = document.getElementById('passLabel')
    const passLabelRight = document.getElementById('passLabelRight')
    const eye = document.getElementById('eye')
    const eyeRight = document.getElementById('eyeRight')
    const eyebaz = document.getElementById('eyebaz')
    const eyebazRight = document.getElementById('eyebazRight')
    const show = document.querySelector('.show')
    const showRight = document.querySelector('.showRight')

    // اعتبارسنجی فرم ورود (سمت چپ)
    function myform() {
        let error = 0

        // reset
        emailabel.innerHTML = ''
        passLabel.innerHTML = ''
        // reset
        const _mail = document.forms['regForm']['email'].value
        const _pass = document.forms['regForm']['pass'].value

        ///////////////////mail////////////////
        if (
            _mail === '' ||
            _mail === null ||
            _mail.indexOf('<script>') >= 0 ||
            _mail.indexOf('<&lt;script>') >= 0
        ) {
            emailabel.innerHTML = 'Your email is incorrect'
            error++
            emailabel.style.color = 'red'
        } else {
            if (
                _mail.length < 10 ||
                _mail.search(/[@]/) == -1 ||
                (_mail.lastIndexOf('.')) > _mail.length - 3 ||
                (_mail.match(/@/g)).length != 1
            ) {
                emailabel.innerHTML = 'Your email is incorrect'
                error++
                emailabel.style.color = 'red'
            }
        }
        ///////////////////mail////////////////
        ////////////////pass//////////////////
        if (_pass == '') {
            passLabel.innerHTML = 'Your pass is incorrect'
            error++
            passLabel.style.color = 'red'
        } else {
            if (
                _pass.length < 7 ||
                _pass.search(/[A-Z]/i) == -1 ||
                _pass.search(/[0-9]/) == -1 ||
                _pass.search(/[@#$%^&*()_+]/) == -1
            ) {
                passLabel.innerHTML = 'Your pass is incorrect'
                error++
                passLabel.style.color = 'red'
            }
        }
        ////////////////pass//////////////////
        if (error != 0) {
            return false // جلوگیری از ارسال فرم
        }
    }

    // اعتبارسنجی فرم ثبت‌نام (سمت راست)
    function myformRight(e) {
        let error = 0

        // reset
        emailabelRight.innerHTML = ''
        passLabelRight.innerHTML = ''
        // reset
        const _mailRight = document.forms['regFormRight']['emailReg'].value
        const _passRight = document.forms['regFormRight']['passReg'].value

        // بررسی ایمیل
        if (
            _mailRight === '' ||
            _mailRight === null ||
            _mailRight.indexOf('<script>') >= 0 ||
            _mailRight.indexOf('<&lt;script>') >= 0
        ) {
            emailabelRight.innerText = "Your email is incorrect"
            error++
            emailabelRight.style.color = 'red'
        } else {
            if (
                _mailRight.length < 7 ||
                _mailRight.search(/[@]/) == -1 ||
                (_mailRight.match(/@/g)).length != 1 ||
                (_mailRight.lastIndexOf('.')) > _mailRight.length - 3
            ) {
                emailabelRight.innerText = "Your email is incorrect"
                error++
                emailabelRight.style.color = 'red'
            }
        }

        // بررسی پسورد
        if (_passRight == '') {
            passLabelRight.innerHTML = 'Your pass is incorrect'
            error++
            passLabelRight.style.color = 'red'
        } else {
            if (
                _passRight.length < 7 ||
                _passRight.search(/[A-Z]/i) == -1 ||
                _passRight.search(/[0-9]/) == -1 ||
                _passRight.search(/[@#$%^&*()_+]/) == -1
            ) {
                passLabelRight.innerHTML = 'Your pass is incorrect'
                error++
                passLabelRight.style.color = 'red'
            }
        }

        if (error != 0) {
            e.preventDefault() // جلوگیری از ارسال فرم
        }
    }

    // ////////eye icon//////////////
    let num = 1
    show.addEventListener('click', () => {
        const passwordInput = document.querySelector('[name="pass"]')

        if (num % 2) {
            passwordInput.setAttribute('type', 'text')
            eye.style.display = 'none'
            eyebaz.style.display = 'block'
        } else {
            passwordInput.setAttribute('type', 'password')
            eye.style.display = 'block'
            eyebaz.style.display = 'none'
        }
        num++
    })

    // ////////eye icon//////////////
    // right form
    let num2 = 1
    showRight.addEventListener('click', () => {
        const passwordInputRight = document.querySelector('[name="passReg"]')

        if (num2 % 2) {
            passwordInputRight.setAttribute('type', 'text')
            eyeRight.style.display = 'none'
            eyebazRight.style.display = 'block'
        } else {
            passwordInputRight.setAttribute('type', 'password')
            eyeRight.style.display = 'block'
            eyebazRight.style.display = 'none'
        }
        num2++
    })


    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const passRight = document.querySelector('.passRight')

    function randomchar(str) {
        const index = Math.floor(Math.random() * str.length);
        return str[index]

    }
    console.log(randomchar(lowerCase));
    console.log(randomchar(numbers));

    let password = '';
    for (let i = 0; i < 12; i++) {
        let char;

        if (i % 4 === 0) {
            char = randomchar(lowerCase)
        } else if (i % 4 === 1) {
            char = randomchar(upperCase)
        } else if (i % 4 === 2) {
            char = randomchar(numbers)
        } else {
            char = randomchar(symbols)
        }

        password = password + char
    }
    console.log(password);
    passRight.value = password;


    // random pass

    // after/////////////////
    const after = document.querySelector('.after')
    const afterBox = document.querySelector('.after-box')
    const afterBtn = document.querySelector('.btn')
    const afterH = document.querySelector('.afterH')
    const afterP = document.querySelector('.afterP')

    btnclick = 1
    afterBtn.addEventListener('click', () => {
        if (btnclick % 2) {
            after.style.left = '50%'
            setTimeout(() => {
                afterH.innerText = 'Welcome Back!'
                afterP.innerText = 'Provide your personal details to use all features'
                afterBtn.innerText = 'SIGN IN'
            }, 2000);

            after.style.borderTopRightRadius = '0';
            after.style.borderBottomRightRadius = '0';

            after.style.borderTopLeftRadius = '20%';
            after.style.borderBottomLeftRadius = '20%';
        } else {
            setTimeout(() => {
                afterH.innerText = 'Hello'
                afterP.innerText = 'Register to use all feature in our site'
                afterBtn.innerText = 'SIGN UP'
            }, 2000);
            after.style.left = '0'
            after.style.borderTopRightRadius = '20%';
            after.style.borderBottomRightRadius = '20%';

            after.style.borderTopLeftRadius = '0';
            after.style.borderBottomLeftRadius = '0';
        }
        btnclick++
    })

    // after/////////////////

    //pass input color


    const passLeft = document.querySelector('.passLeft')
    passLeft.addEventListener('input', (e) => {
        let chance = 0
        let temp = e.target.value
         if(temp.search(/[A-Z]/) >= 0)  chance++
         if(temp.search(/[a-z]/) >=0)  chance++
        if(temp.search(/[0-9]/) >=0 ) chance++
        if(temp.search(/[!@#$%^&*()_\+\-\=\[\]\{\}|;:,.<>?]/) >= 0) chance++  
        if(temp.length >= 8) chance++   
        

        // passLeft.style.width = chance*20 + '%'
        
        if(chance == 1) passLeft.style.background = 'red'
        if(chance == 2) passLeft.style.background = 'orange'
        if(chance == 3) passLeft.style.background = 'yellow'
        if(chance == 4) passLeft.style.background = 'blue'
        if(chance == 5) passLeft.style.background = 'green'
    })


    //pass input color
