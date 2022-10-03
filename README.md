# ProjectCalculator

## Requirements
1. A deployed website (using GitHub Pages)
2. A public GitHub repository for your codebase
    1. A README.md with a short intro to the project
    2. At least 15 Git commits for the different stages in your development
3. Be responsive and built mobile-first, it should work on different screen widths
4. Accept a minimum of 2 inputs, perform an operation and show the output
5. DOES NOT USE THE eval() method (as this is extremely dangerous)
6. Code is highly readable (good naming and indented correctly)

## Overview
Build a calculator web app using HTML, SCSS, and JS.
The end goal here is to have a site which can accept inputs, do
some calculations and give you the correct output. Inputs will be
generated from users clicking on the calculator buttons.
Use the iPhone calculator shown here as a design, feel free to use
any other calculator design you can find on Dribbble, or make one
from scratch if you're feeling creative!

## Comments
I got some inspiration from tutorials on the Web, but took care not to copy everything but rather come up with my own design.
I chose to create a class for the calculator with properties and functions which control how the state changes. 
The event handlers are separated from the calculator logic, and I used dataset attribute to specify which button was clicked.
I decided to make numpad work for the input.
Layout is responsive and buttons light up when clicked.
I found it useful to draw a model of different states that calculator can have and move between.
