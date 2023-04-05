// module.exports = () => {
const fs = require('fs');

const data = fetch('https://randomuser.me/api?results=50')
  .then((res) => res.json())
  .then((data) => {
    dirname = __dirname.replace('/module', '');
    fs.writeFileSync(`${dirname}/dev-data/allUserData.json`, JSON.stringify(data));
  })
  .catch((err) => {
    console.log(new Error(err));
  });
// };
