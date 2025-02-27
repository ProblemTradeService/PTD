import axios from "axios";

export async function getCategoryProblems(category) {
    try {
        const [infoResponse, imageResponse] = await Promise.all([
            axios.get("/api/problems/info/category/" + category[3].label),
            axios.get("/api/problems/image/category/" + category[3].label)
        ]);

        const responseInfo = infoResponse.data;
        const responseImage = imageResponse.data.image 
            ? imageResponse.data.image.map(element => element.body) 
            : [];

        const problems = responseInfo.map((info, index) => ({
            ...info,
            image: responseImage[index] ? 'data:image/jpeg;base64,' + responseImage[index] : null
        }));

        return problems;
    } catch (error) {
        console.log(error);
        return []; 
    }
}

export async function getProblem(pid) {
    try {
        const [infoResponse, imgResponse] = await Promise.all([
            axios.get(`/api/problems/info/pid/${pid}`),
            axios.get(`/api/problems/image/pid/${pid}`, { responseType: 'blob' })
        ]);

        const info = infoResponse.data;
        const img = URL.createObjectURL(imgResponse.data);

        return {
            ...info,
            image: img
        };
    } catch (error) {
        console.log(error);
        return {};
    }
}

export async function getSimilarProblems(pid) {
    try {
        const [infoResponse, imageResponse] = await Promise.all([
            axios.get(`/api/problems/similar/info/${pid}`),
            axios.get(`/api/problems/similar/image/${pid}`)
        ]);

        const responseInfo = infoResponse.data;
        const responseImage = imageResponse.data.image
            ? imageResponse.data.image.map(element => element.body)
            : [];

        const problems = responseInfo.map((info, index) => ({
            ...info,
            image: responseImage[index] ? 'data:image/jpeg;base64,' + responseImage[index] : null
        }));

        return problems;
    } catch (error) {
        console.log(error);
        return [];
    }
}


export async function getPlagiarismProblems(pid) {
    try {
        const [infoResponse, imageResponse] = await Promise.all([
            axios.get(`/api/problems/plagiarize/info/${pid}`),
            axios.get(`/api/problems/plagiarize/image/${pid}`)
        ]);

        const responseInfo = infoResponse.data;
        const responseImage = imageResponse.data.image
            ? imageResponse.data.image.map(element => element.body)
            : [];

        const problems = responseInfo.map((info, index) => ({
            ...info,
            image: responseImage[index] ? 'data:image/jpeg;base64,' + responseImage[index] : null
        }));

        return problems;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getUserBalance(userName) {
    try {
        const response = await axios.get(`/api/userBalance/${userName}`);
        return response.data.balance;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getUserProblems(userName) {
    try {
        const response = await axios.get(`/api/problems/my/${userName}/보유중`);
        if (Object.keys(response.data).length === 0) {
            return [];
        }

        const idList = response.data.map(element => element.id);

        const problems = await Promise.all(idList.map(getProblem));

        return problems;
    } catch (error) {
        console.log(error);
        return [];
    }
}
