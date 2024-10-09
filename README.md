# Repeated Words Finder

This project identifies and counts repeated words in a given text using JavaScript. The script processes a string, tracks word frequencies, and outputs a list of words that appear more than once along with their counts.

## Features

- Counts the occurrences of each word in a text string.
- Outputs words that are repeated, along with their frequency.
- Ignores case sensitivity to ensure words like "This" and "this" are counted together.

## Getting Started

To run this project locally:

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/repeated-words-finder.git
    ```
2. Navigate to the project directory:
    ```bash
    cd repeated-words-finder
    ```
3. Open `index.html` in a web browser and open the console to view the results of the script.

## Usage

1. Modify the `text` variable within the `<script>` tag in `index.html` to test with different input strings.
2. Open the browser console to view the results. The script outputs an object showing repeated words and their counts.

### Example

For the input `"This is a test. This test is only a test."`, the output will be:
```javascript
{ this: 2, test: 3, is: 2, a: 2 }
