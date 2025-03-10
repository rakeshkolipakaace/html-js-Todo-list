const pr = new Promise((resolve, reject) => {
    let x = 12;
    if (x == 2) {
        resolve("Success");
    } else {
        reject("Error");
    }
});

async function executePromise() {
    try {
        let message = await pr;
        console.log(message);
    } catch (err) {
        console.log("Error:", err);
    }
}

executePromise();
