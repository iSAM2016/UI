const  catIn = (targer, parent)=>{
  let arr = [];
  let parentNode = targer;

  while( parentNode && parentNode !== document.body){
     arr.push( parentNode );
     parentNode = parentNode.parentNode
  }
  return arr.indexOf(parent) !== -1
}

export {
    catIn
}
