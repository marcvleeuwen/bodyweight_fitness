# Bodyweight fitness
This is PWA (Progressive Web App) that will allow the user to follow the fitness programs outlined in [r/bodyweightfitness](https://www.reddit.com/r/bodyweightfitness/wiki/index).
This is a free to use service. I don't take any credit for the information displayed on this website, all credit goes to the creators.

This is an opensource project and all contributions are welcome.

## Website Contents
1.  Beginner to Intermediate
    1.  The Recommended Routine
    2.  Move
    3.  The Minimalist Routine
    4.  Skill Day Routine
2.  Intermediate to Advanced
    1.  Antranik's Push/Pull/Legs Split
    2.  SM's Bodyweight P/P/L
    3.  Texas method for Bodyweight
    4.  Smolov Jr for Chins and Dips
    5.  Basic Hypertophy routine 
    6.  Jokester's Bodyweight Plus
    7.  Jokester's Bodyweight PPL
3. Diet
    1. [faq - Diet detials](https://www.reddit.com/r/Fitness/wiki/faq#wiki_diet_details)
4. 

## Tech stack
1.  Angular
    1.  cli
    2.  material
    3.  PWA
2.  Database
    1.  firebase - authentication
    2.  MySQL - data

## TODO
- [] User authentication
    - [] Firebase social login
        - [] Google
        - [] Facebook
        - [] Email
    - [] Logout
- [] Track Workouts
    - [] Workout history
    - [] Current progression
- [] Track current workout
    - [] Reps per set
    - [] Active/rest timer
- [] Modify workout preferences
    - [] Progression
    - [] Rest time
    - [] Change routine
- [] Sections
    - [] Routines
        - [] Beginner
        - [] Intermediate
    - [] Help
    - [] Settings
        - [] User details
        - [] Workout preferences
        - [] Reset workout details
        - [] Logout

## File structure
###  Section
This contains multiple pages.
E.g Workout section
- Pages
    - Workout history
    - Routines
    - Current routine
    - Progressions
### Page
This contains multiple components, that together produce the functionality of the page.
E.g Current workout
- Components
    - Step in the routine
    - Workout demonstration
    - Workout information
    - Navigation/ Controls
    - Exercise Progress
    - Progression selection
### Component
These perform a single task and are used in conjunction with eachother to perform the desired page functionality.
These should be dynamic and data driven. There should be no static hard-coding.
E.g Workout timer
- Functionality
    - Display countdown information
        - Countdown to zero
        - Display the remaining time
        - Display a progress indicator
        - Emit countdown events