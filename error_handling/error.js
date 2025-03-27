try{
    alertt("Welcome")
}
catch(er){
    console.log("something wrong",er);
}
finally{
    console.log("this finally block will always run either error is catched or not!")
}


try{
    
    throw new error("yeah sorry...")
    
}
catch(e){
    console.log(e);
}