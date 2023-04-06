import client from "@sanity/client"

export default client({
    projectId: "3msprrd6",
    dataset:"production",
    useCdn: true,
    apiVersion:"2023-03-23",

})