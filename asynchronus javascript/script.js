  console.log("one");
  console.log("two");
  
  setTimeout( () =>{ console.log("hello");
  },4000);

 console.log("three"); 
 console.log("four");


 //================================= callback function ==================//

 function sum(a,b){
    console.log(a+b);
 }

 function calculator(a,b,sumcallback){
    sumcallback(a,b);
 }
  calculator(1,2,sum);

  //=====================================================================

  const hello = () =>{
    console.log("hello")
  }

  setTimeout(hello,3000);

  //========================================= callback hell ===================================//

  let age =19;
  if(age>=18){
    if(age>=60){
        console.log("senior");
    } else{
        console.log("middle")
    }
  }else{
    console.log("child");
  }


  //========================================================================================

  function getdata(dataid,getnextdata){
   setTimeout(()=>{
      console.log("data :",dataid);
      if(getnextdata){
        getnextdata();
      }
     
   },2000);
}
/// ============================== callback hell ======================
// nested callbacks stacked below one another forming pyramid structure //
getdata(1,() => {
  getdata(2,()=>{
    getdata(3);
  });
})

//==================================== promises ===========================//

/* let promise = new Promise((resolve,reject)=>{
    console.log("i am a promise");
   // resolve("success");
    reject("some error occured");
}); */


function getdata(dataid,getnextdata){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data :",dataid);
            resolve("success");
            if(getnextdata){
              getnextdata();
            }
           
         },2000);
      })
    }
   

const getpromise = ()=>{
   return new Promise((resolve,reject)=>{
        console.log("i am a promise");
    //  resolve("success");
    reject("error");

})
};

/*
let promise = getpromise();
promise.then((res) => {
    console.log("promise fulfilled",res)
});

promise.catch((err)=>{
  console.log("rejected",err);
})
*/

//=======================================================================================================

/* function asyncFunc(){
    return new((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some data");
            resolve("success");
        },4000);

    });
}
console.log("fetching data one")
let p1 = asyncFunc();
p1.then((res)=>{
    console.log(res);
})

*/
//============================= Async-Await ================================//

// async function myfunc(){}==========>>> syntax


 async function hellooo(){
  console.log("hello");
}


function api(){
  return new Promise((resolve,reject)=> {
    setTimeout(()=>{
      console.log("whether data");
    resolve(200);
    },2000);
  });
}

async function getweatherData(){
  await api();
}


function getdata(dataid,getnextdata){
  return new Promise((resolve,reject) =>{
      setTimeout(()=>{
          console.log("data :",dataid);
          resolve("success");
          if(getnextdata){
            getnextdata();
          }
         
       },2000);
    })
  }

  async function getalldata(){
    console.log("geting data1");
    await getdata(1);
    console.log("geting data2");
    await getdata(2);
    console.log("geting data3");
    await getdata(3);
    console.log("geting data4");
    await getdata(4);
    console.log("geting data5");
    await getdata(5);
    console.log("geting data6");
    await getdata(6);
  }
// ============================== this is iffi =>> which executes at without calling============//
  (async function (){
    console.log("geting data1");
    await getdata(1);
    console.log("geting data2");
    await getdata(2);
    console.log("geting data3");
    await getdata(3);
    console.log("geting data4");
    await getdata(4);
    console.log("geting data5");
    await getdata(5);
    console.log("geting data6");
    await getdata(6);
  })();


  /// ================================= fetch api ==========================================//

  // API => application programming interface ==>