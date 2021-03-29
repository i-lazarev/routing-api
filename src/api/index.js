export const getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// export const getUserDetails = (id) => {
//     return new Promise((resolve, reject) => {
//       fetch(`https://jsonplaceholder.typicode.com/user/${id}`)
//         .then((response) => {
//           if (response.status === 200) {
//             response
//               .json()
//               .then((data) => {
//                 resolve(data);
//               })
//               .catch((error) => {
//                 reject(error);
//               });
//           } else {
//             reject(response.status);
//           }
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   };
