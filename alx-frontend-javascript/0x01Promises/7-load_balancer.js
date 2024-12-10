export default async function loadBalancer(chinaDownload, USDownload) {

    const allPath = [chinaDownload, USDownload];

    const bestPath = await Promise.any(allPath);

    return bestPath;
    
}