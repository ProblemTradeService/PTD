import axios from 'axios';

export async function postProblem(target, category) {

    let result;

    // send meta data
    let meta = { 
        "level": target.diff.value, 
        "price": target.price.value, 
        "owner": "김철수", 
        "category": category[3].label
    }

    await axios.post("/api/problems", meta)
        .then(response => result = response.data.id)
        .catch(error => console.log(error))
    
    // send problem images
    const formdata = new FormData();
    formdata.append("problemFile", target.problemImage.files[0]);
    formdata.append("solutionFile", target.solutionImage.files[0]);
    
    await axios.post("/api/problems/image",formdata, {headers: {"Content-Type": "multipart/form-data"}})
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    return result;
}