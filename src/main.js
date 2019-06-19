import p5 from 'p5'

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(width, height);
    p.pixelDensity(1);
    p.background(255);
    p.square(10, 10, 30);
    squareRecursion(p, 10, 10, width-20, count)
  }
}

let count = 7
let width = 600
let height = 600

function squareRecursion(p, x, y, size, n) {
	p.square(x, y, size);
	
	if (n > 0) {
		let hs = size/2;
		
		let p1 = p.map(n, 0, count, 1, 0);
		
		if (p.random(1) > p1) {
			squareRecursion(p, x, y, hs, n-1);
			squareRecursion(p, x+hs, y, hs, n-1);
			squareRecursion(p, x, y+hs, hs, n-1);
			squareRecursion(p, x+hs, y+hs, hs, n-1);
		}
		
	}
}

new p5(sketch, document.body)
