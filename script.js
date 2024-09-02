// script.js


let currentStepNum = 0;
        const steps = document.querySelectorAll('.form-step');

        function nextStep() {
            steps[currentStepNum].classList.remove('active');
            currentStepNum += 1;
            if (currentStepNum < steps.length) {
                steps[currentStepNum].classList.add('active');
            }else steps[currentStepNum].classList.add('active')
        }
        
        document.getElementById('multiStepForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted!');
        });