module.exports = function check(str, bracketsConfig) {
  
  let openedPar=[];
  let closedPar=[];

  let stackOpened=[];
  


  for(let i=0; i<bracketsConfig.length; i++){
    let arrConf=bracketsConfig[i]
    openedPar.push(arrConf[0]);
    closedPar.push(arrConf[1]);
    
  }

  let strToArray=str.split('');

  for(let i=0; i<strToArray.length; i++){
    if(openedPar.indexOf(strToArray[i])>=0&&closedPar.indexOf(strToArray[i])<0){
      stackOpened.push(openedPar[openedPar.indexOf(strToArray[i])]);
    }

    if(openedPar.indexOf(strToArray[i])>=0&&closedPar.indexOf(strToArray[i])>=0){
      if(stackOpened.lastIndexOf((strToArray[i]),[i-1])<0){
        stackOpened.push(strToArray[i]);
      }else{
         stackOpened.pop();
      }
    }

    if(openedPar.indexOf(strToArray[i])<0&&closedPar.indexOf(strToArray[i])>=0){
      if(stackOpened[stackOpened.lenght-1]==closedPar[openedPar.indexOf(strToArray[i])]){
        stackOpened.pop();
      }


    }

  }

 if(stackOpened==0){ 
   return true;}
   else{
     return false;
   }
 } 
