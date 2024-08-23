const names = [
  'Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 
  'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 
  'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Ze', 
  'Zechariah', 'Zeek', 'Zeeshan', 'Zeid', 'Zein', 'Zen', 'Zendel', 'Zenith', 'Zennon', 'Zeph', 
  'Zerah', 'Zhen', 'Zhi', 'Zhong', 'Zhuo', 'Zi', 'Zidane', 'Zijie', 'Zinedine', 'Zion', 
  'Zishan', 'Ziya', 'Ziyaan', 'Zohaib', 'Zohair', 'Zoubaeir', 'Zubair', 'Zubayr', 'Zuriel'
];

const thoughtTexts = [
  'How to disagree with someone',
  'iPhone review',
  'How to make money on the App Store',
  'Learn NextJS in five minutes (Not clickbait)',
  'Movie trailer review',
  'Hello world post',
  'Another possible solution to the algorithm problem',
  'Apology letter',
  'Startup pitch submission',
];

const possibleReactions = [
  'I disagree!',
  'This was awesome',
  'Thank you for the great content',
  'Please check out my response',
  'Like and subscribe to my channel please',
  'Reply: The side effects of in-app purchases on digital marketplaces',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random full name (used for generating usernames)
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random thoughts that we can add to the database. Includes reactions.
const getRandomThought = () => getRandomArrItem(thoughtTexts);

// Create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(possibleReactions),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThought, getThoughtReactions };
