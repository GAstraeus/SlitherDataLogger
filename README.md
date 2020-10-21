# Slither Data Scraper & Logger
---
These tools will allow you to scrape and log game scores and metrics while you play the online game Slither.io


## Setup
### Installing Chrome Extension 
1. In Google Chrome Browser navigate to the _Manage Extensions_ browser settings
2. Select the _Load unpacked_ button 
3. Select and Load the Folder _SlitherScraper_ in this repo

### Setting up Python Server and Metrics Logger
This project uses Python 3 and requires it to be installed from the https://www.python.org/ website
It is recommended to use a virtual environment for this project
1. Install required packages using `pip intall -r requiremnts.txt`
2. Run the python server using `python save_data.py`

##Using the app
1. Run the python server using `python save_data.py`
2. Goto http://slither.io/
3. Click _Play_ button
4. Open up the Chrome SlitherScraper Extension and Click the Start Button to start logging your in game statistics 
*note that you need to click play before you start the extension. The extension will automatically pause in between lives/game rounds. 
5. To stop logging simply close the game

## Known Issues
* Button to toggle logging on and off in extension only has the ability to start logging and is currently unable to toggle logging off. To stop game logging simply close out of the game. 