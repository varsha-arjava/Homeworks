let random_number = Math.floor(Math.random() * 30);
let secret_num = random_number;
let score = 20;
let high_score = 0;

document.querySelector('.check').addEventListener('click', function () {
        let userInput = (document.querySelector('.guess').value)
        if (!userInput) {
                alert("pleace enter your guess");
                document.querySelector('.message').textContent = 'Enter the input';
        } else if (userInput == secret_num) {
                document.querySelector('.message').textContent = 'Correct number';
                document.querySelector('body').style.backgroundColor = 'green';
                document.querySelector('.number').textContent = secret_num;

                if (score > high_score) {
                        high_score = score;
                        document.querySelector('.highscore').textContent = high_score;
                }
        } else if (userInput > secret_num) {
                if (score == 0) {
                        document.querySelector('.message').textContent = 'game over'
                        document.querySelector('.number').textContent = secret_num;
                        document.querySelector('body').style.backgroundColor = 'red';
                        document.querySelector('.check').style.display = 'none';
                        
                } else {
                        document.querySelector('.message').textContent = 'Too high'
                        score--;
                        document.querySelector('.score').textContent = score;

                }
        } else {
                if (score == 0) {
                        document.querySelector('.message').textContent = 'game over'
                        document.querySelector('.number').textContent = secret_num;
                        document.querySelector('body').style.backgroundColor = 'red';
                        document.querySelector('.check').style.display = 'none';
                } else {
                        document.querySelector('.message').textContent = 'Too low'
                        score--;
                        document.querySelector('.score').textContent = score;
                }
        }



})

let btnClickFunction = () => {

        document.getElementById('userInput').value = null
        document.getElementById('highscore').textContent = high_score;
        score = 20;
        document.getElementById('score').textContent = score;
        document.getElementById('check').textContent = "Start guessing...";
        document.querySelector('body').style.backgroundColor = '#222';
        document.getElementById('number').textContent = "?";
        random_number = Math.floor(Math.random() * 20);
        secret_num = random_number;
}


document.getElementById('againBtn').addEventListener('click', btnClickFunction)
