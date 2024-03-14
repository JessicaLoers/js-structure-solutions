import Circle from './components/Circle/Circle.js';
import Square from './components/Square/Square.js';
import Pantagon from './components/Pentagon/Pentagon.js';

const root = document.getElementById('root');

const circleElement = Circle();
const suqareElement = Square();
const pentagonElement = Pantagon();

root.append(circleElement, suqareElement, pentagonElement);
