# WordWise
Empowering students, one word at a time – learn, track, and grow your vocabulary effortlessly.

### Overview
WordWise is a lightweight and innovative vocabulary-building app tailored for high school students. The app combines simplicity with unique features to help students expand their vocabulary, track learning progress, and test retention through engaging quizzes.

### Features
1. Landing Page

2. Word Bank
    A personalized space to add new words, their meanings, and types (noun, verb, etc.).
    Provides an organized overview of all words learned.
    Categorize words (e.g., SAT, science, general)

3. Insights Dashboard
   A Pie Chart visualizing the distribution of word types.
   A Line Graph tracking the number of words learned over time.

4. Random Quiz Generator: 
   Creates multiple-choice or fill-in-the-blank quizzes from the user’s word bank to reinforce retention.

---
### **1. Landing Page**(First ever page)
#### **Features**:
- Website title and tagline
- Button to home page(input screen)

#### **Frontend (React.js)**: 
  Only frontend is needed for this page.

### **2. Input Screen** (Add a New Word)
#### **Features**:
- **Word Input Field**: Text box to enter the word.
- **Meaning Input Field**: Text box for the definition of the word.
- **Word Type Dropdown**: A dropdown menu for selecting the word type (e.g., Noun, Verb, Adjective).
- **Submit Button**: To save the new word to the word bank.
  
#### **Backend (Flask/Python)**:
- Endpoint to receive and save new words along with their meanings and types to the database or JSON file.
- Data validation to ensure input is not empty or malformed.
  
#### **Frontend (React.js)**:
- Form design for word, meaning, and type input fields.
- Dropdown component for word types (could use a library like `react-select`).
- Button to submit and add the word to the database.

---

### **3. Insights Dashboard**
#### **Features**:
- **Pie Chart**: Displays the distribution of word types (Nouns, Verbs, Adjectives, etc.).
- **Line Graph**: Tracks the total number of words learned over time (e.g., days, weeks).
- **Stats Section**: Shows total words learned, most frequent word types, etc.
  
#### **Backend (Flask/Python)**:
- Calculate the distribution of word types and the total number of words learned.
- Use **Pandas** to organize the data for the charts (group by word type and track word count).
  
#### **Frontend (React.js)**:
- Display charts using a library like `Chart.js` or `React-Chartjs-2`.
- Use the React state to store and update word type distribution and word count over time.

---

### **4. Quiz Generator**
#### **Features**:
- **Random Word Selection**: Picks a random word from the word bank for the quiz.
- **Quiz Format**: Could be either multiple choice or fill-in-the-blank.
- **Question Display**: Shows the question (e.g., "What is the meaning of [word]?").
- **Answer Options**: Shows possible answers for multiple choice or an input field for fill-in-the-blank.
- **Result Feedback**: Provides correct/incorrect feedback for the user's answers.
  
#### **Backend (Flask/Python)**:
- Endpoint to retrieve a random word from the word bank.
- Logic to generate the quiz questions from the word data (could randomize options for multiple choice).
- Endpoint to verify user answers and give feedback.
  
#### **Frontend (React.js)**:
- Dynamic display of the quiz question and answer options.
- Button to submit answers and check for correctness.
- Feedback messages showing correct or incorrect answers.

---

### **General Additional Considerations**:
- **State Management**: Use React state to manage data across different pages. You can use **useState** and **useEffect** hooks to handle dynamic data changes (e.g., new words, chart updates).
- **API Routes**: Set up Flask routes to handle data from the frontend (POST for submitting new words, GET for fetching word data for charts and quizzes).
- **UI/UX**: Make sure the UI is simple, intuitive, and visually appealing. Keep it responsive so it works well on mobile and desktop.
- **Database or JSON**: Decide how you want to store data. Since this is an MVP, using **JSON** for storing words and quiz data could be enough, but if you scale later, **SQLite** could be useful.

---

### Tech Stack
- **Frontend**: React.js for building UI components, managing state, and rendering dynamic data, HTML, CSS.
- **Backend**: Python (Flask) for creating endpoints, processing data, and serving the frontend (with a focus on Pandas, NumPy, Matplotlib).
- **Data Visualization**: Matplotlib for creating interactive charts.
- **Database**: JSON for simple storage of word data or SQLite if you need more structure.
- **Styling**: Use CSS or a framework like **Tailwind** for easy styling or **styled-components** for React-based styling.


### Usage
 Adding Words: Navigate to the "Add Word" section and input the word, meaning, and type.

 Insights Dashboard: View visualizations of your learning progress in the "Insights" section.

 Quizzes: Click "Generate Quiz" to test your retention with random quizzes.


### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
For any questions or feedback, reach out to:

Developer: Ewa 
GitHub: ewa-edun
LinkedIn: Oluwadamilola Edun

# Happy Learning!