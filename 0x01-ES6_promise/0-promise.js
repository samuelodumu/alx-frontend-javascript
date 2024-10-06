export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve, reject) => {
    const taskDone = true;
    if (taskDone) {
      resolve();
    } else {
      reject();
    }
  });
  return myPromise;
}
