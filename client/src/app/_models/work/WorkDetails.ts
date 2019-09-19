export interface WorkDetails {
    type: string;
    videoURL?: string;
    title?: string;
    description?: string;
    author?: boolean;
    border?: boolean;
    imgURL?: string;
    imageHeight?: string;
    alignment?: string;
    verticalAlignment?: string;
    objectFit?: string;
    size?: string;
    sliders?: [
        {
            imgURL: string;
        }
        ];
    col1: {
        title: string;
        description: string
    };
    col2: {
        title: string;
        description: string
    };
    col3: {
        title: string;
        description: string
    };
}
