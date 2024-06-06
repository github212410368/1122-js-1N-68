function showdemo(week) {
  const p = document.querySelector('.show-classdemo');
  console.log('p', p);
  switch (week) {
    case 'w1':
      p.innerHTML = `<iframe src="./demo/w01_dom_68/index.html" width="100%" height="100%" />`;
      break;
    case 'w2':
      p.innerHTML = `<iframe src="./demo/w02_tictactoe_68/tictactoe_68.html" width="100%" height="100%" />`;
      break;
    case 'w3-p1':
      p.innerHTML = `<iframe src="./demo/w03_basics_68/p1_68/index.html" width="100%" height="100%" />`;
      break;
    case 'w3-p2':
      p.innerHTML = `<iframe src="./demo/w03_basics_68/p2_68/index.html" width="100%" height="100%" />`;
      break;
    case 'w3-p3':
      p.innerHTML = `<iframe src="./demo/w03_basics_68/p3_68/index.html" width="100%" height="100%" />`;
      break;
    case 'w3-p4':
      p.innerHTML = `<iframe src="./demo/w03_basics_68/p4_68/index.html" width="100%" height="100%" />`;
      break;
    case 'w4-p4':
      p.innerHTML = `<iframe src="./demo/w04_basics_68/p4_68/p4_68.html" width="100%" height="100%" />`;
      break;
    case 'w4-p5':
      p.innerHTML = `<iframe src="./demo/w04_basics_68/p5_68/p5_68.html" width="100%" height="100%" />`;
      break;
    case 'w4-p6':
      p.innerHTML = `<iframe src="./demo/w04_basics_68/p6_68/p6_68.html" width="100%" height="100%" />`;
      break;
    case 'w5':
      p.innerHTML = `<iframe src="./demo/w05_menu_68/index.html" width="100%" height="100%" />`;
      break;
    case 'w09_mid21-p1_68':
      p.innerHTML = `<iframe src="./demo/w09_mid21_68/p1_68/p1_68.html" width="100%" height="100%" />`;
      break;
    case 'w09_mid21-p2_68':
      p.innerHTML = `<iframe src="./demo/w09_mid21_68/p2_68/p2_xx.html" width="100%" height="100%" />`;
      break;
    case 'w09_mid21-p3_68':
      p.innerHTML = `<iframe src="./demo/w09_mid21_68/p3_68/p3_xx.html" width="100%" height="100%" />`;
      break;
    case 'final':
      p.innerHTML = `<iframe src="../demo/final/index.html" width="100%" height="100%" />`;
      break;
  }
}
