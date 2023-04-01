# Mastermindle
A browser colour combination guessing game  
Play Here: https://mastermindlegame.netlify.app/

## Table of Contents
* [About](#about)
* [Languages Used](#languages-used)
* [Features](#features)
* [Updates](#updates)

## About
Mastermindle is a browser puzzle game where the objective is to guess the randomly generated colour combination in the fewest number of tries using the given colour options. Every turn, the inputted guess is checked and a box below the guess shows the correctness of the input. A red dot means that one of the choices is the correct colour and in the right position. Every white dot means that one of the choices is correct but is not in the right position. There are no colour duplicates in the solution. 

## Languages Used
- HTML
- CSS
- JavaScript

## Features
- generates a random 4 colour combination upon refresh of the website
- checks for unfilled circles
- checks for guesses with duplicate colour selections

## Updates
- February 25th 2023 - Started project
- February 26th 2023 - Worked on the UI
    - coded the main program interface -> the gameboard, pieces, check button
- February 27th 2023 - Coded the main game components
    - checked the user input when 'check' button is pressed
    - gave the correctness of the user input with the box below the guess
    - showed solution if user inputs correct solution
- February 28th 2023 - Fixed UI issues to optimize game mechanics
    - changed colour of circles for greater visibility
    - changed colour of column based on which current column is active
- March 2nd 2023 - Made UI more responsive + info tab
    - made buttons respond to hover actions
    - made an info tab for the tutorial on how to play the game
    - refined game mechanics
- March 5th 2023 - Created the random generation of solutions upon refresh without duplicates
- March 6th 2023 - Fixed solution generation + added more pieces
    - fixed some problems with solution generation
    - added two more coloured pieces for increased difficulty 
- March 7th 2023 - Exception handling
    - prohibited empty and duplicate colour inputs 
- April 1st 2023 - Added ability to use number pad to select colours
