module.exports = function check(str, bracketsConfig) {
  
  let openedPar=[]; //конфигурация открывающих скобок
  let closedPar=[]; //конфигурация закрывающих скобок

  let stackOpened=[]; //стек открывающих скобок
  let stackClosed=[]; //стек закрывающих скобок
  
  for(let i=0; i<bracketsConfig.length; i++){
    let arrConf=bracketsConfig[i]
    openedPar.push(arrConf[0]);
    closedPar.push(arrConf[1]);
  }

  let strToArray=str.split('');

  for(let i=0; i<strToArray.length; i++){
    let pad=strToArray[i]; //текущая скобка в переборе str

    if(openedPar.indexOf(pad)>=0&&closedPar.indexOf(pad)<0){ //если открывающая непарная
      stackOpened.push(openedPar[openedPar.indexOf(pad)]);
    }

    if(openedPar.indexOf(pad)>=0&&closedPar.indexOf(pad)>=0){// парная
      if(stackOpened.lastIndexOf((pad),[i-1])<0){
        stackOpened.push(pad);
      }else{
        if(stackOpened[stackOpened.length-1]==pad){
         stackOpened.pop();
        }
      }
    }

    if(openedPar.indexOf(pad)<0&&closedPar.indexOf(pad)>=0){//закрывающая
      if(stackOpened[stackOpened.length-1]==openedPar[closedPar.indexOf(pad)]){
        stackOpened.pop();
      }else{
        stackClosed.push(pad);//в накопитель, если лишняя закрывающая
      }
    }
 }

if(stackOpened.length==0&&stackClosed.length==0){
  return true;
}else{
  return false;
}

};