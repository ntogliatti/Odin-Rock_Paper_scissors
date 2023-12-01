1. make sure getComputerChoice to run 
2. write a function that plays one game of rock paper scissors against the computer, then return a string stating the outcome.
2.1 create a function for the player. use prompt to ask player what they select, make sure it isn't case-sensitive.
2.2 send choice to cpu function
3. create function for computer
3.1 same process as player function, but uses the "getComputerChoice funtion instead of player input.
4. create a playRound function that can determine the winner
4.1 using the '&' attribute, create an 'if' statement that assesses all the potential outcomes.
4.2 ex. if computer is 'rock' and player is 'scissors' print "you lose rock beats scissors."
4.3 do this for all possible outcomes, end with 'else if' print "draw"
4.4 find a way to simplify the outcomes
5. make sure to return the results not console.log them
6. write function called 'game' that will use a loop to play a game of 5 rounds.
6.1 don't have to use loops, can just call the playRound function 5 times
6.2 make sure to use console.log at this point
6.3 take the return value of each round and assign it to a 'player' and 'CPU' counter.
6.4 maybe try to keep a count without printing any text first, then add text in when that is working
