const myFunc = async () => {
  // Some code here
};

// Or :

async function myFunc() {
  // Some code here
}








const myFunc = async () => {
  const response = await getSomeData(); // getSomeData here returns a promise
  const data = await getAnotherData(response); // getAnotherData returns a promise as well
  console.log(data);
};






const myFunc = async () => {
  try {
    // Code that we run to retrieve data
  } catch(error) {
    // Will run if anything goes wrong in the try block
  }
};