export interface Post {
    _id: string;
    title: string;
    // comments: Comment[];
    description:string;
    mainImage:{
        asset:{
            url:string;
        };
    };
    slug:{
        current: string;
    };
    body: [object];
}