

export const fetchPostAPI = () => {

   // console.log('aryan');
   try {
      return new Promise((resolve, reject) => {
         fetch("http://172.20.10.7:8000/post")
         .then((response) => response.json())
         .then((data) =>  resolve(data))
         .catch((error) => reject(error))
      })
   } catch (e) {
      reject(e);
   }
}

export const AddAPI = (data) => {

   // console.log('aryan');
   try {
      return new Promise((resolve, reject) => {
         fetch("http://192.168.2.116:8000/post",{
            method:'POST',
            headers:{
               'content-Type':'application/json'
            },
            body: JSON.stringify(data),
         })
         .then((response) => response.json())
         .then((data) =>  resolve(data))
         .catch((error) => reject(error))
      })
   } catch (e) {
      reject(e);
   }
}

export const DeletPostAPI = (data) => {

   // console.log('aryan');
   try {
      return new Promise((resolve, reject) => {
         fetch("http://192.168.2.116:8000/post",{
            method:'POST',
            headers:{
               'content-Type':'application/json'
            },
            body: JSON.stringify(data),
         })
         .then((response) => response.json())
         .then((data) =>  resolve(data))
         .catch((error) => reject(error))
      })
   } catch (e) {
      reject(e);
   }
}