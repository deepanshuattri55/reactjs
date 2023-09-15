# reactjs 
not completed!!
Frontend Development Assessment 

Game Concept:
A Tetris-style game where blocks containing words from the statement fall from the top of the screen. Players must arrange these blocks at the bottom to form phrases from the statement.

Objective:
Form the following phrases by arranging the falling blocks:
"We design and develop applications"
"that run the world and"
"showcase the future"
Gameplay Mechanics:
Each block contains a word from the statement.
The blocks can be moved horizontally.
As soon as a phrase is correctly formed, those blocks disappear, and the player earns points.
Scoring:
Scoring is based on forming the phrases and the total number of phrases formed before the blocks reach the top of the screen. The quicker and more efficiently a player forms the phrases, the higher their score.

End Game:
Just like traditional Tetris, the game ends when the blocks pile up and reach the top of the screen. The game tracks high scores and fastest times.


Visual Guide:
Web-based game compatible with both desktop and mobile browsers. The interface should be clean and simple, ensuring the application work well for all device type . The Playing board would need to be wide to accommodate 3 words or more words.




Development Requirements:
An interface for the game field, scoring, and upcoming blocks with responsive screens  (Desktop,iPad, Mobile).
A system to generate and drop blocks containing words at a consistent and increasing speed.
A collision detection system to identify when blocks have landed and when phrases are formed.
A scoring system to calculate scores based on speed and efficiency.

Further Explanation
In "Purpose Blocks", the player forms phrases by arranging the word blocks. Each time a player successfully forms a phrase from the statement, it counts as one formed phrase, and the player earns points.
The total number of phrases formed refers to how many complete, correct phrases from the statement a player has put together during a single game session. For example, if a player forms "We design and develop applications" twice and "that runs the world and" once before the blocks reach the top of the screen (i.e., before the game ends), the total number of phrases formed would be three.
The score in the game increases based on the speed at which these phrases are formed and the total number of correct phrases formed in a game. So, the more phrases a player forms during a game, the higher their score.


Sample Playthrough
First Blocks: The game field appears, empty at first. The first blocks begin to fall from the top of the screen. Each block contains a word from the statement. The player sees blocks with the words "We", "Design", and "develop", “applications”.
Formation of Phrase 1: The player manoeuvres the blocks, arranging them at the bottom of the screen to form the phrase "We design and develop applications". Upon correctly arranging the phrase, these blocks disappear, and the player's score increases.
Continued Gameplay: More blocks fall. The player continues to move them, trying to form the next phrase. The blocks contain words like "that", "runs", "the", "world", and “and”.
Formation of Phrase 2: The player successfully arranges the blocks to form "that runs the world and". These blocks also disappear, adding to the player's score.
Increasing Difficulty: As the game progresses, the blocks start falling faster, increasing the game's difficulty. The player continues to arrange blocks, now containing the words "Showcase", "the", "future".
Formation of Phrase 3: The player manages to form the final phrase "showcase the future". The player's score increases again.
Game Continuation: The game repeats the set of phrases to be formed. The blocks fall faster than before, making it a challenge to keep up. The player manages to form a few more phrases.
End Game: Eventually, the blocks start to pile up reaching the top of the screen or max game time of 5 mins. The game ends, and the final score is displayed, which is the total points earned based on the speed of forming the phrases and the total number of phrases formed.
