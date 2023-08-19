export const titleFormatter = title =>{
    const words = title.split(" ")
    if(words.length>1){
        if(words[0]==="React"){
            return `${words[1]} ${words.length>2? words[2]: ""}` 
        }else{
            return title
        }
    }else{
        return title
    } 
}