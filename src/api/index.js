export default function getInitData() {
    return new Promise((resolve, reject) => {
        resolve({
            status: 'ok'
        })
        reject({
            status: 'no'
        })
    })
}
