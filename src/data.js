export const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

export const operators = [
  {
    char: "/",
    value: "/"
  },
  {
    char: "x",
    value: "*"
  },
  {
    char: "-",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  },
  {
    char: "=",
    value: "="
  }
];

export const specials = ["C", "+/-", "%"];

export const cn = prop => {
  switch(prop) {
    case '1':
      return 'one'
      case '2':
      return 'two'
    case '3':
      return 'three'
    case '4':
      return 'four'
    case '5':
      return 'five'
    case '6':
      return 'six'
    case '7':
      return 'seven'
    case '8':
      return 'eight'
    case '9':
      return 'nine'
    case '.':
      return 'period'
    case '0':
      return 'zero'
    case '+/-':
      return 'other'
    case '%':
      return 'percent'
    case '=':
      return 'equals'
    case '/':
      return 'div'
    case 'x':
      return 'mult'
    case '+':
      return 'plus'
    case '-':
      return 'minus'
    default:
      return 'C'
  }
}
