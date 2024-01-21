import axios from "axios";

export async function getCategoryProblems(category) {
    let responseInfo;
    let responseImage
    let problems =[]

    await axios.get("/api/problems/info/category/"+category[3].label)
        .then(response => {responseInfo=response.data})
        .catch(error => console.log(error));
    
    await axios.get("/api/problems/image/category/"+category[3].label)
        .then(response => {responseImage=response.data.image.map(element=>element.body);})
        .catch(error => console.log(error));
    

    for (let i = 0; i < responseInfo.length; i++) {
        const problem = { ...responseInfo[i], image: 'data:image/jpeg;base64,' + responseImage[i]};
        problems.push(problem);
    }

    return problems;
}

export async function getProblem(pid) {
    let info;
    let img;

    await axios.get(`/api/problems/info/pid/${pid}`)
        .then(response => info = response.data)
        .catch(error => console.log(error));

    await axios.get(`/api/problems/image/pid/${pid}`, {
        responseType:'blob'
    })
        .then(response => img = URL.createObjectURL(response.data))
        .catch(error => console.log(error));

    let data = {
        ...info,
        image: img
    }
    
    return data;
}

export async function getSimilarProblems(pid) {
    let responseInfo;
    let responseImage
    let problems =[]

    await axios.get(`/api/problems/similar/info/${pid}`)
        .then(response => {responseInfo=response.data})
        .catch(error => console.log(error));
    
    await axios.get(`/api/problems/similar/image/${pid}`)
        .then(response => {responseImage=response.data.image.map(element=>element.body);})
        .catch(error => console.log(error));
    

    for (let i = 0; i < responseInfo.length; i++) {
        const problem = { ...responseInfo[i], image: 'data:image/jpeg;base64,' + responseImage[i]};
        problems.push(problem);
    }

    return problems;
}