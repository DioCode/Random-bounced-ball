let buttonchick = document.getElementById('buttonchick');
buttonchick.onclick = function () {
  console.log('hi')
  document.querySelector('svg').setAttribute('id', 'container');
  animation();
  let f = document.getElementById('pressF');
  f.style.display = "none";
}

window.onkeydown = function (event) {
  if (event.which == 70) {
    buttonchick.click()
  }
}

let animation = () => {

  let container = document.getElementById('container');
  let container2 = document.getElementById('container');

  let circle = document.getElementById('circle');
  circle.style.transition = '0.3s ease-out';

  let shuffle = (array) => array.sort(() => Math.random() - 0.5);

  let generateColor = () => {
    let hex = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
      shuffle(hex);
      color += hex[0];
    }
    return color;
  }

  let timer = setTimeout(function set() {
    circle.setAttribute('fill', `${generateColor()}`)

    container.animate([
      { top: 0 },
      { top: `${Math.floor(Math.random() * 101)}%` },
      { top: 0 }
    ],
      {
        duration: 2000,
        iterations: Infinity
      })

    timer = setTimeout(set, 2000);
  }, 2000);

  container2.animate([
    { left: '0%' },
    { left: '90%' },
    { left: '0%' }
  ],
    {
      duration: 8000,
      iterations: Infinity
    })
}